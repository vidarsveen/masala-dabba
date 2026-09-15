"""Generate narration audio for the readings.

Reads content/<region>.js (English) and content/<region>.no.js (Norwegian), turns each
lesson into a spoken script (figures and credits dropped, fact boxes and tasting tables read as
sentences), synthesises it with a neural voice, and writes:

  assets/audio/<region>/<lang>-<n>.mp3      48 kbit/s, for self-hosting
  assets/audio/<region>/<lang>-<n>.lo.mp3   20 kbit/s mono, small enough to inline in the artifact
  assets/audio/<region>/manifest.json       durations in seconds

Two engines:
  --engine edge        Microsoft Edge neural voices, free, the default (what the Italian course used for all 160 of its files)
  --engine openrouter  OpenRouter's OpenAI-compatible speech endpoint (tools/tts.py, needs
                       OPENROUTER_API_KEY in .env). Pick the voice with tools/voicelab.py.
  --engine nbtts       The National Library of Norway's Norwegian model (tools/nbtts.py), free,
                       no key. --voice 'Kvinne · Oslo' or 'Mann · Oslo', --pace Rolig|Normal|Rask,
                       --tempo 0.95 to stretch the delivery without moving the pitch.

The spoken script opens with the lesson title and, with --intro full, its one-line summary.
--intro title reads the title only; --intro none starts at the prose. --drop names what is
left out of the narration (never the page): facts, recap, tasting, headings. The standard
from 2026-09-14 is `--intro title --drop facts,recap,tasting,headings` (STANDARD_INTRO and
STANDARD_DROP below): boxes and section labels are for the eye, and read aloud they were the
"small cryptic messages" the owner complained about. The 112 files recorded before that date
used `--intro title --drop facts,recap`, so they still speak the spice table and every
heading. Changing either setting changes the script, so every file rendered with a different
setting is a deliberate re-record; the settings are written to manifest.json so `stale.py`
compares like with like.

--outro none leaves out the closing line ("End of this reading."), which is the standard too: the
audiobook plays readings straight through and the line is noise between chapters.

Usage: python tools/narrate.py bengal --intro title --drop facts,recap,tasting,headings --outro none [--only en-3]
       python tools/narrate.py bengal --engine openrouter --voice nova --intro title
"""
import asyncio, html, json, os, re, subprocess, sys
import edge_tts, imageio_ffmpeg

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
VOICES = {'en': 'en-GB-SoniaNeural', 'no': 'nb-NO-PernilleNeural'}
DROPPABLE = ('facts', 'recap', 'tasting', 'headings')
# What every recording made from 2026-09-14 on uses: the title, then the prose, nothing that is
# a box or a label on screen. Older files carry their own settings in manifest.json.
STANDARD_INTRO = 'title'
STANDARD_DROP = 'facts,recap,tasting,headings'
STANDARD_OUTRO = 'none'      # 'line' speaks "End of this reading." / «Slutt på leseteksten.»
RATE = '-4%'
ARGS = sys.argv[1:]

def arg(name, default=None):
    return ARGS[ARGS.index(name) + 1] if name in ARGS else default

def lessons_from(path):
    src = open(path, encoding='utf-8').read()
    pat = re.compile(r'title:\s*"((?:[^"\\]|\\.)*)",\s*kicker:\s*"((?:[^"\\]|\\.)*)",\s*minutes:\s*(\d+),\s*hero:\s*"[^"]*",\s*heroCaption:\s*"(?:[^"\\]|\\.)*",\s*summary:\s*"((?:[^"\\]|\\.)*)",\s*html:\s*`(.*?)`', re.S)
    out = []
    for m in pat.finditer(src):
        unesc = lambda t: t.replace("\\'", "'").replace('\\"', '"')
        out.append({'title': unesc(m.group(1)), 'kicker': unesc(m.group(2)), 'minutes': int(m.group(3)), 'summary': unesc(m.group(4)), 'html': m.group(5)})
    return out

def to_script(lesson, lang, intro='full', drop=(), outro='line'):
    h = lesson['html']
    h = re.sub(r'<figure.*?</figure>', ' ', h, flags=re.S)
    # Boxes that are lists rather than prose. Spoken, they interrupt the reading; on screen
    # they are what the eye goes to. --drop facts,recap leaves them out of the narration only.
    if 'facts' in drop:
        h = re.sub(r'<aside class="facts">.*?</aside>', ' ', h, flags=re.S)
    if 'recap' in drop:
        h = re.sub(r'<div class="recap">.*?</div>', ' ', h, flags=re.S)
    if 'tasting' in drop:
        h = re.sub(r'<aside class="tasting">.*?</aside>', ' ', h, flags=re.S)
    # tables: "Colour: value."
    h = re.sub(r'<tr><th>(.*?)</th><td>(.*?)</td></tr>', lambda m: f' {m.group(1)}: {m.group(2)}.\n', h, flags=re.S)
    h = re.sub(r'<h4>(.*?)</h4>', r'\n\1.\n', h, flags=re.S)
    # Section headings are labels for the eye. Spoken, "The line through Punjab." is a fragment
    # with a pause either side, and the listener has to guess what it was for. --drop headings
    # keeps the paragraph break and loses the words; the prose has to carry its own transitions.
    if 'headings' in drop:
        h = re.sub(r'<h2>.*?</h2>', '\n\n', h, flags=re.S)
    else:
        h = re.sub(r'<h2>(.*?)</h2>', r'\n\n\1.\n\n', h, flags=re.S)
    h = re.sub(r'<li>(.*?)</li>', lambda m: '\n' + m.group(1).strip().rstrip('.') + '.\n', h, flags=re.S)
    h = re.sub(r'</p>|</aside>|</div>|</ul>', '\n', h)
    h = re.sub(r'<[^>]+>', '', h)
    h = html.unescape(h)
    h = re.sub(r'[ \t]+', ' ', h)
    h = re.sub(r'\n\s*\n+', '\n\n', h).strip()
    head = {'full': f"{lesson['title']}.\n\n{lesson['summary']}\n\n",
            'title': f"{lesson['title']}.\n\n",
            'none': ''}[intro]
    # The closing line was written for a single reading in the reader. Played straight through
    # as an audiobook it is noise between chapters, so the standard from 2026-09-14 is none.
    tail = ("\n\nSlutt på leseteksten." if lang == 'no' else "\n\nEnd of this reading.") if outro == 'line' else ''
    return head + h + tail

async def synth(text, voice, out):
    c = edge_tts.Communicate(text, voice, rate=RATE)
    await c.save(out)

# Every existing Norwegian file sits between 126 and 157 words a minute. A rendering outside a
# generous band around that is wrong in one of two ways, and both happen with neural TTS on a
# long script: too few seconds for the words means the model silently dropped part of the text;
# too many means it rambled or repeated a passage. Catch both here rather than on the phone.
SLOWEST_WPM = 190          # faster than this => the audio is too short => text was dropped
FASTEST_WPM = 95           # slower than this => the audio is too long => model rambled

def rate_ok(seconds, words, tempo=1.0):
    """(ok, wpm, why). tempo<1 stretches the audio, so scale the band with it."""
    if not seconds or not words:
        return True, None, ''
    wpm = words / seconds * 60
    lo, hi = FASTEST_WPM * tempo, SLOWEST_WPM * tempo
    if wpm > hi:
        return False, wpm, 'too short, text was dropped'
    if wpm < lo:
        return False, wpm, 'too long, the model rambled or repeated'
    return True, wpm, ''

def synth_openrouter(text, lang, out, model, voice, instructions=None, tries=2):
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import tts
    # No tone steering unless asked for: only some providers honour `instructions`, and the
    # voice was chosen from voicelab clips rendered without it. Match what was approved.
    words = len(text.split())
    for attempt in range(1, tries + 1):
        info = tts.speak_to_file(text, out, model=model, voice=voice,
                                 instructions=instructions)
        ok, wpm, why = rate_ok(info.get('seconds'), words)
        if ok:
            return info
        print(f'   {why}: {info["seconds"]}s for {words} words = {wpm:.0f} wpm'
              + (f', retrying ({attempt}/{tries})' if attempt < tries else ', KEEPING ANYWAY'),
              flush=True)
    info['suspect'] = why
    return info

def synth_nbtts(text, out, voice, pace, tempo, tries=3):
    sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
    import nbtts
    words = len(text.split())
    for attempt in range(1, tries + 1):
        info = nbtts.speak_to_file(text, out, voice=voice, pace=pace, tempo=tempo)
        ok, wpm, why = rate_ok(info.get('seconds'), words, tempo)
        if ok:
            return info
        print(f'   {why}: {info["seconds"]}s for {words} words = {wpm:.0f} wpm'
              + (f', retrying ({attempt}/{tries})' if attempt < tries else ', KEEPING ANYWAY'),
              flush=True)
    info['suspect'] = why
    return info

def duration(path):
    ff = imageio_ffmpeg.get_ffmpeg_exe()
    r = subprocess.run([ff, '-i', path], capture_output=True, text=True)
    m = re.search(r'Duration: (\d+):(\d+):(\d+\.\d+)', r.stderr)
    return round(int(m.group(1))*3600 + int(m.group(2))*60 + float(m.group(3)), 1) if m else None

def compress(src, dst):
    ff = imageio_ffmpeg.get_ffmpeg_exe()
    subprocess.run([ff, '-y', '-loglevel', 'error', '-i', src, '-ac', '1', '-ar', '16000', '-b:a', '20k', '-codec:a', 'libmp3lame', dst], check=True)

async def main():
    region = sys.argv[1]
    only = arg('--only')
    engine = arg('--engine', 'edge')
    intro = arg('--intro', 'full')
    model = arg('--model')
    voice_override = arg('--voice')
    instructions = arg('--instructions')
    drop = tuple(s.strip() for s in (arg('--drop') or '').split(',') if s.strip())
    outro = arg('--outro', 'line')
    if intro not in ('full', 'title', 'none'):
        sys.exit('--intro takes full, title or none')
    if outro not in ('line', 'none'):
        sys.exit('--outro takes line or none')
    bad = [d for d in drop if d not in DROPPABLE]
    if bad:
        sys.exit(f'--drop takes any of {", ".join(DROPPABLE)}, not {bad}')
    outdir = os.path.join(ROOT, 'assets', 'audio', region); os.makedirs(outdir, exist_ok=True)
    manifest_path = os.path.join(outdir, 'manifest.json')
    manifest = json.load(open(manifest_path, encoding='utf-8')) if os.path.exists(manifest_path) else {}
    want = arg('--lang')
    for lang, fname in [('en', f'{region}.js'), ('no', f'{region}.no.js')]:
        if want and lang != want: continue
        path = os.path.join(ROOT, 'content', fname)
        if not os.path.exists(path): continue
        for i, L in enumerate(lessons_from(path), start=1):
            key = f'{lang}-{i}'
            if only and only != key: continue
            script = to_script(L, lang, intro, drop, outro)
            open(os.path.join(outdir, f'{key}.txt'), 'w', encoding='utf-8').write(script)
            out = os.path.join(outdir, f'{key}.mp3'); lo = os.path.join(outdir, f'{key}.lo.mp3')
            print(f'{key}: {len(script.split())} words -> synthesising ({engine})', flush=True)
            if engine == 'nbtts':
                info = synth_nbtts(script, out, voice_override or 'Kvinne · Oslo',
                                   arg('--pace', 'Rolig'), float(arg('--tempo', '1.0')))
                used = f'nbtts/{info["voice"]}@{info["tempo"]}'
                cost = None
            elif engine == 'openrouter':
                import tts as _tts
                info = synth_openrouter(script, lang, out, model or _tts.DEFAULT_MODEL,
                                        voice_override or 'nova', instructions)
                used = f'{info["model"]}/{info["voice"]}'
                cost = info.get('cost')
            else:
                await synth(script, voice_override or VOICES[lang], out)
                used, cost = voice_override or VOICES[lang], None
            compress(out, lo)
            manifest[key] = {'seconds': duration(out), 'voice': used, 'bytes': os.path.getsize(out), 'lo_bytes': os.path.getsize(lo)}
            if cost: manifest[key]['cost'] = cost
            if intro != 'full': manifest[key]['intro'] = intro
            if drop: manifest[key]['drop'] = ','.join(drop)
            if outro != 'line': manifest[key]['outro'] = outro
            print(f'   {manifest[key]}', flush=True)
            json.dump(manifest, open(manifest_path, 'w', encoding='utf-8'), indent=1)
    print('done')

if __name__ == '__main__':
    asyncio.run(main())
