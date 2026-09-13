"""Drive headless Chrome as a phone via CDP: open the map, tap the first written region's chip, tap lesson 3, report what happened."""
import json, subprocess, time, base64, sys, urllib.request, os
import websocket

PORT = 9333
CH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
S = os.path.dirname(os.path.abspath(__file__))  # screenshots and Chrome profiles land here
URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8765/dist/masala-dabba.html?instant"
proc = subprocess.Popen([CH, "--headless=new", "--no-sandbox", "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
    "--ignore-gpu-blocklist", f"--remote-debugging-port={PORT}", f"--user-data-dir={S}\\prof_touch", "--window-size=390,844", "about:blank"],
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
    def tap(x, y):
        send("Input.dispatchTouchEvent", type="touchStart", touchPoints=[{"x": x, "y": y}])
        time.sleep(0.05)
        send("Input.dispatchTouchEvent", type="touchEnd", touchPoints=[])
    def shot(name):
        r = send("Page.captureScreenshot", format="png")
        open(os.path.join(S, name), "wb").write(base64.b64decode(r["data"]))
    send("Emulation.setDeviceMetricsOverride", width=390, height=844, deviceScaleFactor=2, mobile=True)
    send("Emulation.setTouchEmulationEnabled", enabled=True, maxTouchPoints=5)
    send("Emulation.setEmitTouchEventsForMouse", enabled=True, configuration="mobile")
    send("Page.enable"); send("Runtime.enable")
    # The profile dir persists localStorage between runs, so a previous run that ended in
    # Norwegian would leave this test starting there -- it would then tap Norsk, see no change,
    # and print that as a pass. Force English first and reload, so the tap is always a switch.
    send("Page.navigate", url=URL)
    time.sleep(4)
    js("localStorage.setItem('mdb-lang','en')")
    send("Page.navigate", url=URL)
    time.sleep(6)
    print("loaded:", js("document.title"), "| loading gone:", js("document.getElementById('loading').classList.contains('gone')"))
    r = js("(function(){const b=document.querySelector('#rail button[data-code=\"IN-KER\"]'); b.scrollIntoView({inline:'center'}); const k=b.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()")
    tap(*r); time.sleep(2)
    print("EN sheet h3:", js("document.querySelector('#sheet h3[data-t=lessons]').textContent"), "| lesson 1:", js("document.querySelector('#sheet ol.lessons li .t').textContent"))
    r = js("(function(){const b=document.querySelector('#lang button[data-lang=no]'); const k=b.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()")
    tap(*r); time.sleep(1.5)
    print("after NO tap -> h3:", js("document.querySelector('#sheet h3[data-t=lessons]').textContent"), "| lesson 1:", js("document.querySelector('#sheet ol.lessons li .t').textContent"), "| area:", js("document.querySelector('#sheet .eyebrow .area').textContent"), "| cap:", js("document.querySelector('#sheet .cap').textContent"), "| next btn:", js("document.getElementById('nextBtn').textContent"), "| stored:", js("localStorage.getItem('mdb-lang')"))
    print("spice kinds:", js("[...document.querySelectorAll('#sheet ul.spices small')].map(e=>e.textContent).join(',')"))
    fails = []
    if js("localStorage.getItem('mdb-lang')") != 'no':
        fails.append("the language toggle did not store 'no'")
    if js("document.querySelector('#sheet h3[data-t=lessons]').textContent") != 'Lesetekster':
        fails.append("the sheet did not re-render in Norwegian")
    if js("document.documentElement.lang") != 'nb':
        fails.append("<html lang> did not become nb")
    print("FAILURES:", "none" if not fails else "")
    for f in fails:
        print("  FAIL", f)
    shot("toggle_no.png")
finally:
    proc.kill()
