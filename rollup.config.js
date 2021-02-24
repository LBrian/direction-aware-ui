import svelte from 'rollup-plugin-svelte';
import resolve from '@rollup/plugin-node-resolve';

export default {
  input: 'src/packages/DaCard/index.svelte',
  output: {
    dir: 'build/dist/packages/DaCard',
    format: 'esm'
  },
  plugins: [
    svelte({
      preprocess: require('./svelte.config').preprocess,
      emitCss: false,
      compilerOptions: {
        customElement: true
      }
    }),
    resolve({ browser: true })
  ]
}