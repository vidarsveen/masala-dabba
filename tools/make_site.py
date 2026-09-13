"""Assemble a ready-to-upload static site in site/ (no size limit, full-quality audio).

Copies the app (as index.html), three.min.js, content/ and assets/ (photos, terrain, audio MP3
and manifest.js). Upload site/ to any static host and open index.html; the GitHub Pages workflow
in .github/workflows/pages.yml runs exactly this. Each region's manifest.js is rebuilt here from
manifest.json and lists only the recordings whose mp3 is actually present.

Usage: python tools/make_site.py
"""
import os, shutil, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, APP

OUT = os.path.join(ROOT, 'site')
if os.path.exists(OUT):
    shutil.rmtree(OUT)
os.makedirs(OUT)
shutil.copy(APP, os.path.join(OUT, 'index.html'))
shutil.copy(os.path.join(ROOT, 'three.min.js'), os.path.join(OUT, 'three.min.js'))
shutil.copytree(os.path.join(ROOT, 'content'), os.path.join(OUT, 'content'))


def skip(dirname, files):
    # drop the low-bitrate variants and the spoken-script dumps; keep mp3, ogg, manifest.js, jpg, png, json
    return [f for f in files if f.endswith(('.lo.mp3', '.txt', 'manifest.json'))]


shutil.copytree(os.path.join(ROOT, 'assets'), os.path.join(OUT, 'assets'), ignore=skip)
# The narration is not in git: CI unpacks it from a release, and that release can lag behind the
# content. The committed manifest.js lists every recording a region should have and the page trusts
# it, so a manifest naming a missing mp3 puts a working-looking Listen button over silence, and the
# audiobook fills with chapters that never play. Rebuild each manifest.js from manifest.json with only
# the recordings that are really here; a region with none falls back to the browser voice.
import json
NL = chr(10)
audio = os.path.join(ROOT, 'assets', 'audio')
have = want = 0
for d in (sorted(os.listdir(audio)) if os.path.isdir(audio) else []):
    mp = os.path.join(audio, d, 'manifest.json')
    if not os.path.exists(mp):
        continue
    m = json.load(open(mp, encoding='utf-8'))
    keep = {k: v for k, v in m.items() if os.path.exists(os.path.join(audio, d, k + '.mp3'))}
    have += len(keep)
    want += len(m)
    if len(keep) < len(m):
        print('  %-12s %d of %d recordings present; the rest use the browser voice' % (d, len(keep), len(m)))
    js = ('window.AUDIO_MANIFEST = Object.assign(window.AUDIO_MANIFEST || {}, '
          + json.dumps({'%s:%s' % (d, k): v for k, v in keep.items()}) + ');' + NL)
    os.makedirs(os.path.join(OUT, 'assets', 'audio', d), exist_ok=True)
    with open(os.path.join(OUT, 'assets', 'audio', d, 'manifest.js'), 'w', encoding='utf-8', newline=NL) as fh:
        fh.write(js)
print('narration: %d of %d recordings present' % (have, want))
total = sum(os.path.getsize(os.path.join(dp, f)) for dp, _, fs in os.walk(OUT) for f in fs)
print('site/ ready: %.1f MB' % (total / 1e6))
