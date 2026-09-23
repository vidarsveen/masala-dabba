/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-KON|Recheado masala': {
   aroma: 'Vinegar first, then garlic and scorched dried chilli, with clove and cinnamon behind it.',
   flavour: 'Sour, garlicky and sweet-hot at once. It tastes of the vinegar it was ground in, not of raw spice.',
   does: 'Stuffs a whole fish, seasons pork, or starts a curry. A small batch can serve several different dishes.',
   when: 'Rubbed on before cooking, or fried briefly in oil before the main ingredient goes in.',
   swap: 'Commercial versions vary. For a fresher result, grind a small batch, refrigerate it promptly and use within a few days or freeze portions.'
 },
 'IN-KON|Xacuti masala': {
   aroma: 'Deeply toasted coconut over nutmeg and star anise, more roasted than hot.',
   flavour: 'Nutty, sweet and complex, with a gritty body from poppy seed and very little sharpness.',
   does: 'Gives xacuti roasted flavour, body and a deep brown colour; the exact blend varies by cook.',
   when: 'Roasted and ground fresh, then simmered with the meat for half an hour so the coconut softens.',
   swap: 'A ready-made blend is convenient, but freshly roasting the coconut gives a fuller aroma and lets you control the colour.'
 },
 'IN-KON|Kashmiri chilli': {
   aroma: 'Faintly fruity and sun-dried, with almost no pungency until it hits hot oil.',
   flavour: 'Mild, with a slow warmth and a touch of sweetness. The colour is far ahead of the heat.',
   does: 'Can turn a gravy deep brick red with moderate heat, leaving room to adjust pungency with another chilli if wanted.',
   when: 'Whole chillies soaked in vinegar or water and ground; powder goes in off the heat, because it scorches fast.',
   swap: 'Byadgi is the same idea and works. Sweet paprika gives colour but no chilli character at all.'
 },
 'IN-KON|Palm vinegar': {
   aroma: 'Sharp and slightly yeasty, with a coconut sweetness sitting behind the acid.',
   flavour: 'Rounder and softer than wine vinegar, and nothing like the harshness of malt.',
   does: 'Adds acidity and character to marinades and masalas. It does not replace cooking or refrigeration for safe storage.',
   when: 'Used in a marinade or as some of the liquid for grinding masala; marinated food should remain refrigerated.',
   swap: 'Cider vinegar cut with a little water is closest. Coconut vinegar from a Filipino shop is nearer still.'
 },
 'IN-KON|Toasted coconut': {
   aroma: 'Dark, nutty and almost like coffee once it is roasted past golden.',
   flavour: 'Sweet and deep, with a slight bitterness from the browning that stops the dish being cloying.',
   does: 'Thickens and colours a gravy at the same time, so xacuti needs no flour, cream or tomato.',
   when: 'Dry-roasted in a heavy pan with no fat, stirred constantly, then ground with a little water while still warm.',
   swap: 'Desiccated coconut roasts unevenly and burns. Frozen grated coconut, thawed and dried off, is far better.'
 },
 'IN-KON|Tamarind': {
   aroma: 'Dried fruit and molasses, with a sour edge that you smell before you taste it.',
   flavour: 'Sour with an obvious sweetness behind it, rounder and heavier than kokum or vinegar.',
   does: 'Sours the fish curry and balances the chilli, and a small knob of it also darkens the gravy.',
   when: 'Soaked in warm water and squeezed, then the strained pulp goes in with the liquid rather than at the end.',
   swap: 'Kokum suits many Goan fish curries, though recipes vary. Lime is sharper and thinner.'
 }
});
