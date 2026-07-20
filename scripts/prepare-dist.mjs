import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
cpSync("site-fisioterapia/index.html", "dist/index.html");
cpSync("site-fisioterapia/style.css", "dist/style.css");
cpSync("site-fisioterapia/script.js", "dist/script.js");
cpSync("site-fisioterapia/assets", "dist/assets", { recursive: true });
mkdirSync("dist/server", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });
cpSync(".openai/hosting.json", "dist/.openai/hosting.json");
writeFileSync(
  "dist/server/index.js",
  'export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n'
);
