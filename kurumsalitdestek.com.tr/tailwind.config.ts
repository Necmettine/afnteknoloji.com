import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Kurumsal grafit zemin + altın/amber aksan
        mit: {
          graphite: "#15171C",
          deep: "#0E1013",
          card: "#1D2027",
          border: "#31363F",
          gold: "#C08A2B",
          amber: "#E0AE45",
          sand: "#EFDCB4",
          claret: "#7E2E3C",
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
