"""Regression checks for the local production-like byte-range server."""
import os
from pathlib import Path
import sys
import tempfile
import threading
import unittest
import urllib.error
import urllib.request
from http.server import ThreadingHTTPServer

sys.path.insert(0, str(Path(__file__).resolve().parent))
from serve import RangeRequestHandler  # noqa: E402


class RangeServerTests(unittest.TestCase):
    def setUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.payload = bytes(range(256)) * 4
        Path(self.temp.name, 'audio.mp3').write_bytes(self.payload)
        directory = self.temp.name
        handler = lambda *a, **kw: RangeRequestHandler(*a, directory=directory, **kw)
        self.server = ThreadingHTTPServer(('127.0.0.1', 0), handler)
        self.thread = threading.Thread(target=self.server.serve_forever, daemon=True)
        self.thread.start()
        self.url = f'http://127.0.0.1:{self.server.server_port}/audio.mp3'

    def tearDown(self):
        self.server.shutdown()
        self.server.server_close()
        self.thread.join(timeout=2)
        self.temp.cleanup()

    def request(self, value):
        return urllib.request.urlopen(urllib.request.Request(
            self.url, headers={'Range': value}))

    def test_explicit_range_returns_only_requested_bytes(self):
        with self.request('bytes=10-109') as response:
            self.assertEqual(response.status, 206)
            self.assertEqual(response.headers['Accept-Ranges'], 'bytes')
            self.assertEqual(response.headers['Content-Range'], 'bytes 10-109/1024')
            self.assertEqual(response.read(), self.payload[10:110])

    def test_open_and_suffix_ranges(self):
        with self.request('bytes=1000-') as response:
            self.assertEqual(response.read(), self.payload[1000:])
        with self.request('bytes=-16') as response:
            self.assertEqual(response.read(), self.payload[-16:])

    def test_unsatisfiable_range_reports_file_size(self):
        with self.assertRaises(urllib.error.HTTPError) as caught:
            self.request('bytes=2000-2100')
        self.assertEqual(caught.exception.code, 416)
        self.assertEqual(caught.exception.headers['Content-Range'], 'bytes */1024')


if __name__ == '__main__':
    unittest.main()
