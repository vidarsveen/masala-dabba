/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-HIM|Saffron (kong)': {
   aroma: 'Hay and honey with a metallic edge underneath, and it grows stronger as the threads dry out and age a little.',
   flavour: 'Faintly bitter and faintly medicinal, and never sweet on its own. A whole dish carries a very small amount of it.',
   does: 'Colours a dish gold from the inside and perfumes it. It is not a seasoning and it will not rescue a flat pot.',
   when: 'Crushed and steeped in warm milk or water for a quarter of an hour, and the coloured liquid goes in near the end.',
   swap: 'Nothing. Turmeric gives colour with a taste of its own, and safflower gives colour and nothing else at all.'
 },
 'IN-HIM|Kashmiri chilli': {
   aroma: 'Dried fruit with a little tobacco behind it, and almost nothing sharp. A bowl of it smells nearer to paprika than to chilli.',
   flavour: 'Warm and slightly sweet, with a heat that arrives late and stops early. Most of what it delivers is colour.',
   does: 'Brings deep red colour and comparatively mild heat to rogan josh and dum aloo. Ratan jot or mawal may deepen the colour.',
   when: 'Stirred into whisked yoghurt or a little water first, then into the pot. Dry powder in hot fat scorches within seconds.',
   swap: 'Byadgi and degi mirch behave the same way. Sweet paprika with a pinch of hot chilli gets close, but the gravy stays paler.'
 },
 'IN-HIM|Ver masala': {
   aroma: 'Garlic and dried chilli over cumin and clove, and it is at its strongest in the second after you snap a piece off.',
   flavour: 'Savoury, pungent and salty, with the garlic well forward. A very small piece seasons a whole pot.',
   does: 'Gives a dish a prepared wet masala without grinding spices for every pot; the seasonal batch has been dried into a cake.',
   when: 'Broken off a ring, crushed to powder and bloomed in hot oil at the start, or crumbled in with the vegetables.',
   swap: 'No packet blend matches it. Garlic, shallot, Kashmiri chilli, cumin and clove ground fresh give the flavour but not the keeping.'
 },
 'IN-HIM|Fennel (saunf)': {
   aroma: 'Sweet aniseed, with a green grassy note behind it while it is still freshly ground.',
   flavour: 'Sweet and cooling rather than hot, and mild enough to use by the spoonful where another spice would be a pinch.',
   does: 'Stands in for onion in a Pandit kitchen. It gives a gravy sweetness and body at once, because the ground seed thickens as it cooks.',
   when: 'Ground, and stirred into the yoghurt or the water rather than fried, since toasting it hard turns it bitter.',
   swap: 'Ground anise is closer than it looks and stronger, so use rather less. Seed you grind yourself beats any jar of powder.'
 },
 'IN-HIM|Dry ginger (sonth)': {
   aroma: 'Warm, dusty and woody, with none of the citrus lift that fresh ginger has.',
   flavour: 'Drier and sharper than the fresh root, and the burn sits further back in the throat and lasts longer.',
   does: 'The other half of the Pandit pair with fennel, supplying the warmth and bite that garlic would otherwise have given.',
   when: 'Ground, in with the other powders, and cooked wet for a few minutes so it loses its dusty edge.',
   swap: 'Fresh ginger is a different spice rather than a substitute. At a push use three times the weight and expect another dish.'
 },
 'IN-HIM|Praan (shallot)': {
   aroma: 'Sharper and more sulphurous than a European shallot raw, and considerably sweeter once it has browned.',
   flavour: 'Concentrated onion with very little water in it, which is why it fries dark instead of stewing in its own juice.',
   does: 'Builds the base of many Muslim-kitchen gravies in the valley, sliced, browned slowly and then ground back into the pot.',
   when: 'Early, and fried until it is properly dark, because a pale onion base leaves a wazwan gravy thin and sweet.',
   swap: 'Ordinary shallots are the right shape and close enough. Large onions are wetter and will not brown the same way.'
 }
});
