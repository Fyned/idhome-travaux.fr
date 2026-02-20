/**
 * Pexels Image Downloader for ID Home
 * Downloads stock photos for the website from Pexels API
 *
 * Usage: node scripts/download-images.js
 * Requires: PEXELS_API_KEY environment variable
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

const API_KEY = process.env.PEXELS_API_KEY;
if (!API_KEY) {
  console.error("ERROR: PEXELS_API_KEY environment variable is required");
  console.error("Usage: PEXELS_API_KEY=your_key node scripts/download-images.js");
  process.exit(1);
}

// Image queries organized by output path
const IMAGE_QUERIES = [
  // Hero slides (landscape, large)
  { path: "hero/slide-1.jpg", query: "home renovation modern interior design", orientation: "landscape" },
  { path: "hero/slide-2.jpg", query: "plumber professional working repair", orientation: "landscape" },
  { path: "hero/slide-3.jpg", query: "house painting interior professional worker", orientation: "landscape" },

  // Services (square for service detail pages)
  { path: "services/plomberie.jpg", query: "plumber repairing sink bathroom", orientation: "square" },
  { path: "services/electricite.jpg", query: "electrician installing outlet wires", orientation: "square" },
  { path: "services/serrurerie.jpg", query: "locksmith installing door lock handle", orientation: "square" },
  { path: "services/renovation.jpg", query: "home renovation modern living room interior", orientation: "landscape" },
  { path: "services/peinture.jpg", query: "painter painting wall roller blue", orientation: "square" },
  { path: "services/isolation.jpg", query: "insulation material mineral wool wall", orientation: "square" },

  // Realisations / Portfolio (landscape for video aspect ratio)
  { path: "realisations/salle-de-bain.jpg", query: "modern bathroom renovation white tiles", orientation: "landscape" },
  { path: "realisations/cuisine.jpg", query: "modern kitchen renovation design", orientation: "landscape" },
  { path: "realisations/electricite.jpg", query: "electrical wiring installation home", orientation: "landscape" },
  { path: "realisations/plomberie.jpg", query: "plumbing copper pipe repair professional", orientation: "landscape" },
  { path: "realisations/peinture.jpg", query: "freshly painted room bright interior", orientation: "landscape" },
  { path: "realisations/isolation.jpg", query: "wall insulation foam construction", orientation: "landscape" },

  // Blog featured images
  { path: "blog/fuite-eau.jpg", query: "water leak pipe emergency plumbing", orientation: "landscape" },
  { path: "blog/salle-de-bain.jpg", query: "bathroom renovation before after tiles", orientation: "landscape" },
  { path: "blog/porte-entree.jpg", query: "front door security lock modern entrance", orientation: "landscape" },

  // About page
  { path: "about/team.jpg", query: "construction workers team professional smiling", orientation: "landscape" },

  // OG Image (social sharing)
  { path: "og-image.jpg", query: "home renovation professional tools construction", orientation: "landscape" },

  // Service detail images (2 per service)
  { path: "services/plomberie-detail-1.jpg", query: "plumber fixing pipe wrench professional", orientation: "landscape" },
  { path: "services/plomberie-detail-2.jpg", query: "bathroom sink faucet installation", orientation: "landscape" },
  { path: "services/electricite-detail-1.jpg", query: "electrician wiring electrical panel", orientation: "landscape" },
  { path: "services/electricite-detail-2.jpg", query: "electrical socket installation renovation", orientation: "landscape" },
  { path: "services/serrurerie-detail-1.jpg", query: "locksmith working door lock", orientation: "landscape" },
  { path: "services/serrurerie-detail-2.jpg", query: "modern door lock security handle", orientation: "landscape" },
  { path: "services/peinture-detail-1.jpg", query: "painter painting wall roller", orientation: "landscape" },
  { path: "services/peinture-detail-2.jpg", query: "interior painting renovation room", orientation: "landscape" },
  { path: "services/isolation-detail-1.jpg", query: "thermal insulation wall installation", orientation: "landscape" },
  { path: "services/isolation-detail-2.jpg", query: "mineral wool insulation ceiling", orientation: "landscape" },
  { path: "services/renovation-detail-1.jpg", query: "home renovation living room modern", orientation: "landscape" },
  { path: "services/renovation-detail-2.jpg", query: "kitchen renovation modern design", orientation: "landscape" },

  // Blog images
  { path: "blog/chauffe-eau.jpg", query: "water heater boiler maintenance", orientation: "landscape" },
  { path: "blog/panne-electrique.jpg", query: "electrical panel circuit breaker", orientation: "landscape" },
  { path: "blog/serrure-securite.jpg", query: "door lock security home entrance", orientation: "landscape" },
  { path: "blog/renovation-appartement.jpg", query: "apartment renovation modern interior", orientation: "landscape" },
  { path: "blog/peinture-interieure.jpg", query: "interior painting colors wall", orientation: "landscape" },
  { path: "blog/isolation-economies.jpg", query: "home insulation energy saving", orientation: "landscape" },
  { path: "blog/plombier-weekend.jpg", query: "emergency plumber weekend repair", orientation: "landscape" },
  { path: "blog/normes-electriques.jpg", query: "electrical wiring standards safety", orientation: "landscape" },
  { path: "blog/securiser-maison.jpg", query: "home security system door lock", orientation: "landscape" },
];

const PUBLIC_DIR = path.join(__dirname, "..", "public", "images");

function fetchJSON(url) {
  return new Promise((resolve, reject) => {
    const req = https.get(url, {
      headers: { Authorization: API_KEY },
    }, (res) => {
      if (res.statusCode === 301 || res.statusCode === 302) {
        return fetchJSON(res.headers.location).then(resolve).catch(reject);
      }
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          reject(new Error(`JSON parse error: ${data.substring(0, 200)}`));
        }
      });
    });
    req.on("error", reject);
  });
}

function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const doDownload = (downloadUrl) => {
      const protocol = downloadUrl.startsWith("https") ? https : require("http");
      protocol.get(downloadUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return doDownload(res.headers.location);
        }
        if (res.statusCode !== 200) {
          reject(new Error(`HTTP ${res.statusCode} for ${downloadUrl}`));
          return;
        }
        const fileStream = fs.createWriteStream(dest);
        res.pipe(fileStream);
        fileStream.on("finish", () => {
          fileStream.close();
          resolve();
        });
        fileStream.on("error", reject);
      }).on("error", reject);
    };
    doDownload(url);
  });
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function searchAndDownload(item, index, total) {
  const { path: imgPath, query, orientation } = item;
  const destPath = path.join(PUBLIC_DIR, imgPath);
  const destDir = path.dirname(destPath);

  // Skip if file already exists
  if (fs.existsSync(destPath)) {
    console.log(`[${index + 1}/${total}] SKIP (exists): ${imgPath}`);
    return;
  }

  // Ensure directory exists
  fs.mkdirSync(destDir, { recursive: true });

  console.log(`[${index + 1}/${total}] Searching: "${query}" (${orientation})...`);

  try {
    const searchUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(query)}&orientation=${orientation}&per_page=5&size=large`;
    const result = await fetchJSON(searchUrl);

    if (!result.photos || result.photos.length === 0) {
      console.log(`  WARNING: No results for "${query}". Trying broader search...`);
      // Try with fewer words
      const broaderQuery = query.split(" ").slice(0, 2).join(" ");
      const retryUrl = `https://api.pexels.com/v1/search?query=${encodeURIComponent(broaderQuery)}&orientation=${orientation}&per_page=5&size=large`;
      const retryResult = await fetchJSON(retryUrl);
      if (!retryResult.photos || retryResult.photos.length === 0) {
        console.log(`  ERROR: No results for "${broaderQuery}" either. Skipping.`);
        return;
      }
      result.photos = retryResult.photos;
    }

    const photo = result.photos[0];

    // Choose the best size: landscape for hero/og, large2x for services
    let downloadUrl;
    if (orientation === "landscape") {
      downloadUrl = photo.src.landscape; // 1200x627 — good for hero and OG
    } else {
      downloadUrl = photo.src.large2x; // 940x650 — good for service cards
    }

    // For hero slides and OG, use original for max quality
    if (imgPath.startsWith("hero/") || imgPath === "og-image.jpg") {
      downloadUrl = photo.src.original + "?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop";
    }

    console.log(`  Downloading: ${photo.photographer} — ${photo.alt || "Untitled"}`);
    console.log(`  URL: ${downloadUrl.substring(0, 80)}...`);

    await downloadFile(downloadUrl, destPath);

    const stats = fs.statSync(destPath);
    console.log(`  SAVED: ${imgPath} (${(stats.size / 1024).toFixed(0)} KB)`);
  } catch (error) {
    console.error(`  ERROR downloading ${imgPath}: ${error.message}`);
  }
}

async function main() {
  console.log("=".repeat(60));
  console.log("  ID Home — Pexels Image Downloader");
  console.log("  Target: public/images/");
  console.log(`  Total images: ${IMAGE_QUERIES.length}`);
  console.log("=".repeat(60));
  console.log();

  for (let i = 0; i < IMAGE_QUERIES.length; i++) {
    await searchAndDownload(IMAGE_QUERIES[i], i, IMAGE_QUERIES.length);
    // Rate limiting: wait 500ms between requests
    if (i < IMAGE_QUERIES.length - 1) {
      await sleep(500);
    }
  }

  console.log();
  console.log("=".repeat(60));
  console.log("  Download complete!");
  console.log("=".repeat(60));

  // Report
  let found = 0;
  let missing = 0;
  for (const item of IMAGE_QUERIES) {
    const destPath = path.join(PUBLIC_DIR, item.path);
    if (fs.existsSync(destPath)) {
      found++;
    } else {
      missing++;
      console.log(`  MISSING: ${item.path}`);
    }
  }
  console.log(`  Found: ${found}/${IMAGE_QUERIES.length}`);
  if (missing > 0) {
    console.log(`  Missing: ${missing} — re-run the script or download manually`);
  }
}

main().catch(console.error);
