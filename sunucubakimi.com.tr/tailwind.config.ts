import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        srv: {
          base: "#12171E",
          deep: "#0B0F14",
          card: "#1A2029",
          raise: "#222A35",
          border: "#2E3A48",
          amber: "#F59E0B",
          gold: "#FBBF24",
          sand: "#F1DFBC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
