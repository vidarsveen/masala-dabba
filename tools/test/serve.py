"""Serve a build locally with HTTP byte-range support for audio checks.

Usage:
    python tools/test/serve.py --directory site --port 8766

Python's current SimpleHTTPRequestHandler supports byte ranges inconsistently across
versions. This handler makes the production behavior explicit: a valid single Range
request receives 206, Content-Range and only the requested bytes.
"""
import argparse
import os
import re
from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer


class RangeRequestHandler(SimpleHTTPRequestHandler):
    range = None

    def send_head(self):
        path = self.translate_path(self.path)
        if os.path.isdir(path):
            return super().send_head()
        try:
            source = open(path, 'rb')
        except OSError:
            self.send_error(404, 'File not found')
            return None

        size = os.fstat(source.fileno()).st_size
        self.range = None
        header = self.headers.get('Range')
        if header:
            match = re.fullmatch(r'bytes=(\d*)-(\d*)', header.strip())
            if not match or (not match.group(1) and not match.group(2)):
                source.close()
                self.send_error(416, 'Invalid byte range')
                return None
            if match.group(1):
                start = int(match.group(1))
                end = int(match.group(2)) if match.group(2) else size - 1
            else:
                length = int(match.group(2))
                start, end = max(0, size - length), size - 1
            if start >= size or start > end:
                source.close()
                self.send_response(416)
                self.send_header('Content-Range', f'bytes */{size}')
                self.end_headers()
                return None
            end = min(end, size - 1)
            self.range = (start, end)
            self.send_response(206)
            self.send_header('Content-Range', f'bytes {start}-{end}/{size}')
            length = end - start + 1
        else:
            self.send_response(200)
            length = size

        self.send_header('Content-type', self.guess_type(path))
        self.send_header('Content-Length', str(length))
        self.send_header('Accept-Ranges', 'bytes')
        self.send_header('Last-Modified', self.date_time_string(os.fstat(source.fileno()).st_mtime))
        self.end_headers()
        if self.range:
            source.seek(self.range[0])
        return source

    def copyfile(self, source, outputfile):
        if not self.range:
            return super().copyfile(source, outputfile)
        remaining = self.range[1] - self.range[0] + 1
        while remaining:
            chunk = source.read(min(64 * 1024, remaining))
            if not chunk:
                break
            outputfile.write(chunk)
            remaining -= len(chunk)


def main():
    parser = argparse.ArgumentParser()
    parser.add_argument('--directory', default='site')
    parser.add_argument('--port', type=int, default=8766)
    parser.add_argument('--bind', default='127.0.0.1')
    args = parser.parse_args()
    handler = lambda *a, **kw: RangeRequestHandler(*a, directory=args.directory, **kw)
    server = ThreadingHTTPServer((args.bind, args.port), handler)
    print(f'Serving {args.directory} at http://{args.bind}:{args.port}/ with byte ranges', flush=True)
    server.serve_forever()


if __name__ == '__main__':
    main()
