"""Build docs/regions.min.json: the fourteen culinary regions, as polygons.

Each region is a union of whole Indian states, so no boundary is drawn by hand. The script
dissolves the member states of a region into one shape (which removes the internal state
borders), simplifies it, drops slivers, and rounds coordinates to three decimals.

Input : docs/india_state.geojson  (GADM via github.com/geohacker/india, 35 pre-2014 units)
        course.json               (which states belong to which culinary region)
Output: docs/regions.min.json     [{name, code, c:[lon,lat], rings:[[[lon,lat],...],...]}]

Usage: python tools/build_regions.py [--tol 0.02] [--min-area 0.004]
"""
import argparse, json, os, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from course import ROOT, REGIONS, CFG

from shapely.geometry import shape, mapping, Polygon, MultiPolygon
from shapely.ops import unary_union

NAMES = {
    'IN-HIM': 'Kashmir & the Himalaya',
    'IN-PUN': 'Punjab',
    'IN-RAJ': 'Rajasthan',
    'IN-AWA': 'Awadh',
    'IN-GUJ': 'Gujarat',
    'IN-MAH': 'Maharashtra',
    'IN-KON': 'Goa & the Konkan',
    'IN-CEN': 'The Deccan centre',
    'IN-BEN': 'Bengal & the east',
    'IN-NEA': 'The North-East',
    'IN-KAR': 'Karnataka',
    'IN-AND': 'Andhra & Telangana',
    'IN-TAM': 'Tamil Nadu',
    'IN-KER': 'Kerala',
}

ap = argparse.ArgumentParser()
ap.add_argument('--tol', type=float, default=0.02, help='simplification tolerance, degrees')
ap.add_argument('--min-area', type=float, default=0.004, help='drop islands smaller than this, square degrees')
args = ap.parse_args()

src = json.load(open(os.path.join(ROOT, 'docs', 'india_state.geojson'), encoding='utf-8'))
by_state = {}
for f in src['features']:
    # GADM carries survey-grade detail: a full-resolution union of 35 of these takes minutes and
    # buys nothing at 1 km per screen pixel. Thin each state first, then dissolve.
    by_state[f['properties']['NAME_1']] = shape(f['geometry']).buffer(0).simplify(args.tol / 4, preserve_topology=True)

missing = [s for r in REGIONS for s in r['states'] if s not in by_state]
if missing:
    sys.exit('states not in the source data: ' + ', '.join(missing))
claimed = {s for r in REGIONS for s in r['states']} | set(CFG.get('excludeStates', []))
if set(by_state) - claimed:
    sys.exit('states in the data but in no region: ' + ', '.join(sorted(set(by_state) - claimed))
             + '\n(add them to a region, or to excludeStates in course.json with a reason)')

out = []
for r in REGIONS:
    # buffer(0) repairs the self-intersections GADM shapes carry; the tiny positive/negative
    # buffer pair closes the hairline gaps between neighbouring states so the union really
    # dissolves instead of leaving a seam.
    parts = [by_state[s] for s in r['states']]
    geom = unary_union(parts).buffer(0.004).buffer(-0.004).simplify(args.tol, preserve_topology=True)
    polys = list(geom.geoms) if isinstance(geom, MultiPolygon) else [geom]
    polys = [p for p in polys if p.area >= args.min_area]
    if not polys:
        sys.exit('region %s vanished' % r['code'])
    polys.sort(key=lambda p: -p.area)
    rings = [[[round(x, 3), round(y, 3)] for x, y in p.exterior.coords] for p in polys]
    main = polys[0]
    # representative_point sits inside the shape even when the centroid does not (Kerala is a crescent)
    pt = main.representative_point()
    out.append({'name': NAMES[r['code']], 'code': r['code'],
                'c': [round(pt.x, 3), round(pt.y, 3)], 'rings': rings})
    print('%-7s %-22s %2d ring(s) %5d pts  area %6.1f deg2' %
          (r['code'], NAMES[r['code']], len(rings), sum(len(g) for g in rings), geom.area))

dst = os.path.join(ROOT, 'docs', 'regions.min.json')
json.dump(out, open(dst, 'w', encoding='utf-8'), separators=(',', ':'), ensure_ascii=False)
print('wrote', dst, os.path.getsize(dst) // 1024, 'KB')
