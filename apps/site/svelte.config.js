import { resolve } from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
    alias: {
      $root: resolve('../../'),
      $src: resolve('./src'),
      $lib: resolve('./src/lib'),
      $data: resolve('./src/data'),
      $routes: resolve('./src/routes'),
      $stores: resolve('./src/stores'),
    },
		vite: {
			resolve: {
				preserveSymlinks: true,
        build: {
          sourcemap: true
        }
			}
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		}),
	],

	experimental: {
		inspector: true
	}
};

export default config;
