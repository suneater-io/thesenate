import puppeteer from 'C:/Users/grant.hansen/AppData/Local/Temp/puppeteer-test/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js';
const browser = await puppeteer.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', args: ['--no-sandbox'] });
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000/creative/', { waitUntil: 'networkidle0' });
await page.waitForTimeout(1000);
const el = await page.$('#bandTrack');
if (el) {
  const box = await el.boundingBox();
  await page.screenshot({ path: 'g:/My Drive/thesenate/temporary screenshots/player-closeup.png', clip: { x: 0, y: Math.max(0, box.y - 100), width: 1440, height: 300 } });
  console.log('captured player at y=' + box.y);
} else {
  console.log('bandTrack element not found');
  await page.screenshot({ path: 'g:/My Drive/thesenate/temporary screenshots/player-closeup.png' });
}
await browser.close();
