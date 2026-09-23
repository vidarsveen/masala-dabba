"""Seed an ignored site build with deterministic audio for browser regression tests.

Run `python tools/make_site.py` first, then:

    python tools/test/fixture_audio.py
    python tools/test/serve.py --directory site --port 8766

The generated sine-wave files and manifests live only under ignored `site/`. They exercise
the complete 140-track transport and player paths without being mistaken for narration.
Rebuilding `site/` removes them.
"""
import json
import os
import shutil
import subprocess
import sys

TOOLS = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROOT = os.path.dirname(TOOLS)
sys.path.insert(0, TOOLS)
from course import REGIONS  # noqa: E402
import tts  # noqa: E402


def main():
    site = os.path.join(ROOT, 'site')
    index = os.path.join(site, 'index.html')
    if not os.path.exists(index):
        raise SystemExit('site/index.html is missing; run python tools/make_site.py first')

    sample = os.path.join(site, 'test-audio.mp3')
    subprocess.run([
        tts.ffmpeg(), '-y', '-loglevel', 'error', '-f', 'lavfi', '-i',
        'sine=frequency=440:sample_rate=24000', '-t', '20', '-ac', '1',
        '-b:a', '48k', sample,
    ], check=True)

    count = 0
    for region in REGIONS:
        stem = region['stem']
        folder = os.path.join(site, 'assets', 'audio', stem)
        os.makedirs(folder, exist_ok=True)
        manifest = {}
        for lang in ('en', 'no'):
            for suffix in ('intro', '1', '2', '3', '4'):
                key = f'{lang}-{suffix}'
                destination = os.path.join(folder, key + '.mp3')
                if os.path.exists(destination):
                    os.remove(destination)
                try:
                    os.link(sample, destination)
                except OSError:
                    shutil.copy2(sample, destination)
                manifest[f'{stem}:{key}'] = {'seconds': 20.0, 'test_fixture': True}
                count += 1
        with open(os.path.join(folder, 'manifest.js'), 'w', encoding='utf-8') as output:
            output.write('window.AUDIO_MANIFEST = Object.assign(window.AUDIO_MANIFEST || {}, '
                         + json.dumps(manifest) + ');\n')
    print(f'seeded {count} temporary tracks in site/; rebuild site/ to remove them')


if __name__ == '__main__':
    main()
