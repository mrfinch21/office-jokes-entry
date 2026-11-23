import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One line about office life, under 200 characters.
// The joke: a CC to the boss on an email to yourself — the turn lands on
// "so someone in this office would know I exist".
const JOKE =
  "I CC'd my boss on an email to myself, just so someone in this office would know I exist.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
// The gate scores the text only when it is 1 to 199 characters: refuse to
// write anything outside that range instead of submitting an invalid entry.
if (JOKE.length < 1 || JOKE.length > 199) {
  throw new Error(`joke must be 1-199 characters, got ${JOKE.length}`);
}
writeFileSync(join(outDir, "entry.txt"), JOKE, "utf8");
