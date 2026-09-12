"""The intro is a gate every first-time visitor meets, so it gets its own test.

first visit shows it -> the language buttons switch the whole page -> dismissing it sticks ->
a reload does not show it again -> #/about brings it back -> so does tapping the masthead.
"""
import base64, json, os, subprocess, sys, time, urllib.request
import websocket

PORT = 9343
CH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
S = os.path.dirname(os.path.abspath(__file__))
BASE = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8765/dist/masala-dabba.html"
fails = []
proc = subprocess.Popen([CH, "--headless=new", "--no-sandbox", "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", f"--remote-debugging-port={PORT}",
    f"--user-data-dir={S}\\prof_intro", "about:blank"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
try:
    targets = None
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
        if "exceptionDetails" in r: return "ERR " + json.dumps(r["exceptionDetails"])[:180]
        return r.get("result", {}).get("value")
    def tap(sel):
        at = js("(function(){const e=document.querySelector(%s); if(!e) return null;"
                "const k=e.getBoundingClientRect(); return [k.left+k.width/2, k.top+k.height/2];})()" % json.dumps(sel))
        if not at: return False
        send("Input.dispatchTouchEvent", type="touchStart", touchPoints=[{"x": at[0], "y": at[1]}]); time.sleep(0.05)
        send("Input.dispatchTouchEvent", type="touchEnd", touchPoints=[]); return True
    def check(label, got, want=True):
        ok = got == want
        print(("  ok   " if ok else "  FAIL ") + f"{label}: {got!r}" + ("" if ok else f"  (wanted {want!r})"))
        if not ok: fails.append(label)
    def open_(): return js("document.getElementById('intro').classList.contains('open')")

    send("Emulation.setDeviceMetricsOverride", width=390, height=844, deviceScaleFactor=2, mobile=True)
    send("Emulation.setTouchEmulationEnabled", enabled=True, maxTouchPoints=5)
    send("Page.enable"); send("Runtime.enable")

    # a browser that has never seen the course. No ?instant: that is the flag the tests use to skip it.
    send("Page.navigate", url=BASE); time.sleep(7)
    js("localStorage.clear()")
    send("Page.navigate", url=BASE); time.sleep(9)
    check("first visit shows the intro", open_())
    check("the map chrome is hidden behind it", js("document.documentElement.classList.contains('intro-on')"))
    shown = js("[...document.querySelectorAll('#intro .nums u')].map(e=>+e.textContent)")
    counted = js("(n => [n.regions, n.readings, n.recipes, n.wines])(window.__dbg.introNums)")
    check("what is shown is what was counted", shown, counted)
    check("readings counted from READINGS",
          counted[1], js("Object.values(window.READINGS).reduce((a,b)=>a+b.lessons.length,0)"))
    check("recipes counted from RECIPES",
          counted[2], js("Object.values(window.RECIPES).reduce((a,b)=>a+b.length,0)"))
    check("regions counted from the rail", counted[0], js("document.querySelectorAll('#rail button.r').length"))
    print("   intro shows:", shown)

    # the language buttons drive the real toggle
    tap("#intro .pick button[data-il='no']"); time.sleep(1)
    check("picking Norsk switches the page", js("document.documentElement.lang"), "nb")
    check("the intro follows", js("document.querySelector('#intro .go').textContent"), "Åpne kartet")
    tap("#intro .pick button[data-il='en']"); time.sleep(1)

    # dismissing sticks
    tap("#intro .go"); time.sleep(0.8)
    check("dismissed", open_(), False)
    check("the map chrome is back", js("document.documentElement.classList.contains('intro-on')"), False)
    check("remembered", js("localStorage.getItem('iit-seen')"), "1")
    send("Page.navigate", url=BASE); time.sleep(8)
    check("a second visit goes straight to the map", open_(), False)

    # and it is not a dead end
    js("location.hash='#/about'"); time.sleep(1)
    check("#/about brings it back", open_())
    tap("#intro .go"); time.sleep(0.8)
    check("closing from #/about returns to the map", js("location.hash"), "#/")
    tap("#top h1"); time.sleep(1)
    check("tapping the masthead brings it back", open_())
finally:
    proc.terminate()
print("FAILURES:", ", ".join(fails) if fails else "none")
sys.exit(1 if fails else 0)
