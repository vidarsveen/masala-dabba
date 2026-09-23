/* Masala Dabba — spice cards for Maharashtra (IN-MAH), English. Contract: docs/spice-format.md,
   checked by tools/spicecheck.py. The key must match COURSE['IN-MAH'].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-MAH|Goda masala': {
   aroma: 'Roasted coconut, sesame and warm whole spices; the balance changes with the maker.',
   flavour: 'Warm, toasted and usually gentle rather than sugary. Some blends are darker or hotter than others.',
   does: 'Adds roasted depth to dishes such as amti, stuffed aubergines, masale bhat and sprouted-bean usal.',
   when: 'Usually fried briefly with softened aromatics before liquid is added; follow the dish and the blend.',
   swap: 'Garam masala has a different profile. Roasted coconut and sesame can bring it closer when goda masala is unavailable.'
 },
 'IN-MAH|Dagad phool': {
   aroma: 'Papery when dry, with a subtle earthy and woody aroma after toasting.',
   flavour: 'A background earthiness rather than a dominant named flavour.',
   does: 'Contributes depth to some goda masala and other regional spice blends.',
   when: 'Usually roasted with other whole spices before a blend is ground.',
   swap: 'There is no close substitute; omit it or buy a prepared blend that already contains it.'
 },
 'IN-MAH|Kala masala': {
   aroma: 'Deeply roasted spices, sometimes with a pronounced chilli note; blends vary widely.',
   flavour: 'Dark, toasted and often hotter than goda masala, although the names overlap between makers.',
   does: 'Adds colour, roast and heat to dishes including some Kolhapuri and Vidarbha gravies.',
   when: 'Cooked briefly in oil with aromatics before liquid is added, taking care not to burn the ground spices.',
   swap: 'A dark roasted masala plus separate mild and hot chilli can approximate its colour and heat.'
 },
 'IN-MAH|Peanut': {
   aroma: 'Sweet and toasty once roasted, and almost nothing at all raw.',
   flavour: 'Rich and faintly milky, with a bitterness in the skins that is why they are usually rubbed off.',
   does: 'Adds fat and body to plateau cooking. Ground, it thickens a stuffing; crushed, it gives texture.',
   when: 'Roasted and rubbed of skins first, then crushed coarse for a topping or ground fine into a masala or a stuffing.',
   swap: 'Cashew is richer and sweeter and thickens as well. Sesame gives a similar body with a different, more bitter flavour.'
 },
 'IN-MAH|Curry leaf': {
   aroma: 'Citrus and warm nuts, and only in hot fat. The dried leaf gives almost nothing.',
   flavour: 'Savoury and slightly bitter, sitting under the turmeric and asafoetida rather than beside them.',
   does: 'Adds citrusy, savoury aroma to phodni, the Marathi term for tempering spices in hot fat.',
   when: 'Added to hot oil until it crackles; the exact order depends on the other spices and the dish.',
   swap: 'There is no close substitute. Omit it if fresh or frozen curry leaves are unavailable.'
 },
 'IN-MAH|Kokum': {
   aroma: 'Dried plum and a little leather. The salted concentrate smells sharper and faintly of brine.',
   flavour: 'Clean fruity acidity with no sweetness, and it leaves the colour of a dish alone where tamarind would muddy it.',
   does: 'Sours some Malvani fish curries and gives solkadhi fruity acidity and, often, a pale pink colour.',
   when: 'Rinsed and dropped in whole near the start of a fish curry; steeped in warm water for an hour if you want solkadhi.',
   swap: 'Tamarind sours as well but browns the gravy. Lime works only off the heat, and neither gives you the colour.'
 }
});
