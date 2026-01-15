import fs from "node:fs";
import path from "node:path";

const root = process.cwd();

const fullDir = path.join(root, "public", "images", "photos", "full");
const thumbDir = path.join(root, "public", "images", "photos", "thumb");
const target = path.join(root, "src", "data", "photosData.ts");

function listWebp(dir) {
    return fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isFile() && d.name.toLowerCase().endsWith(".webp"))
        .map((d) => d.name)
        .sort();
}

if (!fs.existsSync(target)) {
    console.error("❌ photosData.ts not found:", target);
    process.exit(1);
}

const full = listWebp(fullDir);
const thumb = listWebp(thumbDir);
const thumbSet = new Set(thumb);

if (full.length === 0) {
    console.error("❌ No webp files in:", fullDir);
    process.exit(1);
}

const missingThumb = full.filter((n) => !thumbSet.has(n));
if (missingThumb.length) {
    console.error("❌ Missing thumbs:", missingThumb.length);
    console.error(missingThumb.slice(0, 20).join("\n"));
    process.exit(1);
}

// ★カテゴリは自動推定しない（あとで手で割り当てる前提）
// categorySlug は空文字にしておく（string なのでOK）
const photos = full.map((name, i) => ({
    id: `p${String(i + 1).padStart(3, "0")}`,
    title: name.replace(/\.webp$/i, ""),
    categorySlug: "",
    // subSlug: undefined,
    thumbSrc: `/images/photos/thumb/${name}`,
    fullSrc: `/images/photos/full/${name}`,
    // description: "",
}));

const src = fs.readFileSync(target, "utf8");

// export const photos: PhotoItem[] = ... の行からファイル末尾まで置換
const start = src.indexOf("export const photos:");
if (start === -1) {
    console.error("❌ Could not find `export const photos:` in photosData.ts");
    process.exit(1);
}

const before = src.slice(0, start);
const newBlock =
    `export const photos: PhotoItem[] = ${JSON.stringify(photos, null, 2)};\n`;

fs.writeFileSync(target, before + newBlock, "utf8");

console.log("✅ Updated:", target);
console.log("🖼️ photos:", photos.length);
