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
    # 1. tap the region chip in the strip
    r = js("(function(){const b=document.querySelector('#rail button[data-code=\"IN-KER\"]'); b.scrollIntoView({inline:'center'}); const k=b.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()")
    print("region chip at", r); tap(*r); time.sleep(2.5)
    print("hash:", js("location.hash"), "| sheet:", js("document.getElementById('sheet').className"))
    shot("touch_1_sheet.png")
    def lesson(i):
        return js("(function(){const li=document.querySelector('#sheet ol.lessons li[data-i=\"%d\"]'); if(!li) return null; const k=li.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()" % i)
    # 2. tap lesson 1 while the sheet is half open
    r = lesson(0); print("lesson 1 at", r); tap(*r); time.sleep(2.5)
    print("hash:", js("location.hash"), "| reader open:", js("document.getElementById('reader').classList.contains('open')"), "| title:", js("(document.querySelector('#reader h1')||{}).textContent"))
    shot("touch_2_reader.png")
    # 3. back
    r = js("(function(){const b=document.querySelector('#reader .back'); const k=b.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()")
    tap(*r); time.sleep(1.5)
    print("after back -> hash:", js("location.hash"), "| reader open:", js("document.getElementById('reader').classList.contains('open')"), "| sheet:", js("document.getElementById('sheet').className"))
    # 4. tap the sheet header to expand, then tap lesson 4
    r = js("(function(){const h=document.querySelector('#sheet h2'); const k=h.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()")
    tap(*r); time.sleep(1.2); print("sheet after header tap:", js("document.getElementById('sheet').className"))
    r = lesson(3); print("lesson 4 at", r, "screen h", js("innerHeight"))
    if r[1] > 844: js("document.querySelector('#sheet .body').scrollTop = 400"); time.sleep(0.5); r = lesson(3); print("after scroll lesson 4 at", r)
    tap(*r); time.sleep(2.5)
    print("hash:", js("location.hash"), "| reader open:", js("document.getElementById('reader').classList.contains('open')"), "| title:", js("(document.querySelector('#reader h1')||{}).textContent"))
    shot("touch_3_full.png")
finally:
    proc.kill()
