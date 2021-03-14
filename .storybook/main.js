const svelteOptions = require('../svelte.config');

module.exports = {
  svelteOptions,
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials']
};
