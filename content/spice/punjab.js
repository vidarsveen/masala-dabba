/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-PUN|Garam masala': {
   aroma: 'Sweet bark and clove over something resinous, which is the black cardamom. It smells warm rather than sharp.',
   flavour: 'Warm and peppery, with a balance that varies between blends. Some contain chilli, so check the ingredients before adding more heat.',
   does: 'Brings several spice aromas together. A small amount near the end gives a fresh finish; some recipes also use it earlier.',
   when: 'Near the end for a fresh aroma. Follow the recipe if it also calls for an earlier addition; prolonged heat changes the volatile aromas.',
   swap: 'Curry powder has a different balance. For a simple substitute, grind cinnamon, clove, cardamom and pepper.'
 },
 'IN-PUN|Cumin (jeera)': {
   aroma: 'Earthy and slightly bitter cold; warm and nutty the moment it hits hot fat.',
   flavour: 'Savoury and a little smoky, with a bitterness that turns unpleasant if the seed goes past dark brown.',
   does: 'Starts almost every north Indian dish. Whole seed in hot ghee is the base note the rest is built on.',
   when: 'Whole, into hot fat at the start. Watch for fragrance and browning without blackening; timing depends on the heat. Ground cumin goes in with the powders.',
   swap: 'Nothing behaves the same way. Caraway looks similar and tastes wrong, so leave the cumin out rather than use it.'
 },
 'IN-PUN|Coriander seed': {
   aroma: 'Orange peel and dry hay. Freshly ground it is floral; stale it smells of nothing much.',
   flavour: 'Mild, slightly sweet and citrusy, which is why it can be used by the spoonful.',
   does: 'Gives a gravy body as well as flavour, because the ground seed thickens as it cooks. It is the bulk spice of the north.',
   when: 'Ground, with the other powders, off the heat for a moment so it does not catch, then cooked into the onion base.',
   swap: 'None. Ready-ground coriander works but loses the floral top note within a few months of opening.'
 },
 'IN-PUN|Ajwain': {
   aroma: 'Thyme, unmistakably, because the seed carries thymol. A pinch in the palm smells almost medicinal.',
   flavour: 'Sharp, herbal and bitter, and strong enough that a quarter-teaspoon marks a whole dish.',
   does: 'Cuts fat. It is what keeps the batter on Amritsari fish and a fried paratha from tasting heavy.',
   when: 'Rubbed between the fingers into a dough or a batter, or dropped whole into hot oil at the start.',
   swap: 'Dried thyme gets you a third of the way and no further. Use less of it than the recipe asks for ajwain.'
 },
 'IN-PUN|Kasuri methi': {
   aroma: 'Maple syrup and burnt sugar with a bitter edge, released by crushing rather than by heat.',
   flavour: 'Bittersweet and savoury. It is the flavour people cannot name in dal makhani and butter chicken.',
   does: 'Gives a rich dairy gravy a bitter counterweight, so it stops tasting simply sweet.',
   when: 'Crushed to powder between the palms over the pan, in the last minute of cooking.',
   swap: 'Fresh fenugreek leaves are a different thing, greener and milder. Dried is what the dishes here want.'
 },
 'IN-PUN|Amchur': {
   aroma: 'Faintly of dried fruit and green mango skin, and much weaker than its taste suggests.',
   flavour: 'Clean sharp sourness with a fruity edge, and no sweetness behind it.',
   does: 'Sours a dish without wetting it, which is why the dry food of the north uses it instead of lemon.',
   when: 'Near the end, stirred in off the heat, because prolonged cooking flattens the acidity.',
   swap: 'Lemon juice at about half the volume, accepting that the dish will be looser. Pomegranate seed is closer.'
 }
});
