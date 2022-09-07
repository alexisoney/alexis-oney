/* eslint-disable @typescript-eslint/no-var-requires */

/** @type {import('tailwindcss').Config} */

// const {colors} = require('./tailwind-theme')

module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './app/**/*.{js,ts,jsx,tsx}'],
  theme: {
    // colors,
    fontFamily: {
      sans: ['IBM Plex Sans', 'Helvetica Neue', 'Arial', 'sans-serif'],
    },
    extend: {
      screens: {
        xxl: '1921px',
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
