"""Prepare, audit and record the 14 bilingual regional introductions.

The region sheets are the single source of truth. Running without --generate is safe and
prints the planned scripts. Generation is explicit because OpenRouter's Puck route costs
money; use it first for the approved short Indian-name audition.

    python tools/record_intros.py --list
    python tools/record_intros.py --write
    python tools/record_intros.py punjab --lang no --check
    python tools/record_intros.py punjab --lang no --generate --delivery puck

Files are assets/audio/<stem>/<lang>-intro.{txt,mp3}. Manifest entries use the same key.
"""
import argparse
import asyncio
import hashlib
import json
import os
import re
import sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import APP, REGIONS, ROOT
import narrate


def _value(source, code, field):
    entry = re.search(r"'" + re.escape(code) + r"':\{(.*?)(?=\n\s*'[A-Z]{2}-|\n\};)",
                      source, re.S)
    if not entry:
        return None
    match = re.search(r'\b' + field + r':(["\'])((?:\\.|(?!\1).)*)\1', entry.group(1), re.S)
    if not match:
        return None
    return (match.group(2).replace(r'\"', '"').replace(r"\'", "'")
            .replace(r'\n', '\n').replace(r'\u2013', '–').replace(r'\u00e5', 'å'))


def sources():
    with open(APP, encoding='utf-8') as fh:
        english = fh.read()
    with open(os.path.join(ROOT, 'content', 'course.no.js'), encoding='utf-8') as fh:
        norwegian = fh.read()
    out = {}
    for region in REGIONS:
        code, stem = region['code'], region['stem']
        out[(stem, 'en')] = (_value(english, code, 'name'), _value(english, code, 'intro'))
        out[(stem, 'no')] = (_value(norwegian, code, 'name'), _value(norwegian, code, 'intro'))
    return out


def script_for(name, intro):
    if not name or not intro:
        raise ValueError('missing region name or introduction')
    return name.rstrip('.') + '.\n\n' + intro.strip()


def fingerprint(script):
    return hashlib.sha256(script.encode('utf-8')).hexdigest()


async def generate(stem, lang, script, delivery):
    outdir = os.path.join(ROOT, 'assets', 'audio', stem)
    os.makedirs(outdir, exist_ok=True)
    key = f'{lang}-intro'
    txt = os.path.join(outdir, key + '.txt')
    mp3 = os.path.join(outdir, key + '.mp3')
    low = os.path.join(outdir, key + '.lo.mp3')
    with open(txt, 'w', encoding='utf-8') as fh:
        fh.write(script)
    if delivery == 'puck':
        if lang != 'no':
            raise SystemExit('Puck delivery is approved for Norwegian introductions only')
        info = narrate.synth_openrouter(script, lang, mp3, narrate.PUCK_MODEL,
                                        narrate.PUCK_VOICE, prompt_prefix=narrate.PUCK_DIRECTION)
        voice = f'{info["model"]}/{info["voice"]}'
        cost = info.get('cost')
    else:
        await narrate.synth(script, narrate.VOICES[lang], mp3)
        voice, cost = narrate.VOICES[lang], None
    narrate.compress(mp3, low)
    path = os.path.join(outdir, 'manifest.json')
    if os.path.exists(path):
        with open(path, encoding='utf-8') as fh:
            manifest = json.load(fh)
    else:
        manifest = {}
    manifest[key] = {'seconds': narrate.duration(mp3), 'voice': voice,
                     'bytes': os.path.getsize(mp3), 'lo_bytes': os.path.getsize(low),
                     'kind': 'region-introduction', 'script_sha256': fingerprint(script)}
    if delivery == 'puck':
        manifest[key]['delivery'] = 'puck'
    if cost:
        manifest[key]['cost'] = cost
    with open(path, 'w', encoding='utf-8') as fh:
        json.dump(manifest, fh, ensure_ascii=False, indent=1)
    return manifest[key]


async def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('region', nargs='?', choices=[r['stem'] for r in REGIONS])
    parser.add_argument('--lang', choices=('en', 'no'))
    parser.add_argument('--list', action='store_true')
    parser.add_argument('--write', action='store_true',
                        help='write final transcript files without contacting a speech service')
    parser.add_argument('--check', action='store_true')
    parser.add_argument('--generate', action='store_true')
    parser.add_argument('--delivery', choices=('edge', 'puck'), default='edge')
    args = parser.parse_args()
    selected = [args.region] if args.region else [r['stem'] for r in REGIONS]
    languages = [args.lang] if args.lang else ['en', 'no']
    material = sources()
    failed = 0
    for stem in selected:
        for lang in languages:
            name, intro = material[(stem, lang)]
            script = script_for(name, intro)
            path = os.path.join(ROOT, 'assets', 'audio', stem, f'{lang}-intro.txt')
            if args.write:
                os.makedirs(os.path.dirname(path), exist_ok=True)
                with open(path, 'w', encoding='utf-8') as fh:
                    fh.write(script)
                print(f'WROTE {stem} {lang}-intro')
            elif args.check:
                current = open(path, encoding='utf-8').read() if os.path.exists(path) else None
                ok = current == script
                print(('OK    ' if ok else 'STALE ') + f'{stem} {lang}-intro')
                failed += not ok
            elif args.generate:
                meta = await generate(stem, lang, script, args.delivery)
                print(f'{stem} {lang}-intro: {meta}')
            else:
                print(f'{stem} {lang}-intro ({len(script.split())} words): {script}')
    if args.check and failed:
        raise SystemExit(1)


if __name__ == '__main__':
    asyncio.run(main())
