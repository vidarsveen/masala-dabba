# Punjab Puck audition — generated, awaiting listener review

This short pronunciation sample is independent of the unfinished full readings.
It is not a production recording or evidence of approved Indian pronunciation until heard.
Reference: `docs/italy-transfer/puck-voice.md` and the existing Toscana generator.

## Input direction

Generate speech for the transcript below, reading only the transcript aloud.
Language: Norwegian Bokmål, with natural Norwegian pronunciation and an Oslo-area accent, not Danish or Swedish.
Delivery: a warm, calm adult documentary narrator. Use a measured conversational pace, natural Norwegian intonation and restrained emphasis. Keep the voice consistent. Brief pause after the title. Pronounce Indian place, dish and ingredient names using their appropriate pronunciation, then return to Norwegian. Read every word without additions or paraphrasing.

TRANSCRIPT:

Punjab og Delhi.

I Amritsar serveres sarson da saag med makki di roti. Sennepsbladene kokes møre, og en klump smør smelter over retten. På bordet kan det også stå dal makhani og et glass lassi.

Krydderne har ulike oppgaver. Ajwain lukter av timian. Kasuri methi knuses mellom håndflatene over gryta, mens amchur gir syre uten å tilføre væske. Garam masala tilsettes gjerne mot slutten.

Navn som Ludhiana, Chandigarh, Haryana og Daryaganj skal være tydelige uten at rytmen i den norske setningen stopper opp. Ved Harmandir Sahib i Amritsar sitter gjestene sammen og spiser i langaren.

## Generation and listening checklist

- Verify provider model availability and current price before the request. Use the model
  `google/gemini-3.1-flash-tts-preview`, Puck, PCM 24 kHz / 16-bit mono, MP3 48 kbit/s,
  tempo 1.0 and final -19 LUFS, matching the approved reference.
- Prepend direction before TRANSCRIPT; do not assume a separate instructions parameter
  is equivalent. This sample fits within one 1,800-character transcript chunk.
- Output only to ignored `voicelab/puck-punjab/`; keep credentials in ignored local
  configuration. Save exact input, direction, generation ID, measured duration and cost.
- Listen alongside Toscana for Norwegian accent, pace, emphasis and voice consistency;
  check every Indian name above and complete word coverage. This one-chunk sample cannot
  validate chunk joins: use a two-chunk passage only after the name sample passes.
- Record listener findings here before scaling.

## Preparation status — 22 September 2026

The owner authorized this short preview. `tools/puck_preview.py` prepares the exact request
locally and, only with `--generate`, makes the single paid provider request. It writes the exact
input, normalized MP3 and metadata to ignored `voicelab/puck-punjab/`. The metadata includes the
provider generation ID, measured cost, duration, loudness before and after normalization, hashes
and encoding settings. An offline regression test freezes the exact input hash and confirms that
the full 95-word sample fits in one request.

## Generated preview — 22 September 2026

After the owner explicitly approved sending this exact sample to OpenRouter, one Puck request
completed. The normalized file is ignored at `voicelab/puck-punjab/punjab-puck-preview.mp3`, with
the exact input and generation metadata beside it. The provider generation ID is stored only in
that local metadata file. Reported cost was $0.02627. The 95-word file lasts 52.0 seconds, about
110 words per minute. Two-pass normalization moved it from −22.91 to −19.46 LUFS; measured true
peak is −1.42 dB. `ffprobe` identifies a mono MP3 and full decode completed without errors.

Listener review of the Norwegian accent, pace, every Indian name and word coverage is pending.
This one-chunk sample does not test chunk joins. No full-course narration was requested.
