const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: ["./src/**/*.{html,js}", "./templates/**/*.twig", "./templates/**/*.html"],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
        colors: {
            one: {
                light: '#b3bcf5',
                DEFAULT: '#5c6ac4',
                dark: '#202e78',
              },
            two: {
                light: '#b3bcf5',
                DEFAULT: '#5c6ac4',
                dark: '#202e78',
            },
        },
        fontFamily: {
            sans: [
                'Nunito Sans',
                ...defaultTheme.fontFamily.sans,
            ],
            serif: [
                'Nunito Sans',
                ...defaultTheme.fontFamily.serif,
            ]
        }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
