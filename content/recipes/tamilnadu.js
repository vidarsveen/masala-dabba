/* Masala Dabba — recipes for Tamil Nadu (IN-TAM). Contract: docs/recipe-format.md.
   Both languages live in the same file so a quantity is written exactly once and cannot drift.
   Recipes are never narrated: narrate.py only ever sees a reading's html. */
window.RECIPES = window.RECIPES || {};
window.RECIPES['IN-TAM'] = [

{
  id:'idli', dish:'Idli', course:'breakfast', lesson:2, serves:4, veg:true,
  time:{prep:40, cook:15}, hero:'idli', tags:['fermented','steamed','breakfast'],
  title:{en:'Idli, starting with the batter', no:'Idli, med røren som utgangspunkt'},
  blurb:{en:'Steamed rice and lentil cakes, leavened overnight by the bacteria living on the dal.',
         no:'Dampede kaker av ris og linser, hevet over natten av bakteriene som lever på dalen.'},
  heroCaption:{en:'An idli carries no fat, no sugar and no spice. Everything it is served with is there to supply them.',
               no:'En idli har verken fett, sukker eller krydder i seg. Alt den serveres med, er der for å gi den nettopp det.'},
  goesWith:[{en:'Sambar, and a coconut chutney', no:'Sambar og en kokoschutney'},
            {en:'Milagai podi stirred into sesame oil', no:'Milagai podi rørt ut i sesamolje'}],
  headnote:{
    en:`<p>This recipe is mostly waiting. Four hours of soaking, twenty minutes of grinding, then eight to twelve hours on the counter while wild bacteria do the work that yeast does in a loaf. Nothing is added to make it rise, and nothing should be: the leavening is already on the skin of the urad dal when you buy it.</p>
<p>The two ingredients are kept apart until the last moment because they are doing different jobs. The rice brings starch, which the bacteria feed on and which sets into a crumb in the steamer. The urad dal brings the bacteria, and it also brings a protein and a sticky polysaccharide that trap gas the way egg white does. Ground properly it whips up, pales and roughly doubles, and that visible change is the test.</p>
<p>Two things go wrong for people in a cold climate. The batter is ground in a machine that gets hot, which kills the lift, so grind in short bursts with cold water and stop while the bowl is still cool to the hand. And a Norwegian kitchen in January is nowhere near warm enough to ferment anything, so the batter goes in an oven with only the light on.</p>`,
    no:`<p>Denne oppskriften består for det meste av venting. Fire timers bløtlegging, tjue minutters maling, og så åtte til tolv timer på benken mens ville bakterier gjør den jobben gjæren gjør i et brød. Ingenting tilsettes for å få røren til å heve seg, og ingenting bør tilsettes, for hevemiddelet sitter allerede på skallet av urad dal når du kjøper den.</p>
<p>De to ingrediensene holdes fra hverandre til siste øyeblikk fordi de gjør hver sin jobb. Risen bringer stivelse, som bakteriene lever av, og som setter seg til en smule i dampkjelen. Urad dal bringer bakteriene, og den bringer i tillegg et protein og et seigt polysakkarid som fanger gass slik eggehvite gjør. Males den riktig, pisker den seg opp, blir lys og omtrent dobler seg, og den synlige forandringen er selve prøven.</p>
<p>To ting går galt for folk i et kaldt klima. Røren males i en maskin som blir varm, og varmen tar fra den evnen til å heve seg, så mal i korte støt med kaldt vann og stopp mens bollen fortsatt er kald mot hånden. Og et norsk kjøkken i januar er langt fra varmt nok til å gjære noe som helst, så røren settes i stekeovnen med bare lyset på.</p>`},
  ingredients:[
   {group:{en:'The batter', no:'Røren'}, items:[
    {q:300, u:'g', n:{en:'parboiled idli rice', no:'forkokt idli-ris'}, note:{en:'short or medium grain, sold as idli rice', no:'kort- eller mellomkornet, selges som idli rice'}},
    {q:100, u:'g', n:{en:'skinless urad dal', no:'urad dal uten skall'}},
    {q:5, u:'g', n:{en:'fenugreek seed', no:'bukkehornkløverfrø'}},
    {q:10, u:'g', n:{en:'salt', no:'salt'}},
    {q:450, u:'ml', n:{en:'cold water, for grinding', no:'kaldt vann, til malingen'}, scale:'sub', note:{en:'added a little at a time', no:'has i litt om gangen'}},
   ]},
   {group:{en:'For the moulds', no:'Til formene'}, items:[
    {u:'', n:{en:'sesame oil', no:'sesamolje'}, scale:'none', note:{en:'for greasing', no:'til å smøre med'}},
   ]}],
  steps:[
    {en:'Rinse the rice in several changes of water until the water runs almost clear, cover it with cold water and leave it for four hours.',
     no:'Skyll risen i flere omganger til vannet renner nesten klart, dekk den med kaldt vann og la den stå i fire timer.'},
    {en:'Rinse the urad dal and the fenugreek together in a second bowl, cover them with cold water and soak them for the same four hours.',
     no:'Skyll urad dal og bukkehornkløver sammen i en annen bolle, dekk dem med kaldt vann og bløtlegg dem de samme fire timene.'},
    {en:'Drain the dal and grind it first, adding cold water a little at a time, until it is white, light and has about doubled in volume. Stop while the bowl is still cool.',
     no:'Hell av vannet på dalen og mal den først. Ha i kaldt vann litt om gangen til massen er hvit, luftig og omtrent dobbelt så stor. Stopp mens bollen fortsatt er kald.'},
    {en:'Test it by dropping a little into a cup of water. If it floats, the dal has taken up enough air. Scrape it into a large bowl.',
     no:'Prøv den ved å slippe litt i en kopp vann. Flyter den, har dalen tatt opp nok luft. Skrap massen over i en stor bolle.'},
    {en:'Drain the rice and grind it with the rest of the cold water to a batter that is smooth but still faintly gritty between the fingers.',
     no:'Hell av vannet på risen og mal den med resten av det kalde vannet til en røre som er glatt, men fortsatt så vidt grynet mellom fingrene.'},
    {en:'Tip the rice batter onto the dal batter, add the salt, and mix the two together with a clean hand for a minute until no streaks remain.',
     no:'Ha risrøren over dalrøren, tilsett saltet, og bland de to med en ren hånd i et minutt til det ikke er striper igjen.'},
    {en:'Cover the bowl loosely and leave it somewhere warm and draught-free for eight to twelve hours. An oven with only the light on holds about the right temperature.',
     no:'Legg et lokk løst på bollen og sett den et lunt og trekkfritt sted i åtte til tolv timer. En stekeovn med bare lyset på holder omtrent riktig temperatur.'},
    {en:'The batter is ready when it has risen by at least a third, is domed and full of holes, and smells faintly sour. Stir it once, gently, and no more than that.',
     no:'Røren er klar når den har hevet seg minst en tredel, buler og er full av hull, og lukter svakt surt. Rør i den én gang, forsiktig, og ikke mer enn det.'},
    {en:'Grease the idli moulds, fill each one about three-quarters full, and steam over boiling water with the lid on for ten to twelve minutes.',
     no:'Smør idliformene, fyll hver av dem omtrent tre firedeler full, og damp dem over kokende vann med lokk på i ti til tolv minutter.'},
    {en:'A skewer pushed into the middle should come out clean. Lift the plates out, wait two minutes, then ease each idli free with a wet spoon and serve at once.',
     no:'En pinne som stikkes ned i midten, skal komme ut ren. Løft ut platene, vent to minutter, og løsne så hver idli med en våt skje og server med én gang.'}],
  notes:[
    {title:{en:'Why only urad dal will do', no:'Hvorfor bare urad dal duger'},
     body:{en:'Urad carries the wild Leuconostoc and Lactobacillus that leaven the batter, and it also carries a globulin and a sticky polysaccharide that hold on to the gas they make. Toor or moong ground the same way gives you a smooth paste with nothing to trap the bubbles, and the batter rises and then collapses.',
           no:'Urad har de ville bakteriene Leuconostoc og Lactobacillus som hever røren, og den har i tillegg et protein og et seigt polysakkarid som holder på gassen de lager. Toor eller mung malt på samme måte gir en glatt masse uten noe å fange boblene i, og da hever røren seg og faller sammen igjen.'}},
    {title:{en:'Why the grinder must stay cold', no:'Hvorfor kvernen må holde seg kald'},
     body:{en:'The bacteria that do the work are killed above about 45 °C, and a household blender reaches that in a couple of minutes. A stone wet grinder turns slowly and stays cool, which is the whole reason south Indian kitchens still own one. With a blender, grind in short bursts with cold water and let it rest between them.',
           no:'Bakteriene som gjør jobben, dør over omtrent 45 °C, og en vanlig hurtigmikser kommer dit på et par minutter. En steinkvern går langsomt og holder seg kald, og det er hele grunnen til at sørindiske kjøkken fortsatt har en. Bruker du hurtigmikser, mal i korte støt med kaldt vann og la den hvile mellom hver gang.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Ask for idli rice by name. It is a short parboiled grain and behaves quite differently from long-grain rice.',
           no:'Be om idli rice ved navn i indiske butikker på Grønland i Oslo eller i andre større byer. Den «parboiled» risen i vanlige dagligvarebutikker er langkornet og oppfører seg helt annerledes, og den gir en tett idli. Urad dal skal være hvit og uten skall, altså urad dal dhuli eller white urad; den hele svarte med skall på gir grå røre. Idliformer og en dampkjele koster lite i de samme butikkene, og en vanlig dampkurv med små skåler i fungerer godt nok. Om vinteren er et norsk kjøkken for kaldt til å gjære røren, så bruk stekeovnen med bare lyset på.'}}],
  variations:[
    {title:{en:'Day two: dosa', no:'Dag to: dosa'},
     body:{en:'Thin what is left with water until it pours, and spread it thin on a very hot iron griddle. The extra acid that built overnight is what makes a second-day batter spread further and brown better.',
           no:'Spe ut det som er igjen med vann til røren lar seg helle, og bre den tynt utover en glovarm jerntakke. Den ekstra syren som bygde seg opp over natten, er grunnen til at en røre fra dag to brer seg bedre og bruner finere.'}},
    {title:{en:'Day three: uthappam', no:'Dag tre: uthappam'},
     body:{en:'By the third day the batter is properly sour and suits a thick pancake better than a thin one. Pour a small round, press chopped onion, green chilli and curry leaf into the top and cook it through on both sides.',
           no:'Den tredje dagen er røren skikkelig sur og passer bedre til en tykk pannekake enn til en tynn. Hell ut en liten rund, trykk hakket løk, grønn chili og karriblad ned i toppen og stek den gjennom på begge sider.'}},
    {title:{en:'Kanchipuram idli', no:'Kanchipuram idli'},
     body:{en:'A temple version, steamed in a deeper mould and seasoned in the batter with crushed pepper, cumin, ginger and a spoon of ghee. It is the one idli that tastes of something on its own.',
           no:'En tempelversjon som dampes i en dypere form og krydres i selve røren med knust pepper, spisskummen, ingefær og en skje ghee. Det er den ene idlien som smaker av noe i seg selv.'}}]
},

{
  id:'sambar', dish:'Sambar', course:'side', lesson:3, serves:4, veg:true,
  time:{prep:20, cook:45}, hero:'sambar', tags:['dal','tamarind','everyday'],
  title:{en:'Sambar', no:'Sambar'},
  blurb:{en:'A soured dal stew with vegetables in it, thick enough to hold a spoonful of rice together.',
         no:'En syrnet dal-gryte med grønnsaker i, tykk nok til å holde en skje ris sammen.'},
  heroCaption:{en:'The dal is cooked until it falls apart, and the vegetables are cut large enough to be picked out and eaten separately.',
               no:'Dalen kokes til den går i oppløsning, og grønnsakene skjæres store nok til at de kan plukkes ut og spises for seg.'},
  goesWith:[{en:'Plain rice, with the sambar poured over it', no:'Vanlig ris med sambaren helt over'},
            {en:'Idli or dosa at breakfast', no:'Idli eller dosa til frokost'}],
  headnote:{
    en:`<p>Sambar is the first thing poured over the rice on a banana leaf and the thing a Tamil household cooks most often, and it is worth being clear about what it is not. It is not a thin soup and it is not a curry. It is a dal stew, thickened by the lentil itself, soured with tamarind and seasoned with one ground blend.</p>
<p>Three things decide whether it works. The toor dal has to be cooked until it has completely collapsed, because a sambar with recognisable lentils in it has not been cooked long enough. The tamarind has to go in before the vegetables are soft, so the raw sourness cooks out. And the sambar podi has to simmer in the pot for a few minutes rather than being stirred in at the end, or the coriander in it tastes dusty.</p>
<p>The vegetables are whatever the house has, and the classic set is drumstick, aubergine, pumpkin and small shallots. Cut them large. They are meant to be picked out and eaten as vegetables, not to dissolve into the gravy.</p>`,
    no:`<p>Sambaren er det første som helles over risen på et bananblad, og den er det en tamilsk husholdning lager oftest. Det er verdt å være tydelig på hva den ikke er. Den er verken en tynn suppe eller en karri. Den er en dal-gryte som jevnes av linsen selv, syrnes med tamarind og krydres med én malt blanding.</p>
<p>Tre ting avgjør om den blir god. Toor dal må kokes til den har falt helt fra hverandre, for en sambar med linser du kan kjenne igjen, har ikke kokt lenge nok. Tamarinden må i før grønnsakene er møre, så den rå syrligheten rekker å koke bort. Og sambar podien må småkoke i gryta i noen minutter i stedet for å røres inn til slutt, ellers smaker korianderen i den støvete.</p>
<p>Grønnsakene er det huset har, og den klassiske kombinasjonen er drumstick, aubergine, gresskar og små sjalottløk. Skjær dem store. De skal plukkes ut og spises som grønnsaker og ikke løses opp i sausen.</p>`},
  ingredients:[
   {group:{en:'The dal and the vegetables', no:'Dalen og grønnsakene'}, items:[
    {q:200, u:'g', n:{en:'toor dal', no:'toor dal'}, note:{en:'rinsed', no:'skylt'}},
    {q:800, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {q:4, u:'g', n:{en:'turmeric', no:'gurkemeie'}},
    {q:350, u:'g', n:{en:'mixed vegetables', no:'blandede grønnsaker'}, note:{en:'drumstick, aubergine, pumpkin and carrot, in large pieces', no:'drumstick, aubergine, gresskar og gulrot, i store biter'}},
    {q:150, u:'g', n:{en:'small shallots', no:'små sjalottløk'}, note:{en:'peeled and left whole', no:'skrelt og hele'}},
    {q:1, u:'', n:{en:'tomato', no:'tomat'}, round:'half', note:{en:'quartered', no:'i båter'}},
   ]},
   {group:{en:'The souring and the blend', no:'Syrningen og blandingen'}, items:[
    {q:30, u:'g', n:{en:'tamarind', no:'tamarind'}, note:{en:'from a block, seeds and fibre picked out', no:'fra blokk, uten kjerner og tråder'}},
    {q:250, u:'ml', n:{en:'hot water, for the tamarind', no:'varmt vann, til tamarinden'}, scale:'sub'},
    {q:20, u:'g', n:{en:'sambar podi', no:'sambar podi'}},
    {q:10, u:'g', n:{en:'jaggery', no:'jaggery'}, note:{en:'optional, to round the sourness', no:'valgfritt, for å runde av syren'}},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]},
   {group:{en:'The tempering', no:'Temperingen'}, items:[
    {q:30, u:'ml', n:{en:'sesame oil', no:'sesamolje'}},
    {q:5, u:'g', n:{en:'mustard seed', no:'sennepsfrø'}},
    {q:3, u:'g', n:{en:'fenugreek seed', no:'bukkehornkløverfrø'}},
    {q:2, u:'', n:{en:'dried red chillies', no:'tørkede røde chili'}, round:'half'},
    {q:1, u:'', n:{en:'sprig of curry leaves', no:'kvist karriblad'}, round:'half', scale:'none'},
    {q:2, u:'g', n:{en:'asafoetida', no:'asafoetida'}},
    {q:1, u:'', n:{en:'small bunch of coriander', no:'liten bunt koriander'}, round:'half', scale:'none'},
   ]}],
  steps:[
    {en:'Boil the toor dal with the water and the turmeric until it collapses completely, about forty minutes in a pan or twelve in a pressure cooker. Whisk it smooth.',
     no:'Kok toor dal med vannet og gurkemeien til den faller helt fra hverandre, omtrent førti minutter i kjele eller tolv i trykkoker. Visp den glatt.'},
    {en:'Meanwhile soak the tamarind in the hot water for fifteen minutes, then squeeze it with your fingers and strain the extract, throwing the pulp away.',
     no:'Bløtlegg imens tamarinden i det varme vannet i femten minutter, klem den ut med fingrene og sil av ekstraktet. Kast fruktkjøttet.'},
    {en:'Put the tamarind extract in a wide pan with the shallots and the harder vegetables, salt it, and simmer until they are almost tender.',
     no:'Ha tamarindekstraktet i en vid gryte sammen med sjalottløken og de faste grønnsakene, salt, og la det småkoke til de nesten er møre.'},
    {en:'Add the aubergine and the tomato and cook for five minutes more. The pan should smell sour rather than sharp by now.',
     no:'Ha i auberginen og tomaten og la det koke fem minutter til. Nå skal gryta lukte syrlig og ikke skarpt.'},
    {en:'Stir in the sambar podi and let it simmer for three or four minutes, so the ground coriander in it loses its raw taste.',
     no:'Rør inn sambar podien og la den småkoke i tre–fire minutter, så den malte korianderen mister den rå smaken.'},
    {en:'Pour in the cooked dal, add the jaggery if you are using it, and thin with hot water until the sambar just coats a spoon.',
     no:'Hell i den kokte dalen, ha i jaggeryen hvis du bruker den, og spe med varmt vann til sambaren så vidt legger seg på en skje.'},
    {en:'Simmer gently for ten minutes, stirring now and then so the dal does not catch on the base. Taste for salt and sourness.',
     no:'La det småkoke forsiktig i ti minutter, og rør av og til så dalen ikke setter seg fast i bunnen. Smak til med salt og syre.'},
    {en:'Heat the sesame oil in a small pan until it shimmers. Put in the mustard seed and wait for it to pop, which takes seconds.',
     no:'Varm sesamoljen i en liten panne til den er blank. Ha i sennepsfrøene og vent til de spretter, noe som tar sekunder.'},
    {en:'Add the fenugreek, the dried chillies and the curry leaves, count to five, then take the pan off the heat and stir in the asafoetida.',
     no:'Ha i bukkehornkløveren, de tørkede chiliene og karribladene, tell til fem, ta så pannen av platen og rør inn asafoetidaen.'},
    {en:'Pour the whole tempering over the sambar, put the lid on and leave it for five minutes. Scatter the coriander over just before serving.',
     no:'Hell hele temperingen over sambaren, legg på lokket og la den stå i fem minutter. Strø korianderen over rett før servering.'}],
  notes:[
    {title:{en:'Why the dal has to collapse', no:'Hvorfor dalen må falle fra hverandre'},
     body:{en:'The lentil is the thickener. Toor dal that still holds its shape has not released its starch, and the sambar stays watery however long you reduce it. Cooking it separately and whisking it smooth before it meets the acid also matters, because tamarind slows the softening down considerably.',
           no:'Linsen er jevningen. Toor dal som fortsatt holder formen, har ikke sluppet stivelsen sin, og da blir sambaren vassen uansett hvor lenge du koker den inn. Det betyr også noe at dalen kokes for seg og vispes glatt før den møter syren, for tamarind bremser oppmykingen kraftig.'}},
    {title:{en:'Why the blend is cooked and the tempering is not', no:'Hvorfor blandingen kokes og temperingen ikke gjør det'},
     body:{en:'Sambar podi is mostly ground coriander, which tastes dusty until it has had a few minutes in liquid. The tempering is the opposite: whole seeds in hot oil for a matter of seconds, poured over at the very end so the smell is still on the surface when the bowl reaches the table.',
           no:'Sambar podi er stort sett malt koriander, og den smaker støvete til den har fått noen minutter i væske. Temperingen er det motsatte. Hele frø får noen sekunder i varm olje og helles over helt til slutt, så duften fortsatt ligger på overflaten når skålen kommer på bordet.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Buy tamarind as a block with the seeds still in it rather than as a jar of paste, which is usually thinned and salted.',
           no:'Kjøp tamarind i blokk med kjernene i stedet for ferdig pasta på glass, som ofte er spedd ut og saltet. Blokken holder seg i årevis i kjøleskapet. Toor dal heter også tuvar eller arhar dal og selges i indiske butikker på Grønland i Oslo; gule erter er ikke det samme og jevner annerledes. Drumstick, altså moringa-stilker, får du frosne i de samme butikkene. Asafoetida selges som gult pulver i små bokser, og en klype er nok; norsk hvitløkspulver gjør ikke den samme jobben. Ferske karriblader kommer inn i puljer, så kjøp mange og frys dem.'}}],
  variations:[
    {title:{en:'Arachuvitta sambar', no:'Arachuvitta sambar'},
     body:{en:'Instead of the ready-ground podi, roast coriander seed, chana dal, dried chilli and a little fenugreek in a dry pan, grind them with fresh coconut and add that paste. It is the festival version and tastes considerably fresher.',
           no:'I stedet for ferdigmalt podi rister du korianderfrø, chana dal, tørket chili og litt bukkehornkløver i tørr panne, maler det med fersk kokos og har pastaen i. Det er festversjonen, og den smaker mye friskere.'}},
    {title:{en:'Sambar for idli', no:'Sambar til idli'},
     body:{en:'Made to go with idli it is looser, sweeter and usually has only shallots in it. Leave the hard vegetables out, use a little more jaggery and thin it further, because it has to soak into the cake rather than sit on rice.',
           no:'Sambar som skal til idli, er løsere og søtere og har som regel bare sjalottløk i seg. Sløyf de faste grønnsakene, bruk litt mer jaggery og spe den tynnere, for den skal trekke inn i kaken og ikke ligge på ris.'}}]
},

{
  id:'milagu-rasam', dish:'Rasam', course:'side', lesson:3, serves:4, veg:true,
  time:{prep:10, cook:20}, hero:'rasam', tags:['pepper','tamarind','broth'],
  title:{en:'Milagu rasam', no:'Milagu rasam'},
  blurb:{en:'A thin pepper and tamarind broth with no chilli in it, half poured over rice and half drunk.',
         no:'En tynn kraft av pepper og tamarind uten chili i, som halvt helles over ris og halvt drikkes.'},
  heroCaption:{en:'Rasam is judged on how fresh the pepper smells, which is why it never gets a hard boil.',
               no:'En rasam bedømmes på hvor friskt pepperen lukter, og derfor får den aldri fosskoke.'},
  goesWith:[{en:'Plain rice and a spoon of ghee', no:'Vanlig ris og en skje ghee'},
            {en:'An appalam, broken over the top', no:'En appalam, brukket over'}],
  headnote:{
    en:`<p>This is the oldest and plainest rasam, and it is the dish a Tamil household makes for somebody with a cold. There is no chilli in it at all. The heat is black pepper, pounded coarse with cumin a few minutes before it goes in, and that is the whole argument of the first reading in one pan: pepper doing a job that chilli never took over.</p>
<p>The method has one rule and everything else follows from it. Rasam must not boil hard. The moment it froths up at the edges it comes off the heat, because a rolling boil flattens the pepper, drives off the coriander and turns a bright broth into a dull one. Most people who find rasam disappointing have boiled it.</p>
<p>It is also very quick. If the tamarind is already soaked, the whole thing takes fifteen minutes, and it is the cheapest possible way to make a plate of plain rice into a meal.</p>`,
    no:`<p>Dette er den eldste og enkleste rasamen, og den er retten en tamilsk husholdning lager til noen som er forkjølet. Den har ikke chili i seg i det hele tatt. Styrken kommer fra svart pepper som støtes grovt sammen med spisskummen noen minutter før den går i, og dermed ligger hele poenget fra den første leseteksten i én kjele: pepperen gjør en jobb chilien aldri overtok.</p>
<p>Metoden har én regel, og alt annet følger av den. Rasamen må ikke fosskoke. I det øyeblikket den skummer langs kanten, skal den av platen, for hard koking flater ut pepperen, driver bort korianderen og gjør en klar kraft matt. De fleste som synes rasam er skuffende, har kokt den.</p>
<p>Den går dessuten svært fort. Er tamarinden alt bløtlagt, tar hele retten et kvarter, og den er den billigste måten å gjøre en tallerken med ris om til et måltid på.</p>`},
  ingredients:[
   {group:{en:'The broth', no:'Kraften'}, items:[
    {q:25, u:'g', n:{en:'tamarind', no:'tamarind'}, note:{en:'from a block', no:'fra blokk'}},
    {q:700, u:'ml', n:{en:'hot water', no:'varmt vann'}, scale:'sub'},
    {q:8, u:'g', n:{en:'black peppercorns', no:'svarte pepperkorn'}},
    {q:8, u:'g', n:{en:'cumin seed', no:'spisskummenfrø'}},
    {q:4, u:'', n:{en:'garlic cloves', no:'hvitløksfedd'}, round:'half', note:{en:'crushed, skin and all', no:'knust, med skall og alt'}},
    {q:2, u:'g', n:{en:'turmeric', no:'gurkemeie'}},
    {q:100, u:'ml', n:{en:'thin dal water', no:'tynt dalvann'}, scale:'sub', note:{en:'optional, for body', no:'valgfritt, for litt fylde'}},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]},
   {group:{en:'The tempering', no:'Temperingen'}, items:[
    {q:20, u:'ml', n:{en:'ghee', no:'ghee'}, note:{en:'or sesame oil', no:'eller sesamolje'}},
    {q:4, u:'g', n:{en:'mustard seed', no:'sennepsfrø'}},
    {q:1, u:'', n:{en:'dried red chilli', no:'tørket rød chili'}, round:'half', note:{en:'whole, for smell rather than heat', no:'hel, for duften og ikke styrken'}},
    {q:1, u:'', n:{en:'sprig of curry leaves', no:'kvist karriblad'}, round:'half', scale:'none'},
    {q:2, u:'g', n:{en:'asafoetida', no:'asafoetida'}},
    {q:1, u:'', n:{en:'small bunch of coriander', no:'liten bunt koriander'}, round:'half', scale:'none'},
   ]}],
  steps:[
    {en:'Soak the tamarind in the hot water for fifteen minutes, squeeze it out with your fingers and strain the extract into a pan.',
     no:'Bløtlegg tamarinden i det varme vannet i femten minutter, klem den ut med fingrene og sil ekstraktet ned i en kjele.'},
    {en:'Pound the peppercorns and the cumin together in a mortar until they are broken but not powdered. You want pieces you can see.',
     no:'Støt pepperkornene og spisskummenen sammen i en morter til de er knust, men ikke pulverisert. Du vil ha biter du kan se.'},
    {en:'Crush the garlic under the flat of a knife and drop it into the tamarind water with the turmeric and a good pinch of salt.',
     no:'Knus hvitløken under den flate siden av en kniv og slipp den i tamarindvannet sammen med gurkemeien og en god klype salt.'},
    {en:'Bring the pan to a bare simmer and hold it there for eight minutes, until the smell of raw tamarind has gone.',
     no:'La kjelen så vidt komme til småkoking og hold den der i åtte minutter, til lukten av rå tamarind er borte.'},
    {en:'Stir in the pounded pepper and cumin and the dal water if you are using it. Let it come back to the edge of a simmer.',
     no:'Rør inn den støtte pepperen og spisskummenen, og dalvannet hvis du bruker det. La det så vidt komme til småkoking igjen.'},
    {en:'The moment the surface froths and rises, take the pan off the heat. Do not let it boil, and do not put it back.',
     no:'I det øyeblikket overflaten skummer og hever seg, tar du kjelen av platen. Den skal ikke koke, og den skal ikke tilbake på platen.'},
    {en:'Heat the ghee in a small pan, put in the mustard seed and wait for it to pop, then add the whole chilli and the curry leaves.',
     no:'Varm gheen i en liten panne, ha i sennepsfrøene og vent til de spretter, og ha så i den hele chilien og karribladene.'},
    {en:'Take that pan off the heat, stir in the asafoetida and pour the whole thing over the rasam.',
     no:'Ta pannen av platen, rør inn asafoetidaen og hell hele blandingen over rasamen.'},
    {en:'Scatter the coriander over, cover the pan and let it stand for five minutes. Serve warm rather than hot.',
     no:'Strø korianderen over, legg på lokk og la det stå i fem minutter. Server lunken, ikke rykende varm.'}],
  notes:[
    {title:{en:'Why it must not boil', no:'Hvorfor den ikke må koke'},
     body:{en:'Almost everything you can smell in a rasam is volatile, and a hard boil carries it out of the pan as steam. Pepper loses its top note within a minute, and fresh coriander loses it faster than that. Taking the pan off at the first froth is the difference between a bright broth and a dull one.',
           no:'Nesten alt du kan lukte i en rasam, er flyktig, og hard koking bærer det ut av kjelen som damp. Pepperen mister topptonen på under et minutt, og den friske korianderen mister den enda raskere. Forskjellen på en klar og en sløv kraft ligger i å ta kjelen av ved det første skummet.'}},
    {title:{en:'Why the pepper is pounded and not ground', no:'Hvorfor pepperen støtes og ikke males'},
     body:{en:'Coarse pieces release their oil slowly and arrive in the mouth one at a time, which is how a Tamil cook uses pepper generally. A fine powder gives up everything at once, goes cloudy in the broth and leaves a flat burn behind instead of separate hits of it.',
           no:'Grove biter gir fra seg oljen langsomt og kommer én om gangen i munnen, og det er slik en tamilsk kokk bruker pepper i det hele tatt. Et fint pulver gir fra seg alt på én gang, gjør kraften uklar og etterlater en flat svie i stedet for små støt ett og ett.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Grind nothing in advance. Whole peppercorns and whole cumin keep for a year, and both lose most of what matters within days of being ground.',
           no:'Mal ingenting på forhånd. Hele pepperkorn og hel spisskummen holder seg i et år, og begge mister det meste som betyr noe, i løpet av noen dager etter malingen. Ferdigmalt pepper fra dagligvarebutikken er for svak her, for pepperen er hele retten. Asafoetida får du i indiske butikker; den gule pulverblandingen inneholder hvetemel, og det står som regel på pakken. Ghee selges i de samme butikkene, og smør som er klaret hjemme, fungerer like godt.'}}],
  variations:[
    {title:{en:'Tomato rasam', no:'Tomatrasam'},
     body:{en:'The everyday version. Add two ripe tomatoes, crushed, with the tamarind, and a teaspoon of rasam podi instead of half the pepper. It is milder, redder and what most households make on an ordinary day.',
           no:'Hverdagsversjonen. Ha i to modne tomater, knust, sammen med tamarinden, og litt rasam podi i stedet for halvparten av pepperen. Den blir mildere og rødere, og det er den de fleste husholdninger lager til vanlig.'}},
    {title:{en:'Lemon rasam', no:'Sitronrasam'},
     body:{en:'Leave the tamarind out, use plain dal water, and squeeze lemon in off the heat at the very end. It is much lighter and is often served last, after the sambar round.',
           no:'Sløyf tamarinden, bruk rent dalvann og press sitron i med kjelen av platen helt til slutt. Den blir mye lettere, og den serveres ofte sist, etter sambarrunden.'}}]
},

{
  id:'chettinad-chicken', dish:'Chettinad chicken', course:'main', lesson:3, serves:4, veg:false,
  time:{prep:30, cook:45}, hero:'chettinad-chicken', tags:['chettinad','roasted masala','chicken'],
  title:{en:'Chettinad chicken', no:'Chettinad-kylling'},
  blurb:{en:'Chicken cooked down in a masala of whole spices roasted almost to black, with fennel first and pepper behind it.',
         no:'Kylling kokt ned i en masala av hele krydder ristet nesten til svart, med fennikelen først og pepperen bak.'},
  heroCaption:{en:'The gravy is dark because the spices were roasted almost to burning, not because the dish cooked for a long time.',
               no:'Sausen er mørk fordi krydderet ble ristet nesten til det brant, ikke fordi retten har kokt lenge.'},
  goesWith:[{en:'Plain rice, or dosa the next morning', no:'Vanlig ris, eller dosa morgenen etter'},
            {en:'A thin rasam alongside', no:'En tynn rasam ved siden av'}],
  headnote:{
    en:`<p>Everything that makes this dish comes from one step, and the step takes six minutes. Whole spices go into a dry pan with no oil at all and are roasted until they are dark brown going on black, the kitchen smells scorched and you are convinced you have ruined them. That is where a Chettinad cook stops. Roasting that far drives off the fresh top notes and leaves something heavier and more like coffee, and it is why this masala tastes deep rather than merely hot.</p>
<p>Three of the spices are the ones reading one is about. Star anise is not grown in India and arrived with Chettiar money out of Burma and Malaya. Kalpasi is a lichen that tastes of nothing until it meets hot fat, and then it puts a floor under everything else. Marathi mokku is a hard dark bud, most often identified as a caper, and it sits between clove and pepper.</p>
<p>After that it is a simple dish. Small shallots rather than onion, a lot of curry leaf, chicken on the bone, and enough water to let it cook rather than to make a sauce. The finished gravy should cling to the meat, not pool around it.</p>`,
    no:`<p>Alt som gjør denne retten til det den er, ligger i ett steg, og steget tar seks minutter. Hele krydder går i en tørr panne uten olje og ristes til de er mørkebrune på vei mot svart, kjøkkenet lukter svidd, og du er overbevist om at du har ødelagt dem. Der stopper en kokk fra Chettinad. Ristingen driver bort de friske topptonene og lar noe tyngre bli igjen, nærmere kaffe, og det er derfor masalaen smaker dyp og ikke bare sterk.</p>
<p>Tre av kryddene er de lesetekst én handler om. Stjerneanis dyrkes ikke i India og kom hit med chettiarpenger fra Burma og Malaya. Kalpasi er en lav som ikke smaker noe før den møter varmt fett, og som da legger et gulv under alt det andre. Marathi mokku er en hard og mørk knopp som oftest regnes som en kapersknopp, og den ligger mellom nellik og pepper.</p>
<p>Etter det er retten enkel. Små sjalottløk i stedet for vanlig løk, mye karriblad, kylling med bein, og akkurat nok vann til at den koker uten å bli en saus. Den ferdige sausen skal klistre seg til kjøttet og ikke samle seg rundt det.</p>`},
  ingredients:[
   {group:{en:'The roasted masala', no:'Den ristede masalaen'}, items:[
    {q:10, u:'g', n:{en:'coriander seed', no:'korianderfrø'}},
    {q:8, u:'g', n:{en:'fennel seed', no:'fennikelfrø'}},
    {q:6, u:'g', n:{en:'black peppercorns', no:'svarte pepperkorn'}},
    {q:4, u:'', n:{en:'dried red chillies', no:'tørkede røde chili'}, round:'half'},
    {q:1, u:'', n:{en:'piece of cinnamon bark', no:'bit kanelbark'}, round:'half'},
    {q:3, u:'', n:{en:'cloves', no:'hele nellik'}, round:'half'},
    {q:1, u:'', n:{en:'star anise', no:'stjerneanis'}, round:'half'},
    {q:2, u:'g', n:{en:'kalpasi', no:'kalpasi'}, note:{en:'a small pinch; it looks like grey paper shavings', no:'en liten klype; den ser ut som grå papirspon'}},
    {q:2, u:'', n:{en:'marathi mokku', no:'marathi mokku'}, round:'half', note:{en:'or two extra cloves', no:'eller to nellik ekstra'}},
    {q:5, u:'g', n:{en:'white poppy seed', no:'hvite valmuefrø'}},
    {q:40, u:'g', n:{en:'grated coconut', no:'revet kokos'}, note:{en:'fresh or frozen', no:'fersk eller frossen'}},
   ]},
   {group:{en:'The pot', no:'Gryta'}, items:[
    {q:900, u:'g', n:{en:'chicken on the bone', no:'kylling med bein'}, note:{en:'thighs and drumsticks, skin off, cut through', no:'lår og klubber, uten skinn, delt gjennom beinet'}},
    {q:250, u:'g', n:{en:'small shallots', no:'små sjalottløk'}, note:{en:'sliced', no:'skivet'}},
    {q:200, u:'g', n:{en:'tomatoes', no:'tomater'}, note:{en:'chopped', no:'hakket'}},
    {q:25, u:'g', n:{en:'ginger', no:'ingefær'}, note:{en:'ground to a paste', no:'malt til pasta'}},
    {q:25, u:'g', n:{en:'garlic', no:'hvitløk'}, note:{en:'ground to a paste', no:'malt til pasta'}},
    {q:60, u:'ml', n:{en:'sesame oil', no:'sesamolje'}},
    {q:6, u:'g', n:{en:'turmeric', no:'gurkemeie'}},
    {q:2, u:'', n:{en:'sprigs of curry leaves', no:'kvister karriblad'}, round:'half', scale:'none'},
    {q:250, u:'ml', n:{en:'hot water', no:'varmt vann'}, scale:'sub'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Rub the chicken with the turmeric and a good pinch of salt and leave it while you make the masala.',
     no:'Gni kyllingen inn med gurkemeien og en god klype salt, og la den ligge mens du lager masalaen.'},
    {en:'Put a heavy dry pan on a medium flame. Roast the coriander, fennel, pepper, chillies, cinnamon, cloves, star anise and marathi mokku together, moving them constantly.',
     no:'Sett en tung, tørr panne på middels varme. Rist koriander, fennikel, pepper, chili, kanel, nellik, stjerneanis og marathi mokku sammen, og hold dem i bevegelse hele tiden.'},
    {en:'Keep going for five or six minutes, until the spices are dark brown going on black and the kitchen smells scorched. Add the kalpasi for the last twenty seconds only.',
     no:'Hold det gående i fem–seks minutter, til krydderet er mørkebrunt på vei mot svart og det lukter svidd på kjøkkenet. Ha i kalpasien bare de siste tjue sekundene.'},
    {en:'Tip the spices onto a cold plate to stop them cooking, then roast the poppy seed and the coconut in the same pan until the coconut turns golden brown.',
     no:'Hell krydderet over på en kald tallerken så det slutter å steke, og rist så valmuefrøene og kokosen i den samme pannen til kokosen blir gyllenbrun.'},
    {en:'Grind everything together with a splash of water to a thick, dark paste. Scrape the grinder out; this masala is worth every bit of it.',
     no:'Mal alt sammen med en skvett vann til en tykk, mørk pasta. Skrap kvernen ren, for det er verdt å få med seg hver rest av denne masalaen.'},
    {en:'Heat the sesame oil in a heavy pan and fry the shallots over a medium flame until they are properly brown at the edges, about ten minutes.',
     no:'Varm sesamoljen i en tung gryte og stek sjalottløken på middels varme til den er skikkelig brun i kantene, omtrent ti minutter.'},
    {en:'Stir in the ginger and garlic paste and one sprig of the curry leaves, and cook until the raw smell goes, about two minutes.',
     no:'Rør inn ingefær- og hvitløkspastaen og den ene kvisten karriblad, og la det surre til den rå lukten er borte, omtrent to minutter.'},
    {en:'Add the tomatoes and cook them down until they collapse and the oil starts to separate at the edge of the pan.',
     no:'Ha i tomatene og kok dem ned til de faller sammen og oljen begynner å skille seg ut langs kanten av gryta.'},
    {en:'Stir in the ground masala and fry it for three minutes, which is long enough to cook the paste but not long enough to burn it a second time.',
     no:'Rør inn den malte masalaen og stek den i tre minutter. Det er lenge nok til å gjennomsteke pastaen, men ikke lenge nok til å svi den en gang til.'},
    {en:'Add the chicken, turn it until every piece is coated, salt it, and let it fry in the masala for five minutes without any liquid.',
     no:'Ha i kyllingen, vend den til hver bit er dekket, salt, og la den steke i masalaen i fem minutter uten væske.'},
    {en:'Pour in the hot water, cover, and simmer for twenty-five minutes until the chicken is tender and the gravy clings to it. Add the last curry leaves and let it stand for ten minutes.',
     no:'Hell i det varme vannet, legg på lokk og la det småkoke i tjuefem minutter til kyllingen er mør og sausen legger seg rundt den. Ha i de siste karribladene og la retten stå i ti minutter.'}],
  notes:[
    {title:{en:'Why the roast goes so far', no:'Hvorfor ristingen går så langt'},
     body:{en:'A light roast keeps the volatile top notes, which is what a north Indian garam masala is after. Taking the same spices much further breaks those down and builds heavier roasted compounds instead, so the blend reads as depth rather than brightness. It also keeps for months, which mattered to a community whose men were abroad for years.',
           no:'En lett risting beholder de flyktige topptonene, og det er nettopp det en nordindisk garam masala vil ha. Tar du de samme kryddene mye lenger, brytes topptonene ned og tyngre ristede forbindelser bygger seg opp i stedet, så blandingen oppleves som dybde og ikke som friskhet. Den holder seg dessuten i måneder, og det betydde mye i et miljø der mennene var i utlandet år om gangen.'}},
    {title:{en:'Why the kalpasi goes in last', no:'Hvorfor kalpasien går i sist'},
     body:{en:'It is a lichen, thin and dry, and it burns long before a peppercorn does. Twenty seconds in the pan is enough to open it up. Burnt kalpasi is bitter and there is no way to take it out again, so add it at the end of the roast and watch it.',
           no:'Kalpasi er en lav, tynn og tørr, og den brenner lenge før et pepperkorn gjør det. Tjue sekunder i pannen er nok til å åpne den. Svidd kalpasi er bitter, og den lar seg ikke fjerne igjen, så ha den i helt til slutt i ristingen og følg med.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Buy chicken on the bone and ask for it to be cut through, because the bone is what keeps the pieces from drying out over half an hour in a thick masala.',
           no:'Kjøp kylling med bein og be om å få den delt gjennom beinet, for beinet er det som holder bitene saftige gjennom en halvtime i en tykk masala. Halalslakterne på Grønland i Oslo og i de fleste større byer deler den for deg. Kalpasi selges i indiske butikker som kalpasi, dagad phool eller black stone flower. Marathi mokku er vanskeligere å oppdrive og heter av og til marathi moggu; får du den ikke, bruk to nellik ekstra og si fra at du gjorde det. Revet kokos kjøper du frossen i asiatiske butikker, og den er langt bedre enn tørket kokos fra bakeavdelingen. Hvite valmuefrø må bestilles i indisk butikk, for de blå i dagligvarebutikken gjør pastaen grå.'}}],
  variations:[
    {title:{en:'Chettinad pepper chicken', no:'Chettinad-pepperkylling'},
     body:{en:'Milagu kozhi is the drier cousin. Double the pepper, leave out the tomato, the coconut and the water, and fry the chicken down until the masala is stuck to it and there is no gravy at all.',
           no:'Milagu kozhi er den tørre fetteren. Doble pepperen, sløyf tomaten, kokosen og vannet, og stek kyllingen ned til masalaen sitter fast på den og det ikke er saus igjen.'}},
    {title:{en:'With goat instead', no:'Med geitekjøtt i stedet'},
     body:{en:'The same masala suits goat on the bone very well, and it is the version served at weddings in Chettinad. Allow an hour and a half of gentle simmering, or twenty minutes in a pressure cooker.',
           no:'Den samme masalaen passer svært godt til geitekjøtt med bein, og det er utgaven som serveres i bryllup i Chettinad. Regn med halvannen time med forsiktig småkoking, eller tjue minutter i trykkoker.'}},
    {title:{en:'Vegetarian, with mushrooms', no:'Vegetarisk, med sopp'},
     body:{en:'The Chettiar households themselves eat vegetarian most of the week. Brown chestnut mushrooms hard first so they lose their water, then treat them exactly as the chicken, with half the liquid and ten minutes rather than twenty-five.',
           no:'Chettiarfamiliene spiser selv vegetarisk mesteparten av uka. Brun sjampinjongene hardt først så de mister vannet, og behandle dem deretter nøyaktig slik som kyllingen, med halvparten så mye væske og ti minutter i stedet for tjuefem.'}}]
},

{
  id:'filter-coffee', dish:'Filter coffee', course:'snack', lesson:2, serves:4, veg:true,
  time:{prep:5, cook:25}, hero:'filter-coffee', tags:['coffee','chicory','dabara'],
  title:{en:'Filter coffee, and the pour', no:'Filterkaffe, og hellingen'},
  blurb:{en:'A slow-dripped decoction, boiling milk and sugar, poured between two vessels until it foams.',
         no:'Et langsomt dryppet konsentrat med kokende melk og sukker, helt fram og tilbake mellom to kar til det skummer.'},
  heroCaption:{en:'The foam is not decoration. It is what everybody is judging, and it comes from the pouring.',
               no:'Skummet er ikke pynt. Det er dette alle bedømmer, og det kommer av hellingen.'},
  goesWith:[{en:'An idli or two, at seven in the morning', no:'En idli eller to, klokka sju om morgenen'},
            {en:'Nothing at all, at four in the afternoon', no:'Ingenting i det hele tatt, klokka fire om ettermiddagen'}],
  headnote:{
    en:`<p>Coffee, not tea, is the Tamil drink. It is grown in the state, in the Nilgiri and Shevaroy hills, and it is made at home twice a day in a piece of equipment that does one thing: two stainless cylinders that stack, with a perforated plate between them and a lid on top.</p>
<p>What comes out of the filter is not coffee. It is decoction, thick and bitter and far too strong, and it is used a spoonful at a time the way an espresso would be. The proportion that matters is roughly one part decoction to three or four parts milk, and the milk has to be properly hot, because cold milk gives a grey, flat drink whatever else you do.</p>
<p>Then the pour. The mixture goes back and forth between a tumbler and a wide-lipped bowl, the dabara, held as far apart as your arms allow. It is not showmanship. It cools the coffee from scalding to drinkable in about eight passes and beats air into it at the same time, and the head of foam that raises is what the whole thing is judged on.</p>`,
    no:`<p>Kaffe, ikke te, er drikken i Tamil Nadu. Den dyrkes i delstaten, i Nilgiri- og Shevaroy-åsene, og den lages hjemme to ganger om dagen i et redskap som gjør én ting: to sylindere av stål som står oppå hverandre, med en plate full av hull mellom seg og et lokk på toppen.</p>
<p>Det som kommer ut av filteret, er ikke kaffe. Det er et konsentrat, tykt og bittert og altfor sterkt, og det brukes en skje om gangen slik en espresso ville blitt brukt. Forholdet som betyr noe, er omtrent én del konsentrat mot tre eller fire deler melk, og melken må være skikkelig varm, for kald melk gir en grå og flat drikk uansett hva du ellers gjør.</p>
<p>Så kommer hellingen. Blandingen går fram og tilbake mellom et beger og en vid skål, dabaraen, holdt så langt fra hverandre som armene rekker. Det er ikke oppvisning. Hellingen kjøler kaffen fra skåldende til drikkbar på omtrent åtte runder og pisker luft inn i den samtidig, og skumlaget som blir pisket opp, er det hele saken bedømmes på.</p>`},
  ingredients:[
   {group:{en:'', no:''}, items:[
    {q:50, u:'g', n:{en:'finely ground coffee', no:'finmalt kaffe'}, note:{en:'a dark roast blended with chicory, finer than a drip grind', no:'en mørk brenning blandet med sikori, finere enn til traktekaffe'}},
    {q:300, u:'ml', n:{en:'water, just off the boil', no:'vann, så vidt av kokepunktet'}},
    {q:700, u:'ml', n:{en:'whole milk', no:'helmelk'}},
    {q:40, u:'g', n:{en:'sugar', no:'sukker'}, note:{en:'to taste, but it is meant to be sweet', no:'etter smak, men den skal være søt'}},
   ]}],
  steps:[
    {en:'Scald the filter with boiling water and tip it out, so the cold metal does not take the heat out of the brew.',
     no:'Skåld filteret med kokende vann og hell det ut, så det kalde metallet ikke tar varmen ut av trekket.'},
    {en:'Spoon the coffee into the upper cylinder, level it, and press the perforated plate down onto it firmly but without forcing it.',
     no:'Ha kaffen i den øverste sylinderen, jevn den ut, og press platen bestemt ned på den uten å presse hardt.'},
    {en:'Pour the hot water on in one go, put the lid on, and leave it alone. It will drip for fifteen to twenty minutes.',
     no:'Hell på det varme vannet i én omgang, legg på lokket og la det stå i fred. Det drypper i femten til tjue minutter.'},
    {en:'Do not press the plate down again to hurry it. A forced decoction is bitter, and there is no way back from that.',
     no:'Ikke press platen ned igjen for å få det til å gå fortere. Et presset konsentrat blir bittert, og det lar seg ikke rette opp.'},
    {en:'While it drips, heat the milk with the sugar until it is just about to boil, and keep it hot.',
     no:'Mens det drypper, varmer du melken med sukkeret til den er på nippet til å koke, og holder den varm.'},
    {en:'Divide the decoction between four tumblers, then fill each one with the hot milk. The colour should be that of milky caramel.',
     no:'Fordel konsentratet på fire begre, og fyll så hvert av dem med den varme melken. Fargen skal være som lys karamell.'},
    {en:'Tip a tumbler into its dabara and pour it back, holding the two as far apart as you can manage without scalding yourself.',
     no:'Hell et beger over i dabaraen og tilbake igjen, og hold de to så langt fra hverandre som du klarer uten å skålde deg.'},
    {en:'Do that eight or ten times, until the coffee is drinkable and carries a thick collar of foam, then serve it in the dabara with the tumbler beside it.',
     no:'Gjenta åtte–ti ganger, til kaffen er drikkeklar og har fått en tykk krage av skum, og server den så i dabaraen med begeret ved siden av.'}],
  notes:[
    {title:{en:'Why the decoction must drip', no:'Hvorfor konsentratet må dryppe'},
     body:{en:'The grounds sit under gentle pressure from the plate and the water finds its own way through, which extracts slowly and evenly. Pressing the plate down hard channels the water, over-extracts what it does reach and pulls out the harsh compounds a slow drip leaves behind.',
           no:'Kaffegruten ligger under et forsiktig trykk fra platen, og vannet finner sin egen vei gjennom, så uttrekket går langsomt og jevnt. Presser du platen hardt ned, lager vannet kanaler, trekker for mye ut av det det når, og henter fram de beske stoffene et langsomt drypp lar ligge.'}},
    {title:{en:'What the chicory is doing', no:'Hva sikorien gjør'},
     body:{en:'Roasted chicory root has no caffeine and adds no coffee flavour. It gives body, a darker colour and a faint bitterness that stands up to a lot of milk, and it stretched an expensive import when it was first added. A south Indian coffee without it tastes thin rather than wrong.',
           no:'Ristet sikorirot har verken koffein eller kaffesmak. Den gir fylde, mørkere farge og en svak bitterhet som tåler mye melk, og den drøyet en dyr importvare da den først ble tilsatt. En sørindisk kaffe uten sikori smaker tynn heller enn feil.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Use whole milk and heat it properly. Skimmed milk and a lukewarm pour give you a grey drink with no foam on it.',
           no:'Bruk helmelk og varm den ordentlig. Lettmelk og lunken helling gir en grå drikk uten skum. Ferdig malt filterkaffe med sikori selges i indiske butikker på Grønland i Oslo under merker som Narasus, Cothas eller Bru, og den er malt riktig fra før. Kjøper du vanlig kaffe, be om espressomaling og bland i omtrent en femdel ristet sikori, som fås i helsekostbutikker som kaffeerstatning. Selve filteret og et dabara-sett koster lite i indiske butikker, og et filter til to kopper er den størrelsen de fleste husholdninger her trenger.'}}],
  variations:[
    {title:{en:'Sugarless, for tasting', no:'Uten sukker, for smakens skyld'},
     body:{en:'Ask for it without sugar once, to find out what the decoction actually tastes like under the sweetness. Most people go back to sugar, but not all of them.',
           no:'Prøv den uten sukker én gang, for å finne ut hva konsentratet faktisk smaker under sødmen. De fleste går tilbake til sukker, men ikke alle.'}},
    {title:{en:'Second decoction', no:'Andre trekk'},
     body:{en:'Pour more hot water onto the same grounds and you get a weaker second decoction, which households use for the afternoon round. It is thinner and noticeably more bitter, so use rather less of it.',
           no:'Heller du mer varmt vann på den samme gruten, får du et svakere andre trekk, som husholdninger bruker til ettermiddagsrunden. Det er tynnere og merkbart bitrere, så bruk heller litt mindre av det.'}}]
},

];
