/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-KER|Black pepper': {
   aroma: 'Pine and warm wood, with a citrus edge in freshly cracked berries.',
   flavour: 'Sharp heat that arrives at the front of the mouth and fades within seconds. The black skin adds a dried-fruit note white pepper lacks.',
   does: 'Carries heat without the long burn of chilli, and lifts fat, coconut and dairy rather than fighting them.',
   when: 'Whole and early for a rounded background heat; cracked over the finished dish for aroma.',
   swap: 'Nothing substitutes properly. Use rather less white pepper, or long pepper for a sweeter, slower heat.'
 },
 'IN-KER|Cardamom': {
   aroma: 'Eucalyptus and lemon over something resinous. A pod crushed between the fingers smells almost medicinal.',
   flavour: 'Cool and sweet at first, then faintly camphorous and drying. Overdo it and a dish tastes of soap.',
   does: 'Adds a cool, resinous perfume to selected savoury dishes, sweets, tea and spice blends.',
   when: 'Whole pods bruised and dropped into the fat at the start; ground seed only in sweets and in masalas.',
   swap: 'None that is honest. Leave it out rather than use the pre-ground powder, which has lost its oil.'
 },
 'IN-KER|Cinnamon': {
   aroma: 'Sweet bark, warm and slightly floral in true cinnamon; harsher and hotter in cassia.',
   flavour: 'Sweet and woody, with no heat of its own. True cinnamon is delicate, cassia is blunt and stays on the tongue.',
   does: 'Rounds off spice blends and gives a coconut gravy a sweetness that does not come from sugar.',
   when: 'A short piece of bark into hot oil with the other whole spices, before the onion.',
   swap: 'Cassia works, but use about half as much because it is much stronger.'
 },
 'IN-KER|Curry leaf': {
   aroma: 'Citrus peel and toasted nuts, released only when the leaf hits hot fat.',
   flavour: 'Savoury and slightly bitter, more a background than a flavour you can name in the finished dish.',
   does: 'Adds a recognisable citrus-and-toasted-nut aroma to many southern Indian temperings.',
   when: 'Into hot oil for a few seconds until it crackles, at the start or as a final tempering poured over.',
   swap: 'None. Dried leaves taste of nothing, so leave them out and accept the dish will be different.'
 },
 'IN-KER|Coconut oil': {
   aroma: 'Unmistakably of coconut when cold-pressed, and almost neutral when refined.',
   flavour: 'Sweet and faintly nutty. It coats the mouth more than a seed oil does.',
   does: 'Serves as a frying fat and, in some households and dishes, an aromatic finishing oil.',
   when: 'Throughout for frying; raw over avial, thoran and steamed dishes just before serving.',
   swap: 'A neutral oil fries perfectly well, but the raw finishing spoonful has no substitute at all.'
 },
 'IN-KER|Kudampuli': {
   aroma: 'Smoky and faintly sour, like a dried fruit that has been near a fire, which is exactly what it is.',
   flavour: 'Clean, sharp acidity with no sweetness. It tastes nothing like tamarind and is not used like it.',
   does: 'Sours many Kerala fish curries and adds a smoky-fruity aroma; it does not replace refrigeration.',
   when: 'Rinsed, then dropped in whole near the start so it has time to give up its acid.',
   swap: 'Tamarind changes the dish but works; a piece of dried kokum is closer. Lemon is a last resort.'
 }
});
