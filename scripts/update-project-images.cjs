const fs = require("fs");
const path = require("path");

const filePath = path.join(__dirname, "..", "components", "Projects.tsx");
let t = fs.readFileSync(filePath, "utf8");

const map = [
  ["EGC India Shopping Club", "/projects/websites/egc-shop.jpg"],
  ["Clawbot – AI Lead Management System", "/projects/websites/clawbot.jpg"],
  ["Restaurant QR SaaS", "/projects/websites/restaurant-qr.jpg"],
  ["AI Interview Simulator", "/projects/websites/ai-interview.jpg"],
  ["WearUp – Premium Clothing Storefront", "/projects/websites/wearup.jpg"],
  ["ApexPOS – Next-Gen Point of Sale Solution", "/projects/websites/apexpos.jpg"],
  ["Vedic Success – Spiritual Tech", "/projects/websites/vedic-success.jpg"],
  ["E8 Productions – Media Agency", "/projects/websites/e8-productions.jpg"],
  ["ECONS EXIM GATEWAY", "/projects/websites/econs.jpg"],
  ["GoShah – Premium Car Rentals", "/projects/websites/goshah.jpg"],
  ["Elysian – Premium Fashion Storefront", "/projects/websites/elysian.jpg"],
  ["Hiranandani Westgate – Luxury Real Estate", "/projects/websites/hiranandani.jpg"],
  ["CIMDR Sangli – Higher Ed Institution Portal", "/projects/websites/cimdr.jpg"],
  ["Car Bazar – Exclusive Car Rental Experience", "/projects/websites/carbazar.jpg"],
  ["WebYapar Solutions – IT Consulting & Digital Engineering", "/projects/websites/webyapar.jpg"],
  ["WebCastle UAE – Premier Web Engineering Agency", "/projects/websites/webcastle.jpg"],
  ["LetsCrack – Premium MCQ & Test Preparation Platform", "/projects/websites/letscrack.jpg"],
  ["AECCI – Asian Exporters Chamber Portal", "/projects/websites/aecci.jpg"],
  ["Outfit Theory – Curated Menswear", "/projects/websites/outfit-theory.jpg"],
  ["Nisha Dryfruits & Spices", "/projects/websites/nisha.jpg"],
  ["Supreme Kitchen – Modular Kitchens", "/projects/websites/supreme-kitchen.jpg"],
  ["JKF India – Jayant Furnishers", "/projects/websites/jkf.jpg"],
  ["Raj TVS – Two-Wheeler Dealership", "/projects/websites/rajtvs.jpg"],
  ["Trishaan Motors – Royal Enfield Dealer", "/projects/websites/trishaan.jpg"],
  ["LMT – AI Learning Management", "/projects/websites/lmt.jpg"],
  ["Token-Based LLM Chat", "/projects/websites/llm-chat.jpg"],
  ["Digital Twin Dashboard", "/projects/websites/digital-twin.jpg"],
  ["AI Assistant Shifra", "/projects/websites/shifra.jpg"],
  ["Smart Notes App", "/projects/websites/smart-notes.jpg"],
  ["AI-Powered E-Commerce", "/projects/websites/ai-ecommerce.jpg"],
  ["Airbnb Clone", "/projects/websites/airbnb.jpg"],
  ["Employee Management", "/projects/websites/employee.jpg"],
];

for (const [title, img] of map) {
  const escaped = title.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const re = new RegExp(
    `(title: '${escaped}',[\\s\\S]*?image:\\s*)("[^"]*"|'[^']*')`
  );
  const before = t;
  t = t.replace(re, `$1"${img}"`);
  if (t === before) console.log("MISS", title);
  else console.log("OK", title);
}

fs.writeFileSync(filePath, t);
console.log("DONE");
