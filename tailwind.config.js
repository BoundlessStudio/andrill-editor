/* eslint-env node */
const formKitTailwind = require("@formkit/themes/tailwindcss");

module.exports = {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./formkit.config.js"
  ],
  theme: {
    extend: {},
  },
  plugins: [formKitTailwind],
};
