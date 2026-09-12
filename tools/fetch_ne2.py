"""Download Natural Earth II, the land-cover raster the relief map takes its colour from.

An elevation-only tint cannot tell the Thar desert from the Gangetic plain, because both sit at
about 200 m and a hypsometric ramp only knows height. Natural Earth II is a cross-blended
hypsometric tint that already carries land cover, so the desert reads as desert, the irrigated
plain reads as green, and the Deccan reads as dry scrub. `bake_terrain.py` uses it for colour and
keeps its own hillshade, bathymetry and figure/ground treatment on top.

Public domain, no key, no attribution required (though Natural Earth is credited in the README).
310 MB zipped, git-ignored, needed only when re-baking the terrain.

Output: docs/NE2_HR_LC_SR_W/NE2_HR_LC_SR_W.tif  (21600 x 10800, plate carree, 8-bit RGB)

Usage: python tools/fetch_ne2.py
"""
import os, sys, zipfile
import urllib.request

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT

URL = 'https://naturalearth.s3.amazonaws.com/10m_raster/NE2_HR_LC_SR_W.zip'
DOCS = os.path.join(ROOT, 'docs')
ZIP = os.path.join(DOCS, 'NE2_HR_LC_SR_W.zip')
OUT = os.path.join(DOCS, 'NE2_HR_LC_SR_W')

if os.path.isdir(OUT) and any(f.endswith('.tif') for f in os.listdir(OUT)):
    print('already unpacked:', OUT)
    sys.exit(0)

if not os.path.exists(ZIP):
    print('downloading 310 MB from naturalearthdata.com ...')
    urllib.request.urlretrieve(URL, ZIP)
print('%.0f MB zipped' % (os.path.getsize(ZIP) / 1e6))

os.makedirs(OUT, exist_ok=True)
with zipfile.ZipFile(ZIP) as z:
    for name in z.namelist():
        if name.lower().endswith('.tif'):
            with z.open(name) as src, open(os.path.join(OUT, os.path.basename(name)), 'wb') as dst:
                dst.write(src.read())
            print('unpacked', os.path.basename(name),
                  '%.0f MB' % (os.path.getsize(os.path.join(OUT, os.path.basename(name))) / 1e6))
print('now run: python tools/bake_terrain.py')
