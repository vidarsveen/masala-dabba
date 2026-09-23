/* Check real English or Norwegian audio in the actual site build at a phone viewport. */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

(async () => {
  const url = process.argv[2] || 'http://127.0.0.1:8873/?instant';
  const lang = process.argv[3] || 'en';
  if (!['en', 'no'].includes(lang)) throw new Error(`Unsupported language: ${lang}`);
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader',
           '--autoplay-policy=no-user-gesture-required'],
  });
  try {
    const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
    await page.addInitScript(() => {
      const OriginalAudio = window.Audio;
      window.__realAudio = [];
      window.Audio = function(src) {
        const audio = new OriginalAudio(src);
        window.__realAudio.push(audio);
        return audio;
      };
    });
    const audioResponses = [];
    page.on('response', response => {
      if (response.url().endsWith(`/${lang}-1.mp3`)) audioResponses.push(response.status());
    });
    await page.goto(url, { waitUntil: 'domcontentloaded' });
    await page.locator(`#lang button[data-lang='${lang}']`).click();
    await page.evaluate(() => { location.hash = '#/IN-HIM/1'; });
    await page.locator('#reader.open .listen').waitFor();
    await page.locator('#reader .listen').click();
    await page.waitForFunction(() => {
      const audio = window.__realAudio.at(-1);
      return audio && audio.readyState >= 2 && Number.isFinite(audio.duration) && audio.duration > 60;
    }, null, { timeout: 30000 });
    const before = await page.locator('#reader .rplayer .time').textContent();
    await page.locator('#reader .rplayer .fwd15').click();
    await page.waitForFunction(() => Object.keys(localStorage)
      .some(key => key.startsWith('iit-audio')), null, { timeout: 10000 });
    const result = await page.evaluate(() => {
      const audio = window.__realAudio.at(-1);
      return {
        src: audio.currentSrc,
        duration: audio.duration,
        currentTime: audio.currentTime,
        paused: audio.paused,
        saved: Object.keys(localStorage).filter(k => k.startsWith('iit-audio')),
      };
    });
    if (!result.src.endsWith(`/assets/audio/himalaya/${lang}-1.mp3`)) throw new Error(`Wrong audio: ${result.src}`);
    if (result.currentTime < 10) throw new Error(`Seek failed: ${result.currentTime}`);
    if (!result.saved.length) throw new Error('Listening position was not saved');
    if (!audioResponses.some(status => status === 206)) throw new Error(`Expected HTTP 206, got ${audioResponses}`);
    console.log(JSON.stringify({ status: 'PASS', lang, duration: result.duration,
      afterSeek: result.currentTime, before, audioResponses }));
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
