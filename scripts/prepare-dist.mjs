import { cpSync, mkdirSync, rmSync, writeFileSync } from "node:fs";
rmSync("dist", { recursive: true, force: true });
mkdirSync("dist", { recursive: true });
for (const file of ["index.html", "styles.css", "script.js"]) cpSync(file, `dist/${file}`);
cpSync("public/images", "dist/images", { recursive: true });
mkdirSync("dist/server", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });
cpSync(".openai/hosting.json", "dist/.openai/hosting.json");
writeFileSync(
  "dist/server/index.js",
  'export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n'
);
