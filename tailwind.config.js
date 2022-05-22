/* eslint-env node */

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    './formkit.config.js'
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@formkit/themes/tailwindcss')
  ],
};
