"""Measure the things that make a narration voice tiring over hours.

Listening fatigue is not the same as sounding bad. A voice can be pleasant in a thirty-second
clip and exhausting across an eight-hour course. The three properties that decide it are
measurable, so measure them rather than argue from memory:

  pace      words per minute. Above roughly 165 a listener stops being able to think alongside
            the text; below about 115 attention wanders. Audiobook narration sits near 150.
  pitch     standard deviation of F0 in semitones. A flat monotone (under ~1.5 st) is dull;
            an expressive model (over ~4 st) performs at you, which is fine for a trailer and
            wearing across a chapter. Steady narration lands around 2-3.5.
  loudness  EBU R128 loudness range (LRA) in LU, and integrated loudness in LUFS. A wide range
            means constant volume-knob work on a phone in a noisy room. Spoken-word delivery
            targets roughly -18 LUFS with an LRA under about 8.

Needs only numpy and ffmpeg. F0 comes from normalised autocorrelation, which is crude next to
a proper pitch tracker but entirely adequate for comparing voices on identical text.

    python tools/voicemetrics.py voicelab/*.mp3
    python tools/voicemetrics.py assets/audio/piemonte/no-1.mp3 --words 634
"""
import glob, json, os, re, subprocess, sys
import numpy as np

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tts

SR = 16000
FMIN, FMAX = 70.0, 400.0        # Hz, generous enough for both male and female narration


def decode(path, sr=SR):
    """Decode any audio file to mono float32 in [-1, 1]."""
    p = subprocess.run([tts.ffmpeg(), '-v', 'quiet', '-i', path, '-f', 's16le',
                        '-acodec', 'pcm_s16le', '-ac', '1', '-ar', str(sr), 'pipe:1'],
                       capture_output=True)
    if p.returncode or not p.stdout:
        raise RuntimeError(f'could not decode {path}')
    return np.frombuffer(p.stdout, dtype='<i2').astype(np.float32) / 32768.0


def f0_track(x, sr=SR, frame=0.040, hop=0.020, thresh=0.35):
    """Per-frame fundamental frequency by normalised autocorrelation. Unvoiced frames -> nan."""
    n, h = int(frame * sr), int(hop * sr)
    lo, hi = int(sr / FMAX), int(sr / FMIN)
    rms_all = np.sqrt(np.mean(x ** 2)) or 1e-9
    out = []
    for start in range(0, max(0, len(x) - n), h):
        w = x[start:start + n]
        if np.sqrt(np.mean(w ** 2)) < 0.15 * rms_all:      # silence or breath
            out.append(np.nan)
            continue
        w = w - w.mean()
        # autocorrelation via FFT, normalised so r[0] == 1
        size = 1 << int(np.ceil(np.log2(2 * n)))
        spec = np.fft.rfft(w, size)
        r = np.fft.irfft(spec * np.conj(spec), size)[:n]
        if r[0] <= 0:
            out.append(np.nan)
            continue
        r = r / r[0]
        seg = r[lo:hi]
        if not len(seg):
            out.append(np.nan)
            continue
        k = int(np.argmax(seg))
        out.append(sr / (lo + k) if seg[k] >= thresh else np.nan)
    return np.array(out, dtype=float)


def loudness(path):
    """Integrated loudness (LUFS) and loudness range (LU) from ffmpeg's EBU R128 filter."""
    p = subprocess.run([tts.ffmpeg(), '-nostats', '-i', path, '-af', 'ebur128', '-f', 'null', '-'],
                       capture_output=True)
    s = p.stderr.decode('utf-8', 'replace')
    tail = s[s.rfind('Summary'):] if 'Summary' in s else s
    grab = lambda k: (lambda m: float(m.group(1)) if m else None)(
        re.search(rf'{k}:\s*(-?\d+\.?\d*)', tail))
    return grab('I'), grab('LRA')


def measure(path, words=None, script=None):
    """Everything about one clip. `words` or `script` enables words-per-minute."""
    x = decode(path)
    seconds = len(x) / SR
    f0 = f0_track(x)
    voiced = f0[~np.isnan(f0)]
    med = float(np.median(voiced)) if len(voiced) else None
    # spread in semitones, which is how the ear hears pitch change, not in Hz
    st_sd = float(np.std(12 * np.log2(voiced / med))) if med and len(voiced) > 10 else None
    lufs, lra = loudness(path)
    if words is None and script and os.path.exists(script):
        words = len(open(script, encoding='utf-8').read().split())
    return {
        'file': os.path.basename(path),
        'seconds': round(seconds, 1),
        'wpm': round(words / seconds * 60, 1) if words and seconds else None,
        'f0_median': round(med, 1) if med else None,
        'pitch_sd_st': round(st_sd, 2) if st_sd else None,
        'voiced_pct': round(100 * len(voiced) / max(1, len(f0))),
        'lufs': lufs, 'lra': lra,
    }


def verdict(m):
    """A short, honest read of one row. Fatigue, not beauty."""
    notes = []
    w, p, l = m.get('wpm'), m.get('pitch_sd_st'), m.get('lra')
    if w:
        notes.append('rushed' if w > 165 else 'slow' if w < 115 else 'good pace')
    if p:
        notes.append('very expressive' if p > 4 else 'flat' if p < 1.5 else 'steady')
    if l:
        notes.append('uneven level' if l > 8 else 'even level')
    return ', '.join(notes)


def script_for(path):
    """The .txt beside a narration file, if there is one."""
    t = os.path.splitext(path)[0] + '.txt'
    return t if os.path.exists(t) else None


if __name__ == '__main__':
    argv = sys.argv[1:]
    words = None
    if '--words' in argv:
        i = argv.index('--words')
        words = int(argv[i + 1])
        argv = argv[:i] + argv[i + 2:]          # do not treat the count as a filename
    args = [a for a in argv if not a.startswith('--')]
    paths = [p for a in args for p in (glob.glob(a) if '*' in a else [a])]
    if not paths:
        sys.exit(__doc__)
    rows = []
    head = f'{"file":<44}{"len":>7}{"wpm":>7}{"F0":>7}{"pitch":>7}{"LUFS":>8}{"LRA":>6}  notes'
    print(head)
    print('-' * len(head))
    for p in sorted(paths):
        try:
            m = measure(p, words=words, script=script_for(p))
        except Exception as e:
            print(f'{os.path.basename(p):<44} FAILED: {e}')
            continue
        rows.append(m)
        fmt = lambda v, s='': f'{v}{s}' if v is not None else '-'
        print(f'{m["file"]:<44}{fmt(m["seconds"]):>7}{fmt(m["wpm"]):>7}'
              f'{fmt(m["f0_median"]):>7}{fmt(m["pitch_sd_st"]):>7}'
              f'{fmt(m["lufs"]):>8}{fmt(m["lra"]):>6}  {verdict(m)}')
    if '--json' in sys.argv:
        print(json.dumps(rows, indent=1))
