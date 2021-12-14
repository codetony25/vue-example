module.exports = {
  purge: ['./public/index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'red': '#B33F40'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
