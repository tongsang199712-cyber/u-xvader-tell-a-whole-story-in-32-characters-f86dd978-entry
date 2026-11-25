import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// A Wi-Fi name that hints at a whole story: dad went out for milk in 2019
// and never came back. Thirty-two characters, every one of them earning
// its place — the year is the punchline.
const LINE = "He left for milk. That was 2019.";

if (LINE.length < 1 || LINE.length > 32 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-32 non-blank characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
if (back !== LINE) {
  throw new Error("round-trip mismatch: /output/entry.txt differs from LINE");
}

console.log(`Wrote ${LINE.length} characters to /output/entry.txt`); // 32, the full gate
