"""Guardrails for local Norwegian loudness correction."""
from pathlib import Path
import os
import sys
import tempfile
import unittest
from unittest.mock import patch

sys.path.insert(0, str(Path(__file__).resolve().parents[1]))
import correct_no_loudness as correction


class LoudnessCorrectionTests(unittest.TestCase):
    def test_acceptance_requires_loudness_and_peak(self):
        self.assertTrue(correction.accept(-19.05, -2.24))
        self.assertTrue(correction.accept(-19.58, -1.58))
        self.assertFalse(correction.accept(-19.0, -0.8))
        self.assertFalse(correction.accept(-20.0, -2.0))

    def test_failed_replacement_restores_original_files(self):
        with tempfile.TemporaryDirectory() as temp:
            folder = Path(temp)
            pairs = []
            for number in range(2):
                staged = folder / f'staged-{number}'
                live = folder / f'live-{number}'
                staged.write_text(f'new-{number}', encoding='utf-8')
                live.write_text(f'old-{number}', encoding='utf-8')
                pairs.append((staged, live))
            real_replace = os.replace
            calls = 0

            def fail_second(source, destination):
                nonlocal calls
                calls += 1
                if calls == 2:
                    raise OSError('simulated replacement failure')
                return real_replace(source, destination)

            with patch.object(correction.os, 'replace', side_effect=fail_second):
                with self.assertRaisesRegex(OSError, 'simulated'):
                    correction.replace_many(pairs, folder)
            self.assertEqual([live.read_text(encoding='utf-8') for _, live in pairs],
                             ['old-0', 'old-1'])


if __name__ == '__main__':
    unittest.main()
