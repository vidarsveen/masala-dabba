# India baseline and tooling gaps — 21 September 2026

Workspace: `C:/Users/vidar/.codex/worktrees/bd25/masala-dabba`.
Starting worktree was clean. Handover baseline: `53a465c`; content baseline: `32ea354`.
No publishing, full-course generation, credential copying or Italian edits performed.

## Checks

Run with the bundled Python executable because `python` is not on this sandbox's PATH:
`C:/Users/vidar/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/python.exe`.
Set `PYTHONIOENCODING=utf-8` for readable Norwegian output.

| Check | Baseline / initial-edit result |
| --- | --- |
| `tools/wire.py --check` | Pass: 141 content files wired; unchanged after edits |
| `tools/quizcheck.py` | Pass: 14 regions, 168 questions per language |
| `tools/spicecheck.py` | Pass: 84 cards per language; 201 Norwegian sheet names checked |
| `tools/recipecheck.py` | Pass: 69 recipes in 14 regions |
| `tools/creditcheck.py` | Pass: 226 photo credits |
| `tools/stale.py` before editing | 112 scripts matched their existing settings |
| `tools/prose_lint.py punjab` before editing | Findings in all eight readings; exit 0 is advisory, not approval |
| `python -m unittest discover -s tools/test -p test_transfer.py -v` | Four tests pass |
| `tools/audio_format.py` | Expected failure: all 112 old entries use nonstandard format |
| `tools/stale.py` after editing | Expected failure: exactly eight Punjab tracks stale; other 104 match |
| `build.py` | Pass: 10.6 MB, 228 images (including terrain), zero audio files inlined |
| `tools/make_site.py` | Pass: 19.8 MB, zero of 112 recordings present |
| Punjab JavaScript parse / ordered photo keys | Pass: four readings per language, matching heroes and figure keys |
| `git diff --check` | Pass |

The worktree contains no MP3 recordings. The owner's source checkout has 224 MP3 files
(including low-bitrate variants); this count is not a freshness or listening check.
The Toscana audition directory and its generator exist and were inspected read-only.

## Confirmed gaps and initial repairs

1. `stale.py` and `prose_lint.py` imported `narrate.py`, which imported `edge_tts`
   even for text-only work. The bundled runtime lacks that package. Imports now happen
   inside synthesis/compression functions. Text inspection works without installing a
   speech engine; production synthesis still needs its dependencies.
2. `audiobook.course_order()` used numeric Italian code regexes and returned no Indian
   regions. It now reads codes/stems/order from `course.json`, preserving app display names.
   Regression coverage expects 14 regions and 56 missing readings when audio is absent.
   This fixes enumeration of existing readings, not the introduction/export transfer.
3. `tools/audio_format.py` now audits every expected reading's metadata independently
   of freshness. Old `drop=facts,recap` and absent `outro` fail. Missing manifests and
   entries fail too. It does not rewrite metadata or claim to have heard the recordings.
4. `review_no.py` and `record_intros.py` remain absent. The pinned Italy
   `record_intros.py` reads the sheet intro, but hardcodes Italy's app and the old Norwegian
   voice. Adapt extraction to India's manifest and approved Puck route; do not copy unchanged.
5. India's browser audiobook saves only `{i,t}` under language-specific keys. The pinned
   Italy app saves a region/track identity and resolves old indices against a list excluding
   introductions. India needs this migration before inserting intro tracks. Test old saved
   positions, missing recordings and independent language progress.
6. India's exporter still enumerates readings only. Add introductions to the same order as
   the browser player and verify 70 chapters per language when all tracks exist. Norwegian
   region display names in exports also need review; `course_order()` currently reads English.
7. Browser tests retain reusable `prof_*` profiles and untimed debugging-endpoint requests.
   `booktest.py` asserts the old index-only saved schema and reading-only chapter count.
   Adapt these tests alongside migration and use fresh profiles and byte-range serving.
   A search found no remaining numeric `IT-` codes in `tools/test`; obsolete assumptions
   remain even though that search is clean.
8. `narrate.py` still defaults to Pernille for Norwegian; the OpenRouter client defaults to
   MAI. Selecting Puck alone does not reproduce the approved input direction. The reference
   generator prepends direction and a TRANSCRIPT delimiter, chunks at 1,800 characters,
   uses PCM and normalises the joined MP3. Prepare/test this route before bulk narration.

## Delivery route

`.github/workflows/pages.yml` still fetches the release tagged `audio`, finds
`audio.tar.gz`, extracts it, and builds `site/`. `audio_pack.py` includes MP3/OGG paths
under `assets/audio/<stem>/` and excludes `.lo.mp3`; it will naturally include intro
filenames. `make_site.py` filters manifests against present MP3 files.

The workflow treats an absent release as a browser-voice build. Consequently a successful
build or deployment is not proof that audio shipped. Before release, compare archive
contents to manifests and verify live playback. No release archive or live deployment was
verified in this initial preparation. Phone/audio behavior remains pending.

## Introduction and audiobook implementation — 21 September 2026

- `record_intros.py` extracts bilingual region-sheet introductions, prints them without
  generating audio by default, audits saved scripts, and requires explicit `--generate`.
  Its Puck option uses the approved model, voice and India-specific direction.
- Puck direction is repeated before every provider chunk and separated from spoken text by
  `TRANSCRIPT:`. No provider call or paid generation was made during implementation.
- The browser audiobook accepts `<lang>-intro` before each region's readings and saves a
  stable region/track id. Legacy `{i,t}` positions resolve against readings-only order, so
  adding introductions does not send a listener to the wrong chapter.
- The exporter expects an introduction plus four readings per region, uses Norwegian region
  names in Norwegian output, and carries stable track ids. Complete audio and browser
  playback checks remain pending.
