/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Several of these six are not spices in any normal sense. The five fields still apply: what the thing
   does in a pot, and when it goes in, is exactly what a cook needs from an alkali or a ferment. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-NEA|Bhut jolokia': {
   aroma: 'Fruity and faintly floral under the heat, something like a very ripe apricot.',
   flavour: 'Heat that arrives late and stays for minutes. At around a million Scoville units, a sliver is a portion.',
   does: 'Adds intense heat in a relish, at the table or directly in a cooked dish, depending on the recipe.',
   when: 'Use a measured sliver, wear gloves and avoid touching eyes. Add gradually because individual fruits vary.',
   swap: 'Habanero or scotch bonnet gives a related fruity heat at lower intensity; use the quantity the recipe can safely carry.'
 },
 'IN-NEA|Bamboo shoot': {
   aroma: 'Fresh shoot smells green and faintly of hay. Fermented shoot smells sour and a little cheesy, and it carries.',
   flavour: 'Fresh it is mild and crisp. Fermented it is sharply sour with a savoury edge and no sweetness at all.',
   does: 'Fermented shoot adds acidity and savoury aroma to dishes including meat, fish and relishes.',
   when: 'Fresh shoot requires thorough processing to reduce cyanogenic compounds. Use prepared products according to their label.',
   swap: 'Sauerkraut and a little brine can provide acidity, though the aroma and texture will differ.'
 },
 'IN-NEA|Axone (fermented soya)': {
   aroma: 'A strong fermented aroma that can recall ripe cheese; the exact profile depends on the product.',
   flavour: 'Deeply savoury once cooked, closer to a meat stock than to a spice, with a long salty finish.',
   does: 'Adds deep savoury flavour to meat, vegetables, relishes and stews.',
   when: 'Follow the recipe and the product’s storage directions; moist and dried forms may need different handling.',
   swap: 'Miso or fermented black bean can add savouriness, while producing a clearly different dish.'
 },
 'IN-NEA|Khar (alkali)': {
   aroma: 'Mild, with notes that depend on the plant material and preparation.',
   flavour: 'Strongly alkaline; its main effect is a smooth texture rather than a spice aroma.',
   does: 'Raises pH and softens plant tissue. Acid reduces that alkalinity and changes the result.',
   when: 'Use a tested food product sparingly. Traditional extracts vary greatly in concentration.',
   swap: 'A measured pinch of bicarbonate of soda reproduces part of the pH effect but not the flavour of kolakhar.'
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
   does: 'Adds mustard pungency and alkaline fermentation notes as a relish with rice or other foods.',
   when: 'Usually served uncooked as a condiment; formulas and serving practices vary.',
   swap: 'Coarse mustard loosened with water is the nearest thing. It is sharper, less bitter and not alkaline.'
 }
});
