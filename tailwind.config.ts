import type { Config } from "tailwindcss";
export default { content:["./app/**/*.{js,ts,jsx,tsx,mdx}","./components/**/*.{js,ts,jsx,tsx,mdx}"], theme:{extend:{colors:{ink:"#153b3b",sage:"#729b88",cream:"#f7f5ef",gold:"#c4a46a"},fontFamily:{sans:["var(--font-body)"],display:["var(--font-display)"]},boxShadow:{soft:"0 18px 50px rgba(21,59,59,.10)"}}},plugins:[]} satisfies Config;
