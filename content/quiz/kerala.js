/* Masala Dabba — recap questions, English. Contract: docs/quiz-format.md, checked by tools/quizcheck.py.
   One array of four readings per region, three questions each. Questions are NEVER narrated:
   narrate.py only ever sees a reading's html, so editing a question cannot make audio stale. */
window.QUIZ = window.QUIZ || {};
window.QUIZ['IN-KER'] = [
 [
  {q:'Why do pepper and cardamom grow so well on this particular strip of coast?',
   a:['The Western Ghats stop the monsoon and wring the rain out over the slopes',
      'The soil is volcanic, like Etna or Vesuvius',
      'The Portuguese planted them there in the sixteenth century',
      'The coast is unusually dry, and both plants dislike rain'],
   c:0, why:'The mountains force the south-west monsoon to drop two and a half to five metres of rain a year, and a second monsoon follows in October. That long wet season is the whole reason.'},
  {q:'What is the difference between black and white pepper?',
   a:['They come from two different plants',
      'They are the same berry: black is dried green, white is the seed with the skin removed',
      'White pepper is bleached black pepper',
      'Black is Indian and white is Vietnamese'],
   c:1, why:'One fruit, three treatments. Dried green gives black pepper, ripened and soaked gives white, and brined green berries stay soft and mild.'},
  {q:'A recipe from Kerala calls for a souring agent in a fish curry. Which one?',
   a:['Tamarind', 'Lemon juice', 'Kudampuli', 'Vinegar'],
   c:2, why:'Kudampuli gives many Kerala fish curries a sharp, sometimes smoky sourness. It changes flavour but does not make cooked fish safe without refrigeration.'}
 ],
 [
  {q:'What does parboiling do to rice before it is milled?',
   a:['It makes it cook faster',
      'It drives vitamins from the bran into the grain and hardens the starch',
      'It removes the red colour',
      'It is a modern industrial shortcut'],
   c:1, why:'Soaking, steaming in the husk and drying keeps nutrition that polishing would strip, and it makes a grain that survives a monsoon and does not collapse in a wet curry.'},
  {q:'Which starter is associated with some older appam traditions?',
   a:['Baking powder', 'Fermented palm toddy', 'Beaten egg white', 'Sourdough starter from wheat'],
   c:1, why:'Some traditions use fermenting palm toddy. Many present-day recipes use measured yeast, cooked rice or another starter.'},
  {q:'Why is richer coconut milk often added late in a curry?',
   a:['At the start, so it has time to reduce',
      'With the heat turned off, at the very end',
      'It does not; only thin milk is used',
      'Halfway through, once the vegetables soften'],
   c:1, why:'Gentler, later heating reduces the chance that a rich coconut emulsion separates. Fresh pressings and canned products behave differently.'}
 ],
 [
  {q:'Kerala\'s ishtu, the stew served with appam, is built around what?',
   a:['A great deal of chilli powder',
      'Coconut milk, whole spices and sliced shallot, with no chilli powder at all',
      'Tomato and onion, cooked down hard',
      'Yoghurt and ground almonds'],
   c:1, why:'This pale, whole-spice style is strongly associated with Syrian Christian cooking in central Kerala and is now shared more widely. Household versions vary.'},
  {q:'What is added to avial off the heat at the very end?',
   a:['Raw coconut oil and curry leaves', 'Ghee and saffron', 'Cream', 'Fried onions'],
   c:0, why:'A spoonful of raw coconut oil and a handful of curry leaves. It does what good olive oil does over a Tuscan soup, and the dish tastes flat without it.'},
  {q:'What guides the progression of many sadya meals?',
   a:['The colour of each dish',
      'Nothing; you choose freely',
      'The order in which the servers come round',
      'A printed menu handed out first'],
   c:2, why:'Many hosts follow a recognisable progression such as parippu, sambar, rasam and buttermilk, while exact order and placement vary by region and household.'}
 ],
 [
  {q:'What did Rome buy from this coast in the first century, and what did Pliny complain about?',
   a:['Silk, and the cost of shipping it',
      'Pepper, and the gold draining out of the empire to pay for it',
      'Cotton, and the quality of the weaving',
      'Sugar, and the tax on it'],
   c:1, why:'Pepper, in bulk, through Muziris. Pliny the Elder put the drain to India, China and Arabia at a hundred million sesterces a year.'},
  {q:'Which of these is an American crop that spread in India through early modern maritime networks?',
   a:['Black pepper', 'Cardamom', 'Chilli', 'Turmeric'],
   c:2, why:'Chilli is American and spread widely after Iberian maritime contact. Other American crops followed routes and dates that were not identical.'},
  {q:'What is the best explanation for Kerala’s visible beef-food traditions?',
   a:['A colonial-era law that was never repealed',
      'Several communities, markets and modern restaurant cultures shaped them over time',
      'Cattle are not farmed elsewhere in India',
      'It was introduced by the Dutch in the 1660s'],
   c:1, why:'Religion percentages alone do not explain food practice. Caste, community, occupation, law, markets and restaurant culture all matter.'}
 ]
];
