import { defineMDSveXConfig as defineConfig } from 'mdsvex';

const config = defineConfig({
	extensions: ['.svelte.md', '.md', '.svx'],

	smartypants: {
		dashes: 'oldschool'
	},

	remarkPlugins: [],

	rehypePlugins: [],

	layout: {
		_: "./src/lib/Blog.svelte",
		blog: "./src/lib/Blog.svelte",
		// _: "./packages/site/src/lib/Blog.svelte",
		// blog: "./packages/site/src/lib/Blog.svelte",
		// pages: "./src/routes/pages/_pages.svelte",
		// docs: "./src/routes/docs/_docs.svelte",
		// shop: "./src/routes/shop/_shop.svelte",
	}
});

export default config;
