/* Masala Dabba — recipes for Tamil Nadu (IN-TAM). Contract: docs/recipe-format.md.
   Both languages live in the same file so a quantity is written exactly once and cannot drift.
   Recipes are never narrated: narrate.py only ever sees a reading's html. */
window.RECIPES = window.RECIPES || {};
window.RECIPES['IN-TAM'] = [

{
  id:'idli', dish:'Idli', course:'breakfast', lesson:2, serves:4, veg:true,
  time:{prep:40, cook:15}, hero:'idli', tags:['fermented','steamed','breakfast'],
  title:{en:'Idli, starting with the batter', no:'Idli, med røren som utgangspunkt'},
  blurb:{en:'Steamed rice and lentil cakes raised by a mixed overnight fermentation.',
         no:'Dampede kaker av ris og linser, hevet av en blandet gjæring over natten.'},
  heroCaption:{en:'An idli carries no fat, no sugar and no spice. Everything it is served with is there to supply them.',
               no:'En idli har verken fett, sukker eller krydder i seg. Alt den serveres med, er der for å gi den nettopp det.'},
  goesWith:[{en:'Sambar, and a coconut chutney', no:'Sambar og en kokoschutney'},
            {en:'Milagai podi stirred into sesame oil', no:'Milagai podi rørt ut i sesamolje'}],
  headnote:{
    en:`<p>This recipe is mostly waiting: four hours of soaking, about twenty minutes of grinding, then eight to twelve hours of warm fermentation. Bacteria and yeasts from the ingredients, equipment and surroundings form a changing community that acidifies and raises the batter.</p>
<p>The rice and urad are ground separately because they need different textures. Rice supplies starch and sets the crumb in the steamer. Whipped urad supplies proteins and polysaccharides that help the batter hold gas. Properly ground urad becomes pale and airy; that visible change is the useful test.</p>
<p>Keep the mixture cool while grinding so its texture and microbial activity remain sound. Use short pulses and cold water in a blender. A cool Norwegian kitchen may also need a gently warm place for fermentation, such as an oven with only the light on, provided it does not become hot.</p>`,
    no:`<p>Denne oppskriften består for det meste av venting: fire timers bløtlegging, omtrent tjue minutters maling og så åtte til tolv timers lun gjæring. Bakterier og gjær fra råvarene, utstyret og omgivelsene danner et skiftende samfunn som syrner og hever røren.</p>
<p>Ris og urad males hver for seg fordi de trenger ulik konsistens. Risen gir stivelse og setter strukturen under dampingen. Pisket urad gir proteiner og polysakkarider som hjelper røren å holde på gassen. Riktig malt urad blir lys og luftig; den synlige forandringen er en nyttig prøve.</p>
<p>Hold blandingen kjølig under malingen, så konsistensen og den mikrobielle aktiviteten bevares. Bruk korte støt og kaldt vann i en hurtigmikser. Et kjølig norsk kjøkken kan også kreve et lunt sted til gjæringen, for eksempel en ovn med bare lyset på, så lenge den ikke blir varm.</p>`},
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
    {en:'The batter is ready when it has risen by at least a third, is domed and full of holes, and smells pleasantly sour. Stir it once, gently. Steam it now or refrigerate it immediately.',
     no:'Røren er klar når den har hevet seg minst en tredel, buler og er full av hull, og lukter behagelig syrlig. Rør i den én gang, forsiktig. Damp den nå, eller sett den straks i kjøleskapet.'},
    {en:'Grease the idli moulds, fill each one about three-quarters full, and steam over boiling water with the lid on for ten to twelve minutes.',
     no:'Smør idliformene, fyll hver av dem omtrent tre firedeler full, og damp dem over kokende vann med lokk på i ti til tolv minutter.'},
    {en:'A skewer pushed into the middle should come out clean. Lift the plates out, wait two minutes, then ease each idli free with a wet spoon and serve at once.',
     no:'En pinne som stikkes ned i midten, skal komme ut ren. Løft ut platene, vent to minutter, og løsne så hver idli med en våt skje og server med én gang.'}],
  notes:[
    {title:{en:'Why urad matters', no:'Hvorfor urad betyr noe'},
     body:{en:'The fermentation is mixed and does not come from one organism living only on urad. Urad still has a special structural role: when it is ground with water, its proteins and polysaccharides make a light matrix that can hold the gas produced during fermentation.',
           no:'Gjæringen er blandet og kommer ikke fra én organisme som bare lever på urad. Urad har likevel en særlig rolle i strukturen: Når den males med vann, danner proteinene og polysakkaridene en luftig masse som kan holde på gassen fra gjæringen.'}},
    {title:{en:'Why the grinder must stay cold', no:'Hvorfor kvernen må holde seg kald'},
     body:{en:'A stone wet grinder turns slowly and produces an airy urad batter without much heat. A blender works too, but friction can warm and thin the mixture. Use cold water, grind in short bursts and pause when the bowl begins to feel warm.',
           no:'En våtkvern av stein går langsomt og gir en luftig uradrøre uten mye varme. En hurtigmikser virker også, men friksjonen kan varme og tynne blandingen. Bruk kaldt vann, mal i korte støt og ta pause når bollen begynner å bli varm.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Ask for idli rice by name. It is a short parboiled grain and behaves quite differently from long-grain rice.',
           no:'Be om idli rice ved navn i en indisk eller sørasiatisk butikk. Langkornet «parboiled» ris fra en vanlig dagligvare gir en annen konsistens. Urad dal skal være hvit og uten skall, gjerne merket urad dal dhuli eller white urad. Har du ikke idliformer, fungerer små varmefaste skåler i en dampkurv.'}}],
  variations:[
    {title:{en:'Later batter: dosa', no:'Senere røre: dosa'},
     body:{en:'Use refrigerated leftover batter. Thin it with water until it pours, then spread it on a hot iron griddle. As refrigerated batter becomes more acidic, its flavour and browning change; judge it by smell and texture rather than a fixed calendar.',
           no:'Bruk røre som har stått i kjøleskap. Spe den med vann til den lar seg helle, og bre den utover en varm jerntakke. Når kjølt røre blir syrligere, endres smak og bruning; vurder lukt og konsistens i stedet for en fast kalender.'}},
    {title:{en:'Sourer batter: uthappam', no:'Syrligere røre: uthappam'},
     body:{en:'If refrigerated batter has become distinctly sour but still smells clean, use it for a thick pancake. Discard batter with mould, pink or orange patches, or a rotten smell. Pour a small round, add onion, green chilli and curry leaf, and cook it through on both sides.',
           no:'Er kjølt røre blitt tydelig syrlig, men lukter rent, kan du bruke den til en tykk pannekake. Kast røre med mugg, rosa eller oransje flekker eller råtten lukt. Hell ut en liten rund, tilsett løk, grønn chili og karriblad, og stek den gjennom på begge sider.'}},
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
     body:{en:'The lentil is the thickener. Cooking the toor dal separately until tender, then whisking it smooth before adding it to the tamarind and vegetables, gives reliable texture and lets each part finish at the right time.',
           no:'Linsen er jevningen. Når toor dal kokes mør for seg og vispes glatt før den blandes med tamarind og grønnsaker, får sambaren en pålitelig konsistens, og hver del kan bli ferdig til rett tid.'}},
    {title:{en:'Why the blend is cooked and the tempering is not', no:'Hvorfor blandingen kokes og temperingen ikke gjør det'},
     body:{en:'Sambar podi is mostly ground coriander, which tastes dusty until it has had a few minutes in liquid. The tempering is the opposite: whole seeds in hot oil for a matter of seconds, poured over at the very end so the smell is still on the surface when the bowl reaches the table.',
           no:'Sambar podi er stort sett malt koriander, og den smaker støvete til den har fått noen minutter i væske. Temperingen er det motsatte. Hele frø får noen sekunder i varm olje og helles over helt til slutt, så duften fortsatt ligger på overflaten når skålen kommer på bordet.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Buy tamarind as a block with the seeds still in it rather than as a jar of paste, which is usually thinned and salted.',
           no:'Kjøp tamarind i blokk i en indisk eller sørasiatisk butikk; pasta på glass kan være spedd ut og saltet. Toor dal kan også hete tuvar eller arhar dal. Drumstick, altså moringastilker, finnes ofte frosne. Asafoetida selges som pulver i små bokser, og ferske karriblader kan fryses når du finner dem.'}}],
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
    en:`<p>Milagu rasam is a pepper-and-cumin variation often served as comfort food when someone has a cold. It is food, not a treatment. This version uses no chilli; freshly pounded black pepper supplies the heat.</p>
<p>Keep the final heating brief. Taking the pan off when it froths at the edges preserves more of the fresh pepper and coriander aroma than a prolonged rolling boil.</p>
<p>It is also very quick. If the tamarind is already soaked, the whole thing takes fifteen minutes, and it is the cheapest possible way to make a plate of plain rice into a meal.</p>`,
    no:`<p>Milagu rasam er en variant med pepper og spisskummen som ofte serveres som trøstemat ved forkjølelse. Den er mat, ikke behandling. Denne utgaven har ikke chili; nystøtt svart pepper gir styrken.</p>
<p>Hold den siste oppvarmingen kort. Tar du kjelen av når det skummer langs kanten, bevarer du mer av den friske duften fra pepper og koriander enn ved lang fosskoking.</p>
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
    {title:{en:'Why the final heating is brief', no:'Hvorfor den siste oppvarmingen er kort'},
     body:{en:'Many aroma compounds in pepper and coriander are volatile. A short final heating keeps more of them in the bowl; prolonged hard boiling sends more aroma away with the steam.',
           no:'Mange aromastoffer i pepper og koriander er flyktige. Kort oppvarming til slutt beholder mer av dem i skålen; lang fosskoking sender mer aroma ut med dampen.'}},
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
    en:`<p>The defining step is a careful dry roast. Move the whole spices constantly until they are fragrant and deep brown, then stop before they scorch. The roast softens fresh top notes and builds a deeper flavour without adding more chilli.</p>
<p>Star anise, kalpasi and marathi mokku are strongly associated with many Chettinad blends, though formulas vary and the ingredients are not unique to this cuisine. Star anise is native farther east and reached India through trade. Kalpasi is a lichen; marathi mokku is a trade name whose exact plant identification is not consistent in culinary sources.</p>
<p>After that it is a simple dish. Small shallots rather than onion, a lot of curry leaf, chicken on the bone, and enough water to let it cook rather than to make a sauce. The finished gravy should cling to the meat, not pool around it.</p>`,
    no:`<p>Det avgjørende steget er en kontrollert tørristing. Hold hele krydder i bevegelse til de dufter og er dypbrune, og stopp før de svir seg. Ristingen demper friske topptoner og bygger dypere smak uten mer chili.</p>
<p>Stjerneanis, kalpasi og marathi mokku forbindes sterkt med mange Chettinad-blandinger, men oppskriftene varierer, og råvarene brukes også i andre kjøkken. Stjerneanis har opphav lenger øst og kom til India gjennom handel. Kalpasi er en lav; marathi mokku er et handelsnavn som ikke knyttes entydig til én plante i matkildene.</p>
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
    {en:'Roast until the spices are fragrant and deep brown, usually four to six minutes, and remove them before they scorch. Add the kalpasi for the last twenty seconds only.',
     no:'Rist til krydderet dufter og er dypbrunt, vanligvis i fire–seks minutter, og ta det av før det svir seg. Ha i kalpasien bare de siste tjue sekundene.'},
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
    {en:'Pour in the hot water, cover, and simmer until the chicken is tender and the thickest piece reaches 74 °C, about twenty-five minutes. Let the gravy cling to the meat, add the last curry leaves and rest for ten minutes.',
     no:'Hell i det varme vannet, legg på lokk og la det småkoke til kyllingen er mør og den tykkeste biten når 74 °C, omtrent tjuefem minutter. La sausen legge seg rundt kjøttet, tilsett de siste karribladene og hvil i ti minutter.'}],
  notes:[
    {title:{en:'Why the roast goes so far', no:'Hvorfor ristingen går så langt'},
     body:{en:'A light roast keeps more volatile top notes. A deeper brown roast changes the balance toward toasted flavours, but scorched spices become bitter. Grind this small batch once cool and use it promptly for the clearest aroma.',
           no:'En lett risting beholder flere flyktige topptoner. En dypere brun risting flytter balansen mot ristede smaker, men svidde krydder blir bitre. Mal denne lille porsjonen når den er avkjølt, og bruk den raskt mens aromaen er tydelig.'}},
    {title:{en:'Why the kalpasi goes in last', no:'Hvorfor kalpasien går i sist'},
     body:{en:'It is a lichen, thin and dry, and it burns long before a peppercorn does. Twenty seconds in the pan is enough to open it up. Burnt kalpasi is bitter and there is no way to take it out again, so add it at the end of the roast and watch it.',
           no:'Kalpasi er en lav, tynn og tørr, og den brenner lenge før et pepperkorn gjør det. Tjue sekunder i pannen er nok til å åpne den. Svidd kalpasi er bitter, og den lar seg ikke fjerne igjen, så ha den i helt til slutt i ristingen og følg med.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Buy chicken on the bone and ask for it to be cut through, because the bone is what keeps the pieces from drying out over half an hour in a thick masala.',
           no:'Kjøp kylling med bein og be en slakter dele den i grytestykker. Kalpasi selges i indiske eller sørasiatiske butikker som kalpasi, dagad phool eller black stone flower. Marathi mokku kan også stå som marathi moggu; finner du den ikke, bruker du de ekstra nellikene oppskriften foreslår. Revet kokos finnes ofte frossen, og hvite valmuefrø må ikke forveksles med blå.'}}],
  variations:[
    {title:{en:'Chettinad pepper chicken', no:'Chettinad-pepperkylling'},
     body:{en:'Milagu kozhi is the drier cousin. Double the pepper, leave out the tomato, the coconut and the water, and fry the chicken down until the masala is stuck to it and there is no gravy at all.',
           no:'Milagu kozhi er den tørre fetteren. Doble pepperen, sløyf tomaten, kokosen og vannet, og stek kyllingen ned til masalaen sitter fast på den og det ikke er saus igjen.'}},
    {title:{en:'With goat instead', no:'Med geitekjøtt i stedet'},
     body:{en:'The same masala suits goat on the bone very well, and it is the version served at weddings in Chettinad. Allow an hour and a half of gentle simmering, or twenty minutes in a pressure cooker.',
           no:'Den samme masalaen passer svært godt til geitekjøtt med bein, og det er utgaven som serveres i bryllup i Chettinad. Regn med halvannen time med forsiktig småkoking, eller tjue minutter i trykkoker.'}},
    {title:{en:'Vegetarian, with mushrooms', no:'Vegetarisk, med sopp'},
     body:{en:'For a vegetarian variation, brown chestnut mushrooms hard first so they lose their water, then use them with half the liquid and about ten minutes of simmering.',
           no:'Til en vegetarisk variant bruner du aromasopp hardt først så de mister vannet, og bruker deretter halvparten så mye væske og omtrent ti minutters småkoking.'}}]
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
           no:'Bruk helmelk og varm den ordentlig. Ferdigmalt sørindisk filterkaffe, med eller uten sikori, finnes i mange indiske eller sørasiatiske butikker. Vanlig kaffe kan finmales til filteret. Et metallfilter og eventuelt et dabara-sett selges ofte i de samme butikkene.'}}],
  variations:[
    {title:{en:'Sugarless, for tasting', no:'Uten sukker, for smakens skyld'},
     body:{en:'Ask for it without sugar once, to find out what the decoction actually tastes like under the sweetness. Most people go back to sugar, but not all of them.',
           no:'Prøv den uten sukker én gang, for å finne ut hva konsentratet faktisk smaker under sødmen. De fleste går tilbake til sukker, men ikke alle.'}},
    {title:{en:'Second decoction', no:'Andre trekk'},
     body:{en:'Pour more hot water onto the same grounds and you get a weaker second decoction, which households use for the afternoon round. It is thinner and noticeably more bitter, so use rather less of it.',
           no:'Heller du mer varmt vann på den samme gruten, får du et svakere andre trekk, som husholdninger bruker til ettermiddagsrunden. Det er tynnere og merkbart bitrere, så bruk heller litt mindre av det.'}}]
},

];
