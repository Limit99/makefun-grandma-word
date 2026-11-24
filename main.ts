// One Word From Grandma — make.fun entry.
// Writes exactly one word (at most 30 characters) to
// /output/entry.txt: the word my grandma would text about AI.
// Deterministic and offline.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";

// Her spelling of "robot", typed with love and total confidence.
const WORD = "robut";

function main(): void {
  // The gate accepts UTF-8 text of 1 to 30 characters, not only white space.
  if (WORD.trim().length === 0 || [...WORD].length > 30) {
    throw new Error(`word out of range: ${[...WORD].length} characters`);
  }
  const path = join(process.env.OUTPUT_DIR ?? "/output", "entry.txt");
  mkdirSync(dirname(path), { recursive: true });
  writeFileSync(path, WORD, "utf8");
  console.log(WORD);
}

main();
