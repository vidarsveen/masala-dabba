# Whole-course consistency and application audit

Completed 22 September 2026 after all fourteen regional text gates.

## Scope and method

The audit compared all 56 readings in each language, the fourteen bilingual regional
introductions, global and regional glossary entries, 168 questions per language, 84 spice
cards and 69 bilingual recipes. It checked repeated explanations and origin stories,
terminology, dish and ingredient names, storage advice, ordered bilingual lists and image
keys. The prose linter was then rerun across the complete course rather than region by region.

## Findings resolved

- The remaining claim that urad is the only pulse able to hold fermentation gas appeared in
  Karnataka after Tamil Nadu's microbiology explanation had been corrected. Both Karnataka
  languages and its recipe now describe the useful proteins and polysaccharides in urad
  without claiming exclusivity.
- Global ghee entries and Rajasthan, Awadh and Centre material no longer promise months of
  unrefrigerated storage. They explain why ghee keeps longer than butter and direct readers
  to product labels, clean dry handling and refrigeration when homemade keeping quality is
  uncertain.
- Kerala's appam account now treats toddy as one documented tradition, limits it to a
  regulated food-grade source, and requires refrigeration once the batter has risen. Its
  prawn variation uses doneness rather than a fixed four-minute promise.
- Global glossary statements about tadka, garam masala, dal and monsoon timing were changed
  from near-universal rules to descriptions that preserve regional, household and climatic
  variation.
- The final Karnataka prose outliers were split or rewritten. The whole-course lint now has
  no sentence above 35 words and no mannered-language flag. Remaining rhythm, catalogue,
  summary and transition flags were inspected in context; the catalogue flags name foods
  before explaining them, while the summaries are deliberately compact course metadata.
- Region-specific names and explanations remain regional where their meanings differ. The
  audit did not collapse related but distinct practices such as Kerala kudampuli, Karnataka
  kachampuli, Tamil tamarind fish curry, Bengali meal order or Gujarati thali conventions.

## Preserved contracts

- 14 culinary regions and four readings per region: 56 readings in English and 56 in
  Norwegian.
- Matching English/Norwegian image-key order and heading counts for every reading.
- 168 questions per language, 84 spice cards, 201 Norwegian spice-sheet names checked and
  69 bilingual recipes.
- Vegetarian flags, dish keys, recipe links, Indian naming conventions and Norwegian
  sourcing notes remain wired through the existing data contracts.
- 225 credited, used images remain after removing the unused and botanically misleading
  Tamil Nadu caper-bud image.

## Application and audio-tool evidence

Nine offline transfer tests pass. They cover bilingual reading structure, image order,
missing recordings, 70 exported chapters per language, stable IDs, introduction-first order,
title-and-prose-only script extraction, old-manifest rejection and repeated Puck direction
for every provider chunk.

The export was exercised beyond enumeration with two short generated test tracks. The M4B
encoder completed, and `ffprobe` found both the introduction and reading chapters in order,
with a duration over two seconds. This validates the export container and chapter metadata;
full course exports still require final recordings.

The deterministic production plan adds one exact pre-generation contract for all 140 tracks:
stable ID, language, region, kind, localized title, word and character counts, and SHA-256 of
the final spoken script. Its check fails if any source text or spoken-format rule changes.

The static site was also exercised in headless Chrome at a 390 × 844 phone viewport using
temporary generated audio fixtures. The fixtures were placed only in ignored `site/` output;
they are not course recordings. These checks passed:

- first-visit introduction, dynamic 14/56/69/84 counts and language switching;
- map labels and touch navigation, including opening readings from the regional sheet;
- all 69 recipes, serving scaling, Norwegian decimals, recipe links and return navigation;
- a 70-chapter audiobook list in each language, grouped in course order with each regional
  introduction before four readings;
- migration of a readings-only numeric position to the same stable reading ID;
- separate English and Norwegian audiobook progress;
- chapter jump, previous, next, pause, resume and course-progress isolation;
- English and Norwegian reading-level play, pause, fifteen-second seek and saved position.

`tools/test/fixture_audio.py` reproducibly seeds an ignored site build with all 140 temporary
tracks, while `tools/test/serve.py` provides an explicit local byte-range server. Automated
range tests cover explicit, open, suffix and unsatisfiable requests. A 100-byte manual request
returned HTTP 206 with `Content-Range`, and Chrome fetched both language fixtures with 206
responses. This verifies the application behavior and transport path; final production audio
must still receive duration, completeness, pronunciation and listening checks.

## Build and recording state

All structure, quiz, spice, recipe and credit checks pass. The single-file build is 10.4 MB
with 227 images and no embedded recordings. The site build is 19.5 MB before temporary test
fixtures. All 112 legacy reading tracks are correctly stale because their text or spoken
format predates this pass. None was relabelled or overwritten. All 28 final introduction
transcripts are materialized from the bilingual course sheets and pass the freshness check;
the introduction audio tracks have not been generated.

After the owner directed that the existing English narration be retained, the local source set
was verified at 56 full-quality MP3 readings, 56 OGG copies, 56 exact old scripts and fourteen
manifests. A reproducible restore tool copies only that English set into the release-candidate
workspace and preserves its historical settings. The retained recordings therefore remain an
explicit user-accepted exception to the new text and spoken-format freshness gate. No legacy
Norwegian recording is restored.

The restore completed successfully: the candidate site contains all 56 retained English MP3
readings and reports 56 of 112 manifest readings present; the missing Norwegian readings use the
browser fallback. The archive inventory contains 56 English MP3 and 56 English OGG files, 160.6 MB
uncompressed. The stale audit still reports all 112 historical scripts as stale, including the
restored English set, which is the intended evidence that no old recording was relabelled. A
phone sized Chrome run streamed a real English Himalaya MP3 with HTTP 206, displayed 7:30,
sought fifteen seconds and saved its position.

The final Norwegian scripts contain 37,293 words including introductions, about 266 minutes
at 140 words per minute. OpenRouter's model page on 22 September 2026 listed
`google/gemini-3.1-flash-tts-preview` at $1 per million input tokens and $20 per million output
audio tokens: https://openrouter.ai/google/gemini-3.1-flash-tts-preview/ . The earlier Toscana
run reported $0.522205 for about 21 minutes with incomplete accounting. Together these support
a provisional first-pass estimate of roughly $8–10 for the 70 Norwegian Puck tracks and a
prudent $12 authorization ceiling for retries. The Indian-name audition must still be generated
and heard before this becomes a measured production estimate. The local key is configured, but
the sandboxed request could not reach OpenRouter. Automatic approval review then rejected the
external request because the owner had not explicitly approved sending this exact sample to
that paid service. At that point no paid request had been made. The authorized preview has a dedicated
generator that preserves its exact input, provider generation ID, measured cost, duration and
loudness metadata under the ignored `voicelab/puck-punjab/` directory. Three additional
transport tests cover explicit, open, suffix and unsatisfiable HTTP byte-range requests.

After explicit owner approval, the Punjab preview was generated with one Puck request. It cost
$0.02627, lasts 52.0 seconds, normalized to −19.46 LUFS and passed MP3 probe and full decode.
The listener decision and chunk-join audition remain pending; no bulk narration was started.

## Remaining release gates

- Listen to the generated Punjab Indian-name Puck audition and record findings; if its names and
  accent pass, test a two-chunk passage for joins before scaling.
- Finish the owner-authorized 70 Norwegian introduction and reading tracks, then report the
  measured provider cost. The 56 retained English readings are an explicit exception to freshness; the
  fourteen English introductions remain an unresolved recording gap under the owner direction
  that only Norwegian needs new narration.
- Check every new Norwegian file for completeness, joins, pace, loudness and pronunciation;
  require fresh Norwegian scripts and matching manifests. Keep the English mismatch visible.
- Build and verify the final audio archive, then request publication authorization and check
  the deployed site and live audio. Temporary fixtures do not satisfy these gates.
