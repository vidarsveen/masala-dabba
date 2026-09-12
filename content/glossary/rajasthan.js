/* Masala Dabba — glossary terms introduced by Rajasthan (IN-RAJ), English.
   Only the first mention in a reading is linked, and the linking happens at render time, so the
   stored text and the narration scripts stay identical. `match` is per language. */
window.GLOSSARY = window.GLOSSARY || {};
Object.assign(window.GLOSSARY, {
  'bati': {
    term: 'Bati',
    short: 'A hard unleavened wheat ball baked in embers, cracked open and soaked in ghee.',
    long: 'Coarse wheat flour, salt and a good deal of ghee rubbed through it, rolled into balls and baked hard in the embers of a fire, buried in hot sand, or roasted in an oven. Nothing goes in to make it rise, so it comes out dense, cracked and dry, and it keeps for days, which is why it was a travelling food. The melted ghee poured over it at the table is not a garnish but the thing that makes it edible.',
    match: ['bati', 'batis']
  },
  'churma': {
    term: 'Churma',
    short: 'Baked bati crushed with ghee and raw cane sugar, eaten alongside the savoury food.',
    long: 'The third part of dal bati churma. Batis are crumbled while still warm and pounded with ghee, jaggery or sugar, cardamom and often chopped nuts, and the result stays loose and crumbly rather than becoming a paste. It arrives on the same plate as the dal rather than after it, because a Rajasthani meal does not keep sweet and savoury apart.',
    match: ['churma']
  },
  'dhungar': {
    term: 'Dhungar (smoking under a lid)',
    short: 'A live coal set in a bowl inside the pot, doused in ghee, and covered for two minutes.',
    long: 'A finishing trick, not a cooking method. A small steel bowl is set down in the middle of the finished dish, a glowing piece of charcoal goes into it, a spoonful of ghee is poured over the coal, and the lid goes on at once. The smoke works through the dish for a minute or two and the bowl is then lifted out. It is used on laal maas, on kebabs and on dal, and it takes less time than laying the table.',
    match: ['dhungar']
  },
  'besan': {
    term: 'Besan (gram flour)',
    short: 'Flour milled from brown chana dal. It thickens, binds and, in Rajasthan, becomes the dish.',
    long: 'Not the same as flour from the pale kabuli chickpea: besan is milled from the smaller brown chana, and it is finer, darker and thirstier. In a kitchen with few vegetables it does an unusual amount of work — it is the dough in gatte, the thickening in kadhi, the coating on a fried chilli, and the spoonful beaten into yoghurt that stops a gravy splitting.',
    match: ['gram flour', 'besan']
  },
  'chaas': {
    term: 'Chaas (buttermilk)',
    short: 'What is left after butter is churned out of curd. Drunk salted, and cooked with.',
    long: 'Thin, sour and lightly salted, often with cumin or curry leaf in it. In western India it closes almost every summer meal, and it is also a cooking liquid: kadhi is nothing but chaas thickened with gram flour and sharpened with chilli. Because it keeps longer than milk in heat, it is a way of storing the herd as much as a drink.',
    match: ['chaas', 'buttermilk']
  },
  'panchmel': {
    term: 'Panchmel dal',
    short: 'Five pulses cooked in one pot: chana, moong, urad, toor and moth.',
    long: 'Panchmel means five mixed. Cooking them together is not decoration: each pulse softens at its own rate, so some dissolve into the body of the dal while others keep their shape, and the finished pot has a texture no single pulse gives. It is the dal served under the batis of dal bati churma, and the last of the five, moth, is the desert pulse that grows where almost nothing else will.',
    match: ['panchmel']
  }
});
