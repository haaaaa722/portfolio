// scripts/genPhotosData.mjs
import fs from "node:fs";
import path from "node:path";

const projectRoot = process.cwd();
const fullDir = path.join(projectRoot, "public", "images", "photos", "full");
const thumbDir = path.join(projectRoot, "public", "images", "photos", "thumb");
const outFile = path.join(projectRoot, "src", "data", "photosData.ts");

function listWebps(dir) {
    return fs
        .readdirSync(dir, { withFileTypes: true })
        .filter((d) => d.isFile() && d.name.toLowerCase().endsWith(".webp"))
        .map((d) => d.name);
    }

const fullFiles = listWebps(fullDir).sort();
const thumbSet = new Set(listWebps(thumbDir));

const items = fullFiles
    .filter((name) => thumbSet.has(name))
    .map((name, i) => {
    const id = `p${String(i + 1).padStart(3, "0")}`;
    const title = name.replace(/\.webp$/i, "");
    return {
        id,
        title,
        categorySlug: "uncategorized",
      // subSlug: "",
        thumbSrc: `/images/photos/thumb/${name}`,
        fullSrc: `/images/photos/full/${name}`,
        description: "",
    };
});

const missingThumb = fullFiles.filter((n) => !thumbSet.has(n));

const content = `export type PhotoCategory = {
    name: string;
    slug: string;
    subcategories: { name: string; slug: string }[];
};

export type PhotoItem = {
    id: string;
    title: string;
    categorySlug: string;
    subSlug?: string;
    thumbSrc: string;
    fullSrc: string;
    description?: string;
};

export const photoCategories: PhotoCategory[] = [
    { name: "Uncategorized", slug: "uncategorized", subcategories: [] },
];

export const photos: PhotoItem[] = ${JSON.stringify(items, null, 2)};
`;

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, content, "utf8");

console.log("✅ Generated:", outFile);
console.log("🖼️  photos:", items.length);
if (missingThumb.length) {
    console.log("⚠️  Missing thumbs:", missingThumb.length);
    console.log(missingThumb.slice(0, 10).join("\n"));
}
`;

console.log("Done.");
`;

console.log("");
`;

console.log("OK");
`;

// ↑ 変な出力防止のため末尾の余計なログは消す
const cleaned = content; // content自体はOK
fs.writeFileSync(outFile, cleaned, "utf8");

console.log("✅ Generated:", outFile);
console.log("🖼️  photos:", items.length);
if (missingThumb.length) {
    console.log("⚠️  Missing thumbs:", missingThumb.length);
}
