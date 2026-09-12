# Masala Dabba — handover for any assistant continuing this project

Read this whole file before touching anything. It is written so a fresh session (any model) can continue
without the original conversation. `README.md` is the user-facing summary, `PLAN.md` the roadmap; this file is
the operating manual.

## 0. Where this came from

This repo is course two. Course one is **Italia in Tavola**, at `C:\Users\vidar\PycharmProjects\3dgame`
(github.com/vidarsveen/italia-in-tavola), finished and live. Its `PLAN.md` §9–§11 planned this repo, and its
`CLAUDE.md` is still the better reference for anything about the 3D map, the narration pipeline or the
headless tests, because those were ported here unchanged.

**Do not refactor the Italian course.** It is finished. The two repos share no code, on purpose: extract a
shared kit only after fixing the same bug twice in two places. Separate repos also keep the GitHub Pages
budgets and the git histories apart, which mattered — the Italian repo's `.git` is 905 MB.

Three things that repo listed as welded to Italy were fixed while porting, and they are done:

1. **The wine layer is gone.** `wines[]` became `spices[]`, tasting cards became spice cards, the
   Vinmonopolet link became a sourcing note, and `vmpmap/vmpcheck/vmpverify/vmpstores/tastingextract` were
   never copied across.
2. **The app filename is a constant**, `course.json` → `tools/course.py`. No tool names the HTML file.
3. **The content `<script src>` tags are generated** by `tools/wire.py` from `course.json`. Adding a region
   no longer means editing HTML in three places.

## 1. What this is

A mobile-first course on the regional kitchens of India. The navigation is a 3D relief map (Three.js r128,
real elevation data). Tapping a culinary region opens a module sheet; each module has four illustrated,
narrated readings in English and Norwegian bokmål. One HTML file plus content and asset files; a build step
produces a single-file version.

- Owner: Vidar (Norwegian). Both languages matter equally. Mobile first, always test on a phone viewport.
- **Done: one region, Kerala** (`IN-KER`), end to end: four readings EN+NO, 16 photographs, 6 spice cards,
  12 recap questions per language, 4 recipes, and 8 narration files (19.8 min English, 19.8 Norwegian,
  edge-tts, normalised to -19 LUFS). The other thirteen have polygons, sheet
  summaries, landmarks and reading titles, and say "reading coming soon".
- The name is the owner's call and is not final. It is one constant away: `course.json` `title` and `slug`,
  the `<title>`, the masthead `<h1>` and the intro `<h2>`. See §13.
- Not yet published anywhere. `gh` is not installed on this machine, so the GitHub repo has to be created by
  hand; §10 has the exact steps.

## 2. Files

| Path | Role |
| --- | --- |
| `course.json` | **the manifest.** Course name, app filename, storage prefix, map bounds, the fourteen regions and which Indian states each is made of. Everything else reads this. |
| `tools/course.py` | loads `course.json` and exports `ROOT, APP, TITLE, REGIONS, ORDER, AREAS, stem_of, code_of`. Every tool imports it. |
| `masala-dabba.html` | the app: CSS, HTML shell, and one big script (see §3). |
| `content/<region>.js` | English readings: `window.READINGS['IN-XXX'] = {credits, lessons:[4]}`. |
| `content/<region>.no.js` | Norwegian readings; reuses the English credits object. |
| `content/course.no.js` | Norwegian region summaries for all fourteen. English ones live in the app's `COURSE`. |
| `content/spice.js`, `.no.js` | spice cards (§7). |
| `content/quiz.js`, `.no.js` | three recap questions per reading. |
| `content/glossary.js`, `.no.js` | glossary terms; each entry carries its own `term` heading per language. |
| `content/recipes/<region>.js` | recipes, both languages in one file (§8). |
| `assets/<region>/*.jpg` + `credits.json` | photos, 820 px, JPEG q60, Wikimedia Commons CC/PD only. |
| `assets/audio/<region>/` | `<lang>-<n>.mp3`, `.ogg`, `.txt` (spoken script), `manifest.json`, `manifest.js`. **The mp3/ogg are git-ignored** (§5). |
| `assets/terrain/` | `height.png`, `relief.jpg`, `meta.json`. Baked by `tools/bake_terrain.py`. |
| `docs/regions.min.json` | the fourteen region polygons, built by `tools/build_regions.py`. |
| `docs/india_state.geojson` | source state boundaries, 22 MB, git-ignored. Re-download: see §4. |
| `docs/dem_india_z7.npy` | elevation mosaic, 41 MB, git-ignored. Re-download: `python tools/fetch_dem.py`. |
| `build.py` | makes `dist/masala-dabba.html`: inlines content, photos, terrain and any narration in `HOSTED_AUDIO`. |
| `tools/wire.py` | regenerates the app's content `<script src>` tags from `course.json`. Run after adding any content file. `--check` for CI. |
| `tools/make_site.py` | makes `site/` (plain files, full audio, no size limit) — what Pages publishes. |
| `tools/_port.py`, `_port_course.js`, `_port_builders.js` | the one-shot port from the Italian app, kept as the record of what changed. **Never run again**; the app is the source of truth now. |

## 3. Anatomy of masala-dabba.html

Top to bottom: `<style>` (mobile-first, desktop rules under `@media (min-width:900px)`), HTML shell
(`#top`, `#labels`, `#rail`, `#sheet`, `#homeBtn`, `#tiltBtn`, `#tip`, `#reader`, `#intro`, `#book`, `#cook`),
`<script>` with `const REGIONS = [...]`, `<!--__IMAGES__-->` (build injects `IMAGE_DATA`/`AUDIO_DATA`),
`<!--__CONTENT__-->` (wire.py injects the content script tags), then the main IIFE. Section markers inside,
in order: LANGUAGE (`I18N`, `lang`, `T()`, `course()`, `readingsFor()`, `applyLang()`), COURSE SUMMARIES
(`COURSE`, `renderSpices`, `ORDER`, `AREAS`, `ASSET_DIRS`), PROJECTION (`TM`, `merc()`, `X`, `Z`, `elevAt`,
`yAt`, `LABEL_POS`, `FAMILY`), RENDERER, TERRAIN (`buildTerrain()`), PRIMITIVES + LANDMARK BUILDERS (`B.*`),
LANDMARKS (`CAPITAL_POS`, `LANDMARK_SCALE`, pins, labels), CAMERA, PICKING, PROGRESS, REGION LIST,
REGION SHEET, READER (+ glossary, quiz), RECIPES, AUDIO SOURCES, AUDIO PLAYER, INTRO, AUDIOBOOK, ROUTER, LOOP.

Debug URL parameters: `?instant` (skip font wait, camera tweens and the intro), `region=IN-KER`, `lesson=3`,
`lang=no`, `scroll=2600`, `intro` (force the splash). `window.__dbg` exposes `pick`, `groundHit`, `regionAt`,
`oggOpusToCaf`, `resolveAudio`, `introNums`.

**Region codes are mnemonic**, `IN-KER`, `IN-HIM`, not ISO numbers, because fourteen invented groupings have
no ISO codes. The router's pattern is `[A-Z]{2}-[A-Z0-9]{2,4}`; it was `\d{2}` in the Italian app and that
was the first thing that broke.

## 4. The map

- Fourteen **culinary regions, each a union of whole Indian states**, so every boundary comes from the source
  data. `course.json` says which. Indian food regions genuinely do not follow state lines, so this is more
  accurate than 28 states plus 8 union territories as well as being less work.
- Source: GADM via `github.com/geohacker/india`, 35 pre-2014 units. **That vintage is convenient**: Telangana
  is still inside Andhra Pradesh, Ladakh inside Jammu and Kashmir, and those are exactly the groupings we
  want. Odisha is spelled Orissa and Uttarakhand Uttaranchal in that file.
  Re-download: `https://raw.githubusercontent.com/geohacker/india/master/state/india_state.geojson` → `docs/`.
- `python tools/build_regions.py` dissolves each group, simplifies and writes `docs/regions.min.json`.
  It **pre-simplifies each state before the union**: a full-resolution GADM union of 35 shapes takes many
  minutes and buys nothing at 1 km per screen pixel.
- Andaman & Nicobar and Lakshadweep are excluded, with the reason recorded in `course.json`. A region whose
  bounding box reaches the Andamans cannot be framed on screen: selecting Tamil Nadu would zoom to the Bay of
  Bengal. The islands still appear as land in the relief; they carry no region tint.
- Terrain: `python tools/fetch_dem.py` (AWS Terrain Tiles, zoom 7, 156 tiles, no API key) then
  `python tools/bake_terrain.py`. Both read the bounds and zoom from `course.json`; nothing is hardcoded to
  one country the way the Italian bake script was. The bake prints the `const TM = {...}` line to paste into
  the app if the crop changes.
- **`EXAG` is 6.5, not Italy's 4.** India is eleven times the area, so a world unit is 32 km rather than 11,
  and the same exaggeration would flatten the Himalaya into a ripple.
- `METRES_PER_UNIT` and `X(lon)` read `TM.centreLat` (22°) rather than Italy's hardcoded 42.
- Known limitation: the relief tint is elevation-only, so the Thar desert and the wet Gangetic plain are the
  same green. Fixing it needs an aridity layer and is not worth it yet.
- Goa is 0.3 square degrees on a map of 280, which is ten times smaller relative to the country than Valle
  d'Aosta was on Italy. It is still tappable through its pin and its rail chip, but watch it on a phone.

## 5. Audio, and why it is not in git

**Decided at the start of this repo, deliberately.** The Italian repo's `.git` is 905 MB, and most of that is
two full copies of eight hours of Norwegian narration: it was committed, then re-recorded. That is far
cheaper to decide now than halfway through.

- `assets/audio/*/*.mp3` and `*.ogg` are git-ignored. The `.txt` spoken scripts, `manifest.json` and
  `manifest.js` **are** committed: they are tiny, and they are what tells you whether a reading's audio has
  gone stale.
- `python tools/audio_pack.py` writes `dist/audio.tar.gz`. Upload it by hand to a release tagged `audio`.
- `.github/workflows/pages.yml` downloads that asset before running `make_site.py`. If the release does not
  exist, the site publishes without narration and every reading offers the browser voice, which is a working
  page rather than a failed build.
- Re-recording therefore costs one upload instead of one permanent copy of the repo.

The pipeline itself came across unchanged from the Italian course and is documented there in far more detail:
`tools/narrate.py` (edge-tts by default, `--engine openrouter|nbtts`), `tools/tts.py`, `tools/nbtts.py`,
`tools/opus.py`, `tools/normalise.py`, `tools/voicelab.py`, `tools/audiobook.py`. Voices used there:
`en-GB-SoniaNeural` for English, and for Norwegian `NbAiLab/nb-tts-voxcpm2-voices-2607` voice «Kvinne · Oslo»
at `--tempo 0.95`. Normalise to −19 LUFS and re-run `opus.py` afterwards; the `.ogg` files are made from the
mp3. Safari before iOS 18.4 cannot play Opus in Ogg, and the page repackages it into CAF in JavaScript
(`oggOpusToCaf`) — do not touch that function without re-running `tools/test/caftest.py`.

## 6. Prose rules — not optional

The readings are **narrated**. The owner read the Italian English and found parts of it "not that engaging or
hard to follow", and the cause was systematic: it was written for the eye and is now listened to. Audio
cannot re-scan.

1. **Every clause gets a finite verb.** Never a colon followed by a list of fragments.
2. **Subject and verb within about eight words of each other.**
3. **Sentences average about eighteen words, ceiling about thirty-five.** No sixty-word sentences, no runs of
   verbless fragments.
4. **Connect with logic, not commas**: because, so, which is why, and that meant.
5. **Read every paragraph aloud before it ships.** If you lose the subject or run out of breath, rewrite it.
6. **Open a section with something concrete** — a scene, a person, a smell — then bring the facts in behind it.

### Norwegian, additionally

Judge each sentence on whether a Norwegian writer would have produced it, not on whether it is a faithful
rendering of the English. The Italian course's full list is in its `CLAUDE.md` §4b and all of it applies. The
ones that bite hardest here:

- **No clefts.** «Det som …, er …» is not a default opener.
- **No colon-led apposition** and **no bare-infinitive subjects** («Å arbeide her er …» → «Den som arbeider
  her, …»).
- **English participle phrases become relative clauses**: "racks called arele" → «som kalles».
- **Imperative-plus-and openers become conditionals**: "Drive north and the plain breaks up" → «Kjører du
  nordover, brytes sletten opp».
- **Verb second**, and «aldri», «ikke», «fortsatt» after the subject in main clauses.
- Centuries as «1900-tallet», never «det tjuende århundret». Compounds are one word.
- «hvis» is not a relative pronoun.

### Names and transliteration, decided before any writing

- **Translate ingredients**, keep **dish, spice-blend and technique names** in their own form, and gloss the
  first mention. So `linser`, `kikerter`, `spisskummen`, `sennepsfrø`, but `dal`, `panch phoron`, `dosa`,
  `thali`, `tadka`, `puttu`. It works because Indian dish names have no Norwegian equivalent while the
  ingredients all do.
- **Common English spelling, no diacritics**: paneer, not panīr. Kozhikode and Calicut are both fine; use the
  one the sentence is about (Calicut for 1498, Kozhikode for the beach today).
- Norwegian keeps the same dish names, so `recipeForDish` matches in both languages. Do not translate a name
  in `course.no.js` that a recipe's `dish` field points at.

## 7. The spice layer (what replaced wine)

- A region's sheet lists `spices: [[name, kind], …]`, where kind is `whole | ground | blend | fresh | souring`
  and drives the colour dot and a translated label.
- Tapping a spice opens its card: aroma / flavour / what it does / when to add / what to use instead, plus a
  **sourcing note in the Norwegian edition only**. Contract: `docs/spice-format.md`, enforced by
  `PYTHONIOENCODING=utf-8 python tools/spicecheck.py`.
- **The sourcing note is the point.** It is the part of the course that could not be translated into
  existence: fresh curry leaves come into the Grønland shops in Oslo in waves, what is sold as a cinnamon
  stick in a Norwegian supermarket is almost always cassia, "light" coconut milk has no thick part at all,
  and kudampuli, kokum and "fish tamarind" are three different fruits whatever the label says. Ask for these
  in every brief.
- There are **no commerce links anywhere in this course**, and no shop IDs. A recipe's `goesWith` is prose.

## 8. Recipes

Same machinery as the Italian course. Contract: `docs/recipe-format.md`, checked by
`python tools/recipecheck.py`. One file per region, **both languages in one file** so a quantity is written
exactly once. Units are `g`, `kg`, `ml`, `l` or a bare count — no cups, spoons, `dl`, `ss` or `ts`, and the
checker rejects them. Course categories here are `breakfast | snack | main | side | bread | rice | sweet |
base`. `veg: true` shows the green vegetarian mark, which India labels food with formally, so it is authentic
rather than imposed.

**Depth is the long form**: a headnote of two or three paragraphs, 8–11 steps, two or three notes explaining
why rather than what, two or three variations, and one of the notes is always the Norwegian sourcing note.
Recipes are never narrated, so editing one cannot make an audio file stale.

## 9. Testing

**Run the player and audiobook tests against the source tree, not `dist/`**: `HOSTED_AUDIO` is empty, so
the dist file has no narration in it and both tests will report no manifest. Pass the URL:
`python tools/test/playertest.py "http://127.0.0.1:8765/masala-dabba.html?instant&region=IN-KER&lesson=2"`.
And **re-run `tools/wire.py` after the first narration run**, because `manifest.js` does not exist until
`build.py` has written it, so the wiring pass before it silently leaves the region without audio.

Serve the folder: `python -m http.server 8765 --bind 127.0.0.1 --directory <repo>` (background it, stop it
afterwards, and check nothing else already holds the port). Chrome:
`C:\Program Files\Google\Chrome\Application\chrome.exe`. Set `PYTHONIOENCODING=utf-8` on Windows.

- Screenshot: `python tools/test/shot.py out.png 390x844 "?instant"` (repeat the three arguments for more
  shots in one Chrome run; `MDB_URL` and `MDB_WAIT` override). It sets the viewport through CDP, which
  `--window-size` does not do in `--headless=new`.
- Touch flows (needs `websocket-client`): `touchtest.py`, `maptaptest.py`, `playertest.py`, `toggletest.py`,
  `introtest.py`, `cooktest.py`, `booktest.py`, `caftest.py`. Each uses its own Chrome profile dir; run at
  most three in parallel. **They were copied from the Italian repo and still expect Italian region codes in
  places — fix each one the first time you run it.**
- Always check: phone portrait shows all fourteen regions; tapping a region on the terrain selects it; a
  reading opens; the language switch re-renders the open module; a recipe rescales.

## 10. Publishing (not done yet)

`gh` is **not installed** on this machine. So:

1. Create `github.com/vidarsveen/<repo-name>` by hand, public, empty.
2. `git remote add origin https://github.com/vidarsveen/<repo-name>.git && git push -u origin main`.
3. Settings → Pages → Source: GitHub Actions. The workflow enables it itself on first run
   (`configure-pages` with `enablement: true`), so this may already be done.
4. The site lands at `https://vidarsveen.github.io/<repo-name>/`, 2–3 minutes after each push to `main`.
5. Narration: build `dist/audio.tar.gz` with `tools/audio_pack.py`, create a release tagged `audio`, upload
   it (§5).

There is a hosted preview for reviewing on a phone, at
https://claude.ai/code/artifact/ac85f37d-1cb1-409c-9cb7-ecb3b46ca44c — republish with the Artifact tool
passing that `url` and the file `dist/masala-dabba.html`. **Never publish without `url`**; that creates a
second artifact. It is 6.3 MB with Kerala's photos and its Opus narration inlined (`HOSTED_AUDIO = ['kerala']`
in `build.py`), against a 16 MB ceiling. A region's Opus narration costs about 3.5 MB inlined and its photos
about 0.8, so narration is what to drop when the ceiling bites; the live site has no limit and always
carries all of it.

## 11. Gotchas that cost time already

- **Bash heredocs mangle Python regex escapes.** Three scripts were broken this way in one session. Put patch
  scripts in files and run them, or use the Write tool.
- **The port script left a doubled `<!--__CONTENT__-->`** because the Italian app already carried one. That
  marker is now load-bearing: `wire.py` replaces everything between it and the app's own `<script>`.
- Three.js r128 only: no `CapsuleGeometry`, no `Vector3.randomDirection`.
- **Commons free-text search often returns nothing** for a phrase that obviously exists. Fall back to a
  category listing (`python tools/commons.py cat "Category:Piper nigrum" 20`). Add a User-Agent and pause
  between calls, which `tools/commons.py` already does. **Download the `thumburl` the API hands back**, do
  not build one yourself.
- **LOOK at every photo before keeping it** (Read the file, or make a contact sheet). Of seventeen downloaded
  for Kerala, four were rejected on sight: a "spice market" that was a street with a truck in it, a synagogue
  photo that was a corridor with strangers in it, and two that did not show what they claimed.
- `curl` in this Git Bash is broken; use PowerShell `Invoke-WebRequest` or Python `urllib`.
- ffmpeg is a Windows exe: give it Windows paths.
- Photo captions must be updated in BOTH language files when a photo is swapped.
- **Never match an image key with `\w+`.** Keys contain hyphens (`pepper-vines`, `matta-rice`). A
  hyphen-blind regex once deleted referenced photos from two regions of the Italian course.
- **The single-file build inlines Three.js.** The source page loads it from cdnjs with a `document.write`
  fallback to the local copy, which is right when the page is served from a folder and wrong for a single
  file: the artifact sandbox blocked the CDN request, the fallback asked for a relative file that is not
  there, and the page stopped at "Could not load Three.js". `build.py` now replaces both tags with the
  600 KB of local `three.min.js`, so the dist file needs no network at all. Do not undo that to save bytes.
- **The top bar is full at 390 px** once the audiobook button appears, which it does as soon as a region
  has narration. `#lang` is `flex:none` so the language toggle is never the thing that gets clipped; the
  progress pill drops its bar under 430 px and itself under 360. Anything new in `#top` has to earn its
  place against that budget.
- The page is served without a doctype. In quirks mode tables reset `color` and `font`; the `.tasting table`
  rule sets them explicitly. Keep that.

## 12. Adding a region: the exact recipe used for Kerala

1. **Text, English.** `content/<stem>.js`, copied from `content/kerala.js`. Keep the structure: a
   `credits` object, four lessons, each with `title, kicker, minutes, hero, heroCaption, summary, html`.
   The `html` is a template literal with `<p class="lead">`, `<h2>` sections,
   `<figure data-img="key"><figcaption>…</figcaption></figure>` (no `<img>`; the app resolves the key to
   `assets/<stem>/key.jpg`), one `<aside class="facts"><h4>Key facts</h4><ul>` per reading, optionally one
   `<aside class="tasting"><h4>In the pantry: …</h4><table><tr><th>Aroma</th><td>…`, and a closing
   `<div class="recap"><h4>Before you move on</h4><ul>` with three bullets. Titles come from `COURSE.lessons`,
   which already has all fourteen regions. 800–1200 words each. **Never use the class name `glass`** inside
   reading HTML; it collides with the UI panel class. Read §6 before writing a sentence.
2. **Text, Norwegian.** `content/<stem>.no.js`: `window.READINGS_NO['IN-XXX'] = {credits: window.READINGS['IN-XXX'].credits, lessons:[…]}`.
   Same structure, same image keys, same number of `<h2>`s. Kickers «Krydder · Lesetekst 1 av 4», «Bordet ·»,
   «Retter ·», «Historie ·»; headings «Nøkkelfakta», «I skapet: …», «Før du går videre». Write it from the
   facts, not from the English sentence (§6).
3. **Photos.** `python tools/commons.py search "<term>" 8` and, when free-text returns nothing, which is
   often, `python tools/commons.py cat "Category:Name" 20`. Accept only CC0, CC BY, CC BY-SA or public
   domain. Download with `commons.py get "File:…" <key>` into `_photos/photos/`, **build a contact sheet and
   look at every one**, then resize the keepers into `assets/<stem>/` at 820 px, quality 60, progressive, and
   write `credits.json`. Paste the same object into the content file's `credits`. 12–16 photos; the hero of
   each reading should be strong.
4. **Wire it.** `python tools/wire.py`. That is the whole step; there is no HTML to edit.
5. **Spice cards.** Six per region, matching `COURSE.spices` names character for character, both languages,
   and the Norwegian ones need a sourcing note. `python tools/spicecheck.py`.
6. **Quiz.** Twelve questions per language, `docs/quiz-format.md`, `python tools/quizcheck.py`.
7. **Recipes.** `docs/recipe-format.md`, `python tools/recipecheck.py`. Long form (§8).
8. **Narrate.** `PYTHONIOENCODING=utf-8 python tools/narrate.py <stem> --intro title --drop facts,recap`
   (about two minutes a file; run it in the background), then `python tools/normalise.py <stem>` and
   `python tools/opus.py <stem> 12`. Regenerate one file with `--only no-3`.
9. **Build and test.** `python build.py`, then §9, then `python tools/make_site.py`.
10. **Ship the audio.** `python tools/audio_pack.py` and upload to the `audio` release (§5).
11. **Docs.** Update README (regions done) and PLAN §1.

## 13. The name

**Undecided; the owner's call.** "Masala Dabba" is the spice box, which matches the spine of the course the
way "Italia in Tavola" matched Italy at the table. Changing it touches five places and then the repo name:

- `course.json`: `title`, `slug`, `app` (the HTML filename), `storagePrefix`
- `masala-dabba.html`: `<title>`, the masthead `<h1>`, the intro `<h2>`, `const LS`
- rename the HTML file to match `course.json` `app`
- `tools/audiobook.py` picks the title up from `course.py` automatically

Do it before publishing, because the repo name becomes the URL.
