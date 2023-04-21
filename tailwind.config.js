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
    },
  },
  plugins: [],
};
