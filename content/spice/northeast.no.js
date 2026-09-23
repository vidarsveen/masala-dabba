/* Masala Dabba — kryddersider, norsk. Kontrakt: docs/spice-format.md, sjekkes av tools/spicecheck.py.
   Den norske utgaven må ha et sourcing-felt: hvor man får tak i varen i Norge, og hva som er verdt
   å kjøpe. Her er det feltet ekstra viktig, for fire av de seks selges ikke i Norge i det hele tatt. */
window.SPICE_NO = window.SPICE_NO || {};
Object.assign(window.SPICE_NO, {
 'IN-NEA|Bhut jolokia': {
   aroma: 'Fruktig og svakt blomsterpreget under styrken, omtrent som en overmoden aprikos.',
   flavour: 'Styrken kommer sent og blir sittende i flere minutter. Med omkring én million Scoville-enheter er en tynn flis en porsjon.',
   does: 'Gir sterk varme i relish, ved bordet eller direkte i en kokt rett, alt etter oppskriften.',
   when: 'Bruk en målt flis, ta på hansker og unngå øynene. Tilsett gradvis fordi styrken varierer mellom fruktene.',
   swap: 'Habanero eller scotch bonnet gir beslektet fruktig varme med lavere styrke; bruk en mengde retten tåler.',
   sourcing: 'Se etter hel eller tørket bhut jolokia i velassorterte asiatiske butikker. Les styrkemerkingen, kjøp lite og oppbevar pakken utilgjengelig for barn.'
 },
 'IN-NEA|Bamboo shoot': {
   aroma: 'Ferske skudd lukter grønt og svakt av høy. Gjærede skudd lukter surt og litt ostaktig, og lukten bærer.',
   flavour: 'Ferske skudd er milde og sprø. Gjærede skudd er skarpt sure, med en smaksrik kant og uten søtme.',
   does: 'Gjærede skudd gir syre og fyldig aroma til blant annet kjøtt, fisk og relish.',
   when: 'Ferske skudd må behandles grundig for å redusere cyanogene stoffer. Bruk ferdige produkter etter etiketten.',
   swap: 'Melkesyregjæret kål og litt lake kan gi syre, men aroma og konsistens blir annerledes.',
   sourcing: 'Se etter bambusskudd merket «fermented» eller «sour» i asiatiske butikker. Vanlige hermetiske skudd er milde og ikke samme råvare; følg alltid etiketten.'
 },
 'IN-NEA|Axone (fermented soya)': {
   aroma: 'En kraftig gjæringsduft som kan minne om moden ost; den nøyaktige duften avhenger av produktet.',
   flavour: 'Dypt smaksrik når den er kokt, nærmere en kjøttkraft enn et krydder, med en lang salt ettersmak.',
   does: 'Gir dyp umamismak til kjøtt, grønnsaker, relish og gryter.',
   when: 'Følg oppskriften og produktets lagringsråd; fuktige og tørkede former kan kreve ulik behandling.',
   swap: 'Miso eller gjærede svarte bønner kan gi umami, men resultatet blir tydelig annerledes.',
   sourcing: 'Axone kan være vanskelig å finne. Se i asiatiske butikker eller bruk et mer tilgjengelig gjæret soyaprodukt som en tydelig merket tilpasning.'
 },
 'IN-NEA|Khar (alkali)': {
   aroma: 'Mild, med toner som avhenger av plantemateriale og framstilling.',
   flavour: 'Sterkt basisk; hovedeffekten er glatt konsistens framfor krydderduft.',
   does: 'Hever pH og gjør plantevev mørt. Syre reduserer basiskheten og endrer resultatet.',
   when: 'Bruk et testet matprodukt sparsomt. Tradisjonelle uttrekk varierer mye i styrke.',
   swap: 'En målt knivsodd natron gjenskaper en del av pH-effekten, men ikke smaken av kolakhar.',
   sourcing: 'Ikke lag et ukjent sterkt askeuttrekk hjemme. Bruk kolakhar som er solgt som matvare, eller oppskriftens målte mengde natron.'
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
   does: 'Gir sennepsstyrke og toner fra basisk gjæring som relish til ris eller annen mat.',
   when: 'Serveres vanligvis ukokt som tilbehør; oppskrift og bruk varierer.',
   swap: 'Grovkornet sennep spedd med vann ligger nærmest. Den er skarpere, mindre bitter og ikke basisk.',
   sourcing: 'Kharoli kan være vanskelig å finne. Velg et produkt som er solgt som matvare; grov sennep er en enkel, tydelig merket tilpasning uten samme gjæring.'
 }
});
