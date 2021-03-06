const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  compilerOptions: {
    // customElement breaks web-test-runner and dev server
    customElement: process.env.NODE_ENV !== 'test'
  },
  preprocess: sveltePreprocess({
    defaults: {
      script: 'typescript',
    },
    postcss: {
      plugins: [
        require("tailwindcss")(),
        require("autoprefixer")()
      ]
    }
  })
};