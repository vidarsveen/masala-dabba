"""Bind the 80 narrated readings of one language into a chaptered audiobook.

Walks the course in its own order (ORDER in the app (course.json names it)), concatenates
assets/audio/<region>/<lang>-<n>.mp3, and writes an M4B with one chapter per reading so a
player shows "Lazio · 1. The Castelli Romani and Frascati" and can skip between them.

    python tools/audiobook.py en                 # audiobook/masala-dabba-en.m4b
    python tools/audiobook.py no
    python tools/audiobook.py en --mp3           # also a plain joined mp3
    python tools/audiobook.py en --per-region    # 20 small books instead of one
    python tools/audiobook.py en --gap 1.5       # seconds of silence between readings
    python tools/audiobook.py en --list          # just print the running order

M4B chapters are understood by Apple Books, Audiobookshelf, Smart Audiobook Player, BookPlayer
and VLC. The .m3u written alongside is the fallback for players that only take a playlist.
"""
import os, sys
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, APP, TITLE
import json, os, re, subprocess, sys, tempfile

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
import tts

ROOT = tts.ROOT
OUT = os.path.join(ROOT, 'audiobook')
BOOK = {'en': TITLE, 'no': TITLE}
SUBTITLE = {'en': 'A course on the regional kitchens of India',
            'no': 'Et kurs om Indias regionale kjøkken'}


def app_source():
    return open(APP, encoding='utf-8').read()


def course_order():
    """[(code, asset_dir, region name)] in the order the course teaches them."""
    src = app_source()
    order = re.search(r'const ORDER = \[(.*?)\];', src, re.S).group(1)
    codes = re.findall(r"'([A-Z]{2}-\d{2})'", order)
    dirs = dict(re.findall(r"'([A-Z]{2}-\d{2})':'([a-z]+)'",
                           re.search(r'const ASSET_DIRS = \{(.*?)\};', src, re.S).group(1)))
    names = {}
    for code in codes:
        m = re.search(r"'" + code + r"':\{name:(\"|')((?:[^\\]|\\.)*?)\1", src)
        if m:
            names[code] = m.group(2).replace("\\'", "'").replace('\\"', '"')
    return [(c, dirs[c], names.get(c, dirs[c])) for c in codes if c in dirs]


def lesson_titles(region, lang):
    """The four reading titles of a region, in the language asked for."""
    fname = f'{region}.js' if lang == 'en' else f'{region}.{lang}.js'
    path = os.path.join(ROOT, 'content', fname)
    if not os.path.exists(path):
        return []
    src = open(path, encoding='utf-8').read()
    out = []
    for m in re.finditer(r'title:\s*"((?:[^"\\]|\\.)*)",\s*kicker:', src):
        out.append(m.group(1).replace("\\'", "'").replace('\\"', '"'))
    return out


def track_list(lang):
    """[{file, title, region, seconds}] for the whole course, skipping anything not recorded."""
    tracks, missing = [], []
    for code, region, rname in course_order():
        titles = lesson_titles(region, lang)
        for i in range(1, 5):
            f = os.path.join(ROOT, 'assets', 'audio', region, f'{lang}-{i}.mp3')
            if not os.path.exists(f):
                missing.append(f'{region} {lang}-{i}')
                continue
            title = titles[i - 1] if i <= len(titles) else f'Reading {i}'
            tracks.append({'file': f, 'region': rname, 'n': i, 'title': title,
                           'chapter': f'{rname} · {i}. {title}',
                           'seconds': tts.duration(f) or 0})
    return tracks, missing


def silence(path, seconds):
    subprocess.run([tts.ffmpeg(), '-y', '-loglevel', 'error', '-f', 'lavfi',
                    '-i', 'anullsrc=r=24000:cl=mono', '-t', str(seconds),
                    '-b:a', '48k', '-codec:a', 'libmp3lame', path], check=True)
    return path


def ffmetadata(tracks, lang, gap):
    """Chapter marks in ffmpeg's metadata format, milliseconds, in track order."""
    esc = lambda s: re.sub(r'([=;#\\\n])', r'\\\1', s)
    lines = [';FFMETADATA1', f'title={esc(BOOK[lang])}', f'album={esc(BOOK[lang])}',
             f'artist={esc(SUBTITLE[lang])}', 'genre=Audiobook',
             f'comment={esc(SUBTITLE[lang])}']
    t = 0.0
    for tr in tracks:
        start = int(t * 1000)
        t += tr['seconds'] + gap
        lines += ['[CHAPTER]', 'TIMEBASE=1/1000', f'START={start}',
                  f'END={int(t * 1000) - 1}', f'title={esc(tr["chapter"])}']
    return '\n'.join(lines) + '\n'


def build(tracks, dst, lang, gap, bitrate='64k', mp3=False):
    os.makedirs(OUT, exist_ok=True)
    with tempfile.TemporaryDirectory() as td:
        gapfile = silence(os.path.join(td, 'gap.mp3'), gap) if gap else None
        listfile = os.path.join(td, 'list.txt')
        with open(listfile, 'w', encoding='utf-8') as f:
            for i, tr in enumerate(tracks):
                if i and gapfile:
                    f.write("file '" + gapfile.replace('\\', '/') + "'\n")
                f.write("file '" + os.path.abspath(tr['file']).replace('\\', '/') + "'\n")
        metafile = os.path.join(td, 'meta.txt')
        open(metafile, 'w', encoding='utf-8').write(ffmetadata(tracks, lang, gap))
        cmd = [tts.ffmpeg(), '-y', '-loglevel', 'error', '-stats',
               '-f', 'concat', '-safe', '0', '-i', listfile, '-i', metafile,
               '-map_metadata', '1', '-map_chapters', '1',
               '-ac', '1', '-ar', '24000', '-b:a', bitrate]
        if dst.endswith('.m4b'):
            cmd += ['-codec:a', 'aac', '-movflags', '+faststart', '-f', 'mp4']
        else:
            cmd += ['-codec:a', 'libmp3lame']
        subprocess.run(cmd + [dst], check=True)
        if mp3 and dst.endswith('.m4b'):
            build(tracks, dst[:-4] + '.mp3', lang, gap, bitrate)
    return dst


def playlist(tracks, path):
    lines = ['#EXTM3U']
    for tr in tracks:
        rel = os.path.relpath(tr['file'], os.path.dirname(path)).replace('\\', '/')
        lines.append(f'#EXTINF:{int(tr["seconds"])},{tr["chapter"]}')
        lines.append(rel)
    open(path, 'w', encoding='utf-8').write('\n'.join(lines) + '\n')
    return path


def hms(s):
    return f'{int(s // 3600)}h {int(s % 3600 // 60):02d}m'


def main():
    a = sys.argv[1:]
    lang = next((x for x in a if not x.startswith('-')), 'en')
    def opt(name, default=None):
        return a[a.index(name) + 1] if name in a else default
    gap = float(opt('--gap', '1.2'))
    bitrate = opt('--bitrate', '64k')

    tracks, missing = track_list(lang)
    if not tracks:
        sys.exit(f'no {lang} narration found under assets/audio/')
    total = sum(t['seconds'] for t in tracks) + gap * (len(tracks) - 1)
    print(f'{len(tracks)} readings, {hms(total)} of audio')
    if missing:
        print(f'  missing: {", ".join(missing)}')
    if '--list' in a:
        t = 0.0
        for tr in tracks:
            print(f'  {int(t // 3600)}:{int(t % 3600 // 60):02d}:{int(t % 60):02d}  {tr["chapter"]}')
            t += tr['seconds'] + gap
        return

    os.makedirs(OUT, exist_ok=True)
    if '--per-region' in a:
        made = []
        for _, region, rname in course_order():
            part = [t for t in tracks if t['region'] == rname]
            if not part:
                continue
            dst = os.path.join(OUT, f'{region}-{lang}.m4b')
            print(f'  {rname}: {hms(sum(t["seconds"] for t in part))}')
            build(part, dst, lang, gap, bitrate)
            made.append(dst)
        print(f'\n{len(made)} files in {OUT}')
        return

    dst = os.path.join(OUT, f'masala-dabba-{lang}.m4b')
    build(tracks, dst, lang, gap, bitrate, mp3='--mp3' in a)
    playlist(tracks, os.path.join(OUT, f'masala-dabba-{lang}.m3u'))
    json.dump([{k: v for k, v in t.items() if k != 'file'} for t in tracks],
              open(os.path.join(OUT, f'chapters-{lang}.json'), 'w', encoding='utf-8'),
              ensure_ascii=False, indent=1)
    print(f'\n{dst}  {os.path.getsize(dst) / 1e6:.1f} MB, {len(tracks)} chapters, {hms(total)}')


if __name__ == '__main__':
    main()
