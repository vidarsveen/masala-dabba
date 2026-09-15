"""Lint the prose of readings against the rules in docs/prose-plan.md section 4.

It reports; it does not decide. Every hit is something a human should look at, and some hits
are fine (an Italian name, a quotation). What it looks for, per reading and per language:

  - sentences over 35 words (the ceiling for narration), and the mean
  - three consecutive sentences of nearly the same length (uniform rhythm)
  - the machine-prose tells collected on 2026-09-14: "not X but Y" and "isn't just", "serves
    as", significance inflation (testament, pivotal, vibrant, renowned, nestled, rich heritage),
    a tacked-on "-ing" clause after a comma, vague attribution ("experts say"), the
    announcing tics ("worth noting", "deserves a note", "that tells you", "two things follow",
    "here is the part"), reputation openers, "this reading is about", "properly understood"
  - mannered figurative agents, which the owner does not want: an inanimate thing doing a
    punchy human act ("the calendar did the work", "changed the arithmetic", "was never the
    villain", "earns its keep"); add to MANNERED as they are found
  - a paragraph that opens with a bolded name (a catalogue entry rather than prose)
  - a closing section whose heading announces a summary

Usage:
  python tools/prose_lint.py emiliaromagna            # both languages
  python tools/prose_lint.py emiliaromagna --lang no
  python tools/prose_lint.py all                      # every region, hits only
Exit code is 0 either way; read the output.
"""
import glob, html as htmlmod, os, re, sys

sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from narrate import lessons_from, ROOT

CEILING = 35

TELLS = {
    'en': [
        (r"\bnot (just|only|merely|simply) [^.]{0,60}\bbut\b", 'not X but Y'),
        (r"\b(isn't|is not|aren't) just\b", "isn't just… it's"),
        (r"\bserves? as\b", 'serves as (say "is")'),
        (r"\b(testament|pivotal|vibrant|renowned|nestled|rich heritage|tapestry|symphony|underscores?|showcas)\w*", 'brochure word'),
        (r", (reflecting|highlighting|ensuring|fostering|underscoring|showcasing|cementing) ", 'tacked-on -ing clause'),
        (r"\b(experts|observers|critics) (say|argue|agree|note)\b", 'vague attribution'),
        (r"\bworth (noting|knowing|copying|naming|remembering|a note|being)\b", 'announces interest'),
        (r"\bdeserves? (a note|attention|mention)\b", 'announces interest'),
        (r"\b(that|which) tells you\b", 'announces interest'),
        (r"\b(two|three|four) things (follow|are worth|matter)\b", 'announces interest'),
        (r"\bhere is the part\b", 'announces interest'),
        (r"\bthe point is\b", 'announces interest'),
        (r"\bproperly understood\b", 'tic'),
        (r"\breputation (problem|for)\b", 'reputation opener'),
        (r"\bthis (reading|chapter|module) (is about|covers|explains)\b", 'meta sentence'),
        # An audiobook listener hears a page number. Say "the last chapter of this region" or say what it is about.
        (r"\b(reading|readings|module) (one|two|three|four|\d)\b|\b(the )?(next|previous|last|first|fourth|third|second) reading\b|\bthis (reading|module)\b", 'page reference (audiobook)'),
        (r"\bin (conclusion|short|summary)\b(?!-)", 'summarising closer'),
        (r"\bone of the (few|most|great)\b", 'superlative filler'),
        (r"\b(designed|built|made) for its (food|table)\b", 'unprovable claim'),
        (r"\bcuts? through\b", 'cuts through (ration it)'),
    ],
    'no': [
        (r"\bikke bare [^.]{0,60}\bmen (også|og)\b", 'ikke bare … men også'),
        (r"\b[Dd]et som [^,]{2,60}, er\b", 'cleft (Det som …, er)'),
        (r"\bverdt å (merke seg|vite|kjenne|huske)\b", 'announces interest'),
        (r"\bfortjener (en kommentar|oppmerksomhet)\b", 'announces interest'),
        (r"\b(det|som) forteller deg\b", 'announces interest'),
        (r"\b(to|tre|fire) ting (følger|betyr)\b", 'announces interest'),
        (r"\b[Dd]enne (leseteksten|teksten|modulen) (handler om|forklarer)\b", 'meta sentence'),
        (r"\blesetekst (en|to|tre|fire|\d)\b|\b(neste|forrige|siste|første) lesetekst(en)?\b|\b[Dd]enne (leseteksten|modulen)\b", 'page reference (audiobook)'),
        (r"\briktig forstått\b", 'tic'),
        (r"\b(pluss|UNESCO-listet|nådd via)\b", 'CLAUDE.md 4b.11'),
        (r"\bhvis (mosaikker|vinmarker|navn|historie)\b", '«hvis» as relative pronoun'),
        (r"\bkort (sagt|oppsummert)\b", 'summarising closer'),
        (r"\ben av (de få|de mest|de største)\b", 'superlative filler'),
    ],
}

# Inanimate agents doing punchy human things. The owner: "I don't fancy that type of style,
# or at least you are overdoing it." Literal phrase over figurative whenever one exists.
MANNERED = {
    'en': [r"\bdid the work\b", r"\bthe arithmetic\b", r"\bthe villain\b", r"\bearns? its keep\b",
           r"\btells (its|the) (own )?story\b", r"\bspeaks volumes\b", r"\ba dial worth\b",
           r"\bdoes the (heavy lifting|talking)\b", r"\bchanged the (game|equation|maths)\b",
           r"\b(the|a) (calendar|weather|tank|soil|sea|mountain|season) (did|does|made|makes) the\b"],
    'no': [r"\bgjorde jobben\b", r"\bregnestykket\b", r"\bskurken\b", r"\bgjør jobben\b",
           r"\bforteller (sin egen|hele) historie", r"\bsnakker for seg\b",
           r"\b(kalenderen|været|tanken|jorda|havet|fjellet) (gjorde|gjør|laget|lager) \b"],
}

SUMMARY_HEADINGS = [r"why any of this", r"in short", r"what to remember", r"^summary", r"hvorfor noe av dette", r"kort sagt"]


def prose_of(html):
    body = re.sub(r'<aside.*?</aside>|<div class="recap">.*?</div>|<figure.*?</figure>', '', html, flags=re.S)
    paras = re.findall(r'<p[^>]*>(.*?)</p>', body, flags=re.S)
    headings = re.findall(r'<h2>(.*?)</h2>', body, flags=re.S)
    text = ' '.join(htmlmod.unescape(re.sub(r'<[^>]+>', '', p)) for p in paras)
    text = re.sub(r'\s+', ' ', text).strip()
    return paras, headings, text


def sentences(text):
    return [s.strip() for s in re.split(r'(?<=[.!?])\s+(?=[A-ZÆØÅ«"0-9])', text) if s.strip()]


def lint_lesson(L, lang):
    hits = []
    paras, headings, text = prose_of(L['html'])
    ss = sentences(text)
    lens = [len(s.split()) for s in ss]
    for s, n in zip(ss, lens):
        if n > CEILING:
            hits.append(('long', f'{n} words: {s[:90]}…'))
    for i in range(len(lens) - 2):
        a, b, c = lens[i:i + 3]
        if max(a, b, c) - min(a, b, c) <= 2 and a >= 8:
            hits.append(('rhythm', f'three sentences of {a}/{b}/{c} words in a row: {ss[i][:60]}…'))
            break
    for pat, why in TELLS[lang]:
        for m in re.finditer(pat, text, flags=re.I):
            hits.append(('tell', f'{why}: …{text[max(0, m.start()-30):m.end()+30]}…'))
    for pat in MANNERED[lang]:
        for m in re.finditer(pat, text, flags=re.I):
            hits.append(('mannered', f'…{text[max(0, m.start()-40):m.end()+20]}…'))
    for p in paras:
        if re.match(r'\s*<strong>', p):
            hits.append(('catalogue', 'paragraph opens with a bolded name: ' + re.sub(r'<[^>]+>', '', p)[:60] + '…'))
    if headings and any(re.search(h, headings[-1], flags=re.I) for h in SUMMARY_HEADINGS):
        hits.append(('closer', 'last section is a summary: ' + headings[-1]))
    # The Italian course's summaries often end in a fragment list: "What the grapes are, how the
    # wine is made, and why…". Spoken, that was the "cryptic message"; on screen it is a table of
    # contents. Flag a sentence that opens like a question and never asks one.
    for s in sentences(L['summary']):
        if re.match(r'(What|How|Why|Where|Hva|Hvordan|Hvorfor|Hvor)\b', s) and '?' not in s:
            hits.append(('summary', 'summary is a fragment list: ' + s[:80]))
            break
    stats = f'{len(text.split())} words, {len(ss)} sentences, mean {sum(lens)/max(1,len(lens)):.1f}, longest {max(lens) if lens else 0}'
    return stats, hits


def run(stem, langs, quiet):
    for lang in langs:
        path = os.path.join(ROOT, 'content', f'{stem}.js' if lang == 'en' else f'{stem}.no.js')
        if not os.path.exists(path):
            continue
        for i, L in enumerate(lessons_from(path), 1):
            stats, hits = lint_lesson(L, lang)
            if quiet and not hits:
                continue
            print(f'{stem} {lang}-{i}  {L["title"]}\n   {stats}')
            for kind, msg in hits:
                print(f'   !! {kind:9s} {msg}')


if __name__ == '__main__':
    args = sys.argv[1:]
    if not args:
        print(__doc__); sys.exit(1)
    langs = ['en', 'no']
    if '--lang' in args:
        langs = [args[args.index('--lang') + 1]]
    stem = args[0]
    if stem == 'all':
        stems = sorted({os.path.basename(f)[:-3] for f in glob.glob(os.path.join(ROOT, 'content', '*.js'))
                        if not f.endswith('.no.js') and os.path.basename(f) not in
                        ('course.no.js', 'quiz.js', 'tasting.js', 'glossary.js', 'spice.js')})
        for s in stems:
            run(s, langs, quiet=True)
    else:
        run(stem, langs, quiet=False)
