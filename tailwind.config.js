module.exports = {
  purge: ['./src/**/*.svelte'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: require('daisyui/colors')
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require('daisyui')],
  daisyui: {
    styled: true,
    themes: false,
    rtl: false
  }
};
