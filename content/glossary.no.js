/* Masala Dabba — ordliste, norsk bokmål. Nøklene er identiske med content/glossary.js.
   `match` er ordformene som skal gjenkjennes i den norske teksten, og de er derfor andre enn i den
   engelske filen: «clay pot» er «leirgryte». `term` er overskriften i oppslaget. */
window.GLOSSARY_NO = window.GLOSSARY_NO || {};
Object.assign(window.GLOSSARY_NO, {
  'tadka': {
    term: 'Tadka',
    short: 'Hele krydder som varmes i fett og helles over eller under en rett.',
    long: 'Teknikken kalles chhonk i nord, thalippu i sør og tempering på engelsk. Fettet varmes, sennepsfrøene går i og spretter, så følger tørket chili, karriblad og det retten ellers trenger. Blandingen er enten bunnen retten bygges på, eller en skje som helles over til slutt. Dette er den vanligste teknikken i indisk matlaging, og den som oftest forsvinner i oversatte oppskrifter.',
    match: ['tempering', 'tadka']
  },
  'masala': {
    term: 'Masala',
    short: 'En krydderblanding, tørr eller våt, laget for én rett og ikke for alle.',
    long: 'Ordet betyr rett og slett en blanding. Den kan være tørr og malt, som en garam masala, eller våt og støtt, som recheado-pastaen i Goa. Masalaer passer ofte til bestemte retter, selv om moderne kjøkken også bruker ferdige blandinger. Karripulver i britisk stil presset mange praksiser inn i ett handelsprodukt.',
    match: ['masala']
  },
  'garam-masala': {
    term: 'Garam masala',
    short: 'En blanding av varme krydder, vanligvis tilsatt til slutt i stedet for kokt med.',
    long: 'Garam betyr varm, men ordet sikter til hva krydderet skal gjøre med kroppen, ikke til styrke fra chili. Kanel, nellik, kardemomme, svart pepper, muskatblomme og spisskummen er typiske. Mengdeforholdene varierer med region, husholdning og rett. Blandingen tilsettes ofte mot slutten av kokingen fordi duften er flyktig.',
    match: ['garam masala']
  },
  'ghee': {
    term: 'Ghee',
    short: 'Smør som kokes til vannet er borte og melketørrstoffet brunet, og som så siles.',
    long: 'Ghee er klaret smør der melketørrstoffet får riste seg brunt før det siles fra, og det gir den nøtteaktige lukten. Når vann og melketørrstoff fjernes, holder ghee lenger enn smør, men lagringstiden avhenger av produktet og ren, tørr håndtering. Følg etiketten, og sett hjemmelaget ghee kaldt hvis holdbarheten er usikker. Den tåler også forholdsvis høy varme.',
    match: ['ghee']
  },
  'dum': {
    term: 'Dum',
    short: 'Å koke i en forseglet gryte så ingenting slipper ut.',
    long: 'Lokket festes til gryta med en pølse av deig, og gryta står over lav ild, noen ganger med glør på lokket også. Ingenting fordamper, så kjøttet koker i sin egen damp, og duftene kommer seg ingen vei. Awadhi-biryani er det mest kjente eksempelet, og forseglingen brytes ved bordet.',
    match: ['dum']
  },
  'thali': {
    term: 'Thali',
    short: 'En rund metalltallerken, og dermed også et måltid servert på den, alt på én gang.',
    long: 'Ordet er tallerkenen. Som måltid betyr det små mengder servert samtidig i stedet for retter etter hverandre: to eller tre grønnsaker, en dal, et brød, ris, en pickles og noe søtt. Den som spiser, bestemmer rekkefølgen og kombinasjonene selv, og det er det motsatte av en smaksmeny.',
    match: ['thali']
  },
  'sadya': {
    term: 'Sadya',
    short: 'Et vegetarisk festmåltid fra Kerala, servert på bananblad ved festivaler, bryllup og andre feiringer.',
    long: 'Sadya forbindes sterkt med Onam og Vishu og serveres også i bryllup og ved andre anledninger. Vertene følger gjenkjennelige mønstre for plassering og servering, men antall, plass og rekkefølge varierer med region og husholdning. Payasam gir det søte innslaget.',
    match: ['sadya']
  },
  'thoran': {
    term: 'Thoran',
    short: 'Grønnsaker skåret smått og vendt med revet kokos, så vidt kokt.',
    long: 'En tørr sidrett fra Kerala. Bønner, kål, gulrot eller bladgrønnsaker kan hakkes fint og kokes med revet kokos, chili, gurkemeie og en temperering. Oppskrift og hyppighet varierer, men den ferdige retten har vanligvis lite fri væske.',
    match: ['thoran']
  },
  'kudampuli': {
    term: 'Kudampuli',
    short: 'Det røkte og tørkede skallet av en Garcinia-frukt, brukt til å syrne fisk.',
    long: 'Selges også som malabartamarind eller fish tamarind, selv om den verken er tamarind eller det samme som kokum. Det tørkede skallet gir mange fiskekarrier fra Kerala en skarp, noen ganger røykpreget syre. Smaken endres, men kokt fisk må fortsatt raskt i kjøleskap.',
    match: ['kudampuli']
  },
  'matta': {
    term: 'Mattaris',
    short: 'Keralas korte, røde, forkokte ris.',
    long: 'Paddyen bløtlegges, varmes og tørkes før maling. Forkokingen endrer stivelsen og kan flytte noen vannløselige næringsstoffer innover. Sorten og kliet bidrar til rødfargen og den faste, seige konsistensen.',
    match: ['matta', 'mattaris']
  },
  'appam': {
    term: 'Appam',
    short: 'En gjæret rispannekake, blondeaktig i kanten og svampete i midten.',
    long: 'Ris males sammen med kokos og får gjære, og så svinges røren rundt i en liten rundbunnet panne slik at kanten blir tynn mens midten holder seg tykk. Noen tradisjoner bruker gjærende palmetoddy; mange oppskrifter bruker i dag gjær, kokt ris eller en annen starter.',
    match: ['appam']
  },
  'parotta': {
    term: 'Keralaparotta',
    short: 'Et lagdelt hvetebrød fra Malabarkysten, som dras fra hverandre i tråder.',
    long: 'Deigen hviler, oljes, strekkes svært tynn, snurres til en spiral og trykkes flat, og så steker den seg opp i en stabel løse lag. Den er ikke det samme som en nordindisk paratha, og den spises som regel til stekt oksekjøtt eller en kjøttkarri heller enn i et høytidelig måltid.',
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
    long: 'Ordet dekker både råvaren og den ferdige retten. Dusinvis av belgfrukter brukes, og de kan ikke byttes om: toor, moong, urad, chana og masoor koker til ulike konsistenser og hører til ulike retter. Dal står sentralt i mange indiske måltider og avsluttes ofte med en tadka.',
    match: ['dal', 'parippu']
  },
  'pappadam': {
    term: 'Pappadam',
    short: 'En tynn kjeks av linsemel, stekt eller ristet til den er sprø.',
    long: 'Deigen av malt belgfruktmel kjevles svært tynn og soltørkes, og kjeksen friteres eller holdes over flammen til den puffer seg opp og blir sprø. I Kerala hører den til både hverdagstallerkenen og sadyaen, der mange smuldrer en oppi payasamen til slutt.',
    match: ['pappadam']
  },
  'jaggery': {
    term: 'Jaggery',
    short: 'Uraffinert sukker av sukkerrør eller palmesaft, som selges i blokker.',
    long: 'Sukkerrørsaft eller palmesaft kokes inn og stivner uten å bli sentrifugert, så melassen blir værende. Den smaker av karamell og mineraler og ikke bare av sødme, og den kan ikke byttes ut med hvitt sukker i en oppskrift som hviler på den.',
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
    long: 'Sørvestmonsunen når vanligvis Keralas kyst omkring begynnelsen av juni og arbeider seg nordover; en svakere nordøstmonsun følger senere og betyr mest for sørøst. Tidspunktet for monsunen former mange avlingene i kurset, mens vanning, jordsmonn og lokalklima også påvirker hva som vokser.',
    match: ['monsun', 'monsunen', 'sørvestmonsunen']
  },
  'western-ghats': {
    term: 'Vestghatene',
    short: 'Fjellkjeden langs Indias vestkyst, og grunnen til at krydderet vokser.',
    long: 'En kjede som løper omtrent 1600 km fra Gujarat til sørspissen, stort sett mellom 900 og 2600 meter. Den stenger for sørvestmonsunen og tvinger den til å regne av seg på sjøsiden, og det gjør Kerala, kyst-Karnataka og Konkan våte og Dekkan-platået bak dem tørt.',
    match: ['Vestghatene']
  }
});
