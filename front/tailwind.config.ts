import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "grey-0": "#999999",
        "pink-0":"#D7FB00",
        "pink-01":"#d6a9ba",

      },
      fontFamily: {
        "mono":"'Anton', sans-serif",
        "Inter": "'Lato', sans-serif",
        "sans" : "'Koulen', sans-serif",
      },

      width: {
        "80": "25rem",
      },
    },
  },
  plugins: [],
};
export default config;
