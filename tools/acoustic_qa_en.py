"""Screen the 70 free English recordings for decode errors, clipping and long silence.

    python tools/acoustic_qa_en.py
    python tools/acoustic_qa_en.py --region punjab

This checks technical audio only. It cannot prove pronunciation or that every
word in the supplied transcript was spoken.
"""
import argparse
from pathlib import Path

import numpy as np

from acoustic_qa_no import RATE, decode, long_silences
from course import REGIONS, ROOT

AUDIO = Path(ROOT) / 'assets' / 'audio'


def inspect(stem, key, max_silence):
    label = f'{stem}/{key}'
    folder = AUDIO / stem
    mp3, ogg = (folder / f'{key}{ext}' for ext in ('.mp3', '.ogg'))
    if not mp3.is_file() or not ogg.is_file():
        return 0, [f'{label}: missing MP3 or OGG']
    try:
        samples = decode(mp3, pcm=True)
        decode(ogg)
        issues = []
        clipped = int(np.count_nonzero(np.abs(samples.astype(np.int32)) >= 32760))
        if clipped:
            issues.append(f'{clipped} clipped decoded MP3 samples')
        for start, span in long_silences(samples, max_silence):
            issues.append(f'{span:.1f}s silence at {start:.1f}s')
        return len(samples) / RATE, [f'{label}: {item}' for item in issues]
    except (OSError, ValueError) as error:
        return 0, [f'{label}: decode error: {error}']


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--region', choices=[r['stem'] for r in REGIONS])
    parser.add_argument('--max-silence', type=float, default=4.0)
    args = parser.parse_args()
    examined, seconds, findings = 0, 0.0, []
    regions = [r for r in REGIONS if not args.region or r['stem'] == args.region]
    for region in regions:
        for key in ['en-intro'] + [f'en-{number}' for number in range(1, 5)]:
            duration, issues = inspect(region['stem'], key, args.max_silence)
            examined += bool(duration)
            seconds += duration
            findings.extend(issues)
    expected = 5 * len(regions)
    print(f'English acoustic QA: {examined}/{expected} tracks decoded, '
          f'{seconds / 60:.1f} minutes; {len(findings)} findings')
    for finding in findings:
        print('CHECK ' + finding)
    return int(examined != expected or bool(findings))


if __name__ == '__main__':
    raise SystemExit(main())
