# Masala Dabba course-wide narration decision

Prepared 22 September 2026. This is the single owner decision point after the fourteen-region
editorial pass; it does not require region-by-region review.

## Ready now

- All fourteen regions have passed English fact/listener review, Norwegian-first review,
  bilingual alignment and dependent-content reconciliation.
- The course preserves 56 readings per language, 168 questions per language, 84 spice cards,
  69 bilingual recipes and 225 credited images.
- Twenty-eight regional introduction texts are final on the bilingual course sheets; their
  materialized transcript files pass the freshness check.
- The spoken format is title plus prose only. Summaries, headings, figures, tables, fact boxes,
  recaps, credits and closing announcements are excluded.
- `narration-plan.json` freezes all 140 stable track IDs, final script hashes, titles and word
  counts before any external speech request.
- The app and exporter use 70 stable chapters per language: an introduction followed by four
  readings for each region.
- A generated sample M4B was probed successfully: it plays and contains separate introduction
  and reading chapter markers in the correct order. Full exports await the final recordings.
- Old numeric listening positions migrate to the same reading, and English and Norwegian
  progress remain independent.
- Phone navigation, language switching, recipes and both audio players pass over HTTP byte-range
  serving with reproducible temporary fixtures.

The detailed regional evidence is in `docs/rewrite/`; the consolidated findings and test record
are in [the whole-course audit](../rewrite/course-audit.md).

## Narration decision

Owner direction on 22 September 2026: retain the existing English narration, following the
Italian-course approach, and generate only Norwegian with Puck. The 70-track English script plan
remains in the audit so any mismatch with revised text is visible; English regeneration is not
part of the requested production run.

The final English scripts contain 39,237 words across 70 tracks. They are retained as an audit
reference and will not be sent to Microsoft Edge speech under the current direction.

The final Norwegian scripts contain 37,293 words across 70 tracks, about 266 minutes at 140 words
per minute. The approved sound is Puck through
`google/gemini-3.1-flash-tts-preview`. Current provider pricing and the earlier Toscana run support
a first-pass estimate of $8–10; allow up to $12 for the name audition, generation retries and the
complete Norwegian run. The short Punjab name audition is generated and awaits listening.

The owner heard the Punjab Puck preview and authorized the 70 Norwegian tracks. The run is in
progress under the proposed $12 ceiling; measured provider receipts will determine the actual
cost. The preview cost $0.02627 separately.

The OpenRouter key is stored locally in the ignored `.env`; it must never enter chat, source,
handover files or commits.

The retained English source set is available in the owner's existing local checkout: 56 reading
MP3 files, their OGG copies, exact old scripts and fourteen manifests. The release-candidate
workspace restores only these English files. It does not copy the old Norwegian recordings or
silently change the old English metadata. English regional introductions remain unrecorded under
the direction that only Norwegian needs new narration.

Restore verification: all 56 English MP3 readings and their 56 OGG copies are present in the
candidate workspace. The real-audio site build includes those 56 readings and omits the absent
Norwegian files from its runtime manifest, so Norwegian currently uses the browser fallback.
Real English playback passed in phone sized Chrome: one recording streamed with HTTP 206,
displayed its 7:30 duration, sought fifteen seconds and saved its position.

The local OpenRouter key is now configured. The preview request reached a network restriction,
and automatic approval review rejected unrestricted access because the owner's earlier “ok” did
not explicitly approve sending the exact 95-word Punjab sample to this paid external service.
That was resolved when the owner explicitly approved the exact sample and destination. One
preview request then completed for $0.02627. The 52-second normalized MP3 is available in
ignored `voicelab/puck-punjab/`; its full decode passes. Owner listening and pronunciation
review remain before any full Norwegian run.

## After preview review

Record the name and accent findings from the generated audition and check chunk joins in the
first completed long reading. Complete the authorized Norwegian run, normalize it, and check
all 70 new files for word coverage, truncation, repetition, pronunciation, joins, pace and
loudness. Record the retained-English mismatch explicitly when verifying manifests, then build
and verify the audio archive and release candidate.

Publication is a separate final authorization. Do not upload the archive or deploy the site until
that authorization is explicit.
