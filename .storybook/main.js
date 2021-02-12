const sveltePreprocess = require('svelte-preprocess');

module.exports = {
  webpackFinal: async (config) => {
    const svelteLoader = config.module.rules.find( (r) => r.loader && r.loader.includes('svelte-loader'))

    svelteLoader.options.preprocess = sveltePreprocess({
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

    return config
  },
  stories: [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ]
}