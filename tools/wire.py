"""Regenerate the app's content <script src> tags from course.json.

The Italian course kept sixty-seven of these tags by hand and needed three separate edits to
add a region, which PLAN.md 9 named as a mistake to fix before course two. Here the tags are
generated: add a region to course.json, write its files, run this, done.

Everything between <!--__CONTENT__--> and the app's own <script> is replaced. Only files that
exist on disk are wired in, so a half-written region loads what it has and the page degrades
the way it is designed to (no readings -> "reading coming soon"; no manifest -> browser voice).

Usage: python tools/wire.py [--check]
    --check  report what would change and exit 1 if anything would, for CI
"""
import argparse, io, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, APP, REGIONS

NL = chr(10)
START = '<!--__CONTENT__-->'
END = '<script>' + NL + '(function(){'

ap = argparse.ArgumentParser()
ap.add_argument('--check', action='store_true')
args = ap.parse_args()

# Generate the audio manifests BEFORE deciding what to wire. build.py used to write these, which
# made an ordering trap: wire.py could only wire a manifest.js that already existed, so the first
# run after narrating a region silently left that region without audio and the page fell back to
# the browser voice. Nothing failed, and it was invisible until you pressed Listen. Doing it here
# means the only order that exists is wire.py then build.py.
audio = os.path.join(ROOT, 'assets', 'audio')
if os.path.isdir(audio):
    import json
    for d in sorted(os.listdir(audio)):
        mp = os.path.join(audio, d, 'manifest.json')
        if not os.path.exists(mp):
            continue
        m = json.load(open(mp, encoding='utf-8'))
        js = ('window.AUDIO_MANIFEST = Object.assign(window.AUDIO_MANIFEST || {}, '
              + json.dumps({'%s:%s' % (d, k): v for k, v in m.items()}) + ');' + NL)
        io.open(os.path.join(audio, d, 'manifest.js'), 'w', encoding='utf-8').write(js)

lines = []
# Shared across every region, loaded first. Everything else is per region, so two people can
# write two regions at once without touching the same file -- which is the whole reason the quiz
# and spice banks stopped being one file each.
shared = ['content/glossary.js', 'content/glossary.no.js', 'content/course.no.js']
for rel in shared:
    if os.path.exists(os.path.join(ROOT, rel)):
        lines.append(rel)
for r in REGIONS:
    stem = r['stem']
    for rel in ('content/%s.js' % stem, 'content/%s.no.js' % stem,
                'content/spice/%s.js' % stem, 'content/spice/%s.no.js' % stem,
                'content/quiz/%s.js' % stem, 'content/quiz/%s.no.js' % stem,
                'content/glossary/%s.js' % stem, 'content/glossary/%s.no.js' % stem,
                'content/recipes/%s.js' % stem, 'assets/audio/%s/manifest.js' % stem):
        if os.path.exists(os.path.join(ROOT, rel)):
            lines.append(rel)

block = START + NL + NL.join('<script src="%s"></script>' % rel for rel in lines) + NL

src = io.open(APP, encoding='utf-8').read()
i, j = src.find(START), src.find(END)
if i < 0 or j < 0 or j <= i:
    sys.exit('markers not found in ' + APP)
out = src[:i] + block + src[j:]

if out == src:
    print('up to date: %d content files wired' % len(lines))
    sys.exit(0)
if args.check:
    was = len(re.findall(r'<script src="', src[i:j]))
    print('out of date: %d tag(s) wired, %d file(s) present. Run python tools/wire.py' % (was, len(lines)))
    sys.exit(1)
io.open(APP, 'w', encoding='utf-8').write(out)
print('wired %d content files into %s' % (len(lines), os.path.basename(APP)))
for rel in lines:
    print('  ' + rel)
