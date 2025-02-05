import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        libre: ["var(--font-libre-baskerville)", "serif"],
        mono: ["var(--font-roboto-mono)", "monospace"],
        abril: ["var(--font-abril-fatface)", "serif"],
      },
    },
  },
  plugins: [],
};
export default config;
