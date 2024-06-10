/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      primary: {
        DEFAULT: "#0c3a8f",
        100: "#3c91e6",
      },
      white: "#ffffff",
      black: "#000000",
      gray: {
        DEFAULT: "#707070",
        100: "#EEEEEE",
      },
    },
    extend: {},
  },
  plugins: [],
};
