/* Masala Dabba — recipes for Punjab & Delhi (IN-PUN). Contract: docs/recipe-format.md.
   Both languages live in the same file so a quantity is written exactly once and cannot drift.
   Recipes are never narrated: narrate.py only ever sees a reading's html. */
window.RECIPES = window.RECIPES || {};
window.RECIPES['IN-PUN'] = [

{
  id:'sarson-da-saag', dish:'Sarson da saag', course:'main', lesson:3, serves:4, veg:true,
  time:{prep:25, cook:110}, hero:'saag-roti', tags:['winter','greens','maize flour'],
  title:{en:'Sarson da saag', no:'Sarson da saag'},
  blurb:{en:'Mustard greens cooked down for two hours, mashed by hand and thickened with maize flour.',
         no:'Sennepsblader kokt ned i to timer, most for hånd og tyknet med maismel.'},
  heroCaption:{en:'Sarson da saag with makki di roti and a pat of white butter on each. The butter is not a garnish; it is part of the dish.',
               no:'Sarson da saag med makki di roti og en klump hvitt smør på hver. Smøret er ingen pynt, det er en del av retten.'},
  goesWith:[{en:'Makki di roti, always', no:'Makki di roti, alltid'},
            {en:'A glass of salted lassi', no:'Et glass saltet lassi'},
            {en:'Sliced raw onion and a green chilli', no:'Rå løk i skiver og en grønn chili'}],
  headnote:{
    en:`<p>Sarson da saag belongs to the winter mustard harvest in Punjab. Frozen mustard greens let you make it outside that season too. Other leafy greens can make a good saag, but mustard gives this version its characteristic pungency.</p>
<p>Three things do the real work. The long boil breaks down leaves that are too pungent to eat quickly. The mashing is done with a wooden masher rather than a blender, so the texture stays rough and the dish never turns into soup. And a handful of maize flour goes in near the end, which thickens the greens and brings a faint sweetness that answers the mustard.</p>
<p>Traditionally it stands overnight and is reheated, and it is better for it. Make it the day before if you can, and add the final tempering and the butter when you serve.</p>`,
    no:`<p>Sarson da saag hører sammen med vinterens sennepsavling i Punjab. Med frosne sennepsblader kan du også lage retten utenom sesongen. Andre bladgrønnsaker kan gi en god saag, men sennepen gir denne varianten den karakteristiske skarpe smaken.</p>
<p>Tre ting gjør den egentlige jobben. Den lange kokingen bryter ned blader som er for skarpe til å spises raskt. Mosingen skjer med en stamper av tre og ikke med stavmikser, så konsistensen holder seg grov og retten ikke blir til suppe. Og mot slutten går det i en neve maismel, som tykner bladene og gir en svak sødme som står mot sennepen.</p>
<p>Tradisjonelt står retten natten over og varmes opp igjen, og den blir bedre av det. Lag den dagen før hvis du kan, og ha i den siste temperingen og smøret når du serverer.</p>`},
  ingredients:[
   {group:{en:'The greens', no:'Bladene'}, items:[
    {q:800, u:'g', n:{en:'mustard greens', no:'sennepsblader'}, note:{en:'thick stalks removed, roughly chopped', no:'tykke stilker fjernet, grovhakket'}},
    {q:250, u:'g', n:{en:'spinach', no:'spinat'}},
    {q:100, u:'g', n:{en:'kale', no:'grønnkål'}, note:{en:'stands in for bathua, which is not sold here', no:'erstatter bathua, som ikke selges her'}},
    {q:30, u:'g', n:{en:'ginger', no:'ingefær'}, note:{en:'roughly chopped', no:'grovhakket'}},
    {q:4, u:'', n:{en:'green chillies', no:'grønne chili'}, round:'half', note:{en:'slit lengthways', no:'flekket på langs'}},
    {q:500, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {q:60, u:'g', n:{en:'maize flour', no:'maismel'}, note:{en:'makki ka atta, the same flour as the bread', no:'makki ka atta, samme mel som brødet'}},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]},
   {group:{en:'The tempering', no:'Temperingen'}, items:[
    {q:60, u:'g', n:{en:'ghee', no:'ghee'}},
    {q:150, u:'g', n:{en:'onion', no:'løk'}, note:{en:'finely chopped', no:'finhakket'}},
    {q:20, u:'g', n:{en:'ginger', no:'ingefær'}, note:{en:'finely chopped', no:'finhakket'}},
    {q:15, u:'g', n:{en:'garlic', no:'hvitløk'}, note:{en:'finely chopped', no:'finhakket'}},
    {q:2, u:'', n:{en:'dried red chillies', no:'tørkede røde chili'}, round:'half'},
    {q:150, u:'g', n:{en:'tomato', no:'tomat'}, note:{en:'finely chopped', no:'finhakket'}},
    {q:40, u:'g', n:{en:'white butter or unsalted butter, to finish', no:'hvitt smør eller usaltet smør, til slutt'}},
   ]}],
  steps:[
    {en:'Wash the greens twice in a sinkful of cold water. Mustard leaves hold grit in the crease of the stalk and one rinse never gets it out.',
     no:'Vask bladene to ganger i en vask full av kaldt vann. Sennepsblader holder på grus i folden ved stilken, og én skylling får den aldri ut.'},
    {en:'Put the mustard greens, spinach and kale in a wide heavy pot with the chopped ginger, the slit chillies, the water and salt.',
     no:'Legg sennepsbladene, spinaten og grønnkålen i en vid, tung gryte sammen med den hakkede ingefæren, de flekkede chiliene, vannet og salt.'},
    {en:'Bring it to a boil, cover, and cook over a low flame for at least an hour and a half. The leaves should collapse completely and lose their raw pungency.',
     no:'Kok opp, legg på lokk og la det koke på lav varme i minst halvannen time. Bladene skal falle helt sammen og miste den rå skarpheten.'},
    {en:'Mash the greens in the pot with a wooden masher or the end of a rolling pin. Keep working until the mass is coarse and uniform, and do not use a blender.',
     no:'Mos bladene i gryta med en stamper av tre eller enden av et kjevle. Hold på til massen er grov og jevn, og ikke bruk stavmikser.'},
    {en:'Sprinkle the maize flour over the surface and beat it in a little at a time, so it does not form lumps. Cook on for twenty minutes, stirring often.',
     no:'Dryss maismelet over overflaten og pisk det inn litt om gangen, så det ikke klumper seg. Kok videre i tjue minutter under hyppig omrøring.'},
    {en:'The saag is ready when a spoon dragged across the bottom leaves a trail that closes slowly. If it is loose, cook it down; if it is stiff, add hot water.',
     no:'Saagen er klar når en skje dratt langs bunnen etterlater et spor som lukker seg langsomt. Er den tynn, kok den inn; er den stiv, spe med varmt vann.'},
    {en:'For the tempering, melt the ghee in a frying pan and fry the dried chillies for a few seconds. Add the onion and cook until it is properly brown, about ten minutes.',
     no:'Til temperingen: smelt gheen i en stekepanne og stek de tørkede chiliene i noen sekunder. Ha i løken og stek til den er ordentlig brun, omtrent ti minutter.'},
    {en:'Add the chopped ginger and garlic, cook for a minute, then the tomato. Fry until the tomato breaks down and the fat separates and pools at the edge.',
     no:'Ha i den hakkede ingefæren og hvitløken, stek i et minutt, og ha så i tomaten. Stek til tomaten faller sammen og fettet skiller seg ut og samler seg i kanten.'},
    {en:'Pour the tempering into the saag, stir it through, and simmer together for ten minutes so the two stop tasting like separate things.',
     no:'Hell temperingen over i saagen, rør den inn, og la det småkoke sammen i ti minutter, så de to slutter å smake som hver sin rett.'},
    {en:'Taste for salt. Serve very hot in a bowl with the butter sitting on top, unmelted, and let each person stir it in.',
     no:'Smak til med salt. Server rykende varmt i en skål med smøret liggende på toppen, usmeltet, og la hver enkelt røre det inn selv.'}],
  notes:[
    {title:{en:'Why not a blender', no:'Hvorfor ikke stavmikser'},
     body:{en:'A blender emulsifies the leaf and turns saag into a smooth green soup with no texture to hold the bread. Mashing tears the fibres instead of shearing them, so some structure survives and the dish stays something you can pick up with a piece of roti.',
           no:'En stavmikser emulgerer bladet og gjør saag til en glatt grønn suppe uten struktur til å bære brødet. Mosingen river fibrene i stedet for å kutte dem, så noe struktur overlever, og retten blir noe du kan ta opp med et stykke roti.'}},
    {title:{en:'Why the maize flour matters twice', no:'Hvorfor maismelet betyr noe to ganger'},
     body:{en:'It thickens, and it sweetens. Mustard leaf is bitter and sharp, and maize is the only starch in the Punjabi pantry that answers that with sweetness rather than with more starch. That is also why the bread beside it is made of the same flour.',
           no:'Det tykner, og det søter. Sennepsblad er bittert og skarpt, og mais er den eneste stivelsen i et punjabisk kjøkken som svarer med sødme i stedet for med mer stivelse. Det er også grunnen til at brødet ved siden av lages av det samme melet.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Fresh mustard greens turn up in Asian and Indian shops in winter and nowhere else. Frozen chopped sarson saag in a packet is an honest substitute and is sold in the same shops.',
           no:'Ferske sennepsblader dukker opp i asiatiske og indiske butikker om vinteren og ingen andre steder. Frossen hakket sarson saag i pose er en ærlig erstatning og selges i de samme butikkene, for eksempel på Grønland i Oslo. Får du ingen av delene, bruk spinat med ruccola og litt grønnkål, og godta at retten blir mildere. Maismelet må være makki ka atta: norsk maisenna er ren stivelse og polentagryn er altfor grovt, og ingen av dem gjør jobben.'}}],
  variations:[
    {title:{en:'Made a day ahead', no:'Laget dagen før'},
     body:{en:'Cook the greens and the maize flour one day, cool and refrigerate, and make the tempering fresh when you reheat. This is how most Punjabi households actually do it, and the dish is better for the rest.',
           no:'Kok bladene og maismelet den ene dagen, avkjøl og sett kaldt, og lag temperingen fersk når du varmer opp. Slik gjør de fleste punjabiske husholdninger det, og retten blir bedre av hvilen.'},},
    {title:{en:'With more bite', no:'Med mer bitt'},
     body:{en:'Some houses leave the greens coarser and cook them for only an hour. The dish is sharper and greener and wants more butter to balance it. Both versions are correct; the long one is the more common.',
           no:'Noen hus lar bladene være grovere og koker dem bare en time. Retten blir skarpere og grønnere og trenger mer smør for å balanseres. Begge utgaver er riktige, og den lange er den vanligste.'}}]
},

{
  id:'makki-di-roti', dish:'Makki di roti', course:'bread', lesson:2, serves:4, veg:true,
  time:{prep:20, cook:20}, hero:'makki-roti', tags:['bread','maize','gluten-free'],
  title:{en:'Makki di roti', no:'Makki di roti'},
  blurb:{en:'A maize bread with no gluten in it, patted out by hand and cooked the moment it is shaped.',
         no:'Et maisbrød uten gluten, klappet ut for hånd og stekt i det øyeblikket det er formet.'},
  heroCaption:{en:'Makki di roti, stacked and buttered. The coarse crumb is the point, and it is what stands up to saag.',
               no:'Makki di roti i stabel, med smør på. Den grove strukturen er hele poenget, og det er den som tåler saag.'},
  goesWith:[{en:'Sarson da saag, which is what it exists for', no:'Sarson da saag, som er det den finnes for'},
            {en:'A lump of gur, eaten afterwards', no:'En klump gur, spist etterpå'}],
  headnote:{
    en:`<p>Maize has no gluten, so a maize dough has nothing holding it together. It will not stretch, it will not take a rolling pin, and it cracks at the edge the moment you try to treat it like wheat. Every technique in this recipe exists to work around that.</p>
<p>The water goes in hot, which gelatinises some of the starch and gives the dough just enough stickiness to hold. The bread is patted out with wet hands rather than rolled. And it goes onto the pan immediately, because a maize dough left to stand dries and falls apart.</p>
<p>The first one will break. That is normal and it is not a sign of anything. Patch it, cook it, eat it yourself, and the second one will be better.</p>`,
    no:`<p>Mais har ikke gluten, så en maisdeig har ingenting som holder den sammen. Den strekker seg ikke, den tåler ikke kjevle, og den sprekker i kanten i det øyeblikket du behandler den som hvete. Hver eneste teknikk i denne oppskriften finnes for å komme rundt det.</p>
<p>Vannet skal være varmt, for da forklistres noe av stivelsen og deigen blir akkurat klebrig nok til å henge sammen. Brødet klappes ut med våte hender i stedet for å kjevles. Og det går rett på pannen, for en maisdeig som blir stående, tørker og faller fra hverandre.</p>
<p>Den første ryker. Det er normalt og betyr ingenting. Lapp den, stek den, spis den selv, og den neste blir bedre.</p>`},
  ingredients:[{group:{en:'', no:''}, items:[
    {q:400, u:'g', n:{en:'maize flour', no:'maismel'}, note:{en:'makki ka atta, fine and yellow', no:'makki ka atta, fint og gult'}},
    {q:320, u:'ml', n:{en:'hot water', no:'varmt vann'}, scale:'sub', note:{en:'added a little at a time', no:'has i litt om gangen'}},
    {q:40, u:'g', n:{en:'butter or ghee, to finish', no:'smør eller ghee, til slutt'}},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Salt the flour in a wide bowl. Pour in the hot water a little at a time, working it in with a spoon at first because it is too hot for hands.',
     no:'Salt melet i en vid bolle. Hell i det varme vannet litt om gangen, og arbeid det inn med en skje til å begynne med, for det er for varmt for hendene.'},
    {en:'When it is cool enough to handle, knead for four or five minutes. The dough should be soft and slightly tacky and should hold a thumbprint without cracking.',
     no:'Når det er kjølig nok å ta i, elt i fire-fem minutter. Deigen skal være myk og litt klebrig og skal holde et fingeravtrykk uten å sprekke.'},
    {en:'Cover the bowl and rest the dough for ten minutes, no longer. It stiffens as it stands, and a stiff maize dough cannot be patted out.',
     no:'Dekk bollen og la deigen hvile i ti minutter, ikke lenger. Den stivner mens den står, og en stiv maisdeig lar seg ikke klappe ut.'},
    {en:'Put a flat iron pan on a medium flame and let it get properly hot while you shape the first bread.',
     no:'Sett en flat jernpanne på middels varme og la den bli ordentlig varm mens du former det første brødet.'},
    {en:'Divide the dough into eight. Wet your palms, roll one piece into a ball, and flatten it between wet hands into a disc about the thickness of a finger.',
     no:'Del deigen i åtte. Fukt håndflatene, rull én del til en kule, og klapp den flat mellom våte hender til en skive omtrent så tykk som en finger.'},
    {en:'If the edge cracks, press it back together with a wet fingertip. A sheet of plastic and the flat of your hand works too, and is easier the first few times.',
     no:'Sprekker kanten, trykk den sammen igjen med en våt fingertupp. Et plastark og håndflaten fungerer også, og det er lettere de første gangene.'},
    {en:'Lay the bread on the hot pan. Cook for about a minute and a half, until the underside has pale brown spots, then turn it.',
     no:'Legg brødet på den varme pannen. Stek i omtrent halvannet minutt, til undersiden har lysebrune flekker, og snu det.'},
    {en:'Cook the second side the same way, then press it gently all over with a folded cloth so it puffs in patches. Do not let it go hard.',
     no:'Stek den andre siden på samme måte, og trykk så forsiktig over hele brødet med et sammenbrettet klede, så det blåser seg opp i flekker. La det ikke bli hardt.'},
    {en:'Butter it while it is hot, stack it under a cloth, and shape the next one. Serve as they come, because they stiffen as they cool.',
     no:'Smør det mens det er varmt, legg det i stabel under et klede, og form det neste. Server dem etter hvert, for de stivner når de kjølner.'}],
  notes:[
    {title:{en:'Why the water has to be hot', no:'Hvorfor vannet må være varmt'},
     body:{en:'Hot water swells and gelatinises part of the maize starch, and that gel is the only thing standing in for gluten. Cold water gives you wet sand that will not hold a shape however long you knead it.',
           no:'Varmt vann sveller og forklistrer en del av maisstivelsen, og den geleen er det eneste som erstatter glutenet. Kaldt vann gir deg våt sand som ikke holder formen uansett hvor lenge du elter.'}},
    {title:{en:'Why they are eaten at once', no:'Hvorfor de spises med en gang'},
     body:{en:'There is no gluten network to trap steam, so the bread never stays soft the way a wheat roti does. Within twenty minutes it is firm and within an hour it is brittle, which is why a Punjabi kitchen makes them while people eat.',
           no:'Det finnes ingen glutenstruktur som fanger damp, så brødet holder seg aldri mykt slik en hveteroti gjør. Etter tjue minutter er det fast og etter en time er det sprøtt, og derfor lager et punjabisk kjøkken dem mens folk spiser.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Ask for makki ka atta in an Indian shop. It is a fine yellow flour made from whole maize, and nothing in a Norwegian supermarket is the same thing.',
           no:'Spør etter makki ka atta i en indisk butikk. Det er et fint gult mel av hel mais, og ingenting i en norsk dagligvarebutikk er det samme. Maisenna er ren stivelse og binder ingenting, polentagryn er altfor grovt, og maismel til baking er ofte en blanding med hvete. Posen bør kjøpes fersk og oppbevares kaldt, for maismel harskner raskere enn hvetemel.'}}],
  variations:[
    {title:{en:'With grated radish or fenugreek', no:'Med revet reddik eller bukkehornkløver'},
     body:{en:'Work grated white radish, squeezed dry, or chopped fresh fenugreek leaves into the dough. Both are common in Punjab and both make the bread harder to handle, so do it once you can make a plain one.',
           no:'Arbeid inn revet hvit reddik som er klemt tørr, eller hakkede ferske bukkehornkløverblader, i deigen. Begge deler er vanlig i Punjab, og begge gjør brødet vanskeligere å håndtere, så gjør det når du mestrer det enkle.'}},
    {title:{en:'Half wheat', no:'Halvt hvetemel'},
     body:{en:'Replacing a quarter of the maize with wheat atta makes the dough far easier to shape and is what many people do at home outside Punjab. It is no longer makki di roti, and it tastes noticeably less of maize.',
           no:'Bytter du ut en firedel av maisen med hvete-atta, blir deigen langt lettere å forme, og det er det mange gjør hjemme utenfor Punjab. Da er det ikke lenger makki di roti, og den smaker tydelig mindre av mais.'}}]
},

{
  id:'dal-makhani', dish:'Dal makhani', course:'main', lesson:3, serves:4, veg:true,
  time:{prep:15, cook:360}, hero:'dal-makhani', tags:['black urad','slow','butter'],
  title:{en:'Dal makhani', no:'Dal makhani'},
  blurb:{en:'Whole black urad and kidney beans cooked until tender, then simmered with tomato, butter and cream.',
         no:'Hel svart urad og kidneybønner kokes møre og får deretter småkoke med tomat, smør og fløte.'},
  heroCaption:{en:'Dal makhani finished with cream. Whole black urad gives the sauce its dark speckles.',
               no:'Dal makhani avsluttet med fløte. Hel svart urad gir sausen mørke prikker.'},
  goesWith:[{en:'Naan, or plain rice', no:'Naan, eller kokt ris'},
            {en:'Sliced onion with lemon over it', no:'Løk i skiver med sitron over'}],
  headnote:{
    en:`<p>Dal makhani needs thoroughly softened pulses before it needs cream. Whole black urad is black gram, a small bean with a dark skin. Once cooked, it breaks down into the liquid and helps make the sauce thick. Butter and cream add their own richness.</p>
<p>This is a long, open-pot version, with time for stirring and for the tomato sauce to cook into the beans. The six-hour cooking allowance is a plan for this method, not a rule that every dal makhani must follow. Check tenderness and add water as needed.</p>
<p>A pressure cooker is another useful way to soften the soaked pulses. Follow its instructions for beans, water and maximum fill, then simmer the cooked beans with the tomato base until the sauce has the consistency you want. Dry kidney beans need proper cooking; gentle warming alone is not enough.</p>`,
    no:`<p>Dal makhani trenger helt møre belgfrukter før den trenger fløte. Hel svart urad er en liten bønne med mørkt skall. Når den er kokt, går noe av den i stykker og tykner væsken. Smør og fløte gir retten ekstra fylde.</p>
<p>Her lages retten i en vanlig gryte, med tid til omrøring og til at tomatsausen får koke sammen med bønnene. De seks timene er beregnet for denne framgangsmåten. Andre metoder kan gå raskere. Kjenn etter om bønnene er møre, og spe med vann etter behov.</p>
<p>En trykkoker kan også brukes til å koke de bløtlagte belgfruktene møre. Følg bruksanvisningen for bønner, vannmengde og maksimal fylling. La dem deretter småkoke med tomatbunnen til sausen får ønsket konsistens. Tørre kidneybønner må kokes ordentlig; forsiktig oppvarming er ikke nok.</p>`},
  ingredients:[
   {group:{en:'The pulses', no:'Belgfruktene'}, items:[
    {q:250, u:'g', n:{en:'whole black urad', no:'hel svart urad'}, note:{en:'sabut urad, soaked for at least 12 hours', no:'sabut urad, bløtlagt i minst 12 timer'}},
    {q:50, u:'g', n:{en:'dried kidney beans', no:'tørkede kidneybønner'}, note:{en:'soaked with the urad for at least 12 hours', no:'bløtlagt sammen med uraden i minst 12 timer'}},
    {q:1500, u:'ml', n:{en:'water', no:'vann'}, scale:'sub'},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]},
   {group:{en:'The gravy', no:'Sausen'}, items:[
    {q:100, u:'g', n:{en:'butter', no:'smør'}},
    {q:30, u:'g', n:{en:'ginger', no:'ingefær'}, note:{en:'half grated, half in matchsticks', no:'halvparten revet, halvparten i tynne staver'}},
    {q:20, u:'g', n:{en:'garlic', no:'hvitløk'}, note:{en:'crushed to a paste', no:'knust til en masse'}},
    {q:300, u:'g', n:{en:'tomato passata', no:'passata'}, note:{en:'or tinned tomatoes, blended smooth', no:'eller hermetiske tomater kjørt glatte'}},
    {q:8, u:'g', n:{en:'Kashmiri chilli powder', no:'Kashmiri chilipulver'}, note:{en:'for colour rather than heat', no:'for fargen, ikke styrken'}},
    {q:4, u:'g', n:{en:'garam masala', no:'garam masala'}},
    {q:3, u:'g', n:{en:'kasuri methi', no:'kasuri methi'}},
    {q:100, u:'ml', n:{en:'double cream', no:'kremfløte'}},
   ]}],
  steps:[
    {en:'Drain the urad and kidney beans after at least 12 hours of soaking. Discard the soaking water and rinse the beans.',
     no:'Hell av bløtevannet etter at uraden og kidneybønnene har ligget i minst 12 timer. Kast bløtevannet og skyll bønnene.'},
    {en:'Put them in a heavy pot with fresh water. Bring to a vigorous rolling boil and keep it boiling for at least 10 minutes before reducing to a steady simmer. Follow any longer boiling time on the bean packet.',
     no:'Ha dem i en tykkbunnet gryte med friskt vann. La dem fosskoke i minst 10 minutter før du senker varmen til jevn småkoking. Følg en eventuell lengre koketid på bønnepakken.'},
    {en:'Cook uncovered, or with the lid ajar, for four to five hours. Stir every half hour and scrape the bottom, and top up with hot water when it gets too thick to move.',
     no:'Kok uten lokk, eller med lokket på gløtt, i fire-fem timer. Rør hver halvtime og skrap bunnen, og spe med varmt vann når det blir for tykt til å røre i.'},
    {en:'Both the urad and the kidney beans must be fully tender and easy to crush with a spoon, with no firm centre. Stir in salt to taste.',
     no:'Både uraden og kidneybønnene skal være helt møre og lette å mose med en skje, uten noen fast kjerne. Smak til med salt.'},
    {en:'In a frying pan, melt most of the butter and cook the grated ginger and the garlic over a low flame until they stop smelling raw, about two minutes.',
     no:'Smelt mesteparten av smøret i en stekepanne og la den revne ingefæren og hvitløken surre på lav varme til de slutter å lukte rått, omtrent to minutter.'},
    {en:'Pull the pan off the heat, stir in the chilli powder so it colours the butter instead of burning, then return it and pour in the passata.',
     no:'Trekk pannen av platen, rør inn chilipulveret så det farger smøret i stedet for å svi seg, sett den tilbake og hell i passataen.'},
    {en:'Cook the tomato down hard for fifteen minutes, until it darkens and the butter separates out at the edges. This step is where the raw tomato taste goes.',
     no:'Kok tomaten hardt ned i femten minutter, til den mørkner og smøret skiller seg ut i kantene. Det er i dette trinnet den rå tomatsmaken forsvinner.'},
    {en:'Stir the tomato base into the pulses and simmer them together for at least an hour, still on the lowest flame, stirring now and then.',
     no:'Rør tomatbunnen inn i belgfruktene og la dem småkoke sammen i minst en time, fortsatt på laveste flamme, med omrøring nå og da.'},
    {en:'Crush the kasuri methi between your palms over the pot, add the garam masala, and stir in most of the cream. Simmer for five minutes more.',
     no:'Knus kasuri methien mellom håndflatene over gryta, ha i garam masalaen, og rør inn mesteparten av fløten. La det småkoke i fem minutter til.'},
    {en:'Serve with the rest of the butter and cream swirled on top and the ginger matchsticks scattered over. It will be better again tomorrow.',
     no:'Server med resten av smøret og fløten svingt over toppen og ingefærstavene strødd på. I morgen er den enda bedre.'}],
  notes:[
    {title:{en:'Check tenderness, not just the clock', no:'Kjenn etter om bønnene er møre'},
     body:{en:'Cooking time varies with the age of the beans and the equipment. Test both kinds of bean; a creamy-looking liquid does not prove that the kidney beans are tender. Keep the pulses covered with liquid while they soften.',
           no:'Koketiden varierer med alderen på bønnene og utstyret du bruker. Sjekk begge bønneslagene; en kremete væske betyr ikke nødvendigvis at kidneybønnene er møre. Sørg for at væsken dekker belgfruktene mens de kokes møre.'}},
    {title:{en:'Why the tomato is cooked separately', no:'Hvorfor tomaten kokes for seg'},
     body:{en:'Cook the tomato base separately while the pulses soften. This lets the tomato reduce and lose its raw taste before it joins the beans, and keeps the two stages easy to control.',
           no:'Kok tomatbunnen for seg mens belgfruktene blir møre. Da får tomaten koke inn og miste den rå smaken før den blandes med bønnene, og det er lettere å styre de to trinnene hver for seg.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'The pulse is sold as sabut urad, kali dal or ma di dal in Indian shops and is not the same as the split white urad next to it on the shelf.',
           no:'Belgfrukten selges som sabut urad, kali dal eller ma di dal i indiske butikker, og den er ikke det samme som den delte hvite uraden ved siden av på hylla. Se etter rent Kashmiri-chilipulver, og sjekk ingredienslisten så du ikke får en krydderblanding med spisskummen og oregano. Kremfløte gir den fylden oppskriften er beregnet for.'}}],
  variations:[
    {title:{en:'A lighter urad dal', no:'En lettere urad-dal'},
     body:{en:'Leave out the tomato and cream and halve the butter for a simpler urad dal with ginger, garlic and salt. Keep the same soaking, boiling and tenderness checks. Less dairy makes a lighter dish; it does not create a smoky flavour.',
           no:'Sløyf tomaten og fløten og halver smørmengden for en enklere urad-dal med ingefær, hvitløk og salt. Følg de samme rådene om bløtlegging, fosskoking og mørhet. Mindre meieriprodukter gir en lettere rett, men ingen røyksmak.'}},
    {title:{en:'Finish in the oven', no:'La retten koke ferdig i ovnen'},
     body:{en:'After boiling the soaked beans vigorously for at least 10 minutes on the hob, use a covered ovenproof pot in an oven at 150 °C. Check that the liquid keeps simmering, stir occasionally, and add hot water as needed. Cook until both kinds of bean are completely tender before adding the tomato base.',
           no:'Etter at de bløtlagte bønnene har fosskokt i minst 10 minutter på komfyren, kan en ildfast gryte med lokk settes i ovnen på 150 °C. Sjekk at væsken fortsetter å småkoke, rør av og til og spe med varmt vann ved behov. Begge bønneslagene skal være helt møre før tomatbunnen tilsettes.'}}]
},

{
  id:'butter-chicken', dish:'Butter chicken', course:'main', lesson:4, serves:4, veg:false,
  time:{prep:30, cook:40}, hero:'butter-chicken', tags:['tandoori','tomato','cream'],
  title:{en:'Butter chicken', no:'Butter chicken'},
  blurb:{en:'A tomato and butter gravy built for chicken that has already been cooked over fire.',
         no:'En saus av tomat og smør laget for kylling som allerede er stekt over ild.'},
  heroCaption:{en:'Butter chicken. The sauce is smooth and the chicken is not, and that contrast is the whole dish.',
               no:'Butter chicken. Sausen er glatt og kyllingen er det ikke, og den kontrasten er hele retten.'},
  goesWith:[{en:'Naan, or plain basmati rice', no:'Naan, eller kokt basmatiris'},
            {en:'A cucumber and onion salad with lemon', no:'En salat av agurk og løk med sitron'}],
  headnote:{
    en:`<p>The chicken is cooked separately before it meets the sauce. A well-known Delhi origin story says Punjabi refugee cooks kept cooked tandoori chicken moist by simmering it in tomato, butter and cream. Competing restaurant businesses dispute who may claim the invention, but the method remains useful: the sauce receives meat that already carries browning and tandoor seasoning.</p>
<p>Poach raw chicken in the gravy and you get a perfectly nice creamy chicken curry with none of the smoke and none of the edges. Twenty minutes under a hot grill is the difference between the two, and it is not optional.</p>
<p>The sauce itself is short. Tomato cooked down hard, butter, a little sugar to answer the acid, cream, and kasuri methi crushed in at the end to stop it tasting merely sweet.</p>`,
    no:`<p>Kyllingen stekes for seg før den møter sausen. En kjent opphavshistorie fra Delhi forteller at punjabiske flyktningkokker holdt ferdigstekt tandoorikylling saftig ved å la den småkoke i tomat, smør og fløte. Konkurrerende restaurantbedrifter er uenige om hvem som kan kreve oppfinnelsen, men metoden er fortsatt nyttig: Sausen får kjøtt som allerede har bruning og tandoorikrydder.</p>
<p>Trekker du rå kylling i sausen, får du en helt grei kremet kyllingkarri uten røyk og uten kanter. Tjue minutter under varm grill er forskjellen på de to, og den lar seg ikke hoppe over.</p>
<p>Selve sausen er enkel. Tomaten kokes hardt ned, så går det i smør, litt sukker som møter syren, og fløte, og kasuri methi knuses i til slutt, så sausen ikke bare smaker søtt.</p>`},
  ingredients:[
   {group:{en:'The chicken', no:'Kyllingen'}, items:[
    {q:800, u:'g', n:{en:'boneless chicken thigh', no:'utbenet kyllinglår'}, note:{en:'in large pieces, skinned', no:'i store biter, uten skinn'}},
    {q:150, u:'g', n:{en:'thick natural yoghurt', no:'tykk naturell yoghurt'}},
    {q:25, u:'g', n:{en:'ginger', no:'ingefær'}, note:{en:'grated', no:'revet'}},
    {q:20, u:'g', n:{en:'garlic', no:'hvitløk'}, note:{en:'crushed', no:'knust'}},
    {q:10, u:'g', n:{en:'Kashmiri chilli powder', no:'Kashmiri chilipulver'}},
    {q:4, u:'g', n:{en:'garam masala', no:'garam masala'}},
    {q:20, u:'ml', n:{en:'lemon juice', no:'sitronsaft'}},
    {q:20, u:'ml', n:{en:'neutral oil', no:'nøytral olje'}},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]},
   {group:{en:'The sauce', no:'Sausen'}, items:[
    {q:700, u:'g', n:{en:'tinned plum tomatoes', no:'hermetiske plommetomater'}, note:{en:'blended smooth', no:'kjørt glatte'}},
    {q:80, u:'g', n:{en:'butter', no:'smør'}},
    {q:20, u:'g', n:{en:'ginger', no:'ingefær'}, note:{en:'grated', no:'revet'}},
    {q:4, u:'', n:{en:'green cardamom pods', no:'grønne kardemommekapsler'}, round:'half', note:{en:'bruised', no:'lett knust'}},
    {q:1, u:'', n:{en:'piece of cassia bark', no:'bit kassiabark'}, round:'half'},
    {q:8, u:'g', n:{en:'Kashmiri chilli powder', no:'Kashmiri chilipulver'}},
    {q:15, u:'g', n:{en:'sugar', no:'sukker'}, note:{en:'or honey', no:'eller honning'}},
    {q:120, u:'ml', n:{en:'double cream', no:'kremfløte'}},
    {q:3, u:'g', n:{en:'kasuri methi', no:'kasuri methi'}},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Slash each piece of chicken twice, down to the thickest part, so the marinade reaches inside rather than sitting on the surface.',
     no:'Snitt hver kyllingbit to ganger, inn til det tykkeste, så marinaden når inn i stedet for å bli liggende utenpå.'},
    {en:'Whisk the yoghurt with the grated ginger, garlic, chilli powder, garam masala, lemon juice, oil and salt, and turn the chicken through it.',
     no:'Visp yoghurten sammen med revet ingefær, hvitløk, chilipulver, garam masala, sitronsaft, olje og salt, og vend kyllingen i blandingen.'},
    {en:'Cover and leave in the fridge for at least four hours, and overnight if you can. The acid needs time to get past the surface.',
     no:'Dekk til og sett kaldt i minst fire timer, og gjerne natten over. Syren trenger tid på å komme forbi overflaten.'},
    {en:'Heat the grill as high as it goes. Lay the chicken on a rack over a tray so the heat gets underneath and the drips do not stew it.',
     no:'Varm grillen så høyt den går. Legg kyllingen på en rist over en langpanne, så varmen kommer til under og dryppet ikke koker den.'},
    {en:'Grill for eight to ten minutes a side, until the edges are properly blackened in places. The char is the flavour, so do not stop at golden.',
     no:'Grill i åtte-ti minutter på hver side, til kantene er ordentlig svidd noen steder. Svimerkene er smaken, så ikke stopp ved gyllent.'},
    {en:'Meanwhile, melt the butter in a wide pan, add the cardamom and cassia, and wait until they smell, about thirty seconds.',
     no:'Smelt imens smøret i en vid panne, ha i kardemomme og kassia, og vent til det dufter, omtrent tretti sekunder.'},
    {en:'Add the grated ginger, cook for a minute, then pull the pan off the heat and stir in the chilli powder so it colours the butter without burning.',
     no:'Ha i den revne ingefæren, la det surre i et minutt, trekk så pannen av platen og rør inn chilipulveret, så det farger smøret uten å svi seg.'},
    {en:'Pour in the blended tomato, salt it, and cook hard for twenty minutes until it darkens to brick and the butter pools at the edges.',
     no:'Hell i den kjørte tomaten, salt, og kok hardt i tjue minutter til den mørkner mot teglrødt og smøret samler seg i kantene.'},
    {en:'Add the sugar, then the grilled chicken with any juices from the tray, and simmer gently for five minutes so the meat takes up the sauce.',
     no:'Ha i sukkeret, deretter den grillede kyllingen med all kraften fra langpannen, og la det småkoke forsiktig i fem minutter, så kjøttet trekker til seg sausen.'},
    {en:'Turn off the heat. Crush the kasuri methi between your palms over the pan, stir in the cream, and taste for salt, sugar and acid before serving.',
     no:'Skru av varmen. Knus kasuri methien mellom håndflatene over pannen, rør inn fløten, og smak til med salt, sukker og syre før servering.'}],
  notes:[
    {title:{en:'Why the chicken is cooked twice', no:'Hvorfor kyllingen stekes to ganger'},
     body:{en:'The dish was invented to use meat that had already been through a tandoor, and the browning and smoke from that first cooking are ingredients in their own right. A gravy cannot produce them, which is why butter chicken made in one pot always tastes flat.',
           no:'Retten ble funnet opp for å bruke opp kjøtt som allerede hadde vært gjennom en tandoor, og bruningen og røyken fra den første stekingen er ingredienser i seg selv. En saus kan ikke lage dem, og derfor smaker en butter chicken som lages i én gryte, alltid flatt.'}},
    {title:{en:'Why the sugar is not optional', no:'Hvorfor sukkeret ikke kan sløyfes'},
     body:{en:'Tinned tomato is sharply acidic and cream does not cancel acid, it only masks it. A little sugar brings the sauce back into balance and lets the spices come forward. Add it before the cream, and taste again after.',
           no:'Hermetisk tomat er skarpt syrlig, og fløte opphever ikke syre, den bare dekker over den. Litt sukker bringer sausen i balanse igjen og lar krydderet komme fram. Ha det i før fløten, og smak på nytt etterpå.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Use chicken thigh rather than breast: it survives a hard grilling and dry breast is the commonest fault in a home butter chicken.',
           no:'Bruk kyllinglår og ikke bryst: låret tåler hard grilling, og tørt bryst er den vanligste feilen i en hjemmelaget butter chicken. Kashmiri chilipulver og kasuri methi finnes i indiske butikker på Grønland, og begge er nødvendige. Det som selges som «chilipulver» i norsk dagligvare, er ofte en taco-blanding, og det som selges som «paprikapulver», gir farge, men ingen styrke. Kremfløte tåler sausen; matfløte skiller seg.'}}],
  variations:[
    {title:{en:'Over charcoal', no:'Over kull'},
     body:{en:'Cook the marinated chicken on a barbecue instead of under the grill, on skewers and close to the coals. This is much nearer the original, and it is worth doing once so you know what the dish is aiming at.',
           no:'Stek den marinerte kyllingen på grillen ute i stedet for under grillelementet, på spyd og nær kullet. Det ligger langt nærmere originalen, og det er verdt å gjøre én gang, så du vet hva retten sikter mot.'}},
    {title:{en:'Paneer instead of chicken', no:'Paneer i stedet for kylling'},
     body:{en:'Marinate cubes of paneer for an hour only and grill them for six minutes, then treat them exactly as the chicken. Acid-set cheese holds together over fire, which is why this works and a melting cheese would not.',
           no:'Marinér terninger av paneer i bare en time og grill dem i seks minutter, og behandle dem så akkurat som kyllingen. Ost som er satt med syre, holder sammen over ild, og derfor fungerer dette der en smeltende ost ikke ville gjort det.'}}]
},

{
  id:'lassi', dish:'Lassi', course:'snack', lesson:2, serves:4, veg:true,
  time:{prep:10, cook:0}, hero:'lassi', tags:['dairy','drink','summer'],
  title:{en:'Salted lassi', no:'Saltet lassi'},
  blurb:{en:'A thin, salted, faintly sour form of lassi based on the liquid left after butter churning.',
         no:'En tynn, saltet og svakt syrlig lassivariant med utgangspunkt i væsken etter kjerning.'},
  heroCaption:{en:'A lassi shop in Amritsar. What it serves is the thick sweet kind; the everyday drink at home is thinner and salted.',
               no:'En lassibutikk i Amritsar. Det de serverer, er den tykke søte typen; hverdagsdrikken hjemme er tynnere og saltet.'},
  goesWith:[{en:'Any Punjabi meal, and every hot afternoon', no:'Ethvert punjabisk måltid, og hver varm ettermiddag'},
            {en:'Chole bhature, which needs something to cut it', no:'Chole bhature, som trenger noe som skjærer gjennom fettet'}],
  headnote:{
    en:`<p>One traditional lassi begins as a by-product. When a household churns curd with water to make butter, the butter rises and the liquid below can be served thin, slightly sour and salted. Thick sweet lassi is also an established Punjabi style, especially in shops and as a treat.</p>
<p>Everything here depends on the yoghurt. Norwegian natural yoghurt is often thicker and milder than dahi, so it may need more water than expected. A slightly tangier yoghurt within its use-by date gives a livelier drink.</p>
<p>The roasted cumin is not decoration. It is a savoury, slightly smoky note that turns a dairy drink into something you can have with a meal, and grinding it yourself from whole seed takes a minute and is worth it.</p>`,
    no:`<p>En tradisjonell lassi begynner som et biprodukt. Når en husholdning kjerner syrnet melk med vann for å lage smør, stiger smøret opp, og væsken under kan serveres tynn, litt syrlig og saltet. Tykk og søt lassi er også en etablert punjabisk variant, særlig i butikker og som en godbit.</p>
<p>Alt her henger på yoghurten. Norsk naturell yoghurt er ofte tykkere og mildere enn dahi, så den kan trenge mer vann enn ventet. En litt syrligere yoghurt innenfor holdbarhetsdatoen gir mer smak.</p>
<p>Den ristede spisskummen er ingen pynt. Den gir en smaksrik og litt røykpreget tone som gjør en melkedrikk til noe du kan ha til maten, og maler du den selv fra hele frø, tar det ett minutt og er verdt bryet.</p>`},
  ingredients:[{group:{en:'', no:''}, items:[
    {q:600, u:'g', n:{en:'natural yoghurt', no:'naturell yoghurt'}, note:{en:'full fat, and a day or two old', no:'med fullt fettinnhold, og et døgn eller to gammel'}},
    {q:450, u:'ml', n:{en:'very cold water', no:'iskaldt vann'}, scale:'sub'},
    {q:4, u:'g', n:{en:'cumin seed', no:'spisskummenfrø'}},
    {q:6, u:'', n:{en:'mint leaves', no:'mynteblader'}, round:'half', note:{en:'optional', no:'valgfritt'}},
    {u:'', n:{en:'salt', no:'salt'}, scale:'none'},
   ]}],
  steps:[
    {en:'Toast the cumin seed in a dry pan over a medium flame until it darkens a shade and smells nutty, about a minute. Take it out at once.',
     no:'Rist spisskummenfrøene i tørr panne på middels varme til de mørkner et hakk og lukter nøtter, omtrent ett minutt. Ta dem ut med en gang.'},
    {en:'Crush the toasted seed to a coarse powder in a mortar. Keep a pinch back for the top of the glasses.',
     no:'Knus de ristede frøene til et grovt pulver i en morter. Hold av en klype til toppen av glassene.'},
    {en:'Whisk the yoghurt on its own until it is completely smooth. Lumps left now will not disappear later.',
     no:'Visp yoghurten alene til den er helt glatt. Klumper som står igjen nå, forsvinner ikke senere.'},
    {en:'Add the cold water in three or four goes, whisking between each, until the drink is thin enough to pour freely.',
     no:'Ha i det kalde vannet i tre-fire omganger og visp mellom hver, til drikken er tynn nok til å helles fritt.'},
    {en:'Whisk in the ground cumin and salt it. Salt it more firmly than feels right; it is a savoury drink and cold dulls salt.',
     no:'Visp inn den malte spisskummen og salt. Salt kraftigere enn det som føles riktig, for dette er en salt drikk, og kulde demper saltsmaken.'},
    {en:'Beat it hard for half a minute more, or blitz it briefly, until a light foam sits on top. That froth is what a churn gives you and it matters to the mouthfeel.',
     no:'Pisk kraftig i et halvt minutt til, eller kjør den kort med stavmikser, til det ligger et lett skum på toppen. Det skummet er det kjernen gir, og det betyr noe for munnfølelsen.'},
    {en:'Chill for twenty minutes. Taste again cold and correct the salt, because it will have gone flat.',
     no:'Sett kaldt i tjue minutter. Smak på nytt når den er kald og juster saltet, for det har flatet ut.'},
    {en:'Pour into tall glasses, dust with the reserved cumin, and add a mint leaf if you have one.',
     no:'Hell den i høye glass, dryss over den spisskummen du holdt av, og legg på et mynteblad hvis du har.'}],
  notes:[
    {title:{en:'Why it is salted and not sweetened', no:'Hvorfor den saltes og ikke søtes'},
     body:{en:'Salted lassi is a savoury, refreshing form suited to a meal or a hot day. Sweet lassi with cream is another Punjabi style, commonly sold as a treat.',
           no:'Saltet lassi er en frisk matdrikk som passer til et måltid eller en varm dag. Søt lassi med fløte er en annen punjabisk variant som ofte selges som en godbit.'}},
    {title:{en:'Why the yoghurt is whisked alone first', no:'Hvorfor yoghurten vispes alene først'},
     body:{en:'Yoghurt is a set gel, and adding water to a gel gives you lumps suspended in liquid. Breaking the gel down first and then thinning it gives a drink that stays mixed instead of separating in the glass.',
           no:'Yoghurt er en stivnet gelé, og har du vann i en gelé, får du klumper som flyter i væske. Bryter du geléen ned først og tynner den etterpå, får du en drikk som holder seg blandet i stedet for å skille seg i glasset.'}},
    {title:{en:'Sourcing it in Norway', no:'Slik får du tak i det i Norge'},
     body:{en:'Use plain full-fat natural yoghurt. Skyr is much thicker, so it needs substantial thinning and gives a different texture.',
           no:'Bruk naturell yoghurt med fullt fettinnhold. Skyr er mye tykkere og må tynnes kraftig, så konsistensen blir annerledes. Kulturmelk kan brukes som en løsere, syrlig tilpasning; begynn i så fall uten vann. Hele spisskummenfrø finnes i indiske butikker og må ikke forveksles med karve.'}}],
  variations:[
    {title:{en:'Sweet lassi', no:'Søt lassi'},
     body:{en:'Leave out the cumin and salt, use half the water, and sweeten with sugar and a little cream on top. This makes the thick style associated with lassi shops in Amritsar.',
           no:'Sløyf spisskummen og saltet, bruk halvparten så mye vann, og søt med sukker og litt fløte på toppen. Da får du den tykke varianten som forbindes med lassibutikker i Amritsar.'}},
    {title:{en:'Mango lassi', no:'Mangolassi'},
     body:{en:'Blend ripe mango pulp in with the yoghurt and use less water. It is a genuine Indian drink but a summer and restaurant one, and it belongs nowhere near a plate of saag.',
           no:'Kjør modent mangofruktkjøtt sammen med yoghurten og bruk mindre vann. Det er en ekte indisk drikk, men en sommer- og restaurantdrikk, og den hører ikke hjemme i nærheten av en tallerken med saag.'}}]
}

];
