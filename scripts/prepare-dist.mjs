import { cpSync, existsSync, mkdirSync, rmSync, writeFileSync } from "node:fs";

if (!existsSync("out")) {
  throw new Error("A exportação estática não gerou a pasta out.");
}

rmSync("dist", { recursive: true, force: true });
cpSync("out", "dist", { recursive: true });
mkdirSync("dist/server", { recursive: true });
mkdirSync("dist/.openai", { recursive: true });
cpSync(".openai/hosting.json", "dist/.openai/hosting.json");
writeFileSync(
  "dist/server/index.js",
  'export default { async fetch(request, env) { return env.ASSETS.fetch(request); } };\n'
);
