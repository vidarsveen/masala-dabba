/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-GUJ|Dhana-jeera': {
   aroma: 'Warm citrus peel and wood from the roasted coriander, with the earthier cumin sitting behind it.',
   flavour: 'Mild and faintly sweet, never sharp. It is a base note, and you notice it most when it is missing.',
   does: 'Seasons and thickens at once. Ground coriander gives a thin vegetable dish body, and the cumin supplies the warmth.',
   when: 'Early, with the vegetables, and with the pan pulled off the flame for a few seconds so it does not scorch.',
   swap: 'Ground coriander and cumin from two jars, two parts to one. Garam masala is a different thing and will not do.'
 },
 'IN-GUJ|Mustard seed': {
   aroma: 'Almost nothing in the jar. In hot oil the seeds pop and give off a sharp, nutty, slightly cabbagey smell.',
   flavour: 'Popped, they are nutty rather than hot. Crushed raw into a paste they turn pungent, which is a Bengali trick, not a Gujarati one.',
   does: 'Opens the vaghar, the Gujarati tempering, and seasons the oil that everything else is then cooked in.',
   when: 'Whole, first, into oil hot enough to make them jump within a few seconds. Curry leaf and hing follow.',
   swap: 'Nothing behaves the same way. Leave them out rather than substitute, and add the curry leaf as usual.'
 },
 'IN-GUJ|Asafoetida (hing)': {
   aroma: 'Raw it is sulphurous and hard to like. A few seconds in hot fat turn it savoury and warm, close to frying onion.',
   flavour: 'Barely any of its own once cooked. What is left is a depth underneath everything that is difficult to name.',
   does: 'Supplies the allium note in the many Jain and Vaishnav houses that cook without onion or garlic, and settles a pot of pulses.',
   when: 'A pinch into the hot oil right after the mustard seed, and only for a few seconds. Raw, it smells wrong.',
   swap: 'None. A dish without it is flatter, and adding onion instead makes a different dish rather than the same one.'
 },
 'IN-GUJ|Sesame (til)': {
   aroma: 'Faint and grassy raw; toasted or fried it turns nutty and slightly sweet, close to a warm biscuit.',
   flavour: 'Mild, oily and nutty, with a thin bitterness in the skin that roasting turns pleasant.',
   does: 'Crusts a handvo, thickens the green masala in undhiyu, and finishes khandvi and dhokla alongside the mustard seed.',
   when: 'Into hot oil with the tempering, or scattered over a batter before it goes to cook so the top toasts.',
   swap: 'Poppy seed thickens a paste in much the same way. Nothing replaces the toasted smell, so toast what you have.'
 },
 'IN-GUJ|Jaggery (gud)': {
   aroma: 'Molasses, hot caramel and a mineral edge. It smells of the boiling pan rather than of sugar.',
   flavour: 'Sweet but not clean: caramel, a little salt and a little iron. Darker blocks taste stronger and less sweet.',
   does: 'Balances the sour and the chilli in dal, kadhi and vegetables, so the dish reads as three tastes rather than one.',
   when: 'Near the end, once the sourness is in, so you can judge the balance instead of guessing at it.',
   swap: 'Dark muscovado is the nearest supermarket thing. White sugar sweetens without the molasses and flattens the dish.'
 },
 'IN-GUJ|Kokum': {
   aroma: 'Dried fruit and a little leather, with none of the smokiness that Kerala dries into kudampuli.',
   flavour: 'Clean fruity acidity with no sweetness behind it, lighter and rounder than tamarind and far less sharp than lime.',
   does: 'Sours dal without clouding it, and steeped in water with sugar and cumin it becomes the Gujarati summer drink.',
   when: 'Rinsed and dropped in whole near the start, so it has time to give up its acid, and fished out before serving.',
   swap: 'Tamarind works and makes a heavier, browner dal. Lime is a last resort and must go in off the heat.'
 }
});
