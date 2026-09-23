/* Masala Dabba — ordlisteoppslag som Rajasthan (IN-RAJ) innfører, norsk bokmål.
   Nøklene er identiske med content/glossary/rajasthan.js. `match` er ordformene som skal
   gjenkjennes i den norske teksten, og de er derfor andre enn i den engelske filen. */
window.GLOSSARY_NO = window.GLOSSARY_NO || {};
Object.assign(window.GLOSSARY_NO, {
  'bati': {
    term: 'Bati',
    short: 'En hard, usyret hvetekule bakt i glør, knekt opp og dynket i ghee.',
    long: 'Grovt hvetemel, salt og ghee arbeides til en stiv deig som trilles til kuler og tradisjonelt bakes i glør; moderne kjøkken bruker ovn. Uten heving blir bati tett, sprukket og tørr, og tåler derfor transport og lagring bedre enn mykt brød. Smeltet ghee ved bordet gir fylde og mykere konsistens.',
    match: ['bati', 'batien', 'batiene']
  },
  'churma': {
    term: 'Churma',
    short: 'Bakt bati støtt sammen med ghee og ukokt rørsukker, spist ved siden av den salte maten.',
    long: 'Den tredje delen av dal bati churma. Batier smuldres mens de ennå er varme og støtes sammen med ghee, gur eller sukker, kardemomme og ofte hakkede nøtter, og resultatet skal holde seg løst og smuldrete i stedet for å bli en jevn masse. Den kommer på samme tallerken som dalen og ikke etterpå, for et måltid i Rajasthan holder ikke søtt og salt fra hverandre.',
    match: ['churma', 'churmaen']
  },
  'dhungar': {
    term: 'Dhungar (røyking under lokk)',
    short: 'En glo i en skål midt i gryta, dynket i ghee og dekket til i to minutter.',
    long: 'Et sluttgrep og ingen tilberedningsmetode. En liten stålskål settes ned midt i den ferdige retten, en glødende kullbit legges i den, en skje ghee helles over gloen, og lokket går straks på. Røyken arbeider seg gjennom retten i et minutt eller to, og skålen løftes så ut. Grepet brukes på laal maas, på kebab og på dal, og det tar kortere tid enn å dekke bordet.',
    match: ['dhungar']
  },
  'besan': {
    term: 'Besan (kikertmel)',
    short: 'Mel malt av brune chana-erter. Det jevner, binder og blir i Rajasthan selve retten.',
    long: 'Det er ikke det samme som mel av den lyse kabuli-kikerten. Besan males av den mindre brune chana-erten, og melet er finere, mørkere og suger opp mer væske. I et kjøkken med få grønnsaker gjør det uvanlig mye arbeid. Det er deigen i gatte, jevningen i kadhi, laget rundt en fritert chili, og skjeen som piskes inn i yoghurten for at sausen ikke skal skille seg.',
    match: ['kikertmel', 'besan']
  },
  'chaas': {
    term: 'Chaas (kjernemelk)',
    short: 'Det som blir igjen når smøret er kjernet ut av yoghurten. Drikkes saltet, og brukes i maten.',
    long: 'Den er tynn, syrlig og lett saltet, ofte med spisskummen eller karriblad i. I det vestlige India avslutter den nesten hvert sommermåltid, og den er også kokevæske: kadhi er ikke annet enn chaas jevnet med kikertmel og skjerpet med chili. Siden den holder seg lenger enn melk i varmen, er den like mye en måte å ta vare på melken på som en drikk.',
    match: ['chaas', 'kjernemelk']
  },
  'panchmel': {
    term: 'Panchmel dal',
    short: 'Fem belgfrukter kokt i én gryte; utvalget varierer mellom kokker og steder.',
    long: 'Panchmel betyr fem blandet. En vanlig kombinasjon er chana, moong, urad, toor og masoor, mens noen varianter fra Rajasthan bruker tørkesterk moth-bønne. Siden belgfruktene mykner i ulikt tempo, kan dalen bli både kremet og grov. Den serveres ofte med batiene i dal bati churma.',
    match: ['panchmel']
  }
});
