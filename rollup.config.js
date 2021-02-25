import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/packages/DaCard/index.svelte',
  output: {
    dir: 'build/dist/packages/DaCard',
    format: 'esm'
  },
  plugins: [
    svelte(require('./svelte.config')),
    resolve({ browser: true })
  ]
}