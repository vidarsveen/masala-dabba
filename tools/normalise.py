"""Even out the loudness of narration files to a common target.

A neural voice does not hold a constant level across a long script: the Norwegian re-record
came out anywhere between -19.4 and -25.0 LUFS reading to reading. That is a 5.6 dB jump
between chapters, which on a phone means reaching for the volume — the same fault that made
the earlier Gemini attempt tiring. The English narration sits at -19.3 to -19.5, so evening
Norwegian out to the same target also stops the level moving when the reader switches language.

Two-pass EBU R128 loudnorm, because a single pass guesses and drifts. -19 LUFS is the usual
spoken-word target, a little quieter than music so a listener can raise it without hiss.

    python tools/normalise.py no                 # every Norwegian reading
    python tools/normalise.py no --dry-run       # measure and report, change nothing
    python tools/normalise.py no --target -19    # a different target
    python tools/normalise.py both --region bengal

Re-run tools/opus.py for the affected regions afterwards: the .ogg files are made from these.
"""
import glob, json, os, re, subprocess, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tts

TARGET_LUFS = -19.0
TARGET_TP = -1.5          # true peak ceiling, leaves room for the mp3 encoder
TARGET_LRA = 7.0


def measure(path):
    """First loudnorm pass: what the file actually is."""
    p = subprocess.run([tts.ffmpeg(), '-hide_banner', '-i', path, '-af',
                        f'loudnorm=I={TARGET_LUFS}:TP={TARGET_TP}:LRA={TARGET_LRA}:print_format=json',
                        '-f', 'null', '-'], capture_output=True)
    s = p.stderr.decode('utf-8', 'replace')
    m = re.search(r'\{[^{}]*"input_i"[\s\S]*?\}', s)
    return json.loads(m.group(0)) if m else None


def apply(path, stats, bitrate='48k'):
    """Second pass: correct it, using the measurements from the first."""
    f = (f'loudnorm=I={TARGET_LUFS}:TP={TARGET_TP}:LRA={TARGET_LRA}'
         f':measured_I={stats["input_i"]}:measured_TP={stats["input_tp"]}'
         f':measured_LRA={stats["input_lra"]}:measured_thresh={stats["input_thresh"]}'
         f':offset={stats.get("target_offset", 0)}:linear=true:print_format=summary')
    tmp = path + '.norm.mp3'
    p = subprocess.run([tts.ffmpeg(), '-y', '-loglevel', 'error', '-i', path, '-af', f,
                        '-ac', '1', '-b:a', bitrate, '-codec:a', 'libmp3lame', tmp],
                       capture_output=True)
    if p.returncode or not os.path.exists(tmp):
        raise RuntimeError(p.stderr.decode('utf-8', 'replace')[:300])
    os.replace(tmp, path)
    return path


def files_for(lang, region=None):
    pat = os.path.join(tts.ROOT, 'assets', 'audio', region or '*', f'{lang}-[1-4].mp3')
    return sorted(glob.glob(pat))


def main():
    a = sys.argv[1:]
    if not a:
        sys.exit(__doc__)
    langs = ['en', 'no'] if a[0] == 'both' else [a[0]]
    region = a[a.index('--region') + 1] if '--region' in a else None
    global TARGET_LUFS
    if '--target' in a:
        TARGET_LUFS = float(a[a.index('--target') + 1])
    dry = '--dry-run' in a

    paths = [p for L in langs for p in files_for(L, region)]
    print(f'{len(paths)} files, target {TARGET_LUFS} LUFS' + (' (dry run)' if dry else ''))
    before, after, changed = [], [], 0
    for p in paths:
        st = measure(p)
        if not st:
            print(f'  {os.path.basename(p)}: could not measure')
            continue
        i = float(st['input_i'])
        before.append(i)
        gap = TARGET_LUFS - i
        rel = os.path.relpath(p, os.path.join(tts.ROOT, 'assets', 'audio'))
        if abs(gap) < 0.5:
            after.append(i)
            continue
        if dry:
            print(f'  {rel:<26} {i:6.1f} -> {TARGET_LUFS:.1f} ({gap:+.1f} dB)')
            after.append(TARGET_LUFS)
            continue
        apply(p, st)
        changed += 1
        now = measure(p)
        after.append(float(now['input_i']) if now else TARGET_LUFS)
        print(f'  {rel:<26} {i:6.1f} -> {after[-1]:6.1f}', flush=True)
    if before:
        span = lambda v: f'{min(v):.1f} to {max(v):.1f} ({max(v) - min(v):.1f} dB spread)'
        print(f'\nbefore: {span(before)}')
        print(f'after:  {span(after)}')
        print(f'{changed} files changed')


if __name__ == '__main__':
    main()
