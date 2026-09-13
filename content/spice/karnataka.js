/* Masala Dabba — spice cards, English. Contract: docs/spice-format.md, checked by tools/spicecheck.py.
   Key is '<region code>|<spice name>', and the name must match COURSE[code].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-KAR|Byadgi chilli': {
   aroma: 'Sun-dried fruit with tobacco behind it. The pods are so deeply wrinkled that a handful feels more like leather than fruit.',
   flavour: 'Mild and faintly sweet, with a warmth that arrives late and leaves quickly. Most of what it delivers is colour.',
   does: 'Gives a darker brick red than Kashmiri chilli and holds it through a long simmer. Much of the crop is crushed for colour extract instead.',
   when: 'Whole pods into hot oil at the start; powder into a wet mixture or with the pan off the heat, because it scorches in seconds.',
   swap: 'Kashmiri chilli behaves the same way and is easier to find. Sweet paprika gives the colour and none of the chilli character.'
 },
 'IN-KAR|Bisi bele bath powder': {
   aroma: 'Roasted coriander first, then clove and cinnamon, over a toasted-lentil smell that no other Indian blend has.',
   flavour: 'Warm and rounded rather than sharp, and a little sweet from the dried coconut roasted into it.',
   does: 'Seasons and thickens at once, because roasted chana dal and urad dal are ground in along with the spices.',
   when: 'Stirred in once the rice and dal are soft, then cooked a few minutes more so the raw flour taste goes.',
   swap: 'Sambar podi with a little extra cinnamon and clove gets close, but the pot comes out thin and needs help.'
 },
 'IN-KAR|Coconut': {
   aroma: 'Sweet and milky when it is freshly grated, and almost nothing at all once it has been dried and shredded.',
   flavour: 'Mildly sweet and fatty. Roasted dark it turns nutty and faintly bitter, which makes it a different ingredient.',
   does: 'Ground with spices it gives the coastal gravies their whole body, so nothing here is ever thickened with flour.',
   when: 'Ground raw for a pale gravy, roasted dark first for a Kundapur one. Coconut milk goes in at the end and must not boil hard.',
   swap: 'Frozen grated coconut is as good as fresh. Desiccated needs soaking in warm water and still gives less.'
 },
 'IN-KAR|Curry leaf': {
   aroma: 'Citrus peel and warm nuts, and only once the leaf meets hot fat. A cold leaf smells of very little.',
   flavour: 'Savoury with a faint bitterness, felt as a background rather than named in the finished dish.',
   does: 'Runs the whole state, coast and dry interior alike, and it is the one thing a Karnataka tempering never leaves out.',
   when: 'Into hot oil for a few seconds until it crackles, at the start of a dish or poured over a finished saaru.',
   swap: 'None. Dried leaves taste of nothing, so leave them out and accept a plainer dish.'
 },
 'IN-KAR|Kachampuli': {
   aroma: 'Sour and faintly smoky, nearer to molasses or tamarind concentrate than to anything anyone would call vinegar.',
   flavour: 'Very sour and slightly bitter, with a dark fruit sweetness underneath it. A teaspoon is a large amount.',
   does: 'Sours pork and turns the gravy almost black, and the acid keeps a pot edible for days in a wet climate.',
   when: 'In near the end, a spoonful at a time, off a hard boil. Added early it cooks away and the colour goes with it.',
   swap: 'Nothing matches it. Tamarind with a little dark treacle gets the sourness and neither the colour nor the smoke.'
 },
 'IN-KAR|Black cardamom': {
   aroma: 'Woodsmoke first, then camphor and resin. It smells of the fire it was dried over rather than of cardamom.',
   flavour: 'Smoky, savoury and slightly medicinal, with none of the sweetness the small green pod carries.',
   does: 'Gives a meat pot a smoky depth nothing else supplies, and it survives four hours of cooking without fading.',
   when: 'Whole and early, bruised or left intact. One pod does a large pot, and it is eaten around rather than chewed.',
   swap: 'Green cardamom is not a substitute in either direction. Leave it out, or add a pinch of smoked paprika instead.'
 }
});
