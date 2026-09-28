const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const outDir = path.join(__dirname, "..", "public", "projects", "websites");
fs.mkdirSync(outDir, { recursive: true });

const sites = [
  ["mmverse-clinic", "https://clinic-frontend-pearl.vercel.app/"],
  ["mmverse", "https://mmverse-pearl.vercel.app/"],
  ["venus-laser", "https://mmverse-laser.vercel.app/"],
  ["dronera", "https://www.droneraaviation.com/"],
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    deviceScaleFactor: 1,
  });

  for (const [slug, url] of sites) {
    const file = path.join(outDir, `${slug}.jpg`);
    const page = await context.newPage();
    try {
      console.log(`CAPTURING ${slug} ...`);
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(5000);
      await page.screenshot({ path: file, type: "jpeg", quality: 78, fullPage: false });
      console.log(`OK ${slug} (${Math.round(fs.statSync(file).size / 1024)}kb)`);
    } catch (err) {
      console.log(`FAIL ${slug}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("DONE");
})();
