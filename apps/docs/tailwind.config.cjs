const config = {
  extends: [
    '@oneezy/ui/tailwind.config.cjs' // scoped packages are not prefixed
  ],
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: []
};

module.exports = config;
