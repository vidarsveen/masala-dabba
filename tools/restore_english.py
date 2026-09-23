"""Restore the owner's retained English narration from an existing local checkout.

Only the four English readings per region are copied. Norwegian files, low-bitrate scratch
copies and introductions are left untouched. Existing destination manifest entries for other
languages or introductions are preserved.

    python tools/restore_english.py --check
    python tools/restore_english.py
    python tools/restore_english.py --source C:/path/to/masala-dabba
"""
import argparse
import json
import os
from pathlib import Path
import shutil
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, REGIONS

DEFAULT_SOURCE = Path(r'C:\Users\vidar\PycharmProjects\masala-dabba')


def files_for(source):
    files = []
    manifests = {}
    missing = []
    for region in REGIONS:
        stem = region['stem']
        folder = source / 'assets' / 'audio' / stem
        manifest_path = folder / 'manifest.json'
        if not manifest_path.exists():
            missing.append(str(manifest_path))
            continue
        manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
        manifests[stem] = {}
        for number in range(1, 5):
            key = f'en-{number}'
            if key not in manifest:
                missing.append(f'{manifest_path}: {key}')
            else:
                manifests[stem][key] = manifest[key]
            for suffix in ('.mp3', '.ogg', '.txt'):
                path = folder / f'{key}{suffix}'
                if path.exists():
                    files.append((path, Path(ROOT) / 'assets' / 'audio' / stem / path.name))
                else:
                    missing.append(str(path))
    return files, manifests, missing


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--source', type=Path, default=DEFAULT_SOURCE)
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    source = args.source.resolve()
    if source == Path(ROOT).resolve():
        raise SystemExit('Source must be a separate existing checkout')
    files, manifests, missing = files_for(source)
    if missing:
        print('\n'.join('MISSING ' + item for item in missing))
        raise SystemExit(f'{len(missing)} required retained-English item(s) missing')
    print(f'OK source: 56 English readings, {len(files)} files, 14 manifests')
    if args.check:
        return

    for source_path, destination in files:
        destination.parent.mkdir(parents=True, exist_ok=True)
        shutil.copy2(source_path, destination)
    for stem, english in manifests.items():
        path = Path(ROOT) / 'assets' / 'audio' / stem / 'manifest.json'
        current = json.loads(path.read_text(encoding='utf-8')) if path.exists() else {}
        current.update(english)
        path.write_text(json.dumps(current, ensure_ascii=False, indent=1) + '\n', encoding='utf-8')
    total = sum(destination.stat().st_size for _, destination in files)
    print(f'Restored 56 English readings ({total / 1e6:.1f} MB including MP3, OGG and scripts)')


if __name__ == '__main__':
    main()
