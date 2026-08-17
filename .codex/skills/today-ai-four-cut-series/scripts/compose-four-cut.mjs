import { execFile } from "node:child_process";
import { access } from "node:fs/promises";
import { homedir } from "node:os";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { promisify } from "node:util";

const execFileAsync = promisify(execFile);
const scriptDir = dirname(fileURLToPath(import.meta.url));
const python = join(
  homedir(),
  ".cache",
  "codex-runtimes",
  "codex-primary-runtime",
  "dependencies",
  "python",
  "python.exe",
);
const composer = join(scriptDir, "compose_four_cut.py");

await access(python);
await access(composer);

const { stdout, stderr } = await execFileAsync(
  python,
  [composer, ...process.argv.slice(2)],
  {
    windowsHide: true,
    maxBuffer: 8 * 1024 * 1024,
  },
);
process.stdout.write(stdout);
process.stderr.write(stderr);
