"""Guarded, local-only correction for unusually quiet completed Norwegian Puck tracks.

    python tools/correct_no_loudness.py                  # list candidates; no changes
    python tools/correct_no_loudness.py --apply          # after narration is finished
    python tools/correct_no_loudness.py --region punjab --only no-4 --apply

No provider calls are made. Each selected MP3 is encoded into a temporary directory, measured,
and rejected unless it reaches -19 +/- 0.6 LUFS with true peak <= -1 dBTP. Low MP3 and OGG
are built from the accepted MP3. Audio, track metadata and region manifest are then replaced
as one rollback-protected operation. Run only when the recording producer is stopped.
"""
import argparse
import hashlib
import json
import os
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile

sys.path.insert(0, str(Path(__file__).resolve().parent))
from course import REGIONS, ROOT
import narration_plan
import narrate
import normalise
import tts

ROOT_PATH = Path(ROOT)
AUDIO = ROOT_PATH / 'assets' / 'audio'
WORK = ROOT_PATH / 'voicelab' / 'puck-course'
def correction_filter(ceiling):
    return ('loudnorm=I=-18.2:TP=-1.5:LRA=7:linear=false,'
            f'alimiter=limit={ceiling}:level=false:attack=5:release=50')


CEILINGS = (0.58, 0.55, 0.52, 0.48, 0.44)
FALLBACK_FILTERS = (
    'acompressor=threshold=-18dB:ratio=2:attack=5:release=100:makeup=1,'
    'loudnorm=I=-18:TP=-5:LRA=7:linear=false',
)
SOURCE_THRESHOLD = -20.5
TARGET = -19.0
TOLERANCE = 0.6
MAX_TRUE_PEAK = -1.0


def read_json(path):
    return json.loads(path.read_text(encoding='utf-8'))


def serialized(data, indent):
    return (json.dumps(data, ensure_ascii=False, indent=indent) + '\n').encode('utf-8')


def digest(data):
    return hashlib.sha256(data).hexdigest()


def accept(lufs, true_peak):
    return abs(lufs - TARGET) <= TOLERANCE and true_peak <= MAX_TRUE_PEAK


def replace_many(pairs, backup_dir):
    """Replace prepared files; restore originals if any replacement fails."""
    backups = []
    for index, (_, destination) in enumerate(pairs):
        backup = backup_dir / f'{index:02d}-{destination.name}.backup'
        shutil.copy2(destination, backup)
        backups.append(backup)
    changed = []
    try:
        for source, destination in pairs:
            os.replace(source, destination)
            changed.append(destination)
    except OSError:
        for destination, backup in zip(changed, backups):
            os.replace(backup, destination)
        raise


def encode_ogg(source, destination):
    subprocess.run([
        tts.ffmpeg(), '-y', '-loglevel', 'error', '-i', str(source), '-ac', '1',
        '-c:a', 'libopus', '-b:a', '12k', '-application', 'voip',
        '-frame_duration', '40', '-vbr', 'on', str(destination),
    ], check=True)


def render(source, destination, filter_expr):
    result = subprocess.run([
        tts.ffmpeg(), '-hide_banner', '-y', '-loglevel', 'error',
        '-i', str(source), '-af', filter_expr, '-ac', '1', '-ar', '48000',
        '-b:a', '48k', '-codec:a', 'libmp3lame', str(destination),
    ], capture_output=True, text=True)
    if result.returncode or not destination.is_file():
        raise RuntimeError(f'correction encode failed: {result.stderr[:300]}')


def verify_decode(path):
    result = subprocess.run([tts.ffmpeg(), '-v', 'error', '-xerror', '-i', str(path),
                             '-f', 'null', '-'], capture_output=True, text=True)
    if result.returncode:
        raise RuntimeError(f'{path.name} failed decode: {result.stderr[:200]}')


def selected_plan():
    frozen = Path(narration_plan.OUTPUT).read_text(encoding='utf-8')
    if narration_plan.serialized(narration_plan.build_plan()) != frozen:
        raise RuntimeError('Narration plan is stale; source review is required before correction')
    plan = json.loads(frozen)
    return {(row['region'], 'no-intro' if row['kind'] == 'introduction'
             else 'no-' + row['id'].rsplit('-', 1)[1]): row
            for row in plan['tracks'] if row['lang'] == 'no'}


def candidate(stem, key, plan):
    folder = AUDIO / stem
    work = WORK / stem / key
    mp3 = folder / f'{key}.mp3'
    low = folder / f'{key}.lo.mp3'
    ogg = folder / f'{key}.ogg'
    script = folder / f'{key}.txt'
    meta_path = work / 'track.json'
    manifest_path = folder / 'manifest.json'
    required = (mp3, low, ogg, script, meta_path, manifest_path)
    if any(not path.is_file() or not path.stat().st_size for path in required):
        return None
    row = plan[(stem, key)]
    meta = read_json(meta_path)
    manifest_bytes = manifest_path.read_bytes()
    manifest = json.loads(manifest_bytes)
    rec = manifest.get(key, {})
    expected = row['script_sha256']
    if (meta.get('script_sha256') != expected or rec.get('script_sha256') != expected
            or digest(script.read_text(encoding='utf-8').encode('utf-8')) != expected):
        raise RuntimeError(f'{stem}/{key}: script hash differs from frozen plan')
    if (rec.get('delivery') != 'puck' or rec.get('voice') != f'{narrate.PUCK_MODEL}/{narrate.PUCK_VOICE}'):
        raise RuntimeError(f'{stem}/{key}: recording is not the approved Puck delivery')
    if abs(float(rec.get('cost', -1)) - float(meta['cost_usd'])) > 0.00002:
        raise RuntimeError(f'{stem}/{key}: provider cost differs between metadata and manifest')
    # Production measured every MP3 after encoding. The final full verifier
    # independently remeasures these values; skip expensive rescans of tracks
    # already recorded above the correction threshold.
    if float(meta['output_lufs']) >= SOURCE_THRESHOLD:
        return None
    measured = normalise.measure(str(mp3))
    if not measured:
        raise RuntimeError(f'{stem}/{key}: cannot measure source MP3')
    lufs = float(measured['input_i'])
    if lufs >= SOURCE_THRESHOLD:
        return None
    return {'stem': stem, 'key': key, 'row': row, 'folder': folder,
            'work': work, 'mp3': mp3, 'low': low, 'ogg': ogg,
            'meta_path': meta_path, 'meta': meta, 'manifest_path': manifest_path,
            'manifest': manifest, 'manifest_digest': digest(manifest_bytes),
            'source_lufs': lufs, 'source_peak': float(measured['input_tp'])}


def correct(item):
    stem, key = item['stem'], item['key']
    # Staging shares a filesystem with the live audio, so os.replace is atomic per file.
    with tempfile.TemporaryDirectory(prefix=f'no-loudness-{stem}-{key}-', dir=AUDIO) as temp:
        stage = Path(temp)
        mp3 = stage / f'{key}.mp3'
        low = stage / f'{key}.lo.mp3'
        ogg = stage / f'{key}.ogg'
        stats = None
        selected_filter = None
        for filter_expr in (*map(correction_filter, CEILINGS), *FALLBACK_FILTERS):
            render(item['mp3'], mp3, filter_expr)
            stats = normalise.measure(str(mp3))
            if not stats:
                raise RuntimeError(f'{stem}/{key}: cannot measure corrected MP3')
            lufs, peak = float(stats['input_i']), float(stats['input_tp'])
            if accept(lufs, peak):
                selected_filter = filter_expr
                break
        if selected_filter is None:
            raise RuntimeError(f'{stem}/{key}: rejected candidate {lufs:.2f} LUFS, '
                               f'{peak:.2f} dBTP; live files unchanged')
        narrate.compress(str(mp3), str(low))
        encode_ogg(mp3, ogg)
        for file in (mp3, low, ogg):
            if not file.stat().st_size:
                raise RuntimeError(f'{stem}/{key}: empty encoded {file.name}')
            verify_decode(file)
        seconds = tts.duration(str(mp3))
        if seconds is None or abs(seconds - float(item['meta']['seconds'])) > 1.0:
            raise RuntimeError(f'{stem}/{key}: corrected duration changed unexpectedly')
        meta = dict(item['meta'])
        meta.update(output_lufs=lufs, output_true_peak_db=peak,
                    mp3_bytes=mp3.stat().st_size, low_bytes=low.stat().st_size,
                    ogg_bytes=ogg.stat().st_size, seconds=seconds)
        meta['postproduction'] = {
            'source_lufs': item['source_lufs'], 'source_true_peak_db': item['source_peak'],
            'filter': selected_filter, 'target_lufs': TARGET,
            'target_true_peak_db': MAX_TRUE_PEAK,
            'output_lra': float(stats['input_lra']),
        }
        manifest = dict(item['manifest'])
        rec = dict(manifest[key])
        rec.update(seconds=seconds, bytes=mp3.stat().st_size, lo_bytes=low.stat().st_size,
                   ogg_bytes=ogg.stat().st_size)
        manifest[key] = rec
        staged_meta = stage / 'track.json'
        staged_manifest = stage / 'manifest.json'
        staged_meta.write_bytes(serialized(meta, 2))
        staged_manifest.write_bytes(serialized(manifest, 1))
        if digest(item['manifest_path'].read_bytes()) != item['manifest_digest']:
            raise RuntimeError(f'{stem}/{key}: manifest changed during preparation; retry after producer stops')
        if read_json(item['meta_path']) != item['meta']:
            raise RuntimeError(f'{stem}/{key}: track metadata changed during preparation')
        replace_many([
            (mp3, item['mp3']), (low, item['low']), (ogg, item['ogg']),
            (staged_meta, item['meta_path']), (staged_manifest, item['manifest_path']),
        ], stage)
        print(f'CORRECTED {stem}/{key}: {item["source_lufs"]:.2f} -> {lufs:.2f} LUFS, '
              f'{peak:.2f} dBTP; provider cost unchanged')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--apply', action='store_true', help='replace accepted live files')
    parser.add_argument('--region', choices=[r['stem'] for r in REGIONS])
    parser.add_argument('--only', choices=['no-intro', 'no-1', 'no-2', 'no-3', 'no-4'])
    args = parser.parse_args()
    plan = selected_plan()
    candidates = []
    for region in REGIONS:
        stem = region['stem']
        if args.region and stem != args.region:
            continue
        for key in ('no-intro', 'no-1', 'no-2', 'no-3', 'no-4'):
            if args.only and key != args.only:
                continue
            item = candidate(stem, key, plan)
            if item:
                candidates.append(item)
                print(f'CANDIDATE {stem}/{key}: {item["source_lufs"]:.2f} LUFS, '
                      f'{item["source_peak"]:.2f} dBTP')
    print(f'{len(candidates)} completed Norwegian tracks below {SOURCE_THRESHOLD:.1f} LUFS'
          + ('' if args.apply else '; dry run, no files changed'))
    if args.apply:
        for item in candidates:
            # A prior correction in this region updates its shared manifest.
            # Refresh the candidate snapshot before preparing the next track.
            fresh = candidate(item['stem'], item['key'], plan)
            if fresh:
                correct(fresh)
    return 0


if __name__ == '__main__':
    raise SystemExit(main())
