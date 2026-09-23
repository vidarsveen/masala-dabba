> **Published 23 September 2026:** All 14 regions have completed a bilingual editorial review. The live course now has 70 Norwegian Puck recordings: four readings and an introduction per region. The 56 English reading recordings remain from the first edition and no English introduction recordings have been made. See [the transfer checklist](docs/italy-transfer/PLAN.md) for verification and outstanding work. The historical completion notes below describe the first edition.

# Masala Dabba

A mobile-first course on the regional kitchens of India. The navigation is a 3D relief map built from real
elevation data; tapping a culinary region opens a module, and each module has four illustrated, narrated
readings in English and Norwegian bokmål, a set of spice cards, three recap questions per reading, and
recipes written in grams and millilitres.

The name is the spice box that sits next to an Indian stove, which is also the spine of the course: what is
in the box, why it is in the box, and what changes when you cross a state line.

**Live: https://vidarsveen.github.io/masala-dabba/**

## Where it runs

- Source tree: open `masala-dabba.html` from a local web server (`python -m http.server 8765`).
- `python build.py` → `dist/masala-dabba.html`, one self-contained page under the 16 MB hosting ceiling.
- `python tools/make_site.py` → `site/`, plain files with full-quality audio and no size limit. This is what
  GitHub Pages publishes.

## Status

**All fourteen regions are written end to end:** Kerala, Punjab & Delhi, Bengal & the east, Rajasthan, Goa &
the Konkan, Tamil Nadu, The North-East, Kashmir & the Himalaya, Gujarat, Andhra & Telangana, Awadh,
Maharashtra, The Deccan centre and Karnataka. That is fifty-six readings in both languages, 226 photographs,
84 spice cards, 168 recap questions per language, 96 glossary terms per language, 69 recipes and all 112
narration files. Every reading also went through a separate Norwegian review.

They were chosen to be as unlike each other as possible, because the thing worth finding out early is
whether one shape carries all fourteen. Kerala is rice, coconut and the spice trade; Punjab is wheat, dairy
and a clay oven; Bengal seasons its fat rather than its gravy and grinds almost nothing; Rajasthan cooks
almost without water; Goa is where the chilli first came ashore, in a kitchen built on vinegar; Tamil Nadu
is restrained and rice-based next to a Chettinad kitchen that roasts its spice black; and the North-East
has almost none of the Indian spice pantry at all, working from fermentation, alkali and smoke instead.
That last one is the real test of the format, and it held.

## The fourteen regions

Grouped from whole Indian states, because Indian food regions do not follow state lines and because a union
of existing shapes means no boundary is drawn by hand. `course.json` says which states go where.

| | | |
| --- | --- | --- |
| Kashmir & the Himalaya | Punjab & Delhi | Rajasthan |
| Awadh | Gujarat | Maharashtra |
| Goa & the Konkan | The Deccan centre | Bengal & the east |
| The North-East | Karnataka | Andhra & Telangana |
| Tamil Nadu | Kerala | |

## The four readings

Every region follows the same rhythm, and the content formats encode it:

1. **The spice logic of this region** — what is in the pantry and why: climate, trade, conquest.
2. **The staple and the table** — rice, wheat or millet, and how a meal is built.
3. **The dishes.**
4. **The place and its history** — enough to explain the food, not a history lesson.

## What this course does not have

No wine, and therefore no Vinmonopolet layer, no shop picker and no commerce links of any kind. The slot wine
occupied in the Italian course is occupied here by the spice pantry, and the slot the Vinmonopolet link
occupied is occupied by a sourcing note in the Norwegian edition: where to buy asafoetida, fresh curry leaves
and real jaggery in Norway, and whether the garam masala on a supermarket shelf is worth the money.

## Layout

| Path | Role |
| --- | --- |
| `course.json` | the one manifest: course name, app filename, the fourteen regions and their member states |
| `masala-dabba.html` | the app: CSS, HTML shell and one script. Loads content and assets at runtime |
| `content/<region>.js`, `.no.js` | the readings, English and Norwegian |
| `content/spice.js`, `.no.js` | spice cards |
| `content/quiz.js`, `.no.js` | recap questions |
| `content/glossary.js`, `.no.js` | glossary terms |
| `content/recipes/<region>.js` | recipes, both languages in one file |
| `assets/<region>/` | photographs, 820 px, Wikimedia Commons CC/PD only, plus `credits.json` |
| `assets/terrain/` | the baked relief map |
| `tools/` | the build, the map bake, the narration pipeline and the checkers |

Run `python tools/wire.py` after adding a content file; it regenerates the app's `<script src>` tags from
`course.json` so adding a region never means editing HTML by hand.

## Credits

Photographs are from Wikimedia Commons under CC0, CC BY or CC BY-SA, credited under every image and in a
credits panel at the foot of each reading. Elevation data is AWS Terrain Tiles. The map's land colour is
Natural Earth II. Region boundaries are GADM via `github.com/geohacker/india`.

`CLAUDE.md` is the operating manual; `PLAN.md` is the roadmap.
