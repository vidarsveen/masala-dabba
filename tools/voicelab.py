"""Synthesise the same passage in many voices so you can listen and choose one.

Takes a real spoken script (assets/audio/<region>/<lang>-<n>.txt, the exact text the
narration pipeline feeds the voice, Italian proper nouns and all), renders it with every
candidate voice, and writes voicelab/index.html: one row per voice with a player, the
duration, the wall-clock time and what OpenRouter actually charged.

    python tools/voicelab.py                   # one voice per provider, English + Norwegian
    python tools/voicelab.py --all             # every candidate in CANDIDATES below
    python tools/voicelab.py --dry-run         # what it would call, and what it would cost
    python tools/voicelab.py --lang no         # Norwegian only
    python tools/voicelab.py --intro           # also render the opening with and without
                                               #   the summary read out, to settle that
    python tools/voicelab.py --region piemonte --lesson 2 --chars 1200

Open voicelab/index.html in a browser afterwards.
"""
import glob, html as H, json, os, re, sys, time

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tts

ROOT = tts.ROOT
OUT = os.path.join(ROOT, 'voicelab')

# OpenAI's speech models are not available through OpenRouter: every openai/*tts* slug the
# docs and the model pages name returns "Model ... does not exist" (checked 2026-09-11). The
# catalogue below is what the endpoint actually answered to, probed voice by voice.
#
# Each entry: (model, voice per language, label, note). A voice of None means the model has
# nothing for that language and the row is skipped.
CANDIDATES = [
    # Azure's voices under Microsoft's model. Norwegian here is the same Pernille the course
    # already uses through edge-tts, so it is the honest baseline to compare against.
    ('microsoft/mai-voice-2', {'en': 'en-GB-SoniaNeural', 'no': 'nb-NO-PernilleNeural'},
     'MAI · Sonia / Pernille', 'same voices as today, Azure quality'),
    ('microsoft/mai-voice-2', {'en': 'en-GB-LibbyNeural', 'no': 'nb-NO-IselinNeural'},
     'MAI · Libby / Iselin', '15 languages'),
    ('microsoft/mai-voice-2', {'en': 'en-GB-RyanNeural', 'no': 'nb-NO-FinnNeural'},
     'MAI · Ryan / Finn', 'male'),
    # Gemini: 70+ languages, expressive, but PCM only (tts.py encodes it to mp3).
    ('google/gemini-3.1-flash-tts-preview', {'en': 'Kore', 'no': 'Kore'},
     'Gemini · Kore', '70+ languages'),
    ('google/gemini-3.1-flash-tts-preview', {'en': 'Aoede', 'no': 'Aoede'},
     'Gemini · Aoede', '70+ languages'),
    ('google/gemini-3.1-flash-tts-preview', {'en': 'Puck', 'no': 'Puck'},
     'Gemini · Puck', 'male'),
    # Grok: five voices, automatic language detection.
    ('x-ai/grok-voice-tts-1.0', {'en': 'Eve', 'no': 'Eve'}, 'Grok · Eve', '20+ languages'),
    ('x-ai/grok-voice-tts-1.0', {'en': 'Ara', 'no': 'Ara'}, 'Grok · Ara', '20+ languages'),
    ('x-ai/grok-voice-tts-1.0', {'en': 'Leo', 'no': 'Leo'}, 'Grok · Leo', 'male'),
    # Deepgram: 41 English voices, no Norwegian at all.
    ('deepgram/aura-2', {'en': 'aura-2-andromeda-en', 'no': None},
     'Aura-2 · Andromeda', 'English only'),
    ('deepgram/aura-2', {'en': 'aura-2-helena-en', 'no': None},
     'Aura-2 · Helena', 'English only'),
]

# Only these are rendered unless --all is passed: one strong candidate per provider.
SHORTLIST = ['MAI · Sonia / Pernille', 'Gemini · Kore', 'Grok · Eve', 'Aura-2 · Andromeda']

# Delivery steering, only honoured by the OpenAI models. Deliberately plain: this is a
# course, not an advertisement, and the readings already carry their own rhythm.
INSTRUCTIONS = {
    'en': 'Read as an audio course for adults: unhurried, warm, factual. Give Italian place '
          'names, grape names and dish names their Italian pronunciation. Pause a beat at '
          'paragraph breaks. No advertising brightness, no upward inflection at the end of '
          'statements.',
    'no': 'Les som et lydkurs for voksne, på norsk bokmål: rolig, varm, saklig. Italienske '
          'steds-, drue- og rettnavn uttales på italiensk. Kort pause ved avsnittsskift. '
          'Ingen reklameglad tone.',
}

LANG_NAME = {'en': 'English', 'no': 'Norsk'}

# word counts of the standard 850-character sample, for words-per-minute
WORDS = {'en': 139, 'no': 139}


def sample(region, lesson, lang, chars, keep_intro=False):
    """The first `chars` of a real spoken script, cut at a sentence end.

    The script opens with the lesson title and the one-line summary, then the prose. For
    comparing voices we want the prose; keep_intro=True returns the file as written.
    """
    path = os.path.join(ROOT, 'assets', 'audio', region, f'{lang}-{lesson}.txt')
    if not os.path.exists(path):
        sys.exit(f'no spoken script at {path} (run tools/narrate.py for that region first)')
    text = open(path, encoding='utf-8').read().strip()
    if not keep_intro:
        paras = re.split(r'\n\s*\n', text)
        text = '\n\n'.join(paras[2:]).strip()      # drop title line and summary line
    if len(text) <= chars:
        return text
    cut = text.rfind('. ', 0, chars)
    return text[:cut + 1] if cut > 0 else text[:chars]


def slug(s):
    return re.sub(r'[^a-z0-9]+', '-', (s or 'default').lower()).strip('-')


def render(rows, samples, meta):
    """Write voicelab/index.html."""
    css = """
:root{color-scheme:dark}
body{margin:0;padding:24px 16px 64px;background:#14110f;color:#efe7dd;
  font:15px/1.55 ui-sans-serif,system-ui,'Segoe UI',sans-serif;max-width:900px;margin-inline:auto}
h1{font-size:24px;margin:0 0 4px}
h2{font-size:17px;margin:34px 0 10px;color:#e2c489;font-weight:600}
p.sub{color:#a99c8e;margin:0 0 22px}
table{width:100%;border-collapse:collapse;font-size:14px}
th{text-align:left;font-weight:600;color:#a99c8e;font-size:12px;letter-spacing:.06em;
  text-transform:uppercase;padding:0 10px 8px 0;border-bottom:1px solid #2e2723}
td{padding:11px 10px 11px 0;border-bottom:1px solid #221d1a;vertical-align:middle}
td.voice{font-weight:600;white-space:nowrap}
td.note{color:#a99c8e;font-size:13px}
td.num{color:#a99c8e;font-variant-numeric:tabular-nums;white-space:nowrap}
audio{height:34px;width:260px;max-width:44vw;vertical-align:middle}
.err{color:#e08a7a;font-size:13px}
td.hot{color:#e0a97a}
p.legend{color:#7d7168;font-size:12px;margin:10px 0 0;line-height:1.5}
details{margin:18px 0;background:#1c1815;border:1px solid #2e2723;border-radius:10px;padding:12px 14px}
summary{cursor:pointer;color:#e2c489;font-weight:600}
pre{white-space:pre-wrap;color:#cdc0b2;font-size:13px;margin:12px 0 0;
  font-family:ui-monospace,'Cascadia Mono',monospace}
.foot{color:#7d7168;font-size:12px;margin-top:28px}
@media(max-width:560px){td.note{display:none}th.note{display:none}audio{width:180px}}
"""
    parts = ['<meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">',
             '<title>Voice lab &mdash; Masala Dabba</title>', f'<style>{css}</style>',
             '<h1>Voice lab</h1>',
             f'<p class="sub">{H.escape(meta["region"])} &middot; reading {meta["lesson"]} &middot; '
             f'{meta["chars"]} characters per clip &middot; built {meta["built"]}</p>']

    for lang in meta['langs']:
        got = [r for r in rows if r['lang'] == lang]
        if not got:
            continue
        parts.append(f'<h2>{LANG_NAME.get(lang, lang)}</h2>')
        parts.append('<table><tr><th>Voice</th><th>Listen</th><th>Pace</th>'
                     '<th title="standard deviation of pitch in semitones: under 1.5 is flat, '
                     'over 4 performs at you">Pitch</th>'
                     '<th title="EBU R128 loudness range: over 8 LU means reaching for the '
                     'volume">Level</th><th>Cost</th><th class="note">Model</th></tr>')
        for r in got:
            if r.get('error'):
                parts.append(f'<tr><td class="voice">{H.escape(r["label"])}</td>'
                             f'<td colspan="6" class="err">{H.escape(r["error"][:200])}</td></tr>')
                continue
            src = H.escape(os.path.basename(r['file']))
            m = r.get('metrics') or {}
            num = lambda v, s='': f'{v}{s}' if v is not None else '&mdash;'
            # the two columns that decide whether a voice is tiring over hours
            pitch, lra = m.get('pitch_sd_st'), m.get('lra')
            pc = 'hot' if pitch and pitch > 4 else 'flat' if pitch and pitch < 1.5 else ''
            lc = 'hot' if lra and lra > 8 else ''
            parts.append(f'<tr><td class="voice">{H.escape(r["label"])}</td>'
                         f'<td><audio controls preload="none" src="{src}"></audio></td>'
                         f'<td class="num">{num(m.get("wpm"))}</td>'
                         f'<td class="num {pc}">{num(pitch, " st")}</td>'
                         f'<td class="num {lc}">{num(lra, " LU")}</td>'
                         f'<td class="num">{"$%.4f" % r["cost"] if r.get("cost") else "&mdash;"}</td>'
                         f'<td class="note">{H.escape(r["model"].split("/")[-1])}</td></tr>')
        parts.append('</table>')
        parts.append('<p class="legend">Pace is words a minute (audiobooks sit near 150). '
                     'Pitch is how far the voice swings, in semitones &mdash; steady narration '
                     'is 2&ndash;3.5, over 4 performs at you. Level is EBU R128 loudness range; '
                     'a wide one means adjusting the volume between chapters.</p>')
        parts.append(f'<details><summary>The text these clips read</summary>'
                     f'<pre>{H.escape(samples.get(lang, ""))}</pre></details>')

    total = sum(r.get('cost') or 0 for r in rows)
    parts.append(f'<p class="foot">{len(rows)} clips &middot; '
                 f'total charged ${total:.4f} &middot; '
                 f'rebuild with <code>python tools/voicelab.py</code></p>')
    os.makedirs(OUT, exist_ok=True)
    path = os.path.join(OUT, 'index.html')
    open(path, 'w', encoding='utf-8').write('\n'.join(parts))
    return path


# ---------------------------------------------------------------- rebuild from disk

# Filename fragment -> how the row should read. Longest match wins.
LABELS = [
    ('nb-kvinne-rolig-t095',       'NbAiLab · Kvinne — 95% speed', 'slowed with atempo'),
    ('nb-kvinne-rolig-t090',       'NbAiLab · Kvinne — 90% speed', 'slowed with atempo'),
    ('nb-kvinne-rolig-t085',       'NbAiLab · Kvinne — 85% speed', 'slowed with atempo'),
    ('nb-kvinne-rolig-t080',       'NbAiLab · Kvinne — 80% speed', 'slowed with atempo'),
    ('nb-kvinne-rolig',            'NbAiLab · Kvinne (Rolig)',  'National Library, Norwegian-trained'),
    ('nb-kvinne-normal',           'NbAiLab · Kvinne (Normal)', 'National Library, Norwegian-trained'),
    ('nb-mann-rolig',              'NbAiLab · Mann (Rolig)',    'National Library, Norwegian-trained'),
    ('nb-mann-normal',             'NbAiLab · Mann (Normal)',   'National Library, Norwegian-trained'),
    ('mai-voice-2-nb-no-pernille', 'MAI · Pernille',            'your original voice, Azure quality'),
    ('mai-voice-2-nb-no-iselin',   'MAI · Iselin',              'native nb-NO'),
    ('mai-voice-2-nb-no-finn',     'MAI · Finn',                'native nb-NO, male'),
    ('mai-voice-2-en-gb-sonia',    'MAI · Sonia',               'your original English voice'),
    ('mai-voice-2-en-gb-libby',    'MAI · Libby',               'native en-GB'),
    ('mai-voice-2-en-gb-ryan',     'MAI · Ryan',                'native en-GB, male'),
    ('gemini-3-1-flash-tts-preview-kore',  'Gemini · Kore',  'what the 24 re-recorded files use'),
    ('gemini-3-1-flash-tts-preview-aoede', 'Gemini · Aoede', 'multilingual'),
    ('gemini-3-1-flash-tts-preview-puck',  'Gemini · Puck',  'multilingual, male'),
    ('grok-voice-tts-1-0-eve',     'Grok · Eve',                'multilingual'),
    ('grok-voice-tts-1-0-ara',     'Grok · Ara',                'multilingual'),
    ('grok-voice-tts-1-0-leo',     'Grok · Leo',                'multilingual, male'),
    ('aura-2-andromeda',           'Aura-2 · Andromeda',        'English specialist'),
    ('aura-2-thalia',              'Aura-2 · Thalia',           'English specialist, their default'),
    ('aura-2-asteria',             'Aura-2 · Asteria',          'English specialist'),
    ('minimax-graceful',           'MiniMax · Graceful Lady',   'arena top-15'),
    ('minimax-narrator',           'MiniMax · Expressive Narrator', 'arena top-15'),
    ('aura-2-helena',              'Aura-2 · Helena',           'English specialist'),
    ('opening-with',               'Opening — summary read out','flow test'),
    ('opening-without',            'Opening — straight to prose','flow test'),
]


def rebuild(langs=('no', 'en')):
    """Rebuild index.html from the clips already on disk. Measures, never calls an API."""
    import voicemetrics
    rows = []
    for f in sorted(glob.glob(os.path.join(OUT, '*.mp3'))):
        base = os.path.basename(f)
        if base.startswith('_'):
            continue
        lang = base.split('-')[0]
        if lang not in langs:
            continue
        hit = max((l for l in LABELS if l[0] in base), key=lambda l: len(l[0]), default=None)
        label, note = (hit[1], hit[2]) if hit else (base[:-4], '')
        print(f'  measuring {base} …', flush=True)
        try:
            m = voicemetrics.measure(f, words=WORDS.get(lang))
        except Exception as e:
            print(f'    failed: {e}')
            m = {}
        rows.append({'lang': lang, 'label': label, 'note': note, 'file': f,
                     'model': note, 'seconds': m.get('seconds'), 'cost': None, 'metrics': m})
    # steadiest first: the whole point of the page
    rows.sort(key=lambda r: (r['lang'] != 'no', (r['metrics'] or {}).get('wpm') or 0))
    samples = {}
    for lang in langs:
        try:
            samples[lang] = sample('lazio', 1, lang, 850)
        except SystemExit:
            pass
    meta = {'region': 'lazio', 'lesson': 1, 'chars': 850,
            'langs': [l for l in langs if any(r['lang'] == l for r in rows)],
            'built': time.strftime('%Y-%m-%d %H:%M')}
    return render(rows, samples, meta)


def main():
    a = sys.argv[1:]
    def opt(name, default=None):
        return a[a.index(name) + 1] if name in a else default

    if '--rebuild' in a:
        print('open ' + rebuild())
        return

    region = opt('--region', 'lazio')
    lesson = int(opt('--lesson', '1'))
    chars = int(opt('--chars', '850'))
    langs = [s for s in opt('--lang', 'en,no').split(',') if s]
    steer = '--instructions' in a           # only some providers honour it; off by default
    ref = opt('--intro-voice', 'MAI · Sonia / Pernille')

    picked = CANDIDATES if '--all' in a else [c for c in CANDIDATES if c[2] in SHORTLIST]
    if opt('--label'):
        want = [s.strip() for s in opt('--label').split(',')]
        picked = [c for c in CANDIDATES if any(w.lower() in c[2].lower() for w in want)]
    jobs = [(m, voices, label, note) for m, voices, label, note in picked]

    samples = {L: sample(region, lesson, L, chars) for L in langs}
    clips = [(m, v[L], label, note, L) for m, v, label, note in jobs for L in langs if v.get(L)]
    total_chars = sum(len(samples[L]) for _, _, _, _, L in clips)
    print(f'{region} reading {lesson}: ' + ', '.join(f'{L}={len(samples[L])} chars' for L in langs))
    print(f'{len(clips)} clips, {total_chars:,} characters '
          f'(roughly ${total_chars / 1e6 * 20:.2f} at typical TTS rates)')
    if '--dry-run' in a:
        for m, v, label, note, L in clips:
            print(f'  {L}  {label:<26} {m}  voice={v}  ({note})')
        return

    os.makedirs(OUT, exist_ok=True)
    rows = []
    for model, voice, label, note, lang in clips:
        name = f'{lang}-{slug(model.split("/")[-1])}-{slug(voice)}.mp3'
        dst = os.path.join(OUT, name)
        print(f'  {lang} {label:<26} …', end='', flush=True)
        t0 = time.time()
        try:
            info = tts.speak_to_file(samples[lang], dst, model=model, voice=voice,
                                     instructions=INSTRUCTIONS[lang] if steer else None,
                                     verbose=False)
            rows.append({'lang': lang, 'label': label, 'model': model, 'voice': voice,
                         'file': dst, 'note': note, **info})
            print(f' {info["seconds"]}s audio in {time.time() - t0:.0f}s'
                  + (f', ${info["cost"]:.4f}' if info.get('cost') else ''))
        except Exception as e:
            rows.append({'lang': lang, 'label': label, 'model': model, 'voice': voice,
                         'file': '', 'note': note, 'error': str(e)})
            print(f' FAILED: {str(e)[:140]}')

    # The flow question: does the spoken teaser before the prose help, or get in the way?
    if '--intro' in a:
        cand = next((c for c in CANDIDATES if c[2] == ref), CANDIDATES[0])
        for lang in langs:
            v = cand[1].get(lang)
            if not v:
                continue
            for kind, keep in [('with the summary read out', True),
                               ('straight into the prose', False)]:
                text = sample(region, lesson, lang, chars, keep_intro=keep)
                dst = os.path.join(OUT, f'{lang}-opening-{"with" if keep else "without"}.mp3')
                print(f'  {lang} opening · {kind} …', end='', flush=True)
                try:
                    info = tts.speak_to_file(text, dst, model=cand[0], voice=v,
                                             instructions=INSTRUCTIONS[lang] if steer else None,
                                             verbose=False)
                    rows.append({'lang': lang, 'label': f'opening — {kind}', 'model': cand[0],
                                 'voice': v, 'file': dst, 'note': 'flow test', **info})
                    print(' ok')
                except Exception as e:
                    print(f' FAILED: {str(e)[:140]}')

    import voicemetrics
    for r in rows:
        if r.get('error') or not r.get('file'):
            continue
        try:
            r['metrics'] = voicemetrics.measure(r['file'], words=len(samples[r['lang']].split()))
        except Exception as e:
            print(f'  metrics failed for {r["label"]}: {e}')

    meta = {'region': region, 'lesson': lesson, 'chars': chars, 'langs': langs,
            'built': time.strftime('%Y-%m-%d %H:%M')}
    page = render(rows, samples, meta)
    json.dump(rows, open(os.path.join(OUT, 'results.json'), 'w', encoding='utf-8'), indent=1)
    ok = [r for r in rows if not r.get('error')]
    print(f'\n{len(ok)}/{len(rows)} clips, ${sum(r.get("cost") or 0 for r in ok):.4f} charged')
    print('open ' + page)


if __name__ == '__main__':
    main()
