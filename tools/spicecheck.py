"""Check the spice cards against docs/spice-format.md.

    PYTHONIOENCODING=utf-8 python tools/spicecheck.py

Exits non-zero if a spice on a region sheet has no card, a field is missing or empty, the two
languages disagree about which cards exist, or a field is too long to scan on a phone.

It also checks the region sheet's Norwegian names, because that is where an untranslated word is
most visible and least likely to be noticed by whoever wrote the prose: COURSE_NO must give every
region a spices[] and a dishes[] of the same length as the English one, and neither may leave a
plain English word standing. Cinnamon is kanel.

This is the structural twin of the Italian course's tastingcheck.py: colour/nose/palate became
aroma/flavour/does, and the Vinmonopolet link became a sourcing note that the Norwegian edition
must carry, because knowing where to buy asafoetida in Norway is the part of this course that
could not be translated into existence.
"""
import json, os, re, subprocess, sys

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
# Words with an ordinary Norwegian equivalent. An Indian name with no Norwegian form (kudampuli,
# gongura, panch phoron) is fine and expected; these are not. Matched whole-word, case-insensitive.
# Note what is NOT here: chili, pepper and soya are the Norwegian words as well as the English
# ones, and flagging them would train whoever runs this to ignore the output.
ENGLISH_SPICE_WORDS = [
    'black', 'white', 'green', 'red', 'cardamom', 'cinnamon', 'clove', 'coconut', 'oil',
    'curry leaf', 'mustard', 'seed', 'seeds', 'powder', 'chilli', 'fennel', 'ginger',
    'sesame', 'poppy', 'bamboo', 'shoot', 'star anise', 'coriander', 'cumin', 'fenugreek',
    'nigella', 'rose', 'mace', 'saffron', 'peanut', 'vinegar', 'toasted', 'fermented',
    'alkali', 'shallot', 'screwpine', 'stone flower', 'leaf', 'water',
]
# Function words that can only be English. "curry" is left out: Pandi curry is the dish's name,
# and Norwegian uses karri for the sauce anyway.
ENGLISH_DISH_WORDS = [
    'with', 'and', 'fried', 'smoked', 'prawn', 'fish', 'coffee', 'chicken', 'pork', 'mutton',
    'rice', 'beef',
]
# Names that are the same in Norwegian because that is what Norwegians call them. A dish on every
# takeaway menu in Oslo under its English name is not an untranslated string.
ALLOWED_AS_IS = {'Butter chicken'}

NODE_COURSE = (
    "const s = require('fs').readFileSync(APPPATH,'utf8');"
    "const i = s.indexOf('const COURSE = {');"
    "const COURSE = eval('(' + s.slice(s.indexOf('{', i), s.indexOf(String.fromCharCode(10) + '};', i) + 2) + ')');"
    "const out = {};"
    "for (const c of Object.keys(COURSE)) out[c] = {spices: (COURSE[c].spices || []).map(x => x[0]),"
    "                                              dishes: (COURSE[c].dishes || []).map(x => x[0])};"
    "console.log(JSON.stringify(out));"
)

NODE_NO = """
global.window = {};
require('./content/course.no.js');
const out = {};
for (const c of Object.keys(window.COURSE_NO || {}))
  out[c] = {spices: (window.COURSE_NO[c].spices || []).map(x => x[0]),
            dishes: (window.COURSE_NO[c].dishes || []).map(x => x[0])};
console.log(JSON.stringify(out));
"""


def english_left(name, words):
    # Anything in brackets is the original name kept as a gloss -- Safran (kong), Spisskummen
    # (jeera), Stekt oksekjott (beef fry) -- and is supposed to be foreign. Lint the name only.
    low = re.sub(r'\([^)]*\)', ' ', name).lower()
    return [w for w in words if re.search(r'(?<![\wæøå])' + re.escape(w) + r'(?![\wæøå])', low)]


def check_sheet_names(problems):
    """COURSE_NO must translate the sheet, and must not leave an English word standing."""
    if not os.path.exists(os.path.join(ROOT, 'content', 'course.no.js')):
        return 0
    en = node(NODE_COURSE.replace('APPPATH', json.dumps(APP)))
    no = node(NODE_NO)
    checked = 0
    for code in ORDER:
        e, n = en.get(code), no.get(code)
        if not n:
            problems.append('%s: no Norwegian entry in course.no.js' % code)
            continue
        for field, words in (('spices', ENGLISH_SPICE_WORDS), ('dishes', ENGLISH_DISH_WORDS)):
            if len(n[field]) != len(e[field]):
                problems.append('%s: %d Norwegian %s against %d English; they are matched by position'
                                % (code, len(n[field]), field, len(e[field])))
                continue
            for name in n[field]:
                if name in ALLOWED_AS_IS:
                    checked += 1
                    continue
                hits = english_left(name, words)
                if hits:
                    problems.append('%s: Norwegian %s name %r still reads as English (%s)'
                                    % (code, 'spice' if field == 'spices' else 'dish',
                                       name, ', '.join(hits)))
                checked += 1
    return checked


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
    spices = {k: v['spices'] for k, v in node(NODE_COURSE.replace('APPPATH', json.dumps(APP))).items()}

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

    names = check_sheet_names(problems)
    done = len([k for k in wanted if k.split('|')[0] in started])
    print('%d spices on the sheets, %d in regions that have been started; %d English cards, %d Norwegian cards'
          % (len(wanted), done, len(en), len(no)))
    print('%d Norwegian sheet names checked for untranslated English' % names)
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
