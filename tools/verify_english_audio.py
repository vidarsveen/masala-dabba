"""Verify all 70 free English Edge recordings against the current course text.

    python tools/verify_english_audio.py --allow-incomplete
    python tools/verify_english_audio.py --decode --loudness

This compares the actual transcript files with regenerated reading/intro scripts,
checks the spoken format and manifest against the files, and optionally decodes and
measures every MP3 and OGG. It does not use a speech service or change any files.
"""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess

from course import REGIONS, ROOT
import narrate
import normalise
import record_intros
import tts

AUDIO = Path(ROOT) / 'assets' / 'audio'
VOICE = narrate.VOICES['en']


def decode(path):
    result = subprocess.run(
        [tts.ffmpeg(), '-v', 'error', '-xerror', '-i', str(path), '-f', 'null', '-'],
        capture_output=True, text=True)
    return result.stderr.strip() if result.returncode else None


def audit_track(stem, key, expected, manifest, decode_audio, measure_loudness):
    label = f'{stem}/{key}'
    folder = AUDIO / stem
    files = {suffix: folder / f'{key}{suffix}'
             for suffix in ('.txt', '.mp3', '.lo.mp3', '.ogg')}
    missing = [suffix for suffix, path in files.items()
               if not path.is_file() or not path.stat().st_size]
    if missing:
        return [f'{label}: missing {", ".join(missing)}'], []
    errors, warnings = [], []
    entry = manifest.get(key)
    if not isinstance(entry, dict):
        return [f'{label}: missing manifest entry'], []
    try:
        script = files['.txt'].read_text(encoding='utf-8')
        if script.strip() != expected.strip():
            errors.append(f'{label}: transcript does not match current course text')
        if entry.get('voice') != VOICE:
            errors.append(f'{label}: voice is not the free English Edge voice')
        if entry.get('cost') is not None or entry.get('delivery') == 'puck':
            errors.append(f'{label}: manifest identifies a paid delivery')
        if key == 'en-intro':
            if entry.get('kind') != 'region-introduction':
                errors.append(f'{label}: introduction kind missing')
            if entry.get('script_sha256') != hashlib.sha256(script.encode('utf-8')).hexdigest():
                errors.append(f'{label}: introduction script hash differs')
        else:
            settings = (('intro', narrate.STANDARD_INTRO),
                        ('drop', narrate.STANDARD_DROP),
                        ('outro', narrate.STANDARD_OUTRO))
            for field, value in settings:
                if entry.get(field) != value:
                    errors.append(f'{label}: nonstandard spoken format ({field})')
        for suffix, field in (('.mp3', 'bytes'), ('.lo.mp3', 'lo_bytes'), ('.ogg', 'ogg_bytes')):
            if entry.get(field) != files[suffix].stat().st_size:
                errors.append(f'{label}: {suffix} size differs from manifest')
        seconds = tts.duration(str(files['.mp3']))
        if seconds is None or seconds < 5:
            errors.append(f'{label}: invalid MP3 duration')
        elif entry.get('seconds') is None or abs(seconds - float(entry['seconds'])) > 1:
            errors.append(f'{label}: duration differs from manifest')
        elif key != 'en-intro':
            wpm = len(script.split()) * 60 / seconds
            if wpm < 95 or wpm > 190:
                warnings.append(f'{label}: unusual pace {wpm:.0f} wpm; listen for omissions')
        if decode_audio:
            for suffix in ('.mp3', '.ogg'):
                issue = decode(files[suffix])
                if issue:
                    errors.append(f'{label}: {suffix} decode failed: {issue[:160]}')
        if measure_loudness:
            stats = normalise.measure(str(files['.mp3']))
            if not stats:
                errors.append(f'{label}: loudness cannot be measured')
            else:
                loudness = float(stats['input_i'])
                if abs(loudness + 19) > 1.5:
                    errors.append(f'{label}: {loudness:.1f} LUFS, target -19')
    except (OSError, ValueError, TypeError, KeyError) as error:
        errors.append(f'{label}: invalid file or metadata: {error}')
    return errors, warnings


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('regions', nargs='*', choices=[r['stem'] for r in REGIONS])
    parser.add_argument('--allow-incomplete', action='store_true')
    parser.add_argument('--decode', action='store_true')
    parser.add_argument('--loudness', action='store_true')
    args = parser.parse_args()
    sources = record_intros.sources()
    selected = [r for r in REGIONS if not args.regions or r['stem'] in args.regions]
    expected_count = 5 * len(selected)
    checked, errors, warnings = 0, [], []
    for region in selected:
        stem = region['stem']
        manifest_path = AUDIO / stem / 'manifest.json'
        try:
            manifest = json.loads(manifest_path.read_text(encoding='utf-8'))
        except (OSError, ValueError) as error:
            errors.append(f'{stem}: cannot read manifest: {error}')
            continue
        name, intro = sources[(stem, 'en')]
        expected = {'en-intro': record_intros.script_for(name, intro)}
        lessons = narrate.lessons_from(Path(ROOT) / 'content' / f'{stem}.js')
        if len(lessons) != 4:
            errors.append(f'{stem}: expected four English readings, found {len(lessons)}')
            continue
        for number, lesson in enumerate(lessons, 1):
            expected[f'en-{number}'] = narrate.to_script(
                lesson, 'en', narrate.STANDARD_INTRO,
                tuple(narrate.STANDARD_DROP.split(',')), narrate.STANDARD_OUTRO)
        for key, script in expected.items():
            problems, notes = audit_track(stem, key, script, manifest,
                                          args.decode, args.loudness)
            checked += not problems
            errors.extend(problems)
            warnings.extend(notes)
    print(f'English Edge: {checked}/{expected_count} complete, {expected_count-checked} incomplete')
    for error in errors:
        print('ISSUE ' + error)
    for warning in warnings:
        print('WARNING ' + warning)
    if checked == expected_count and not errors:
        print('PASS: every English recording matches current text, files and manifest')
        print('Human pronunciation and completeness listening remain separate checks.')
        return 0
    serious = [error for error in errors if ': missing ' not in error]
    return 0 if args.allow_incomplete and not serious else 1


if __name__ == '__main__':
    raise SystemExit(main())
