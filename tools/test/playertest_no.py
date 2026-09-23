"""Exercise Norwegian reading playback in headless Chrome at a phone viewport."""
import json, subprocess, time, base64, sys, urllib.request, os
import websocket

PORT = 9333
CH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
S = os.path.dirname(os.path.abspath(__file__))
URL = sys.argv[1] if len(sys.argv) > 1 else "http://127.0.0.1:8765/dist/masala-dabba.html?instant"
proc = subprocess.Popen([CH, "--headless=new", "--no-sandbox", "--use-angle=swiftshader", "--enable-unsafe-swiftshader",
    "--ignore-gpu-blocklist", f"--remote-debugging-port={PORT}", f"--user-data-dir={S}\\prof_touch_no", "--window-size=390,844", "about:blank"],
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
    js("document.querySelector(\"#lang button[data-lang='no']\").click()")
    js("location.hash='#/IN-HIM/1'")
    time.sleep(2)
    print("loaded:", js("document.title"), "| loading gone:", js("document.getElementById('loading').classList.contains('gone')"), "| hash:", js("location.hash"), "| reader:", js("document.getElementById('reader').classList.contains('open')"))
    print("manifest keys:", js("Object.keys(window.AUDIO_MANIFEST||{}).join(',')"), "| audio data:", js("Object.keys(window.AUDIO_DATA||{}).length"))
    r = js("(function(){const b=document.querySelector('#reader .listen'); if(!b) return null; const k=b.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2, b.textContent];})()")
    print("listen button:", r)
    tap(r[0], r[1]); time.sleep(3)
    print("player on:", js("document.querySelector('.rplayer').classList.contains('on')"), "| meta:", js("document.querySelector('.rplayer .meta').textContent"), "| time:", js("document.querySelector('.rplayer .time').textContent"), "| pp:", js("document.querySelector('.rplayer .pp').textContent"))
    shot("player_no.png")
    r = js("(function(){const b=document.querySelector('.rplayer .fwd15'); const k=b.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()")
    tap(*r); time.sleep(1.5); print("after +15:", js("document.querySelector('.rplayer .time').textContent"), "| saved pos:", js("Object.keys(localStorage).filter(k=>k.startsWith('iit-audio')).map(k=>k+'='+localStorage.getItem(k)).join(',')"))
    r = js("(function(){const b=document.querySelector('.rplayer .pp'); const k=b.getBoundingClientRect(); return [k.left+k.width/2,k.top+k.height/2];})()")
    tap(*r); time.sleep(1); print("after pause pp:", js("document.querySelector('.rplayer .pp').textContent"))
finally:
    proc.kill()
