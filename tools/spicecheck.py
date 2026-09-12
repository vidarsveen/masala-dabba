"""Check the spice cards against docs/spice-format.md.

    PYTHONIOENCODING=utf-8 python tools/spicecheck.py

Exits non-zero if a spice on a region sheet has no card, a field is missing or empty, the two
languages disagree about which cards exist, or a field is too long to scan on a phone.

This is the structural twin of the Italian course's tastingcheck.py: colour/nose/palate became
aroma/flavour/does, and the Vinmonopolet link became a sourcing note that the Norwegian edition
must carry, because knowing where to buy asafoetida in Norway is the part of this course that
could not be translated into existence.
"""
import json, os, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, APP, ORDER

FIELDS = ['aroma', 'flavour', 'does', 'when', 'swap']
MAXLEN = 190

NODE_CARDS = """
global.window = {};
require('./content/spice.js');
require('./content/spice.no.js');
console.log(JSON.stringify({en: window.SPICE || {}, no: window.SPICE_NO || {}}));
"""

# Evaluated rather than pattern-matched, for the reason recipecheck.py records: a regex loses the
# quoting the moment a name contains an apostrophe, and then reports cards as missing that are
# sitting right there in the file.
NODE_COURSE = (
    "const s = require('fs').readFileSync(APPPATH,'utf8');"
    "const i = s.indexOf('const COURSE = {');"
    "const COURSE = eval('(' + s.slice(s.indexOf('{', i), s.indexOf(String.fromCharCode(10) + '};', i) + 2) + ')');"
    "const out = {};"
    "for (const c of Object.keys(COURSE)) out[c] = (COURSE[c].spices || []).map(x => x[0]);"
    "console.log(JSON.stringify(out));"
)


def node(script):
    r = subprocess.run(['node', '-e', script], cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
    if r.returncode:
        print('PARSE FAILED')
        print((r.stderr or '')[-800:])
        sys.exit(1)
    return json.loads(r.stdout)


def main():
    if not os.path.exists(os.path.join(ROOT, 'content', 'spice.js')):
        print('no content/spice.js yet: nothing to check')
        return
    d = node(NODE_CARDS)
    en, no = d['en'], d['no']
    spices = node(NODE_COURSE.replace('APPPATH', json.dumps(APP)))

    problems = []
    wanted = ['%s|%s' % (c, s) for c in ORDER for s in spices.get(c, [])]
    # a region with no cards written yet is fine; a region with some but not all is not
    started = {k.split('|')[0] for k in en} | {k.split('|')[0] for k in no}
    for k in wanted:
        if k.split('|')[0] not in started:
            continue
        if k not in en:
            problems.append('no English card: %s' % k)
        if k not in no:
            problems.append('no Norwegian card: %s' % k)
    for extra in set(en) - set(wanted):
        problems.append('English card for a spice on no sheet: %s' % extra)
    for extra in set(no) - set(wanted):
        problems.append('Norwegian card for a spice on no sheet: %s' % extra)

    for lang, data in (('EN', en), ('NO', no)):
        for k, rec in sorted(data.items()):
            for f in FIELDS:
                if not str(rec.get(f, '')).strip():
                    problems.append('%s %s: %s is missing or empty' % (lang, k, f))
                elif len(str(rec[f])) > MAXLEN:
                    problems.append('%s %s: %s is %d characters, too long to scan'
                                    % (lang, k, f, len(str(rec[f]))))
    for k, rec in sorted(no.items()):
        if not str(rec.get('sourcing', '')).strip():
            problems.append('NO %s: no sourcing note. The Norwegian edition earns its keep here.' % k)

    done = len([k for k in wanted if k.split('|')[0] in started])
    print('%d spices on the sheets, %d in regions that have been started; %d English cards, %d Norwegian cards'
          % (len(wanted), done, len(en), len(no)))
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
