/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx,css}",
  ],
  theme: {
    extend: {
      keyframes: {
        typing: {
          from: { width: "0" },
          to: { width: "14ch" },
        },
      },
      animation: {
        typing: "typing 2s steps(20)",
      },
      colors: {
        "dusky-plum": {
          100: "#D9C2D2",
          200: "#B89AA9",
          300: "#976380",
          400: "#764C57",
          500: "#86377B",
          600: "#6C2D63",
          700: "#52234B",
          800: "#381833",
        },
        "midnight-blue": {
          100: "#6E6F7C",
          200: "#56576A",
          300: "#3E3F58",
          400: "#27273C",
          500: "#1B1C2A",
          600: "#131422",
          700: "#0B0C1A",
          800: "#030412",
        },
        "crimson-red": {
          100: "#F8D5D9",
          200: "#F0A9B2",
          300: "#E87D8B",
          400: "#E05164",
          500: "#DC143C",
          600: "#B91030",
          700: "#961024",
          800: "#730818",
        },
      },
    },
  },
  plugins: [],
};
