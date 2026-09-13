/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-CEN|Poppy seed (khus khus)': {
   aroma: 'Almost nothing when raw. Ground and cooked, it smells warm and faintly of marzipan.',
   flavour: 'Mild, milky and a little nutty, with no heat and no acidity of its own.',
   does: 'Thickens a gravy and rounds it, so a korma has body without cream, tomato or a great weight of onion.',
   when: 'Soaked for an hour and ground smooth, then stirred in once the fat has separated from the onion.',
   swap: 'Cashew or melon-seed paste gives the same body and a little more sweetness. Whole seed does nothing.'
 },
 'IN-CEN|Bhopali garam masala': {
   aroma: 'Dark and resinous, led by black cardamom and mace, with cinnamon and clove behind them.',
   flavour: 'Warm and aromatic rather than hot, because this blend carries no chilli at all.',
   does: 'Perfumes the slow meat dishes of the Bhopal kitchen and leaves the cook to set the heat separately.',
   when: 'Ground fine and stirred in during the last few minutes, before the aromatics have time to cook away.',
   swap: 'A good whole-spice garam masala, with an extra black cardamom pod and a blade of mace ground into it.'
 },
 'IN-CEN|Chironji': {
   aroma: 'Faintly of almond when raw. Toasting brings up something closer to pistachio.',
   flavour: 'Soft, oily and mildly sweet, between an almond and a pistachio, and never bitter.',
   does: 'Enriches a meat gravy when ground with poppy seed, and studs the sweets, above all chironji ki barfi.',
   when: 'Whole and raw into a sweet; lightly toasted and ground with the poppy seed for a gravy.',
   swap: 'Pine nuts are closest in size and fat. Blanched almonds, chopped small, carry a sweet well enough.'
 },
 'IN-CEN|Mahua': {
   aroma: 'Heavy and sweet even when dried, somewhere between raisin, honey and something faintly fermented.',
   flavour: 'Very sweet, with a musky edge that stops it tasting like plain sugar.',
   does: 'It is the sweetener of the forest kitchen: pounded into laddu, cooked into a heavy bread, boiled to porridge.',
   when: 'Dried flowers are soaked or pounded and cooked with flour and ghee. Fresh ones spoil within a day.',
   swap: 'Dates give the sweetness and the stickiness but not the musk. Nothing reproduces the flavour.'
 },
 'IN-CEN|Black cardamom': {
   aroma: 'Smoke, camphor and pine. It smells of the fire it was dried over rather than of a spice jar.',
   flavour: 'Cooling and slightly medicinal, and frankly bitter if you chew the pod. It is meant to be fished out.',
   does: 'Carries smoke through a long-cooked meat dish, and holds up where green cardamom would disappear.',
   when: 'Whole and early, bruised, into the hot fat. One pod is usually enough for a kilo of meat.',
   swap: 'Nothing. Green cardamom is a different spice, so leave it out rather than doubling the green.'
 },
 'IN-CEN|Tamarind': {
   aroma: 'Dark and raisin-like, faintly smoky in an old block; the new season smells greener and sharper.',
   flavour: 'Rounded acidity with sugar behind it, nothing like lemon, and savoury rather than fruity in quantity.',
   does: 'Sours a dal, sours the forest stew of bamboo shoot, and makes the sweet-sour chutney beside fried food.',
   when: 'Soaked in hot water, squeezed and strained. Into a dal late, because acid stops pulses softening.',
   swap: 'Lime juice off the heat gives acid without body. Dried mango powder works where a dish is dry.'
 }
});
