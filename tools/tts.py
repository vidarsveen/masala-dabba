"""OpenRouter text-to-speech client for Masala Dabba.

OpenRouter exposes an OpenAI-compatible speech endpoint:

    POST https://openrouter.ai/api/v1/audio/speech
    {"model": "openai/gpt-4o-mini-tts-2025-12-15", "input": "...",
     "voice": "nova", "response_format": "mp3", "instructions": "..."}

and returns raw audio bytes plus an X-Generation-Id header. That id can be handed to
/api/v1/generation a moment later to read what the call actually cost, which is what this
module does rather than hardcoding a price table that would go stale.

The key is read from the environment or from a .env file in the project root:

    OPENROUTER_API_KEY=sk-or-v1-...

Used by tools/voicelab.py (compare voices) and tools/narrate.py --engine openrouter.

Usage as a script (one-off sample):
    python tools/tts.py "Frascati Superiore" --model openai/gpt-4o-mini-tts-2025-12-15 \
        --voice nova --out sample.mp3
"""
import json, os, re, subprocess, sys, tempfile, time, urllib.error, urllib.request

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
API = 'https://openrouter.ai/api/v1'
# NOTE: OpenAI's speech models are NOT on OpenRouter (every openai/*tts* slug returns
# "Model ... does not exist", checked 2026-09-11). These are the ones that answer.
DEFAULT_MODEL = 'microsoft/mai-voice-2'
CHUNK_CHARS = 3500

# Models that refuse mp3 and only return raw little-endian 16-bit PCM.
PCM_ONLY = {'google/gemini-3.1-flash-tts-preview'}
PCM_RATE = 24000

# Gemini generates at roughly real time, so a 3500-character chunk is four minutes of waiting
# and flirts with the read timeout. Smaller chunks come back reliably; they still split on
# paragraph breaks, so the joins are inaudible.
CHUNK_BY_MODEL = {'google/gemini-3.1-flash-tts-preview': 1800}
TIMEOUT_BY_MODEL = {'google/gemini-3.1-flash-tts-preview': 600}

# Every provider on this endpoint requires an explicit voice; there is no default.
DEFAULT_VOICE = {'en': 'en-GB-SoniaNeural', 'no': 'nb-NO-PernilleNeural'}
REFERER = 'https://vidarsveen.github.io/italia-in-tavola/'
TITLE = 'Masala Dabba'


# ---------------------------------------------------------------- key handling

def load_env(path=None):
    """Read KEY=value lines from .env into os.environ without overwriting real env vars."""
    path = path or os.path.join(ROOT, '.env')
    if not os.path.exists(path):
        return
    for line in open(path, encoding='utf-8'):
        line = line.strip()
        if not line or line.startswith('#') or '=' not in line:
            continue
        k, v = line.split('=', 1)
        k, v = k.strip(), v.strip().strip('"').strip("'")
        if k and k not in os.environ:
            os.environ[k] = v


def api_key():
    load_env()
    key = os.environ.get('OPENROUTER_API_KEY', '').strip()
    if not key:
        sys.exit('No OPENROUTER_API_KEY. Put it in .env at the project root:\n'
                 '    OPENROUTER_API_KEY=sk-or-v1-...\n'
                 '(.env is git-ignored; see .env.example)')
    return key


# ---------------------------------------------------------------- the endpoint

class TTSError(RuntimeError):
    pass


def speak(text, model=DEFAULT_MODEL, voice=None, fmt='mp3', speed=None,
          instructions=None, timeout=300, retries=4):
    """Synthesise one chunk. Returns (audio_bytes, generation_id)."""
    body = {'model': model, 'input': text, 'response_format': fmt}
    if voice:
        body['voice'] = voice
    if speed is not None:
        body['speed'] = speed
    if instructions:
        body['instructions'] = instructions
    data = json.dumps(body).encode('utf-8')
    headers = {'Authorization': 'Bearer ' + api_key(), 'Content-Type': 'application/json',
               'HTTP-Referer': REFERER, 'X-Title': TITLE}
    delay = 3
    for attempt in range(retries):
        req = urllib.request.Request(API + '/audio/speech', data=data, headers=headers)
        try:
            with urllib.request.urlopen(req, timeout=timeout) as r:
                audio = r.read()
                gid = r.headers.get('X-Generation-Id')
            if not audio:
                raise TTSError('empty audio body')
            if audio[:1] == b'{':  # an error served with a 200
                raise TTSError(audio[:400].decode('utf-8', 'replace'))
            return audio, gid
        except urllib.error.HTTPError as e:
            msg = e.read().decode('utf-8', 'replace')[:500]
            retryable = e.code == 429 or e.code >= 500
            if not retryable or attempt == retries - 1:
                raise TTSError(f'HTTP {e.code}: {msg}')
            wait = int(e.headers.get('Retry-After') or delay)
            print(f'    HTTP {e.code}, retrying in {wait}s', flush=True)
            time.sleep(wait)
            delay *= 2
        except (urllib.error.URLError, TimeoutError, TTSError) as e:
            if attempt == retries - 1:
                raise TTSError(str(e))
            print(f'    {type(e).__name__}: {e}; retrying in {delay}s', flush=True)
            time.sleep(delay)
            delay *= 2
    raise TTSError('unreachable')


def cost_of(generation_id, tries=4):
    """Ask OpenRouter what a generation cost. Best effort: stats lag the response a little."""
    if not generation_id:
        return None
    headers = {'Authorization': 'Bearer ' + api_key(), 'HTTP-Referer': REFERER, 'X-Title': TITLE}
    for i in range(tries):
        try:
            req = urllib.request.Request(f'{API}/generation?id={generation_id}', headers=headers)
            with urllib.request.urlopen(req, timeout=60) as r:
                d = json.load(r).get('data') or {}
            c = d.get('total_cost')
            if c is not None:
                return float(c)
        except Exception:
            pass
        time.sleep(1.5 * (i + 1))
    return None


# ---------------------------------------------------------------- long text

def chunks(text, limit=CHUNK_CHARS):
    """Split a reading into synthesis-sized pieces, preferring blank lines then sentences.

    Splitting on a paragraph break means every join lands where the voice would have paused
    anyway, so the concatenated file has no audible seam.
    """
    paras = [p.strip() for p in re.split(r'\n\s*\n', text) if p.strip()]
    out, cur = [], ''
    for p in paras:
        while len(p) > limit:                       # a single monster paragraph
            cut = p.rfind(' ', 0, limit)
            for m in re.finditer(r'(?<=[.!?])\s', p[:limit]):
                cut = m.start()
            out.append(p[:cut].strip())
            p = p[cut:].strip()
        if not cur:
            cur = p
        elif len(cur) + 2 + len(p) <= limit:
            cur += '\n\n' + p
        else:
            out.append(cur)
            cur = p
    if cur:
        out.append(cur)
    return out


def ffmpeg():
    exe = os.environ.get('FFMPEG')
    if exe:
        return exe
    try:
        import imageio_ffmpeg
        return imageio_ffmpeg.get_ffmpeg_exe()
    except ImportError:
        return 'ffmpeg'


def pcm_to_mp3(raw, dst, bitrate='48k', rate=PCM_RATE):
    """Encode raw 16-bit mono PCM (what Gemini TTS returns) as mp3."""
    p = subprocess.run([ffmpeg(), '-y', '-loglevel', 'error', '-f', 's16le', '-ar', str(rate),
                        '-ac', '1', '-i', 'pipe:0', '-b:a', bitrate, '-codec:a', 'libmp3lame',
                        dst], input=raw, capture_output=True)
    if p.returncode:
        raise TTSError('ffmpeg: ' + p.stderr.decode('utf-8', 'replace')[:300])
    return dst


def join_audio(parts, dst, bitrate='48k'):
    """Concatenate mp3 fragments into one file, re-encoding so the joins cannot click."""
    if len(parts) == 1:
        with open(dst, 'wb') as f:
            f.write(open(parts[0], 'rb').read())
        return dst
    lst = dst + '.txt'
    with open(lst, 'w', encoding='utf-8') as f:
        for p in parts:
            f.write("file '" + os.path.abspath(p).replace('\\', '/').replace("'", r"'\''") + "'\n")
    subprocess.run([ffmpeg(), '-y', '-loglevel', 'error', '-f', 'concat', '-safe', '0',
                    '-i', lst, '-ac', '1', '-b:a', bitrate, '-codec:a', 'libmp3lame', dst],
                   check=True)
    os.remove(lst)
    return dst


def speak_to_file(text, dst, model=DEFAULT_MODEL, voice=None, speed=None,
                  instructions=None, bitrate='48k', verbose=True):
    """Synthesise arbitrarily long text to one mp3. Returns {seconds, cost, chunks, ...}."""
    pieces = chunks(text, CHUNK_BY_MODEL.get(model, CHUNK_CHARS))
    fmt = 'pcm' if model in PCM_ONLY else 'mp3'
    timeout = TIMEOUT_BY_MODEL.get(model, 300)
    t0 = time.time()
    total_cost, tmp, raw = 0.0, [], b''
    os.makedirs(os.path.dirname(os.path.abspath(dst)) or '.', exist_ok=True)
    with tempfile.TemporaryDirectory() as td:
        for i, piece in enumerate(pieces, 1):
            if verbose and len(pieces) > 1:
                print(f'    chunk {i}/{len(pieces)} ({len(piece)} chars)', flush=True)
            audio, gid = speak(piece, model=model, voice=voice, fmt=fmt, speed=speed,
                               instructions=instructions, timeout=timeout)
            if fmt == 'pcm':
                raw += audio          # raw samples concatenate without a seam
            else:
                p = os.path.join(td, f'{i:03d}.mp3')
                open(p, 'wb').write(audio)
                tmp.append(p)
            c = cost_of(gid)
            if c:
                total_cost += c
        if fmt == 'pcm':
            pcm_to_mp3(raw, dst, bitrate=bitrate)
        else:
            join_audio(tmp, dst, bitrate=bitrate)
    return {'path': dst, 'chars': len(text), 'chunks': len(pieces),
            'seconds': duration(dst), 'cost': round(total_cost, 5) or None,
            'wall': round(time.time() - t0, 1), 'bytes': os.path.getsize(dst),
            'model': model, 'voice': voice}


def duration(path):
    r = subprocess.run([ffmpeg(), '-i', path], capture_output=True, text=True)
    m = re.search(r'Duration: (\d+):(\d+):(\d+\.\d+)', r.stderr)
    return round(int(m.group(1)) * 3600 + int(m.group(2)) * 60 + float(m.group(3)), 1) if m else None


if __name__ == '__main__':
    args = sys.argv[1:]
    if not args:
        sys.exit(__doc__)
    def opt(name, default=None):
        return args[args.index(name) + 1] if name in args else default
    text = args[0]
    if os.path.exists(text):
        text = open(text, encoding='utf-8').read()
    info = speak_to_file(text, opt('--out', 'sample.mp3'), model=opt('--model', DEFAULT_MODEL),
                         voice=opt('--voice'), instructions=opt('--instructions'),
                         speed=float(opt('--speed')) if '--speed' in args else None)
    print(json.dumps(info, indent=1))
