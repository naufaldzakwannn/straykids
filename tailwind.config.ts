import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0D",
        surface: "#161618",
        surface2: "#1D1D20",
        paper: "#E8E6E1",
        paperdim: "#9C9A93",
        maroon: "#8B1E2F",
        gold: "#C9A961",
        line: "#2A2A2D",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      letterSpacing: {
        widest2: "0.25em",
      },
      backgroundImage: {
        grain: "url('/images/grain.svg')",
      },
    },
  },
  plugins: [],
};
export default config;
