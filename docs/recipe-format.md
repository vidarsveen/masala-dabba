# Recipe format

Recipes are the cookbook half of the course: one browsable list at `#/recipes`, linked to and from the
region sheets and the food readings. They are **never narrated** — `tools/narrate.py` only ever sees a
reading's `html`, so editing a recipe can never make an audio file stale.

## Files

One file per region, `content/recipes/<region>.js`, loaded by a `<script src>` tag in
`the app` after that region's content files.

```js
window.RECIPES = window.RECIPES || {};
window.RECIPES['IN-KER'] = [ … ];
```

**Both languages live in the same file.** This departs from the `x.js` / `x.no.js` convention on
purpose: a quantity must be written exactly once. An English 400 g edited without the Norwegian one
would be a silent cooking bug, and no checker can catch a number that is merely different.

Every prose field is `{en: '…', no: '…'}`. Numbers, units, ids and keys have no language.

## Shape

```js
{
  id:'avial',              // unique across the whole course, kebab-case; the URL is #/recipes/<id>
  dish:'Avial',            // the ENGLISH COURSE['IN-KER'].dishes name, character for character, or ''
                           // (dishes are [name, vegetarian] pairs; match the name, element 0). The sheet
                           // looks a recipe up by position, so course.no.js may translate the chip freely
  course:'side',           // breakfast | snack | main | side | bread | rice | sweet | base
  veg:true,                // true if it contains no meat, fish or egg; shows the green mark
  lesson:3,                // 1–4: the reading this dish is described in, or 0 for none
  serves:4,                // the number of portions the quantities below are written for
  time:{prep:10, cook:15}, // minutes
  hero:'carbonara',        // assets/<region>/<hero>.jpg, credited in content/<region>.js
  tags:['pasta','egg'],
  title:{en:'Carbonara', no:'Carbonara'},
  blurb:{en:'One sentence.', no:'Én setning.'},
  heroCaption:{en:'…', no:'…'},
  goesWith:[{en:'Red matta rice', no:'Rød mattaris'}],   // prose, not links: this course sells nothing
  headnote:{en:'<p>…</p>', no:'<p>…</p>'},   // optional, only for the long form
  ingredients:[{ group:{en:'', no:''}, items:[
    {q:400, u:'g', n:{en:'spaghetti', no:'spaghetti'}},
    {q:150, u:'g', n:{en:'guanciale', no:'guanciale'}, note:{en:'in 6 mm batons', no:'i staver på 6 mm'}},
    {q:4, u:'', n:{en:'egg yolks', no:'eggeplommer'}, round:'half'},
    {u:'', n:{en:'black pepper', no:'sort pepper'}, scale:'none'},
    {q:3, u:'l', n:{en:'water', no:'vann'}, scale:'sub'},
  ]}],
  steps:[{en:'…', no:'…'}, …],                       // 4–14 of them
  notes:[{title:{en,no}, body:{en,no}}, …],          // "why it works", drawn from the reading
  variations:[{title:{en,no}, body:{en,no}}, …],     // optional
}
```

### Units

`g`, `kg`, `ml`, `l`, or `''` for a count (`4 egg yolks`). Nothing else: no cups, no spoons, no
imperial, and no `dl`/`ss`/`ts` either. Temperatures go in the step text as `°C`, times as minutes.

### Scaling

The servings stepper rescales every quantity live. Per item:

- default — linear in the number of portions.
- `scale:'none'` — never scaled: pepper, salt to taste, oil for frying.
- `scale:'sub'` — scaled by `factor^0.7`: pasta water and the salt in it, which do not double when the
  portions do.
- `round:'half'` — rounded to the nearest half and shown with `½`. Use it for counts (eggs, chillies).

Everything else rounds by magnitude: under 10 to the nearest half, under 100 to the nearest whole,
under 1000 to the nearest 5, above that to the nearest 10; `g` becomes `kg` and `ml` becomes `l` past
1000. Norwegian decimals are shown with a comma.

Because the numbers rescale, **a step must not repeat a quantity**. Write "add the guanciale", never
"add the 150 g of guanciale".

## Writing rules

1. The recipe must agree with the reading it hangs off. Take the method from what the course already
   says; if the reading says the cheese goes in off the heat, so does the recipe.
2. Steps are imperative, one action each, 4–14 of them. No step is a paragraph.
3. `notes` explain why, not what — the mechanism a cook can carry to the next dish. Two is usually
   enough.
4. Norwegian is bokmål written to `CLAUDE.md` §6, from the facts rather than from the English
   sentence. Kitchen imperatives are a fresh calque risk: "in a bowl, whisk…" must not become a
   participle opener, and "off the heat" is «med kjelen av platen».
5. Dish names, spice blends and technique words stay in their own form in both languages; ingredients
   are translated. So `dal`, `thoran`, `tadka` and `puttu` stay, and `mustard seed` becomes `sennepsfrø`.

5b. **The Norwegian earns its keep through sourcing notes.** Every recipe carries one note titled
   "Slik får du tak i det i Norge" saying what to buy here and what not to: frozen grated coconut rather
   than desiccated, full-fat tinned coconut milk left unshaken, puttu podi rather than plain rice flour.
   This is the part of the course that could not be translated into existence, so it must be written.
6. `goesWith` is a short bilingual phrase, not a product. There are no commerce links in this course.
7. The hero photo must already exist in `assets/<region>/` and be credited in `content/<region>.js`.
   `build.py` inlines every jpg in the folder whether it is referenced or not, so do not leave strays.

## Checking

    python tools/recipecheck.py            # all regions
    python tools/recipecheck.py IT-62      # one

It parses the content under Node, then checks ids, both languages on every prose field, the unit set,
the absence of cup and spoon measures, `dish` and `wines` against the `COURSE` object in
`the app`, that each hero exists on disk and is credited, and that no step repeats a
quantity that the servings stepper is going to rescale.
