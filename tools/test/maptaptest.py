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
    send("Page.navigate", url=URL)
    time.sleep(6)
    print("loaded:", js("document.title"), "| loading gone:", js("document.getElementById('loading').classList.contains('gone')"))
    # Tap the label centre. A label that collision-avoidance has hidden (updateOverlays drops a
    # label rather than draw it over one already placed) has a zero-sized rect, and tapping that
    # means tapping [0,0], which deselects and looks like a pass. Never tap a hidden label.
    NAMES = {"IN-RAJ":"Rajasthan","IN-BEN":"Bengal & the east","IN-TAM":"Tamil Nadu",
             "IN-GUJ":"Gujarat","IN-KON":"Goa & the Konkan","IN-NEA":"The North-East"}
    fails, hidden = [], []
    for code in ["IN-RAJ","IN-BEN","IN-TAM","IN-GUJ","IN-KON","IN-NEA"]:
        r = js("(function(){const e=[...document.querySelectorAll('#labels .lbl')].find(e=>e.textContent==='%s'); if(!e) return null; const k=e.getBoundingClientRect(); if(!k.width||!k.height) return 'hidden'; return [k.left+k.width/2, k.top+k.height/2];})()" % NAMES[code])
        if r == "hidden" or r is None:
            hidden.append(code)
            print(code, "label not on screen (collision-avoidance hid it) - skipped, not tapped")
            continue
        tap(*r); time.sleep(1.8)
        got = js("location.hash")
        print(code, "tap at", [round(v) for v in r], "-> hash:", got,
              "| sheet title:", js("document.querySelector('#sheet h2').textContent"))
        if got != "#/" + code:
            fails.append("%s: tapping its label gave %s" % (code, got))
        r2 = js("(function(){const b=document.querySelector('#sheet .close'); const k=b.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()")
        tap(*r2); time.sleep(1.5)
    if hidden:
        print("labels hidden at this viewport:", ",".join(hidden))
    print("FAILURES:", "none" if not fails else "")
    for f in fails:
        print("  FAIL", f)
    shot("maptap.png")
finally:
    proc.kill()
