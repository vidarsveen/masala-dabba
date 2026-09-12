/* Masala Dabba — ordliste, norsk bokmål. Nøklene er identiske med content/glossary.js.
   `match` er ordformene som skal gjenkjennes i den norske teksten, og de er derfor andre enn i den
   engelske filen: «clay pot» er «leirgryte». `term` er overskriften i oppslaget. */
window.GLOSSARY_NO = window.GLOSSARY_NO || {};
Object.assign(window.GLOSSARY_NO, {
  'tadka': {
    term: 'Tadka (tempering)',
    short: 'Hele krydder som varmes i fett og helles over eller under en rett.',
    long: 'Kalles også tempering, chhonk eller, i sør, thalippu. Fettet varmes, sennepsfrøene går i og spretter, så følger tørket chili, karriblad og det retten ellers trenger, og hele blandingen er enten bunnen retten bygges på eller en skje som helles over til slutt. Dette er den vanligste teknikken i indisk matlaging, og den som oftest forsvinner i oversatte oppskrifter.',
    match: ['tempering', 'tadka']
  },
  'masala': {
    term: 'Masala',
    short: 'En krydderblanding, tørr eller våt, laget for én rett og ikke for alle.',
    long: 'Ordet betyr rett og slett en blanding. Den kan være tørr og malt, som en garam masala, eller våt og støtt, som recheado-pastaen i Goa. Poenget er at en masala lages til retten sin. Tanken om ett allment «karripulver» er en britisk oppfinnelse fra 1700-tallet og brukes ikke i indiske kjøkken.',
    match: ['masala']
  },
  'garam-masala': {
    term: 'Garam masala',
    short: 'En blanding av varme krydder, vanligvis tilsatt til slutt i stedet for kokt med.',
    long: 'Garam betyr varm, i betydningen hva krydderet antas å gjøre med kroppen, ikke styrke fra chili. Kanel, nellik, kardemomme, svart pepper, muskatblomme og spisskummen er typiske, og nesten hver region og hver familie har sine egne forhold. Den går som regel i mot slutten av kokingen, fordi duften er flyktig.',
    match: ['garam masala']
  },
  'ghee': {
    term: 'Ghee',
    short: 'Smør som kokes til vannet er borte og melketørrstoffet er brunet, og siles.',
    long: 'Klaret smør, men tatt et skritt lenger enn den franske varianten: melketørrstoffet får riste seg brunt før det siles fra, og det gir ghee den nøtteaktige lukten. Den holder seg i månedsvis uten kjøling, og derfor ble den stekefettet i varme områder med mye melk. Den tåler også høy varme.',
    match: ['ghee']
  },
  'dum': {
    term: 'Dum',
    short: 'Å koke i en forseglet gryte så ingenting slipper ut.',
    long: 'Lokket festes til gryta med en pølse av deig, og gryta står over lav ild, noen ganger med glør på lokket også. Ingenting fordamper, så kjøttet koker i sin egen damp og duftene har ingen steder å gjøre av seg. Awadhi-biryani er det kjenteste eksempelet, og forseglingen brytes ved bordet.',
    match: ['dum']
  },
  'thali': {
    term: 'Thali',
    short: 'En rund metalltallerken, og dermed også et måltid servert på den, alt på én gang.',
    long: 'Ordet er tallerkenen. Som måltid betyr det små mengder servert samtidig i stedet for i retter etter hverandre: to eller tre grønnsaker, en dal, et brød, ris, en pickles, noe søtt. Den som spiser bestemmer rekkefølgen og kombinasjonene selv, og det er det motsatte av en smaksmeny.',
    match: ['thali']
  },
  'sadya': {
    term: 'Sadya',
    short: 'Et festmåltid i Kerala med tjue eller flere vegetariske retter på et bananblad.',
    long: 'Serveres til Onam og i bryllup, på et bananblad med den smale enden mot venstre. Hver rett har sin faste plass, og rekkefølgen de som serverer går rundt i, forteller hva som skal blandes i risen nå. Måltidet ender med payasam, og bretter du bladet mot deg etterpå, betyr det at du likte det.',
    match: ['sadya']
  },
  'thoran': {
    term: 'Thoran',
    short: 'Grønnsaker skåret smått og vendt med revet kokos, så vidt kokt.',
    long: 'En tørr sidrett fra Kerala. Bønner, kål, gulrot eller en bladgrønnsak hakkes fint og røres over varmen med revet kokos, grønn chili, gurkemeie og en tempering av sennepsfrø til de akkurat er ferdige. Det er ikke en karri og har ingen saus, og et måltid i Kerala har som regel en på tallerkenen hver dag.',
    match: ['thoran']
  },
  'kudampuli': {
    term: 'Kudampuli',
    short: 'Det røkte og tørkede skallet av en Garcinia-frukt, brukt til å syrne fisk.',
    long: 'Selges også som malabartamarind eller fish tamarind, selv om den verken er tamarind eller det samme som kokum. Frukten deles, røykes over bål og tørkes til den er svart og læraktig. Den gir en ren og skarp syre, strammer opp fiskekjøttet og lar en karri stå i to-tre dager uten kjøling.',
    match: ['kudampuli']
  },
  'matta': {
    term: 'Mattaris',
    short: 'Keralas korte, røde, forkokte ris.',
    long: 'Forkokt før maling: bløtlagt, dampet med skallet på og tørket igjen. Dampingen driver vitaminer fra kliet inn i kornet og herder stivelsen, så risen beholder næringen, tåler fuktig lagring og holder seg seig i en våt karri. Den røde fargen er kli som blir igjen etter malingen.',
    match: ['matta', 'mattaris']
  },
  'appam': {
    term: 'Appam',
    short: 'En gjæret rispannekake, blondeaktig i kanten og svampete i midten.',
    long: 'Ris males sammen med kokos og får gjære, og så svinges en sleiv av røren rundt i en liten rundbunnet panne slik at kantene renner tynne og sprø mens midten holder seg tykk. Den hule midten rommer stuingen. Tradisjonelt hevet med palmetoddy, nå som regel med gjær.',
    match: ['appam']
  },
  'parotta': {
    term: 'Keralaparotta',
    short: 'Et lagdelt hvetebrød fra malabarkysten, som dras fra hverandre i tråder.',
    long: 'Deigen hviler, oljes, strekkes svært tynn, snurres til en spiral og trykkes flat, så den steker seg til en stabel løse lag. Den er ikke det samme som en nordindisk paratha, og den spises som regel til beef fry eller en kjøttkarri heller enn i et høytidelig måltid.',
    match: ['parotta', 'keralaparotta', 'keralaparottaen']
  },
  'biryani': {
    term: 'Biryani',
    short: 'Ris og kjøtt kokt sammen i en forseglet gryte, lagt lagvis i stedet for rørt.',
    long: 'Det finnes to hovedmetoder. I kacchi biryani går det rå marinerte kjøttet og den halvkokte risen i gryta samtidig og blir ferdige under dum. I pakki biryani kokes kjøttet først og legges så lagvis. Hyderabad, Lucknow, Thalassery og Kolkata har hver sin utgave, og risen varierer: basmati i nord, kortkornet kaima i Kerala.',
    match: ['biryani']
  },
  'dal': {
    term: 'Dal',
    short: 'Delte belgfrukter, og retten som lages av dem.',
    long: 'Ordet dekker både råvaren og den ferdige retten. Dusinvis av belgfrukter brukes, og de kan ikke byttes om: toor, moong, urad, chana og masoor koker til ulike konsistenser og hører til ulike retter. Nesten hvert indisk måltid har en, og den avsluttes som regel med en tempering.',
    match: ['dal', 'parippu']
  },
  'pappadam': {
    term: 'Pappadam',
    short: 'En tynn kjeks av linsemel, stekt eller ristet til den er sprø.',
    long: 'Lages av en deig av malt belgfruktmel, kjevlet svært tynn og soltørket, og så fritert eller holdt over flammen til den puffer seg opp og blir sprø. I Kerala hører den til både hverdagstallerkenen og sadyaen, der mange smuldrer en oppi payasamen til slutt.',
    match: ['pappadam']
  },
  'jaggery': {
    term: 'Jaggery',
    short: 'Uraffinert sukker av sukkerrør eller palmesaft, som selges i blokker.',
    long: 'Sukkerrørsaft eller palmesaft kokes inn og stivner uten å bli sentrifugert, så melassen blir værende. Den smaker karamell og mineraler heller enn bare sødme, og den kan ikke byttes ut med hvitt sukker i en oppskrift som hviler på den.',
    match: ['jaggery']
  },
  'payasam': {
    term: 'Payasam',
    short: 'En søt pudding av melk eller kokosmelk, servert til slutt i en sadya.',
    long: 'Ris, vermicelli, linser eller ada småkoker i melk med sukker, eller i kokosmelk med jaggery, og avsluttes med kardemomme, cashewnøtter og rosiner stekt i ghee. Kalles kheer i nord. Utgavene med jaggery er mørkere, og det er dem som vanligvis serveres på et blad.',
    match: ['payasam']
  },
  'monsoon': {
    term: 'Monsun',
    short: 'Den årstidsbestemte vindsnuingen som gir India mesteparten av nedbøren.',
    long: 'Sørvestmonsunen når Keralas kyst omkring 1. juni og arbeider seg nordover; en svakere nordøstmonsun følger i oktober og betyr mest for sørøst. Nesten hver eneste avling i dette kurset er tidfestet etter den, og hvor regnet faller, avgjør hva som vokser.',
    match: ['monsun', 'monsunen', 'sørvestmonsunen']
  },
  'western-ghats': {
    term: 'Vestghatene',
    short: 'Fjellkjeden langs Indias vestkyst, og grunnen til at krydderet vokser.',
    long: 'En kjede som løper omtrent 1600 km fra Gujarat til sørspissen, stort sett mellom 900 og 2600 meter. Den stenger for sørvestmonsunen og tvinger den til å regne av seg på sjøsiden, og det gjør Kerala, kyst-Karnataka og Konkan våte og Dekkan-platået bak dem tørt.',
    match: ['Vestghatene']
  }
});
