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
        terminal: "#33485E",
        bar: "#DAD9D9",
      },
    },
  },
  plugins: [],
};
