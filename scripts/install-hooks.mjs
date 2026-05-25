import { existsSync } from "node:fs";
import { spawnSync } from "node:child_process";

if (process.env.CI) {
  process.exit(0);
}

if (!existsSync(".git")) {
  process.exit(0);
}

const check = spawnSync("pre-commit", ["--version"], { stdio: "ignore" });
if (check.status !== 0) {
  console.error(
    "pre-commit is required for local git hook enforcement. Install it first: pipx install pre-commit",
  );
  process.exit(1);
}

const install = spawnSync(
  "pre-commit",
  ["install", "--hook-type", "pre-commit", "--hook-type", "commit-msg", "--hook-type", "pre-push"],
  { stdio: "inherit" },
);

if (install.status !== 0) {
  process.exit(install.status ?? 1);
}
