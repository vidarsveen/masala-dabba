/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Several of these six are not spices in any normal sense. The five fields still apply: what the thing
   does in a pot, and when it goes in, is exactly what a cook needs from an alkali or a ferment. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-NEA|Bhut jolokia': {
   aroma: 'Fruity and faintly floral under the heat, something like a very ripe apricot.',
   flavour: 'Heat that arrives late and stays for minutes. At around a million Scoville units, a sliver is a portion.',
   does: 'Supplies the heat of a whole meal from the side of the plate, where the eater controls it rather than the cook.',
   when: 'Raw beside the food, or dried in smoke and crumbled in whole. It is rarely cooked into a gravy.',
   swap: 'A habanero or scotch bonnet behaves the same way at a fraction of the heat. Cayenne is the wrong shape of heat.'
 },
 'IN-NEA|Bamboo shoot': {
   aroma: 'Fresh shoot smells green and faintly of hay. Fermented shoot smells sour and a little cheesy, and it carries.',
   flavour: 'Fresh it is mild and crisp. Fermented it is sharply sour with a savoury edge and no sweetness at all.',
   does: 'Fermented shoot is the region’s everyday souring agent, and it cuts the fat of smoked pork better than any citrus.',
   when: 'Fresh shoot is boiled in two or three changes of water first. Fermented shoot goes in early, with the meat.',
   swap: 'Nothing tastes like it. Sauerkraut and its brine give you the sourness without the savoury depth behind it.'
 },
 'IN-NEA|Axone (fermented soya)': {
   aroma: 'Ammonia and old cheese when raw, which is the ferment working rather than the ferment spoiling.',
   flavour: 'Deeply savoury once cooked, closer to a meat stock than to a spice, with a long salty finish.',
   does: 'Gives a pot its backbone of depth, which is the job garam masala does elsewhere, and it needs no help doing it.',
   when: 'Early, fried in a little fat with chilli, so it loses its rawness and melts into the cooking liquid.',
   swap: 'Nothing is honest. Miso or fermented black bean will give you a savoury dish, and it will be a different one.'
 },
 'IN-NEA|Khar (alkali)': {
   aroma: 'Almost none at all. A faint smell of wood ash, and nothing beyond that.',
   flavour: 'No flavour to speak of. What it delivers is texture: soft, smooth and very slightly soapy.',
   does: 'Softens tough pulses and vegetables and breaks down fat. An acid in the same pot cancels it, so the two never meet.',
   when: 'A spoonful into the simmering water near the start, so it has time to work on whatever is in the pot.',
   swap: 'A small pinch of bicarbonate of soda does the chemistry, and every Assamese cook will tell you it is not the same.'
 },
 'IN-NEA|Black sesame': {
   aroma: 'Nutty and slightly bitter raw, then deeply toasted and almost smoky once it has been dry-roasted.',
   flavour: 'Rich and oily, more bitter than white sesame, with a mineral edge that suits a fermented dish.',
   does: 'Ground to a paste it thickens and adds fat, which is how Meghalaya rounds off the ferment in tungrymbai.',
   when: 'Dry-roasted until the seeds hop, then ground while still warm. Unroasted seed tastes flat and stays gritty.',
   swap: 'White sesame works and tastes milder and sweeter. Tahini gives the body and takes the colour away.'
 },
 'IN-NEA|Kharoli': {
   aroma: 'Sharp mustard, close to a jar of English mustard just opened, with a faint ash note behind it.',
   flavour: 'Pungent, bitter and salty at once. It hits the nose the way wasabi does and then fades quickly.',
   does: 'Works as a relish beside rice rather than as an ingredient, and one small spoonful seasons a whole plate.',
   when: 'Raw, at the table. Heating it destroys the pungency and leaves only the bitterness behind.',
   swap: 'Coarse mustard loosened with water is the nearest thing. It is sharper, less bitter and not alkaline.'
 }
});
