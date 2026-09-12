"""Bake the terrain assets for the relief map.

Input : docs/dem_india_z<z>.npy  (Terrarium elevation mosaic, tools/fetch_dem.py)
        docs/regions.min.json    (the fourteen culinary regions, tools/build_regions.py)
        course.json              (crop bounds and zoom; nothing here is hardcoded to one country)
Output: assets/terrain/height.png   16-bit elevation packed in R,G (value = elevation + 6000 m)
        assets/terrain/relief.jpg   shaded relief with hypsometric tint and bathymetry,
                                    land outside India desaturated and darkened
        assets/terrain/meta.json    crop origin/size in tile pixels and the encoding offset

India needs a different tint ramp from Italy's. The interesting elevations are not 0-3000 m
but 0-8000, and most of the country's food-growing land sits under 700 m, so the ramp spends
its contrast low down and compresses everything above the Ghats.

Colour comes from Natural Earth II if docs/NE2_HR_LC_SR_W/ is present, and from the elevation
ramp below if it is not. That matters more here than it would anywhere else: an elevation-only
tint paints the Thar desert and the wet Gangetic plain the same green, because both sit at about
200 m, and the whole argument of this course is that where the rain falls decides what grows.
Natural Earth already encodes land cover, so the desert reads as desert. The hillshade, the
bathymetry and the desaturation of everything outside India stay ours either way.

  python tools/fetch_ne2.py       # downloads and unpacks the raster (310 MB, git-ignored)
  python tools/bake_terrain.py
"""
import json, math, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, CFG

import numpy as np
from PIL import Image, ImageDraw, ImageFilter

Z = CFG.get('demZoom', 7)
B = CFG['bounds']
LON0, LON1, LAT0, LAT1 = B['west'], B['east'], B['north'], B['south']
CENTRE_LAT = CFG.get('centreLat', 22.0)
N = 2 ** Z * 256
OFFSET = 6000
RELIEF_W = 2048
HEIGHT_W = 512
OUT = os.path.join(ROOT, 'assets', 'terrain')
os.makedirs(OUT, exist_ok=True)


def tile_floor(lon, lat):
    n = 2 ** Z
    x = (lon + 180) / 360 * n
    lat_r = math.radians(lat)
    y = (1 - math.log(math.tan(lat_r) + 1 / math.cos(lat_r)) / math.pi) / 2 * n
    return int(math.floor(x)), int(math.floor(y))


X0, _ = tile_floor(LON0, 0)
_, Y0 = tile_floor(0, LAT0)


def merc(lon, lat):
    x = (lon + 180) / 360 * N - X0 * 256
    y = (1 - math.log(math.tan(math.radians(lat)) + 1 / math.cos(math.radians(lat))) / math.pi) / 2 * N - Y0 * 256
    return x, y


dem = np.load(os.path.join(ROOT, 'docs', 'dem_india_z%d.npy' % Z))
cx0, cy0 = merc(LON0, LAT0)
cx1, cy1 = merc(LON1, LAT1)
cx0, cy0, cx1, cy1 = int(cx0), int(cy0), int(cx1), int(cy1)
dem = dem[cy0:cy1, cx0:cx1]
H, W = dem.shape
print('crop %d x %d px; elevation %.0f .. %.0f m' % (W, H, dem.min(), dem.max()))

# ---- India mask from the region polygons (dilated a little so coasts keep their colour)
regions = json.load(open(os.path.join(ROOT, 'docs', 'regions.min.json'), encoding='utf-8'))
mask = Image.new('L', (W, H), 0)
d = ImageDraw.Draw(mask)
for R in regions:
    for ring in R['rings']:
        d.polygon([(merc(lo, la)[0] - cx0, merc(lo, la)[1] - cy0) for lo, la in ring], fill=255)
mask = mask.filter(ImageFilter.MaxFilter(7))
india = np.asarray(mask) > 127

# ---- shaded relief
land = dem > 0
mpp = 40075016.686 * math.cos(math.radians(CENTRE_LAT)) / N
# the gradient is exaggerated so a coarse mosaic still shows the shape of the ground; scaling
# it by the pixel size means this number reads the same at any zoom
gy, gx = np.gradient(dem * (1000.0 / mpp), mpp)
slope = np.arctan(np.hypot(gx, gy))
aspect = np.arctan2(-gx, gy)


def hs(az, alt):
    az, alt = math.radians(az), math.radians(alt)
    return np.clip(np.sin(alt) * np.cos(slope) + np.cos(alt) * np.sin(slope) * np.cos(az - aspect), 0, 1)


shade = 0.55 * hs(315, 40) + 0.25 * hs(270, 35) + 0.2 * hs(0, 50)


def natural_earth():
    """Natural Earth II colour for exactly our crop, or None if the raster is not downloaded.

    NE2 is a plate carree image of the whole world, so the sampling is: for each pixel of our
    Web Mercator crop, work out its longitude and latitude, then read the NE2 pixel there. Done
    with index arrays rather than a loop, which is the difference between a second and an hour.
    """
    import glob
    hits = glob.glob(os.path.join(ROOT, 'docs', 'NE2_HR_LC_SR_W', '*.tif'))
    if not hits:
        return None
    Image.MAX_IMAGE_PIXELS = None
    ne = np.asarray(Image.open(hits[0]).convert('RGB'))
    nh, nw = ne.shape[:2]
    # our crop, in absolute tile pixels, then back to lon/lat
    px = np.arange(W) + cx0 + X0 * 256
    py = np.arange(H) + cy0 + Y0 * 256
    lon = px / N * 360.0 - 180.0
    lat = np.degrees(np.arctan(np.sinh(np.pi * (1 - 2 * py / N))))
    ix = np.clip(((lon + 180.0) / 360.0 * nw).astype(np.int32), 0, nw - 1)
    iy = np.clip(((90.0 - lat) / 180.0 * nh).astype(np.int32), 0, nh - 1)
    return ne[iy[:, None], ix[None, :]].astype(np.float32)
# the ramp spends its contrast under 700 m, where almost all the cooking happens
stops = [(0, (104, 144, 92)), (120, (132, 162, 100)), (350, (170, 180, 112)), (700, (198, 180, 124)),
         (1200, (186, 156, 114)), (2200, (164, 146, 130)), (3600, (176, 172, 172)),
         (4800, (222, 224, 228)), (6000, (246, 248, 250))]
img = np.zeros((H, W, 3), dtype=np.float32)
e = np.clip(dem, 0, 6000)
for i in range(len(stops) - 1):
    (e0, c0), (e1, c1) = stops[i], stops[i + 1]
    t = np.clip((e - e0) / (e1 - e0), 0, 1)[..., None]
    m = ((e >= e0) & (e < e1))[..., None]
    img = np.where(m, np.array(c0) * (1 - t) + np.array(c1) * t, img)
img = np.where((e >= stops[-1][0])[..., None], np.array(stops[-1][1], dtype=np.float32), img)

ne = natural_earth()
if ne is not None:
    # Natural Earth knows the land cover, which is the thing an elevation ramp cannot know: the
    # Thar and the Gangetic plain are both about 200 m and look nothing alike. But NE2 is drawn
    # pale for print and has almost no value structure, so a quarter of the elevation ramp goes
    # back in to give the map depth, and the ramp keeps the snow line outright, which NE2 renders
    # far too timidly for a map whose northern third is the Himalaya.
    snow = np.clip((e - 3800) / 1400.0, 0, 1)[..., None]
    img = (ne * 0.76 + img * 0.24) * (1 - snow) + img * snow
    print('colour from Natural Earth II')
else:
    print('colour from the elevation ramp (run tools/fetch_ne2.py for land cover)')

# Natural Earth II is already a *shaded* relief, so multiplying it by a second full-strength
# hillshade double-shades it and washes the whole map out. Ours still earns its place -- it comes
# from the DEM at this zoom and is sharper than NE2's -- but it has to modulate gently. The
# elevation ramp carries no shading of its own and wants the full amount.
if ne is not None:
    img = img * (0.58 + 0.60 * shade[..., None])
    # NE2 is deliberately pale for print; lift saturation and contrast a little for a screen
    grey = (img @ np.array([0.3, 0.59, 0.11]))[..., None]
    img = np.clip(grey + (img - grey) * 1.22, 0, 255)
    img = np.clip((img - 128.0) * 1.06 + 128.0, 0, 255)
else:
    img = img * (0.5 + 0.65 * shade[..., None])
# outside India: quieter, so India is the figure and its neighbours the ground
gray = img @ np.array([0.3, 0.59, 0.11])
gray = np.repeat(gray[..., None], 3, axis=2)
outside = (land & ~india)[..., None]
img = np.where(outside, (0.35 * img + 0.65 * gray) * 0.82, img)
# sea with bathymetry and a lighter shelf
depth = np.clip(-dem, 0, 3000) / 3000
sea = np.array([76, 140, 180]) * (1 - depth[..., None]) + np.array([20, 54, 94]) * depth[..., None]
shelf = np.clip(-dem, 0, 200) / 200
sea = sea * (1 - 0.15 * (1 - shelf)[..., None]) + np.array([205, 224, 232]) * 0.15 * (1 - shelf)[..., None]
img = np.where(land[..., None], img, sea)
relief = Image.fromarray(np.clip(img, 0, 255).astype(np.uint8))
relief = relief.resize((RELIEF_W, int(RELIEF_W * H / W)), Image.LANCZOS)
relief.save(os.path.join(OUT, 'relief.jpg'), 'JPEG', quality=82, optimize=True, progressive=True)

# ---- heightmap (sea clamped to 0 so the mesh is flat at sea level)
HW = HEIGHT_W
HH = int(HW * H / W)
h = Image.fromarray(np.clip(dem, 0, None).astype(np.float32)).resize((HW, HH), Image.BILINEAR)
v = (np.asarray(h) + OFFSET).astype(np.int32)
rgb = np.zeros((HH, HW, 3), dtype=np.uint8)
rgb[..., 0] = v >> 8
rgb[..., 1] = v & 255
Image.fromarray(rgb).save(os.path.join(OUT, 'height.png'), 'PNG', optimize=True)

meta = {'z': Z, 'tileX0': X0, 'tileY0': Y0, 'cropX': cx0, 'cropY': cy0, 'cropW': W, 'cropH': H,
        'heightW': HW, 'heightH': HH, 'offset': OFFSET, 'centreLat': CENTRE_LAT,
        'bounds': {'west': LON0, 'east': LON1, 'north': LAT0, 'south': LAT1},
        'maxElevation': float(dem.max())}
json.dump(meta, open(os.path.join(OUT, 'meta.json'), 'w'), indent=1)
for f in ('relief.jpg', 'height.png'):
    print(f, os.path.getsize(os.path.join(OUT, f)) // 1024, 'KB')
print('paste into the app:  const TM = ' + json.dumps(meta) + ';')
