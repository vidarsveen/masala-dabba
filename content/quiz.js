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
   c:2, why:'Kerala keeps its two sours apart. Tamarind goes into vegetables and pulses; kudampuli goes into fish, where it also firms the flesh and keeps the curry for days.'}
 ],
 [
  {q:'What does parboiling do to rice before it is milled?',
   a:['It makes it cook faster',
      'It drives vitamins from the bran into the grain and hardens the starch',
      'It removes the red colour',
      'It is a modern industrial shortcut'],
   c:1, why:'Soaking, steaming in the husk and drying keeps nutrition that polishing would strip, and it makes a grain that survives a monsoon and does not collapse in a wet curry.'},
  {q:'Appam batter is traditionally raised with what?',
   a:['Baking powder', 'Fermented palm toddy', 'Beaten egg white', 'Sourdough starter from wheat'],
   c:1, why:'A cup of kallu, fresh palm sap that is already fermenting, does the raising. Most kitchens now use yeast instead, which works but is a substitution.'},
  {q:'When does thick coconut milk go into a curry?',
   a:['At the start, so it has time to reduce',
      'With the heat turned off, at the very end',
      'It does not; only thin milk is used',
      'Halfway through, once the vegetables soften'],
   c:1, why:'Thin milk is the cooking liquid and can simmer as long as you like. Thick milk splits into oil and curds if it boils, so it goes in off the heat.'}
 ],
 [
  {q:'Kerala\'s ishtu, the stew served with appam, is built around what?',
   a:['A great deal of chilli powder',
      'Coconut milk, whole spices and sliced shallot, with no chilli powder at all',
      'Tomato and onion, cooked down hard',
      'Yoghurt and ground almonds'],
   c:1, why:'It comes from the Syrian Christian kitchens of central Travancore, where the expensive whole spices were on the doorstep and there was no reason to bury them under chilli.'},
  {q:'What is added to avial off the heat at the very end?',
   a:['Raw coconut oil and curry leaves', 'Ghee and saffron', 'Cream', 'Fried onions'],
   c:0, why:'A spoonful of raw coconut oil and a handful of curry leaves. It does what good olive oil does over a Tuscan soup, and the dish tastes flat without it.'},
  {q:'On a sadya leaf, what tells you what to mix into the rice next?',
   a:['The colour of each dish',
      'Nothing; you choose freely',
      'The order in which the servers come round',
      'A printed menu handed out first'],
   c:2, why:'Parippu with ghee first, then sambar, then rasam, then buttermilk, each mixed and eaten before the next arrives. The serving order is as much the recipe as the dishes are.'}
 ],
 [
  {q:'What did Rome buy from this coast in the first century, and what did Pliny complain about?',
   a:['Silk, and the cost of shipping it',
      'Pepper, and the gold draining out of the empire to pay for it',
      'Cotton, and the quality of the weaving',
      'Sugar, and the tax on it'],
   c:1, why:'Pepper, in bulk, through Muziris. Pliny the Elder put the drain to India, China and Arabia at a hundred million sesterces a year.'},
  {q:'Which of these reached India on Portuguese ships after 1498?',
   a:['Black pepper', 'Cardamom', 'Chilli', 'Turmeric'],
   c:2, why:'Chilli, along with cashew, pineapple, papaya, tomato and later tapioca, all came from the Americas. Pepper, cardamom and turmeric were already here.'},
  {q:'Why does Kerala eat beef when most of India does not?',
   a:['A colonial-era law that was never repealed',
      'Christians and Muslims together make up about 45% of the population',
      'Cattle are not farmed elsewhere in India',
      'It was introduced by the Dutch in the 1660s'],
   c:1, why:'The communities that settled on this coast over eleven centuries are the reason. Beef fry with parotta is a roadside staple here and unthinkable in Rajasthan.'}
 ]
];
