# Masala Dabba — active improvement work

Read this file, `docs/italy-transfer/PLAN.md`, and the whole `CLAUDE.md` before editing.
This file and the transfer plan update the historical status and voice choices in CLAUDE.md.

## Owner's current direction (21 September 2026)

Improve the existing India course to the standard achieved in Italia in Tavola. Work in this
repository, independently of Italy. The owner approved preparing this workspace and wants the
Puck sound from the Toscana audition. Finish the text and reviews before replacing recordings.
The setup is not evidence that the Indian content has already received those improvements.

Use `docs/italy-transfer/PLAN.md` as the acceptance checklist; record evidence per region.
Read `editorial-reference.md`, `norwegian-rules.md` and `norwegian-review-brief.md` in that folder before prose work.
Read `puck-voice.md` before audio work. Existing default voices are not the new Norwegian choice.
Keep updates brief and continue routine authorised work without repeatedly asking permission.
The owner does not want to review each region. Follow the staged completion mandate in
`docs/italy-transfer/PLAN.md`: perform regional reviews internally and provide one consolidated
course review. Do not stop for regional sign-off. Paid bulk narration and publication still
require authorization if it has not subsequently been supplied.

## Preserve the Indian course

Keep fourteen culinary regions, four readings each, both languages, photo keys, spice cards,
recipes, vegetarian flags, Indian naming conventions and Norwegian sourcing notes.
Edit strong material rather than rewriting it solely to resemble Italy. Punjab reading 4 is
the editorial benchmark. Correct dependent quizzes, summaries, recipes, cards and glossary
when a factual correction affects them. Preserve data contracts and verify translated list order.

Do not run the historical `_port*` tools or overwrite India's app with Italy's app.
Do not refactor Italy or change its live course as part of this work.
API keys belong in ignored local configuration; never copy them into handover files or commits.

## Verification and release

Run the existing structure, quiz, spice, recipe, credit and stale-audio checks as applicable.
An audio freshness pass alone does not prove title/prose-only formatting: old manifest settings
can make old headings, tables and outros appear valid. Audit the format separately.
Port regional introductions, stable audiobook chapter identifiers, saved-position migration
and export support with tests adapted to India's codes. Test phone navigation, language,
recipes, playback, seeking, resume and audiobook transitions using HTTP byte-range serving.

Audio binaries stay outside git. India's Pages workflow downloads `audio.tar.gz` from the
release tagged `audio`; preserve and verify this delivery route. Never describe publication
as complete until deployment and live audio have been checked. This setup request does not
itself require publishing changes or purchasing a full-course narration run.

## Start here

Establish the baseline checks and actual tool gaps, then prepare Punjab as the first complete
region: review all four readings together, reconcile facts and Norwegian, and prepare its
regional introduction. Use a short Indian-name Puck audition before scaling audio generation.
Update the transfer checklist as work proceeds so a fresh task can continue without this chat.
