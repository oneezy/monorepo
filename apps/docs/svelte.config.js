import { resolve } from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
        preserveSymlinks: true,
				alias: {
          $root: resolve('../../'),
					$src: resolve('./src'),
					// $lib: resolve('./src/lib'),   <-- won't work!
					$lib: resolve('../../apps/docs/src/lib'),
				},
        build: {
          sourcemap: true
        }
			}
		}
	},

	preprocess: preprocess(),

	experimental: {
		inspector: true
	}
};

export default config;
