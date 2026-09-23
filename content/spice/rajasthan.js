/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-RAJ|Mathania chilli': {
   aroma: 'Sun-dried fruit and warm paprika, with a little smoke in pods dried on a roof.',
   flavour: 'Fruity and aromatic, with heat that varies by harvest and pod.',
   does: 'Gives laal maas deep red colour, aroma and adjustable heat. The cook tastes and changes the quantity.',
   when: 'Stemmed, soaked in warm water and ground to a paste, or warmed in ghee off the flame so the fat takes the colour.',
   swap: 'Kashmiri chilli is closest. Mild paprika with a little hot chilli powder gets near enough in a home kitchen.'
 },
 'IN-RAJ|Coriander (dhania)': {
   aroma: 'Warm and dry, somewhere between citrus peel and old wood. Seed crushed in the hand smells far brighter than the powder.',
   flavour: 'Mild and faintly sweet, with no heat at all. It is a background that carries the other spices rather than a flavour you notice.',
   does: 'Thickens as well as flavours. The ground seed swells and gives a gravy the body that a fried onion supplies elsewhere.',
   when: 'Ground, in with the other powders, early enough for the raw taste to cook out. Dry-roast the seed first for a nuttier version.',
   swap: 'Nothing does both jobs. Use a little more gram flour for the body, and accept that the flavour is missing.'
 },
 'IN-RAJ|Asafoetida (hing)': {
   aroma: 'Raw it is sulphurous and genuinely unpleasant. In hot fat it turns savoury and warm, close to frying onion.',
   flavour: 'Almost none of its own once cooked. What it leaves behind is a savoury depth that is hard to put a name to.',
   does: 'Stands in for onion and garlic in the many households that eat neither, and it settles a heavy pulse dish.',
   when: 'A pinch into hot fat for a few seconds before anything else goes in, or it stays raw and the dish smells wrong.',
   swap: 'None. A dish without it is simply flatter, and putting onion in instead changes what the dish is.'
 },
 'IN-RAJ|Kachri': {
   aroma: 'Faintly musky and melon-like, with a dusty edge once the dried fruit is ground.',
   flavour: 'Sour without any sweetness, softer than lemon and rounder than dried mango.',
   does: 'Two jobs at once: it sours a dish, and it tenderises meat, because the dried fruit carries enzymes that break protein down.',
   when: 'Ground into the marinade an hour or more before cooking, so it has time to work on the meat.',
   swap: 'Amchur or lemon will sour a dish, but neither tenderises. For that, a little grated raw papaya is the nearest thing.'
 },
 'IN-RAJ|Clove': {
   aroma: 'Sharp, sweet and medicinal. The compound behind it is eugenol, which is what a dentist smells of.',
   flavour: 'Hot and slightly numbing, and strong enough that one clove too many takes over the whole pot.',
   does: 'Carries much of the smell of laal maas and of the local garam masala, in a kitchen with few fresh aromatics.',
   when: 'Whole into hot ghee with the other whole spices at the start, and left in. Ground clove belongs only in a finished masala.',
   swap: 'Allspice is nearer than anything else, at half the quantity. Leaving it out beats doubling it.'
 },
 'IN-RAJ|Panchkuta': {
   aroma: 'Dry, woody and faintly bitter, like a sack of dried pods, which is exactly what it is.',
   flavour: 'Sour, chewy and slightly bitter once cooked. A little bitterness belongs there and is not a fault.',
   does: 'It is the vegetable course of the desert: five dried wild things, usually ker, sangri, kumatia, gunda and dried mango.',
   when: 'Washed, soaked until rehydrated, boiled soft, then fried with chilli, coriander, turmeric, hing and amchur.',
   swap: 'Nothing replaces the mixture. Sangri on its own makes a fair dish; skip it rather than substitute green beans.'
 }
});
