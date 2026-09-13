/* Masala Dabba — kryddersider, norsk. Kontrakt: docs/spice-format.md, sjekkes av tools/spicecheck.py.
   Den norske utgaven må ha et sourcing-felt: hvor man får tak i varen i Norge, og hva som er verdt
   å kjøpe. Her er det feltet ekstra viktig, for fire av de seks selges ikke i Norge i det hele tatt. */
window.SPICE_NO = window.SPICE_NO || {};
Object.assign(window.SPICE_NO, {
 'IN-NEA|Bhut jolokia': {
   aroma: 'Fruktig og svakt blomsterpreget under styrken, omtrent som en overmoden aprikos.',
   flavour: 'Styrken kommer sent og blir sittende i flere minutter. Med omkring én million Scoville-enheter er en tynn flis en porsjon.',
   does: 'Gir hele måltidet styrke fra kanten av tallerkenen, der den som spiser, styrer mengden i stedet for kokken.',
   when: 'Rå ved siden av maten, eller tørket i røyk og smuldret rett oppi. Den kokes sjelden inn i en saus.',
   swap: 'En habanero eller scotch bonnet oppfører seg på samme måte, men med en brøkdel av styrken. Cayenne gir feil slags styrke.',
   sourcing: 'Tørket bhut jolokia selges i indiske butikker på Grønland i Oslo, og noen asiatiske butikker har ferske i fryseren. Planten selges også som frø og modner i et vindu mot sør.'
 },
 'IN-NEA|Bamboo shoot': {
   aroma: 'Ferske skudd lukter grønt og svakt av høy. Gjærede skudd lukter surt og litt ostaktig, og lukten bærer.',
   flavour: 'Ferske skudd er milde og sprø. Gjærede skudd er skarpt sure, med en smaksrik kant og uten søtme.',
   does: 'Gjærede skudd er hverdagens syrningsmiddel i regionen, og de skjærer gjennom fettet i røykt svinekjøtt bedre enn sitrus.',
   when: 'Ferske skudd kokes først i to eller tre vann. Gjærede skudd går i tidlig, sammen med kjøttet.',
   swap: 'Ingenting annet smaker slik. Melkesyregjæret kål (sauerkraut) og laken fra den gir syren, men ikke dybden bak. Norsk surkål er kokt kål med karve og sukker og duger ikke her.',
   sourcing: 'Bambusskudd på boks i vanlige butikker er ferske og milde, ikke gjærede. Gjærede skudd står i asiatiske butikker, ofte merket «sour bamboo shoot» på glass.'
 },
 'IN-NEA|Axone (fermented soya)': {
   aroma: 'Ammoniakk og gammel ost i rå tilstand, og det er gjæringen som arbeider, ikke maten som er bedervet.',
   flavour: 'Dypt smaksrik når den er kokt, nærmere en kjøttkraft enn et krydder, med en lang salt ettersmak.',
   does: 'Gir gryta ryggraden sin, altså den jobben garam masala gjør andre steder, og den trenger ingen hjelp til det.',
   when: 'Tidlig, stekt i litt fett sammen med chili, så råheten gir seg og massen smelter inn i væsken.',
   swap: 'Ingen erstatning er ærlig. Miso eller gjærede svarte bønner gir en smaksrik rett, men det blir en annen rett.',
   sourcing: 'Axone selges ikke i Norge. Nærmest kommer koreansk cheonggukjang eller japansk natto fra asiatiske butikker. Begge er gjæret soya av samme slag, og begge lukter mildere.'
 },
 'IN-NEA|Khar (alkali)': {
   aroma: 'Nesten ingen. En svak eim av treaske, og ikke noe mer enn det.',
   flavour: 'Knapt noen smak. Den gir konsistens i stedet: myk, glatt og så vidt såpeaktig.',
   does: 'Gjør seige belgfrukter og grønnsaker møre og bryter ned fett. Syre i samme gryte opphever den, så de to møtes aldri.',
   when: 'En skje i kokevannet tidlig, så luten får tid til å arbeide på det som ligger i gryta.',
   swap: 'En knivsodd natron gir den samme kjemien, og enhver kokk i Assam vil si at det ikke er det samme.',
   sourcing: 'Khar selges ikke i Norge. Du kan lage den av aske fra tørket bananskall: brenn skallet, hell vann gjennom asken i et kaffefilter og bruk væsken. Ellers er natron løsningen.'
 },
 'IN-NEA|Black sesame': {
   aroma: 'Rå frø lukter nøtteaktig og litt bittert. Tørrstekte frø lukter dypt ristet og nesten røykpreget.',
   flavour: 'Fyldig og oljerik, bitrere enn hvit sesam, med en mineralsk kant som kler en gjæret rett.',
   does: 'Males frøene til pasta, tykner de retten og gir fett, og slik runder Meghalaya av gjæringssmaken i tungrymbai.',
   when: 'Tørrstekes til frøene hopper, og males mens de ennå er varme. Ustekte frø smaker flatt og blir grynete.',
   swap: 'Hvit sesam fungerer og smaker mildere og søtere. Tahini gir fylden, men tar bort fargen.',
   sourcing: 'Svart sesam selges i asiatiske butikker og i helsekostavdelingen, og varene i asiatiske butikker er ferskest. Sesam harskner fort, så kjøp små poser og oppbevar dem kaldt.'
 },
 'IN-NEA|Kharoli': {
   aroma: 'Skarp sennep, som et nyåpnet glass engelsk sennep, med en svak eim av aske bak.',
   flavour: 'Skarp, bitter og salt på én gang. Den stikker i nesen slik wasabi gjør, og gir seg raskt.',
   does: 'Brukes som tilbehør ved siden av risen og ikke som ingrediens, og én liten skje krydrer en hel tallerken.',
   when: 'Rå, på bordet. Varme ødelegger skarpheten og lar bare bitterheten bli igjen.',
   swap: 'Grovkornet sennep spedd med vann ligger nærmest. Den er skarpere, mindre bitter og ikke basisk.',
   sourcing: 'Kharoli selges ikke her. Mal gule sennepsfrø med litt vann og en knivsodd natron, og smak til med salt. Ferdig bordsennep er søtet og gir feil resultat.'
 }
});
