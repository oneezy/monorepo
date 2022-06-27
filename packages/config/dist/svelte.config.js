import { resolve } from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-node';
import { join } from 'path';
import { readFileSync } from 'fs';
import { cwd } from 'process';

const pkg = JSON.parse(readFileSync(join(cwd(), 'package.json')));

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    alias: {
      // Root
      $root: resolve('../../'),

      // Apps
      $site: resolve('../../apps/site/src'),
      $docs: resolve('../../apps/docs/src'),
    },
    vite: {
      build: {
        target: ['es2020'],
      },
      resolve: {
        preserveSymlinks: false,
        build: {
          sourcemap: true
        },
      },
      ssr: {
        noExternal: Object.keys(pkg.dependencies || {})
      }
    }
  },

  preprocess: [
    preprocess({
      postcss: true
    }),
  ]
};

if (process.env.NODE_ENV === "production") config.kit.vite.resolve.preserveSymlinks = true;

export default config;
