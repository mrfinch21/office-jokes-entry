import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about office life, under 200 characters.
// The joke: a CC to the boss on an email to yourself — the turn lands on
// "so someone in this office would know I exist".
const JOKE =
  "I CC'd my boss on an email to myself, just so someone in this office would know I exist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
