import { mkdirSync, writeFileSync } from "node:fs";

// One-line joke about working beside an AI coding agent, written for a
// live demo audience: the agent does the flashy part, then exposes the
// human at the worst possible moment.
const JOKE =
  "My AI agent built the whole demo in one prompt — then asked me, in front of everyone, what the app actually does.";

const OUTPUT_DIR = "/output";
const OUTPUT_FILE = `${OUTPUT_DIR}/entry.txt`;

// The gate only accepts 1 to 280 characters, counted as Unicode code
// points, and refuses whitespace-only text. Fail loudly instead of
// writing an entry the scorer would reject.
const length = [...JOKE].length;
if (length < 1 || length > 280 || JOKE.trim().length === 0) {
  throw new Error(`joke must be 1-280 characters, got ${length}`);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(OUTPUT_FILE, JOKE, "utf8");
