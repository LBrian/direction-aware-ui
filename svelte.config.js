const sveltePreprocess = require('svelte-preprocess');
const sveltePreprocessCfg = require('./svelte-preprocess.config');

module.exports = {
  preprocess: sveltePreprocess(sveltePreprocessCfg)
};
