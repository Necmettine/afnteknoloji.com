import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        flow: {
          base: "#08131A",
          deep: "#050C11",
          card: "#0D1E28",
          panel: "#102734",
          border: "#1B3E4F",
          cyan: "#22D3EE",
          sky: "#38BDF8",
          mint: "#5EEAD4",
          light: "#A9DDEA",
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
