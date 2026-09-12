/* Masala Dabba — recipes for Kerala (IN-KER). Contract: docs/recipe-format.md.
   Both languages live in the same file so a quantity is written exactly once and cannot drift.
   Recipes are never narrated: narrate.py only ever sees a reading's html. */
window.RECIPES = window.RECIPES || {};
window.RECIPES['IN-KER'] = [

{
  id:'meen-curry', dish:'Meen curry', course:'main', lesson:3, serves:4, veg:false,
  time:{prep:20, cook:30}, hero:'meen-curry', tags:['fish','kudampuli','clay pot'],
  title:{en:'Meen curry', no:'Meen curry'},
  blurb:{en:'The everyday Kerala fish curry: thin, red, sharply sour, and better tomorrow.',
         no:'Keralas hverdagskarri med fisk: tynn, rød, skarpt sur, og bedre i morgen.'},
  heroCaption:{en:'Meen curry in an unglazed clay pot. The gravy should coat a spoon, not pool like a sauce.',
               no:'Meen curry i uglasert leirgryte. Sausen skal legge seg på en skje, ikke ligge som en saus.'},
  goesWith:[{en:'Red matta rice, or plain boiled rice', no:'Rød mattaris, eller vanlig kokt ris'},
            {en:'A thoran of green beans', no:'En thoran av grønne bønner'}],
  headnote:{
    en:`<p>This is the dish a coastal household in Kerala cooks most often, and almost nothing about it matches what a European expects from an Indian fish curry. There is no coconut milk in the strictest version, no cream, no tomato and no thick gravy. What there is instead is a great deal of shallot, a fistful of dried red chilli for colour, and kudampuli, the smoked rind that sours it.</p>
<p>The sourness is doing real work. Kudampuli firms the flesh of the fish rather than breaking it down, and it keeps the curry edible for two or three days in a hot climate without a fridge. That is why a Kerala cook makes it in the evening for tomorrow's lunch, and why the second day genuinely tastes better than the first.</p>
<p>Cook it in unglazed clay if you have a pot. Clay holds a low heat gently, which suits a gravy that must never boil hard once the fish is in, and a seasoned pot carries something of every curry made in it before. A heavy steel or enamelled pan is a fair substitute. A thin one is not.</p>`,
    no:`<p>Dette er den retten en kysthusholdning i Kerala lager oftest, og nesten ingenting ved den stemmer med det en europeer venter seg av en indisk fiskekarri. Den strengeste versjonen inneholder verken kokosmelk, fløte, tomat eller tykk saus. I stedet inneholder den svært mye sjalottløk, en neve tørket rød chili for fargen, og kudampuli, det røkte skallet som syrner den.</p>
<p>Syren gjør en reell jobb. Kudampuli strammer opp fiskekjøttet i stedet for å bryte det ned, og den holder karrien spiselig i to-tre dager i varmt klima uten kjøleskap. Derfor lager en kokk i Kerala den om kvelden til lunsj dagen etter, og derfor smaker den andre dagen virkelig bedre enn den første.</p>
<p>Bruk uglasert leirgryte hvis du har en. Leire holder på lav varme forsiktig, og det passer en saus som aldri skal fosskoke etter at fisken har gått i. En tung stålgryte eller en emaljert jerngryte gjør nesten samme nytte. En tynn gjør det ikke.</p>`},
  ingredients:[{group:{en:'', no:''}, items:[
    {q:600, u:'g', n:{en:'firm white fish, in thick pieces', no:'fast hvit fisk, i tykke stykker'}, note:{en:'sei, cod cheek, monkfish or kingfish', no:'sei, torsk, breiflabb eller kongemakrell'}},
    {q:5, u:'', n:{en:'pieces of kudampuli', no:'biter kudampuli'}, round:'half', note:{en:'rinsed, soaked 10 minutes', no:'skylt, bløtlagt i 10 minutter'}},
    {q:200, u:'g', n:{en:'shallots', no:'sjalottløk'}, note:{en:'thinly sliced', no:'tynt skivet'}},
    {q:25, u:'g', n:{en:'ginger', no:'ingefær'}, note:{en:'in matchsticks', no:'i tynne staver'}},
    {q:20, u:'g', n:{en:'garlic', no:'hvitløk'}, note:{en:'sliced', no:'skivet'}},
    {q:3, u:'', n:{en:'green chillies', no:'grønne chili'}, round:'half', note:{en:'slit lengthways', no:'flekket på langs'}},
    {q:2, u:'', n:{en:'sprigs of curry leaf', no:'kvister karriblad'}, round:'half'},
    {q:18, u:'g', n:{en:'Kashmiri chilli powder', no:'Kashmiri chilipulver'}, note:{en:'for colour, not heat', no:'for fargen, ikke styrken'}},
    {q:5, u:'g', n:{en:'turmeric', no:'gurkemeie'}},
    {q:3, u:'g', n:{en:'fenugreek seed', no:'bukkehornkløverfrø'}},
    {q:8, u:'g', n:{en:'black mustard seed', no:'svarte sennepsfrø'}},
    {q:45, u:'ml', n:{en:'coconut oil', no:'kokosolje'}},
    {q:500, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
  ]}],
  steps:[
    {en:'Rinse the kudampuli under the tap and leave it to soak in a little warm water while you cut everything else.',
     no:'Skyll kudampulien under springen og la den ligge i litt varmt vann mens du skjærer resten.'},
    {en:'Warm the coconut oil in a clay or heavy pan over a medium flame. Add the mustard seed and wait until it pops.',
     no:'Varm kokosoljen i en leirgryte eller en tung panne på middels varme. Ha i sennepsfrøene og vent til de spretter.'},
    {en:'Add the fenugreek seed, then at once the shallot, ginger, garlic, green chilli and one sprig of curry leaf. Cook gently until the shallot is soft and translucent, about eight minutes. It must not brown.',
     no:'Ha i bukkehornkløveren, og straks etter sjalottløk, ingefær, hvitløk, grønn chili og én kvist karriblad. La det surre til løken er myk og gjennomsiktig, omtrent åtte minutter. Den skal ikke brunes.'},
    {en:'Pull the pan off the heat and stir in the chilli powder and turmeric. Off the heat, they colour the oil instead of burning in it.',
     no:'Trekk pannen av platen og rør inn chilipulveret og gurkemeien. Med kjelen av platen farger de oljen i stedet for å svi seg i den.'},
    {en:'Return the pan, add the water and the soaked kudampuli with its soaking water, and salt it. Simmer uncovered for ten minutes, until the gravy darkens and thickens a little.',
     no:'Sett pannen tilbake, ha i vannet og den bløtlagte kudampulien med bløtevannet, og salt. La det småkoke uten lokk i ti minutter, til sausen mørkner og tykner litt.'},
    {en:'Slide in the fish in a single layer. Do not stir with a spoon from here on; swirl the pan instead, or the pieces break.',
     no:'Legg fisken i ett lag. Ikke rør med skje fra nå av; sving heller på pannen, ellers går stykkene i stykker.'},
    {en:'Simmer very gently, barely bubbling, for eight to ten minutes, until the fish is just set through.',
     no:'La det småkoke svært forsiktig, så vidt boblende, i åtte til ti minutter, til fisken akkurat er gjennomkokt.'},
    {en:'Taste for salt and sour. If it is too sharp, a few minutes more simmering rounds it; if it is flat, leave the kudampuli in longer.',
     no:'Smak til med salt og syre. Er den for skarp, runder noen minutter til på platen den av; er den flat, la kudampulien ligge lenger.'},
    {en:'Scatter the second sprig of curry leaf over, cover, and take the pan off the heat. Leave it to stand at least twenty minutes before serving.',
     no:'Strø den andre kvisten karriblad over, legg på lokk og ta pannen av platen. La den stå i minst tjue minutter før servering.'},
    {en:'Serve with red matta rice. Tomorrow it will be better still, and it does not need reheating past warm.',
     no:'Server med rød mattaris. I morgen er den enda bedre, og den trenger ikke varmes opp til mer enn lunken.'}],
  notes:[
    {title:{en:'Why the chilli goes in off the heat', no:'Hvorfor chilien går i med kjelen av platen'},
     body:{en:'Ground chilli and turmeric burn at a much lower temperature than whole spices, and burnt chilli powder is bitter in a way nothing later can fix. Pulling the pan off for fifteen seconds costs nothing and removes the risk entirely.',
           no:'Malt chili og gurkemeie svir seg ved langt lavere temperatur enn hele krydder, og svidd chilipulver er bittert på en måte ingenting senere retter opp. Å trekke pannen av i femten sekunder koster ingenting og fjerner risikoen helt.'}},
    {title:{en:'Why it improves overnight', no:'Hvorfor den blir bedre over natten'},
     body:{en:'The acid in the kudampuli keeps working on the fish and the gravy after the heat is off, and the shallot sweetness has time to come forward. This is the opposite of how a European treats cooked fish, and it is worth trusting.',
           no:'Syren i kudampulien fortsetter å arbeide på fisken og sausen etter at varmen er skrudd av, og sødmen fra sjalottløken får tid til å komme fram. Dette er det motsatte av hvordan en europeer behandler kokt fisk, og det er verdt å stole på.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Kudampuli is sold in Indian shops as kudampuli, fish tamarind or, confusingly, kokum, and the three are not the same fruit. Ask for the black, leathery, smoked kind from Kerala.',
           no:'Kudampuli selges i indiske butikker som kudampuli, fish tamarind eller, forvirrende nok, kokum, og de tre er ikke den samme frukten. Spør etter den svarte, læraktige og røkte varianten fra Kerala. Sei fra fiskedisken er en bedre fisk til denne retten enn laks, som blir for fet og faller fra hverandre.'}}],
  variations:[
    {title:{en:'With coconut milk', no:'Med kokosmelk'},
     body:{en:'Many houses make a softer version. Use half the water, and stir in thick coconut milk with the heat off once the fish is cooked. It becomes a different dish, milder and rounder, and it does not keep as well.',
           no:'Mange hus lager en mykere utgave. Bruk halvparten så mye vann, og rør inn tykk kokosmelk med varmen av når fisken er ferdig. Det blir en annen rett, mildere og rundere, og den holder seg ikke like lenge.'}},
    {title:{en:'Prawns instead of fish', no:'Reker i stedet for fisk'},
     body:{en:'Raw shell-on prawns work very well and need only four minutes. Add them at the same point and stop as soon as they turn opaque.',
           no:'Rå reker med skall fungerer svært godt og trenger bare fire minutter. Ha dem i på samme tidspunkt og stopp så snart de blir ugjennomsiktige.'}}]
},

{
  id:'appam-ishtu', dish:'Appam with stew', course:'main', lesson:3, serves:4, veg:false,
  time:{prep:30, cook:45}, hero:'appam-stew', tags:['fermented','coconut milk','Syrian Christian'],
  title:{en:'Appam with stew', no:'Appam med stuing'},
  blurb:{en:'A fermented rice pancake, lacy at the rim, with the white stew that has no chilli powder in it.',
         no:'En gjæret rispannekake med blondekant, og den hvite stuingen uten chilipulver i.'},
  heroCaption:{en:'Appam with chicken stew. The thin rim goes crisp, the thick middle holds the gravy.',
               no:'Appam med kyllingstuing. Den tynne kanten blir sprø, og den tykke midten holder på sausen.'},
  goesWith:[{en:'Nothing else. This is a whole meal', no:'Ingenting mer. Dette er et helt måltid'}],
  headnote:{
    en:`<p>Two things are happening here, and they come from the same kitchens: the Syrian Christian houses of central Travancore. The batter ferments overnight, which is what gives appam its sour edge and its holes, and the stew is deliberately built without chilli powder so that the whole spices can be tasted.</p>
<p>That mildness surprises people who expect Kerala to be fierce. These families have had cardamom and pepper growing within sight of the house for centuries. A dish made to show them off has no reason to bury them.</p>
<p>Start the batter the night before. Everything else takes under an hour, and the stew is better if it stands for twenty minutes before it is eaten.</p>`,
    no:`<p>To ting skjer her, og begge kommer fra de samme kjøkkenene: de syrisk-kristne husene i Travancore. Røren gjærer over natten, og det gir appamen både syrlighet og hull, og stuingen er bevisst laget uten chilipulver slik at de hele krydderne kan smakes.</p>
<p>Mildheten overrasker folk som venter seg at Kerala skal være hissig. Disse familiene har hatt kardemomme og pepper voksende innen synsvidde i århundrer. En rett som er laget for å vise dem fram, har ingen grunn til å begrave dem.</p>
<p>Sett røren kvelden før. Alt annet tar under en time, og stuingen blir bedre hvis den får stå i tjue minutter før den spises.</p>`},
  ingredients:[
   {group:{en:'The appam batter', no:'Appamrøren'}, items:[
    {q:300, u:'g', n:{en:'raw short-grain rice', no:'rå kortkornet ris'}, note:{en:'soaked 4 hours, or use rice flour', no:'bløtlagt i 4 timer, eller bruk rismel'}},
    {q:80, u:'g', n:{en:'cooked rice', no:'kokt ris'}},
    {q:120, u:'g', n:{en:'grated coconut', no:'revet kokos'}, note:{en:'frozen is fine, desiccated is not', no:'frossen går fint, tørket gjør det ikke'}},
    {q:3, u:'g', n:{en:'dried yeast', no:'tørrgjær'}},
    {q:25, u:'g', n:{en:'sugar', no:'sukker'}},
    {q:350, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]},
   {group:{en:'The stew', no:'Stuingen'}, items:[
    {q:600, u:'g', n:{en:'chicken thigh', no:'kyllinglår'}, note:{en:'boned, in large pieces', no:'utbenet, i store biter'}},
    {q:250, u:'g', n:{en:'shallots', no:'sjalottløk'}, note:{en:'thickly sliced', no:'tykt skivet'}},
    {q:250, u:'g', n:{en:'waxy potatoes', no:'fastkokende poteter'}, note:{en:'in large chunks', no:'i store biter'}},
    {q:30, u:'g', n:{en:'ginger', no:'ingefær'}, note:{en:'in matchsticks', no:'i tynne staver'}},
    {q:4, u:'', n:{en:'green chillies', no:'grønne chili'}, round:'half', note:{en:'slit lengthways', no:'flekket på langs'}},
    {q:6, u:'', n:{en:'green cardamom pods', no:'grønne kardemommekapsler'}, round:'half', note:{en:'bruised', no:'lett knust'}},
    {q:6, u:'', n:{en:'cloves', no:'nellikspiker'}, round:'half'},
    {q:1, u:'', n:{en:'piece of cinnamon bark', no:'bit kanelbark'}, round:'half'},
    {q:2, u:'', n:{en:'sprigs of curry leaf', no:'kvister karriblad'}, round:'half'},
    {q:500, u:'ml', n:{en:'thin coconut milk', no:'tynn kokosmelk'}, note:{en:'the watery part of the can, or the second pressing', no:'den tynne delen av boksen, eller andre pressing'}},
    {q:200, u:'ml', n:{en:'thick coconut milk', no:'tykk kokosmelk'}, note:{en:'the cream from the top of an unshaken can', no:'kremen øverst i en uristet boks'}},
    {q:30, u:'ml', n:{en:'coconut oil', no:'kokosolje'}},
    {u:'', n:{en:'black pepper, coarsely cracked', no:'grovt knust svart pepper'}, scale:'none'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'The night before, drain the soaked rice and grind it with the cooked rice, the coconut and enough of the water to give a smooth batter the thickness of double cream.',
     no:'Kvelden før: hell av bløtevannet, og kjør risen sammen med den kokte risen, kokosen og nok av vannet til at røren blir glatt og omtrent så tykk som kremfløte.'},
    {en:'Stir in the yeast and the sugar, cover loosely and leave in a warm place overnight. By morning it should have risen and smell faintly sour.',
     no:'Rør inn gjæren og sukkeret, dekk løst til og la det stå lunt over natten. Om morgenen skal røren ha hevet seg og lukte svakt surt.'},
    {en:'For the stew, warm the coconut oil in a wide pan and add the cardamom, clove and cinnamon. Wait until they smell, about thirty seconds.',
     no:'Til stuingen: varm kokosoljen i en vid panne og ha i kardemomme, nellik og kanel. Vent til det dufter, omtrent tretti sekunder.'},
    {en:'Add the shallot, ginger, green chilli and one sprig of curry leaf. Cook over a low flame until the shallot collapses but stays pale, about ten minutes.',
     no:'Ha i sjalottløk, ingefær, grønn chili og én kvist karriblad. La det surre på lav varme til løken faller sammen men holder seg lys, omtrent ti minutter.'},
    {en:'Add the chicken, the potato and the thin coconut milk. Salt it, bring it to a bare simmer and cook covered for twenty-five minutes, until the potato yields to a knife.',
     no:'Ha i kyllingen, potetene og den tynne kokosmelken. Salt, la det så vidt småkoke og kok under lokk i tjuefem minutter, til potetene gir etter for en kniv.'},
    {en:'Turn off the heat. Stir in the thick coconut milk, the cracked pepper and the second sprig of curry leaf, and leave to stand. It must not boil again.',
     no:'Skru av varmen. Rør inn den tykke kokosmelken, den knuste pepperen og den andre kvisten karriblad, og la det stå. Det skal ikke koke opp igjen.'},
    {en:'Salt the batter and thin it with water until it just coats a spoon. Heat a small round-bottomed pan over a medium flame and wipe it with oil.',
     no:'Salt røren og spe med vann til den så vidt legger seg på en skje. Varm en liten rundbunnet panne på middels varme og tørk den over med olje.'},
    {en:'Pour in a ladle of batter and immediately swirl the pan in a full circle so the batter runs thin up the sides and settles thick in the middle.',
     no:'Hell i en sleiv med røre og sving pannen straks rundt i en hel sirkel, så røren renner tynt opp langs sidene og legger seg tykk i midten.'},
    {en:'Cover and cook for two to three minutes, until the rim lifts away golden and lacy and the centre is set and spongy. Do not turn it.',
     no:'Legg på lokk og stek i to-tre minutter, til kanten slipper og er gyllen og blondeaktig og midten er stivnet og svampete. Ikke snu den.'},
    {en:'Repeat with the rest of the batter, and serve the appams as they come, with the stew ladled into the hollow.',
     no:'Gjenta med resten av røren, og server appamene etter hvert som de blir ferdige, med stuingen øst ned i fordypningen.'}],
  notes:[
    {title:{en:'Why the thick milk goes in off the heat', no:'Hvorfor den tykke melken går i med kjelen av platen'},
     body:{en:'Thick coconut milk is an emulsion, and boiling breaks it into oil and grainy curds. Thin milk has little enough fat to survive a simmer, which is exactly why Kerala separates the two and uses them at different moments.',
           no:'Tykk kokosmelk er en emulsjon, og koking skiller den i olje og kornete klumper. Tynn melk har så lite fett at den tåler å småkoke, og nettopp derfor skiller Kerala de to og bruker dem på hvert sitt tidspunkt.'}},
    {title:{en:'Why the pan must be round-bottomed', no:'Hvorfor pannen må ha rund bunn'},
     body:{en:'The whole point of appam is one bread with two textures, and that only happens if the batter can run thin at the edge and pool in the middle. A flat pan gives you a pancake of even thickness, which is a perfectly good thing but is not appam.',
           no:'Hele poenget med appam er ett brød med to konsistenser, og det skjer bare hvis røren kan renne tynt ut i kanten og samle seg i midten. En flat panne gir en pannekake med jevn tykkelse, og det er helt greit, men det er ikke appam.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Buy full-fat tinned coconut milk and do not shake the tin: the thick cream sits at the top and the thin milk underneath, which gives you both without buying two products.',
           no:'Kjøp kokosmelk på boks med fullt fettinnhold og ikke rist boksen: den tykke kremen ligger øverst og den tynne melken under, så du får begge deler av ett produkt. Kokosmelk merket «light» gir ingen tykk del i det hele tatt. Frossen revet kokos fra asiatiske butikker er riktig vare; tørket kokosmasse fra bakehyllen er det ikke.'}}],
  variations:[
    {title:{en:'Vegetable stew', no:'Grønnsakstuing'},
     body:{en:'Leave the chicken out and use carrot, green beans and more potato, cut large. Cook it for fifteen minutes rather than twenty-five. It is the version served at Easter breakfast in many houses.',
           no:'Sløyf kyllingen og bruk gulrot, grønne bønner og mer potet, skåret stort. Kok det i femten minutter i stedet for tjuefem. Det er utgaven som serveres til påskefrokost i mange hus.'}},
    {title:{en:'Raised with toddy', no:'Hevet med toddy'},
     body:{en:'The old method uses fresh palm toddy instead of yeast and sugar, because the sap is already fermenting. If you can find it, use enough to replace half the water and leave out the yeast.',
           no:'Den gamle metoden bruker fersk palmetoddy i stedet for gjær og sukker, fordi saften allerede gjærer. Finner du den, bruk nok til å erstatte halve vannmengden og sløyf gjæren.'}}]
},

{
  id:'avial', dish:'Avial', course:'side', lesson:3, serves:4, veg:true,
  time:{prep:20, cook:20}, hero:'avial', tags:['vegetarian','coconut','sadya'],
  title:{en:'Avial', no:'Avial'},
  blurb:{en:'Mixed vegetables held together by a coconut and cumin paste, finished with curd and raw coconut oil.',
         no:'Blandede grønnsaker holdt sammen av en pasta av kokos og spisskummen, avsluttet med syrnet melk og rå kokosolje.'},
  heroCaption:{en:'Avial. Nothing is fried and nothing browns, so the finished dish stays pale and fresh.',
               no:'Avial. Ingenting stekes og ingenting brunes, så den ferdige retten holder seg lys og frisk.'},
  goesWith:[{en:'Red matta rice and a pappadam', no:'Rød mattaris og en pappadam'},
            {en:'Any sadya, where it is one of the fixed dishes', no:'Enhver sadya, der den er en av de faste rettene'}],
  headnote:{
    en:`<p>Avial is the dish to cook first if you want to understand vegetarian Kerala. It is not a curry. Nothing is fried, no onion is browned, no spice is toasted, and the result is pale, thick and tasting distinctly of each vegetable rather than of a sauce.</p>
<p>The vegetables are cut into batons of the same length so they cook evenly and can be picked up, and they are cooked in barely any water so they steam rather than boil. The coconut paste goes in at the end to bind, the curd goes in after that for acidity, and a spoonful of raw coconut oil finishes it off the heat.</p>
<p>That last spoonful is the part outsiders leave out, and it is doing what a good olive oil does over a Tuscan soup. Without it the dish tastes flat, and no amount of salt fixes it.</p>`,
    no:`<p>Avial er retten du bør lage først hvis du vil forstå det vegetariske Kerala. Den er ingen karri. Ingenting stekes, ingen løk brunes, ingen krydder ristes, og resultatet er lyst, tykt og smaker tydelig av hver enkelt grønnsak i stedet for av en saus.</p>
<p>Grønnsakene skjæres i staver av samme lengde så de blir ferdige samtidig og lar seg plukke opp, og de kokes i nesten ikke vann, så de damper i stedet for å koke. Kokospastaen går i til slutt for å binde, den syrnede melken kommer etter den for syren, og en skje rå kokosolje avslutter retten med kjelen av platen.</p>
<p>Den siste skjeen er den delen utlendinger sløyfer, og den gjør det samme som god olivenolje gjør over en toskansk suppe. Uten den smaker retten flatt, og ingen mengde salt retter opp i det.</p>`},
  ingredients:[
   {group:{en:'', no:''}, items:[
    {q:700, u:'g', n:{en:'mixed vegetables', no:'blandede grønnsaker'}, note:{en:'carrot, green beans, potato, courgette, plantain: batons 5 cm long', no:'gulrot, grønne bønner, potet, squash, kokebanan: staver på 5 cm'}},
    {q:5, u:'g', n:{en:'turmeric', no:'gurkemeie'}},
    {q:3, u:'', n:{en:'green chillies', no:'grønne chili'}, round:'half', note:{en:'slit lengthways', no:'flekket på langs'}},
    {q:150, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]},
   {group:{en:'The paste', no:'Pastaen'}, items:[
    {q:180, u:'g', n:{en:'grated coconut', no:'revet kokos'}},
    {q:4, u:'g', n:{en:'cumin seed', no:'spisskummenfrø'}},
    {q:2, u:'', n:{en:'green chillies', no:'grønne chili'}, round:'half'},
   ]},
   {group:{en:'To finish', no:'Til slutt'}, items:[
    {q:180, u:'g', n:{en:'sour natural yoghurt', no:'sur naturell yoghurt'}, note:{en:'whisked smooth and slack', no:'pisket glatt og tyntflytende'}},
    {q:30, u:'ml', n:{en:'raw coconut oil', no:'rå kokosolje'}},
    {q:2, u:'', n:{en:'sprigs of curry leaf', no:'kvister karriblad'}, round:'half'},
   ]}],
  steps:[
    {en:'Cut every vegetable into batons about five centimetres long and a centimetre thick, keeping the harder ones separate from the softer ones.',
     no:'Skjær hver grønnsak i staver på omtrent fem centimeter og en centimeter tykke, og hold de faste atskilt fra de myke.'},
    {en:'Put the hard vegetables in a wide pan with the turmeric, the slit chillies, the water and salt. Cover and cook over a medium flame for six minutes.',
     no:'Legg de faste grønnsakene i en vid panne med gurkemeie, de flekkede chiliene, vannet og salt. Legg på lokk og kok på middels varme i seks minutter.'},
    {en:'Add the softer vegetables, cover again and cook until everything is just tender, about six minutes more. Shake the pan rather than stirring, so the batons stay whole.',
     no:'Ha i de myke grønnsakene, legg på lokk igjen og kok til alt akkurat er mørt, omtrent seks minutter til. Rist på pannen i stedet for å røre, så stavene holder seg hele.'},
    {en:'While they cook, grind the coconut, cumin and remaining green chilli to a coarse paste with a very little water. It should hold together, not pour.',
     no:'Mens de koker: kjør kokos, spisskummen og resten av den grønne chilien til en grov pasta med svært lite vann. Den skal henge sammen, ikke renne.'},
    {en:'Spoon the paste over the vegetables, cover and leave over the lowest heat for four minutes so it warms through without drying out.',
     no:'Fordel pastaen over grønnsakene, legg på lokk og la det stå på lavest mulig varme i fire minutter, så den varmes gjennom uten å tørke ut.'},
    {en:'Fold everything together gently. The paste should coat the vegetables and leave almost no liquid in the pan.',
     no:'Vend alt forsiktig sammen. Pastaen skal legge seg rundt grønnsakene og etterlate nesten ingen væske i pannen.'},
    {en:'Take the pan off the heat and wait a minute. Then fold in the whisked yoghurt, which will split if the pan is still hot.',
     no:'Ta pannen av platen og vent et minutt. Vend så inn den piskede yoghurten, som skiller seg hvis pannen fortsatt er varm.'},
    {en:'Pour the raw coconut oil over, scatter the curry leaves on top, cover, and leave for five minutes before serving warm rather than hot.',
     no:'Hell den rå kokosoljen over, strø karribladene på toppen, legg på lokk og la det stå i fem minutter. Server lunkent, ikke rykende varmt.'}],
  notes:[
    {title:{en:'Why the curd goes in off the heat', no:'Hvorfor den syrnede melken går i med kjelen av platen'},
     body:{en:'Yoghurt curdles above about 85 °C unless it is stabilised with flour or starch, and avial has neither. Take the pan off, wait, then fold it in, and the dish stays smooth.',
           no:'Yoghurt skiller seg over omtrent 85 °C med mindre den er stabilisert med mel eller stivelse, og avial har ingen av delene. Ta pannen av, vent, og vend den så inn, så holder retten seg glatt.'}},
    {title:{en:'Why nothing is fried', no:'Hvorfor ingenting stekes'},
     body:{en:'Browning creates one dominant flavour and this dish is built on the opposite principle: eight vegetables that still taste of themselves. It is the clearest example in the course of a technique defined by what it refuses to do.',
           no:'Bruning skaper én dominerende smak, og denne retten bygger på det motsatte prinsippet: åtte grønnsaker som fortsatt smaker av seg selv. Det er det tydeligste eksempelet i kurset på en teknikk som er definert av hva den lar være å gjøre.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Frozen grated coconut from an Asian shop is the right thing. Desiccated coconut from the baking aisle is dry and sweetened and will not grind to a paste.',
           no:'Frossen revet kokos fra en asiatisk butikk er riktig vare. Tørket kokosmasse fra bakehyllen er tørr og ofte sukret, og den lar seg ikke kjøre til pasta. Norsk yoghurt naturell er tykkere enn indisk dahi, så pisk den ut med litt vann. Kokebanan finner du i butikkene på Grønland; er den ikke å oppdrive, gir fast potet og litt mer gulrot et godt nok resultat.'}}],
  variations:[
    {title:{en:'Sadya avial', no:'Sadya-avial'},
     body:{en:'For a feast, use raw plantain, yam, ash gourd and drumstick, and add a little sour mango instead of the yoghurt. It is drier and firmer, which suits a leaf where nothing should run.',
           no:'Til et festmåltid: bruk rå kokebanan, yams, vintermelon og drumstick, og tilsett litt sur mango i stedet for yoghurten. Den blir tørrere og fastere, og det passer på et blad der ingenting skal renne.'}},
    {title:{en:'With whatever is in the fridge', no:'Med det som er i kjøleskapet'},
     body:{en:'Avial is a clearing-out dish and the vegetable list is a suggestion. Keep two rules: cut everything the same size, and do not use anything that falls apart, which rules out tomato and aubergine.',
           no:'Avial er en rydderett, og lista over grønnsaker er et forslag. Hold to regler: skjær alt like stort, og bruk ikke noe som faller fra hverandre, og det utelukker tomat og aubergine.'}}]
},

{
  id:'puttu-kadala', dish:'Puttu-kadala', course:'breakfast', lesson:2, serves:4, veg:true,
  time:{prep:20, cook:40}, hero:'puttu', tags:['vegetarian','steamed','breakfast'],
  title:{en:'Puttu and kadala curry', no:'Puttu og kadala-karri'},
  blurb:{en:'Steamed rice flour layered with coconut, with a dark curry of black chickpeas.',
         no:'Dampet rismel lagt lagvis med kokos, og en mørk karri av svarte kikerter.'},
  heroCaption:{en:'Puttu with kadala curry and a banana. Breaking the cylinder apart is part of eating it.',
               no:'Puttu med kadala-karri og banan. Å bryte sylinderen fra hverandre er en del av måltidet.'},
  goesWith:[{en:'A small ripe banana, which is how it is eaten in Kerala', no:'En liten moden banan, slik den spises i Kerala'},
            {en:'Strong milky tea', no:'Sterk te med melk'}],
  headnote:{
    en:`<p>Puttu is the plainest thing in this course and the hardest to get right, because there is nothing in it to hide behind. Rice flour, water, salt, grated coconut and steam. No fat, no leavening, no egg.</p>
<p>Everything depends on the moisture of the flour. Too dry and the cylinder crumbles to sand when it comes out; too wet and it steams into a solid paste. The test a Kerala cook uses is simple: squeeze a fistful, and it should hold its shape and then fall apart when you rub it between your fingers.</p>
<p>The kadala curry beside it is dark, thick and roasted, and it is the counterweight. Black chickpeas are earthier and firmer than the pale ones, and the coconut in the gravy is browned rather than fresh, which is the opposite of what happens in avial.</p>`,
    no:`<p>Puttu er det enkleste i hele dette kurset og det vanskeligste å få til, for det finnes ingenting å gjemme seg bak. Rismel, vann, salt, revet kokos og damp. Verken fett, hevemiddel eller egg.</p>
<p>Alt henger på fuktigheten i melet. Er det for tørt, smuldrer sylinderen til sand når den kommer ut; er det for vått, damper den seg til en kompakt masse. Prøven en kokk i Kerala bruker, er enkel: klem sammen en neve, og den skal holde formen og så falle fra hverandre når du gnir den mellom fingrene.</p>
<p>Kadala-karrien ved siden av er mørk, tykk og ristet, og den er motvekten. Svarte kikerter er jordaktige og fastere enn de lyse, og kokosen i sausen brunes i stedet for å brukes fersk, og det er det motsatte av det som skjer i avial.</p>`},
  ingredients:[
   {group:{en:'The puttu', no:'Puttuen'}, items:[
    {q:400, u:'g', n:{en:'roasted rice flour', no:'ristet rismel'}, note:{en:'sold as puttu podi', no:'selges som puttu podi'}},
    {q:220, u:'ml', n:{en:'warm water', no:'lunkent vann'}, scale:'sub', note:{en:'added a little at a time', no:'has i litt om gangen'}},
    {q:150, u:'g', n:{en:'grated coconut', no:'revet kokos'}},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]},
   {group:{en:'The kadala curry', no:'Kadala-karrien'}, items:[
    {q:300, u:'g', n:{en:'dried black chickpeas', no:'tørkede svarte kikerter'}, note:{en:'soaked overnight', no:'bløtlagt over natten'}},
    {q:120, u:'g', n:{en:'grated coconut', no:'revet kokos'}, note:{en:'for the roasted paste', no:'til den ristede pastaen'}},
    {q:200, u:'g', n:{en:'shallots', no:'sjalottløk'}, note:{en:'sliced', no:'skivet'}},
    {q:20, u:'g', n:{en:'ginger', no:'ingefær'}},
    {q:15, u:'g', n:{en:'garlic', no:'hvitløk'}},
    {q:15, u:'g', n:{en:'coriander powder', no:'malt koriander'}},
    {q:8, u:'g', n:{en:'Kashmiri chilli powder', no:'Kashmiri chilipulver'}},
    {q:4, u:'g', n:{en:'turmeric', no:'gurkemeie'}},
    {q:4, u:'g', n:{en:'garam masala', no:'garam masala'}},
    {q:8, u:'g', n:{en:'black mustard seed', no:'svarte sennepsfrø'}},
    {q:2, u:'', n:{en:'sprigs of curry leaf', no:'kvister karriblad'}, round:'half'},
    {q:45, u:'ml', n:{en:'coconut oil', no:'kokosolje'}},
    {q:600, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Boil the soaked chickpeas in salted water until tender but not bursting, about forty minutes, or twenty in a pressure cooker. Keep the cooking water.',
     no:'Kok de bløtlagte kikertene i saltet vann til de er møre uten å sprekke, omtrent førti minutter, eller tjue i trykkoker. Ta vare på kokevannet.'},
    {en:'Dry-roast the coconut for the paste in a pan over a medium flame, stirring constantly, until it is an even dark brown and smells of toffee. Grind it with a little water to a smooth paste.',
     no:'Rist kokosen til pastaen tørt i en panne på middels varme, under stadig omrøring, til den er jevnt mørkebrun og lukter karamell. Kjør den med litt vann til en glatt pasta.'},
    {en:'In the same pan, warm the coconut oil, pop the mustard seed, then add the shallot, ginger, garlic and one sprig of curry leaf. Cook until the shallot is golden.',
     no:'Varm kokosoljen i samme panne, la sennepsfrøene sprette, og ha så i sjalottløk, ingefær, hvitløk og én kvist karriblad. La det surre til løken er gyllen.'},
    {en:'Pull the pan off the heat, stir in the coriander, chilli and turmeric, then return it and add the chickpeas with their cooking water.',
     no:'Trekk pannen av platen, rør inn koriander, chili og gurkemeie, sett den tilbake og ha i kikertene med kokevannet.'},
    {en:'Stir in the roasted coconut paste, salt it, and simmer for fifteen minutes until the gravy is thick and clings to the chickpeas. Finish with the garam masala and the second sprig of curry leaf.',
     no:'Rør inn den ristede kokospastaen, salt, og la det småkoke i femten minutter til sausen er tykk og henger på kikertene. Avslutt med garam masalaen og den andre kvisten karriblad.'},
    {en:'For the puttu, salt the rice flour and add the warm water a splash at a time, raking it in with your fingers, until a squeezed fistful holds together and then crumbles when rubbed.',
     no:'Til puttuen: salt rismelet og ha i det lunkne vannet litt om gangen mens du river det inn med fingrene, til en sammenklemt neve holder sammen og så smuldrer når du gnir den.'},
    {en:'Rest the damp flour for ten minutes, then rub it through your hands to break up any lumps.',
     no:'La det fuktige melet hvile i ti minutter, og gni det så mellom hendene for å bryte opp klumper.'},
    {en:'Fill the puttu cylinder in layers: a spoonful of coconut, then flour to a third of the way, coconut again, more flour, and coconut on top. Never press it down.',
     no:'Fyll puttusylinderen lagvis: en skje kokos, så mel til en tredel, kokos igjen, mer mel, og kokos øverst. Trykk aldri sammen.'},
    {en:'Steam over boiling water for eight to ten minutes, until steam comes freely out of the top.',
     no:'Damp over kokende vann i åtte til ti minutter, til dampen kommer fritt ut på toppen.'},
    {en:'Push the cylinder out onto a plate, break it open with a spoon, and serve at once with the curry and a banana.',
     no:'Skyv sylinderen ut på en tallerken, bryt den opp med en skje, og server straks med karrien og en banan.'}],
  notes:[
    {title:{en:'Why the flour is never pressed', no:'Hvorfor melet aldri trykkes sammen'},
     body:{en:'Steam has to travel up through the cylinder, and packed flour blocks it, so the middle stays raw while the ends overcook. Loose filling is the whole technique.',
           no:'Dampen må komme seg opp gjennom sylinderen, og sammenpakket mel stenger den ute, så midten forblir rå mens endene blir overkokt. Løs fylling er hele teknikken.'}},
    {title:{en:'Why the coconut is roasted here and raw in avial', no:'Hvorfor kokosen ristes her og er rå i avial'},
     body:{en:'Roasting turns coconut nutty, dark and slightly bitter, which gives the gravy the depth a pulse dish needs. Fresh coconut does the opposite job and keeps a dish light. The same ingredient, two directions.',
           no:'Risting gjør kokosen nøtteaktig, mørk og litt bitter, og det gir sausen den dybden en belgfruktrett trenger. Fersk kokos gjør den motsatte jobben og holder en rett lett. Samme ingrediens, to retninger.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Look for puttu podi, roasted rice flour, in an Indian shop; ordinary rice flour has to be dry-roasted first.',
           no:'Se etter puttu podi, ristet rismel, i en indisk butikk; vanlig rismel må ristes tørt først. Norsk risgryn eller grøtris kan ikke brukes. Svarte kikerter selges som kala chana eller kadala, og de er noe annet enn de lyse; hermetiske kikerter fra dagligvarebutikken blir for myke.'}}],
  variations:[
    {title:{en:'In a jam jar', no:'I et syltetøyglass'},
     body:{en:'Without a puttu cylinder, layer the flour and coconut loosely in a wide heatproof jar or a small sieve lined with muslin and steam it the same way. It will not be a neat log, and it will taste the same.',
           no:'Har du ingen puttusylinder, kan du legge mel og kokos løst lagvis i et vidt varmefast glass eller en liten sil kledd med klede og dampe det på samme måte. Det blir ingen pen stokk, og det smaker likevel likedan.'}},
    {title:{en:'With a ripe banana mashed in', no:'Med moden banan most i'},
     body:{en:'Children in Kerala often eat puttu with the banana mashed into it and a spoonful of sugar rather than with the curry. It is a different breakfast and a very good one.',
           no:'Barn i Kerala spiser ofte puttu med bananen most i og en skje sukker i stedet for med karrien. Det er en annen frokost, og en svært god en.'}}]
}

];
