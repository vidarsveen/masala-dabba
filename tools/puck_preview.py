"""Prepare or generate the authorized short Punjab Puck preview.

Preparation is local and free:
    python tools/puck_preview.py

Generation makes one paid OpenRouter request and needs OPENROUTER_API_KEY in the ignored .env:
    python tools/puck_preview.py --generate

Outputs are kept under ignored voicelab/puck-punjab/. The exact provider input and generation
metadata are retained beside the normalized preview.
"""
from datetime import datetime, timezone
import hashlib
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SOURCE = os.path.join(ROOT, 'docs', 'rewrite', 'punjab-puck-audition.md')
OUTDIR = os.path.join(ROOT, 'voicelab', 'puck-punjab')
INPUT_PATH = os.path.join(OUTDIR, 'exact-input.txt')
AUDIO_PATH = os.path.join(OUTDIR, 'punjab-puck-preview.mp3')
META_PATH = os.path.join(OUTDIR, 'metadata.json')
MODEL = 'google/gemini-3.1-flash-tts-preview'
VOICE = 'Puck'


def source_parts():
    with open(SOURCE, encoding='utf-8') as source:
        text = source.read()
    match = re.search(
        r'## Input direction\s+(.+?)\s+TRANSCRIPT:\s+(.+?)\s+## Generation and listening checklist',
        text, re.S)
    if not match:
        raise RuntimeError(f'Could not read direction and transcript from {SOURCE}')
    return match.group(1).strip(), match.group(2).strip()


def sha256(text):
    return hashlib.sha256(text.encode('utf-8')).hexdigest()


def main():
    bad = [arg for arg in sys.argv[1:] if arg != '--generate']
    if bad:
        raise SystemExit(__doc__)
    generate = '--generate' in sys.argv
    direction, transcript = source_parts()

    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import tts

    exact_input = tts.prefixed_transcript(transcript, direction)
    os.makedirs(OUTDIR, exist_ok=True)
    with open(INPUT_PATH, 'w', encoding='utf-8', newline='\n') as output:
        output.write(exact_input + '\n')

    prepared = {
        'status': 'prepared' if not generate else 'generating',
        'model': MODEL,
        'voice': VOICE,
        'language': 'Norwegian Bokmal',
        'region': 'Punjab',
        'words': len(transcript.split()),
        'transcript_chars': len(transcript),
        'transcript_sha256': sha256(transcript),
        'exact_input_sha256': sha256(exact_input),
        'pcm': {'sample_rate_hz': 24000, 'bits': 16, 'channels': 1},
        'mp3_bitrate': '48k',
        'tempo': 1.0,
        'target_lufs': -19.0,
        'source': os.path.relpath(SOURCE, ROOT).replace('\\', '/'),
        'exact_input': os.path.relpath(INPUT_PATH, ROOT).replace('\\', '/'),
    }
    if not generate:
        with open(META_PATH, 'w', encoding='utf-8', newline='\n') as output:
            json.dump(prepared, output, indent=2, ensure_ascii=False)
            output.write('\n')
        print(json.dumps(prepared, indent=2, ensure_ascii=False))
        print('\nPrepared only. Use --generate for the authorized paid preview request.')
        return

    # api_key() exits before any request if the ignored local key is unavailable.
    tts.api_key()
    info = tts.speak_to_file(transcript, AUDIO_PATH, model=MODEL, voice=VOICE,
                             prompt_prefix=direction, bitrate='48k')

    import normalise
    before = normalise.measure(AUDIO_PATH)
    if not before:
        raise RuntimeError('Could not measure preview loudness')
    normalise.apply(AUDIO_PATH, before, bitrate='48k')
    after = normalise.measure(AUDIO_PATH)
    if not after:
        raise RuntimeError('Could not verify normalized preview loudness')

    prepared.update({
        'status': 'generated',
        'generated_utc': datetime.now(timezone.utc).isoformat(),
        'audio': os.path.relpath(AUDIO_PATH, ROOT).replace('\\', '/'),
        'generation_ids': info.get('generation_ids', []),
        'cost_usd': info.get('cost'),
        'duration_seconds': tts.duration(AUDIO_PATH),
        'wall_seconds': info.get('wall'),
        'chunks': info.get('chunks'),
        'bytes': os.path.getsize(AUDIO_PATH),
        'input_lufs': float(before['input_i']),
        'output_lufs': float(after['input_i']),
        'output_true_peak_db': float(after['input_tp']),
    })
    with open(META_PATH, 'w', encoding='utf-8', newline='\n') as output:
        json.dump(prepared, output, indent=2, ensure_ascii=False)
        output.write('\n')
    print(json.dumps(prepared, indent=2, ensure_ascii=False))


if __name__ == '__main__':
    main()
