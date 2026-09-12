# Spice cards: the data format

A card for every spice listed on a region sheet, so a reader can look one up without hunting through an
essay. This is the structural twin of the Italian course's tasting card: colour/nose/palate became
aroma/flavour/what it does, and the Vinmonopolet link became a **sourcing note**.

## Files

- `content/spice.js` — English, `window.SPICE`
- `content/spice.no.js` — Norwegian bokmål, `window.SPICE_NO`

## Shape

The key is the region code, a vertical bar, and the spice **exactly as it is spelled in `COURSE.spices`**,
because that is what the app looks up. Copy it character for character.

```js
window.SPICE = {
  'IN-KER|Kudampuli': {
    aroma:   'Smoky and faintly sour, like a dried fruit that has been near a fire.',
    flavour: 'Clean, sharp acidity with no sweetness. It tastes nothing like tamarind.',
    does:    'Sours fish curry, firms the flesh, and preserves the curry for two or three days.',
    when:    'Rinsed, then dropped in whole near the start so it has time to give up its acid.',
    swap:    'Tamarind changes the dish but works; dried kokum is closer. Lemon is a last resort.'
  },
};
```

The five fields are the five rows the app renders, in this order: `aroma`, `flavour`, `does`, `when`, `swap`.
The Norwegian file uses **identical keys and identical English field names** with Norwegian values, so the app
needs no translation table. The row labels come from `I18N.tCard`.

### The sixth field, Norwegian only

`sourcing` — where to get it in Norway, and what to avoid. **Required in `spice.no.js`**, and the checker
fails without it. This is the part of the course that could not be translated into existence, and it is why
the Norwegian edition is worth having:

- ferske karriblader kommer inn i butikkene på Grønland med ukers mellomrom, så kjøp mye og frys dem
- det som selges som kanelstang i dagligvarebutikker, er nesten alltid kassia
- kokosmelk merket «light» har ingen tykk del, og oppskriftene her trenger begge deler
- kudampuli, kokum og «fish tamarind» er tre forskjellige frukter, uansett hva etiketten sier

The field is optional in the English file, where it would mostly repeat the reading.

## Writing rules

1. **Be accurate before being evocative.** Say what the spice does in a dish, not what it evokes.
2. **`does` is the important field.** It is the one that changes how somebody cooks: what job this spice has
   and what the dish loses without it.
3. **`when` must be specific about the moment.** Whole and early, ground and off the heat, raw at the end.
   Half the mistakes a European makes with an Indian recipe are timing mistakes.
4. **`swap` must be honest.** If nothing substitutes, say so and say to leave it out rather than to fake it.
5. Keep every field under about 190 characters, because these are read on a phone inside a bottom sheet.
6. Norwegian is bokmål written to `CLAUDE.md` §6, from the facts rather than from the English sentence.

## Checking

`PYTHONIOENCODING=utf-8 python tools/spicecheck.py` verifies that every spice in a **started** region has a
card in both languages, that every field is present and short enough, that no card exists for a spice on no
sheet, and that every Norwegian card carries a sourcing note. A region with no cards written yet is skipped,
so the check is useful from the first region onwards.
