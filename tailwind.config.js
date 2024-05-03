const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    colors: {
      transparent: 'transparent',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      'clr-black': 'rgb(var(--clr-black) / <alpha-value>)',
      'clr-blue': 'rgb(var(--clr-blue) / <alpha-value>)',
    },
    extend: {},
  },
  plugins: [],
}
