module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.js',
    './templates/**/*.twig',
    './templates/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
