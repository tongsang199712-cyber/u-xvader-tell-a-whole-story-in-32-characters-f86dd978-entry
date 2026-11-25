import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// Micro-story: he said he was going out to buy milk. That was 2019.
// He never came back. A whole departure, an absence, and years of
// waiting are compressed into a single 32-character line: the errand
// is the excuse, the year is the wound, and everything after it is
// silence the reader has to fill in.
const STORY: string = "He left for milk. That was 2019.";

const OUTPUT_PATH = "/output/entry.txt";
const EXPECTED_LENGTH = 32;

function main(): void {
  if (STORY.length !== EXPECTED_LENGTH) {
    throw new Error(
      `Story must be exactly ${EXPECTED_LENGTH} characters, got ${STORY.length}`,
    );
  }

  mkdirSync(dirname(OUTPUT_PATH), { recursive: true });
  writeFileSync(OUTPUT_PATH, STORY, { encoding: "utf8" });

  const written: string = readFileSync(OUTPUT_PATH, { encoding: "utf8" });
  if (written !== STORY) {
    throw new Error("Verification failed: file content does not match story");
  }

  console.log(`Story: ${written}`);
  console.log(`Character count: ${written.length}`);
}

main();
