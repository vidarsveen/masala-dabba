"""Drive the recipe pages as a phone via CDP: index -> recipe -> rescale -> language -> the links in and out."""
import json, subprocess, time, sys, os, urllib.request
import websocket

PORT = 9339
CH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
S = os.path.dirname(os.path.abspath(__file__))
URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8765/dist/masala-dabba.html?instant"
fails = []
proc = subprocess.Popen([CH, "--headless=new", "--no-sandbox", "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
    "--ignore-gpu-blocklist", f"--remote-debugging-port={PORT}", f"--user-data-dir={S}\\prof_cook", "about:blank"],
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
        if "exceptionDetails" in r: return "ERR " + json.dumps(r["exceptionDetails"])[:200]
        return r.get("result", {}).get("value")
    def tap(x, y):
        send("Input.dispatchTouchEvent", type="touchStart", touchPoints=[{"x": x, "y": y}]); time.sleep(0.05)
        send("Input.dispatchTouchEvent", type="touchEnd", touchPoints=[])
    def at(sel):
        r = js("(function(){const e=document.querySelector(%s); if(!e) return null; e.scrollIntoView({block:'center'});"
               "const k=e.getBoundingClientRect(); return [k.left+k.width/2, k.top+k.height/2];})()" % json.dumps(sel))
        return r
    def check(label, got, want):
        ok = (want in got) if isinstance(want, str) and isinstance(got, str) else (got == want)
        print(("  ok  " if ok else "  FAIL") + f" {label}: {got!r}" + ("" if ok else f"  (wanted {want!r})"))
        if not ok: fails.append(label)

    send("Emulation.setDeviceMetricsOverride", width=390, height=844, deviceScaleFactor=2, mobile=True)
    send("Emulation.setTouchEmulationEnabled", enabled=True, maxTouchPoints=5)
    send("Emulation.setEmitTouchEventsForMouse", enabled=True, configuration="mobile")
    send("Page.enable"); send("Runtime.enable")
    send("Page.navigate", url=URL); time.sleep(6)
    js("localStorage.removeItem('iit-servings'); localStorage.removeItem('iit-lang')")
    send("Page.navigate", url=URL); time.sleep(6)          # start from a cook who has never set a portion count
    print("loaded:", js("document.title"))

    # 1. the top-bar button opens the index
    tap(*at("#recipeBtn")); time.sleep(1)
    check("hash after Recipes button", js("location.hash"), "#/recipes")
    check("index open", js("document.getElementById('cook').classList.contains('open')"), True)
    n = js("document.querySelectorAll('#cook a.rcard').length")
    check("every recipe listed", n == js("Object.values(window.RECIPES||{}).reduce((a,b)=>a+b.length,0)"), True)
    print("   recipes in the index:", n)

    # 2. a card opens the recipe
    tap(*at("#cook a.rcard[href$='carbonara']")); time.sleep(1)
    check("hash after card", js("location.hash"), "#/recipes/carbonara")
    check("servings shown", js("document.querySelector('#cook .serves output').textContent"), "4")
    before = js("[...document.querySelectorAll('#cook .ings td.q')].map(e=>e.textContent).join(' | ')")
    print("   4 servings:", before)

    # 3. the stepper rescales, and remembers
    tap(*at("#cook .serves .plus")); time.sleep(0.5)
    tap(*at("#cook .serves .plus")); time.sleep(0.5)
    check("servings after two taps", js("document.querySelector('#cook .serves output').textContent"), "6")
    after = js("[...document.querySelectorAll('#cook .ings td.q')].map(e=>e.textContent).join(' | ')")
    print("   6 servings:", after)
    check("quantities changed", after != before, True)
    check("pasta scaled 400 -> 600", after.startswith("600 g"), True)
    check("pepper still unscaled", " g" not in after.split("|")[5], True)
    check("servings remembered", js("localStorage.getItem('iit-servings')"), "6")

    # 4. language switch re-renders the open recipe
    js("location.hash='#/recipes/carbonara'"); time.sleep(0.6)
    js("document.querySelector('#lang button[data-lang=no]').click()"); time.sleep(1)
    check("norwegian ingredients heading", js("document.querySelector('#cook .ings h2').textContent"), "Ingredienser")
    check("norwegian ingredient", js("document.querySelector('#cook .ings td+td').textContent"), "spaghetti")
    check("norwegian decimals", js("[...document.querySelectorAll('#cook .ings td.q')].map(e=>e.textContent).join('|')"), "600 g")
    js("document.querySelector('#lang button[data-lang=en]').click()"); time.sleep(1)

    # 5. back to the index, then out to the map
    tap(*at("#cook .rbar .back")); time.sleep(0.8)
    check("back goes to the index", js("location.hash"), "#/recipes")
    tap(*at("#cook .rbar .back")); time.sleep(0.8)
    check("back leaves the recipes", js("location.hash"), "#/")
    check("map drawing again", js("document.getElementById('cook').classList.contains('open')"), False)

    # 6. a dish chip on the region sheet opens its recipe
    js("location.hash='#/IT-62'"); time.sleep(1.5)
    want = js("(window.RECIPES['IT-62']||[]).filter(r => r.dish).length")
    check("every Lazio dish with a recipe is linked",
          js("document.querySelectorAll('#sheet .dishes a').length") == want, True)
    print("   linked chips on the Lazio sheet:", want)
    tap(*at("#sheet .dishes a[href$='gricia']")); time.sleep(1)
    check("chip opened the recipe", js("location.hash"), "#/recipes/gricia")

    # 7. the food reading links to the recipes
    js("location.hash='#/IT-62/3'"); time.sleep(1.5)
    check("cook-it block in the reading", js("document.querySelectorAll('#reader .cookit a').length"), 4)
    check("reading still has its quiz", js("document.querySelectorAll('#reader .quiz').length"), 1)
finally:
    proc.terminate()
print("FAILURES:", ", ".join(fails) if fails else "none")
sys.exit(1 if fails else 0)
