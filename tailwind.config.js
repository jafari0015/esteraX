/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line @typescript-eslint/no-require-imports
const typography = require("@tailwindcss/typography");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [typography],
};
