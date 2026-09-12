"""Pack the narration into one tarball, for attaching to a GitHub release.

Why this exists: the Italian course committed its audio, then re-recorded the Norwegian edition, and
its .git is now 905 MB, most of it two copies of the same eight hours. Release assets do not live in
git history, so re-recording costs one upload rather than one permanent copy of the repo.

  python tools/audio_pack.py                 -> dist/audio.tar.gz
  python tools/audio_pack.py --check         -> report what is present, write nothing

Then, by hand once per re-record:
  1. create (or reuse) a release tagged `audio`
  2. upload dist/audio.tar.gz to it as `audio.tar.gz`
The Pages workflow downloads it before running make_site.py; if it is not there, the site publishes
without narration and the page offers the browser voice, which is a working fallback rather than a
broken build.
"""
import argparse, os, sys, tarfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, REGIONS

AUDIO = os.path.join(ROOT, 'assets', 'audio')
OUT = os.path.join(ROOT, 'dist', 'audio.tar.gz')
KEEP = ('.mp3', '.ogg')
SKIP = ('.lo.mp3',)

ap = argparse.ArgumentParser()
ap.add_argument('--check', action='store_true', help='report and exit without writing')
args = ap.parse_args()

files, total = [], 0
for r in REGIONS:
    d = os.path.join(AUDIO, r['stem'])
    if not os.path.isdir(d):
        continue
    n = 0
    for f in sorted(os.listdir(d)):
        if f.endswith(SKIP) or not f.endswith(KEEP):
            continue
        p = os.path.join(d, f)
        files.append((p, 'assets/audio/%s/%s' % (r['stem'], f)))
        total += os.path.getsize(p)
        n += 1
    print('%-14s %3d file(s)' % (r['stem'], n))

if not files:
    print('no narration on disk yet; nothing to pack')
    sys.exit(0)
print('%d files, %.1f MB uncompressed' % (len(files), total / 1e6))
if args.check:
    sys.exit(0)

os.makedirs(os.path.dirname(OUT), exist_ok=True)
with tarfile.open(OUT, 'w:gz') as tar:
    for src, name in files:
        tar.add(src, arcname=name)
print('wrote %s  %.1f MB' % (OUT, os.path.getsize(OUT) / 1e6))
print('upload it to the release tagged "audio" as audio.tar.gz')
