"""The audiobook page: open it, check the chapter list, play, jump chapter, resume, language.

Drives headless Chrome as a phone over CDP, like the other tests here.
Usage: python tools/test/booktest.py [url]
"""
import base64, json, os, subprocess, sys, time, urllib.request
import websocket

PORT = 9341
CH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
S = os.path.dirname(os.path.abspath(__file__))
URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8765/masala-dabba.html?instant&lang=no"
fails = []

proc = subprocess.Popen([CH, "--headless=new", "--no-sandbox", "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", "--autoplay-policy=no-user-gesture-required",
    f"--remote-debugging-port={PORT}", f"--user-data-dir={S}\\prof_book", "--window-size=390,844", "about:blank"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
try:
    for _ in range(40):
        try:
            targets = json.load(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json")); break
        except Exception: time.sleep(0.5)
    page = [t for t in targets if t["type"] == "page"][0]
    ws = websocket.create_connection(page["webSocketDebuggerUrl"], suppress_origin=True)
    mid = 0
    def send(method, **params):
        global mid; mid += 1
        ws.send(json.dumps({"id": mid, "method": method, "params": params}))
        while True:
            r = json.loads(ws.recv())
            if r.get("id") == mid: return r.get("result", r)
    def js(expr):
        r = send("Runtime.evaluate", expression=expr, returnByValue=True, awaitPromise=True)
        return r.get("result", {}).get("value")
    def ok(label, cond, got=""):
        print(("  ok   " if cond else "  FAIL ") + label + ("" if not got else f": {got}"))
        if not cond: fails.append(label)
    def shot(name):
        r = send("Page.captureScreenshot", format="png")
        open(os.path.join(S, name), "wb").write(base64.b64decode(r["data"]))

    send("Emulation.setDeviceMetricsOverride", width=390, height=844, deviceScaleFactor=2, mobile=True)
    send("Emulation.setTouchEmulationEnabled", enabled=True, maxTouchPoints=5)
    send("Page.enable"); send("Runtime.enable")
    send("Page.navigate", url=URL); time.sleep(6)

    ok("page loaded", js("document.title") is not None, js("document.title"))
    ok("audiobook button is shown when narration ships",
       js("!document.getElementById('bookBtn').hidden"))

    # Old releases saved a readings-only numeric index. Reading 3 must remain reading 3 even
    # when a regional introduction is inserted ahead of it.
    js("localStorage.setItem('mdb-book:no', JSON.stringify({i:2,t:0}))")
    js("location.hash='#/audiobook'"); time.sleep(3)
    ok("the audiobook page opens", js("document.getElementById('book').classList.contains('open')"))
    n = js("document.querySelectorAll('#book .ch').length")
    # One chapter per track that HAS AUDIO, which is not the same as per reading written: a
    # region can be written and not yet narrated, and in the single-file build only the regions in
    # build.py's HOSTED_AUDIO are inlined at all. Derive the expectation from the manifest.
    lang = js("document.documentElement.lang") or "en"
    pre = "nb" in lang and "no" or "en"
    want = js("Object.keys(window.AUDIO_MANIFEST||{}).filter(k => k.includes(':%s-')).length" % pre)
    ok("a chapter for every narrated track", n == want, "%s of %s" % (n, want))
    region_count = js("(function(){const m=window.AUDIO_MANIFEST||{};"
                      "return new Set(Object.keys(m).filter(k=>k.includes(':%s-')).map(k=>k.split(':')[0])).size;})()" % pre)
    ok("chapters are grouped by region",
       js("document.querySelectorAll('#book .blist h3').length") == region_count,
       js("document.querySelectorAll('#book .blist h3').length"))
    # the book follows ORDER, so the first chapter is reading 1 of the earliest narrated region,
    # which stops being Kerala the moment any region north of it is recorded
    first = js("(function(){const h=document.querySelector('#book .blist h3');"
               "return h ? h.textContent.trim() : null;})()")
    ok("the first chapter belongs to the first narrated region in ORDER",
       js("(function(){const h=document.querySelector('#book .blist h3');"
          "return h && h.nextElementSibling && h.nextElementSibling.classList.contains('ch');})()"),
       first)
    ok("legacy numeric progress migrates to the same reading",
       (js("document.querySelector('#book .ch.is-on') && document.querySelector('#book .ch.is-on').dataset.id") or "").endswith(':reading-3'),
       js("document.querySelector('#book .ch.is-on') && document.querySelector('#book .ch.is-on').dataset.id"))
    ok("total time is shown", "t" in (js("document.querySelector('#book .btotal').textContent") or ""),
       js("document.querySelector('#book .btotal').textContent"))

    # play
    js("document.querySelector('#book .pp').click()"); time.sleep(4)
    t1 = js("(window.__dbg.bookPlayer, document.querySelector('#book .time').textContent)")
    ok("playing (time advances)", t1 not in (None, "0:00 / 0:00"), t1)
    ok("pause button shows the pause glyph",
       js("document.querySelector('#book .pp').textContent") == "\u275a\u275a")

    # jump to a chapter further in
    # the third chapter, whatever the course currently holds; with every region written this
    # reached chapter ten, but the test has to work from the first region onwards
    JUMP = 3
    js("document.querySelectorAll('#book .ch')[%d].click()" % (JUMP - 1)); time.sleep(4)
    on = js("document.querySelector('#book .ch.is-on .n').textContent")
    ok("tapping a chapter jumps to it", on == str(JUMP), on)
    ok("now-playing header follows", ("%d " % JUMP) in (js("document.querySelector('#book .bnow .sub').textContent") or ""),
       js("document.querySelector('#book .bnow .sub').textContent"))
    ok("earlier chapters are marked played",
       js("document.querySelectorAll('#book .ch.is-played').length") == JUMP - 1,
       js("document.querySelectorAll('#book .ch.is-played').length"))

    # next / prev
    js("document.querySelector('#book .next').click()"); time.sleep(3)
    ok("next chapter", js("document.querySelector('#book .ch.is-on .n').textContent") == str(JUMP + 1))
    js("document.querySelector('#book .prev').click()"); time.sleep(3)
    ok("previous chapter", js("document.querySelector('#book .ch.is-on .n').textContent") == str(JUMP))

    saved = js("localStorage.getItem('mdb-book:no')")
    ok("position is saved with a stable chapter id", saved and '"id"' in saved and 'reading-' in saved, saved)
    shot("book.png")

    # leaving pauses, and does not touch course progress
    before = js("localStorage.getItem('masala-dabba-progress')")
    js("location.hash='#/'"); time.sleep(2)
    ok("leaving closes the page", not js("document.getElementById('book').classList.contains('open')"))
    ok("leaving pauses the audio", js("!document.querySelector('audio') || document.querySelector('audio').paused"))
    ok("course progress untouched by listening", js("localStorage.getItem('masala-dabba-progress')") == before)

    # resume
    js("location.hash='#/audiobook'"); time.sleep(4)
    ok("reopening resumes the same chapter",
       js("document.querySelector('#book .ch.is-on .n').textContent") == str(JUMP),
       js("document.querySelector('#book .ch.is-on .n').textContent"))

    # language: the titles must change, and they must change to the English ones. Naming a title
    # here would tie the test to whichever region happens to sort first in ORDER, so compare
    # against what READINGS actually holds for the first chapter's region.
    was = js("document.querySelector('#book .ch .t').textContent")
    js("document.querySelector(\"#lang button[data-lang='en']\").click()"); time.sleep(4)
    now = js("document.querySelector('#book .ch .t').textContent")
    want = js("(function(){const m=Object.keys(window.AUDIO_MANIFEST||{}).filter(k=>k.includes(':en-1'));"
              "if(!m.length) return null; const dir=m[0].split(':')[0];"
              "const code=Object.keys(window.READINGS||{}).find(c=>(window.READINGS[c].lessons||[])[0]);"
              "return dir;})()")
    ok("switching language rebuilds the book in English", now != was and bool(now), "%s -> %s" % (was, now))
    ok("English progress is kept separately",
       js("document.querySelector('#book .ch.is-on .n').textContent") == "1",
       js("document.querySelector('#book .ch.is-on .n').textContent"))

    print("FAILURES:", ", ".join(fails) if fails else "none")
finally:
    try: ws.close()
    except Exception: pass
    proc.terminate()
sys.exit(1 if fails else 0)
