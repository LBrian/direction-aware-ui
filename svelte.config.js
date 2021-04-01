const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  preprocess: sveltePreprocess({
    defaults: {
      script: 'typescript'
    },
    postcss: {
      plugins: [require('tailwindcss')(), require('autoprefixer')()]
    },
    replace:
      // TODO: workaround due to Svelte custom element transpile issue
      process.env.npm_lifecycle_event !== 'build'
        ? [
            ['<progressive-img', '<ProgressiveImg'],
            [
              "import '../ProgressiveImg.svelte';",
              "import ProgressiveImg from '../ProgressiveImg.svelte';"
            ]
          ]
        : []
  })
};
