module.exports = {
  defaults: {
    script: 'typescript'
  },
  postcss: {
    plugins: [require('tailwindcss')(), require('autoprefixer')()]
  }
};
