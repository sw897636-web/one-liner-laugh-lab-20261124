import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Liner Laugh Lab: the excuse a robot vacuum gives after eating a sock.
// Deadpan bureaucratic twist: the sock was not eaten, it was reclassified.
const line = "Any sock on the floor is presumed dust until proven laundry.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line, "utf8");
