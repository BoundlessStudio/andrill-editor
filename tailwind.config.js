/* eslint-env node */

module.exports = {
  darkMode: "media",
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pixel': ['VT323', 'sans-serif']
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
