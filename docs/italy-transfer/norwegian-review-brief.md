# Norwegian language review — Italia in Tavola

## The job

Review and repair the Norwegian bokmål across this project so it reads as if it were written in Norwegian,
not translated from English. This is a language pass, not a rewrite and not a fact-check. The facts, the
structure and the images are settled; the prose is what needs work.

Read `CLAUDE.md` first for how the project is put together.

## Why this is needed

Several regions were drafted by carrying English sentence structure straight into Norwegian. Two real
examples from `content/sicilia.no.js`:

- **"…rundt Trecastagni og Biancavilla, er varmere og tidligere."** This renders "is warmer and earlier".
  *Tidligere* is left with nothing to modify, so the comparison dangles. The meaning is that the grapes
  ripen earlier there.
- **"Det som får det til å fungere, er høyde på en sørlig øy."** This is the English cleft "what makes it
  work is altitude on a southern island" moved across word for word. It is stilted, and *høyde* wants an
  article or a rephrasing.

Related patterns to hunt for: cleft sentences copied from English, adjectives used predicatively where
Norwegian needs a noun, colon-led lists that imitate English apposition ("Pionerene har navn:"), and
gerund subjects turned into bare infinitives ("Å arbeide her er en kalkulert risiko").

The owner is Norwegian and reads both editions as equals. Judge each sentence on whether a Norwegian
writer would have produced it, not on whether it is a faithful rendering of the English.

## Where the Norwegian lives

| File | Content | Words |
| --- | --- | --- |
| `content/campania.no.js` | four readings, Campania | 3,430 |
| `content/sicilia.no.js` | four readings, Sicilia | 3,180 |
| `content/veneto.no.js` | four readings, Veneto | 3,390 |
| `content/lazio.no.js` | four readings, Lazio | 3,500 |
| `content/piemonte.no.js` | four readings, Piemonte | 2,980 |
| `content/toscana.no.js` | four readings, Toscana | 2,980 |
| `content/course.no.js` | short summaries for all 20 regions | 565 |
| `italia-course.html` | the `no:` block inside `I18N`, the interface strings | small |

About 20,000 words in total.

**Priority order.** Start with `campania.no.js` and `sicilia.no.js`; those are known to be the weakest.
Then `veneto.no.js`, then the other three, then `course.no.js` and the interface strings. The earlier
regions may already be fine, so do not manufacture changes where the Norwegian already reads well.

## What must not change

- **The English edition.** `content/<region>.js` is the source of fact. If the Norwegian and English
  disagree on a fact, report it rather than fixing either one.
- **Structure and keys.** Every `data-img="key"` and every `hero: "key"` must stay exactly as it is and
  must match the English file. Both editions resolve the same key to the same photo.
- **The credits line.** `credits: window.READINGS['IT-xx'].credits` stays untouched.
- **Kickers.** `"Vin · Lesetekst 1 av 4"`, `"Mat · …"`, `"Landemerke · …"`, with the numbering intact.
- **Fixed headings.** `Nøkkelfakta`, `I glasset: …`, `Før du går videre`.
- **Tasting table row labels.** Farge, Duft, Smak, Alkohol, Serveres, Ved bordet. The narration script
  reads these as "Farge: …", so renaming them changes the spoken audio.
- **The class name `glass`.** It must never appear inside reading HTML; it collides with a UI panel class.
- **Italian names.** Wines, dishes, grapes, places and producers stay in Italian and unitalicised where
  they already are: Nero d'Avola, caponata, Valle dei Templi, Passopisciaro.

## Conventions already in use, keep them

- Norwegian quotation marks « », not " ".
- Comma as decimal separator and a space as thousands separator: 13,5 %, 1 000 meter.
- A space before the percent sign: 45–95 %.
- En dash for ranges: 400–700 meter.
- Norwegian names for countries and seas, Italian for towns and regions: Napoli, Sicilia, Det joniske hav.

## How to work

Edit the files in place. After each file, check it still parses:

```
node -e "global.window={};require('./content/<region>.js');global.window.READINGS_NO={};require('./content/<region>.no.js');const N=window.READINGS_NO['IT-xx'];console.log(N.lessons.length, N.lessons.map(l=>l.title))"
```

Then confirm the image keys still line up between the two editions:

```
python -c "import re;a=set(re.findall(r'data-img=\"(\w+)\"',open('content/<region>.js',encoding='utf-8').read()));b=set(re.findall(r'data-img=\"(\w+)\"',open('content/<region>.no.js',encoding='utf-8').read()));print('only EN',a-b,'| only NO',b-a)"
```

## Narration is generated from this text

This is the expensive part, so keep track of exactly which readings you change.

Each Norwegian reading has a recorded narration in `assets/audio/<region>/no-<n>.mp3`. Changing a sentence
means that file is stale. Regenerate only the readings you actually touched:

```
python tools/narrate.py <region> --only no-3      # about two minutes per file
python tools/opus.py <region> 12                  # re-encodes that region's Ogg files
python build.py                                   # rebuilds dist/, prints the size
python tools/make_site.py                         # rebuilds the self-hosted site/
```

`dist/italia-course.html` must stay under 16 MB. It is at 13.6 MB and only Lazio's narration is inlined,
so text edits will not move it much. Do not publish the artifact; leave that to the owner.

## What to report back

1. Per file, roughly how much needed changing and what kinds of problems you found.
2. The list of readings whose narration you regenerated, and any you left stale.
3. Any place where the Norwegian and English disagree on a fact, listed but not silently fixed.
4. A short set of Norwegian style rules worth adding to `CLAUDE.md`, phrased so that whoever writes the
   next region does not reintroduce these problems. Fourteen regions are still unwritten, so this is the
   part that stops the work repeating.
