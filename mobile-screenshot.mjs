import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const puppeteer = require('C:/Usersgrant.hansenAppDataLocalTemppuppeteer-test/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js');

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});

const page = await browser.newPage();
await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 2 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1200));
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => el.classList.add('vis'));
});
await new Promise(r => setTimeout(r, 500));
await page.screenshot({ path: path.join(__dirname, 'temporary screenshots', 'mobile-full.png'), fullPage: true });
await browser.close();
console.log('Saved: temporary screenshots/mobile-full.png');
