// One-Line Office Jokes — entry program.
// Writes the entry line to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const entry =
  "I hit reply-all to the whole company. My apology was also reply-all.";

// The gate requires 1–199 characters, a single line, UTF-8 text.
// Fail loudly instead of writing an invalid entry.
if (entry.length < 1 || entry.length > 199 || entry.includes("\n")) {
  throw new Error(`entry out of gate: ${entry.length} chars`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
