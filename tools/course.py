"""The one place that knows what this course is called and where its files live.

Every other tool imports from here, so renaming the course or its app file is a one-line
change rather than an edit in twelve scripts (the mistake the Italian course made and
recorded in its PLAN.md 9).

    from course import ROOT, APP, CFG, REGIONS, stem_of, code_of
"""
import json, os, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))

with open(os.path.join(ROOT, 'course.json'), encoding='utf-8') as fh:
    CFG = json.load(fh)

SLUG = CFG['slug']
TITLE = CFG['title']
APP = os.path.join(ROOT, CFG['app'])          # absolute path to the single-page app
APP_NAME = CFG['app']                         # its bare filename, for URLs
PREFIX = CFG['storagePrefix']                 # localStorage key prefix
REGIONS = CFG['regions']                      # [{code, stem, area, states}]
ORDER = [r['code'] for r in REGIONS]
AREAS = CFG['areas']

_BY_CODE = {r['code']: r for r in REGIONS}
_BY_STEM = {r['stem']: r for r in REGIONS}


def stem_of(code):
    """'IN-BEN' -> 'bengal'."""
    return _BY_CODE[code]['stem']


def code_of(stem):
    """'bengal' -> 'IN-BEN'. Accepts a code too, so tools can take either on the command line."""
    if stem in _BY_CODE:
        return stem
    return _BY_STEM[stem]['code']


def region(key):
    """The whole manifest entry, by code or by stem."""
    return _BY_CODE[code_of(key)]


def app_src():
    with open(APP, encoding='utf-8') as fh:
        return fh.read()
