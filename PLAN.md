> **Active improvement work (21 September 2026):** see [the Italy-to-India checklist](docs/italy-transfer/PLAN.md) and [AGENTS.md](AGENTS.md). Original completion notes below describe the first edition, not the new review and Puck audio pass.

# Masala Dabba — roadmap

`CLAUDE.md` is the operating manual. This file is what is decided, what is open, and what happens next.

## 0. Start here (written for a fresh session, 2026-09-12)

**Live: https://vidarsveen.github.io/masala-dabba/ — `git push` deploys it.** Repo
`github.com/vidarsveen/masala-dabba`, branch `main`, working tree clean and pushed.

**All fourteen regions are written**, end to end and narrated in both languages. The last four, Awadh
(`IN-AWA`), Maharashtra (`IN-MAH`), The Deccan centre (`IN-CEN`) and Karnataka (`IN-KAR`), landed on
2026-09-13. Nothing on the map says "reading coming soon" any more.

**The content is complete. What is left is publishing, and four decisions only the owner can make.** The
recipe that wrote it is `CLAUDE.md` §12, run fourteen times; the numbered steps below stay as the record of
how, and for any region that is ever rewritten. What works:

1. Spawn one agent per region, in parallel, each writing `content/<stem>.js` and `.no.js`,
   `content/spice/<stem>.js(.no)`, `content/quiz/<stem>.js(.no)`, `content/recipes/<stem>.js` and
   `assets/<stem>/`. Tell each one **not** to touch `masala-dabba.html`, `course.json`,
   `content/course.no.js` or another region, and **not** to run narration or commit.
   Everything else is per region, so they do not collide.
2. Then spawn a **separate Norwegian reviewer** over the new regions. Do not skip this and do not
   let the writers self-review: the writers had the rules in their brief and a fresh pass still found
   about a hundred faults per region, including real errors (a factual contradiction about panch
   phoron, "the back of the hand" for "the flat of the hand").
3. Then `python tools/stale.py`, re-record what it names, `tools/normalise.py`, `tools/opus.py`,
   `tools/wire.py`, `build.py`, `tools/make_site.py`, `git push`.
4. `python tools/audio_pack.py` and replace the `audio.tar.gz` asset on the release tagged `audio`.

**Publishing, in order.**

1. `git push` deploys the site (`CLAUDE.md` §10). The working tree is ready and every test passes.
2. Replace `audio.tar.gz` on the release tagged `audio` with `dist/audio.tar.gz`, now 301.7 MB for all 112
   narration files. `gh` is not installed, so this is a manual upload or an API call the owner authorises.
   Without it the site still works and offers the browser voice.

**The owner's decisions, none of which blocks publishing.**

1. **The name** (§3 below). "Masala Dabba" becomes the URL, so it is cheaper to settle before links are shared.
2. **The Norwegian voice.** All 56 Norwegian files are edge-tts `nb-NO-PernilleNeural`. The Italian course moved
   to the National Library's «Kvinne · Oslo» and judged it better. Re-recording is now 56 files.
3. **Map labels at phone width.** Collision-avoidance hides a few long names, Bengal & the east and at times
   Kerala and Karnataka. The regions stay reachable by pin and rail chip; shorter map names would fix it.
4. **Reading length.** The median is 1345 words and 48 of 56 sit inside 1100 to 1500. Shorter readings would
   be a rewrite, not a trim.

What the fourteen taught, for any course that follows. **A spice in two regions is normal**: there are four
tamarind cards and three curry-leaf cards, each written for its own kitchen, so tell the writer which existing
card to read first. **One ingredient can hide under two names**: Tamil Nadu's kalpasi and Maharashtra's dagad
phool are the same lichen. And **the Norwegian review found an error that changed meaning in every one of the
ten regions reviewed in this pass**, several of them in the English, so it is never optional.

**The one design question is closed**: the owner read Kerala's reading 1 and confirmed the
spice-pantry chapter earns its place, so the four-reading rhythm is settled for all fourteen.

## 1. Status, 2026-09-12

The repo exists, the engine is ported, the map is built, and **all fourteen regions are written end to end**:
fifty-six readings in English and Norwegian, 226 photographs, 84 spice cards, 168 recap questions per language,
96 glossary terms per language, 69 recipes and 112 narration files. Every content checker passes, all 112
recordings match their text, and every headless test passes.

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
2. ~~Does reading 1 earn its place?~~ **Answered 2026-09-12: yes.** The owner read Kerala's and said it
   works. The four-reading rhythm is therefore settled, and the remaining ten regions follow it without
   further debate. This was the one decision that was cheap now and expensive at region ten.
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
2. ~~Create the GitHub repo and publish.~~ **Done 2026-09-12**: live at
   https://vidarsveen.github.io/masala-dabba/ with all four regions narrated. Deploying is now `git push`.
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
- ~~`assets/audio/*/manifest.js` is generated by `build.py`.~~ **Fixed 2026-09-12**: `wire.py` generates them,
  which removes the ordering trap rather than documenting it. The old arrangement silently shipped a narrated
  region with no audio.
- Fourteen regions × four readings is 56 readings and about 45,000 words per language. The four written so
  far run 4,200 to 5,000 English words each. Budget accordingly.
- **Narration is 83 MB for four regions**, so fourteen will be close to 300 MB. That is the decision in §2
  vindicated: committing it would have put the repo on the same path as the Italian one's 905 MB history.
- **The single-file preview can hold two regions of narration**, not more (§ CLAUDE.md 10). The live site
  has no such limit, so this only constrains the review artifact.

## 6. Not doing

**No general course CMS.** Two courses is not enough evidence for the right abstraction, and the time goes
into framework instead of content. The Italian repo and this one share no code on purpose; extract a shared
kit only after fixing the same bug twice in two places.

**No refactor of the Italian course.** It is finished and live. The English readings there would benefit from
the same pass the Norwegian got, and that is a deliberate project for another time, not something to start
casually: eighty readings, and every edit makes its narration stale.
