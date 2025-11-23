import fs from "node:fs";
import path from "node:path";
import https from "node:https";

const FONTS = [
  "Noto Sans JP",
  "Zen Maru Gothic",
  "Rampart One",
  "Zen Kurenaido",
  "Klee One",
  "DotGothic16",
  "Kiwi Maru",
  "Potta One",
  "Hachi Maru Pop",
  "Yuji Mai",
  "RocknRoll One",
  "Reggae One",
  "Stick",
  "M PLUS Rounded 1c",
  "M PLUS 1",
  "Yusei Magic",
  "Dela Gothic One",
  "New Tegomin",
  "Kosugi Maru",
  "Hina Mincho",
  "Shippori Mincho",
  "Kaisei Decol",
  "Mochiy Pop One",
  "Yuji Boku",
  "Kaisei HarunoUmi",
  "Sawarabi Gothic",
  "Zen Old Mincho",
  "Sawarabi Mincho",
  "Zen Antique",
  "Kaisei Tokumin",
  "Yuji Syuku",
  "WDXL Lubrifont JP N",
  "Murecho",
  "Kaisei Opti",
  "BIZ UDMincho",
  "Shippori Antique",
];

const OUT_DIR = path.join(process.cwd(), "public", "fonts");

function toFamilyParam(name) {
  return encodeURIComponent(name);
}

// nice clean directory name
function slugify(name) {
  return name
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^a-z0-9-]/g, "");
}

function fetchText(url) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      {
        method: "GET",
        headers: {
          // behave like a real browser, jic Google changes responsed based on UA ;)
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like " +
            "Gecko) Chrome/142.0.0.0 Safari/537.36",
        },
      },
      (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Status ${res.statusCode} for ${url}`));
          return;
        }
        let data = "";
        res.setEncoding("utf8");
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => resolve(data));
      }
    );
    req.on("error", reject);
    req.end();
  });
}

function downloadBinary(url, dest) {
  return new Promise((resolve, reject) => {
    const req = https.request(
      url,
      {
        method: "GET",
        headers: {
          "User-Agent":
            "Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like " +
            "Gecko) Chrome/142.0.0.0 Safari/537.36",
        },
      },
      (res) => {
        if (res.statusCode !== 200) {
          reject(new Error(`Status ${res.statusCode} for ${url}`));
          return;
        }
        fs.mkdirSync(path.dirname(dest), { recursive: true });
        const file = fs.createWriteStream(dest);
        res.pipe(file);
        file.on("finish", () => file.close(resolve));
      }
    );
    req.on("error", reject);
    req.end();
  });
}

async function getCssForFont(fontName) {
  const familyParam = toFamilyParam(fontName);

  const candidates = [
    // prefer 400 weight because that's what all the ones in fonts.ts use
    `https://fonts.googleapis.com/css2?family=${familyParam}:wght@400&display=swap`,
    // but we can fallback to all weights if needed
    `https://fonts.googleapis.com/css2?family=${familyParam}&display=swap`,
  ];

  for (const url of candidates) {
    try {
      console.log("Trying CSS URL:", url);
      const css = await fetchText(url);
      return css;
    } catch (err) {
      console.warn("Failed:", err.message);
    }
  }

  throw new Error(`All CSS URLs failed for ${fontName} :(`);
}

async function main() {
  fs.mkdirSync(OUT_DIR, { recursive: true });

  for (const fontName of FONTS) {
    console.log("\nTrying font:", fontName);
    let css;
    try {
      css = await getCssForFont(fontName);
    } catch (err) {
      console.error("Skipping", fontName, "-", err.message);
      continue;
    }

    // grab any https://...woff2 in the CSS
    const woff2Urls = Array.from(
      css.matchAll(/https:\/\/[^"'()]+\.woff2/g),
      (m) => m[0]
    );

    if (!woff2Urls.length) {
      console.warn("No .woff2 URLs found in CSS for", fontName);
      continue;
    }

    const baseSlug = slugify(fontName);

    // dedupe URLs (google sometimes repeats them for different unicode ranges)
    const uniqueUrls = [...new Set(woff2Urls)];

    for (const fileUrl of uniqueUrls) {
      const fileName = fileUrl.split("/").pop().split("?")[0];
      const dest = path.join(OUT_DIR, baseSlug, fileName);
      console.log("Downloading", fileUrl, "to", dest);
      try {
        await downloadBinary(fileUrl, dest);
      } catch (err) {
        console.error("Failed:", err.message);
      }
    }
  }

  console.log("\nAll done!!!");
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});

