"""Check the recap questions in content/quiz.js and content/quiz.no.js against docs/quiz-format.md.

    PYTHONIOENCODING=utf-8 python tools/quizcheck.py [IN-KER ...]

Exits non-zero if anything is wrong, so it can gate a build.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, APP
import json
import os
import re
import subprocess
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

NODE = r"""
global.window = {};
require('./content/quiz.js');
require('./content/quiz.no.js');
console.log(JSON.stringify({en: window.QUIZ || {}, no: window.QUIZ_NO || {}}));
"""


def load():
    r = subprocess.run(['node', '-e', NODE], cwd=ROOT, capture_output=True, text=True, encoding='utf-8')
    if r.returncode:
        print('PARSE FAILED\n' + (r.stderr or '')[-800:])
        sys.exit(1)
    return json.loads(r.stdout)


def check_region(code, lessons, lang, problems):
    where = '%s %s' % (code, lang)
    if not isinstance(lessons, list) or len(lessons) != 4:
        problems.append('%s: expected 4 lessons, got %s' % (where, len(lessons) if isinstance(lessons, list) else type(lessons).__name__))
        return
    corrects = []
    for li, qs in enumerate(lessons, 1):
        if not isinstance(qs, list) or len(qs) != 3:
            problems.append('%s lesson %d: expected 3 questions, got %s' % (where, li, len(qs) if isinstance(qs, list) else '?'))
            continue
        for qi, q in enumerate(qs, 1):
            at = '%s lesson %d q%d' % (where, li, qi)
            for k in ('q', 'a', 'c', 'why'):
                if k not in q:
                    problems.append('%s: missing "%s"' % (at, k))
            if 'a' in q:
                if not isinstance(q['a'], list) or len(q['a']) != 4:
                    problems.append('%s: needs exactly 4 answers' % at)
                elif len({x.strip().lower() for x in q['a']}) != 4:
                    problems.append('%s: duplicate answers' % at)
                elif any(not str(x).strip() for x in q['a']):
                    problems.append('%s: blank answer' % at)
                for x in q['a']:
                    if re.match(r'^\s*(all|none) of the above', str(x), re.I):
                        problems.append('%s: "%s" is not allowed' % (at, x))
            if 'c' in q:
                if not isinstance(q['c'], int) or not 0 <= q['c'] <= 3:
                    problems.append('%s: c must be 0-3, got %r' % (at, q['c']))
                else:
                    corrects.append(q['c'])
            if 'q' in q and not str(q['q']).strip().endswith('?'):
                problems.append('%s: question does not end with a question mark' % at)
            if 'why' in q and len(str(q['why']).split()) < 4:
                problems.append('%s: "why" is too short to explain anything' % at)
    if corrects and len(set(corrects)) == 1:
        problems.append('%s: every correct answer is index %d' % (where, corrects[0]))


def main():
    if not os.path.exists(os.path.join(ROOT, 'content', 'quiz.js')):
        print('no content/quiz.js yet: nothing to check')
        return
    data = load()
    en, no = data['en'], data['no']
    wanted = [a for a in sys.argv[1:] if a.startswith('IN-')] or sorted(set(en) | set(no))
    problems = []
    for code in wanted:
        if code not in en:
            problems.append('%s: missing from quiz.js' % code); continue
        if code not in no:
            problems.append('%s: missing from quiz.no.js' % code); continue
        check_region(code, en[code], 'EN', problems)
        check_region(code, no[code], 'NO', problems)
        try:
            for li in range(4):
                for qi in range(3):
                    if en[code][li][qi]['c'] != no[code][li][qi]['c']:
                        problems.append('%s lesson %d q%d: correct index differs between languages'
                                        % (code, li + 1, qi + 1))
        except Exception:
            pass
    n = len(wanted)
    print('%d region(s), %d questions per language' % (n, n * 12))
    if problems:
        print('\n'.join('  ' + p for p in problems))
        print('%d problem(s)' % len(problems))
        sys.exit(1)
    print('OK')


if __name__ == '__main__':
    main()
