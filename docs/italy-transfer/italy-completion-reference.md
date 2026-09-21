# Italy completion — 18 September 2026

The local course now has all 20 regions rewritten in English and Norwegian. Sicilia was the last;
Sardegna had already been finished by Claude. Sicilia’s twelve questions and related recipes,
wine cards, sheet titles and glossary now match its rewritten readings.

All 160 reading recordings match the current text and use the title/prose-only format. The final
audit found two Lambrusco files with an old closing announcement; both were replaced. Twenty new
regional introductions in each language precede the readings in the audiobook: 100 chapters per language.

Nothing has been pushed. Publishing the saved changes to the live site is the remaining release step.

## Verification

- All-region structure and photo checks, 240 questions per language, 89 wine cards per language,
  102 bilingual recipes and 134 glossary keys per language pass.
- All 200 audio entries have MP3, Opus and script files. No reading or introduction is stale.
- Four English reader reviews, four English fact reviews and four Norwegian reviews informed Sicilia;
  separate English and Norwegian reviews checked all twenty introductions.
- Phone screenshots show the full map and readable Sicilia lessons in both languages.
- Map taps select regions. Sicilia playback, pause and fifteen-second seeking work in both languages.
- Audiobook tests cover 100 chapters, language switching, chapter navigation, independent progress,
  and migration of old saved positions. Export enumeration contains all 100 chapters per language.
- Preview build: 14.5 MB; complete site: approximately 446.5 MB.

Audio tests use tools/test/serve.py on port 8766, whose HTTP byte-range responses match production.
The simpler server can reset an audio seek to zero. Automated timing and playback checks do not amount
to a human pronunciation audit of every recording. The optional separate numbered chapter-announcement
feature remains outside this completion pass; each reading already speaks its title.

## Implementation notes

Introduction text has one source per language: the region sheet. tools/record_intros.py records only
stale introductions and --check verifies them. Reading recordings remain separate. The audiobook
saves stable region/track identifiers and migrates old numeric reading positions. The downloadable
book builder also includes introductions; new M4B exports were not generated in this pass.
