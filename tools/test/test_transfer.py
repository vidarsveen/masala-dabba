"""Offline regression checks for India's initial transfer tooling."""
import json
from pathlib import Path
import re
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import audiobook
import audio_format
import narrate
import narration_plan
import puck_preview
import tts
from course import REGIONS


class TransferTests(unittest.TestCase):
    def test_bilingual_reading_structure_and_image_order_match(self):
        root = Path(narrate.ROOT)
        for region in REGIONS:
            stem = region['stem']
            english = narrate.lessons_from(root / 'content' / f'{stem}.js')
            norwegian = narrate.lessons_from(root / 'content' / f'{stem}.no.js')
            self.assertEqual(len(english), 4, stem)
            self.assertEqual(len(norwegian), 4, stem)
            for number, (en, no) in enumerate(zip(english, norwegian), 1):
                label = f'{stem}-{number}'
                self.assertTrue(en.get('title') and no.get('title'), label)
                self.assertTrue(en.get('summary') and no.get('summary'), label)
                en_images = re.findall(r'data-img=["\']([^"\']+)', en['html'])
                no_images = re.findall(r'data-img=["\']([^"\']+)', no['html'])
                self.assertEqual(en_images, no_images, label)
                self.assertEqual(en['html'].count('<h2>'), no['html'].count('<h2>'), label)

    def test_indian_export_order_and_missing_recordings(self):
        order = audiobook.course_order()
        self.assertEqual([(c, s) for c, s, _ in order],
                         [(r['code'], r['stem']) for r in REGIONS])
        self.assertEqual(order[1][2], 'Punjab & Delhi')
        with patch.object(audiobook.os.path, 'exists', return_value=False):
            tracks, missing = audiobook.track_list('no')
        self.assertEqual(tracks, [])
        self.assertEqual(len(missing), 70)
        self.assertEqual(missing[0], 'himalaya no-intro')
        self.assertEqual(missing[-1], 'kerala no-4')
        self.assertEqual(audiobook.course_order('no')[1][2], 'Punjab og Delhi')

    def test_export_includes_intro_then_four_stable_readings_per_region(self):
        with patch.object(audiobook.os.path, 'exists', return_value=True), \
             patch.object(audiobook.tts, 'duration', return_value=12.5):
            tracks, missing = audiobook.track_list('no')
        self.assertEqual(missing, [])
        self.assertEqual(len(tracks), 70)
        self.assertEqual([t['id'] for t in tracks[:5]], [
            'IN-HIM:intro', 'IN-HIM:reading-1', 'IN-HIM:reading-2',
            'IN-HIM:reading-3', 'IN-HIM:reading-4'])
        self.assertEqual(tracks[5]['id'], 'IN-PUN:intro')
        self.assertEqual(tracks[5]['region'], 'Punjab og Delhi')

    def test_legacy_settings_fail_even_if_script_is_fresh(self):
        old = {'intro': 'title', 'drop': 'facts,recap'}
        self.assertEqual(len(audio_format.problems(old)), 2)
        current = {'intro': 'title', 'drop': 'headings,tasting,recap,facts', 'outro': 'none'}
        self.assertEqual(audio_format.problems(current), [])
        self.assertTrue(audio_format.problems(None))
        self.assertTrue(audio_format.problems({**current, 'drop': None}))

    def test_absent_entry_and_absent_manifest_fail(self):
        with tempfile.TemporaryDirectory() as root:
            folder = Path(root) / 'assets/audio/punjab'
            folder.mkdir(parents=True)
            (folder / 'manifest.json').write_text(json.dumps({}), encoding='utf-8')
            checked, failures = audio_format.audit(root, ['punjab', 'kerala'])
        self.assertEqual(checked, 8)
        self.assertEqual(len(failures), 9)

    def test_standard_script_contains_title_and_prose_only(self):
        lesson = {'title': 'Title', 'summary': 'Summary sentinel', 'html': '''
            <h2>Heading sentinel</h2><p>Spoken paragraph.</p>
            <figure><figcaption>Caption sentinel</figcaption></figure>
            <aside class="facts">Facts sentinel</aside>
            <aside class="tasting"><table><tr><th>Table</th><td>sentinel</td></tr></table></aside>
            <div class="recap">Recap sentinel</div>'''}
        for lang in ('en', 'no'):
            script = narrate.to_script(lesson, lang, intro=narrate.STANDARD_INTRO,
                                       drop=narrate.STANDARD_DROP.split(','), outro=narrate.STANDARD_OUTRO)
            self.assertEqual(script, 'Title.\n\nSpoken paragraph.')

    def test_puck_direction_is_repeated_per_transcript_chunk(self):
        first = tts.prefixed_transcript('Første avsnitt.', narrate.PUCK_DIRECTION)
        second = tts.prefixed_transcript('Andre avsnitt.', narrate.PUCK_DIRECTION)
        for request, transcript in ((first, 'Første avsnitt.'), (second, 'Andre avsnitt.')):
            self.assertTrue(request.startswith('Generate speech for the transcript below'))
            self.assertEqual(request.count('TRANSCRIPT:'), 1)
            self.assertTrue(request.endswith(transcript))

    def test_punjab_preview_is_one_exact_authorized_request(self):
        direction, transcript = puck_preview.source_parts()
        pieces = tts.chunks(transcript, tts.CHUNK_BY_MODEL[puck_preview.MODEL])
        self.assertEqual(pieces, [transcript])
        exact_input = tts.prefixed_transcript(transcript, direction)
        self.assertEqual(exact_input.count('TRANSCRIPT:'), 1)
        self.assertIn('Language: Norwegian Bokmål', exact_input)
        self.assertIn('Pronounce Indian place, dish and ingredient names', exact_input)
        for name in ('Amritsar', 'sarson da saag', 'makki di roti', 'Ajwain',
                     'Kasuri methi', 'Ludhiana', 'Chandigarh', 'Haryana',
                     'Daryaganj', 'Harmandir Sahib'):
            self.assertIn(name, transcript)
        self.assertEqual(puck_preview.sha256(exact_input),
                         'b8f7a0a8138862f79ab39fa5d53e4a4a1c873c880061ebf3e4f81617f6ad91f5')

    def test_production_plan_freezes_140_unique_final_scripts(self):
        plan = narration_plan.build_plan()
        tracks = plan['tracks']
        self.assertEqual(len(tracks), 140)
        self.assertEqual(len({(t['lang'], t['id']) for t in tracks}), 140)
        self.assertEqual(plan['totals']['en']['tracks'], 70)
        self.assertEqual(plan['totals']['no']['tracks'], 70)
        self.assertEqual(tracks[0]['id'], 'IN-HIM:intro')
        self.assertEqual(tracks[1]['id'], 'IN-HIM:reading-1')
        self.assertTrue(all(len(t['script_sha256']) == 64 for t in tracks))
        self.assertEqual(plan['format'], {
            'intro': 'title', 'drop': 'facts,recap,tasting,headings', 'outro': 'none'})


if __name__ == '__main__':
    unittest.main()
