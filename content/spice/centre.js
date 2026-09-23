/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-CEN|Poppy seed (khus khus)': {
   aroma: 'Almost nothing when raw. Ground and cooked, it smells warm and faintly of marzipan.',
   flavour: 'Mild, milky and a little nutty, with no heat and no acidity of its own.',
   does: 'Can thicken and round a gravy; in this course korma it works with yoghurt and browned onion.',
   when: 'Soaked for an hour and ground smooth, then stirred in once the fat has separated from the onion.',
   swap: 'Cashew or melon-seed paste gives similar body with a little more sweetness. Whole seed adds texture rather than the same thickening.'
 },
 'IN-CEN|Bhopali garam masala': {
   aroma: 'Dark and resinous, led by black cardamom and mace, with cinnamon and clove behind them.',
   flavour: 'Warm and aromatic rather than hot; this course blend contains no chilli.',
   does: 'Finishes slow meat dishes and lets the cook adjust chilli separately. Bhopali-style blends vary.',
   when: 'Ground fine and stirred in during the last few minutes, before the aromatics have time to cook away.',
   swap: 'A good whole-spice garam masala, with an extra black cardamom pod and a blade of mace ground into it.'
 },
 'IN-CEN|Chironji': {
   aroma: 'Faintly of almond when raw. Toasting brings up something closer to pistachio.',
   flavour: 'Soft, oily and mildly sweet, with a flavour often compared with almond or pistachio.',
   does: 'Can enrich a gravy when ground with poppy seed or add texture to sweets such as chironji ki barfi.',
   when: 'Whole and raw into a sweet; lightly toasted and ground with the poppy seed for a gravy.',
   swap: 'Pine nuts are closest in size and fat. Blanched almonds, chopped small, carry a sweet well enough.'
 },
 'IN-CEN|Mahua': {
   aroma: 'Heavy and sweet even when dried, somewhere between raisin, honey and something faintly fermented.',
   flavour: 'Very sweet, with a musky edge that stops it tasting like plain sugar.',
   does: 'Adds sweetness to foods such as laddu, breads and porridges; it is also fermented in some traditions.',
   when: 'Dried flowers may be soaked or pounded and cooked with flour and ghee. Handle fresh flowers as a perishable crop.',
   swap: 'Dates give sweetness and stickiness, though the flavour differs.'
 },
 'IN-CEN|Black cardamom': {
   aroma: 'Smoke, camphor and pine, reflecting common curing methods for the dark pods.',
   flavour: 'Cooling and slightly medicinal, and frankly bitter if you chew the pod. It is meant to be fished out.',
   does: 'Carries smoke through a long-cooked meat dish, and holds up where green cardamom would disappear.',
   when: 'Often bruised and added whole early in cooking; start with a small amount and adjust to the dish.',
   swap: 'Green cardamom has a different profile. If substituting, use it for aroma without trying to reproduce the smoke.'
 },
 'IN-CEN|Tamarind': {
   aroma: 'Dark and raisin-like, faintly smoky in an old block; the new season smells greener and sharper.',
   flavour: 'Rounded acidity with sugar behind it, nothing like lemon, and savoury rather than fruity in quantity.',
   does: 'Can sour dal, vegetable stews including some aamat, and sweet-sour chutneys served with fried food.',
   when: 'Soaked in hot water, squeezed and strained. Into a dal late, because acid stops pulses softening.',
   swap: 'Lime juice off the heat gives acid without body. Dried mango powder works where a dish is dry.'
 }
});
