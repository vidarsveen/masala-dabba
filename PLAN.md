# Masala Dabba — roadmap

`CLAUDE.md` is the operating manual. This file is what is decided, what is open, and what happens next.

## 1. Status, 2026-09-12

The repo exists, the engine is ported, the map is built, and **four regions are written end to end**:
Kerala, Punjab & Delhi, Bengal & the east and Rajasthan. Sixteen readings in English and Norwegian, 65
photographs, 24 spice cards, 48 recap questions per language, 19 recipes and narration in both languages.
Every headless test passes. The other ten regions have polygons, summaries, landmarks and reading titles,
and degrade to "reading coming soon".

The four were picked to be maximally unlike each other, so that the format is tested rather than repeated:
rice and coconut, wheat and dairy, whole spice in hot fat, and a kitchen with no water. Kerala's Norwegian
also went through a full language review, which found eleven invented compounds and about sixty other
faults; the rules that came out of it are in `CLAUDE.md` §6 and bound the other three as they were written.

Everything below is either a decision already taken, with its reason, or a question for the owner.

## 2. Decisions taken, and why

### The four-reading rhythm

1. the spice logic of the region · 2. the staple and the table · 3. the dishes · 4. the place and its history.

This keeps the shape the Italian course used, so `COURSE.lessons`, the kickers and every content format
survived the port unchanged. Reading 4 is history **enough to explain the food**, not a history lesson;
readings 1–3 stay about food.

### Fourteen regions, grouped from whole states

Kashmir & the Himalaya · Punjab & Delhi · Rajasthan · Awadh · Gujarat · Maharashtra · Goa & the Konkan ·
The Deccan centre · Bengal & the east · The North-East · Karnataka · Andhra & Telangana · Tamil Nadu · Kerala.

Whole states, so every polygon is a union of existing shapes and nothing is hand-drawn. Fourteen rather than
36, because Indian food regions do not follow state lines and because 36 modules is nearly double the work
for a less accurate map. `course.json` records the membership; `course.json` also records why the Andamans
and Lakshadweep are excluded.

### The spice pantry replaces wine

Wine earned two readings in the Italian course because it is a system with names, places and rules.
Techniques (tandoor, dum, bhuna, tadka) cut across regions and belong in the glossary; dishes are already
reading three. What is genuinely regional and systematic is what sits in the masala dabba, and it is also the
thing a European most reliably gets wrong — "curry powder" is the equivalent of thinking all Italian red is
Chianti.

The tasting card became a spice card, one structural field at a time, so `spicecheck.py` and the renderer are
the same shape as the Italian ones.

### The Vinmonopolet link becomes a sourcing note

An upgrade rather than a loss. There are no commerce links, no shop IDs and no alcohol-advertising question.
What the Norwegian edition carries instead is where to find asafoetida, fresh curry leaves, real jaggery and
kudampuli in Norway, and what not to buy. This is the part of the course that could not be translated into
existence, and `spicecheck.py` fails a Norwegian card that lacks it.

### The vegetarian mark

A small green square on dishes and recipes, not a division of the course. India labels food this way
formally, so it is authentic rather than imposed, and it is useful when scanning a region sheet.

### Audio stays out of git

The Italian repo's `.git` is 905 MB, most of it two copies of one narration pass, because the audio was
committed and then re-recorded. Here the mp3 and ogg files are ignored; the spoken scripts and durations are
committed; the built audio ships as a release asset that the Pages workflow unpacks. Re-recording costs an
upload rather than a permanent copy of the repo. `tools/audio_pack.py`, `CLAUDE.md` §5.

### Keep the 3D relief

For India it teaches more than it did for Italy. The Himalaya, the Gangetic plain, the Thar, the Western
Ghats and the Deccan explain where the food comes from: spice country is where it is because of those
mountains and that monsoon. Baked at zoom 7 rather than Italy's 8, with the vertical exaggeration raised from
4 to 6.5 because a world unit is now 32 km rather than 11.

## 3. Open questions for the owner

1. **The name.** "Masala Dabba" is a working title, and it becomes the repo name and therefore the URL.
   Changing it touches five places (`CLAUDE.md` §14) and is cheap now, expensive after publishing.
2. **Kerala, before writing thirteen more.** Read it, and listen to it once it is narrated. If the spice
   pantry turns out too thin to carry reading 1 on its own, that is cheap to change now and expensive at
   region ten. The specific thing to judge: does reading 1 tell you something you did not know, or does it
   read as a preamble to reading 3?
3. **Is reading 4 the right amount of history?** Kerala's is the strongest case for it — the whole kitchen is
   a record of who landed on that beach. Rajasthan's and the North-East's will be thinner, and it may be that
   history belongs folded into reading 1 rather than standing alone.
4. **Region order.** After Kerala, the argument for going to a maximally different region next is that it
   tests the format harder: the North-East has almost none of the Indian spice pantry, and Punjab has wheat,
   dairy and a tandoor instead of rice and coconut. The argument for Punjab is that it is the food a
   Norwegian reader thinks of as Indian, so correcting it early matters.

## 4. Next, in order

0. **Review the preview**: https://claude.ai/code/artifact/ac85f37d-1cb1-409c-9cb7-ecb3b46ca44c — the whole
   thing, on a phone, with Kerala's narration inlined so the Listen button really plays.
1. **Listen to Kerala.** Both languages, on a phone, through the audiobook page. This is the test the prose
   rules in `CLAUDE.md` §6 exist for, and the owner is the only person who can run it.
2. Create the GitHub repo and publish (`CLAUDE.md` §10). `gh` is not installed, so this is a manual step, and
   so is uploading `dist/audio.tar.gz` to the `audio` release.
3. **Decide the Norwegian voice.** Kerala is narrated with edge-tts `nb-NO-PernilleNeural`, which is what the
   Italian course used before it was re-recorded with the National Library's `nb-tts-voxcpm2` voice «Kvinne ·
   Oslo» and judged better. Re-recording eight files is cheap; re-recording fifty-six is not, so this is
   worth settling now. `tools/voicelab.py` renders the same script in every candidate.
4. Region five, once the owner has read one of the four.
5. Landmark models: the fourteen builders are primitives-only first drafts. The Charminar, Sanchi and the
   Golden Temple read well; the root bridge and Mehrangarh need another pass.

## 5. Known limitations, recorded so they are not rediscovered

- ~~The relief tint is elevation-only.~~ **Fixed 2026-09-12.** Colour now comes from Natural Earth II, a
  public-domain cross-blended raster that already encodes land cover, so the Thar reads as desert and the
  Gangetic plain as irrigated green where an elevation ramp made both the same colour. A quarter of the old
  ramp is blended back for depth, because NE2 is drawn pale for print, and the ramp keeps the snow line
  outright. `python tools/fetch_ne2.py` downloads the raster (310 MB, git-ignored); the bake falls back to
  the elevation ramp if it is absent, so a fresh clone still works without it.
- **Goa is very small.** 0.3 square degrees against Rajasthan's 31, and ten times smaller relative to the
  country than Valle d'Aosta was to Italy. It is reachable through its pin and its rail chip, but it is worth
  watching on a phone. Folding it into Maharashtra was rejected: Goan food is too distinct.
- **Jammu and Kashmir uses the source data's boundary**, which follows the Indian claim, as Indian-published
  maps do. Recorded here so it is a known choice rather than an accident.
- **`assets/audio/*/manifest.js` is generated by `build.py`**, so the first build after adding narration must
  run before `make_site.py`.
- Fourteen regions × four readings is 56 readings and about 45,000 words per language. Kerala took roughly
  4,200 English words and 3,900 Norwegian. Budget accordingly.

## 6. Not doing

**No general course CMS.** Two courses is not enough evidence for the right abstraction, and the time goes
into framework instead of content. The Italian repo and this one share no code on purpose; extract a shared
kit only after fixing the same bug twice in two places.

**No refactor of the Italian course.** It is finished and live. The English readings there would benefit from
the same pass the Norwegian got, and that is a deliberate project for another time, not something to start
casually: eighty readings, and every edit makes its narration stale.
