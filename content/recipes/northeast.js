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
    {en:'Heat the mustard oil in a wide pan until it just begins to smoke, then turn the flame down.',
     no:'Varm sennepsoljen i en vid panne til den så vidt begynner å ryke, og skru så ned varmen.'},
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
           no:'Be fiskedisken skjære det du kjøper, på tvers av beinet i stedet for å filetere det. Sei er billig, fast og bedre her enn torsk, som faller fra hverandre i en tynn kraft. En hel ørret skåret i koteletter er nærmest en ferskvannsfisk og fungerer svært godt. Mye av sennepsoljen i norske butikker er merket kun til utvortes bruk på grunn av erukasyre, så se etter flasker fra indiske butikker som sier «edible» eller «kachi ghani». Outenga og thekera selges ikke her i det hele tatt, og tomat og sitron er den ærlige erstatningen.'}}],
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
  blurb:{en:'The alkaline dish that opens an Assamese meal: raw papaya simmered soft with a spoonful of banana-ash water.',
         no:'Den basiske retten som åpner et måltid i Assam: grønn papaya kokt myk med en skje bananaskevann.'},
  heroCaption:{en:'Khar being filtered: water poured slowly through banana ash. No freely licensed photograph of the finished dish exists, so this is where it starts.',
               no:'Khar blir filtrert, og vannet helles langsomt gjennom bananaske. Det finnes ikke noe fritt lisensiert bilde av den ferdige retten, så her er begynnelsen på den.'},
  goesWith:[{en:'Plain rice, eaten first, before the rest of the meal', no:'Vanlig ris, spist først, før resten av måltidet'},
            {en:'A whole green chilli on the side of the plate', no:'En hel grønn chili på kanten av tallerkenen'}],
  headnote:{
    en:`<p>Begin with what this is not. Khar is not a spice, not a sauce and not sour. It is an alkali. A household burns dried banana peel to ash, pours water through the ash and keeps the liquid that drips out in a bottle, using a spoonful at a time, and the dish takes its name from that liquid.</p>
<p>Nobody in Norway is going to filter banana ash on a Tuesday, and this recipe does not ask you to. A small pinch of bicarbonate of soda does the same chemistry: it softens, it breaks fat down, and it gives the broth the smooth, faintly soapy body that is the whole point of the dish. Every Assamese cook will tell you it is not the same, and they are right, because the ash brings a trace of smoke with it. The mechanism travels even where the flavour does not.</p>
<p>Eat it first, with plain rice, before anything else on the table. It is deliberately quiet and it settles the appetite rather than sharpening it. And keep everything sour out of the pot, because acid and alkali cancel each other and you will be left with neither.</p>`,
    no:`<p>Begynn med hva dette ikke er. Khar er verken et krydder, en saus eller noe surt. Det er en lut. En husholdning brenner tørket bananskall til aske, heller vann gjennom asken og tar vare på væsken som drypper ut, i en flaske, og bruker en skje om gangen. Retten har navnet sitt fra den væsken.</p>
<p>Ingen i Norge kommer til å filtrere bananaske en tirsdag, og denne oppskriften ber deg ikke om det. En knivsodd natron gir den samme kjemien. Den gjør grønnsakene møre, den bryter ned fett, og den gir kraften den glatte, så vidt såpeaktige fylden som er hele poenget med retten. Enhver kokk i Assam vil si at det ikke er det samme, og de har rett, for asken tar med seg et snev av røyk. Mekanismen lar seg flytte selv om smaken ikke gjør det.</p>
<p>Spis den først, med vanlig ris, før alt annet på bordet. Den er bevisst stille, og den roer appetitten i stedet for å skjerpe den. Og hold alt surt utenfor gryta, for syre og lut opphever hverandre, og da sitter du igjen med ingen av delene.</p>`},
  ingredients:[
   {group:{en:'', no:''}, items:[
    {q:400, u:'g', n:{en:'raw green papaya', no:'grønn papaya'}, note:{en:'peeled, seeded, in walnut-sized cubes', no:'skrelt, renset for frø, i terninger på størrelse med en valnøtt'}},
    {q:250, u:'g', n:{en:'floury potatoes', no:'melne poteter'}, note:{en:'in chunks the same size', no:'i biter av samme størrelse'}},
    {q:3, u:'g', n:{en:'bicarbonate of soda', no:'natron'}, note:{en:'in place of kolakhar', no:'i stedet for kolakhar'}},
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
    {en:'Heat the mustard oil in a heavy pan until it just smokes, then take it off the flame for half a minute so it cools a little.',
     no:'Varm sennepsoljen i en tykkbunnet gryte til den så vidt ryker, og ta den av platen et halvt minutt så den kjøler seg litt.'},
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
    {title:{en:'Why nothing sour goes near it', no:'Hvorfor ingenting surt får komme i nærheten'},
     body:{en:'An acid neutralises the alkali on contact, and the softening simply stops. Add a squeeze of lemon, a tomato or a spoon of tamarind and you lose the texture that the dish exists for. This is also why an Assamese meal serves khar first and something sour last, rather than putting them side by side.',
           no:'En syre nøytraliserer luten med én gang, og da stopper oppmykingen. Har du i en skvett sitron, en tomat eller en skje tamarind, mister du nettopp den konsistensen retten finnes for. Det er også grunnen til at et måltid i Assam setter fram khar først og noe surt sist, i stedet for å sette dem ved siden av hverandre.'}},
    {title:{en:'What the alkali is actually doing', no:'Hva luten faktisk gjør'},
     body:{en:'Raising the pH weakens the pectin that holds plant cell walls together, so a tough vegetable collapses far faster than it would in plain water. The same alkali breaks fat down, which is why a khar cooked with pork tastes lean rather than rich. It is the only technique in this course that works on chemistry alone and adds no flavour of its own.',
           no:'Når pH stiger, svekkes pektinet som holder celleveggene i planten sammen, og en seig grønnsak faller derfor sammen langt raskere enn den ville gjort i rent vann. Den samme luten bryter ned fett, og derfor smaker en khar kokt med svinekjøtt mager og ikke fyldig. Dette er den eneste teknikken i kurset som virker på ren kjemi og ikke tilfører noen smak selv.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Buy the papaya hard and green. A fruit sold as ripe is sweet and useless here, and it will fall apart before the broth has taken anything from it.',
           no:'Kjøp papayaen hard og grønn. En frukt som selges som moden, er søt og ubrukelig her, og den faller fra hverandre før kraften har fått noe ut av den. Grønn papaya finnes i indiske og asiatiske butikker på Grønland i Oslo, ofte også frossen i terninger, og den frosne fungerer fint. Natron står i bakeavdelingen i enhver dagligvarebutikk; bakepulver er noe annet og inneholder syre, så det ødelegger retten. Vil du ha den ekte varen, kan du brenne tørket bananskall på grillen og helle vann gjennom asken i et kaffefilter.'}}],
  variations:[
    {title:{en:'Khar with a fish head', no:'Khar med fiskehode'},
     body:{en:'A fish head, lightly fried first, goes in when the water does. The alkali softens the cartilage and the head gives the broth a body it otherwise has no way of getting.',
           no:'Et fiskehode, lett stekt først, går i sammen med vannet. Luten gjør brusken myk, og hodet gir kraften en fylde den ellers ikke kan få.'}},
    {title:{en:'Khar with pork', no:'Khar med svinekjøtt'},
     body:{en:'Hill households cook belly pork this way, and the alkali cuts the fat until the meat tastes surprisingly lean. Simmer the pork for an hour before the papaya goes in.',
           no:'Husholdninger i åsene koker sideflesk på denne måten, og luten skjærer gjennom fettet til kjøttet smaker overraskende magert. La svinekjøttet småkoke i en time før papayaen går i.'}},
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
    en:`<p>This takes ten minutes and it is on an Assamese table more often than anything else in this course. Potatoes are boiled, peeled while they are still too hot to hold, and crushed by hand. Then raw mustard oil, finely chopped onion, green chilli and salt go in, and nothing is heated again.</p>
<p>The raw mustard oil is the dish, and it is the one thing here you should not substitute. Cold-pressed mustard oil is sharp enough to catch the back of the throat, and that sharpness is what lifts a bland mash into something that can hold its own beside a plate of rice. Olive oil makes a perfectly good mashed potato and a bad pitika.</p>
<p>Crush by hand or with a fork, and stop early. A pitika is supposed to be uneven, with small lumps left in it, because it sits on the plate as the dry, rough thing among wet ones. Put it through a ricer and you get a purée, which is smooth, correct and completely wrong.</p>`,
    no:`<p>Dette tar ti minutter, og retten står på et bord i Assam oftere enn noe annet i dette kurset. Potetene kokes, skrelles mens de ennå er for varme til å holde i, og knuses for hånd. Så går rå sennepsolje, finhakket løk, grønn chili og salt oppi, og ingenting varmes opp igjen.</p>
<p>Den rå sennepsoljen er hele retten, og den er det ene du ikke bør bytte ut. Kaldpresset sennepsolje er skarp nok til å ta tak bakerst i halsen, og den skarpheten er det som løfter en smakløs potetmos til noe som kan stå for seg selv ved siden av en tallerken ris. Olivenolje gir en helt grei potetmos og en dårlig pitika.</p>
<p>Knus for hånd eller med en gaffel, og stopp tidlig. En pitika skal være ujevn, med små klumper igjen i, for den ligger på tallerkenen som det tørre og grove blant det våte. Kjører du den gjennom en potetpresse, får du en puré, og den er glatt, korrekt og fullstendig feil.</p>`},
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
    {en:'Fold in the coriander, taste for salt and shape the whole thing into a rough mound. Serve it at room temperature.',
     no:'Vend inn korianderen, smak til med salt og form det hele til en ujevn haug. Server retten ved romtemperatur.'}],
  notes:[
    {title:{en:'Why the potato has to be warm', no:'Hvorfor poteten må være varm'},
     body:{en:'Warm starch takes oil up and holds it. Cold mashed potato sheds it instead, so the oil sits on the surface and the dish turns greasy without ever tasting of mustard. If the potatoes have gone cold, warm them through before the oil goes anywhere near them.',
           no:'Varm stivelse tar opp olje og holder på den. Kald potetmos slipper den fra seg i stedet, så oljen blir liggende på overflaten og retten blir fet uten noen gang å smake sennep. Har potetene blitt kalde, må de varmes gjennom før oljen kommer i nærheten av dem.'}},
    {title:{en:'Why it is crushed and not mashed smooth', no:'Hvorfor den knuses og ikke moses glatt'},
     body:{en:'The pitika earns its place on the plate by being the one dry, rough, sharp thing among wet and mild ones. Smooth it out and it stops contrasting with anything, and a mouthful of rice, broth and purée is just soft all the way through.',
           no:'Pitikaen gjør nytte på tallerkenen ved å være det ene tørre, grove og skarpe blant det våte og milde. Glatter du den ut, slutter den å stå i kontrast til noe, og en munnfull ris, kraft og puré blir bare myk hele veien.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Use a floury potato that breaks up when it boils, not a waxy salad potato, which will refuse to crush.',
           no:'Bruk en melen potet som sprekker når den kokes, ikke en fastkokende salatpotet, som nekter å la seg knuse. Beate, Pimpernel og Kerrs Pink er alle melne og fungerer. Mye av sennepsoljen i norske butikker er merket kun til utvortes bruk på grunn av erukasyre, så se etter flasker fra indiske butikker som sier «edible» eller «kachi ghani»; dette er den ene oppskriften der ingen annen olje duger. Vanlig norsk kepaløk er mild og søt, så en rødløk ligger nærmere den sterke løken retten er laget for.'}}],
  variations:[
    {title:{en:'Bengena pitika, with aubergine', no:'Bengena pitika, med aubergine'},
     body:{en:'Roast a whole aubergine directly over a gas flame or under a hot grill until the skin blackens and the inside collapses. Peel it, mash it and dress it exactly as above. It is smokier and looser than the potato version.',
           no:'Svi en hel aubergine rett over gassflammen eller under sterk grill til skallet blir svart og innmaten faller sammen. Skrell den, mos den og smak den til nøyaktig som over. Den blir mer røykpreget og løsere enn potetutgaven.'}},
    {title:{en:'Masor pitika, with fish', no:'Masor pitika, med fisk'},
     body:{en:'A piece of fried fish, boned and flaked, is worked into the potato with everything else. It turns a side dish into most of a meal, and it is what an Assamese household does with yesterday’s leftovers.',
           no:'Et stykke stekt fisk, renset for bein og delt i flak, arbeides inn i poteten sammen med alt det andre. Da blir tilbehøret nesten et helt måltid, og det er slik en husholdning i Assam bruker gårsdagens rester.'}},
    {title:{en:'With burnt garlic', no:'Med svidd hvitløk'},
     body:{en:'Some households throw a few unpeeled cloves into the embers or a dry pan until they blacken, then squeeze the soft insides into the mash. It gives a sweetness underneath the mustard that the plain version does not have.',
           no:'Noen husholdninger kaster et par uskrelte fedd i glørne eller i en tørr panne til de svartner, og klemmer så det myke innholdet ned i mosen. Det gir en sødme under sennepen som den enkle utgaven ikke har.'}}]
},

{
  id:'smoked-pork-bamboo', dish:'Smoked pork with bamboo', course:'main', lesson:3, serves:4, veg:false,
  time:{prep:20, cook:95}, hero:'smoked-pork', tags:['nagaland','pork','fermented'],
  title:{en:'Smoked pork with bamboo shoot', no:'Røykt svinekjøtt med bambusskudd'},
  blurb:{en:'Smoked pork, fermented bamboo shoot, chilli, ginger and water. Nothing else goes in, and nothing needs to.',
         no:'Røykt svinekjøtt, gjærede bambusskudd, chili, ingefær og vann. Ikke noe mer går i, og ikke noe mer trengs.'},
  heroCaption:{en:'Naga smoked pork with bamboo shoot, served with red rice and boiled greens.',
               no:'Røykt svinekjøtt fra Nagaland med bambusskudd, servert med rød ris og kokte bladgrønnsaker.'},
  goesWith:[{en:'Plain rice, and a boiled green vegetable', no:'Vanlig ris og en kokt grønn grønnsak'},
            {en:'A raw chilli on the side of the plate', no:'En rå chili på kanten av tallerkenen'}],
  headnote:{
    en:`<p>Naga smoked pork is a larder ingredient rather than a shop one. Slabs of it hang over the hearth for weeks, dry hard in the smoke and come down almost black, and nothing sold in Norway is made that way. What Norway does have is properly smoked pork — hock, belly and shoulder — and it is close enough to build the dish on, as long as you know where it differs.</p>
<p>It differs in salt. Naga pork is barely salted, because the smoke is doing the preserving. Norwegian smoked pork is brine-cured first, so it is salty right through, and a pot built on it needs no added salt and often needs a soak. Taste before you season rather than after.</p>
<p>Everything else is simple to the point of severity. Smoked pork, fermented bamboo shoot, dried chilli, ginger and water go into a pan and simmer until the meat gives. There is no masala, no tomato, no onion paste and nothing to thicken it. The bamboo supplies the sourness that cuts the fat, and the smoke supplies everything else.</p>`,
    no:`<p>Røykt svinekjøtt fra Nagaland er en råvare fra spiskammeret og ikke fra en butikk. Store stykker av det henger over ildstedet i ukevis, tørker hardt i røyken og kommer ned nesten svart, og ingenting som selges i Norge, er laget slik. Norge har derimot ordentlig røykt svinekjøtt, både knoke, sideflesk og bog, og det er nært nok til å bygge retten på så lenge du vet hvor forskjellen ligger.</p>
<p>Forskjellen er saltet. Svinekjøttet i Nagaland er knapt saltet, for det er røyken som konserverer. Norsk røykt svinekjøtt er saltet i lake først, så det er salt tvers igjennom, og en gryte bygd på det trenger ikke salt og trenger ofte en utvanning. Smak før du salter, ikke etter.</p>
<p>Alt annet er enkelt på grensen til det strenge. Røykt svinekjøtt, gjærede bambusskudd, tørket chili, ingefær og vann går i gryta og småkoker til kjøttet gir etter. Det er ingen masala, ingen tomat, ingen løkpasta og ingenting som jevner. Bambusen gir syren som skjærer gjennom fettet, og røyken gir resten.</p>`},
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
    {en:'Drain the bamboo shoot and keep its liquid. Rinse the shoot once if the smell is very strong, and not at all if you want the pot sour.',
     no:'Hell av bambusskuddene og ta vare på laken. Skyll skuddene én gang hvis lukten er svært kraftig, og ikke i det hele tatt hvis du vil ha gryta sur.'},
    {en:'Stir the bamboo shoot in and simmer uncovered for twenty minutes, so its sourness moves out into the broth.',
     no:'Rør inn bambusskuddene og la det småkoke uten lokk i tjue minutter, så syren flytter seg ut i kraften.'},
    {en:'Taste. Add a little of the bamboo liquid if you want it sharper, and salt only if the pork has not supplied it already.',
     no:'Smak. Ha i litt av laken fra bambusskuddene hvis du vil ha det skarpere, og salt bare hvis svinekjøttet ikke har gjort jobben alt.'},
    {en:'Add the slit green chillies and cook five minutes more. The broth should have reduced by about half and turned cloudy.',
     no:'Ha i de flekkede grønne chiliene og la det koke fem minutter til. Kraften skal ha kokt inn til omtrent halvparten og blitt grumsete.'},
    {en:'Leave any loose fat on the surface, because it carries the smoke. Scatter the spring onion over off the heat and serve with plain rice.',
     no:'La fettet som ligger på overflaten, bli liggende, for det bærer røyksmaken. Strø vårløken over med gryta av platen, og server med vanlig ris.'}],
  notes:[
    {title:{en:'Why there is nothing else in the pot', no:'Hvorfor det ikke er noe annet i gryta'},
     body:{en:'Smoke and ferment are both finished flavours, built over weeks before the cooking starts. A masala added on top does not layer with them, it argues with them. This is subtraction cooking, and getting used to how few things go into the pan is most of what the region has to teach.',
           no:'Røyk og gjæring er begge ferdige smaker, bygd opp over uker før matlagingen begynner. En masala lagt oppå legger seg ikke i lag sammen med dem, den krangler med dem. Dette er matlaging ved å trekke fra, og det å venne seg til hvor få ting som går i pannen, er det meste av det regionen har å lære bort.'}},
    {title:{en:'What fermented bamboo does that lemon cannot', no:'Hva gjærede bambusskudd gjør som sitron ikke kan'},
     body:{en:'It is sour and savoury in the same spoonful: lactic acid from the ferment cuts the fat, and the amino acids the ferment has built up give the broth depth. A squeeze of lemon does the first half of that job and none of the second, which is why the pot tastes thin without it.',
           no:'Den er sur og smaksrik i samme skje. Melkesyren fra gjæringen skjærer gjennom fettet, og aminosyrene gjæringen har bygd opp, gir kraften dybde. En skvett sitron gjør den første halvdelen av jobben og ingenting av den andre, og derfor smaker gryta tynn uten bambusen.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Avoid anything glazed or sugared, because a sweet cure fights the ferment and leaves the broth tasting of ham.',
           no:'Hold deg unna alt som er glasert eller sukret, for sukkeret i laken slåss mot gjæringen og gir kraften smak av skinke. Røykt svineknoke og røykt sideflesk finnes i de fleste dagligvarebutikker, og en polsk eller baltisk butikk har som regel en tørrere og mindre søt utgave. Gjærede bambusskudd får du i asiatiske butikker, gjerne merket «sour bamboo shoot» eller thailandsk «naw mai dong», på glass og ofte strimlet i lake. Bambusskudd på boks fra vanlig dagligvare er ikke gjæret og syrner ikke gryta i det hele tatt.'}}],
  variations:[
    {title:{en:'With axone instead', no:'Med axone i stedet'},
     body:{en:'Fry a spoonful of fermented soybean paste in a little fat at the start and halve the bamboo. The pot turns deeper and less sour, and that combination is as close as Nagaland gets to a national dish.',
           no:'Stek en skje gjæret soyapasta i litt fett i starten og halver mengden bambus. Gryta blir dypere og mindre sur, og den kombinasjonen er så nær en nasjonalrett som Nagaland kommer.'}},
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
  blurb:{en:'Boiled vegetables mashed with roasted fermented fish and dried chilli, and eaten at room temperature.',
         no:'Kokte grønnsaker most sammen med ristet gjæret fisk og tørket chili, og spist ved romtemperatur.'},
  heroCaption:{en:'Eromba made with yongchak, the tree bean, which divides opinion in Manipur as sharply as it does outside it.',
               no:'Eromba laget med yongchak, trebønnen som deler folk i to i Manipur like sterkt som utenfor Manipur.'},
  goesWith:[{en:'A mound of plain rice', no:'En haug vanlig ris'},
            {en:'A clear vegetable broth, if you want a full meal', no:'En klar grønnsakkraft, hvis du vil ha et helt måltid'}],
  headnote:{
    en:`<p>Eromba is boiled vegetables mashed with roasted fermented fish and dried chilli, served cool, and it is the everyday dish of the Manipur valley. It looks like a vegetable dish and it is not one. The ngari is fermented fish, and without it there is no eromba, only mashed potato with chilli in it.</p>
<p>Ngari is not sold in Norway. It is small carp, sun-dried and packed into a sealed earthen pot for months, and nothing in a Norwegian shop is made that way. Thai or Burmese fermented fish paste is the closest thing that is actually on a shelf here, and the recipe is written for that, with a fallback further down for a kitchen that has neither.</p>
<p>The chilli is the other half of the dish. A Meitei eromba is properly hot, and the heat comes from dried chillies roasted in a dry pan until they blacken at the edges, not from fresh ones. Open a window before you start, because the smoke will make everyone in the room cough, which is normal and only funny the first time.</p>`,
    no:`<p>Eromba er kokte grønnsaker most sammen med ristet gjæret fisk og tørket chili, servert temperert, og retten er hverdagsmat i dalen i Manipur. Den ser ut som en grønnsakrett, men er det ikke. Ngari er gjæret fisk, og uten den finnes det ingen eromba, bare potetmos med chili i.</p>
<p>Ngari selges ikke i Norge. Det er små karpefisker, soltørket og pakket ned i en forseglet leirkrukke i månedsvis, og ingenting i en norsk butikk er laget slik. Thailandsk eller burmesisk gjæret fiskepasta er det nærmeste som faktisk står på en hylle her, og oppskriften er skrevet for den, med en nødløsning lenger nede for et kjøkken som ikke har noen av delene.</p>
<p>Chilien er den andre halvdelen av retten. En eromba hos meiteiene er ordentlig sterk, og styrken kommer fra tørket chili ristet i en tørr panne til kantene svartner, ikke fra fersk. Åpne vinduet før du begynner, for røyken får alle i rommet til å hoste, og det er normalt og bare morsomt første gang.</p>`},
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
    {en:'Roast the dried chillies in a dry pan over a medium flame, turning them, until they darken at the edges and smell toasted.',
     no:'Rist de tørkede chiliene i en tørr panne på middels varme, og snu på dem til kantene mørkner og de lukter ristet.'},
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
    {en:'Shape it into a mound and let it stand until it is no warmer than the room. Eromba is not served hot.',
     no:'Form massen til en haug og la den stå til den ikke er varmere enn rommet. Eromba serveres ikke varm.'}],
  notes:[
    {title:{en:'Why it is served cool', no:'Hvorfor den serveres temperert'},
     body:{en:'Heat drives the volatile part of a ferment off, and it wilts the raw herbs folded in at the end. Letting the dish come down to room temperature holds both in place, so the fermented fish stays forward instead of steaming away and the spring onion keeps its bite.',
           no:'Varme driver den flyktige delen av en gjæring bort, og de rå urtene som vendes inn til slutt, blir slappe. Lar du retten falle til romtemperatur, blir begge deler værende, så den gjærede fisken holder seg framme i stedet for å dampe bort, og vårløken beholder bittet.'}},
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
     body:{en:'A spoonful of fermented bamboo shoot mashed in with everything else makes the dish sour as well as hot. It is the commonest version in Imphal and the one to try second.',
           no:'En skje gjærede bambusskudd most inn sammen med alt det andre gjør retten sur i tillegg til sterk. Det er den vanligste utgaven i Imphal og den man bør prøve som nummer to.'}},
    {title:{en:'Without the fish, honestly', no:'Uten fisken, sagt rett ut'},
     body:{en:'Potato, roasted chilli and raw herbs make a good dish and a genuinely vegetarian one. It is not eromba, and a Meitei cook would not call it that, so give it another name and enjoy it on its own terms.',
           no:'Potet, ristet chili og rå urter gir en god rett, og en som virkelig er vegetarisk. Den er ikke eromba, og en kokk fra meiteiene ville ikke kalt den det, så gi den et annet navn og nyt den på sine egne premisser.'}}]
}

];
