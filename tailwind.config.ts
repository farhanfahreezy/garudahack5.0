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
        primaryBg: "#FFFFFF",
        darkPurple1: "#5B259F",
        darkPurple2: "#2F1155",
        darkPurple3: "#6E34B8",
        purple: "#9038FF",
        pink: "#FFC0CB",
      },
      fontFamily: {
        quicksand: ["Quicksand", "sans-serif"],
        rubik: ["Rubik", "sans-serif"],
      },
      boxShadow: {
        "up-sm": "0 -1px 2px 0 rgba(0, 0, 0, 0.05)",
        "up-md":
          "0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)",
        "up-lg":
          "0 -10px 15px -3px rgba(0, 0, 0, 0.05), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)",
      },
    },
  },
  plugins: [],
};
export default config;
