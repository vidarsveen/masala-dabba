"""Verify the in-page Ogg->CAF repackager against ffmpeg's CAF muxer (minus its optional 'info' chunk)."""
import json, subprocess, time, sys, os, hashlib, struct, base64, urllib.request
import websocket
S = os.path.dirname(os.path.abspath(__file__))       # screenshots and Chrome profiles land here
ROOT = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))  # the project root
# reference: ffmpeg caf with the info chunk removed
ref = open(S + '/ref.caf', 'rb').read(); i = 8; out = ref[:8]
while i < len(ref):
    typ = ref[i:i+4]; size = struct.unpack('>q', ref[i+4:i+12])[0]
    if typ != b'info': out += ref[i:i+12+size]
    i += 12 + size
ref_hash = hashlib.sha256(out).hexdigest(); print('reference (no info chunk):', len(out), 'bytes', ref_hash[:16])
ogg_b64 = base64.b64encode(open(ROOT + '/assets/audio/kerala/en-2.ogg', 'rb').read()).decode()
PORT = 9334; CH = r"C:\Program Files\Google\Chrome\Application\chrome.exe"
proc = subprocess.Popen([CH, "--headless=new", "--no-sandbox", f"--remote-debugging-port={PORT}", f"--user-data-dir={S}\\prof_caf", "about:blank"], stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
try:
    for _ in range(40):
        try: targets = json.load(urllib.request.urlopen(f"http://127.0.0.1:{PORT}/json")); break
        except Exception: time.sleep(0.5)
    page = [t for t in targets if t["type"] == "page"][0]
    ws = websocket.create_connection(page["webSocketDebuggerUrl"], suppress_origin=True); mid = 0
    def send(method, **params):
        global mid; mid += 1; ws.send(json.dumps({"id": mid, "method": method, "params": params}))
        while True:
            r = json.loads(ws.recv())
            if r.get("id") == mid: return r.get("result", r)
    def js(expr):
        r = send("Runtime.evaluate", expression=expr, returnByValue=True, awaitPromise=True); return r.get("result", {}).get("value", r)
    send("Page.enable"); send("Page.navigate", url="http://127.0.0.1:8765/dist/masala-dabba.html?instant"); time.sleep(8)
    print('page ok:', js("typeof window.__dbg.oggOpusToCaf"), '| ogg playable here:', js("window.__dbg.OGG_OK"))
    res = js("""(async () => { const b = Uint8Array.from(atob('%s'), c => c.charCodeAt(0)); const t0 = performance.now(); const caf = window.__dbg.oggOpusToCaf(b.buffer); const ms = performance.now()-t0;
        const h = await crypto.subtle.digest('SHA-256', caf); return {len: caf.length, hash: [...new Uint8Array(h)].map(x=>x.toString(16).padStart(2,'0')).join(''), ms: Math.round(ms)}; })()""" % ogg_b64)
    print('page output:', res)
    print('MATCH' if res.get('hash') == ref_hash else 'MISMATCH')
finally:
    proc.kill()
