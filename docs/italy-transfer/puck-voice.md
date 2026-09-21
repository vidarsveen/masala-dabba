# Approved Norwegian delivery — Puck

The owner approved the sound of the Toscana audition in September 2026 and chose to update India
before replacing Italy's course audio. Approval covers this delivery preference; the India course
has not yet been recorded with it. English voice changes were not requested.

## Reproducible reference

- Provider route: OpenRouter audio/speech.
- Model used: `google/gemini-3.1-flash-tts-preview`; voice `Puck`.
- Reference files: `C:/Users/vidar/PycharmProjects/3dgame/voicelab/puck-toscana/`.
- Generator: `C:/Users/vidar/PycharmProjects/3dgame/voicelab/make-puck-toscana.py`.
- Full audition: `toscana-puck-complete.mp3`; individual intro and four readings also available.
- These files are local and ignored by git. Do not assume they exist on another machine.

The tested direction was included in the input before a TRANSCRIPT delimiter:

> Generate speech for the transcript below, reading only the transcript aloud.
> Language: Norwegian Bokmål, with natural Norwegian pronunciation and an Oslo-area accent, not Danish or Swedish.
> Delivery: a warm, calm adult documentary narrator. Use a measured conversational pace, natural Norwegian intonation and restrained emphasis. Keep the voice consistent. Brief pause after the title. Pronounce Italian wine and grape names in Italian, then return to Norwegian. Read every word without additions or paraphrasing.

For India, adapt the Italian-name sentence to the Indian place, dish and ingredient names in
the transcript, using their appropriate pronunciation, then returning to Norwegian. Audition
this change; a prompt cannot guarantee pronunciation. Keep the rest of the approved direction.

## Production settings used in the audition

PCM 24 kHz, 16-bit mono; MP3 48 kbit/s; no post-generation tempo change (1.0).
Paragraph/sentence chunks around 1,800 characters with direction repeated per request.
Two concurrent requests, 600-second timeout, at most two retries, completed chunks cached.
Normalise finished recordings to -19 LUFS, then encode Opus. Preserve scripts and generation
metadata, never credentials. Word-rate checks are only truncation warnings, not proof every
word was spoken. Listen for omissions, repetitions, accent changes and joins.

Toscana was about 21 minutes. Its metadata reported $0.522205 with incomplete cost accounting;
this is not a verified total or an India price quote. Check provider availability and current
pricing before generation. Configure an ignored local API key when needed; no secret was copied
as part of this setup.