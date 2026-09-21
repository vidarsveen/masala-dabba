# India improvement and verification plan

Prepared 21 September 2026. Owner: Vidar. Workspace: `C:/Users/vidar/PycharmProjects/masala-dabba`.
Existing repository: https://github.com/vidarsveen/masala-dabba
Existing site: https://vidarsveen.github.io/masala-dabba/

## Baselines and scope

India source baseline: `32ea35458eb7e892f76f2470754820260841ba47`.
Italy reference: `b46a13eea57d96f0c645f5f1df4455fe1fe64670`, published successfully
in Pages run 35522687032. Copied historical documents may still say Italy was not pushed;
those release notes predate publication and do not describe the current status.

India's existing manual reports 56 readings per language, 226 photos, 84 spice cards,
168 questions per language, 96 glossary terms per language, 69 bilingual recipes and
112 reading recordings. These are the original-course baseline, not a completed improvement pass.
Verify counts against files before using them as release evidence.

## Acceptance matrix

| Improvement carried from Italy | Required India evidence | Status |
| --- | --- | --- |
| Research before editing | Per-region source ledger; dated sources for changing claims; disputed claims qualified | Pending |
| Engaging prose | Concrete openings, connected mechanisms, history reaching food, varied structure and endings | Pending |
| Facts conserved | Every changed or removed claim has a reason; no invented scenes or quotations | Pending |
| Listener comprehension | Landmarks/subjects named in spoken prose; transitions work without headings | Pending |
| English reader and fact review | Separate passes for each reading; fixes recorded and rechecked | Pending |
| Natural Norwegian | Review without English first; full Italian language rules plus Indian naming/sourcing rules | Pending |
| Region-level review | Four readings compared for repeated openings, endings, anecdotes and repeated explanations | Pending |
| Dependent content | Summaries, lesson titles, quizzes, spice cards, glossary and recipes reconciled in both languages | Pending |
| Spoken format | Title then prose; no summary, headings, tables, facts, recap, figures, credits or closing announcement | Pending |
| Regional introductions | One bilingual source on region sheet, recorded as separate tracks, fresh-script checks | Pending |
| Approved Norwegian sound | Puck direction and production metadata saved; Indian-name audition checked | Preference saved; implementation pending |
| Recording quality | Complete scripts, no truncation/repetition, listen checks, consistent pace and loudness | Pending |
| Audiobook | Intro before each region; stable track IDs; old saved positions migrate; language progress independent | Pending |
| Export | Same chapter order and intros in export enumeration; validate any generated download | Pending |
| Phone experience | All regions reachable; map/reader/language/recipes tested on a phone viewport | Pending |
| Audio behavior | Play, pause, seek, resume, next chapter and language changes tested with byte-range serving | Pending |
| Packaging and publication | Structure checks and both builds; release audio matches manifests; successful Pages run and live checks | Pending |

The transfer is complete only when every applicable row has evidence. Mark an Italy-only feature
(wine cards, Vinmonopolet) inapplicable with its Indian equivalent; never silently omit a feature.

## Region tracker

Use a ledger `docs/rewrite/<stem>.md` with source links, factual changes, review findings and fixes,
dependent-content changes, script settings, recordings and test results. Pending means not audited
in this improvement pass, even when the original content is complete.

| Region stem | EN + facts | NO review | Dependent content | Intro + audio | Verification |
| --- | --- | --- | --- | --- | --- |
| himalaya | Pending | Pending | Pending | Pending | Pending |
| punjab | Pending | Pending | Pending | Pending | Pending |
| rajasthan | Pending | Pending | Pending | Pending | Pending |
| awadh | Pending | Pending | Pending | Pending | Pending |
| gujarat | Pending | Pending | Pending | Pending | Pending |
| maharashtra | Pending | Pending | Pending | Pending | Pending |
| goa | Pending | Pending | Pending | Pending | Pending |
| centre | Pending | Pending | Pending | Pending | Pending |
| bengal | Pending | Pending | Pending | Pending | Pending |
| northeast | Pending | Pending | Pending | Pending | Pending |
| karnataka | Pending | Pending | Pending | Pending | Pending |
| andhra | Pending | Pending | Pending | Pending | Pending |
| tamilnadu | Pending | Pending | Pending | Pending | Pending |
| kerala | Pending | Pending | Pending | Pending | Pending |

## Work sequence

1. Run baseline checks; inspect India versus the pinned Italy reference. Record specific missing
   behavior rather than copying entire tools. Check the old audio's format separately from freshness.
2. Edit Punjab's four readings as the first complete region. Preserve its strong causal narrative.
   Research factual issues, perform English reader/fact and Norwegian reviews, reconcile supporting
   content, and write the regional introduction. Save findings before moving to another region.
3. Adapt the audio and audiobook tools to India's course manifest and release packaging. Preserve
   existing progress when adding introductions. Validate expected totals of 70 chapters per language
   (14 introductions + 56 readings), 140 recordings across both languages.
4. Reproduce the approved Puck delivery on Indian prose; check Indian names, Norwegian accent and
   chunk joins. Text must be final before full recording. Document projected cost before a bulk run;
   the Toscana approval selects the voice, it is not a measured quote for India.
5. Continue region by region using the ledger, then perform full-course consistency, build, mobile,
   playback and release checks. Keep the live release separate from unfinished working material.

## Known gaps and precautions

- India has `tools/stale.py` but no `tools/review_no.py` or `tools/record_intros.py` at setup.
  Adapt the needed checks rather than running Italy's hardcoded region logic against India.
- Existing manifests can validate old narration settings. Explicitly check `intro=title`,
  `drop=facts,recap,tasting,headings`, `outro=none` for every reading.
- Existing manuals contain historical contradictions (including "not published"). The repo already
  has a Pages workflow and remote; this document is the current improvement entry point.
- Some inherited tests may still contain Italian codes or reuse stale browser profiles. Inspect
  them before trusting a reported pass. Use an unused server port; Italy's audition uses 8766.
- Keep MP3/Opus out of git. Verify the release archive and manifest match at publication time.
- Source snapshots in this folder are references. Old pilot-approval gates and completed Italian
  progress do not restart this task or mark Indian work complete; current owner instructions govern.
## Setup verification — 21 September 2026

Existing audio check: 112 scripts checked, all match current readings. Manifest audit:
all 112 have title-only intro and drop only facts/recap; all omit an explicit outro setting.
This confirms that freshness is not format compliance. No new content reviews or recordings
were performed during workspace preparation. New documentation was checked for whitespace errors.
