// Fortune in a Pot — entry program (Node 22, stdlib only).
// Writes one original fortune for a houseplant to /output/entry.txt.
// The fortune: by spring the neighbour's cat gives up trying to reach the
// plant on the windowsill, and the plant sways in the sun, unbothered —
// a prediction about this plant in this window, funny for a plant lover,
// kind to plant and keeper alike, with no doom and no care instruction.
// Deterministic: no network, no randomness, no input — every run writes
// byte-identical output.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const FORTUNE =
  "By spring, the neighbour's cat will give up reaching you, and you will sway in the sun like a small, unbothered queen.";

// Self-check gate: the sealed scorer requires 1-120 non-blank characters,
// so refuse to write anything outside the gate instead of shipping it.
if (FORTUNE.length < 1 || FORTUNE.length > 120 || !FORTUNE.trim()) {
  throw new Error(`fortune must be 1-120 non-blank characters, got ${FORTUNE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), FORTUNE, 'utf8');
