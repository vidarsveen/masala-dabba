/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-BEN|Panch phoron': {
   aroma: 'Aniseed from the fennel over warm earthy cumin, with a bitter maple note underneath from the fenugreek.',
   flavour: 'Mostly a background hum, until you bite a whole seed in a mouthful and get one flavour on its own.',
   does: 'Seasons the frying oil in the first thirty seconds, so the fat carries that flavour into everything cooked after it.',
   when: 'Whole, into hot oil, before anything else goes in. Never ground, and never stirred in at the end.',
   swap: 'Mix your own from equal parts cumin, nigella, fenugreek, fennel and radhuni. Celery seed stands in for radhuni.'
 },
 'IN-BEN|Mustard oil': {
   aroma: 'Raw and stinging cold, like horseradish. Heating it hard turns that into a nutty warmth.',
   flavour: 'Pungent and faintly bitter, thanks to allyl isothiocyanate, the compound that gives wasabi its sting.',
   does: 'It is the everyday cooking fat of the whole region, and a raw spoonful over a finished dish is a seasoning in itself.',
   when: 'Heated until it just smokes before anything goes in, so the raw edge burns off; or raw at the very end.',
   swap: 'Nothing carries the pungency. A neutral oil fries fine, and a little mustard powder returns some of the bite.'
 },
 'IN-BEN|Nigella (kalonji)': {
   aroma: 'Oregano and toasted onion, with something faintly resinous behind it.',
   flavour: 'Savoury and slightly bitter. It is a seed you notice one at a time rather than as a wash of flavour.',
   does: 'Gives Bengali fish curry its particular smell, and studs breads and pickles across the whole region.',
   when: 'Whole into hot oil at the start, alone or as part of panch phoron. It is almost never ground.',
   swap: 'None that is honest. Black sesame and caraway are different seeds and taste nothing like it.'
 },
 'IN-BEN|Poppy seed (posto)': {
   aroma: 'Very little raw; a warm nutty smell once it is ground and cooked.',
   flavour: 'Mild, milky and nutty, with almost no edge. Its job is texture more than flavour.',
   does: 'Ground with water it thickens a dish into a pale, clinging paste, which is the whole body of aloo posto.',
   when: 'Soaked, then ground to a paste and cooked gently. Whole seeds add nothing and stay gritty.',
   swap: 'Cashew or melon seed paste gives a similar body, though sweeter. Blue poppy seed greys the dish.'
 },
 'IN-BEN|Radhuni': {
   aroma: 'Sharply of parsley and celery leaf, much stronger than the size of the seed suggests.',
   flavour: 'Green, bitter and a little medicinal. A pinch too much and it takes a dish over.',
   does: 'Seasons shukto, the bitter dish that opens a Bengali meal, and is the fifth seed in a proper panch phoron.',
   when: 'Whole into hot oil at the very start, in small quantities. It is never ground.',
   swap: 'Celery seed is the closest and works. Ajwain is sometimes suggested and is a poor match.'
 },
 'IN-BEN|Kasundi': {
   aroma: 'Sharp fermented mustard, salty and a little funky, closer to a fish sauce than to a table mustard.',
   flavour: 'Hot, salty and sour at once. It clears the sinuses the way wasabi does and then fades.',
   does: 'Works as a condiment rather than an ingredient: alongside fried fish, with fritters, or stirred through cooked greens.',
   when: 'Raw, at the table. Cooking it destroys the pungency and leaves only the salt.',
   swap: 'A Dijon loosened with a little vinegar is the nearest thing, but it is milder and not fermented.'
 }
});
