"""Wikimedia Commons helper for finding region photos (see CLAUDE.md §4 step 3). Downloads land in _photos/photos/.
Usage:
  python commons.py search "<term>" [n]          -> list candidate files with license/artist/size
  python commons.py cat "Category:Name" [n]       -> list category members with license/artist/size
  python commons.py get "File:..." <outname>      -> download 1000px thumb to photos/<outname>.jpg
"""
import sys, json, time, urllib.request, urllib.parse, os, re
UA = {'User-Agent': 'MasalaDabba/1.0 (course prototype; contact vidarsveen@gmail.com)'}
API = 'https://commons.wikimedia.org/w/api.php'
HERE = os.path.join(os.path.dirname(os.path.dirname(os.path.abspath(__file__))), '_photos')
os.makedirs(os.path.join(HERE, 'photos'), exist_ok=True)
def call(params):
    params['format'] = 'json'
    url = API + '?' + urllib.parse.urlencode(params)
    req = urllib.request.Request(url, headers=UA)
    time.sleep(2)
    return json.load(urllib.request.urlopen(req, timeout=60))
def info(titles):
    out = []
    for i in range(0, len(titles), 20):
        chunk = titles[i:i+20]
        r = call({'action':'query','prop':'imageinfo','iiprop':'url|extmetadata|size','iiurlwidth':1000,'titles':'|'.join(chunk)})
        for p in r['query']['pages'].values():
            ii = p.get('imageinfo', [{}])[0]; md = ii.get('extmetadata', {})
            lic = md.get('LicenseShortName', {}).get('value', '?')
            art = re.sub('<[^>]+>', '', md.get('Artist', {}).get('value', '?')).strip()
            out.append((p['title'], lic, art, ii.get('width'), ii.get('height'), ii.get('thumburl')))
    return out
def show(rows):
    for t, lic, art, w, h, u in rows:
        ok = any(k in lic for k in ('CC0','CC BY','Public domain','CC-BY')) and 'NC' not in lic and 'ND' not in lic
        print(('OK ' if ok else '-- ') + f'{lic:14} {w}x{h}  {t}  | {art[:40]}')
cmd = sys.argv[1]
if cmd == 'search':
    n = sys.argv[3] if len(sys.argv) > 3 else 8
    r = call({'action':'query','list':'search','srnamespace':6,'srlimit':n,'srsearch':sys.argv[2] + ' filetype:bitmap'})
    show(info([x['title'] for x in r['query']['search']]))
elif cmd == 'cat':
    n = sys.argv[3] if len(sys.argv) > 3 else 30
    r = call({'action':'query','list':'categorymembers','cmtitle':sys.argv[2],'cmtype':'file','cmlimit':n})
    show(info([x['title'] for x in r['query']['categorymembers']]))
elif cmd == 'get':
    rows = info([sys.argv[2]])
    t, lic, art, w, h, u = rows[0]
    dst = os.path.join(HERE, 'photos', sys.argv[3] + '.jpg')
    urllib.request.urlretrieve(urllib.request.Request(u, headers=UA).full_url, dst) if False else open(dst,'wb').write(urllib.request.urlopen(urllib.request.Request(u, headers=UA), timeout=60).read())
    json.dump({'artist': art, 'license': lic, 'source': 'https://commons.wikimedia.org/wiki/' + t.replace(' ', '_')}, open(dst[:-4] + '.json', 'w', encoding='utf-8'), ensure_ascii=False, indent=1)
    print('saved', dst, lic, art)
