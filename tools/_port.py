"""One-shot port of the Italia in Tavola app shell into this course.

Kept in the repo as the record of what was changed and why (PLAN 9 of the Italian repo listed
three things to fix while porting; this is where they were fixed). It is not part of the build
and never needs running again.

Usage: python tools/_port.py <source italia-course.html> <dest masala-dabba.html>
"""
import io, json, os, re, sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
src_path, dst_path = sys.argv[1], sys.argv[2]
H = io.open(src_path, encoding='utf-8').read()
NL = chr(10)


def sub(old, new, count=1, what=''):
    global H
    n = H.count(old)
    if n < 1:
        sys.exit('NOT FOUND (%s): %s' % (what, old[:90]))
    if count and n != count:
        sys.exit('expected %d of (%s) %s, found %d' % (count, what, old[:60], n))
    H = H.replace(old, new)


def cut(start, end, new, what=''):
    """Replace everything from `start` up to (not including) `end`."""
    global H
    i = H.find(start)
    j = H.find(end)
    if i < 0 or j < 0 or j <= i:
        sys.exit('cut failed (%s): %r .. %r -> %d %d' % (what, start[:40], end[:40], i, j))
    H = H[:i] + new + H[j:]


def blob(name):
    return io.open(os.path.join(ROOT, 'tools', name), encoding='utf-8').read().rstrip() + NL


# ---------------------------------------------------------------- 1. branding
sub('<title>Italia in Tavola</title>', '<title>Masala Dabba</title>', 1, 'title')
sub('<h1>Italia <em>in Tavola</em></h1>', '<h1>Masala <em>Dabba</em></h1>', 1, 'masthead')
sub('<h2 id="introTitle">Italia <em>in Tavola</em></h2>',
    '<h2 id="introTitle">Masala <em>Dabba</em></h2>', 1, 'intro title')
sub('Italia in Tavola', 'Masala Dabba', 0, 'remaining name')

# wine red becomes a chilli red, and the olive a curry-leaf green; the variable is renamed
# because there is no wine in this course and a --wine colour would read as a leftover
sub('--wine:#a63d55; --wine-deep:#7d2b41; --olive:#9aa86a; --gold:#d9b46a;',
    '--spice:#b4472c; --spice-deep:#7f2f1c; --leaf:#7d9a52; --gold:#d9a536;', 1, 'palette')
sub('var(--wine-deep)', 'var(--spice-deep)', 0)
sub('var(--wine)', 'var(--spice)', 0)
sub('var(--olive)', 'var(--leaf)', 0)

# ---------------------------------------------------------------- 2. the wine layer becomes a spice layer
sub('''  ul.wines{ list-style:none; margin:0; padding:0; display:grid; gap:6px; }
  ul.wines li{ display:grid; grid-template-columns:12px 1fr auto auto auto; gap:10px; align-items:center; padding:8px 10px; border-radius:6px; background:rgba(255,255,255,.04); }
  #sheet .vmpstore{ display:flex; align-items:center; gap:8px; margin:0 0 8px; font-size:11.5px; color:var(--paper-faint); }
  #sheet .vmpstore select{ flex:1; min-width:0; background:rgba(255,255,255,.06); color:var(--paper); border:1px solid var(--line); border-radius:6px; padding:5px 8px; font:inherit; font-size:11.5px; min-height:32px; }
  ul.wines li.has-card{ cursor:pointer; }
  ul.wines li .chev{ font-size:11px; color:var(--paper-faint); transition:transform .2s; }
  ul.wines li.open .chev{ transform:rotate(90deg); }
  ul.wines li.card{ display:block; padding:0; background:none; grid-column:1/-1; }
  ul.wines li.card[hidden]{ display:none; }''',
'''  ul.spices{ list-style:none; margin:0; padding:0; display:grid; gap:6px; }
  ul.spices li{ display:grid; grid-template-columns:12px 1fr auto auto; gap:10px; align-items:center; padding:8px 10px; border-radius:6px; background:rgba(255,255,255,.04); }
  ul.spices li.has-card{ cursor:pointer; }
  ul.spices li .chev{ font-size:11px; color:var(--paper-faint); transition:transform .2s; }
  ul.spices li.open .chev{ transform:rotate(90deg); }
  ul.spices li.card{ display:block; padding:0; background:none; grid-column:1/-1; }
  ul.spices li.card[hidden]{ display:none; }''', 1, 'spice list css')

sub('''  ul.wines li a.vmp{ font-size:10.5px; letter-spacing:.06em; color:var(--paper-faint); text-decoration:none; border:1px solid var(--line); border-radius:12px; padding:3px 8px; white-space:nowrap; min-height:24px; display:inline-flex; align-items:center; }
  ul.wines li a.vmp:hover{ color:var(--paper); border-color:var(--gold); }
  ul.wines li i{ width:12px; height:12px; border-radius:50%; }
  ul.wines li i.red{ background:#7d2b41; box-shadow:inset 0 0 0 2px #a63d55; }
  ul.wines li i.white{ background:#e9dc9a; box-shadow:inset 0 0 0 2px #cdbb6b; }
  ul.wines li i.rose{ background:#e8a1a8; }
  ul.wines li i.sparkling{ background:#f1e7b8; box-shadow:0 0 0 2px rgba(241,231,184,.35); }
  ul.wines li i.sweet{ background:#c88a3c; }
  ul.wines li span{ font-size:13px; }
  ul.wines li small{ font-size:10.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--paper-faint); }''',
'''  ul.spices li i{ width:12px; height:12px; border-radius:50%; }
  ul.spices li i.whole{ background:#8a5a2b; box-shadow:inset 0 0 0 2px #b8863f; }
  ul.spices li i.ground{ background:#b4472c; box-shadow:inset 0 0 0 2px #d4633f; }
  ul.spices li i.blend{ background:#d9a536; box-shadow:inset 0 0 0 2px #f0c869; }
  ul.spices li i.fresh{ background:#5d8a3e; box-shadow:inset 0 0 0 2px #86b25e; }
  ul.spices li i.souring{ background:#6d4152; box-shadow:inset 0 0 0 2px #96687c; }
  ul.spices li span{ font-size:13px; }
  ul.spices li small{ font-size:10.5px; letter-spacing:.1em; text-transform:uppercase; color:var(--paper-faint); }
  .tcard .src{ margin:8px 0 0; padding-top:8px; border-top:1px solid var(--line); font-size:12px; line-height:1.5; color:var(--paper-dim); }
  .tcard .src b{ display:block; font-size:10px; letter-spacing:.13em; text-transform:uppercase; color:var(--leaf); margin-bottom:2px; }
  .dishes .veg, .rveg{ display:inline-grid; place-items:center; width:11px; height:11px; border:1.5px solid #5d8a3e; border-radius:2px; margin-left:6px; vertical-align:-1px; }
  .dishes .veg::before, .rveg::before{ content:""; width:5px; height:5px; border-radius:50%; background:#5d8a3e; }''',
    1, 'spice dot css')

# the sheet's own section
sub('''      <section><h3 data-t="wines">Wines to know</h3><div class="vmpstore"><label for="vmpStore" data-t="vmpStoreLabel">Show selection at</label><select id="vmpStore"></select></div><ul class="wines"></ul><div class="pair"><b data-t="pairing">Classic pairing</b><span></span></div></section>''',
    '''      <section><h3 data-t="spices">Spices to know</h3><ul class="spices"></ul><div class="pair"><b data-t="plate">The everyday plate</b><span></span></div></section>''',
    1, 'sheet spice section')

# ---------------------------------------------------------------- 3. the intro
sub('''      <figure><img alt="" data-src="assets/lazio/colosseum.jpg"><b data-t="introT1">Readings</b></figure>
      <figure><img alt="" data-src="assets/piemonte/nebbiolo.jpg"><b data-t="introT2">Wines</b></figure>
      <figure><img alt="" data-src="assets/campania/pizza.jpg"><b data-t="introT3">Recipes</b></figure>''',
    '''      <figure><img alt="" data-src="assets/kerala/pepper-vines.jpg"><b data-t="introT1">Readings</b></figure>
      <figure><img alt="" data-src="assets/kerala/spice-market.jpg"><b data-t="introT2">Spices</b></figure>
      <figure><img alt="" data-src="assets/kerala/appam-stew.jpg"><b data-t="introT3">Recipes</b></figure>''',
    1, 'intro tiles')
sub('<div><u data-n="wines"></u><span data-t="introN4">wines</span></div>',
    '<div><u data-n="spices"></u><span data-t="introN4">spices</span></div>', 1, 'intro nums')
sub('''    wines: ORDER.reduce((a,c) => a + ((COURSE[c].wines || []).length), 0),''',
    '''    spices: ORDER.reduce((a,c) => a + ((COURSE[c].spices || []).length), 0),''', 1, 'intro count')
# a tile whose photo has not been shot yet should leave a gap, not a broken-image icon
sub('''  intro.querySelectorAll('.tiles img').forEach(im => { if(!im.src) im.src = img(im.dataset.src); });''',
    '''  intro.querySelectorAll('.tiles img').forEach(im => { if(im.src) return;
    im.onerror = () => { const f = im.closest('figure'); if(f) f.hidden = true; };
    im.src = img(im.dataset.src); });''', 1, 'intro tile fallback')

# ---------------------------------------------------------------- 4. strings
I18N_EN = """ en:{ about:'About this course', introEyebrow:'A course in fourteen regions', introLede:'India does not have one cuisine. It has a pantry that changes every few hundred kilometres, and a reason for every change. Start anywhere on the map: read, cook, and learn what is actually in the box.', introT1:'Readings', introT2:'Spices', introT3:'Recipes', introN1:'regions', introN2:'readings', introN3:'recipes', introN4:'spices', introGo:'Open the map', introHint:'Tap any region to begin.', recipes:'Recipes', backMap:'Map', recipesSub:n => `${n} dishes from the course, in grams and millilitres`, recipeSearch:'Search the recipes', servings:'Servings', ingredients:'Ingredients', method:'Method', prep:'Prep', cooking:'Cooking', cookIt:'Cook it', cookItSub:'Recipes from this reading', fromReading:'Where it comes from', goodWith:'Serve with', whyWorks:'Why it works', variations:'Variations', noRecipes:'No recipe matches that.', allCourses:'All', toTaste:'to taste', servesNote:n => `Written for ${n}`, 'course.snack':'Snack', 'course.main':'Main', 'course.side':'Side', 'course.bread':'Bread', 'course.rice':'Rice', 'course.sweet':'Sweet', 'course.base':'Basics', vegetarian:'Vegetarian', sub:'A course in fourteen regions \\u00b7 spice & food', hint:'Tap a region or a pin \\u00b7 drag to pan \\u00b7 pinch to zoom \\u00b7 \\u25ed tilts', loading:'Preparing the map of India\\u2026', lessons:'Readings', landmark:'Landmark', spices:'Spices to know', table:'On the plate', plate:'The everyday plate', prev:'\\u2190 Previous', next:'Next region \\u2192', capital:'City', module:'Module', of:'of', readings:'readings', min:'min', soonShort:'readings coming soon', minRead:'min read', soon:'Reading coming soon', reading:'Reading', notWritten:'This reading is not written yet.',
   soonPara:n=>`The finished modules show the format the whole course uses: a 6\\u20138 minute illustrated essay with key facts and a short recap, then three questions and the recipes that belong to it. ${n}'s readings will follow the same pattern.`,
   backTo:'Back to', seeFinished:'See a finished module', firstReading:'the first reading', nextReading:'Next reading', nextRegion:'Next region', mark:'Mark as read', marked:'\\u2713 Marked as read', credits:'Photo credits', photo:'Photo', via:'via Wikimedia Commons', close:'Close', home:'Show all of India', listen:'Listen', listenBrowser:'Listen with the browser voice', narrated:'Narrated by an AI voice', browserVoice:'Browser voice', noVoice:'No voice available on this device',
   audiobook:'Audiobook', bookTitle:'The whole course, read aloud', bookOf:'of', bookChapters:'chapters',
   bookResume:'Resume', bookStart:'Start listening', bookChapterList:'Chapters', bookNowPlaying:'Now playing',
   bookLeft:'left', bookDone:'listened', bookRestart:'Start from the beginning', bookAuto:'Plays straight through',
   'area.North':'North','area.West':'West','area.Centre':'Centre','area.East':'East','area.South':'South','spice.whole':'whole','spice.ground':'ground','spice.blend':'blend','spice.fresh':'fresh','spice.souring':'souring', tCard:['Aroma','Flavour','What it does','When to add','Instead of it'], sourcing:'Buying it in Norway', quiz:'Check yourself', quizSub:n=>`${n} questions on this reading. Answers explain themselves.`, quizScore:(a,b)=>`${a} of ${b} right`, quizAgain:'Try again', quizAll:'All three right. Move on.' },"""

I18N_NO = """ no:{ about:'Om kurset', introEyebrow:'Et kurs i fjorten regioner', introLede:'India har ikke \\u00e9tt kj\\u00f8kken. Kryddersk\\u00e5pet skifter for hver par hundre kilometer, og hvert skifte har en grunn. Begynn hvor du vil p\\u00e5 kartet: les, lag mat, og finn ut hva som faktisk ligger i boksen.', introT1:'Lesetekster', introT2:'Krydder', introT3:'Oppskrifter', introN1:'regioner', introN2:'lesetekster', introN3:'oppskrifter', introN4:'krydder', introGo:'\\u00c5pne kartet', introHint:'Trykk p\\u00e5 en region for \\u00e5 begynne.', recipes:'Oppskrifter', backMap:'Kartet', recipesSub:n => `${n} retter fra kurset, i gram og milliliter`, recipeSearch:'S\\u00f8k i oppskriftene', servings:'Porsjoner', ingredients:'Ingredienser', method:'Slik gj\\u00f8r du', prep:'Forberedelse', cooking:'Koketid', cookIt:'Lag den selv', cookItSub:'Oppskrifter fra denne leseteksten', fromReading:'Hvor den kommer fra', goodWith:'Serveres med', whyWorks:'Hvorfor det virker', variations:'Varianter', noRecipes:'Ingen oppskrift passer med det.', allCourses:'Alle', toTaste:'etter smak', servesNote:n => `Skrevet for ${n}`, 'course.snack':'Smårett', 'course.main':'Hovedrett', 'course.side':'Tilbeh\\u00f8r', 'course.bread':'Br\\u00f8d', 'course.rice':'Ris', 'course.sweet':'S\\u00f8tt', 'course.base':'Grunnoppskrift', vegetarian:'Vegetarisk', sub:'Et kurs i fjorten regioner \\u00b7 krydder og mat', hint:'Trykk p\\u00e5 en region eller en n\\u00e5l \\u00b7 dra for \\u00e5 flytte \\u00b7 knip for \\u00e5 zoome \\u00b7 \\u25ed vipper', loading:'Forbereder kartet over India \\u2026', lessons:'Lesetekster', landmark:'Landemerke', spices:'Krydder \\u00e5 kjenne til', table:'P\\u00e5 tallerkenen', plate:'Hverdagstallerkenen', prev:'\\u2190 Forrige', next:'Neste region \\u2192', capital:'By', module:'Modul', of:'av', readings:'lesetekster', min:'min', soonShort:'lesetekster kommer', minRead:'min lesetid', soon:'Lesetekst kommer', reading:'Lesetekst', notWritten:'Denne leseteksten er ikke skrevet enn\\u00e5.',
   soonPara:n=>`De ferdige modulene viser formatet hele kurset bruker: et illustrert essay p\\u00e5 6\\u20138 minutter med n\\u00f8kkelfakta og en kort oppsummering, deretter tre sp\\u00f8rsm\\u00e5l og oppskriftene som h\\u00f8rer til. Lesetekstene for ${n} f\\u00f8lger samme m\\u00f8nster.`,
   backTo:'Tilbake til', seeFinished:'Se en ferdig modul', firstReading:'den f\\u00f8rste leseteksten', nextReading:'Neste lesetekst', nextRegion:'Neste region', mark:'Merk som lest', marked:'\\u2713 Merket som lest', credits:'Fotokreditering', photo:'Foto', via:'via Wikimedia Commons', close:'Lukk', home:'Vis hele India', listen:'Lytt', listenBrowser:'Lytt med nettleserstemme', narrated:'Lest inn av en KI-stemme', browserVoice:'Nettleserstemme', noVoice:'Ingen stemme tilgjengelig p\\u00e5 denne enheten',
   audiobook:'Lydbok', bookTitle:'Hele kurset, lest opp', bookOf:'av', bookChapters:'kapitler',
   bookResume:'Fortsett', bookStart:'Begynn \\u00e5 lytte', bookChapterList:'Kapitler', bookNowPlaying:'Spilles n\\u00e5',
   bookLeft:'igjen', bookDone:'lyttet', bookRestart:'Start fra begynnelsen', bookAuto:'Spiller sammenhengende',
   'area.North':'Nord','area.West':'Vest','area.Centre':'Sentralt','area.East':'\\u00d8st','area.South':'S\\u00f8r','spice.whole':'hel','spice.ground':'malt','spice.blend':'blanding','spice.fresh':'fersk','spice.souring':'syrlig', tCard:['Duft','Smak','Hva den gj\\u00f8r','N\\u00e5r den skal i','I stedet for den'], sourcing:'\\u00c5 f\\u00e5 tak i den i Norge', quiz:'Sjekk deg selv', quizSub:n=>`${n} sp\\u00f8rsm\\u00e5l til denne leseteksten. Svarene forklarer seg selv.`, quizScore:(a,b)=>`${a} av ${b} riktig`, quizAgain:'Pr\\u00f8v igjen', quizAll:'Alle tre riktig. G\\u00e5 videre.' }"""

cut(' en:{ about:', '};\nlet lang =', I18N_EN + NL + I18N_NO + NL, 'i18n')

# ---------------------------------------------------------------- 5. course data, spice cards, order
new_course = blob('_port_course.js') + NL + '''
// The spice list on a region sheet. Tapping a spice opens its card, which is the structural
// twin of the Italian course's tasting card: aroma / flavour / what it does / when to add /
// what to use instead, and then the sourcing note, which is the part of this course that a
// Norwegian reader cannot get anywhere else.
function renderSpices(C, code){
  const ul = document.querySelector('#sheet ul.spices');
  const cards = (lang === 'no' ? window.SPICE_NO : window.SPICE) || {};
  ul.innerHTML = C.spices.map(([n,t], si) => {
    const card = cards[code + '|' + n];
    return `<li class="${card ? 'has-card' : ''}" data-s="${si}"><i class="${t}"></i><span>${esc(n)}</span><small>${T('spice.'+t)}</small>`
      + (card ? '<span class="chev">\\u203a</span>' : '')
      + '</li>'
      + (card ? `<li class="card" data-for="${si}" hidden><div class="tcard"><dl>`
          + T('tCard').map((lbl, k) => `<dt>${lbl}</dt><dd>${esc([card.aroma,card.flavour,card.does,card.when,card.swap][k] || '')}</dd>`).join('')
          + '</dl>' + (card.sourcing ? `<p class="src"><b>${T('sourcing')}</b>${esc(card.sourcing)}</p>` : '') + '</div></li>' : '');
  }).join('');
  ul.querySelectorAll('li.has-card').forEach(li => li.addEventListener('click', () => {
    const panel = ul.querySelector(`li.card[data-for="${li.dataset.s}"]`);
    if(!panel) return;
    const open = panel.hidden;
    panel.hidden = !open;
    li.classList.toggle('open', open);
  }));
}
'''
new_order = '''const ORDER = %s;
const AREAS = %s;
const ASSET_DIRS = %s;
''' % (json.dumps([r['code'] for r in json.load(open(os.path.join(ROOT, 'course.json'), encoding='utf-8'))['regions']]),
       json.dumps(json.load(open(os.path.join(ROOT, 'course.json'), encoding='utf-8'))['areas']),
       json.dumps({r['code']: r['stem'] for r in json.load(open(os.path.join(ROOT, 'course.json'), encoding='utf-8'))['regions']}))

cut('// ============================================================ COURSE SUMMARIES',
    '// ============================================================ PROJECTION',
    new_course + new_order + NL, 'course block')

# ---------------------------------------------------------------- 6. projection and map constants
meta = json.load(open(os.path.join(ROOT, 'assets', 'terrain', 'meta.json'), encoding='utf-8'))
sub(re.search(r'const TM = \{.*?\};', H).group(0), 'const TM = ' + json.dumps(meta) + ';', 1, 'TM')
sub("const METRES_PER_UNIT = 40075016.686 * Math.cos(42*Math.PI/180) / MERC_N * S;",
    "const METRES_PER_UNIT = 40075016.686 * Math.cos(TM.centreLat*Math.PI/180) / MERC_N * S;", 1, 'mpu')
sub("const EXAG = 4.0;                                      // vertical exaggeration, as on printed relief maps",
    """// India is eleven times Italy's area, so a unit of the map is 32 km rather than 11 and the
// same exaggeration would flatten the Himalaya into a ripple. 6.5 puts Everest about 1.8 units
// above the Gangetic plain, which is roughly the presence Mont Blanc has on the Italian map.
const EXAG = 6.5;""", 1, 'exag')
sub("const X = lon => merc(lon, 42)[0]/S - UNITS_W/2;",
    "const X = lon => merc(lon, TM.centreLat)[0]/S - UNITS_W/2;", 1, 'X')
sub("const Z = lat => merc(12, lat)[1]/S - UNITS_H/2;",
    "const Z = lat => merc(TM.bounds.west, lat)[1]/S - UNITS_H/2;", 1, 'Z')

LABEL_POS = {
    'IN-HIM': [76.4, 33.4], 'IN-PUN': [75.7, 30.4], 'IN-RAJ': [73.6, 26.6], 'IN-AWA': [80.6, 27.0],
    'IN-GUJ': [71.6, 22.6], 'IN-MAH': [75.6, 19.2], 'IN-KON': [74.05, 15.35], 'IN-CEN': [79.4, 22.6],
    'IN-BEN': [86.4, 23.6], 'IN-NEA': [93.4, 25.6], 'IN-KAR': [76.0, 14.6], 'IN-AND': [79.2, 16.9],
    'IN-TAM': [78.4, 11.0], 'IN-KER': [76.4, 9.9]}
sub(re.search(r'const LABEL_POS = \{.*?\};', H).group(0),
    'const LABEL_POS = ' + json.dumps(LABEL_POS) + ';', 1, 'LABEL_POS')
sub('const FAMILY = {North:0x9fbf86, Centre:0xdcc07a, South:0xdd9668, Islands:0xe4cc86};',
    'const FAMILY = {North:0xd8b45e, West:0xd98f5c, Centre:0xc0a878, East:0x8fb173, South:0xd9a24a};',
    1, 'FAMILY')

# ---------------------------------------------------------------- 7. region polygons
regions = io.open(os.path.join(ROOT, 'docs', 'regions.min.json'), encoding='utf-8').read()
sub(re.search(r'const REGIONS = \[\{"name".*?\];', H, re.S).group(0),
    'const REGIONS = ' + regions + ';', 1, 'REGIONS')

# ---------------------------------------------------------------- 8. landmarks
cut('// ============================================================ LANDMARK BUILDERS',
    '// ============================================================ LANDMARKS:', blob('_port_builders.js') + NL, 'builders')

CAPITAL_POS = {
    'IN-HIM': [74.797, 34.083], 'IN-PUN': [74.873, 31.634], 'IN-RAJ': [75.788, 26.912],
    'IN-AWA': [80.946, 26.847], 'IN-GUJ': [72.571, 23.023], 'IN-MAH': [72.878, 19.076],
    'IN-KON': [73.828, 15.499], 'IN-CEN': [77.413, 23.260], 'IN-BEN': [88.363, 22.573],
    'IN-NEA': [91.746, 26.144], 'IN-KAR': [77.595, 12.972], 'IN-AND': [78.474, 17.385],
    'IN-TAM': [80.270, 13.083], 'IN-KER': [76.267, 9.932]}
sub(re.search(r'const CAPITAL_POS = \{.*?\};', H, re.S).group(0),
    'const CAPITAL_POS = ' + json.dumps(CAPITAL_POS) + ';', 1, 'CAPITAL_POS')
sub("      g.scale.setScalar(b === 'rome' ? 0.75 : 0.85); g.position.set(x, y - 0.02, z); g.rotation.y = 0.2;",
    "      g.scale.setScalar(LANDMARK_SCALE[b] || 1.0); g.position.set(x, y - 0.02, z); g.rotation.y = 0.2;",
    1, 'landmark scale')
sub('const landmarkGroups = [], pins = [], labelEls = {}, capEls = {};',
    '''const landmarkGroups = [], pins = [], labelEls = {}, capEls = {};
// A model is sized so it reads at the distance the camera stops at, not to scale: the nets are
// twelve metres tall and the Charminar fifty-six, and drawn to scale one of them would vanish.
const LANDMARK_SCALE = {dal:0.9, harmandir:0.85, mehrangarh:0.8, imambara:0.85, stepwell:0.9,
  gateway:0.95, bomjesus:0.85, sanchi:0.85, howrah:0.8, rootbridge:0.85, mysore:0.85,
  charminar:0.8, thanjavur:0.8, cheenavala:0.75};''', 1, 'landmark scale table')

# ---------------------------------------------------------------- 9. sheet rendering
sub("  renderWines(C, code);", "  renderSpices(C, code);", 1, 'sheet call')
sub("sheet.querySelector('.pair span').textContent = C.pairing;",
    "sheet.querySelector('.pair span').textContent = C.plate;", 1, 'everyday plate')
sub("""  sheet.querySelector('.dishes').innerHTML = C.dishes.map(d => { const rc = recipeForDish(code, d);
    return rc ? `<a href="#/recipes/${rc.id}">${d}</a>` : `<span>${d}</span>`; }).join('');""",
    """  sheet.querySelector('.dishes').innerHTML = C.dishes.map(([d, veg]) => { const rc = recipeForDish(code, d);
    const mark = veg ? `<i class="veg" title="${T('vegetarian')}" aria-label="${T('vegetarian')}"></i>` : '';
    return rc ? `<a href="#/recipes/${rc.id}">${esc(d)}${mark}</a>` : `<span>${esc(d)}${mark}</span>`; }).join('');""",
    1, 'dishes')
sub("(C.capital + ' · ' + C.wines[0][0])", "(C.capital + ' · ' + C.spices[0][0])", 1, 'hover tip')

# ---------------------------------------------------------------- 10. recipes
sub("""  const wines = (r.wines || []).map(w => {
    const wl = (C.wines || []).find(x => x[0] === w);
    return C.vmp && wl ? `<a href="${vmpUrl(C.vmp, wl[2])}" target="_blank" rel="noopener">${esc(w)}</a>` : esc(w);
  }).join(', ');""",
    """  // no commerce links in this course: what a dish is served with is a sentence, not a shop
  const serveWith = (r.goesWith || []).map(w => esc(tr(w))).join(', ');""", 1, 'recipe wines')
sub("    + (wines ? `<div class=\"rwine\"><b>${T('goodWith')}</b>${wines}</div>` : '')",
    "    + (serveWith ? `<div class=\"rwine\"><b>${T('goodWith')}</b>${serveWith}</div>` : '')", 1, 'recipe serve')
sub("""    + `<h1>${esc(tr(r.title))}</h1><p class="summary">${esc(tr(r.blurb))}</p></header>`""",
    """    + `<h1>${esc(tr(r.title))}${r.veg ? `<i class="rveg" title="${T('vegetarian')}" aria-label="${T('vegetarian')}"></i>` : ''}</h1>`
    + `<p class="summary">${esc(tr(r.blurb))}</p></header>`""", 1, 'recipe veg badge')
sub("""          + `<span class="tx"><b>${esc(tr(r.title))}</b><span>${esc(tr(r.blurb))}</span>`""",
    """          + `<span class="tx"><b>${esc(tr(r.title))}${r.veg ? '<i class="rveg"></i>' : ''}</b><span>${esc(tr(r.blurb))}</span>`""",
    1, 'recipe card veg badge')
sub("function recipeForDish(code, dish){ return recipesOf(code).find(r => r.dish === dish) || null; }",
    "function recipeForDish(code, dish){ return recipesOf(code).find(r => r.dish === dish) || null; }\n"
    "// The first region that actually has readings, for the 'see a finished module' link on an\n"
    "// unwritten one. Derived, so it follows the course as it is written rather than naming Lazio.\n"
    "function firstWritten(){ return ORDER.find(c => (window.READINGS || {})[c]) || null; }",
    1, 'firstWritten')
sub("""<a href="#/IT-62/1"><small>${T('seeFinished')}</small><b>${T('lazioR1')}</b></a>""",
    """${(() => { const f = firstWritten(); return f ? `<a href="#/${f}/1"><small>${T('seeFinished')}</small><b>${esc(COURSE[f].name)}, ${T('firstReading')}</b></a>` : ''; })()}""",
    1, 'see finished')

# (the Vinmonopolet block, VMP_STORES, vmpUrl and renderWines all sat between the COURSE and
# PROJECTION markers, so step 5 removed them along with the Italian course data.)

# ---------------------------------------------------------------- 12. storage keys
sub("'iit-", "'" + json.loads(io.open(os.path.join(ROOT, 'course.json'), encoding='utf-8').read())['storagePrefix'] + "-", 0, 'storage keys')

# ---------------------------------------------------------------- 13. the script tags come from a manifest now
# The Italian page already carried a <!--__CONTENT__--> marker ahead of its hand-written tags;
# here that marker becomes load-bearing. tools/wire.py regenerates everything after it from
# course.json, so adding a region no longer means editing HTML in three places.
cut('<script src="content/lazio.js"></script>', '<script>\n(function(){', NL, 'content script tags')

# ---------------------------------------------------------------- 14. the router's region pattern
# It matched /[A-Z]{2}-\d{2}/, which is an ISO 3166-2 Italian region code. This course's codes
# are mnemonic (IN-KER, IN-HIM) because fourteen invented groupings have no ISO numbers.
sub(r"const m = /^#\/?([A-Z]{2}-\d{2})?(?:\/(\d+))?/.exec(h);",
    r"const m = /^#\/?([A-Z]{2}-[A-Z0-9]{2,4})?(?:\/(\d+))?/.exec(h);", 1, 'route pattern')

# ---------------------------------------------------------------- 15. the last two names
sub("const LS = 'italia-in-tavola-progress';", "const LS = 'masala-dabba-progress';", 1, 'progress key')
sub("window.RECIPES['IT-xx']", "window.RECIPES['IN-xxx']", 1, 'recipe comment')

io.open(dst_path, 'w', encoding='utf-8').write(H)
print('wrote', dst_path, len(H), 'bytes')
for bad in ('vmp', 'wines', 'Vinmonopolet', 'IT-', 'Italia', 'italia', 'lazio', 'toscana'):
    n = len(re.findall(re.escape(bad), H))
    if n:
        print('  still mentions %-14s %d time(s)' % (bad, n))
