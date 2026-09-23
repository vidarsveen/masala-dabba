"""Audit reading narration settings separately from script freshness.

Usage: python tools/audio_format.py [region ...]
This reads metadata only. It never updates manifests to disguise old recordings.
Exit 1 means missing or nonstandard metadata; this is not a listening check.
"""
import argparse
import json
from pathlib import Path

from course import ROOT, REGIONS
from narrate import STANDARD_DROP, STANDARD_INTRO, STANDARD_OUTRO


def problems(entry):
    if not isinstance(entry, dict):
        return ['missing recording metadata']
    issues = []
    if entry.get('intro') != STANDARD_INTRO:
        issues.append('intro must be title')
    drop = entry.get('drop', '')
    if not isinstance(drop, str) or set(drop.split(',')) != set(STANDARD_DROP.split(',')):
        issues.append('drop must be facts,recap,tasting,headings')
    if entry.get('outro') != STANDARD_OUTRO:
        issues.append('outro must explicitly be none')
    return issues


def audit(root, stems):
    checked, failures = 0, []
    for stem in stems:
        path = Path(root) / 'assets' / 'audio' / stem / 'manifest.json'
        try:
            manifest = json.loads(path.read_text(encoding='utf-8'))
            if not isinstance(manifest, dict):
                raise ValueError('expected an object')
        except (OSError, ValueError) as error:
            failures.append(f'{stem}: cannot read manifest: {error}')
            continue
        for lang in ('en', 'no'):
            for number in range(1, 5):
                key = f'{lang}-{number}'
                checked += 1
                issues = problems(manifest.get(key))
                if issues:
                    failures.append(f'{stem} {key}: ' + '; '.join(issues))
    return checked, failures


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('regions', nargs='*')
    args = parser.parse_args()
    known = {r['stem'] for r in REGIONS}
    if set(args.regions) - known:
        parser.error('unknown region: ' + ', '.join(sorted(set(args.regions) - known)))
    checked, failures = audit(ROOT, args.regions or [r['stem'] for r in REGIONS])
    print(f'{checked} reading metadata entries checked; {len(failures)} format failures')
    for failure in failures:
        print(failure)
    return int(bool(failures))


if __name__ == '__main__':
    raise SystemExit(main())
