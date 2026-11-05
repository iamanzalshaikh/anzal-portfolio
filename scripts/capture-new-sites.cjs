const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const outDir = path.join(__dirname, "..", "public", "projects", "websites");
fs.mkdirSync(outDir, { recursive: true });

const sites = [
  ["westmere", "https://datascrapper-web-cp9thj-5a5ac5-217-216-85-80.sslip.io/login"],
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
      await page.getByText("Welcome Back").waitFor({ timeout: 20000 }).catch(() => {});
      await page.waitForTimeout(1500);
      // Dismiss cookie/ad modals so the hero is visible
      for (const sel of [
        'button:has-text("Later")',
        'button:has-text("Close")',
        '[aria-label="Close"]',
        'button:has-text("×")',
        'button:has-text("x")',
      ]) {
        const btn = page.locator(sel).first();
        if (await btn.isVisible().catch(() => false)) {
          await btn.click({ timeout: 2000 }).catch(() => {});
          await page.waitForTimeout(800);
          break;
        }
      }
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
