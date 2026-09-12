"""Screenshot the course at an exact phone viewport via CDP.

shot3.sh is unreliable: --window-size does not set the viewport in --headless=new
(a request for 390x844 gives the page a 500x688 window and then crops the capture),
so anything that reacts to window.innerWidth is framed for the wrong screen.
This uses Emulation.setDeviceMetricsOverride, which the touch tests already rely on.

  python tools/test/shot.py out.png 390x844 "?instant"
  python tools/test/shot.py a.png 390x844 "?instant" b.png 360x800 "?instant&lang=no"

Shots are taken in one Chrome run, in order. Paths are relative to the current directory.
"""
import base64, json, os, subprocess, sys, time, urllib.request
import websocket

PORT = 9337
CH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
S = os.path.dirname(os.path.abspath(__file__))
BASE = os.environ.get("MDB_URL", "http://127.0.0.1:8765/dist/masala-dabba.html")
WAIT = float(os.environ.get("MDB_WAIT", "6"))

args = sys.argv[1:]
if len(args) < 3 or len(args) % 3:
    print(__doc__); sys.exit(2)
shots = [(args[i], args[i + 1], args[i + 2]) for i in range(0, len(args), 3)]

proc = subprocess.Popen([CH, "--headless=new", "--no-sandbox", "--use-angle=swiftshader",
    "--enable-unsafe-swiftshader", "--ignore-gpu-blocklist", f"--remote-debugging-port={PORT}",
    f"--user-data-dir={S}\\prof_shot", "about:blank"],
    stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
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
    send("Page.enable"); send("Runtime.enable")
    for name, size, query in shots:
        w, h = (int(v) for v in size.lower().split("x"))
        send("Emulation.setDeviceMetricsOverride", width=w, height=h, deviceScaleFactor=1, mobile=w < h)
        send("Page.navigate", url="about:blank"); time.sleep(0.3)
        send("Page.navigate", url=BASE + query)
        time.sleep(WAIT)
        got = send("Runtime.evaluate", expression="[innerWidth, innerHeight]", returnByValue=True)
        vp = got.get("result", {}).get("value")
        r = send("Page.captureScreenshot", format="png")
        with open(name, "wb") as f: f.write(base64.b64decode(r["data"]))
        print(f"{name}  asked {w}x{h}  viewport {vp}")
finally:
    proc.terminate()
