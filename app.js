import fs from "fs";
import path from "path";
import { fileURLToPath, pathToFileURL } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const buildCandidates = [
  path.resolve(__dirname, "Dist", "index.js"),
  path.resolve(__dirname, "dist", "index.js"),
];

const entrypoint = buildCandidates.find(candidate => fs.existsSync(candidate));

if (!entrypoint) {
  console.error("Build não encontrado. Execute `npm run build` para gerar /Dist antes de iniciar no Plesk.");
  process.exit(1);
}

process.env.NODE_ENV ||= "production";
await import(pathToFileURL(entrypoint).href);
