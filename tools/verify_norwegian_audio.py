"""Read-only progress and integrity audit for the 70 Norwegian Puck tracks.

    python tools/verify_norwegian_audio.py                 # progress, exit 1 until complete
    python tools/verify_norwegian_audio.py --allow-incomplete
    python tools/verify_norwegian_audio.py --decode        # decode all completed MP3/OGG files
    python tools/verify_norwegian_audio.py --loudness      # remeasure actual MP3 loudness

This does not contact the provider or alter audio, scripts, or manifests. Measured provider
charges are summed from cached chunk receipts, including chunks of an unfinished track.
Timing and loudness are warning checks, not proof that every word was spoken correctly.
"""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import sys

sys.path.insert(0, str(Path(__file__).resolve().parent))
from course import ROOT
import narration_plan
import narrate
import normalise
import tts

ROOT_PATH = Path(ROOT)
AUDIO = ROOT_PATH / 'assets' / 'audio'
WORK = ROOT_PATH / 'voicelab' / 'puck-course'


def read_json(path):
    try:
        return json.loads(path.read_text(encoding='utf-8'))
    except (OSError, ValueError) as error:
        raise ValueError(f'{path}: {error}') from error


def sha256(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()


def decode(path):
    result = subprocess.run(
        [tts.ffmpeg(), '-v', 'error', '-xerror', '-i', str(path), '-f', 'null', '-'],
        capture_output=True, text=True)
    return result.stderr.strip() if result.returncode else None


def charged_chunks():
    total = 0.0
    count = 0
    unpriced = []
    seen_ids = set()
    errors = []
    for path in sorted(WORK.glob('*/*/[0-9][0-9][0-9]-*.json')):
        try:
            entry = read_json(path)
            generation_id = entry.get('generation_id')
            if not generation_id:
                errors.append(f'{path}: missing generation ID')
                continue
            if generation_id in seen_ids:
                errors.append(f'{path}: duplicate generation ID {generation_id}')
                continue
            seen_ids.add(generation_id)
            count += 1
            if entry.get('cost_usd') is None:
                unpriced.append(str(path.relative_to(ROOT_PATH)))
            else:
                cost = float(entry['cost_usd'])
                if cost < 0:
                    errors.append(f'{path}: negative charge')
                else:
                    total += cost
        except (ValueError, TypeError) as error:
            errors.append(str(error))
    return round(total, 5), count, unpriced, errors


def audit_track(row, decode_audio=False, measure_loudness=False):
    stem = row['region']
    key = 'no-intro' if row['kind'] == 'introduction' else 'no-' + row['id'].rsplit('-', 1)[1]
    label = f'{stem}/{key}'
    folder = AUDIO / stem
    meta_path = WORK / stem / key / 'track.json'
    manifest_path = folder / 'manifest.json'
    files = {ext: folder / f'{key}{ext}' for ext in ('.txt', '.mp3', '.lo.mp3', '.ogg')}
    missing = [ext for ext, path in files.items() if not path.is_file() or not path.stat().st_size]
    if not meta_path.is_file():
        missing.append('track.json')
    if not manifest_path.is_file():
        missing.append('manifest.json')
    if missing:
        return False, [f'{label}: missing {", ".join(missing)}'], [], None

    errors = []
    warnings = []
    try:
        script = files['.txt'].read_text(encoding='utf-8')
        meta = read_json(meta_path)
        manifest = read_json(manifest_path).get(key)
        if not isinstance(manifest, dict):
            return False, [f'{label}: missing manifest entry'], [], None
        expected_hash = row['script_sha256']
        for source, observed in (('script', sha256(script)),
                                 ('track metadata', meta.get('script_sha256')),
                                 ('manifest', manifest.get('script_sha256'))):
            if observed != expected_hash:
                errors.append(f'{label}: {source} hash differs from narration plan')
        if (meta.get('id'), meta.get('region'), meta.get('key')) != (row['id'], stem, key):
            errors.append(f'{label}: track identity differs from narration plan')
        if len(script.split()) != row['words'] or len(script) != row['characters']:
            errors.append(f'{label}: script length differs from narration plan')
        if meta.get('words') != row['words']:
            errors.append(f'{label}: metadata word count differs')
        for ext, field in (('.mp3', 'mp3_bytes'), ('.lo.mp3', 'low_bytes'), ('.ogg', 'ogg_bytes')):
            size = files[ext].stat().st_size
            if meta.get(field) != size:
                errors.append(f'{label}: {ext} size differs from track metadata')
            manifest_field = {'mp3_bytes': 'bytes', 'low_bytes': 'lo_bytes',
                              'ogg_bytes': 'ogg_bytes'}[field]
            if manifest.get(manifest_field) != size:
                errors.append(f'{label}: {ext} size differs from manifest')
        expected_voice = f'{narrate.PUCK_MODEL}/{narrate.PUCK_VOICE}'
        if manifest.get('voice') != expected_voice or manifest.get('delivery') != 'puck':
            errors.append(f'{label}: manifest is not the approved Puck delivery')
        if key == 'no-intro':
            if manifest.get('kind') != 'region-introduction':
                errors.append(f'{label}: introduction kind missing')
        elif any(manifest.get(name) != expected for name, expected in
                 (('intro', narrate.STANDARD_INTRO), ('drop', narrate.STANDARD_DROP),
                  ('outro', narrate.STANDARD_OUTRO))):
            errors.append(f'{label}: spoken format differs from title/prose-only plan')
        cost = float(meta['cost_usd'])
        if cost < 0 or abs(float(manifest.get('cost', -1)) - cost) > 0.00002:
            errors.append(f'{label}: invalid or mismatched provider cost')
        if len(meta.get('generation_ids', [])) != meta.get('chunks') or not meta.get('chunks'):
            errors.append(f'{label}: generation IDs/chunk count mismatch')
        receipts = sorted((WORK / stem / key).glob('[0-9][0-9][0-9]-*.json'))
        if len(receipts) != meta.get('chunks'):
            errors.append(f'{label}: provider receipt count differs from track metadata')
        else:
            entries = [read_json(path) for path in receipts]
            if [entry.get('generation_id') for entry in entries] != meta.get('generation_ids'):
                errors.append(f'{label}: provider generation IDs differ from track metadata')
            if any(entry.get('cost_usd') is None for entry in entries):
                errors.append(f'{label}: a provider charge is not yet measured')
            elif abs(sum(float(entry['cost_usd']) for entry in entries) - cost) > 0.00002:
                errors.append(f'{label}: track cost differs from provider receipts')
        seconds = tts.duration(str(files['.mp3']))
        if seconds is None or seconds < 5:
            errors.append(f'{label}: MP3 duration missing or implausibly short')
        else:
            for source, observed in (('track metadata', meta.get('seconds')),
                                     ('manifest', manifest.get('seconds'))):
                if observed is None or abs(float(observed) - seconds) > 1.0:
                    errors.append(f'{label}: {source} duration differs from MP3')
            wpm = row['words'] * 60 / seconds
            if meta.get('wpm') is None or abs(float(meta['wpm']) - wpm) > 2:
                errors.append(f'{label}: metadata word rate differs from audio')
            if wpm < 95 or wpm > 190:
                warnings.append(f'{label}: unusual pace {wpm:.0f} wpm; listen for truncation or pauses')
        lufs = float(meta['output_lufs'])
        if abs(lufs + 19) > 1.5:
            warnings.append(f'{label}: metadata loudness {lufs:.1f} LUFS, target -19')
        if float(meta['output_true_peak_db']) > -1.0:
            warnings.append(f'{label}: metadata true peak above -1 dB')
        if decode_audio:
            for ext in ('.mp3', '.ogg'):
                problem = decode(files[ext])
                if problem:
                    errors.append(f'{label}: {ext} decode failed: {problem[:180]}')
        if measure_loudness:
            measured = normalise.measure(str(files['.mp3']))
            if not measured:
                errors.append(f'{label}: cannot measure loudness')
            else:
                actual = float(measured['input_i'])
                if abs(actual - lufs) > 0.5 or abs(actual + 19) > 1.5:
                    warnings.append(f'{label}: measured {actual:.1f} LUFS; metadata {lufs:.1f}')
        return not errors, errors, warnings, cost
    except (OSError, ValueError, TypeError, KeyError) as error:
        return False, [f'{label}: invalid production record: {error}'], warnings, None


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--allow-incomplete', action='store_true',
                        help='exit successfully when tracks are missing, for progress reporting')
    parser.add_argument('--decode', action='store_true', help='fully decode completed MP3 and OGG')
    parser.add_argument('--loudness', action='store_true', help='remeasure completed MP3 files')
    args = parser.parse_args()
    try:
        plan = read_json(Path(narration_plan.OUTPUT))
        rows = [row for row in plan['tracks'] if row['lang'] == 'no']
        if len(rows) != 70 or len({row['id'] for row in rows}) != 70:
            raise ValueError('narration plan does not contain 70 unique Norwegian tracks')
        if narration_plan.serialized(narration_plan.build_plan()) != Path(narration_plan.OUTPUT).read_text(encoding='utf-8'):
            raise ValueError('narration plan differs from current course source')
    except (OSError, ValueError, KeyError) as error:
        print(f'PLAN ERROR: {error}')
        return 1

    good = 0
    errors = []
    warnings = []
    track_cost = 0.0
    for row in rows:
        okay, problems, notes, cost = audit_track(row, args.decode, args.loudness)
        good += okay
        errors.extend(problems)
        warnings.extend(notes)
        if okay and cost is not None:
            track_cost += cost
    charged, chunks, unpriced, receipt_errors = charged_chunks()
    errors.extend(receipt_errors)
    print(f'Norwegian Puck: {good}/70 complete, {70-good} incomplete')
    print(f'Provider receipts: {chunks} chunks, ${charged:.5f} measured, '
          f'{len(unpriced)} unpriced; completed-track total ${track_cost:.5f}')
    for problem in errors:
        if args.allow_incomplete and ': missing ' in problem:
            continue
        print('ISSUE ' + problem)
    for item in unpriced:
        print('UNPRICED ' + item)
    for warning in warnings:
        print('WARNING ' + warning)
    if good == 70 and not errors and not unpriced:
        print('PASS: file, script, manifest, metadata and provider receipt checks')
        print('Listening review is still required for pronunciation, omissions and joins.')
        return 0
    # Progress mode tolerates absent tracks; it must still fail if an existing output is corrupt.
    serious = [problem for problem in errors if ': missing ' not in problem]
    return 0 if args.allow_incomplete and not serious and not unpriced else 1


if __name__ == '__main__':
    raise SystemExit(main())
