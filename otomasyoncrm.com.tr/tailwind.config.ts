import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ops: {
          base: "#07211A",
          deep: "#04140F",
          card: "#0E2E24",
          raise: "#143A2D",
          border: "#1E4C3B",
          emerald: "#0E9F6E",
          mint: "#34D399",
          light: "#C4EEDB",
          muted: "#8FB3A5",
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
