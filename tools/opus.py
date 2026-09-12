"""Encode the narration MP3s to Opus (Ogg) at a low bitrate for the hosted single-file page.

Usage: python tools/opus.py <region> [bitrate_kbps]
Writes assets/audio/<region>/<key>.ogg next to each <key>.mp3 and records sizes in manifest.json.
"""
import json, os, subprocess, sys
import imageio_ffmpeg
ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
region = sys.argv[1]; kbps = sys.argv[2] if len(sys.argv) > 2 else '12'
d = os.path.join(ROOT, 'assets', 'audio', region)
ff = imageio_ffmpeg.get_ffmpeg_exe()
mp = os.path.join(d, 'manifest.json'); manifest = json.load(open(mp, encoding='utf-8'))
for key in sorted(manifest):
    src = os.path.join(d, key + '.mp3'); dst = os.path.join(d, key + '.ogg')
    subprocess.run([ff, '-y', '-loglevel', 'error', '-i', src, '-ac', '1', '-c:a', 'libopus', '-b:a', f'{kbps}k', '-application', 'voip', '-frame_duration', '40', '-vbr', 'on', dst], check=True)
    manifest[key]['ogg_bytes'] = os.path.getsize(dst)
    print(key, manifest[key]['ogg_bytes'] // 1024, 'KB')
json.dump(manifest, open(mp, 'w', encoding='utf-8'), indent=1)
