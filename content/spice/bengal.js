/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-BEN|Panch phoron': {
   aroma: 'Aniseed from the fennel over warm earthy cumin, with a bitter maple note underneath from the fenugreek.',
   flavour: 'Mostly a background hum, until you bite a whole seed in a mouthful and get one flavour on its own.',
   does: 'Seasons hot fat while leaving the five seeds distinct in the finished dish.',
   when: 'Usually kept whole and added to hot oil early in cooking; exact timing depends on the dish.',
   swap: 'Mix cumin, nigella, fenugreek, fennel and radhuni to taste. Celery seed can stand in for radhuni.'
 },
 'IN-BEN|Mustard oil': {
   aroma: 'Raw and pungent when cold, like horseradish. Heating softens that edge and changes the aroma.',
   flavour: 'Pungent and faintly bitter, thanks to allyl isothiocyanate, the compound that gives wasabi its sting.',
   does: 'Functions as a frying fat in many eastern dishes and as a pungent finishing seasoning in others.',
   when: 'Warm according to the recipe and the oil label, or use a small amount raw at the end where appropriate.',
   swap: 'Neutral oil works for frying; a little prepared mustard can return some bite to the finished dish.'
 },
 'IN-BEN|Nigella (kalonji)': {
   aroma: 'Oregano and toasted onion, with something faintly resinous behind it.',
   flavour: 'Savoury and slightly bitter. It is a seed you notice one at a time rather than as a wash of flavour.',
   does: 'Adds a savoury, slightly bitter aroma to fish curries, breads, pickles and vegetables.',
   when: 'Often used whole in hot oil, alone or as part of panch phoron.',
   swap: 'Black sesame and caraway are different. If nigella is unavailable, omit it rather than treating them as exact substitutes.'
 },
 'IN-BEN|Poppy seed (posto)': {
   aroma: 'Very little raw; a warm nutty smell once it is ground and cooked.',
   flavour: 'Mild, milky and nutty, with almost no edge. Its job is texture more than flavour.',
   does: 'Ground with water it thickens a dish into a pale, clinging paste, which is the whole body of aloo posto.',
   when: 'Often soaked, ground to a paste and cooked gently. Whole seeds give a different, grainier texture.',
   swap: 'Cashew or melon seed paste gives a similar body, though sweeter. Blue poppy seed greys the dish.'
 },
 'IN-BEN|Radhuni': {
   aroma: 'Sharply of parsley and celery leaf, much stronger than the size of the seed suggests.',
   flavour: 'Green, bitter and a little medicinal. A pinch too much and it takes a dish over.',
   does: 'Seasons some shukto recipes and appears as the fifth seed in one common panch phoron formula.',
   when: 'Usually used whole in hot oil, in small quantities.',
   swap: 'Celery seed is the closest and works. Ajwain is sometimes suggested and is a poor match.'
 },
 'IN-BEN|Kasundi': {
   aroma: 'Sharp fermented mustard, salty and a little funky, closer to a fish sauce than to a table mustard.',
   flavour: 'Hot, salty and sour at once. It clears the sinuses the way wasabi does and then fades.',
   does: 'Works as a condiment rather than an ingredient: alongside fried fish, with fritters, or stirred through cooked greens.',
   when: 'Often served at the table; heating softens its pungency, so cooked uses give a different result.',
   swap: 'A Dijon loosened with a little vinegar is the nearest thing, but it is milder and not fermented.'
 }
});
