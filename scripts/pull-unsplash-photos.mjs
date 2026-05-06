import { writeFile } from "node:fs/promises";

const accessKey = process.env.UNSPLASH_ACCESS_KEY;
const outputPath = new URL("../src/data/unsplash-therapy-photos.json", import.meta.url);
const appName = "carept";

if (!accessKey) {
  console.error("Missing UNSPLASH_ACCESS_KEY. Set it before running this script.");
  process.exit(1);
}

const params = new URLSearchParams({
  query: "physical therapy rehabilitation",
  per_page: "8",
  orientation: "landscape",
  content_filter: "high",
  order_by: "relevant",
});

const response = await fetch(`https://api.unsplash.com/search/photos?${params}`, {
  headers: {
    Authorization: `Client-ID ${accessKey}`,
    "Accept-Version": "v1",
  },
});

if (!response.ok) {
  const body = await response.text();
  throw new Error(`Unsplash request failed: ${response.status} ${body}`);
}

const payload = await response.json();
const photos = payload.results
  .filter((photo) => photo?.urls?.raw && photo?.user?.name)
  .slice(0, 6)
  .map((photo) => ({
    src: `${photo.urls.raw}&auto=format&fit=crop&fm=jpg&q=82&w=1800`,
    alt: photo.alt_description || photo.description || "Physical therapy and rehabilitation care",
    credit: photo.user.name,
    profile: `${photo.user.links.html}?utm_source=${appName}&utm_medium=referral`,
  }));

await writeFile(outputPath, `${JSON.stringify(photos, null, 2)}\n`);
console.log(`Wrote ${photos.length} Unsplash photos to ${outputPath.pathname}`);
