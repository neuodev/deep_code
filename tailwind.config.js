/** @type {import('tailwindcss').Config} */
const theme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        rubik: ["Rubik", ...theme.fontFamily.sans],
      },
      colors: {
        dark: "#121212",
        "light-gray": "#2C3333",
        bar: "#0F0E0E",
      },
    },
  },
  plugins: [],
};
