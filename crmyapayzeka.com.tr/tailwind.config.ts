import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ai: {
          night: "#120B22",
          deep: "#0B0616",
          card: "#1B1233",
          border: "#31234F",
          violet: "#7C4DEE",
          indigo: "#A88BFF",
          teal: "#2DD4BF",
          light: "#DCD2F5",
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
