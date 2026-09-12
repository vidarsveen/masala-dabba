"""Build the single-file distribution of the course.

Reads the app named in course.json, inlines every content/*.js and assets/**/*.js module
referenced by a <script src> tag, every assets/<dir>/*.jpg photo, the terrain, and the Opus
narration of the regions listed in HOSTED_AUDIO, as data URIs, into dist/<app>.

The source tree stays modular; the dist file is one page that can be published anywhere with
a size limit. tools/make_site.py builds the other target: plain files, full-quality MP3,
no ceiling, which is what the live site serves.

Usage: python build.py
"""
import base64, json, os, re, sys

sys.path.insert(0, os.path.join(os.path.dirname(os.path.abspath(__file__)), 'tools'))
from course import ROOT, APP, APP_NAME

OUT = os.path.join(ROOT, 'dist', APP_NAME)
NL = chr(10)
SIZE_LIMIT = 16e6

# Regions whose narration is inlined in the single-file page. One region's Opus narration costs
# about 4.5 MB inlined and its photos only about 0.8, so narration is what to cut when the 16 MB
# ceiling bites. Everything not listed here falls back to the browser voice in the dist file and
# plays properly narrated on the site.
HOSTED_AUDIO = ['kerala']

# Photos are re-encoded smaller for the single-file page; site/ keeps the originals.
PREVIEW_PX, PREVIEW_Q = 520, 40

html = open(APP, encoding='utf-8').read()

# audio manifests: written from manifest.json so the source page can load them as plain scripts
audio_dir = os.path.join(ROOT, 'assets', 'audio')
if os.path.isdir(audio_dir):
    for d in sorted(os.listdir(audio_dir)):
        mp = os.path.join(audio_dir, d, 'manifest.json')
        if not os.path.exists(mp):
            continue
        m = json.load(open(mp, encoding='utf-8'))
        js = ('window.AUDIO_MANIFEST = Object.assign(window.AUDIO_MANIFEST || {}, '
              + json.dumps({'%s:%s' % (d, k): v for k, v in m.items()}) + ');' + NL)
        open(os.path.join(audio_dir, d, 'manifest.js'), 'w', encoding='utf-8').write(js)


def inline_script(m):
    rel = m.group(1)
    path = os.path.join(ROOT, rel)
    if rel.startswith('assets/audio/') and rel.split('/')[2] not in HOSTED_AUDIO:
        return ''   # no manifest -> the page offers the browser voice for this region
    if not os.path.exists(path):
        print('missing script', rel, file=sys.stderr)
        return ''
    return '<script>' + NL + open(path, encoding='utf-8').read() + NL + '</script>'


html = re.sub(r'<script src="((?:content|assets)/[\w./-]+\.js)"></script>', inline_script, html)


def b64(path, mime, shrink=True):
    data = open(path, 'rb').read()
    if mime == 'image/jpeg' and shrink:
        import io as _io
        from PIL import Image
        im = Image.open(_io.BytesIO(data)).convert('RGB')
        if max(im.size) > PREVIEW_PX:
            im.thumbnail((PREVIEW_PX, PREVIEW_PX))
        buf = _io.BytesIO()
        im.save(buf, 'JPEG', quality=PREVIEW_Q, optimize=True, progressive=True)
        if buf.tell() < len(data):
            data = buf.getvalue()
    return 'data:%s;base64,' % mime + base64.b64encode(data).decode('ascii')


images = {}
assets = os.path.join(ROOT, 'assets')
for d in sorted(os.listdir(assets)):
    dd = os.path.join(assets, d)
    if not os.path.isdir(dd) or d == 'audio':
        continue
    for f in sorted(os.listdir(dd)):
        if f.lower().endswith('.jpg'):
            # the relief is the map itself; shrinking it to 520 px would blur the whole page
            images['assets/%s/%s' % (d, f)] = b64(os.path.join(dd, f), 'image/jpeg', d != 'terrain')
        elif f.lower().endswith('.png'):
            images['assets/%s/%s' % (d, f)] = b64(os.path.join(dd, f), 'image/png')

audio = {}
if os.path.isdir(audio_dir):
    for d in sorted(os.listdir(audio_dir)):
        if d not in HOSTED_AUDIO:
            continue
        dd = os.path.join(audio_dir, d)
        for f in sorted(os.listdir(dd)):
            if f.endswith('.ogg'):
                audio['assets/audio/%s/%s' % (d, f)] = b64(os.path.join(dd, f), 'audio/ogg')

html = html.replace('<!--__IMAGES__-->',
                    '<script>window.IMAGE_DATA = ' + json.dumps(images) + ';' + NL
                    + 'window.AUDIO_DATA = ' + json.dumps(audio) + ';</script>')

os.makedirs(os.path.dirname(OUT), exist_ok=True)
open(OUT, 'w', encoding='utf-8').write(html)
size = os.path.getsize(OUT)
print('wrote %s  %.1f MB  %d images, %d audio files inlined'
      % (OUT, size / 1e6, len(images), len(audio)))
if size > SIZE_LIMIT:
    print('OVER the %.0f MB single-file ceiling by %.1f MB: drop a region from HOSTED_AUDIO'
          % (SIZE_LIMIT / 1e6, (size - SIZE_LIMIT) / 1e6), file=sys.stderr)
    sys.exit(1)
