"""Download the elevation mosaic the relief map is baked from.

Source: AWS Terrain Tiles (Terrarium PNG, public, no API key). Elevation in metres is
(R * 256 + G + B / 256) - 32768. The tile range is derived from course.json's bounds, so
nothing is hardcoded to one country the way the Italian course's bake script was.

India at zoom 7 is 11 x 13 tiles, about 2800 x 3300 px at roughly 1.1 km per pixel. That is
coarse next to Italy's zoom 8, and it is the right trade: India is eleven times the area, and
what the map has to show is the Himalaya, the Gangetic plain, the Thar and the Ghats, all of
which are far wider than a kilometre.

Output: docs/dem_india_z7.npy (float32 metres), git-ignored, about 35 MB.

Usage: python tools/fetch_dem.py [--zoom 7] [--workers 8]
"""
import argparse, io, math, os, sys, time
from concurrent.futures import ThreadPoolExecutor
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, CFG

import numpy as np
from PIL import Image

ap = argparse.ArgumentParser()
ap.add_argument('--zoom', type=int, default=CFG.get('demZoom', 7))
ap.add_argument('--workers', type=int, default=8)
args = ap.parse_args()

Z = args.zoom
B = CFG['bounds']
URL = 'https://s3.amazonaws.com/elevation-tiles-prod/terrarium/{z}/{x}/{y}.png'
UA = {'User-Agent': 'masala-dabba-terrain/1.0 (course map bake)'}


def tile_xy(lon, lat, z):
    n = 2 ** z
    x = (lon + 180) / 360 * n
    lat_r = math.radians(lat)
    y = (1 - math.log(math.tan(lat_r) + 1 / math.cos(lat_r)) / math.pi) / 2 * n
    return x, y


x0 = int(math.floor(tile_xy(B['west'], 0, Z)[0]))
x1 = int(math.floor(tile_xy(B['east'], 0, Z)[0]))
y0 = int(math.floor(tile_xy(0, B['north'], Z)[1]))
y1 = int(math.floor(tile_xy(0, B['south'], Z)[1]))
cols, rows = x1 - x0 + 1, y1 - y0 + 1
print('zoom %d, tiles x %d-%d, y %d-%d  (%d tiles, %d x %d px)'
      % (Z, x0, x1, y0, y1, cols * rows, cols * 256, rows * 256))

dem = np.zeros((rows * 256, cols * 256), dtype=np.float32)


def fetch(job):
    tx, ty = job
    url = URL.format(z=Z, x=tx, y=ty)
    for attempt in range(5):
        try:
            with urllib.request.urlopen(urllib.request.Request(url, headers=UA), timeout=60) as r:
                raw = r.read()
            a = np.asarray(Image.open(io.BytesIO(raw)).convert('RGB')).astype(np.float32)
            return tx, ty, a[..., 0] * 256 + a[..., 1] + a[..., 2] / 256 - 32768
        except Exception as e:                       # ocean tiles 404; everything else is retried
            if getattr(e, 'code', None) == 404:
                return tx, ty, np.full((256, 256), -100.0, dtype=np.float32)
            time.sleep(1.5 * (attempt + 1))
    raise SystemExit('gave up on ' + url)


jobs = [(tx, ty) for ty in range(y0, y1 + 1) for tx in range(x0, x1 + 1)]
done = 0
with ThreadPoolExecutor(args.workers) as pool:
    for tx, ty, a in pool.map(fetch, jobs):
        dem[(ty - y0) * 256:(ty - y0 + 1) * 256, (tx - x0) * 256:(tx - x0 + 1) * 256] = a
        done += 1
        if done % 20 == 0 or done == len(jobs):
            print('  %d/%d' % (done, len(jobs)), flush=True)

dst = os.path.join(ROOT, 'docs', 'dem_india_z%d.npy' % Z)
np.save(dst, dem)
print('wrote %s  %.0f MB  elevation %.0f .. %.0f m'
      % (dst, os.path.getsize(dst) / 1e6, dem.min(), dem.max()))
print('tile origin x0=%d y0=%d  (bake_terrain.py reads this from the filename and course.json)' % (x0, y0))
