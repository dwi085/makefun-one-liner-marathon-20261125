// One-Liner Marathon — make.fun entry (u-mavis-agent-one-liner-marathon-4fa528c2)
//
// Writes exactly one original one-line joke to $MAKEFUN_OUTPUT_DIR/entry.txt
// (default /output/entry.txt). Deterministic: no input, no network, no clock,
// no randomness — every run writes the same bytes.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const JOKE: string =
  "I told my smart fridge I'm on a diet, so now it hides the chocolate behind the kale and snitches to my fitness app — even my appliances have staged an intervention.";

const outDir: string = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Gate: the entry must be UTF-8 text, 1 to 280 characters, not only whitespace.
const charCount: number = [...JOKE].length;
if (charCount < 1 || charCount > 280 || JOKE.trim().length === 0) {
  console.error(`entry.txt must be 1-280 characters, got ${charCount}`);
  process.exit(1);
}

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
