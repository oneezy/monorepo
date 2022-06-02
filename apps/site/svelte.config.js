import { resolve } from 'path';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				preserveSymlinks: true
			},
			resolve: {
				alias: {
					$lib: resolve('./src/lib'),
					$data: resolve('./src/data'),
					$routes: resolve('./src/routes'),
					$stores: resolve('./src/stores'),
				},
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
