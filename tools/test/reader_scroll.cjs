/* A new reading must open at the top, even after a long chapter was scrolled. */
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');

(async () => {
  const browser = await chromium.launch({
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    headless: true,
    args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'],
  });
  try {
    const page = await browser.newPage({ viewport: {
      width: Number(process.env.VIEWPORT_WIDTH || 390),
      height: Number(process.env.VIEWPORT_HEIGHT || 844),
    } });
    await page.goto(process.argv[2] || 'http://127.0.0.1:8873/?instant#/IN-HIM/1',
      { waitUntil: 'domcontentloaded' });
    const scroll = page.locator('#reader.open .rscroll');
    await scroll.waitFor();
    const state = () => page.evaluate(() => ({
      hash: location.hash,
      title: document.querySelector('#reader h1')?.textContent,
      top: document.querySelector('#reader .rscroll').scrollTop,
      height: document.querySelector('#reader .rscroll').scrollHeight,
      viewport: document.querySelector('#reader .rscroll').clientHeight,
      progress: document.querySelector('#reader .rprog i').style.width,
      marked: document.querySelector('#reader .done')?.classList.contains('is-done'),
    }));
    await scroll.evaluate(el => { el.scrollTop = el.scrollHeight; });
    const first = await state();
    await page.locator('#reader .rnext a').last().click();
    await page.waitForURL(/#\/IN-HIM\/2$/);
    await page.waitForTimeout(600);
    const next = await state();
    await scroll.evaluate(el => { el.scrollTop = el.scrollHeight; });
    await page.locator('#reader .rbar .back').click();
    await page.waitForURL(/#\/IN-HIM$/);
    await page.locator('#sheet ol.lessons li.readable[data-i="2"]').click();
    await page.waitForURL(/#\/IN-HIM\/3$/);
    await page.waitForTimeout(600);
    const fromSheet = await state();
    console.log(JSON.stringify({ first, next, fromSheet }));
    if (first.top < 100 || next.top > 2 || fromSheet.top > 2 ||
        next.marked || fromSheet.marked)
      throw new Error('A new reading did not start at the top');
  } finally {
    await browser.close();
  }
})().catch(error => { console.error(error); process.exitCode = 1; });
