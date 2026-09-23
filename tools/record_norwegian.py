"""Record the 70 final Norwegian Puck tracks with resumable chunks and cost accounting.

    python tools/record_norwegian.py --check
    python tools/record_norwegian.py --generate --region punjab --only no-1
    python tools/record_norwegian.py --generate

The owner authorized the full Norwegian run after hearing the Punjab preview. English files
are never touched. The exact requests, provider IDs and costs live in ignored voicelab/.
"""
import argparse
from concurrent.futures import ThreadPoolExecutor, as_completed
from datetime import datetime, timezone
import hashlib
import json
import os
from pathlib import Path
import subprocess
import sys
import threading
import time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import REGIONS, ROOT
import narrate
import narration_plan
import normalise
import record_intros
import tts

MODEL = narrate.PUCK_MODEL
VOICE = narrate.PUCK_VOICE
WORK = Path(ROOT) / 'voicelab' / 'puck-course'
AUDIO = Path(ROOT) / 'assets' / 'audio'
MAX_COST_USD = 12.0
CHUNK_RESERVE_USD = 0.20
BUDGET_LOCK = threading.Lock()
FAILURE_LOCK = threading.Lock()
STOP_EVENT = threading.Event()
RESERVED_USD = 0.0


def write_json(path, value):
    temporary = path.with_name(path.name + '.tmp')
    temporary.write_text(json.dumps(value, ensure_ascii=False, indent=2) + '\n', encoding='utf-8')
    os.replace(temporary, path)


def digest(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()


def scripts():
    """Yield (stem, key, script, plan_row) in Norwegian course order."""
    plan = narration_plan.build_plan()
    frozen = Path(narration_plan.OUTPUT).read_text(encoding='utf-8')
    if narration_plan.serialized(plan) != frozen:
        raise RuntimeError('Narration plan is stale; review changed source before recording')
    rows = {(row['region'], row['id']): row for row in plan['tracks'] if row['lang'] == 'no'}
    introductions = record_intros.sources()
    for region in REGIONS:
        stem, code = region['stem'], region['code']
        name, introduction = introductions[(stem, 'no')]
        intro = record_intros.script_for(name, introduction)
        row = rows[(stem, f'{code}:intro')]
        if digest(intro) != row['script_sha256']:
            raise RuntimeError(f'Script hash differs: {stem} no-intro')
        yield stem, 'no-intro', intro, row
        lessons = narrate.lessons_from(Path(ROOT) / 'content' / f'{stem}.no.js')
        if len(lessons) != 4:
            raise RuntimeError(f'Expected four Norwegian readings in {stem}')
        for number, lesson in enumerate(lessons, 1):
            script = narrate.to_script(
                lesson, 'no', narrate.STANDARD_INTRO,
                narrate.STANDARD_DROP.split(','), narrate.STANDARD_OUTRO)
            row = rows[(stem, f'{code}:reading-{number}')]
            if digest(script) != row['script_sha256']:
                raise RuntimeError(f'Script hash differs: {stem} no-{number}')
            yield stem, f'no-{number}', script, row


def chunk_paths(stem, key, number, request):
    folder = WORK / stem / key
    prefix = f'{number:03d}-{digest(request)[:16]}'
    return folder, folder / f'{prefix}.txt', folder / f'{prefix}.pcm', folder / f'{prefix}.json'


def completed_cost():
    total = 0.0
    for path in WORK.glob('*/*/[0-9][0-9][0-9]-*.json'):
        entry = json.loads(path.read_text(encoding='utf-8'))
        if entry.get('generation_id') and entry.get('cost_usd') is not None:
            total += float(entry['cost_usd'])
    return total


def reserve_budget(max_cost):
    global RESERVED_USD
    with BUDGET_LOCK:
        if STOP_EVENT.is_set():
            raise RuntimeError('Recording stopped after another worker failed')
        observed = completed_cost()
        if observed + RESERVED_USD + CHUNK_RESERVE_USD > max_cost:
            raise RuntimeError(f'Cost ceiling ${max_cost:.2f} reached: '
                               f'${observed:.2f} measured, ${RESERVED_USD:.2f} in flight')
        RESERVED_USD += CHUNK_RESERVE_USD


def release_budget():
    global RESERVED_USD
    with BUDGET_LOCK:
        RESERVED_USD -= CHUNK_RESERVE_USD


def record_provider_failure(stem, key, number, error):
    WORK.mkdir(parents=True, exist_ok=True)
    event = {
        'utc': datetime.now(timezone.utc).isoformat(), 'region': stem,
        'key': key, 'chunk': number, 'error': str(error)[:500],
        'generation_id': None, 'cost_usd': None,
    }
    with FAILURE_LOCK:
        with open(WORK / 'provider-failures.jsonl', 'a', encoding='utf-8') as output:
            output.write(json.dumps(event, ensure_ascii=False) + '\n')


def chunk_audio(stem, key, number, piece, max_cost):
    request = tts.prefixed_transcript(piece, narrate.PUCK_DIRECTION)
    folder, request_path, pcm_path, meta_path = chunk_paths(stem, key, number, request)
    folder.mkdir(parents=True, exist_ok=True)
    if pcm_path.exists() and meta_path.exists():
        entry = json.loads(meta_path.read_text(encoding='utf-8'))
        if entry['request_sha256'] == digest(request) and entry.get('generation_id'):
            if entry.get('cost_usd') is None:
                cost = tts.cost_of(entry['generation_id'], tries=8)
                if cost is None:
                    raise RuntimeError(f'Cost unavailable for {stem} {key} chunk {number}; stopped')
                entry['cost_usd'] = cost
                write_json(meta_path, entry)
            return pcm_path.read_bytes(), entry, True
    reserve_budget(max_cost)
    request_path.write_text(request + '\n', encoding='utf-8')
    try:
        for attempt in range(2):
            try:
                raw, generation_id = tts.speak(
                    request, model=MODEL, voice=VOICE, fmt='pcm', timeout=600, retries=1)
                break
            except tts.TTSError as error:
                record_provider_failure(stem, key, number, error)
                if attempt == 0 and 'HTTP 502' in str(error) and 'empty audio stream' in str(error):
                    print(f'  {stem} {key} chunk {number}: empty provider stream; '
                          'retrying once after 20s', flush=True)
                    time.sleep(20)
                    continue
                raise
        if not generation_id:
            raise RuntimeError(f'Provider omitted generation ID for {stem} {key} chunk {number}')
        # Save the successful response before querying cost so a delayed cost result cannot
        # cause a second paid speech request on resume.
        pcm_path.write_bytes(raw)
        entry = {
            'request_sha256': digest(request), 'generation_id': generation_id,
            'cost_usd': None, 'pcm_bytes': len(raw), 'transcript_chars': len(piece),
            'model': MODEL, 'voice': VOICE,
        }
        write_json(meta_path, entry)
        cost = tts.cost_of(generation_id, tries=8)
        if cost is None:
            raise RuntimeError(f'Cost unavailable for {stem} {key} chunk {number}; audio cached')
        entry['cost_usd'] = cost
        write_json(meta_path, entry)
        return raw, entry, False
    finally:
        release_budget()


def encode_ogg(mp3, destination):
    subprocess.run([
        tts.ffmpeg(), '-y', '-loglevel', 'error', '-i', str(mp3), '-ac', '1',
        '-c:a', 'libopus', '-b:a', '12k', '-application', 'voip',
        '-frame_duration', '40', '-vbr', 'on', str(destination),
    ], check=True)


def limit_peak(mp3, stats):
    """Keep the final decoded MP3 below -1 dB true peak after encoder overshoot."""
    if float(stats['input_tp']) <= -1.0:
        return stats
    for ceiling in (0.65, 0.55, 0.45):
        temporary = mp3.with_name(mp3.stem + '.limited.mp3')
        subprocess.run([
            tts.ffmpeg(), '-y', '-loglevel', 'error', '-i', str(mp3),
            '-af', f'alimiter=limit={ceiling}:level=false', '-ac', '1',
            '-b:a', '48k', '-codec:a', 'libmp3lame', str(temporary),
        ], check=True)
        os.replace(temporary, mp3)
        stats = normalise.measure(str(mp3))
        if not stats:
            raise RuntimeError(f'Could not verify peak after limiting {mp3}')
        if float(stats['input_tp']) <= -1.0:
            return stats
    raise RuntimeError(f'True peak remains high after limiting {mp3}: {stats["input_tp"]} dB')


def generate_track(stem, key, script, row, max_cost):
    outdir = AUDIO / stem
    outdir.mkdir(parents=True, exist_ok=True)
    mp3 = outdir / f'{key}.mp3'
    low = outdir / f'{key}.lo.mp3'
    ogg = outdir / f'{key}.ogg'
    track_meta_path = WORK / stem / key / 'track.json'
    manifest_path = outdir / 'manifest.json'
    manifest = json.loads(manifest_path.read_text(encoding='utf-8')) if manifest_path.exists() else {}
    if mp3.exists() and track_meta_path.exists() and key in manifest:
        old = json.loads(track_meta_path.read_text(encoding='utf-8'))
        if (old.get('script_sha256') == row['script_sha256']
                and manifest[key].get('script_sha256') == row['script_sha256']
                and old.get('output_true_peak_db', 0) <= -1.0
                and low.exists() and ogg.exists()):
            print(f'SKIP {stem} {key}: already generated, ${old["cost_usd"]:.5f}', flush=True)
            return old
    pieces = tts.chunks(script, tts.CHUNK_BY_MODEL[MODEL])
    raw_parts, entries = [], []
    start = time.time()
    for number, piece in enumerate(pieces, 1):
        raw, entry, cached = chunk_audio(stem, key, number, piece, max_cost)
        raw_parts.append(raw)
        entries.append(entry)
        print(f'  {stem} {key} chunk {number}/{len(pieces)} '
              f'{"cached" if cached else "generated"}: ${entry["cost_usd"]:.5f}', flush=True)
    tts.pcm_to_mp3(b''.join(raw_parts), str(mp3), bitrate='48k')
    before = normalise.measure(str(mp3))
    if not before:
        raise RuntimeError(f'Could not measure {mp3}')
    normalise.apply(str(mp3), before)
    after = normalise.measure(str(mp3))
    if not after:
        raise RuntimeError(f'Could not verify loudness for {mp3}')
    after = limit_peak(mp3, after)
    narrate.compress(str(mp3), str(low))
    encode_ogg(mp3, ogg)
    seconds = tts.duration(str(mp3))
    okay, wpm, warning = narrate.rate_ok(seconds, len(script.split()))
    cost = round(sum(float(entry['cost_usd']) for entry in entries), 5)
    track_meta = {
        'id': row['id'], 'region': stem, 'key': key, 'script_sha256': row['script_sha256'],
        'words': len(script.split()), 'chunks': len(pieces),
        'generation_ids': [entry['generation_id'] for entry in entries],
        'cost_usd': cost, 'seconds': seconds, 'wpm': round(wpm, 1) if wpm else None,
        'rate_warning': warning if not okay else None,
        'input_lufs': float(before['input_i']), 'output_lufs': float(after['input_i']),
        'output_true_peak_db': float(after['input_tp']),
        'mp3_bytes': mp3.stat().st_size, 'low_bytes': low.stat().st_size,
        'ogg_bytes': ogg.stat().st_size, 'wall_seconds': round(time.time() - start, 1),
    }
    write_json(track_meta_path, track_meta)
    (outdir / f'{key}.txt').write_text(script, encoding='utf-8')
    manifest[key] = {
        'seconds': seconds, 'voice': f'{MODEL}/{VOICE}', 'bytes': mp3.stat().st_size,
        'lo_bytes': low.stat().st_size, 'ogg_bytes': ogg.stat().st_size,
        'delivery': 'puck', 'cost': cost, 'script_sha256': row['script_sha256'],
    }
    if key == 'no-intro':
        manifest[key]['kind'] = 'region-introduction'
    else:
        manifest[key].update({
            'intro': narrate.STANDARD_INTRO, 'drop': narrate.STANDARD_DROP,
            'outro': narrate.STANDARD_OUTRO,
        })
    write_json(manifest_path, manifest)
    print(f'DONE {stem} {key}: {seconds:.1f}s, {wpm:.0f} wpm, '
          f'{track_meta["output_lufs"]:.2f} LUFS, ${cost:.5f}'
          + (f' WARNING {warning}' if warning else ''), flush=True)
    return track_meta


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--generate', action='store_true')
    parser.add_argument('--region', choices=[r['stem'] for r in REGIONS])
    parser.add_argument('--only', help='for example no-1 or no-intro')
    parser.add_argument('--max-cost', type=float, default=MAX_COST_USD)
    parser.add_argument('--workers', type=int, choices=(1, 2), default=1,
                        help='record separate regions concurrently (maximum two)')
    args = parser.parse_args()
    if args.check == args.generate:
        parser.error('choose exactly one of --check or --generate')
    selected = [(stem, key, script, row) for stem, key, script, row in scripts()
                if (not args.region or stem == args.region) and (not args.only or key == args.only)]
    if not selected:
        parser.error('no tracks selected')
    count = sum(len(tts.chunks(script, tts.CHUNK_BY_MODEL[MODEL])) for _, _, script, _ in selected)
    words = sum(len(script.split()) for _, _, script, _ in selected)
    print(f'{len(selected)} Norwegian tracks, {words} words, {count} provider chunks; '
          f'cost ceiling ${args.max_cost:.2f}', flush=True)
    if args.check:
        print(f'Already measured course cost: ${completed_cost():.5f}', flush=True)
        return
    tts.api_key()
    if args.workers == 1:
        for index, (stem, key, script, row) in enumerate(selected, 1):
            print(f'[{index}/{len(selected)}] {stem} {key}', flush=True)
            generate_track(stem, key, script, row, args.max_cost)
    else:
        by_region = {}
        for stem, key, script, row in selected:
            by_region.setdefault(stem, []).append((stem, key, script, row))

        def run_region(stem, items):
            try:
                for stem, key, script, row in items:
                    if STOP_EVENT.is_set():
                        return False
                    print(f'[{stem}] starting {key}', flush=True)
                    generate_track(stem, key, script, row, args.max_cost)
                return True
            except Exception:
                STOP_EVENT.set()
                raise

        with ThreadPoolExecutor(max_workers=args.workers) as pool:
            futures = {pool.submit(run_region, stem, items): stem
                       for stem, items in by_region.items()}
            for future in as_completed(futures):
                try:
                    if future.result():
                        print(f'REGION COMPLETE {futures[future]}', flush=True)
                except Exception:
                    STOP_EVENT.set()
                    for pending in futures:
                        pending.cancel()
                    raise
    print(f'Course provider cost so far: ${completed_cost():.5f}', flush=True)


if __name__ == '__main__':
    main()
