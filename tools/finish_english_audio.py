"""Normalize and encode final free English narration without touching Norwegian audio.

    python tools/finish_english_audio.py punjab northeast

Requires each region's en-intro and en-1..4 MP3s to have been generated. Refreshes
the low-bitrate MP3 and OGG from each final full MP3, then updates manifest sizes.
Safe to rerun after an interrupted normalization/encoding pass.
"""
import argparse
import json
import os
from pathlib import Path
import subprocess

from course import REGIONS, ROOT
import narrate
import normalise
import tts


def encode_ogg(source, destination):
    temporary = destination.with_name(destination.stem + '.tmp.ogg')
    subprocess.run([tts.ffmpeg(), '-y', '-loglevel', 'error', '-i', str(source),
                    '-ac', '1', '-c:a', 'libopus', '-b:a', '12k',
                    '-application', 'voip', '-frame_duration', '40', '-vbr', 'on',
                    str(temporary)], check=True)
    os.replace(temporary, destination)


def finish(stem):
    folder = Path(ROOT) / 'assets' / 'audio' / stem
    manifest_path = folder / 'manifest.json'
    manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
    for key in ['en-intro'] + [f'en-{number}' for number in range(1, 5)]:
        mp3 = folder / f'{key}.mp3'
        low = folder / f'{key}.lo.mp3'
        ogg = folder / f'{key}.ogg'
        if key not in manifest or not mp3.is_file() or not mp3.stat().st_size:
            raise RuntimeError(f'{stem}/{key}: missing recording or manifest entry')
        stats = normalise.measure(str(mp3))
        if not stats:
            raise RuntimeError(f'{stem}/{key}: cannot measure loudness')
        before = float(stats['input_i'])
        if abs(before - normalise.TARGET_LUFS) >= 0.5:
            normalise.apply(str(mp3), stats)
        low_temp = folder / f'{key}.lo.tmp.mp3'
        narrate.compress(str(mp3), str(low_temp))
        os.replace(low_temp, low)
        encode_ogg(mp3, ogg)
        entry = manifest[key]
        entry.update(seconds=narrate.duration(str(mp3)), bytes=mp3.stat().st_size,
                     lo_bytes=low.stat().st_size, ogg_bytes=ogg.stat().st_size)
        temporary = manifest_path.with_suffix('.json.tmp')
        temporary.write_text(json.dumps(manifest, ensure_ascii=False, indent=1) + '\n',
                             encoding='utf-8')
        os.replace(temporary, manifest_path)
        after_stats = normalise.measure(str(mp3))
        after = float(after_stats['input_i']) if after_stats else float('nan')
        print(f'{stem}/{key}: {before:.1f} -> {after:.1f} LUFS, '
              f'{entry["seconds"]} s', flush=True)


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('regions', nargs='+', choices=[r['stem'] for r in REGIONS])
    args = parser.parse_args()
    for stem in args.regions:
        finish(stem)


if __name__ == '__main__':
    main()
