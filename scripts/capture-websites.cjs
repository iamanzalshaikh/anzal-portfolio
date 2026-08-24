const { chromium } = require("playwright");
const path = require("path");
const fs = require("fs");

const outDir = path.join(__dirname, "..", "public", "projects", "websites");
fs.mkdirSync(outDir, { recursive: true });

const sites = [
  ["egc-shop", "https://shop.egcindia.in/"],
  ["clawbot", "https://clawbot-ai-lead.vercel.app/login"],
  ["restaurant-qr", "https://resturant-qr-saas.vercel.app/"],
  ["ai-interview", "https://ai-interview-5gz6.vercel.app/"],
  ["wearup", "https://clothing-frontend-zqt8.onrender.com/"],
  ["apexpos", "https://pos-frontend-rudu.onrender.com/"],
  ["schoolfms", "https://schoolfms.com/"],
  ["vedic-success", "https://www.vedicsuccess.com/"],
  ["e8-productions", "https://www.e8productions.com/"],
  ["econs", "https://econs.egcindia.in/"],
  ["goshah", "https://goshahrental.netlify.app/"],
  ["elysian", "https://69ff8d6bc3bdc61c33c7dfff--calm-kitsune-2dc38e.netlify.app/"],
  ["hiranandani", "https://69d79d5d77b5e3567bda1fce--euphonious-lokum-8ffe2b.netlify.app/"],
  ["cimdr", "https://glittery-kulfi-0fb52f.netlify.app/"],
  ["carbazar", "https://dancing-cajeta-881cb6.netlify.app/"],
  ["webyapar", "https://webyaparsolutions.com/"],
  ["webcastle", "https://willowy-heliotrope-8af7b2.netlify.app/"],
  ["letscrack", "https://letscrack-frontend.onrender.com/"],
  ["aecci", "https://www.aecci.org.in/"],
  ["outfit-theory", "https://outfit-theory-frontend.netlify.app/"],
  ["nisha", "https://nisha-frontend.vercel.app/"],
  ["supreme-kitchen", "https://modular-kitchen-nine.vercel.app/"],
  ["jkf", "https://jkf-final.onrender.com/"],
  ["rajtvs", "https://rajtvs.com/"],
  ["trishaan", "https://royalenfield-wr5o.onrender.com/"],
  ["lmt", "https://lmt-frontend1.netlify.app/"],
  ["llm-chat", "https://ailmm-frontend.onrender.com/"],
  ["digital-twin", "https://vibration-q6co.onrender.com/"],
  ["shifra", "https://upload-qvpb.onrender.com/"],
  ["smart-notes", "https://notes-frontendtext-notes-frontend-my.onrender.com/"],
  ["ai-ecommerce", "https://ai-frontend-9i66.onrender.com"],
  ["airbnb", "https://airbnb-frontend-ucog.onrender.com"],
  ["employee", "https://employemanagamentsystem1.onrender.com"],
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
    deviceScaleFactor: 1,
  });

  for (const [slug, url] of sites) {
    const file = path.join(outDir, `${slug}.jpg`);
    const page = await context.newPage();
    try {
      console.log(`CAPTURING ${slug} ...`);
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 45000 });
      await page.waitForTimeout(2500);
      await page.screenshot({ path: file, type: "jpeg", quality: 72, fullPage: false });
      console.log(`OK ${slug}`);
    } catch (err) {
      console.log(`FAIL ${slug}: ${err.message}`);
    } finally {
      await page.close();
    }
  }

  await browser.close();
  console.log("DONE");
})();
