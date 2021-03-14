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
