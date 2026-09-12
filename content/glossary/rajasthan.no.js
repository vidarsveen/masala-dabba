/* Masala Dabba — ordlisteoppslag som Rajasthan (IN-RAJ) innfører, norsk bokmål.
   Nøklene er identiske med content/glossary/rajasthan.js. `match` er ordformene som skal
   gjenkjennes i den norske teksten, og de er derfor andre enn i den engelske filen. */
window.GLOSSARY_NO = window.GLOSSARY_NO || {};
Object.assign(window.GLOSSARY_NO, {
  'bati': {
    term: 'Bati',
    short: 'En hard, usyret hvetekule bakt i glør, knekt opp og dynket i ghee.',
    long: 'Grovt hvetemel, salt og rikelig med ghee gnidd inn i melet, trillet til kuler og bakt hard i glørne fra et bål, gravd ned i varm sand eller stekt i stekeovn. Ingenting er tilsatt for å heve den, så den kommer ut tett, sprukken og tørr, og den holder seg i dagevis. Derfor var den reisemat. Den smeltede gheen som helles over ved bordet, er ingen pynt, men det som gjør den spiselig.',
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
    long: 'Ikke det samme som mel av den lyse kabuli-kikerten: besan males av den mindre brune chana-erten, og det er finere, mørkere og suger opp mer væske. I et kjøkken med få grønnsaker gjør det uvanlig mye arbeid. Det er deigen i gatte, jevningen i kadhi, laget rundt en fritert chili, og skjeen som piskes inn i yoghurten for at sausen ikke skal skille seg.',
    match: ['kikertmel', 'besan']
  },
  'chaas': {
    term: 'Chaas (kjernemelk)',
    short: 'Det som blir igjen når smøret er kjernet ut av yoghurten. Drikkes saltet, og brukes i maten.',
    long: 'Tynn, syrlig og lett saltet, ofte med spisskummen eller karriblad i. I det vestlige India avslutter den nesten hvert sommermåltid, og den er også kokevæske: kadhi er ikke annet enn chaas jevnet med kikertmel og skjerpet med chili. Siden den holder seg lenger enn melk i varmen, er den like mye en måte å lagre buskapen på som en drikk.',
    match: ['chaas', 'kjernemelk']
  },
  'panchmel': {
    term: 'Panchmel dal',
    short: 'Fem belgfrukter kokt i én gryte: chana, moong, urad, toor og moth.',
    long: 'Panchmel betyr fem blandet, og de kokes ikke sammen for syns skyld. Hver belgfrukt mykner i sitt eget tempo, så noen løser seg opp i selve dalen mens andre holder formen, og den ferdige gryta får en konsistens ingen enkelt belgfrukt gir. Dette er dalen som serveres under batiene i dal bati churma, og den siste av de fem, moth, er ørkenbelgfrukten som gir avling der nesten ingenting annet gjør.',
    match: ['panchmel']
  }
});
