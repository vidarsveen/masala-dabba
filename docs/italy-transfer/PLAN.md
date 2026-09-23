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
| Research before editing | Per-region source ledger; dated sources for changing claims; disputed claims qualified | Complete for all 14 regions; ledgers and course audit saved |
| Engaging prose | Concrete openings, connected mechanisms, history reaching food, varied structure and endings | Complete; regional and whole-course prose passes logged |
| Facts conserved | Every changed or removed claim has a reason; no invented scenes or quotations | Complete; conservation decisions logged per region |
| Listener comprehension | Landmarks/subjects named in spoken prose; transitions work without headings | Complete; spoken-prose pass and extraction test pass |
| English reader and fact review | Separate passes for each reading; fixes recorded and rechecked | Complete for 56 readings |
| Natural Norwegian | Review without English first; full Italian language rules plus Indian naming/sourcing rules | Complete for 56 readings and 14 introductions |
| Region-level review | Four readings compared for repeated openings, endings, anecdotes and repeated explanations | Complete for all 14 regions |
| Dependent content | Summaries, lesson titles, quizzes, spice cards, glossary and recipes reconciled in both languages | Complete; checks pass at 168 questions/language, 84 cards and 69 recipes |
| Spoken format | Title then prose; no summary, headings, tables, facts, recap, figures, credits or closing announcement | Tooling and extraction test complete; 112 legacy recordings correctly fail format/freshness |
| Regional introductions | One bilingual source on region sheet, recorded as separate tracks, fresh-script checks | 28 source texts and transcript files pass freshness checks; production recordings pending |
| Approved Norwegian sound | Puck direction and production metadata saved; Indian-name audition checked | Punjab Puck preview generated for $0.02627; owner listening and pronunciation decision pending |
| Recording quality | Complete scripts, no truncation/repetition, listen checks, consistent pace and loudness | Pending |
| Audiobook | Intro before each region; stable track IDs; old saved positions migrate; language progress independent | Complete with 70-chapter temporary fixtures; final-audio listening pending |
| Export | Same chapter order and intros in export enumeration; validate any generated download | Enumeration complete and tested at 70/language; a generated two-chapter M4B passed probe checks; full exports pending final audio |
| Phone experience | All regions reachable; map/reader/language/recipes tested on a phone viewport | Complete at 390 × 844; final-audio repeat pending |
| Audio behavior | Play, pause, seek, resume, next chapter and language changes tested with byte-range serving | Complete with temporary fixtures and HTTP 206; retained English MP3 also streamed, sought and saved position; final Norwegian repeat pending |
| Packaging and publication | Structure checks and both builds; release audio matches manifests; successful Pages run and live checks | Pending |

The transfer is complete only when every applicable row has evidence. Mark an Italy-only feature
(wine cards, Vinmonopolet) inapplicable with its Indian equivalent; never silently omit a feature.

## Region tracker

Use a ledger `docs/rewrite/<stem>.md` with source links, factual changes, review findings and fixes,
dependent-content changes, script settings, recordings and test results. Pending means not audited
in this improvement pass, even when the original content is complete.

| Region stem | EN + facts | NO review | Dependent content | Intro + audio | Verification |
| --- | --- | --- | --- | --- | --- |
| himalaya | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary, recipes and Bhopal cross-reference reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; 8 stale plus 2 dependent Centre tracks; playback pending |
| punjab | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; audition and production audio pending | Text/structure checks pass; 8 stale; playback pending |
| rajasthan | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; stale-track count logged below; playback pending |
| awadh | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; stale-track count logged below; playback pending |
| gujarat | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; stale-track count logged below; playback pending |
| maharashtra | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; stale-track count logged below; playback pending |
| goa | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; stale-track count logged below; playback pending |
| centre | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; 64 stale course tracks; playback pending |
| bengal | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; 72 stale course tracks; playback pending |
| northeast | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; 80 stale course tracks; playback pending |
| karnataka | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; 88 stale course tracks; playback pending |
| andhra | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; 96 stale course tracks; playback pending |
| tamilnadu | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; 104 stale course tracks; playback pending |
| kerala | Complete; sources and conservation logged | Complete; Norwegian-first and alignment passes logged | Complete; quizzes, cards, glossary and recipes reconciled | Bilingual intro final; production audio pending | Text/structure checks pass; 112 stale course tracks; playback pending |

## Work sequence

### Completion mandate — 21 September 2026

The owner requests completion without reviewing or approving each region. Regional
checks are internal acceptance gates, not owner checkpoints. Continue routine research,
editing, reconciliation and testing across all fourteen regions. Resolve ordinary
editorial choices against the reference rules and evidence. Report completed milestones
and genuine blockers briefly; do not end each regional pass by asking whether to continue.
This plan does not authorize paid bulk narration or publication.

Execute the following stages in order. The numbered historical sequence below supplies
background; this staged plan governs completion and keeps full recording after text review.

| Stage | Work | Exit evidence |
| --- | --- | --- |
| 1. Close Punjab | Finish remaining historical and agricultural research; review all four readings together; reconcile EN/NO and all supporting material; finalize bilingual introduction | Source/conservation ledger; separate English fact and reader passes, Norwegian-first pass then bilingual comparison; resolved or explicitly justified lint findings; supporting-content checks |
| 2. Complete remaining text | Work through Himalaya, Rajasthan, Awadh, Gujarat, Maharashtra, Goa, Centre, Bengal, Northeast, Karnataka, Andhra, Tamil Nadu and Kerala using the same internal gate | All fourteen regional ledgers complete for text; 56 readings and 14 introductions in each language; all dependencies reconciled; no owner approval per region |
| 3. Audit the whole course | Compare repeated stories and explanations, historical claims, terminology, dish/spice names, glossary entries, recipe quantities and sourcing; preserve regional differences | Cross-course audit and fixes; ordered bilingual lists and image keys verified; no unresolved material factual or language issues |
| 4. Finish app and audio tooling | Add introduction tracks, stable chapter identifiers, saved-position migration and intro-aware exports; adapt tests to India; prepare Puck production route and Indian-name audition | Tests for old progress, independent language positions, missing tracks and 70 chapters per language; title/prose-only extraction and metadata audited separately; audition findings and measured cost estimate |
| 5. Prepare one course-wide decision | Present the finished text/app preview, concise change report, outstanding limitations, Puck sample if generated within authorized means, and total narration estimate | One consolidated review package; request only any still-needed spending authorization, with a concrete estimate and scope |
| 6. Produce and verify narration | After spending is authorized, record final scripts; preserve existing English voice unless changed by owner; use approved Puck delivery for Norwegian; normalize and generate playback/export formats | 140 complete tracks; zero stale scripts; format compliance; duration/completeness and listening checks; pronunciation/chunk-join issues corrected; manifests match files |
| 7. Release candidate and publication | Test built site on phone viewport and desktop, then prepare audio archive and deployment changes; publish once authorized | Map, reader, language, recipes, play/pause/seek/resume/transitions and exports pass with HTTP byte ranges; archive verified; after publication, successful deployment plus live content/audio checks |

Stage 4's reversible engineering work may proceed alongside editorial work when useful,
but final scripts must be reviewed before recording. A blocked audio service or spending
decision must not stop unrelated text or app work. Never equate a successful no-audio
build with a complete release. If review is performed by the same assistant in separate
passes, describe it accurately; do not label it independent review.

The owner receives milestone summaries, not fourteen review assignments. Ask only for
unresolved choices that materially change scope, unavoidable access requirements, or
spending/publication authorization not already supplied. Maintain this tracker and regional
ledgers so work can resume without reconstructing decisions from chat. Do not promise
unattended work between turns unless a separate automation is explicitly arranged.

Final delivery consists of the bilingual course, functioning introductions/audiobook/exports,
verified narration, source and review records, and a tested release. Until publication is
authorized and live checks pass, label the output a release candidate.

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

## Initial improvement pass — 21 September 2026

Evidence: [baseline and specific tooling gaps](BASELINE.md),
[Punjab region ledger](../rewrite/punjab.md), and
[prepared Puck audition](../rewrite/punjab-puck-audition.md).

- Baseline wiring, quizzes, spice cards, recipes and credits pass. All 112 old scripts
  matched their old settings before editing. The new independent format audit fails all
  112, correctly identifying missing heading/table exclusion and explicit outro settings.
- Text checks no longer need speech-engine packages merely to import the script extractor.
  Export order now reads India's manifest instead of matching Italian numeric codes.
  Four offline regression tests pass; introductions and progress migration remain pending.
- Began targeted edits across all four Punjab readings in both languages, corrected the
  homemade-naan and January-only assertions, reconciled the saag recipe headnote, and
  drafted the sheet introduction. Detailed research and separate final reviews remain.
- All eight Punjab scripts are now stale; the other 104 still match their old text.
  No old scripts/manifests were relabelled as new recordings. Puck sample is text preparation
  only; Indian pronunciation has not yet been generated or heard.
- Both builds pass: single-file 10.6 MB (228 images, no audio), site 19.8 MB
  (0 of 112 recordings present). These are no-audio worktree builds, not release evidence.
  Punjab's ordered photo/hero keys match between languages; whitespace check passes.
- No publishing or paid narration run performed. Continue with the Punjab research queue,
  then reader/fact/Norwegian reviews, before production recording. Keep the acceptance
  matrix pending until each complete requirement has evidence.

Continuation: corrected Punjab's garam-masala composition and dal-makhani cooking
claims, reconciled bilingual quizzes, spice cards and the dal recipe, and added explicit
kidney-bean boiling instructions. Sources and conservation decisions are in the Punjab
ledger. Structure, supporting-content checks and four transfer tests pass; exactly eight
Punjab tracks remain stale. Historical research and final prose reviews remain open.

Infrastructure continuation: the browser and exporter now support one introduction before
each region's four readings, stable chapter identities and readings-only saved-position
migration. Norwegian exports use Norwegian region names. A safe introduction tool extracts
the region sheets and supports the approved chunk-repeated Puck direction only with explicit
generation. Six offline transfer tests pass. No voice-service request was made; full browser,
audio and export verification remains pending until recordings exist.

### Himalaya regional text gate — 21 September 2026

All four Himalaya readings passed English fact/listener review, Norwegian-first review and
bilingual alignment as one regional batch. The source and conservation record is in
[the Himalaya ledger](../rewrite/himalaya.md). The pass corrected saffron production claims,
rice ecology, ver variants, rogan-josh etymology, Mughal-garden dates, Dal Lake evidence and
several universal claims about households and high-altitude food. Quiz explanations, glossary,
spice cards, recipe notes and the Bhopal rogan-josh cross-reference were reconciled in both
languages. The bilingual regional introduction is final.

Prose lint reports only inspected rhythm heuristics; every sentence is at or below 35 words.
Quiz, spice and recipe checks pass, as do seven offline transfer tests. The eight Himalaya
reading tracks and two dependent Centre reading tracks are stale, in addition to Punjab's eight.
No recording was overwritten. Playback and new introduction audio remain pending.

### Rajasthan regional text gate — 21 September 2026

All four Rajasthan readings passed English fact/listener review, Norwegian-first review and
bilingual alignment as one regional batch. The source and conservation record is in
[the Rajasthan ledger](../rewrite/rajasthan.md). The pass corrected Chand Baori, pearl millet,
Bikaneri bhujia, panchmel variation, Mathania heat, ker-sangri storage, Jain food practice and
the Indira Gandhi Canal chronology. It also replaced a Rajput/Marwari binary with distinctions
between court tradition, regional identity, religion and household practice.

Quiz explanations, glossary, spice cards and recipes were reconciled in both languages. The
bilingual regional introduction is final. Prose lint reports only inspected rhythm heuristics;
all sentences are at or below 35 words. Structure and supporting-content checks pass, as do the
offline transfer tests. Rajasthan's eight reading tracks are stale alongside the previously
logged Punjab, Himalaya and dependent Centre tracks. No recording was overwritten. Playback and
new introduction audio remain pending.

### Awadh regional text gate — 22 September 2026

All four Awadh readings passed English fact/listener review, Norwegian-first review and bilingual
alignment as one regional batch. The source and conservation record is in
[the Awadh ledger](../rewrite/awadh.md). The pass distinguished culinary aroma products from
perfumery attar, qualified pakki and kacchi biryani conventions, marked the toothless-nawab account
as folklore, corrected overconfident nihari claims and separated documented famine employment at
Bara Imambara from the day-and-night legend. It also reframed the 1856 annexation and preserved the
Lucknow-to-Metiabruz link while identifying the Kolkata-biryani potato story as disputed.

Quiz explanations, glossary, spice cards and recipes were reconciled in both languages. The
bilingual regional introduction is final. Prose lint reports only inspected rhythm heuristics;
all sentences are at or below 35 words. Structure and supporting-content checks pass, as do the
offline transfer tests. Awadh's eight reading tracks are stale alongside the previously logged
Punjab, Himalaya, Rajasthan and dependent Centre tracks. No recording was overwritten. Playback
and new introduction audio remain pending.

### Gujarat regional text gate — 22 September 2026

All four Gujarat readings passed English fact/listener review, Norwegian-first review and bilingual
alignment as one regional batch. The source and conservation record is in
[the Gujarat ledger](../rewrite/gujarat.md). The pass corrected unsafe thepla storage, restaurant
thali universals, the Lothal dock discussion, the East India Company's 1613 Surat record, Jain
practice, the relationship between undhiyu and umbhadiyu, and Rani ki Vav's date and description.
Most materially, it established that the milk-and-sugar episode is later oral legend and does not
appear in the surviving <em>Qissa-i Sanjan</em>.

Quiz explanations, glossary, spice cards and recipes were reconciled in both languages. The
bilingual regional introduction is final. Prose lint reports only inspected rhythm heuristics;
all sentences are at or below 35 words. Structure and supporting-content checks pass, as do the
offline transfer tests. Gujarat's eight reading tracks are stale alongside the previously logged
Punjab, Himalaya, Rajasthan, Awadh and dependent Centre tracks. No recording was overwritten.
Playback and new introduction audio remain pending.

### Maharashtra regional text gate — 22 September 2026

All four Maharashtra readings passed English fact/listener review, Norwegian-first review and
bilingual alignment as one regional batch. The source and conservation record is in
[the Maharashtra ledger](../rewrite/maharashtra.md). The pass replaced fixed definitions of goda
and kala masala, phodni and bhakri with documented variation; corrected the twenty-one-modak
claim; qualified disputed stories about Bombay duck, vada pav and pav bhaji; and restored Koli and
East Indian Catholic foodways to Mumbai's foundation. It also distinguishes the older Parsi
community from later, religiously varied Iranian migrations behind the Irani café tradition.

Quiz explanations, glossary entries, spice cards and recipes were reconciled in both languages.
The bilingual regional introduction is final. Prose lint reports only inspected rhythm heuristics;
all sentences are at or below 35 words. Structure and supporting-content checks pass, as do seven
offline transfer tests. Maharashtra's eight reading tracks are stale alongside the previously
logged regions and two dependent Centre tracks, for 50 stale tracks in total. The site build passes
at 19.7 MB with no recordings in the worktree. No recording was overwritten. Playback and new
introduction audio remain pending.

### Central India milestone — 22 September 2026

All four Centre readings passed English fact/listener review, Norwegian-first review and bilingual
alignment as one regional batch. The source and conservation record is in
[the Centre ledger](../rewrite/centre.md). The pass corrects Sanchi and Bhopal's Begum chronology,
qualifies rice-landrace and forest-produce claims, removes a false wheat/rice border and
essentialising descriptions of Bastar, and adds safe cooling guidance for cooked rice.

Quiz explanations, glossary entries, spice cards and recipes were reconciled in both languages.
The bilingual regional introduction is final. Prose lint passes with all sentences at or below
35 words. Structure and supporting-content checks pass, as do seven offline transfer tests.
Centre's eight reading tracks bring the expected stale total to 64: eight for each completed
region. The site build passes at 19.7 MB with no recordings in the worktree. No recording was
overwritten. Playback and new introduction audio remain pending.

### Goa and Konkan milestone — 22 September 2026

All four Goa readings passed English fact/listener review, Norwegian-first review and bilingual
alignment as one regional batch. The source and conservation record is in
[the Goa ledger](../rewrite/goa.md). The pass qualifies the route by which American chilli reached
India, treats Goan Hindu and Catholic foodways as varied and overlapping, corrects the
<em>vinha d'alhos</em> etymology without policing potato, and replaces unsafe claims about vinegar,
oil and repeated room-temperature reheating with refrigerated handling.

Quiz explanations, glossary entries, spice cards and recipes were reconciled in both languages.
The bilingual regional introduction is final. Prose lint reports only inspected rhythm heuristics;
all sentences are at or below 35 words. Structure and supporting-content checks pass, as do seven
offline transfer tests. Goa's eight reading tracks are stale alongside the previously logged
regions and two dependent Centre tracks, for 58 stale tracks in total. The site build passes at
19.7 MB with no recordings in the worktree. No recording was overwritten. Playback and new
introduction audio remain pending.

### Bengal and the east milestone — 22 September 2026

All four Bengal readings passed English fact/listener review, Norwegian-first review and bilingual
alignment as one regional batch. The source and conservation record is in
[the Bengal ledger](../rewrite/bengal.md). The pass replaces a single delta-wide cuisine with the
distinct crop and food histories of West Bengal, Bihar, Jharkhand and Odisha; corrects changing
rice rankings, hilsa conservation, the scope of rasgulla geographical indications and unsafe
handling of cooked rice; and marks the Portuguese-chhana and Kolkata-biryani potato stories as
debated or undocumented where the evidence requires it.

Quiz explanations, glossary entries, spice cards and recipes were reconciled in both languages.
The bilingual regional introduction is final. Prose lint has no sentence above 35 words; remaining
catalogue and rhythm flags were inspected in context. Structure and supporting-content checks pass,
as do seven offline transfer tests. Bengal's eight reading tracks bring the expected stale total to
72: eight for each of the nine completed regions. The site build passes at 19.6 MB with no recordings
in the worktree. No recording was overwritten. Playback and new introduction audio remain pending.

### Northeast regional text gate — 22 September 2026

All four Northeast readings passed English fact/listener review, Norwegian-first review and bilingual
alignment as one regional batch. The source and conservation record is in
[the Northeast ledger](../rewrite/northeast.md). The pass replaces a single spice-free regional
cuisine with distinct traditions across eight states; corrects unsafe assumptions about bamboo,
fermented fish, smoke and room-temperature storage; qualifies khar and tenga meal order; and removes
unsupported ages for Meghalaya's living root bridges. It also credits Singpho tea knowledge before
colonial estates and separates documented Ahom history from broad origin claims.

Quiz explanations, glossary entries, spice cards and recipes were reconciled in both languages.
The bilingual regional introduction is final, and eromba's vegetarian flag now matches its fish
ingredient. Prose lint has no sentence above 35 words. Structure and supporting-content checks pass,
as do seven offline transfer tests. Northeast's eight reading tracks bring the expected stale total
to 80: eight for each of the ten completed regions. The site build passes at 19.6 MB with no recordings
in the worktree. No recording was overwritten. Playback and new introduction audio remain pending.

### Karnataka regional text gate — 22 September 2026

All four Karnataka readings passed English fact/listener review, Norwegian-first review and
bilingual alignment as one regional batch. The source and conservation record is in
[the Karnataka ledger](../rewrite/karnataka.md). The pass corrects unsafe advice to swallow ragi
mudde whole, distinguishes Udupi temple cooking from the wider restaurant trade, removes false
preservation claims for kachampuli and pork, corrects Dharwad Pedha's registration year and replaces
an abandoned-city account of Hampi with UNESCO's evidence for continuing life and practice.

Quiz explanations, glossary entries, spice cards and recipes were reconciled in both languages.
The bilingual regional introduction is final. Prose lint has no sentence above 35 words. Structure
and supporting-content checks pass, as do seven offline transfer tests. Karnataka's eight reading
tracks bring the expected stale total to 88: eight for each of the eleven completed regions. The
site build passes at 19.6 MB with no recordings in the worktree. No recording was overwritten.
Playback and new introduction audio remain pending.

### Andhra and Telangana regional text gate — 22 September 2026

All four Andhra and Telangana readings passed English fact/listener review, Norwegian-first review
and bilingual alignment as one regional batch. The source and conservation record is in
[the Andhra and Telangana ledger](../rewrite/andhra.md). The pass replaces unsafe year-long,
room-temperature avakaya instructions with a small refrigerated adaptation, applies cooked-rice
controls to pulihora and corrects false fermentation and acid-and-meat explanations. It also
qualifies Guntur rankings, Charminar legends, diamond provenances and simple Persian-versus-Telugu
framing while correcting the 1953/1956 state sequence.

Quiz explanations, glossary entries, spice cards, recipes and both regional introductions were
reconciled. Prose lint has no sentence above 35 words. Structure and supporting-content checks
pass, as do seven offline transfer tests. Andhra's eight reading tracks bring the expected stale
total to 96: eight for each of the twelve completed regions. The site build passes with no
recordings in the worktree. No recording was overwritten. Playback and new introduction audio
remain pending.

### Tamil Nadu regional text gate — 22 September 2026

All four Tamil Nadu readings passed English fact/listener review, Norwegian-first review and
bilingual alignment as one regional batch. The source and conservation record is in
[the Tamil Nadu ledger](../rewrite/tamilnadu.md). The pass corrects fermentation biology,
banana-leaf and temple-food universals, coastal fish-curry storage, Chettinad trade claims and
the uncertain botanical identity of marathi mokku. The misleading caper-bud image and credit
were removed rather than retained under an uncertain identification.

Quiz explanations, glossary entries, spice cards, recipes and both regional introductions were
reconciled. Prose lint has no sentence above 35 words. Structure and supporting-content checks
pass, as do seven offline transfer tests. Tamil Nadu's eight reading tracks bring the expected
stale total to 104. No recording was overwritten. Playback and new introduction audio remain
pending.

### Kerala regional text gate — 22 September 2026

All four Kerala readings passed English fact/listener review, Norwegian-first review and
bilingual alignment as one regional batch. The source and conservation record is in
[the Kerala ledger](../rewrite/kerala.md). The pass distinguishes documented Indian Ocean trade
from disputed or traditional origin stories, qualifies sadya arrangements and Syrian Christian
food claims, and replaces unsafe claims that kudampuli preserves cooked fish. Appam fermentation,
fish cooling, prawn doneness and the regulated use of toddy are now explicit.

Quiz explanations, glossary entries, spice cards, recipes and both regional introductions were
reconciled. Prose lint has no sentence above 35 words. Structure and supporting-content checks
pass, as do seven offline transfer tests. Kerala's eight reading tracks bring the expected stale
total to 112: all fourteen revised regions. No recording was overwritten.

### Whole-course audit and application gate — 22 September 2026

The fourteen-region editorial pass is complete. The consolidated evidence is in
[the whole-course audit](../rewrite/course-audit.md). Cross-region contradictions and remaining
unsafe ghee, batter and prawn guidance were corrected. All preserved counts and bilingual ordering
checks pass. The final prose audit has no sentence above 35 words and no mannered-language flag.

The introduction-first audiobook, stable IDs, old-position migration, independent language
progress and 70-chapter export enumeration pass offline tests. Temporary ignored audio fixtures
then passed phone and desktop Chrome checks over an explicit HTTP byte-range server, including
map, reader, language, recipes, chapter transitions, play, pause, seek and resume. These fixtures
verify application behavior only. Production remains gated on the Puck name audition, spending
authorization, 70 new Norwegian recordings, final-audio listening and publication authorization.
The fourteen English introductions are still absent under the later owner direction to retain
English narration and record only Norwegian; the full 70-chapter English acceptance row remains
open until that gap is resolved.

The one course-wide owner decision is prepared in
[the narration review package](REVIEW-PACKAGE.md). It records the retained-English direction,
the authorized short Puck preview and the proposed $12 ceiling for a later Norwegian production
decision. No full-course narration request or publication is implied by that package.

Owner update, 22 September 2026: retain the existing English narration and generate only the
Norwegian course with Puck. A short Punjab Puck preview is authorized; full Norwegian production
and publication remain separate decisions. Because the English readings changed during review,
their retained audio/text mismatch remains visible in the production plan rather than being
silently relabelled as fresh.

Release-candidate update, 22 September 2026: the 56 existing English readings and their OGG
copies were restored from the owner's local checkout. The real-audio site build exposes all 56;
the archive inventory has 112 English binaries. A phone sized Chrome run streamed an English
reading with HTTP 206, sought fifteen seconds and saved its position. Norwegian remains at zero
new tracks. The local OpenRouter key is configured. A sandboxed preview request could not reach
the service, and automatic approval review rejected the unrestricted request because the owner
had not explicitly approved sending the exact Punjab sample to the paid OpenRouter destination.
At that point no paid preview had been generated or charged.

Punjab audition update, 22 September 2026: the owner explicitly approved sending the prepared
95-word sample to OpenRouter. One Puck request succeeded. The local ignored MP3 is 52.0 seconds,
normalized to −19.46 LUFS; `ffprobe` and a full decode pass. Actual cost was $0.02627. The
preview is now ready for owner listening. Full Norwegian production remains unapproved.

Norwegian production update, 22 September 2026: after hearing the Punjab Puck preview, the
owner authorized all Norwegian narration and asked for the measured total cost. The run uses
`tools/record_norwegian.py`, which freezes every script against the narration plan, caches each
provider chunk and receipt, limits concurrent requests to two, and guards the course run at the
previously proposed $12 ceiling. A read-only verifier checks the 70 output files, format,
duration, loudness and receipt total. The first full Punjab reading is complete: 763 words,
364.6 seconds, three chunks, $0.18398, −19.92 LUFS after the local peak fix. The full run is in
progress. The short preview cost was $0.02627 separately. No publication is authorized.

Nightly handover, 22 September 2026: the owner subsequently authorized GitHub Pages publication,
then asked to stop work for the night before upload or deployment. All 70 Norwegian tracks across
14 regions are recorded. The provider reported 180 priced chunks and $9.71570 for the full run;
the earlier audition adds $0.02627, for $9.74197 measured in total. Seventeen quiet tracks were
corrected locally without provider calls. `verify_norwegian_audio.py --decode --loudness` passes
70/70 with no unpriced chunks; `acoustic_qa_no.py` decoded 320.9 minutes with zero technical
findings. Eight short introductions trigger only a slow-pace warning. Both site and standalone
builds pass; a phone-sized browser streamed, sought and saved position for real English and
Norwegian audio over HTTP 206. Supporting-content and 15 focused transfer/export/range/correction
tests pass. The retained 56 English readings remain stale and in legacy spoken format by owner
direction; 14 English audio introductions are absent. `tools/make_site.py` built a 126-recording
site. The local branch is `codex/india-norwegian-pages`, based on the older handover commit;
`origin/main` was fetched and has newer docs-only changes. Source is not committed or pushed.
The audio archive build was interrupted at the owner's stop request and its partial output was
removed. No GitHub release asset was changed, no Pages deployment was run, and publication has
not been verified. Resume by rebuilding `dist/audio.tar.gz`, running
`tools/upload_audio_release.py --dry-run`, integrate the source with current `main`, upload the
verified archive to the `audio` release with `--upload`, then push the source and verify the
Pages run and live audio.
The workflow downloads `audio.tar.gz` from that release, so ensure the new asset is in place
before triggering the Pages build. Spoken-word accuracy and pronunciation still need a human
listening review; do not claim that automated acoustic checks cover them.

Release preparation, 23 September 2026: the 252-file `dist/audio.tar.gz` archive was rebuilt
and checked against every source audio file. It is 297,199,837 bytes with SHA-256
`17dbad53e293994cc6b25dd1f65f9c90045c327493cd2474a53370eed1f81dab`.
The GitHub release dry run verified the existing `audio` tag and canonical asset. The reviewed
source is committed on `codex/india-norwegian-pages` and includes the current `origin/main`
history. The owner resumed work after the overnight pause. The remaining release steps are to
stage and promote this archive, push the source to `main`, then verify the Pages deployment
and live audio. Do not treat local build success as publication. The retained English audio
mismatch, absent English intros and need for human pronunciation review remain open.
