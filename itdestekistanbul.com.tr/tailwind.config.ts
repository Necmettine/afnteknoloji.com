import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        it: {
          navy: "#0A1428",
          deep: "#060D1C",
          card: "#0F1E38",
          border: "#1C3155",
          blue: "#2F7DE1",
          sky: "#5FA8F5",
          light: "#BBD4F2",
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
