"""Report which narration files no longer match the text they were read from.

Every edit to a reading makes its audio wrong, and the mismatch is invisible: the page plays the
old recording under the new words and nothing fails. The Italian course learned this the hard way
and grew a `--stale` flag for it; this is the same idea, standing on its own.

`narrate.py` writes the spoken script it synthesised to assets/audio/<region>/<lang>-<n>.txt next
to the mp3. Regenerating the script from the content file now and comparing the two says exactly
which files are stale, and the .txt files are committed precisely so this comparison is possible
on a fresh clone.

    python tools/stale.py                 # every region
    python tools/stale.py kerala          # one
    python tools/stale.py --diff kerala   # show the first differing line too

Exits 1 if anything is stale, so it can gate a build. Run it *after* `narrate.py` has actually
finished: on Windows ffmpeg keeps a handle on the mp3 it just wrote, and `normalise.py` will fail
with a PermissionError if it runs while a narration job is still going. The intro and drop settings are read back
from manifest.json, so a file rendered with --intro title is compared against a title-only script
rather than being reported stale forever.
"""
import argparse, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, REGIONS

import narrate

ap = argparse.ArgumentParser()
ap.add_argument('regions', nargs='*', help='region stems; default is all of them')
ap.add_argument('--diff', action='store_true', help='print the first line that differs')
args = ap.parse_args()

stems = args.regions or [r['stem'] for r in REGIONS]
stale, checked, missing = [], 0, []

for stem in stems:
    audio = os.path.join(ROOT, 'assets', 'audio', stem)
    if not os.path.isdir(audio):
        continue
    import json
    mp = os.path.join(audio, 'manifest.json')
    manifest = json.load(open(mp, encoding='utf-8')) if os.path.exists(mp) else {}
    for lang, fname in (('en', '%s.js' % stem), ('no', '%s.no.js' % stem)):
        path = os.path.join(ROOT, 'content', fname)
        if not os.path.exists(path):
            continue
        for i, lesson in enumerate(narrate.lessons_from(path), start=1):
            key = '%s-%d' % (lang, i)
            txt = os.path.join(audio, key + '.txt')
            mp3 = os.path.join(audio, key + '.mp3')
            if not os.path.exists(txt):
                if os.path.exists(mp3):
                    missing.append('%s %s: audio exists but no script to compare' % (stem, key))
                continue
            rec = manifest.get(key, {})
            intro = rec.get('intro', 'full')
            drop = tuple(s for s in (rec.get('drop') or '').split(',') if s)
            outro = rec.get('outro', 'line')
            want = narrate.to_script(lesson, lang, intro, drop, outro)
            have = open(txt, encoding='utf-8').read()
            checked += 1
            if want.strip() != have.strip():
                stale.append((stem, key, have, want))

for m in missing:
    print('  ? ' + m)
print('%d narration file(s) checked' % checked)
if not stale:
    print('OK: every recording matches its text')
    sys.exit(0)

for stem, key, have, want in stale:
    print('  STALE %s %s' % (stem, key))
    if args.diff:
        a, b = have.strip().splitlines(), want.strip().splitlines()
        for n in range(max(len(a), len(b))):
            x = a[n] if n < len(a) else '(end)'
            y = b[n] if n < len(b) else '(end)'
            if x != y:
                print('        was : ' + x[:140])
                print('        now : ' + y[:140])
                break
# narrate.py's --only takes one key, so this is one command per file rather than one per region
print('%d stale. Re-record with:' % len(stale))
for stem, key, _, _ in stale:
    print('  python tools/narrate.py %s --intro %s --drop %s --outro %s --only %s'
          % (stem, narrate.STANDARD_INTRO, narrate.STANDARD_DROP, narrate.STANDARD_OUTRO, key))
sys.exit(1)
