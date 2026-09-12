"""Drive headless Chrome as a phone via CDP: open the map, tap Lazio's chip, tap lesson 3, report what happened."""
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
    # tap the label centre: a downward offset falls into the sea for Sicilia
    for code in ['IT-52','IT-82','IT-88','IT-34']:
        r = js("(function(){const e=[...document.querySelectorAll('#labels .lbl')].find(e=>e.textContent==='%s'); if(!e) return null; const k=e.getBoundingClientRect(); return [k.left+k.width/2, k.top+k.height/2];})()" % {'IT-52':'Toscana','IT-82':'Sicilia','IT-88':'Sardegna','IT-34':'Veneto'}[code])
        tap(*r); time.sleep(1.8)
        print(code, "tap at", [round(v) for v in r], "-> hash:", js("location.hash"), "| sheet title:", js("document.querySelector('#sheet h2').textContent"))
        r2 = js("(function(){const b=document.querySelector('#sheet .close'); const k=b.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()")
        tap(*r2); time.sleep(1.5)
    shot("maptap.png")
finally:
    proc.kill()
