"""Verify that the export command writes playable audio with navigable chapters."""
import json
from pathlib import Path
import shutil
import subprocess
import sys
import tempfile
import unittest

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import audiobook
import tts


class AudiobookExportTests(unittest.TestCase):
    def test_m4b_contains_intro_and_reading_chapters(self):
        probe = shutil.which('ffprobe')
        if not probe:
            self.skipTest('ffprobe is unavailable')
        with tempfile.TemporaryDirectory() as temp:
            folder = Path(temp)
            tracks = []
            for number, (name, title, tone) in enumerate((
                ('intro', 'Himalayan Kitchens', '440'),
                ('reading-1', 'The Valley Table', '660'),
            )):
                source = folder / f'{name}.mp3'
                subprocess.run([
                    tts.ffmpeg(), '-y', '-loglevel', 'error', '-f', 'lavfi',
                    '-i', f'sine=frequency={tone}:sample_rate=24000',
                    '-t', '1', '-ac', '1', '-b:a', '48k', str(source),
                ], check=True)
                tracks.append({
                    'id': f'IN-HIM:{name}', 'file': str(source), 'region': 'Himalayan Kitchens',
                    'n': number, 'title': title, 'chapter': title, 'seconds': tts.duration(str(source)),
                })
            output = folder / 'sample.m4b'
            audiobook.build(tracks, str(output), 'en', gap=0)
            result = subprocess.run([
                probe, '-v', 'error', '-show_entries',
                'format=duration:chapter=start_time,end_time:chapter_tags=title',
                '-of', 'json', str(output),
            ], check=True, capture_output=True, text=True)
            data = json.loads(result.stdout)
            chapters = data['chapters']
            self.assertEqual(len(chapters), 2)
            self.assertEqual([chapter['tags']['title'] for chapter in chapters],
                             ['Himalayan Kitchens', 'The Valley Table'])
            self.assertGreater(float(chapters[1]['start_time']), 0.8)
            self.assertGreater(float(data['format']['duration']), 1.8)


if __name__ == '__main__':
    unittest.main()
