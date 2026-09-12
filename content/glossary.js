/* Masala Dabba — glossary, English. Only the first mention of a term in a reading is linked, and the
   linking happens at render time, so the stored text and the narration scripts stay identical.
   `match` lists the surface forms to look for, and it is per language: English "clay pot" is
   Norwegian "leirgryte", so one key cannot serve both files. */
window.GLOSSARY = window.GLOSSARY || {};
Object.assign(window.GLOSSARY, {
  'tadka': {
    term: 'Tadka (tempering)',
    short: 'Whole spices bloomed in hot fat and poured over or under a dish.',
    long: 'Also called tempering, chhonk or, in the south, thalippu. Fat is heated, mustard seed goes in and pops, then dried chilli, curry leaf and whatever else the dish wants, and the whole lot is either the base the dish is built on or a finishing spoonful poured over the top. It is the single most common technique in Indian cooking and the one most often left out of translated recipes.',
    match: ['tempering', 'tadka']
  },
  'masala': {
    term: 'Masala',
    short: 'A blend of spices, wet or dry, made for one dish rather than for everything.',
    long: 'The word simply means a mixture. It can be dry and ground, like a garam masala, or wet and pounded, like the recheado paste of Goa. The important point is that a masala is built for its dish. The idea of a single all-purpose "curry powder" is a British invention of the eighteenth century and is not used in Indian kitchens.',
    match: ['masala']
  },
  'garam-masala': {
    term: 'Garam masala',
    short: 'A warm-spice blend, usually added at the end rather than cooked.',
    long: 'Garam means warm, in the sense of what the spices are thought to do to the body rather than of chilli heat. Cinnamon, clove, cardamom, black pepper, mace and cumin are typical, and almost every region and family has its own proportions. It normally goes in near the end of cooking, because its aroma is volatile.',
    match: ['garam masala']
  },
  'ghee': {
    term: 'Ghee',
    short: 'Butter simmered until the water goes and the milk solids brown, then strained.',
    long: 'Clarified butter, but taken a step further than the French version: the milk solids are allowed to toast before straining, which gives ghee its nutty smell. It keeps for months without refrigeration, which is why it became the cooking fat of hot, dairy-rich regions, and it has a high smoke point.',
    match: ['ghee']
  },
  'dum': {
    term: 'Dum',
    short: 'Cooking in a sealed pot so nothing escapes.',
    long: 'The lid is luted to the pot with a rope of dough and the pot cooks over a low fire, sometimes with coals on the lid as well. Nothing evaporates, so the meat cooks in its own steam and the aromatics have nowhere to go. Awadhi biryani is the best-known example, and the seal is broken at the table.',
    match: ['dum']
  },
  'thali': {
    term: 'Thali',
    short: 'A round metal plate, and by extension a meal served all at once in small bowls on it.',
    long: 'The word is the plate. As a meal it means a set of small quantities served together rather than in courses: two or three vegetables, a dal, a bread, rice, a pickle, something sweet. The eater decides the order and the combinations, which is the opposite of a tasting menu.',
    match: ['thali']
  },
  'sadya': {
    term: 'Sadya',
    short: 'A Kerala feast of twenty or more vegetarian dishes served on a banana leaf.',
    long: 'Served at Onam and at weddings, on a banana leaf with the narrow end to the eater\'s left. Every item has a fixed position, and the order the servers come round in tells the eater what to mix into the rice next. It ends with payasam, and folding the leaf towards you afterwards means you enjoyed it.',
    match: ['sadya']
  },
  'thoran': {
    term: 'Thoran',
    short: 'Vegetables cut small and tossed with grated coconut, barely cooked.',
    long: 'A dry Kerala side dish. Beans, cabbage, carrot or a leafy green is chopped fine, then stirred over heat with grated coconut, green chilli, turmeric and a mustard-seed tempering until just done. It is not a curry and has no gravy, and a Kerala meal usually has one on the plate every day.',
    match: ['thoran']
  },
  'kudampuli': {
    term: 'Kudampuli',
    short: 'The smoked, dried rind of a Garcinia fruit, used to sour fish.',
    long: 'Also sold as Malabar tamarind or fish tamarind, though it is neither tamarind nor the same thing as kokum. The fruit is halved, smoked over a fire and dried until black and leathery. It gives a clean sharp acidity, firms the flesh of fish, and lets a curry keep for two or three days without refrigeration.',
    match: ['kudampuli']
  },
  'matta': {
    term: 'Matta rice',
    short: 'Kerala\'s short, red, parboiled rice.',
    long: 'Parboiled before milling: soaked, steamed in the husk and dried again. The steaming drives vitamins from the bran into the grain and hardens the starch, so the rice keeps its nutrition, survives humid storage and stays chewy in a wet curry. The red colour is bran left on after milling.',
    match: ['matta']
  },
  'appam': {
    term: 'Appam',
    short: 'A fermented rice pancake, lacy at the rim and spongy in the middle.',
    long: 'Rice is ground with coconut and left to ferment, then a ladle of the batter is swirled in a small round-bottomed pan so the edges run thin and crisp while the centre stays thick. The hollow centre holds stew. Traditionally raised with palm toddy, now usually with yeast.',
    match: ['appam']
  },
  'parotta': {
    term: 'Kerala parotta',
    short: 'A layered wheat flatbread of the Malabar coast, pulled apart in threads.',
    long: 'Dough is rested, oiled, stretched very thin, coiled into a spiral and pressed flat, so it cooks into a stack of loose layers. It is not the same thing as a north Indian paratha, and it is usually eaten with beef fry or a meat curry rather than at a formal meal.',
    match: ['parotta']
  },
  'biryani': {
    term: 'Biryani',
    short: 'Rice and meat cooked together in a sealed pot, layered rather than stirred.',
    long: 'Two broad methods exist. In kacchi biryani the raw marinated meat and the part-cooked rice go into the pot together and finish under dum. In pakki biryani the meat is cooked first and then layered. Hyderabad, Lucknow, Thalassery and Kolkata each have a distinct version, and the rice varies: basmati in the north, short-grain kaima in Kerala.',
    match: ['biryani']
  },
  'dal': {
    term: 'Dal',
    short: 'Split pulses, and the dish made from them.',
    long: 'The word covers both the ingredient and the finished dish. Dozens of pulses are used and they are not interchangeable: toor, moong, urad, chana and masoor cook to different textures and belong to different dishes. Almost every Indian meal has one, and it is usually finished with a tempering.',
    match: ['dal', 'parippu']
  },
  'pappadam': {
    term: 'Pappadam',
    short: 'A thin lentil-flour wafer, fried or roasted until crisp.',
    long: 'Made from a dough of ground pulse flour, rolled very thin and sun-dried, then fried or held over a flame until it puffs and crisps. In Kerala it is part of the everyday plate and of the sadya, where many people crumble one into the payasam at the end.',
    match: ['pappadam', 'pappadams']
  },
  'jaggery': {
    term: 'Jaggery',
    short: 'Unrefined cane or palm sugar, sold in blocks.',
    long: 'Cane juice or palm sap boiled down and set without being spun in a centrifuge, so the molasses stays in. It tastes of caramel and minerals rather than simply of sweetness, and it is not interchangeable with white sugar in a recipe that relies on it.',
    match: ['jaggery']
  },
  'payasam': {
    term: 'Payasam',
    short: 'A sweet pudding of milk or coconut milk, served at the end of a sadya.',
    long: 'Rice, vermicelli, lentils or ada are simmered in milk with sugar, or in coconut milk with jaggery, and finished with cardamom, cashews and raisins fried in ghee. Known as kheer in the north. The jaggery versions are darker and are the ones usually served on a leaf.',
    match: ['payasam']
  },
  'monsoon': {
    term: 'Monsoon',
    short: 'The seasonal reversal of wind that brings India most of its rain.',
    long: 'The south-west monsoon arrives on the Kerala coast around the start of June and works north; a weaker north-east monsoon follows in October and matters most to the south-east. Almost every crop in this course is timed to it, and where the rain falls decides what grows.',
    match: ['monsoon']
  },
  'western-ghats': {
    term: 'Western Ghats',
    short: 'The mountain chain along India\'s west coast, and the reason the spices grow.',
    long: 'A range running roughly 1,600 km from Gujarat to the southern tip, mostly between 900 and 2,600 m. It blocks the south-west monsoon and forces it to rain on the seaward slopes, which is what makes Kerala, coastal Karnataka and the Konkan wet, and the Deccan plateau behind them dry.',
    match: ['Western Ghats']
  },
});
