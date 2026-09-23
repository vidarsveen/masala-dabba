/* Masala Dabba — recipes for The North-East (IN-NEA). Contract: docs/recipe-format.md.
   Both languages live in the same file so a quantity is written exactly once and cannot drift.
   Recipes are never narrated: narrate.py only ever sees a reading's html.

   Four of the five open by saying what cannot be bought in Norway, because in this region that is
   most of the pantry. Where an ingredient does not travel, the first paragraph says so and the
   recipe is written for what does. */
window.RECIPES = window.RECIPES || {};
window.RECIPES['IN-NEA'] = [

{
  id:'masor-tenga', dish:'Masor tenga', course:'main', lesson:3, serves:4, veg:false,
  time:{prep:15, cook:25}, hero:'outenga', tags:['fish','sour','assam'],
  title:{en:'Masor tenga', no:'Masor tenga'},
  blurb:{en:'A thin, sharply sour fish broth with no chilli heat and almost no fat, on the table in half an hour.',
         no:'En tynn og skarpt sur fiskekraft uten chilistyrke og nesten uten fett, på bordet på en halvtime.'},
  heroCaption:{en:'Outenga, the elephant apple that sours the broth in Assam. No freely licensed photograph of the finished dish exists, so this is the ingredient that defines it.',
               no:'Outenga, frukten som syrner kraften i Assam. Det finnes ikke noe fritt lisensiert bilde av den ferdige retten, så her er råvaren som avgjør den.'},
  goesWith:[{en:'Plain boiled rice, and plenty of it', no:'Vanlig kokt ris, og rikelig av den'},
            {en:'A spoonful of aloo pitika on the side', no:'En skje aloo pitika ved siden av'}],
  headnote:{
    en:`<p>Take the hard part first. Outenga, the elephant apple that sours this broth in Assam, is not sold in Norway, and neither is thekera, the dried garcinia that stands in for it out of season. Nor is rohu, the pond carp that usually goes in. So this is not masor tenga exactly as Guwahati makes it, and the recipe says so rather than pretending otherwise.</p>
<p>What travels is the shape of the dish, and the shape is the interesting part. The broth is thin, pale yellow and sharply sour. There is no chilli heat, no onion paste, no garam masala and no cream in it, and the whole thing is finished in twenty minutes. Tomato and lemon together give a sourness an Assamese cook would recognise, because tomato is the everyday answer in Assam too.</p>
<p>One thing is worth insisting on: bone-in steaks rather than fillets. A steak cut across the bone holds together in a thin broth, and the bone gives that broth the body it has no fat to supply. Ask the counter to cut the fish across instead of filleting it.</p>`,
    no:`<p>Vi tar det vanskelige først. Outenga, frukten som syrner denne kraften i Assam, selges ikke i Norge, og det gjør heller ikke thekera, den tørkede garciniafrukten som erstatter den utenom sesongen. Rohu, karpefisken som vanligvis går i, får du heller ikke tak i. Dette er altså ikke masor tenga slik Guwahati lager den, og oppskriften sier det rett ut i stedet for å late som.</p>
<p>Formen på retten lar seg derimot flytte, og formen er det interessante. Kraften er tynn, lysegul og skarpt sur. Den har verken chilistyrke, løkpasta, garam masala eller fløte i seg, og hele retten er ferdig på tjue minutter. Tomat og sitron sammen gir en syre en kokk i Assam ville kjent igjen, for tomat er hverdagssvaret der også.</p>
<p>Én ting bør du insistere på, nemlig koteletter med bein i stedet for filet. En kotelett skåret på tvers av beinet holder seg hel i en tynn kraft, og beinet gir kraften den fylden den ikke har fett til å skaffe. Be fiskedisken skjære fisken på tvers i stedet for å filetere den.</p>`},
  ingredients:[
   {group:{en:'', no:''}, items:[
    {q:700, u:'g', n:{en:'firm white fish, in steaks', no:'fast hvit fisk, i koteletter'}, note:{en:'cut across the bone, skin on; coley, cod or a whole trout', no:'skåret på tvers av beinet, med skinn; sei, torsk eller hel ørret'}},
    {q:6, u:'g', n:{en:'turmeric', no:'gurkemeie'}},
    {q:45, u:'ml', n:{en:'mustard oil', no:'sennepsolje'}},
    {q:4, u:'g', n:{en:'fenugreek seed', no:'bukkehornkløverfrø'}},
    {q:350, u:'g', n:{en:'ripe tomatoes', no:'modne tomater'}, note:{en:'in wedges', no:'i båter'}},
    {q:3, u:'', n:{en:'green chillies', no:'grønne chili'}, round:'half', note:{en:'slit lengthways', no:'flekket på langs'}},
    {q:30, u:'ml', n:{en:'lemon juice', no:'sitronsaft'}},
    {q:700, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {q:1, u:'', n:{en:'small bunch of coriander', no:'liten bunt koriander'}, round:'half', scale:'none'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Rub the fish steaks with half the turmeric and a good pinch of salt, and leave them for ten minutes.',
     no:'Gni fiskekotelettene inn med halvparten av gurkemeien og en god klype salt, og la dem ligge i ti minutter.'},
    {en:'Heat mustard oil labelled for food in a wide pan over medium-high heat until it shimmers, then lower the heat.',
     no:'Varm sennepsolje som er merket for mat, i en vid panne på middels høy varme til den skinner, og skru så ned varmen.'},
    {en:'Lay the fish in a single layer and fry it for about a minute a side, only until the surface sets. Lift it out.',
     no:'Legg fisken i ett lag og stek den omtrent ett minutt på hver side, bare til overflaten stivner. Løft den ut.'},
    {en:'Drop the fenugreek seed into the same oil and give it ten seconds, no more. Burnt fenugreek turns a broth bitter and nothing later will fix it.',
     no:'Slipp bukkehornkløveren i den samme oljen og gi den ti sekunder, ikke mer. Svidd bukkehornkløver gjør kraften bitter, og ingenting senere retter det opp.'},
    {en:'Add the tomato wedges and the slit chillies, and cook them until the tomato collapses and the oil comes away at the edge of the pan.',
     no:'Ha i tomatbåtene og de flekkede chiliene, og la det surre til tomaten faller sammen og oljen skiller seg ut langs kanten av pannen.'},
    {en:'Pull the pan off the heat and stir in the rest of the turmeric, so the ground spice colours the oil instead of burning in it.',
     no:'Trekk pannen av platen og rør inn resten av gurkemeien, så det malte krydderet farger oljen i stedet for å svi seg i den.'},
    {en:'Pour in the water, salt it lightly and simmer it uncovered for eight minutes, until it smells sour rather than raw.',
     no:'Hell i vannet, salt lett og la det småkoke uten lokk i åtte minutter, til det lukter surt og ikke rått.'},
    {en:'Slide the fish back in and simmer very gently for five minutes. Swirl the pan instead of stirring, or the steaks break up.',
     no:'Legg fisken tilbake og la det småkoke svært forsiktig i fem minutter. Sving på pannen i stedet for å røre, ellers går kotelettene i stykker.'},
    {en:'Take the pan off the heat and stir in the lemon juice. The broth should be thin, sharply sour and salty enough to drink on its own.',
     no:'Ta pannen av platen og rør inn sitronsaften. Kraften skal være tynn, skarpt sur og salt nok til å drikkes alene.'},
    {en:'Scatter the coriander over and let it stand for five minutes before serving with rice.',
     no:'Strø korianderen over og la retten stå i fem minutter før du serverer den med ris.'}],
  notes:[
    {title:{en:'Why the broth stays thin', no:'Hvorfor kraften skal være tynn'},
     body:{en:'An Assamese cook judges a tenga by how clear it is, not by how much of it clings to a spoon. The broth is meant to be poured over rice and drunk off the plate, so it is never thickened and never reduced hard. Reduce it and you get a sauce, which is a different dish and a duller one.',
           no:'En kokk i Assam dømmer en tenga etter hvor klar den er, ikke etter hvor mye som blir hengende på skjeen. Kraften skal helles over risen og drikkes av tallerkenen, så den jevnes aldri og kokes aldri hardt inn. Koker du den inn, får du en saus, og det er en annen og kjedeligere rett.'}},
    {title:{en:'Fenugreek, and the ten seconds it gets', no:'Bukkehornkløveren, og de ti sekundene den får'},
     body:{en:'Fenugreek is the only seed in this pot that can ruin it. It darkens within seconds, and once it is past golden brown it turns bitter in a way no amount of salt, sour or sugar will cover. Have the tomatoes cut and standing beside the pan before the seed goes in, so you can stop the oil the moment it is ready.',
           no:'Bukkehornkløveren er det eneste frøet i denne gryta som kan ødelegge den. Den mørkner på sekunder, og er den først forbi gyllenbrun, blir den bitter på en måte verken salt, syre eller sukker dekker over. Ha tomatene ferdig skåret ved siden av pannen før frøet går i, så du kan stanse oljen i det øyeblikket den er klar.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Ask the fish counter to cut whatever you buy across the bone rather than filleting it. Coley is cheap, firm and better here than cod, which flakes apart in a thin broth.',
            no:'Be fiskedisken skjære en fast fisk på tvers av beinet, eller bruk tykke filetbiter og kort ned koketiden. Kjøp bare sennepsolje som er tydelig merket for matbruk; «kachi ghani» beskriver pressing og er ikke alene en spiselighetsmerking. Tomat og sitron er den tydelig merkede tilpasningen i kursoppskriften.'}}],
  variations:[
    {title:{en:'With elephant apple, if you ever meet one', no:'Med outenga, om du skulle komme over den'},
     body:{en:'Frozen outenga turns up in a few Asian shops. Cut away the fleshy sepals, simmer them whole with the tomato and leave the lemon out altogether, because the fruit is sour enough on its own.',
           no:'Frossen outenga dukker opp i noen få asiatiske butikker. Skjær av de kjøttfulle begerbladene, kok dem hele sammen med tomaten og sløyf sitronen helt, for frukten er sur nok i seg selv.'}},
    {title:{en:'A tenga without fish', no:'En tenga uten fisk'},
     body:{en:'The same broth is made with cubes of potato and bottle gourd instead of fish, simmered until they are soft. It is thinner and cleaner, and Assamese households eat it in hot weather when nobody wants anything richer.',
           no:'Den samme kraften lages med terninger av potet og flaskegresskar i stedet for fisk, småkokt til de er myke. Den blir tynnere og renere, og husholdninger i Assam spiser den i varmen når ingen orker noe fyldigere.'}},
    {title:{en:'Soured with fermented bamboo', no:'Syrnet med gjærede bambusskudd'},
     body:{en:'A spoonful of fermented bamboo shoot in place of the lemon gives a sourness with a savoury edge behind it. Upper Assam and the hill households do it this way, and the broth turns cloudier and stronger.',
           no:'En skje gjærede bambusskudd i stedet for sitronen gir en syre med en smaksrik kant bak. Øvre Assam og husholdningene i åsene gjør det slik, og kraften blir mer grumsete og kraftigere.'}}]
},

{
  id:'khar', dish:'Khar', course:'side', lesson:3, serves:4, veg:true,
  time:{prep:15, cook:35}, hero:'kolakhar', tags:['assam','alkali','papaya'],
  title:{en:'Khar', no:'Khar'},
  blurb:{en:'A course adaptation of Assamese khar: raw papaya softened with a measured pinch of bicarbonate.',
         no:'En kurstilpasning av assamesisk khar: grønn papaya mørnet med en målt knivsodd natron.'},
  heroCaption:{en:'Khar being filtered: water poured slowly through banana ash. No freely licensed photograph of the finished dish exists, so this is where it starts.',
               no:'Khar blir filtrert, og vannet helles langsomt gjennom bananaske. Det finnes ikke noe fritt lisensiert bilde av den ferdige retten, så her er begynnelsen på den.'},
  goesWith:[{en:'Plain rice, eaten first, before the rest of the meal', no:'Vanlig ris, spist først, før resten av måltidet'},
            {en:'A whole green chilli on the side of the plate', no:'En hel grønn chili på kanten av tallerkenen'}],
  headnote:{
    en:`<p>Traditional kolakhar is a strongly alkaline liquid filtered through ash from suitable dried banana material. Its concentration varies with the material and method. This course does not ask learners to make an untested ash extract at home.</p>
<p>A measured pinch of bicarbonate raises the pH and softens the papaya, but it does not reproduce kolakhar's flavour. The recipe is therefore labelled as an adaptation and keeps the quantity low enough to avoid a harsh alkaline taste.</p>
<p>Khar may appear near the beginning of a formal Assamese meal with rice, while a sour tenga may come later. Keep acidic ingredients out of this pot because they reduce the alkalinity and change the intended texture.</p>`,
    no:`<p>Tradisjonell kolakhar er en sterkt basisk væske filtrert gjennom aske fra egnede, tørkede deler av en bananplante. Styrken varierer med råvare og metode. Kurset ber derfor ikke leseren lage et uprøvd askeuttrekk hjemme.</p>
<p>En målt knivsodd natron hever pH og gjør papayaen mør, men gjenskaper ikke smaken av kolakhar. Oppskriften er tydelig merket som en tilpasning og holder mengden lav for å unngå en hard basisk smak.</p>
<p>Khar kan komme tidlig i et formelt assamesisk måltid med ris, mens en sur tenga kan følge senere. Hold sure råvarer ute av gryta fordi de reduserer basiskheten og endrer den tiltenkte konsistensen.</p>`},
  ingredients:[
   {group:{en:'', no:''}, items:[
    {q:400, u:'g', n:{en:'raw green papaya', no:'grønn papaya'}, note:{en:'peeled, seeded, in walnut-sized cubes', no:'skrelt, renset for frø, i terninger på størrelse med en valnøtt'}},
    {q:250, u:'g', n:{en:'floury potatoes', no:'melne poteter'}, note:{en:'in chunks the same size', no:'i biter av samme størrelse'}},
     {q:1, u:'g', n:{en:'bicarbonate of soda', no:'natron'}, note:{en:'about 1/4 teaspoon; adaptation in place of kolakhar', no:'omtrent 1/4 teskje; tilpasning i stedet for kolakhar'}},
    {q:45, u:'ml', n:{en:'mustard oil', no:'sennepsolje'}},
    {q:100, u:'g', n:{en:'onion', no:'løk'}, note:{en:'sliced fine', no:'finskåret'}},
    {q:1, u:'', n:{en:'dried red chilli', no:'tørket rød chili'}, round:'half'},
    {q:5, u:'g', n:{en:'turmeric', no:'gurkemeie'}},
    {q:2, u:'', n:{en:'green chillies', no:'grønne chili'}, round:'half', note:{en:'slit lengthways', no:'flekket på langs'}},
    {q:700, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Peel the papaya, scrape the seeds out and cut the flesh into cubes about the size of a walnut. Cut the potatoes to match, so the two finish together.',
     no:'Skrell papayaen, skrap ut frøene og skjær fruktkjøttet i terninger på størrelse med en valnøtt. Skjær potetene like store, så de to blir ferdige samtidig.'},
    {en:'Heat mustard oil labelled for food in a heavy pan over medium-high heat until it shimmers.',
     no:'Varm sennepsolje som er merket for mat, i en tykkbunnet gryte på middels høy varme til den skinner.'},
    {en:'Return it to a medium heat, break the dried chilli in and let it darken for a few seconds.',
     no:'Sett gryta tilbake på middels varme, brekk den tørkede chilien oppi og la den mørkne i noen sekunder.'},
    {en:'Add the onion and fry it slowly until it is soft and pale gold. This is the only browning in the whole dish.',
     no:'Ha i løken og stek den langsomt til den er myk og lysegyllen. Dette er den eneste bruningen i hele retten.'},
    {en:'Pull the pan off the heat, stir in the turmeric, then add the papaya and potato and turn them in the oil for two minutes.',
     no:'Trekk gryta av platen, rør inn gurkemeien, og ha så i papayaen og poteten og vend dem i oljen i to minutter.'},
    {en:'Pour in the water, salt it lightly and bring it to a simmer.',
     no:'Hell i vannet, salt lett og la det komme til småkoking.'},
    {en:'Stir the bicarbonate of soda in. It will foam for a moment as the alkali meets the starch, and it settles again at once.',
     no:'Rør inn natronet. Det skummer et øyeblikk når luten møter stivelsen, og legger seg straks igjen.'},
    {en:'Simmer uncovered until the papaya is completely soft and beginning to break down, about twenty minutes. Press a cube against the side of the pan: it should give without resistance.',
     no:'La det småkoke uten lokk til papayaen er helt myk og begynner å falle fra hverandre, omtrent tjue minutter. Press en terning mot grytesiden, og den skal gi etter uten motstand.'},
    {en:'Add the slit green chillies, cook two minutes more and take the pan off the heat.',
     no:'Ha i de flekkede grønne chiliene, la det koke to minutter til og ta gryta av platen.'},
    {en:'Let it stand for ten minutes. The broth should be cloudy, slightly thick and smooth on the tongue. Serve it first, with plain rice, before the rest of the meal.',
     no:'La retten stå i ti minutter. Kraften skal være grumsete, litt tykk og glatt på tungen. Server den først, med vanlig ris, før resten av måltidet.'}],
  notes:[
    {title:{en:'Why this version omits sour ingredients', no:'Hvorfor denne utgaven ikke har sure råvarer'},
     body:{en:'Acid lowers the pH and reduces the softening effect of the bicarbonate. Leaving lemon, tomato and tamarind out preserves the texture intended in this adaptation; it does not establish a rule for every Assamese meal.',
           no:'Syre senker pH og reduserer den mørnende virkningen av natronet. Uten sitron, tomat og tamarind beholder denne tilpasningen den planlagte konsistensen; det er ingen regel for alle assamesiske måltider.'}},
    {title:{en:'What the alkali is actually doing', no:'Hva luten faktisk gjør'},
     body:{en:'Raising the pH changes plant cell walls and helps the papaya soften. Too much bicarbonate creates an unpleasant taste and damages texture, which is why the quantity is measured rather than adjusted freely.',
           no:'Høyere pH endrer celleveggene i planten og bidrar til å mørne papayaen. For mye natron gir ubehagelig smak og ødelegger konsistensen, og derfor måles mengden i stedet for å justeres fritt.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Choose hard green papaya, fresh or frozen. Use bicarbonate of soda, not baking powder, and do not improvise a banana-ash extract without a tested food preparation and known concentration.',
           no:'Velg hard grønn papaya, fersk eller frossen. Bruk natron, ikke bakepulver, og ikke improviser et uttrekk av bananaske uten en testet matvare og kjent konsentrasjon.'}}],
  variations:[
    {title:{en:'Khar with a fish head', no:'Khar med fiskehode'},
     body:{en:'A fish head, lightly fried first, goes in when the water does. The alkali softens the cartilage and the head gives the broth a body it otherwise has no way of getting.',
           no:'Et fiskehode, lett stekt først, går i sammen med vannet. Luten gjør brusken myk, og hodet gir kraften en fylde den ellers ikke kan få.'}},
    {title:{en:'Khar with pork', no:'Khar med svinekjøtt'},
      body:{en:'Some khar preparations include pork. Simmer belly or shoulder until nearly tender before adding the papaya, and keep the bicarbonate at the measured quantity.',
            no:'Noen khar-retter har svinekjøtt. La sideflesk eller bog småkoke til det nesten er mørt før papayaen går i, og behold den målte mengden natron.'}},
    {title:{en:'With black gram', no:'Med svarte linser'},
     body:{en:'A handful of soaked black gram cooked alongside the papaya turns the broth thicker and nuttier. Assam calls the pulse matikalai and treats this as the everyday version.',
           no:'En neve bløtlagte svarte linser kokt sammen med papayaen gjør kraften tykkere og mer nøtteaktig. Assam kaller belgfrukten matikalai og regner dette som hverdagsutgaven.'}}]
},

{
  id:'aloo-pitika', dish:'Aloo pitika', course:'side', lesson:2, serves:4, veg:true,
  time:{prep:10, cook:25}, hero:'aloo-pitika', tags:['assam','potato','raw mustard oil'],
  title:{en:'Aloo pitika', no:'Aloo pitika'},
  blurb:{en:'Boiled potato crushed by hand with raw mustard oil, onion and green chilli. Nothing is cooked after the pot.',
         no:'Kokt potet knust for hånd med rå sennepsolje, løk og grønn chili. Ingenting varmes etter gryta.'},
  heroCaption:{en:'Komal saul standing in water with a chilli on top, and a mound of aloo pitika on the leaf beside it.',
               no:'Komal saul står i vann med en chili oppå, og en haug aloo pitika ligger på bladet ved siden av.'},
  goesWith:[{en:'A plate of plain rice and a thin dal', no:'En tallerken vanlig ris og en tynn dal'},
            {en:'Masor tenga, if you are making both', no:'Masor tenga, hvis du lager begge deler'}],
  headnote:{
    en:`<p>Aloo pitika is an Assamese preparation of boiled potato crushed with mustard oil, onion, chilli and salt. This course version is mixed while the potato is warm and is not heated again.</p>
<p>Use mustard oil that is explicitly labelled for food. Its pungency is central to this version; another edible oil will produce a milder adaptation with a different flavour.</p>
<p>Crush by hand or with a fork and leave small lumps. The rough texture distinguishes the pitika from a smooth purée and helps it sit beside rice and wetter dishes.</p>`,
    no:`<p>Aloo pitika er en assamesisk rett av kokt potet knust med sennepsolje, løk, chili og salt. Kursutgaven blandes mens poteten er varm og varmes ikke opp igjen.</p>
<p>Bruk sennepsolje som er tydelig merket for mat. Den skarpe smaken er sentral i denne utgaven; en annen spiselig olje gir en mildere tilpasning med en annen smak.</p>
<p>Knus for hånd eller med gaffel og behold små klumper. Den grove konsistensen skiller pitikaen fra en glatt puré og lar den stå sammen med ris og våtere retter.</p>`},
  ingredients:[
   {group:{en:'', no:''}, items:[
    {q:700, u:'g', n:{en:'floury potatoes', no:'melne poteter'}, note:{en:'whole and unpeeled', no:'hele og uskrelte'}},
    {q:45, u:'ml', n:{en:'mustard oil', no:'sennepsolje'}, note:{en:'cold-pressed, and used raw', no:'kaldpresset, og brukt rå'}},
    {q:80, u:'g', n:{en:'onion', no:'løk'}, note:{en:'chopped as finely as you can', no:'hakket så fint du klarer'}},
    {q:2, u:'', n:{en:'green chillies', no:'grønne chili'}, round:'half', note:{en:'chopped finer still', no:'hakket enda finere'}},
    {q:1, u:'', n:{en:'small bunch of coriander', no:'liten bunt koriander'}, round:'half', scale:'none'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Put the potatoes into cold salted water, bring them to the boil and cook them whole and unpeeled until a knife slides in without resistance.',
     no:'Legg potetene i kaldt saltet vann, kok opp, og kok dem hele og uskrelte til en kniv glir inn uten motstand.'},
    {en:'Drain them and leave them in the hot dry pan for a minute, so the surface steam goes off.',
     no:'Hell av vannet og la dem stå i den varme tørre gryta i et minutt, så dampen på overflaten forsvinner.'},
    {en:'Peel them while they are still almost too hot to hold. The skin comes away in sheets at that temperature and at no other.',
     no:'Skrell dem mens de ennå er nesten for varme å holde i. Skallet løsner i flak ved den temperaturen og ikke ved noen annen.'},
    {en:'Crush them in a wide bowl with a fork or the heel of your hand, and stop while there are still small lumps in it.',
     no:'Knus dem i en vid bolle med en gaffel eller med hånden, og stopp mens det fortsatt er små klumper igjen.'},
    {en:'Chop the onion as finely as you can manage, and the chillies finer still.',
     no:'Hakk løken så fint du klarer, og chiliene enda finere.'},
    {en:'Work the onion, the chilli and a good pinch of salt into the warm potato with your fingers rather than a spoon.',
     no:'Arbeid løken, chilien og en god klype salt inn i den varme poteten med fingrene og ikke med en skje.'},
    {en:'Pour the mustard oil over and fold it through. The warmth of the potato takes the raw edge off the oil without cooking it.',
     no:'Hell sennepsoljen over og vend den inn. Varmen fra poteten tar av den råeste kanten på oljen uten å koke den.'},
    {en:'Fold in the coriander, taste for salt and shape the whole thing into a rough mound. Serve promptly while it is still warm; refrigerate leftovers within two hours.',
     no:'Vend inn korianderen, smak til med salt og form det hele til en ujevn haug. Server raskt mens retten fortsatt er varm, og sett rester kaldt innen to timer.'}],
  notes:[
    {title:{en:'Why the potato has to be warm', no:'Hvorfor poteten må være varm'},
     body:{en:'Warm starch takes oil up and holds it. Cold mashed potato sheds it instead, so the oil sits on the surface and the dish turns greasy without ever tasting of mustard. If the potatoes have gone cold, warm them through before the oil goes anywhere near them.',
           no:'Varm stivelse tar opp olje og holder på den. Kald potetmos slipper den fra seg i stedet, så oljen blir liggende på overflaten og retten blir fet uten noen gang å smake sennep. Har potetene blitt kalde, må de varmes gjennom før oljen kommer i nærheten av dem.'}},
    {title:{en:'Why it is crushed and not mashed smooth', no:'Hvorfor den knuses og ikke moses glatt'},
     body:{en:'The pitika earns its place on the plate by being the one dry, rough, sharp thing among wet and mild ones. Smooth it out and it stops contrasting with anything, and a mouthful of rice, broth and purée is just soft all the way through.',
           no:'Pitikaen gjør nytte på tallerkenen ved å være det ene tørre, grove og skarpe blant det våte og milde. Glatter du den ut, slutter den å stå i kontrast til noe, og en munnfull ris, kraft og puré blir bare myk hele veien.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Use a floury potato that breaks up when it boils, not a waxy salad potato, which will refuse to crush.',
            no:'Bruk en melen potet og rødløk eller annen skarp løk. Kjøp bare sennepsolje som er tydelig merket for matbruk; «kachi ghani» beskriver pressing og er ikke alene en spiselighetsmerking.'}}],
  variations:[
    {title:{en:'Bengena pitika, with aubergine', no:'Bengena pitika, med aubergine'},
     body:{en:'Roast a whole aubergine directly over a gas flame or under a hot grill until the skin blackens and the inside collapses. Peel it, mash it and dress it exactly as above. It is smokier and looser than the potato version.',
           no:'Svi en hel aubergine rett over gassflammen eller under sterk grill til skallet blir svart og innmaten faller sammen. Skrell den, mos den og smak den til nøyaktig som over. Den blir mer røykpreget og løsere enn potetutgaven.'}},
    {title:{en:'Masor pitika, with fish', no:'Masor pitika, med fisk'},
      body:{en:'Flake freshly cooked fish, or properly refrigerated leftover fish, into the potato. Serve promptly and refrigerate leftovers within two hours.',
            no:'Del nystekt fisk, eller fiskerester som har vært oppbevart riktig i kjøleskap, i poteten. Server raskt og sett rester kaldt innen to timer.'}},
    {title:{en:'With burnt garlic', no:'Med svidd hvitløk'},
     body:{en:'Some households throw a few unpeeled cloves into the embers or a dry pan until they blacken, then squeeze the soft insides into the mash. It gives a sweetness underneath the mustard that the plain version does not have.',
           no:'Noen husholdninger kaster et par uskrelte fedd i glørne eller i en tørr panne til de svartner, og klemmer så det myke innholdet ned i mosen. Det gir en sødme under sennepen som den enkle utgaven ikke har.'}}]
},

{
  id:'smoked-pork-bamboo', dish:'Smoked pork with bamboo', course:'main', lesson:3, serves:4, veg:false,
  time:{prep:20, cook:95}, hero:'smoked-pork', tags:['nagaland','pork','fermented'],
  title:{en:'Smoked pork with bamboo shoot', no:'Røykt svinekjøtt med bambusskudd'},
  blurb:{en:'One adaptation of smoked pork with fermented bamboo shoot, chilli, ginger and water.',
         no:'Én tilpasning av røykt svinekjøtt med gjærede bambusskudd, chili, ingefær og vann.'},
  heroCaption:{en:'Naga smoked pork with bamboo shoot, served with red rice and boiled greens.',
               no:'Røykt svinekjøtt fra Nagaland med bambusskudd, servert med rød ris og kokte bladgrønnsaker.'},
  goesWith:[{en:'Plain rice, and a boiled green vegetable', no:'Vanlig ris og en kokt grønn grønnsak'},
            {en:'A raw chilli on the side of the plate', no:'En rå chili på kanten av tallerkenen'}],
  headnote:{
    en:`<p>Hearth-smoked pork in Nagaland differs by community and household. A packaged smoked hock, belly or shoulder is an adaptation: it may be brine-cured, more heavily salted and stored under different conditions. Follow its label and refrigerate it as directed.</p>
<p>Test a small piece before seasoning the pot. If the meat is very salty, a cold-water soak can reduce surface salt, but it will not make every cured product equivalent to lightly salted hearth-smoked pork.</p>
<p>This course version simmers smoked pork with prepared fermented bamboo shoot, chilli, ginger and water. The short list keeps smoke and fermentation clear, while other Naga pork dishes use different herbs, ferments and techniques.</p>`,
    no:`<p>Svinekjøtt røykt over ildsted i Nagaland varierer med samfunn og husholdning. En pakket røykt knoke, buk eller bog er en tilpasning: den kan være lakesaltet, saltere og lagret på en annen måte. Følg etiketten og oppbevar kjøttet kaldt som angitt.</p>
<p>Test en liten bit før gryta saltes. Er kjøttet svært salt, kan bløtlegging i kaldt vann redusere overflatesalt, men det gjør ikke ethvert speket produkt likt lettsaltet kjøtt fra et ildsted.</p>
<p>Kursutgaven småkoker røykt svin med ferdig tilberedte gjærede bambusskudd, chili, ingefær og vann. Den korte lista holder røyk og gjæring tydelige, mens andre naga-retter med svin bruker andre urter, gjæringer og teknikker.</p>`},
  ingredients:[
   {group:{en:'', no:''}, items:[
    {q:900, u:'g', n:{en:'smoked pork', no:'røykt svinekjøtt'}, note:{en:'hock or belly, on the bone, in large pieces', no:'knoke eller sideflesk, med bein, i store biter'}},
    {q:150, u:'g', n:{en:'fermented bamboo shoot', no:'gjærede bambusskudd'}, note:{en:'drained, and the liquid kept', no:'avrent, og laken tatt vare på'}},
    {q:30, u:'g', n:{en:'ginger', no:'ingefær'}, note:{en:'in matchsticks', no:'i tynne staver'}},
    {q:4, u:'', n:{en:'dried red chillies', no:'tørkede røde chili'}, round:'half', note:{en:'broken open', no:'knekt i biter'}},
    {q:2, u:'', n:{en:'green chillies', no:'grønne chili'}, round:'half', note:{en:'slit lengthways', no:'flekket på langs'}},
    {q:60, u:'g', n:{en:'spring onions', no:'vårløk'}, note:{en:'sliced', no:'i skiver'}},
    {q:900, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Cut the pork into large pieces, each about the size of a matchbox, and leave the bone in wherever there is one.',
     no:'Skjær svinekjøttet i store biter, omtrent på størrelse med en fyrstikkeske, og la beinet sitte igjen der det er noe.'},
    {en:'Simmer one piece in a little water for a few minutes and taste the water. If it is very salty, cover the rest of the meat with cold water and leave it for an hour, then drain it.',
     no:'Kok en enkelt bit i litt vann i noen minutter og smak på vannet. Er det svært salt, dekk resten av kjøttet med kaldt vann og la det stå i en time før du heller av.'},
    {en:'Put the pork into a heavy pan with the water, bring it to a simmer and skim off whatever rises in the first few minutes.',
     no:'Legg svinekjøttet i en tykkbunnet gryte sammen med vannet, la det komme til småkoking og skum av det som legger seg på toppen de første minuttene.'},
    {en:'Add the ginger and the broken dried chillies, cover the pan and leave it on the lowest flame for an hour.',
     no:'Ha i ingefæren og de knekte tørkede chiliene, legg på lokk og la gryta stå på lavest mulig varme i en time.'},
    {en:'Check the meat. It should give under a spoon and still hold together. If it does not, give it another twenty minutes.',
     no:'Sjekk kjøttet. Det skal gi etter for en skje og likevel henge sammen. Gjør det ikke det, gi det tjue minutter til.'},
    {en:'Drain the prepared fermented bamboo shoot, following its label. Keep a little packing liquid only if the product says it may be used in cooking.',
     no:'Hell av de ferdig tilberedte gjærede bambusskuddene og følg etiketten. Ta bare vare på litt lake dersom produktet sier at den kan brukes i mat.'},
    {en:'Stir the bamboo shoot in and simmer uncovered for twenty minutes, so its sourness moves out into the broth.',
     no:'Rør inn bambusskuddene og la det småkoke uten lokk i tjue minutter, så syren flytter seg ut i kraften.'},
    {en:'Taste. If the product label permits cooking with its packing liquid, add a little for more sourness. Add salt only if the pork has not supplied enough.',
     no:'Smak. Hvis etiketten tillater at laken brukes i mat, kan du ha i litt for mer syre. Salt bare hvis svinekjøttet ikke har gitt nok.'},
    {en:'Add the slit green chillies and cook five minutes more. The broth should have reduced by about half and turned cloudy.',
     no:'Ha i de flekkede grønne chiliene og la det koke fem minutter til. Kraften skal ha kokt inn til omtrent halvparten og blitt grumsete.'},
    {en:'Leave any loose fat on the surface, because it carries the smoke. Scatter the spring onion over off the heat and serve with plain rice.',
     no:'La fettet som ligger på overflaten, bli liggende, for det bærer røyksmaken. Strø vårløken over med gryta av platen, og server med vanlig ris.'}],
  notes:[
    {title:{en:'Why this version keeps a short ingredient list', no:'Hvorfor denne utgaven har en kort råvareliste'},
     body:{en:'Smoke and fermentation already provide strong aromas, so this recipe keeps the seasoning restrained. It is one construction among many and does not define Naga cooking as a whole.',
           no:'Røyk og gjæring gir allerede kraftige aromaer, så denne oppskriften holder krydringen dempet. Den er én oppbygning blant mange og definerer ikke naga-mat som helhet.'}},
    {title:{en:'What fermented bamboo does that lemon cannot', no:'Hva gjærede bambusskudd gjør som sitron ikke kan'},
     body:{en:'Fermented bamboo contributes both acidity and its own fermented aroma. Lemon can add acidity, but it cannot reproduce that aroma, so it makes a different adaptation.',
           no:'Gjærede bambusskudd bidrar både med syre og sin egen gjæringsaroma. Sitron kan gi syre, men gjenskaper ikke aromaen og gir derfor en annen tilpasning.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Avoid anything glazed or sugared, because a sweet cure fights the ferment and leaves the broth tasting of ham.',
           no:'Hold deg unna alt som er glasert eller sukret, for sukkeret i laken slåss mot gjæringen og gir kraften smak av skinke. Røykt svineknoke og røykt sideflesk finnes i de fleste dagligvarebutikker, og en polsk eller baltisk butikk har som regel en tørrere og mindre søt utgave. Gjærede bambusskudd får du i asiatiske butikker, gjerne merket «sour bamboo shoot» eller thailandsk «naw mai dong», på glass og ofte strimlet i lake. Bambusskudd på boks fra vanlig dagligvare er ikke gjæret og syrner ikke gryta i det hele tatt.'}}],
  variations:[
    {title:{en:'With axone instead', no:'Med axone i stedet'},
     body:{en:'Cook a spoonful of an established fermented soybean product with a little fat at the start and halve the bamboo. The pot becomes more savoury and less sour; label the substitution if axone itself is unavailable.',
           no:'Kok en skje etablert gjæret soyaprodukt i litt fett i starten og halver bambusen. Gryta blir mer umamirik og mindre sur; merk erstatningen tydelig dersom axone ikke er tilgjengelig.'}},
    {title:{en:'With unsmoked pork', no:'Med ferskt svinekjøtt'},
     body:{en:'Brown fresh belly pork hard in a dry pan before the water goes in. You lose the smoke, so it becomes a plain sour pork stew rather than this dish, and it is honest and good on its own terms.',
           no:'Brun ferskt sideflesk hardt i en tørr panne før vannet går i. Røyksmaken forsvinner, så det blir en enkel sur svinegryte i stedet for denne retten, og den er ærlig og god på sine egne premisser.'}},
    {title:{en:'With dried taro leaf', no:'Med tørkede taroblader'},
     body:{en:'An Ao Naga cook adds anishi, cakes of fermented and dried colocasia leaf, which thicken the pot. Dried taro leaf from an Asian shop, soaked and torn in, gets you part of the way there.',
           no:'En kokk fra ao-nagaene har i anishi, kaker av gjærede og tørkede taroblader, som tykner gryta. Tørkede taroblader fra en asiatisk butikk, bløtlagt og revet oppi, tar deg et stykke på vei.'}}]
},

{
  id:'eromba', dish:'Eromba', course:'side', lesson:3, serves:4, veg:false,
  time:{prep:15, cook:30}, hero:'eromba', tags:['manipur','fermented fish','chilli'],
  title:{en:'Eromba', no:'Eromba'},
  blurb:{en:'Boiled vegetables mashed with cooked fermented fish paste and toasted dried chilli, then served promptly.',
         no:'Kokte grønnsaker most med varmebehandlet gjæret fiskepasta og ristet tørket chili, servert med en gang.'},
  heroCaption:{en:'Eromba made with yongchak, the tree bean, which divides opinion in Manipur as sharply as it does outside it.',
               no:'Eromba laget med yongchak, trebønnen som deler folk i to i Manipur like sterkt som utenfor Manipur.'},
  goesWith:[{en:'A mound of plain rice', no:'En haug vanlig ris'},
            {en:'A clear vegetable broth, if you want a full meal', no:'En klar grønnsakkraft, hvis du vil ha et helt måltid'}],
  headnote:{
    en:`<p>Eromba is a Meitei preparation of cooked vegetables mashed with chilli and often ngari, a fermented fish product. Recipes vary in vegetables, herbs, heat and the way the fish is handled.</p>
<p>This course uses a packaged fermented fish paste as a clearly named adaptation. Choose a product sold for cooking, follow its storage directions and heat it as instructed rather than attempting a home fish fermentation.</p>
<p>Toast dried chillies gently until aromatic without burning them. Keep the room ventilated and avoid inhaling chilli smoke. Serve the finished dish promptly, or refrigerate it after cooling.</p>`,
    no:`<p>Eromba er en meitei-rett av kokte grønnsaker most med chili og ofte ngari, et gjæret fiskeprodukt. Oppskriftene varierer i grønnsaker, urter, styrke og behandling av fisken.</p>
<p>Kurset bruker pakket gjæret fiskepasta som en tydelig merket tilpasning. Velg et produkt som selges til matlaging, følg lagringsrådene og varmebehandle det som angitt framfor å forsøke fiskegjæring hjemme.</p>
<p>Rist tørket chili forsiktig til den dufter uten å svi den. Luft rommet og unngå å puste inn chilirøyk. Server retten raskt, eller sett den i kjøleskapet etter avkjøling.</p>`},
  ingredients:[
   {group:{en:'', no:''}, items:[
    {q:500, u:'g', n:{en:'floury potatoes', no:'melne poteter'}, note:{en:'peeled, in chunks', no:'skrelt, i biter'}},
    {q:200, u:'g', n:{en:'green beans', no:'grønne bønner'}, note:{en:'topped and halved', no:'renset og delt i to'}},
    {q:100, u:'g', n:{en:'peas', no:'erter'}, note:{en:'fresh or frozen', no:'ferske eller frosne'}},
    {q:15, u:'g', n:{en:'fermented fish paste', no:'gjæret fiskepasta'}, note:{en:'in place of ngari', no:'i stedet for ngari'}},
    {q:6, u:'', n:{en:'dried red chillies', no:'tørkede røde chili'}, round:'half'},
    {q:60, u:'g', n:{en:'spring onions', no:'vårløk'}, note:{en:'sliced fine, and used raw', no:'finskåret, og brukt rå'}},
    {q:1, u:'', n:{en:'small bunch of coriander', no:'liten bunt koriander'}, round:'half', scale:'none'},
    {q:800, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Boil the potatoes in salted water until a knife goes through them without resistance.',
     no:'Kok potetene i saltet vann til en kniv går gjennom dem uten motstand.'},
    {en:'Add the beans and peas for the last five minutes, so they cook through and keep their colour.',
     no:'Ha i bønnene og ertene de siste fem minuttene, så de blir gjennomkokte og beholder fargen.'},
    {en:'Drain everything, keeping a cupful of the cooking water back in a jug.',
     no:'Hell av alt, men ta vare på litt av kokevannet i en mugge.'},
    {en:'Toast the dried chillies in a dry pan over medium-low heat, turning them, until aromatic but not blackened. Ventilate the room and avoid the smoke.',
     no:'Rist de tørkede chiliene i en tørr panne på middels lav varme til de dufter uten å bli svarte. Luft rommet og unngå røyken.'},
    {en:'Roast the fermented fish paste in the same pan for a minute, pressing it flat, until the smell turns from sharp to grilled.',
     no:'Rist den gjærede fiskepastaen i den samme pannen i et minutt, press den flat, til lukten går fra skarp til grillet.'},
    {en:'Pound the chillies and the fish together in a mortar with a pinch of salt, until they make a coarse dark paste.',
     no:'Støt chiliene og fisken sammen i en morter med en klype salt, til det blir en grov mørk pasta.'},
    {en:'Crush the potatoes, beans and peas in a wide bowl with a fork, and leave the texture rough.',
     no:'Knus potetene, bønnene og ertene i en vid bolle med en gaffel, og la konsistensen være grov.'},
    {en:'Work the chilli and fish paste through the vegetables with your hands, loosening it with a little of the cooking water if it is too stiff to mix.',
     no:'Arbeid chili- og fiskepastaen inn i grønnsakene med hendene, og spe med litt av kokevannet hvis blandingen er for stiv.'},
    {en:'Fold in the spring onion and the coriander raw, and taste for salt. The fish is salty, so it may need none at all.',
     no:'Vend inn vårløken og korianderen rå, og smak til med salt. Fisken er salt, så det trengs kanskje ikke i det hele tatt.'},
    {en:'Shape it into a mound and serve once it is comfortably warm. Refrigerate any leftovers within two hours.',
     no:'Form massen til en haug og server når den er behagelig varm. Sett rester i kjøleskapet innen to timer.'}],
  notes:[
    {title:{en:'Why it rests briefly', no:'Hvorfor den hviler kort'},
     body:{en:'A short rest keeps the spring onion and herbs crisp while making the mash comfortable to eat. It is a serving step, not permission to hold cooked vegetables and fish at room temperature for hours.',
           no:'En kort hvile beholder bittet i vårløk og urter og gjør mosen behagelig å spise. Det er et serveringssteg, ikke tillatelse til å la kokte grønnsaker og fisk stå ute i timevis.'}},
    {title:{en:'Why the chillies are roasted dry', no:'Hvorfor chiliene ristes tørre'},
     body:{en:'Dry heat drives water out and concentrates what is left, and it leaves the pieces brittle enough to break into uneven flakes in the mortar. Frying them in oil would dissolve the heat and spread it evenly through the dish, and an eromba is meant to be uneven, so that one mouthful is fierce and the next is not.',
           no:'Tørr varme driver ut vannet og konsentrerer det som er igjen, og den gjør bitene sprø nok til å brekke i ujevne flak i morteren. Steker du dem i olje, løses styrken opp og fordeler seg jevnt i hele retten, og en eromba skal være ujevn, slik at én munnfull er hissig og den neste ikke er det.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Fish sauce is not a substitute for a fermented fish paste. It is a liquid, and it will make the dish wet and thin without giving it any body.',
           no:'Fiskesaus er ingen erstatning for gjæret fiskepasta. Den er en væske, og den gjør retten våt og tynn uten å gi den noen fylde. Ngari selges ikke i Norge. Thailandsk pla ra eller burmesisk ngapi står i asiatiske butikker i Oslo og er det nærmeste du kommer. Har du ingen av delene, kan tre eller fire sardeller ristet tørre i panne gjøre jobben, men grunnere. Merk at det som selges som «ansjos» på glass i Norge, er krydret brisling og helt feil her; be om sardeller.'}}],
  variations:[
    {title:{en:'Yongchak eromba', no:'Yongchak eromba'},
     body:{en:'The version people argue about uses the tree bean, boiled with the potatoes. Its smell is sulphurous and carries through a house, and frozen petai from a Thai shop is the same bean under another name.',
           no:'Utgaven folk krangler om, bruker trebønnen, kokt sammen med potetene. Lukten er svovelaktig og bærer gjennom hele huset, og frossen petai fra en thailandsk butikk er den samme bønnen under et annet navn.'}},
    {title:{en:'Soibum eromba, with bamboo', no:'Soibum eromba, med bambus'},
     body:{en:'A spoonful of prepared fermented bamboo shoot mashed in with the vegetables makes this variation sour as well as hot. Follow the product label for storage and cooking.',
           no:'En skje ferdig tilberedte gjærede bambusskudd most inn med grønnsakene gjør denne variasjonen sur i tillegg til sterk. Følg produktets råd om lagring og tilberedning.'}},
    {title:{en:'A vegetarian adaptation', no:'En vegetarisk tilpasning'},
     body:{en:'Omit the fermented fish and increase the herbs or add prepared fermented bamboo for savoury depth. Label the result as an adaptation because the flavour changes substantially.',
           no:'Sløyf den gjærede fisken og bruk mer urter eller ferdig tilberedte gjærede bambusskudd for mer smak. Merk resultatet som en tilpasning fordi smaken endres vesentlig.'}}]
}

];
