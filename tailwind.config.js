/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */

// const {colors} = require('./tailwind-theme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // colors,
    extend: {
      screens: {
        xxl: '1921px',
      },
    },
  },
  plugins: [],
}
