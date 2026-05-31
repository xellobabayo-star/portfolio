import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "neon-cyan": "#00f2ff",
        "neon-magenta": "#ff0055",
        "cyber-dark": "#0a0a0a",
      },
      fontFamily: {
        mono: ["var(--font-mono)", "JetBrains Mono", "monospace"],
      },
      keyframes: {
        glitch: {
          "0%":   { textShadow: "2px 2px #ff0055, -2px -2px #00f2ff" },
          "50%":  { textShadow: "-2px 2px #00f2ff, 2px -2px #ff0055" },
          "100%": { textShadow: "2px -2px #ff0055, -2px 2px #00f2ff" },
        },
        scan: {
          "0%":   { transform: "translateY(-10%)" },
          "100%": { transform: "translateY(110vh)" },
        },
        flicker: {
          "0%, 100%": { opacity: "1" },
          "50%":       { opacity: "0.7" },
        },
      },
      animation: {
        "cyber-glitch": "glitch 0.3s infinite",
        "scan-line":    "scan 5s linear infinite",
        "flicker":      "flicker 2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
