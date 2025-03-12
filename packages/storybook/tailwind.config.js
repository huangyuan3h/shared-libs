/** @type {import('tailwindcss').Config} */
module.exports = {
  presets: [require('../ui/tailwind.config.js')],
  content: ['./src/**/*.{js,ts,jsx,tsx}', '../ui/src/**/*.{js,ts,jsx,tsx}'],
  plugins: [],
};
