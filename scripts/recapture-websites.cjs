const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const outDir = path.join(__dirname, "..", "public", "projects", "websites");

const sites = [
  ["ai-interview", "https://ai-interview-5gz6.vercel.app/"],
  ["wearup", "https://clothing-frontend-zqt8.onrender.com/"],
  ["apexpos", "https://pos-frontend-rudu.onrender.com/"],
  ["jkf", "https://jkf-final.onrender.com/"],
  ["trishaan", "https://royalenfield-wr5o.onrender.com/"],
  ["letscrack", "https://letscrack-frontend.onrender.com/"],
  ["llm-chat", "https://ailmm-frontend.onrender.com/"],
  ["digital-twin", "https://vibration-q6co.onrender.com/"],
  ["shifra", "https://upload-qvpb.onrender.com/"],
  ["smart-notes", "https://notes-frontendtext-notes-frontend-my.onrender.com/"],
  ["ai-ecommerce", "https://ai-frontend-9i66.onrender.com"],
  ["airbnb", "https://airbnb-frontend-ucog.onrender.com"],
  ["employee", "https://employemanagamentsystem1.onrender.com"],
  ["egc-shop", "https://shop.egcindia.in/"],
  ["nisha", "https://nisha-frontend.vercel.app/"],
  ["econs", "https://econs.egcindia.in/"],
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
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 90000 });
      // Cold-start hosts (Render) need time to wake
      for (let i = 0; i < 12; i++) {
        await page.waitForTimeout(4000);
        const body = ((await page.locator("body").innerText().catch(() => "")) || "").toLowerCase();
        const title = ((await page.title().catch(() => "")) || "").toLowerCase();
        const bad =
          body.includes("service waking up") ||
          body.includes("application loading") ||
          body.includes("incoming http request") ||
          (body.trim() === "loading..." || body.trim().startsWith("loading")) ||
          title.includes("loading");
        if (!bad) break;
        console.log(`  still waking (${i + 1})...`);
        try {
          await page.reload({ waitUntil: "domcontentloaded", timeout: 60000 });
        } catch {}
      }
      await page.waitForTimeout(2000);
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
