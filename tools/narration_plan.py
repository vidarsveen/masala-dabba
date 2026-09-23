"""Build the deterministic 140-track production plan without generating audio.

The output freezes stable IDs, final script hashes and word/character counts for the
14 introductions and 56 readings in both languages. It contains no credentials or audio.

    python tools/narration_plan.py
    python tools/narration_plan.py --check
"""
import argparse
import hashlib
import json
import os
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import REGIONS, ROOT
import audiobook
import narrate
import record_intros

OUTPUT = os.path.join(ROOT, 'docs', 'italy-transfer', 'narration-plan.json')


def digest(script):
    return hashlib.sha256(script.encode('utf-8')).hexdigest()


def build_plan():
    introductions = record_intros.sources()
    rows = []
    for lang in ('en', 'no'):
        names = dict((code, name) for code, _, name in audiobook.course_order(lang))
        for region in REGIONS:
            code, stem = region['code'], region['stem']
            name, introduction = introductions[(stem, lang)]
            script = record_intros.script_for(name, introduction)
            rows.append({
                'id': f'{code}:intro', 'lang': lang, 'region': stem, 'kind': 'introduction',
                'title': names.get(code, name), 'words': len(script.split()),
                'characters': len(script), 'script_sha256': digest(script),
            })
            filename = f'{stem}.js' if lang == 'en' else f'{stem}.{lang}.js'
            lessons = narrate.lessons_from(os.path.join(ROOT, 'content', filename))
            for number, lesson in enumerate(lessons, 1):
                script = narrate.to_script(
                    lesson, lang, intro=narrate.STANDARD_INTRO,
                    drop=narrate.STANDARD_DROP.split(','), outro=narrate.STANDARD_OUTRO)
                rows.append({
                    'id': f'{code}:reading-{number}', 'lang': lang, 'region': stem,
                    'kind': 'reading', 'title': lesson['title'], 'words': len(script.split()),
                    'characters': len(script), 'script_sha256': digest(script),
                })
    return {
        'format': {
            'intro': narrate.STANDARD_INTRO,
            'drop': narrate.STANDARD_DROP,
            'outro': narrate.STANDARD_OUTRO,
        },
        'tracks': rows,
        'totals': {
            lang: {
                'tracks': sum(row['lang'] == lang for row in rows),
                'words': sum(row['words'] for row in rows if row['lang'] == lang),
                'characters': sum(row['characters'] for row in rows if row['lang'] == lang),
            } for lang in ('en', 'no')
        },
    }


def serialized(plan):
    return json.dumps(plan, ensure_ascii=False, indent=2) + '\n'


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--check', action='store_true')
    args = parser.parse_args()
    text = serialized(build_plan())
    if args.check:
        current = open(OUTPUT, encoding='utf-8').read() if os.path.exists(OUTPUT) else None
        if current != text:
            raise SystemExit('STALE ' + os.path.relpath(OUTPUT, ROOT))
        print('OK    ' + os.path.relpath(OUTPUT, ROOT))
        return
    with open(OUTPUT, 'w', encoding='utf-8') as output:
        output.write(text)
    plan = json.loads(text)
    for lang in ('en', 'no'):
        total = plan['totals'][lang]
        print(f'{lang}: {total["tracks"]} tracks, {total["words"]} words, '
              f'{total["characters"]} characters')
    print('wrote ' + os.path.relpath(OUTPUT, ROOT))


if __name__ == '__main__':
    main()
