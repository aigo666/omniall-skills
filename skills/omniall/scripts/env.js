/**
 * Shared configuration loader for OmniallAI skill scripts.
 *
 * Loads .env files (project root first, then skill dir) and validates
 * required variables. Exports { BASE_URL, ACCESS_TOKEN, USER_ID }.
 *
 * Priority (higher overrides lower):
 *   1. Environment variables
 *   2. Skill directory .env
 *   3. Project root .env
 *
 * OMNIALL_BASE_URL defaults to https://api.omniall.ai when unset.
 */

const fs = require("fs");
const path = require("path");

const DEFAULT_BASE_URL = "https://api.omniall.ai";

function loadEnv(filePath) {
  if (!fs.existsSync(filePath)) return;
  const lines = fs.readFileSync(filePath, "utf-8").split("\n");
  for (const raw of lines) {
    const line = raw.trim();
    if (!line || line.startsWith("#")) continue;
    const eqIdx = line.indexOf("=");
    if (eqIdx === -1) continue;
    const key = line.slice(0, eqIdx).trim();
    let value = line.slice(eqIdx + 1).trim();
    if (
      (value.startsWith('"') && value.endsWith('"')) ||
      (value.startsWith("'") && value.endsWith("'"))
    ) {
      value = value.slice(1, -1);
    }
    if (process.env[key] === undefined) {
      process.env[key] = value;
    }
  }
}

function findProjectRoot(startDir) {
  let dir = startDir;
  while (dir !== path.dirname(dir)) {
    if (
      fs.existsSync(path.join(dir, ".git")) ||
      fs.existsSync(path.join(dir, "package.json"))
    ) {
      return dir;
    }
    dir = path.dirname(dir);
  }
  return startDir;
}

const skillDir = path.resolve(__dirname, "..");
const projectRoot = findProjectRoot(process.cwd());

// Lower priority first, higher priority overwrites undefined keys
loadEnv(path.join(projectRoot, ".env"));
loadEnv(path.join(skillDir, ".env"));

const BASE_URL = (process.env.OMNIALL_BASE_URL || DEFAULT_BASE_URL).replace(/\/+$/, "");
const ACCESS_TOKEN = process.env.OMNIALL_ACCESS_TOKEN;
const USER_ID = process.env.OMNIALL_USER_ID;

if (!ACCESS_TOKEN || !USER_ID) {
  const missing = [
    !ACCESS_TOKEN && "OMNIALL_ACCESS_TOKEN",
    !USER_ID && "OMNIALL_USER_ID",
  ].filter(Boolean);
  console.error(
    `[CONFIG_MISSING] ${missing.join(", ")}\n` +
    "The user has not configured the required environment variables.\n" +
    "DO NOT retry. Ask the user to export them (e.g. `export OMNIALL_ACCESS_TOKEN=...`) or set them in a .env file.\n" +
    `Optional: OMNIALL_BASE_URL (default ${DEFAULT_BASE_URL}).`
  );
  process.exit(2);
}

const USER_ID_HEADER = ['New', 'Api', 'User'].join('-');

module.exports = { BASE_URL, ACCESS_TOKEN, USER_ID, DEFAULT_BASE_URL, USER_ID_HEADER };
