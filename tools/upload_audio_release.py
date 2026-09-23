"""Stage and promote the verified audio archive on the existing GitHub release.

    python tools/upload_audio_release.py --local-check
    python tools/upload_audio_release.py --dry-run --expected-sha SHA256
    python tools/upload_audio_release.py --upload --expected-sha SHA256
    python tools/upload_audio_release.py --restore --backup-id ASSET_ID

The Pages workflow reads the asset named audio.tar.gz from release tag audio. Uploads
are staged under a digest-based name, then the old asset is renamed to a retained
backup before the staged asset receives the canonical name. No asset is deleted.
Credentials come from `git credential fill` in memory and are never printed or saved.
"""
import argparse
import hashlib
import json
from pathlib import Path
import subprocess
import sys
import tarfile
import urllib.error
import urllib.parse
import urllib.request

sys.path.insert(0, str(Path(__file__).resolve().parent))
from course import REGIONS, ROOT

REPO = 'vidarsveen/masala-dabba'
TAG = 'audio'
EXPECTED_RELEASE_ID = 387594904
EXPECTED_OLD_ASSET_ID = 583085994
CANONICAL = 'audio.tar.gz'
ARCHIVE = Path(ROOT) / 'dist' / CANONICAL
API = f'https://api.github.com/repos/{REPO}'


def archive_evidence(path, compare_source=True):
    """Reject a partial or stale archive before any remote mutation."""
    if not path.is_file() or not path.stat().st_size:
        raise RuntimeError(f'Missing archive: {path}')
    names = set()
    for region in REGIONS:
        stem = region['stem']
        keys = [f'en-{n}' for n in range(1, 5)] + ['no-intro'] + [f'no-{n}' for n in range(1, 5)]
        for key in keys:
            for ext in ('.mp3', '.ogg'):
                names.add(f'assets/audio/{stem}/{key}{ext}')
    # English introductions are optional under the owner's retain-English direction,
    # but a partial set would leave inconsistent audiobook navigation.
    english_intros = {f'assets/audio/{r["stem"]}/en-intro{ext}'
                      for r in REGIONS for ext in ('.mp3', '.ogg')}
    digest = hashlib.sha256()
    with path.open('rb') as source:
        for block in iter(lambda: source.read(1024 * 1024), b''):
            digest.update(block)
    with tarfile.open(path, 'r:gz') as archive:
        members = archive.getmembers()
        actual = {member.name for member in members}
        if len(actual) != len(members) or any(not member.isfile() for member in members):
            raise RuntimeError('Archive contains duplicate names or non-file members')
        extras = actual - names - english_intros
        missing = names - actual
        present_english_intros = actual & english_intros
        if missing or extras or (present_english_intros and present_english_intros != english_intros):
            raise RuntimeError(f'Archive mismatch: {len(missing)} missing, {len(extras)} extra, '
                               f'{len(present_english_intros)}/28 English intro media files')
        if compare_source:
            for member in members:
                source = Path(ROOT) / member.name
                if not source.is_file() or source.stat().st_size != member.size:
                    raise RuntimeError(f'Archive/source size mismatch: {member.name}')
                entry = archive.extractfile(member)
                if entry is None:
                    raise RuntimeError(f'Cannot read archive member: {member.name}')
                member_hash = hashlib.sha256()
                source_hash = hashlib.sha256()
                with source.open('rb') as original:
                    while True:
                        a = entry.read(1024 * 1024)
                        b = original.read(1024 * 1024)
                        if not a and not b:
                            break
                        member_hash.update(a)
                        source_hash.update(b)
                if member_hash.digest() != source_hash.digest():
                    raise RuntimeError(f'Archive/source digest mismatch: {member.name}')
    return {'sha256': digest.hexdigest(), 'bytes': path.stat().st_size,
            'media_files': len(actual), 'english_intros': len(present_english_intros) // 2}


def git_token():
    result = subprocess.run(['git', 'credential', 'fill'],
                            input='protocol=https\nhost=github.com\n\n',
                            text=True, capture_output=True)
    if result.returncode:
        raise RuntimeError('Git credential lookup failed; no release change was made')
    fields = dict(line.split('=', 1) for line in result.stdout.splitlines() if '=' in line)
    token = fields.get('password')
    if not token:
        raise RuntimeError('Git credential has no password; no release change was made')
    return token


def request_json(token, method, url, payload=None):
    data = json.dumps(payload).encode('utf-8') if payload is not None else None
    headers = {'Authorization': f'Bearer {token}',
               'Accept': 'application/vnd.github+json',
               'X-GitHub-Api-Version': '2022-11-28',
               'User-Agent': 'masala-dabba-audio-release'}
    if data is not None:
        headers['Content-Type'] = 'application/json'
    request = urllib.request.Request(url, data=data, headers=headers, method=method)
    try:
        with urllib.request.urlopen(request, timeout=90) as response:
            return json.load(response)
    except urllib.error.HTTPError as error:
        raise RuntimeError(f'GitHub {method} returned HTTP {error.code}') from None


def release(token):
    data = request_json(token, 'GET', f'{API}/releases/tags/{TAG}')
    if data.get('id') != EXPECTED_RELEASE_ID or data.get('tag_name') != TAG:
        raise RuntimeError('The audio release identity changed; inspect it before uploading')
    return data


def assets(token):
    # The release is expected to have only a few assets. Pagination still prevents a
    # hidden duplicate from being missed if more are added later.
    found = []
    page = 1
    while True:
        batch = request_json(token, 'GET',
                             f'{API}/releases/{EXPECTED_RELEASE_ID}/assets?per_page=100&page={page}')
        found.extend(batch)
        if len(batch) < 100:
            return found
        page += 1


def one_named(items, name):
    matches = [asset for asset in items if asset.get('name') == name]
    if len(matches) > 1:
        raise RuntimeError(f'Multiple release assets are named {name}')
    return matches[0] if matches else None


def verified_asset(asset, local):
    if asset.get('state') != 'uploaded' or asset.get('size') != local['bytes']:
        raise RuntimeError(f'Staged asset {asset.get("id")} is incomplete or differs in size')
    remote_digest = asset.get('digest')
    if remote_digest:
        if remote_digest.lower() != f'sha256:{local["sha256"]}':
            raise RuntimeError(f'Staged asset {asset.get("id")} has a different SHA-256')
        return 'GitHub SHA-256'
    # Older API responses may omit digest. The public release URL can be read without
    # forwarding the credential to a redirect or storage host.
    url = asset.get('browser_download_url')
    if not url or not url.startswith(f'https://github.com/{REPO}/releases/download/{TAG}/'):
        raise RuntimeError('Staged asset lacks a safe public download URL for digest verification')
    digest = hashlib.sha256()
    count = 0
    request = urllib.request.Request(url, headers={'User-Agent': 'masala-dabba-audio-release'})
    with urllib.request.urlopen(request, timeout=180) as response:
        for chunk in iter(lambda: response.read(1024 * 1024), b''):
            count += len(chunk)
            digest.update(chunk)
    if count != local['bytes'] or digest.hexdigest() != local['sha256']:
        raise RuntimeError('Downloaded staged asset differs from the local archive')
    return 'downloaded SHA-256'


class FileBlocks:
    def __init__(self, path):
        self.path = path

    def __iter__(self):
        with self.path.open('rb') as source:
            yield from iter(lambda: source.read(1024 * 1024), b'')


def upload(token, path, name):
    query = urllib.parse.urlencode({'name': name})
    url = f'https://uploads.github.com/repos/{REPO}/releases/{EXPECTED_RELEASE_ID}/assets?{query}'
    request = urllib.request.Request(url, data=FileBlocks(path), method='POST', headers={
        'Authorization': f'Bearer {token}', 'Accept': 'application/vnd.github+json',
        'X-GitHub-Api-Version': '2022-11-28', 'User-Agent': 'masala-dabba-audio-release',
        'Content-Type': 'application/octet-stream', 'Content-Length': str(path.stat().st_size),
    })
    try:
        with urllib.request.urlopen(request, timeout=900) as response:
            return json.load(response)
    except urllib.error.HTTPError as error:
        raise RuntimeError(f'GitHub upload returned HTTP {error.code}; check for the staged asset before retrying') from None


def rename(token, asset_id, name):
    return request_json(token, 'PATCH', f'{API}/releases/assets/{asset_id}', {'name': name})


def promote(token, local):
    stage_name = f'audio.tar.gz.staged-{local["sha256"][:16]}'
    current = assets(token)
    canonical = one_named(current, CANONICAL)
    staged = one_named(current, stage_name)
    backup_name = f'audio.tar.gz.backup-{EXPECTED_OLD_ASSET_ID}'
    backup = one_named(current, backup_name)
    if canonical and canonical.get('digest') == f'sha256:{local["sha256"]}':
        print(f'Already published: asset {canonical["id"]} matches local SHA-256')
        return
    if canonical and canonical['id'] != EXPECTED_OLD_ASSET_ID:
        raise RuntimeError('Canonical asset ID changed; inspect the release before replacing it')
    if backup and backup['id'] != EXPECTED_OLD_ASSET_ID:
        raise RuntimeError('Backup asset ID differs from the expected old asset')
    if canonical and backup:
        raise RuntimeError('Old asset exists under both canonical and backup names')
    if not canonical and not backup:
        raise RuntimeError('Expected old asset is missing; inspect the release before replacing it')
    if staged is None:
        print(f'Uploading {local["bytes"] / 1e6:.1f} MB as {stage_name}', flush=True)
        try:
            staged = upload(token, ARCHIVE, stage_name)
        except RuntimeError:
            staged = one_named(assets(token), stage_name)
            if staged is None:
                raise
    method = verified_asset(staged, local)
    print(f'Staged asset {staged["id"]} verified by {method}', flush=True)
    if canonical:
        rename(token, canonical['id'], backup_name)
        print(f'Old asset {canonical["id"]} retained as {backup_name}', flush=True)
    try:
        rename(token, staged['id'], CANONICAL)
    except Exception:
        # This recovers the common failure point without deleting either asset.
        latest = assets(token)
        if not one_named(latest, CANONICAL):
            old = one_named(latest, backup_name)
            if old:
                rename(token, old['id'], CANONICAL)
        raise
    final = one_named(assets(token), CANONICAL)
    if not final or final['id'] != staged['id']:
        raise RuntimeError('Promotion response was uncertain; inspect the release asset names')
    verified_asset(final, local)
    print(f'Published asset {final["id"]} as {CANONICAL}; old asset {EXPECTED_OLD_ASSET_ID} is retained for rollback')


def restore(token, backup_id):
    current = assets(token)
    backup_name = f'audio.tar.gz.backup-{backup_id}'
    backup = one_named(current, backup_name)
    if not backup or backup['id'] != backup_id:
        raise RuntimeError(f'Backup asset {backup_id} is not present')
    canonical = one_named(current, CANONICAL)
    if canonical:
        displaced_name = f'audio.tar.gz.replaced-{canonical["id"]}'
        if one_named(current, displaced_name):
            raise RuntimeError(f'{displaced_name} already exists; inspect before rollback')
        rename(token, canonical['id'], displaced_name)
    try:
        rename(token, backup_id, CANONICAL)
    except Exception:
        latest = assets(token)
        if canonical and not one_named(latest, CANONICAL):
            displaced = one_named(latest, f'audio.tar.gz.replaced-{canonical["id"]}')
            if displaced:
                rename(token, displaced['id'], CANONICAL)
        raise
    print(f'Restored asset {backup_id} as {CANONICAL}; displaced asset retained')


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    action = parser.add_mutually_exclusive_group(required=True)
    action.add_argument('--local-check', action='store_true')
    action.add_argument('--dry-run', action='store_true')
    action.add_argument('--upload', action='store_true')
    action.add_argument('--restore', action='store_true')
    parser.add_argument('--backup-id', type=int, help='required with --restore')
    parser.add_argument('--expected-sha', help='SHA-256 from --local-check when uploading under another account')
    args = parser.parse_args()
    if args.restore and not args.backup_id:
        parser.error('--restore requires --backup-id')
    if (args.dry_run or args.upload) and not args.expected_sha:
        parser.error('--dry-run and --upload require --expected-sha from --local-check')
    local = None if args.restore else archive_evidence(ARCHIVE, compare_source=args.local_check)
    if local and args.expected_sha and local['sha256'] != args.expected_sha.lower():
        raise RuntimeError('Archive SHA-256 changed since the source-file verification')
    if local:
        print(f'Local archive: {local["media_files"]} media files, '
              f'{local["english_intros"]} English intros, {local["bytes"] / 1e6:.1f} MB, '
              f'SHA-256 {local["sha256"]}')
    if args.local_check:
        print('LOCAL CHECK: archive and all source files match; no release changes made')
        return
    token = git_token()
    release(token)
    if args.dry_run:
        current = assets(token)
        canonical = one_named(current, CANONICAL)
        stage_name = f'audio.tar.gz.staged-{local["sha256"][:16]}'
        staged = one_named(current, stage_name)
        print(f'Release {EXPECTED_RELEASE_ID}: canonical asset '
              f'{canonical["id"] if canonical else "absent"}; '
              f'staged asset {staged["id"] if staged else "absent"}')
        if canonical and canonical['id'] != EXPECTED_OLD_ASSET_ID:
            raise RuntimeError('Canonical asset ID differs from expected old asset')
        if staged:
            print(f'Existing stage verified by {verified_asset(staged, local)}')
        print('DRY RUN: no release changes made')
    elif args.upload:
        promote(token, local)
    else:
        restore(token, args.backup_id)


if __name__ == '__main__':
    try:
        main()
    except (RuntimeError, OSError, urllib.error.URLError, tarfile.TarError) as error:
        print(f'ERROR: {error}', file=sys.stderr)
        raise SystemExit(1)
