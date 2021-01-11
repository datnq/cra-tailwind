const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { sans: ['Nunito', 'sans-serif'] },
      gridTemplateColumns: {
        layout: '200px minmax(800px, 1fr)',
      },
      gridTemplateRows: {
        layout: '70px 1fr',
      },
      colors: {
        github: '#24292e',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
