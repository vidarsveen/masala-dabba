/* Masala Dabba — spice cards for Tamil Nadu (IN-TAM), English. Contract: docs/spice-format.md,
   checked by tools/spicecheck.py. The key must match COURSE['IN-TAM'].spices character for character.
   Cards are never narrated, so editing one cannot make an audio file stale. */
window.SPICE = window.SPICE || {};
Object.assign(window.SPICE, {
 'IN-TAM|Black pepper': {
   aroma: 'Pine and warm wood, strongest in a corn cracked under a stone a minute before it is needed.',
   flavour: 'Quick heat at the front of the mouth that fades within seconds, so a cook can use a lot of it without the dish becoming punishing.',
   does: 'Carries the whole burn in milagu rasam and in pepper chicken, where no chilli goes in at all and the pepper has nothing to hide behind.',
   when: 'Crushed coarse and added late, so it arrives one grain at a time; whole and early only when a broth has to simmer for a while.',
   swap: 'Nothing does the same job. White pepper is cleaner and weaker, and reaching for chilli turns the dish into a different one.'
 },
 'IN-TAM|Kalpasi (stone flower)': {
   aroma: 'Almost nothing while it is cold. In hot fat it gives damp earth, old timber and a trace of smoke.',
   flavour: 'No sharp flavour of its own, faintly bitter and mineral at the edges, and never identifiable in the finished dish.',
   does: 'Puts a floor under a ground masala so the other spices have something to sit on. A Chettinad blend without it tastes noticeably thinner.',
   when: 'Dry-roasted with the whole spices before grinding, or dropped into the oil at the very start of the tempering.',
   swap: 'Nothing behaves like it, and a lichen cannot be faked. Leave it out and accept a lighter masala.'
 },
 'IN-TAM|Star anise': {
   aroma: 'Sweet liquorice over warm resin, and strong enough to find from the other side of a kitchen.',
   flavour: 'Sweet and heavy, with a numbing edge if too much goes in. One point of one star is often enough for a whole pan.',
   does: 'Gives a Chettinad meat dish its weight and its faint sweetness, and holds its own against the fennel and the pepper.',
   when: 'Whole, dry-roasted with the rest of the blend, or dropped into the oil with the other whole spices at the start.',
   swap: 'A short piece of cassia with a pinch of fennel gets nearer than anise seed does, but neither is really close.'
 },
 'IN-TAM|Marathi mokku': {
   aroma: 'Clove and black pepper with a mustardy edge, and it gives almost none of that until it is roasted.',
   flavour: 'Warm, resinous and slightly numbing, closer to clove than to anything else on the shelf.',
   does: 'Rounds off a roasted Chettinad masala and gives it a resinous note underneath. It is used in small amounts and never on its own.',
   when: 'Dry-roasted whole with the rest of the blend. The bud is hard, and it will not grind down properly unless it is roasted first.',
   swap: 'Two cloves and a few grains of pepper get you close enough for the masala to work, though nobody would mistake the two.'
 },
 'IN-TAM|Sambar podi': {
   aroma: 'Roasted coriander over dried chilli, with a toasted-lentil smell underneath that no northern blend has.',
   flavour: 'Earthy and moderately hot rather than sharp. Fenugreek gives it a bitter edge that shows up quickly if too much goes in.',
   does: 'Seasons and thickens at the same time, because roasted toor dal and chana dal are ground into it along with the spices.',
   when: 'Stirred into the simmering dal and tamarind and cooked for a few minutes, so the raw coriander taste has time to go.',
   swap: 'Garam masala is the wrong blend entirely. Roast coriander, chilli, fenugreek and a spoon of lentils and grind your own.'
 },
 'IN-TAM|Tamarind': {
   aroma: 'Faint and fruity, nearer dried dates than anything sharp, and it smells much milder than it tastes.',
   flavour: 'Rounded acidity with a sweetness behind it, quite unlike lemon and quite unlike the kudampuli Kerala uses for fish.',
   does: 'Sours sambar, rasam and the coastal fish curry, and it is what makes a Tamil gravy taste finished rather than flat.',
   when: 'Soaked in hot water and squeezed to an extract, which goes in early so that the raw taste has time to cook out.',
   swap: 'Lemon added at the end gives acidity without the body. Use about half as much and expect a sharper, thinner dish.'
 }
});
