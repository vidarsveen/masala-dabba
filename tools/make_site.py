"""Assemble a ready-to-upload static site in site/ (no size limit, full-quality audio).

Copies the app (as index.html), three.min.js, content/ and assets/ (photos, terrain, audio MP3
and manifest.js). Upload site/ to any static host and open index.html; the GitHub Pages workflow
in .github/workflows/pages.yml runs exactly this. Run build.py first so the manifest.js files
exist.

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
total = sum(os.path.getsize(os.path.join(dp, f)) for dp, _, fs in os.walk(OUT) for f in fs)
print('site/ ready: %.1f MB' % (total / 1e6))
