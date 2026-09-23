"""Read-only acoustic screening for completed Norwegian Puck recordings.

    python tools/acoustic_qa_no.py
    python tools/acoustic_qa_no.py --region himalaya

Fully decodes each completed MP3 and OGG, checks clipping and long silence, and inspects the
cached 24 kHz PCM at chunk joins. Findings are listening cues, not a transcript accuracy test.
No provider call is made and no audio is changed.
"""
import argparse
import json
from pathlib import Path
import subprocess
import sys

import numpy as np

sys.path.insert(0, str(Path(__file__).resolve().parent))
from course import REGIONS, ROOT
import tts

AUDIO = Path(ROOT) / 'assets' / 'audio'
WORK = Path(ROOT) / 'voicelab' / 'puck-course'
RATE = tts.PCM_RATE
SILENCE_LEVEL = 10 ** (-48 / 20)


def decode(path, pcm=False):
    command = [tts.ffmpeg(), '-v', 'error', '-xerror', '-i', str(path)]
    command += (['-ac', '1', '-ar', str(RATE), '-f', 's16le', 'pipe:1'] if pcm
                else ['-f', 'null', '-'])
    result = subprocess.run(command, capture_output=True)
    if result.returncode:
        raise ValueError(result.stderr.decode('utf-8', 'replace').strip()[:200])
    if pcm:
        if not result.stdout or len(result.stdout) % 2:
            raise ValueError('empty or truncated decoded PCM')
        return np.frombuffer(result.stdout, dtype='<i2')


def long_silences(samples, min_seconds):
    """Return (start, length) for runs below -48 dBFS, with 20 ms smoothing."""
    frame = int(RATE * 0.02)
    length = len(samples) // frame * frame
    if not length:
        return []
    blocks = samples[:length].astype(np.float32).reshape(-1, frame) / 32768.0
    silent = np.max(np.abs(blocks), axis=1) < SILENCE_LEVEL
    transitions = np.diff(np.r_[False, silent, False].astype(np.int8))
    starts = np.where(transitions == 1)[0]
    ends = np.where(transitions == -1)[0]
    return [(round(start * 0.02, 2), round((end - start) * 0.02, 2))
            for start, end in zip(starts, ends) if (end - start) * 0.02 >= min_seconds]


def edge_silence(samples, reverse=False):
    data = samples[::-1] if reverse else samples
    active = np.flatnonzero(np.abs(data.astype(np.int32)) > SILENCE_LEVEL * 32768)
    return float(active[0]) / RATE if len(active) else len(data) / RATE


def join_checks(folder, chunks, max_gap):
    issues = []
    files = sorted(folder.glob('[0-9][0-9][0-9]-*.pcm'))
    if len(files) != chunks:
        return [f'{len(files)}/{chunks} cached PCM chunks; joins cannot be verified']
    previous = None
    for index, path in enumerate(files, 1):
        raw = path.read_bytes()
        if not raw or len(raw) % 2:
            issues.append(f'chunk {index}: empty or odd-length PCM')
            continue
        current = np.frombuffer(raw, dtype='<i2')
        if previous is not None:
            gap = edge_silence(previous, reverse=True) + edge_silence(current)
            if gap > max_gap:
                issues.append(f'join {index-1}/{index}: {gap:.1f}s of silence')
            jump = abs(int(current[0]) - int(previous[-1])) / 32768.0
            window = int(RATE * 0.02)
            neighbours = np.r_[previous[-window:], current[:window]].astype(np.float32) / 32768.0
            rms = float(np.sqrt(np.mean(neighbours ** 2))) if len(neighbours) else 0.0
            if jump > 0.08 and jump > 5 * rms:
                issues.append(f'join {index-1}/{index}: abrupt sample jump {jump:.2f} FS')
        previous = current
    return issues


def inspect(stem, key, max_silence, max_join_gap):
    label = f'{stem}/{key}'
    folder = AUDIO / stem
    work = WORK / stem / key
    meta_path = work / 'track.json'
    mp3 = folder / f'{key}.mp3'
    ogg = folder / f'{key}.ogg'
    if not (meta_path.is_file() and mp3.is_file() and ogg.is_file()):
        return None
    issues = []
    try:
        meta = json.loads(meta_path.read_text(encoding='utf-8'))
        samples = decode(mp3, pcm=True)
        decode(ogg)
        seconds = len(samples) / RATE
        clipped = int(np.count_nonzero(np.abs(samples.astype(np.int32)) >= 32760))
        if clipped:
            issues.append(f'{clipped} clipped decoded MP3 samples')
        near_clip = int(np.count_nonzero(np.abs(samples.astype(np.int32)) >= 32112))
        if near_clip > len(samples) * 0.0001:
            issues.append(f'{near_clip} samples above 98% full scale')
        for start, span in long_silences(samples, max_silence):
            issues.append(f'{span:.1f}s silence at {start:.1f}s')
        issues.extend(join_checks(work, int(meta['chunks']), max_join_gap))
        return seconds, [f'{label}: {item}' for item in issues]
    except (OSError, ValueError, KeyError, TypeError) as error:
        return 0.0, [f'{label}: decode/metadata error: {error}']


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--region', choices=[region['stem'] for region in REGIONS])
    parser.add_argument('--max-silence', type=float, default=4.0)
    parser.add_argument('--max-join-gap', type=float, default=3.0)
    args = parser.parse_args()
    examined = 0
    duration = 0.0
    findings = []
    for region in REGIONS:
        stem = region['stem']
        if args.region and stem != args.region:
            continue
        for key in ('no-intro', 'no-1', 'no-2', 'no-3', 'no-4'):
            result = inspect(stem, key, args.max_silence, args.max_join_gap)
            if result is None:
                continue
            examined += 1
            seconds, notes = result
            duration += seconds
            findings.extend(notes)
    print(f'Acoustic QA: {examined} completed tracks decoded, {duration/60:.1f} minutes; '
          f'{len(findings)} findings')
    for finding in findings:
        print('CHECK ' + finding)
    if not examined:
        print('No completed Norwegian Puck tracks found.')
        return 1
    return 1 if findings else 0


if __name__ == '__main__':
    raise SystemExit(main())
