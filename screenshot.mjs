import { createRequire } from 'module';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const require = createRequire(import.meta.url);
const puppeteer = require('C:/Usersgrant.hansenAppDataLocalTemppuppeteer-test/node_modules/puppeteer/lib/cjs/puppeteer/puppeteer.js');

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || 'http://localhost:3000';
const label = process.argv[3] || '';

const screenshotDir = path.join(__dirname, 'temporary screenshots');
if (!fs.existsSync(screenshotDir)) fs.mkdirSync(screenshotDir, { recursive: true });

let n = 1;
while (fs.existsSync(path.join(screenshotDir, `screenshot-${n}${label ? '-' + label : ''}.png`))) n++;
const filename = `screenshot-${n}${label ? '-' + label : ''}.png`;
const filepath = path.join(screenshotDir, filename);

const browser = await puppeteer.launch({
  executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage'],
});

const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 2 });
await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
await new Promise(r => setTimeout(r, 1000));

// Force all reveal elements visible (for screenshot purposes)
await page.evaluate(() => {
  document.querySelectorAll('.reveal').forEach(el => {
    el.classList.add('vis');
  });
  // Also trigger stagger on grid children
  document.querySelectorAll('.wcard, .stack-item').forEach((child, i) => {
    child.style.transitionDelay = '0ms';
  });
});

await new Promise(r => setTimeout(r, 800));
await page.screenshot({ path: filepath, fullPage: true });
await browser.close();

console.log(`Saved: temporary screenshots/${filename}`);
