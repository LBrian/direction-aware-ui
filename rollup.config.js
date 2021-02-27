import copy from 'rollup-plugin-copy'
import svelte from 'rollup-plugin-svelte';
import { terser } from "rollup-plugin-terser";
import resolve from '@rollup/plugin-node-resolve';

const glob = require("glob");
const packages = glob.sync('src/packages/*/');

function getConfig(target) {
  const targetDir = `build/dist${target.replaceAll('src', '')}`;

  return {
    input: `${target}index.svelte`,
    output: {
      dir: targetDir,
      format: 'esm'
    },
    plugins: [
      svelte(require('./svelte.config')),
      resolve({ browser: true }),
      terser(),
      copy({
        targets: [
          { src: `${target}index.d.ts`, dest: targetDir },
          { src: `${target}README.md`, dest: targetDir }
        ]
      })
    ]
  }
}

export default packages.map(path => getConfig(path))