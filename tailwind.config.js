const colors = require('tailwindcss/colors')
const { borderWidth } = require('tailwindcss/defaultTheme')

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: { sans: ['Nunito', 'sans-serif'] },
      gridTemplateColumns: {
        layout: '1fr',
      },
      gridTemplateRows: {
        layout: '70px 1fr',
      },
      colors: {
        primary: colors.indigo[500],
        commentary: colors.gray[300],
        line: colors.gray[300],
        lineDarker: colors.gray[400],
      },
    },
  },
  variants: {
    extend: {
      borderColor: ['checked', 'disabled'],
      backgroundColor: ['checked', 'disabled'],
      cursor: ['disabled']
    },
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
}
