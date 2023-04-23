/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  important: true,
  corePlugins: {
    preflight: false,
  },
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#E85382",
        pokemonBg: "#F1F1F1",
        danger: "#FF0000",
      },
      fontFamily: {
        clashdisplay: [
          "ClashDisplay-Variable",
          "ClashDisplay-Extralight",
          "ClashDisplay-Light",
          "ClashDisplay-Regular",
          "ClashDisplay-Medium",
          "ClashDisplay-Semibold",
          "ClashDisplay-Bold",
          "sans-serif",
        ],
        generalsans: [
          "GeneralSans-Variable",
          "GeneralSans-Extralight",
          "GeneralSans-Light",
          "GeneralSans-Regular",
          "GeneralSans-Italic",
          "GeneralSans-Medium",
          "GeneralSans-Semibold",
          "GeneralSans-Bold",
          "sans-serif",
        ],
      },
      fontWeight: {
        extralight: 200,
        light: 300,
        regular: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
      },
    },
  },
  plugins: [],
};
