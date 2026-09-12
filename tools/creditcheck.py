"""Check that every photograph is present, referenced, and credited identically in both places.

A region's photo credits are written twice: once in `assets/<region>/credits.json`, which is what
the download step produces, and once inside the `credits:` object of `content/<region>.js`, which
is what the page actually renders. Keeping the same data in two files is a standing invitation to
drift, and the drift is silent -- the page shows a credit line either way, just the wrong one, or
none at all. The Rajasthan writer's copy diverged on URL escaping before it was caught by hand.

It also enforces the rule that cost the Italian course two regions' photographs: never decide a
file is unused by pattern-matching image keys with \\w+, because keys contain hyphens. Here the
keys come from the parsed content, so a hyphen cannot hide one.

    PYTHONIOENCODING=utf-8 python tools/creditcheck.py
    PYTHONIOENCODING=utf-8 python tools/creditcheck.py kerala

Exits non-zero if a referenced photo is missing from disk, a photo on disk is referenced by
nothing (build.py inlines every jpg in the folder whether it is used or not, so a stray costs
bytes in the 16 MB page), a credit is missing, or the two credit records disagree.
"""
import json, os, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, REGIONS, stem_of

FIELDS = ('artist', 'license', 'source')

NODE = """
global.window = {};
require('./content/REGION.js');
const r = window.READINGS['CODE'];
const used = new Set();
for (const L of r.lessons) {
  used.add(L.hero);
  for (const m of L.html.matchAll(/data-img="([^"]+)"/g)) used.add(m[1]);
}
let recipes = [];
try {
  require('./content/recipes/REGION.js');
  recipes = (window.RECIPES['CODE'] || []).map(x => x.hero);
} catch (e) {}
for (const h of recipes) used.add(h);
console.log(JSON.stringify({used: [...used], credits: r.credits || {}}));
"""


def main():
    only = sys.argv[1:]
    problems, checked = [], 0
    for r in REGIONS:
        stem, code = r['stem'], r['code']
        if only and stem not in only:
            continue
        content = os.path.join(ROOT, 'content', '%s.js' % stem)
        folder = os.path.join(ROOT, 'assets', stem)
        if not os.path.exists(content) or not os.path.isdir(folder):
            continue
        res = subprocess.run(['node', '-e', NODE.replace('REGION', stem).replace('CODE', code)],
                             cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
        if res.returncode:
            print('PARSE FAILED for %s' % stem)
            print((res.stderr or '')[-600:])
            sys.exit(1)
        d = json.loads(res.stdout)
        used, inline = set(d['used']), d['credits']
        on_disk = {f[:-4] for f in os.listdir(folder) if f.lower().endswith('.jpg')}

        jpath = os.path.join(folder, 'credits.json')
        onfile = json.load(open(jpath, encoding='utf-8')) if os.path.exists(jpath) else None
        if onfile is None:
            problems.append('%s: no credits.json' % stem)

        for k in sorted(used - on_disk):
            problems.append('%s: %r is referenced but assets/%s/%s.jpg does not exist' % (stem, k, stem, k))
        for k in sorted(on_disk - used):
            problems.append('%s: assets/%s/%s.jpg is referenced by nothing; build.py inlines it anyway'
                            % (stem, stem, k))
        for k in sorted(used & on_disk):
            checked += 1
            a = inline.get(k)
            if not a:
                problems.append('%s: %r is not credited in content/%s.js' % (stem, k, stem))
                continue
            for f in FIELDS:
                if not str(a.get(f, '')).strip():
                    problems.append('%s: %r has no %s' % (stem, k, f))
            if onfile is not None:
                b = onfile.get(k)
                if not b:
                    problems.append('%s: %r is not in credits.json' % (stem, k))
                else:
                    for f in FIELDS:
                        if str(a.get(f, '')) != str(b.get(f, '')):
                            problems.append('%s: %r %s differs between the two files:\n'
                                            '        content/%s.js : %s\n'
                                            '        credits.json  : %s'
                                            % (stem, k, f, stem, a.get(f), b.get(f)))

    print('%d photo credit(s) checked' % checked)
    if problems:
        for p in problems[:60]:
            print('  ' + p)
        if len(problems) > 60:
            print('  ... and %d more' % (len(problems) - 60))
        print('%d problem(s)' % len(problems))
        sys.exit(1)
    print('OK')


if __name__ == '__main__':
    main()
