/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-KON|Recheado masala': {
   aroma: 'Vinegar first, then garlic and scorched dried chilli, with clove and cinnamon behind it.',
   flavour: 'Sour, garlicky and sweet-hot at once. It tastes of the vinegar it was ground in, not of raw spice.',
   does: 'Stuffs a whole fish, marinates pork, or starts a curry. One jar is a fortnight of dinners already half made.',
   when: 'Rubbed on raw and left to work, or fried in oil for a minute before the meat goes in.',
   swap: 'Nothing sold in a jar is close. Grind your own; it takes ten minutes and keeps for months.'
 },
 'IN-KON|Xacuti masala': {
   aroma: 'Deeply toasted coconut over nutmeg and star anise, more roasted than hot.',
   flavour: 'Nutty, sweet and complex, with a gritty body from poppy seed and very little sharpness.',
   does: 'Gives xacuti its dark colour and thick gravy without any vinegar or tomato doing the work.',
   when: 'Roasted and ground fresh, then simmered with the meat for half an hour so the coconut softens.',
   swap: 'A ready-made packet is thin and stale. Roasting your own coconut is the whole point of the blend.'
 },
 'IN-KON|Kashmiri chilli': {
   aroma: 'Faintly fruity and sun-dried, with almost no pungency until it hits hot oil.',
   flavour: 'Mild, with a slow warmth and a touch of sweetness. The colour is far ahead of the heat.',
   does: 'Turns a gravy deep brick red without burning anyone, so the cook can add heat separately and in control.',
   when: 'Whole chillies soaked in vinegar or water and ground; powder goes in off the heat, because it scorches fast.',
   swap: 'Byadgi is the same idea and works. Sweet paprika gives colour but no chilli character at all.'
 },
 'IN-KON|Palm vinegar': {
   aroma: 'Sharp and slightly yeasty, with a coconut sweetness sitting behind the acid.',
   flavour: 'Rounder and softer than wine vinegar, and nothing like the harshness of malt.',
   does: 'Sours, preserves and tenderises at the same time, which is why one bottle runs a Goan Catholic kitchen.',
   when: 'Early, as the marinade or as the liquid the masala is ground in, so it has hours to work on the meat.',
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
   swap: 'Kokum in a Goan fish curry, which is the commoner choice anyway. Lime is sharper and thinner.'
 }
});
