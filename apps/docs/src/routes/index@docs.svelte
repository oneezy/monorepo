<script>
	import { SITE_NAME, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '@packages/metadata'
	import { page } from '$app/stores'
	import { Button } from '@packages/ui'
	import { Accordion, AccordionItem } from 'svelte-accessible-accordion'
  import Docs from '$docs/lib/Docs.svelte'
</script>

<svelte:head>
	<title>{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<meta property="og:title" content="{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}" />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<div class="h-screen container flex flex-col items-center justify-center prose">
	<div class="not-prose flex flex-col items-center justify-center gap-20">
		<h1 class="text-black dark:text-white text-4xl font-bold sr-only">{SITE_NAME}</h1>
		<h2 class="text-slate-500 dark:text-slate-400 sr-only">{SITE_DESCRIPTION}</h2>

		<h3 class="select-none grid items-center justify-center text-center text-9xl tracking-tight font-black text-black dark:text-white">
			<span class="-mb-6">The.</span>
			<span class="block py-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-600">Docs.</span>
			<!-- <span class="block py-6 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">Crypto.</span> -->
			<span class="-mt-6">Page.</span>
		</h3>

    <Docs />

    <!-- Component from... node_modules -->
		<Accordion class="text-center w-64">
			<AccordionItem title="Accordion 1" class="border-b border-slate-300">I'm a npm packaged Svelte component living in <code>node_modules</code></AccordionItem>
			<AccordionItem title="Accordion 2" class="border-b border-slate-300">I'm a npm packaged Svelte component living in <code>node_modules</code></AccordionItem>
			<AccordionItem title="Accordion 3" class="border-b border-slate-300">I'm a npm packaged Svelte component living in <code>node_modules</code></AccordionItem>
		</Accordion>

		<div class="flex items-center justify-center gap-4">
			<Button href="/" size="hero">See Demo</Button>
			<Button href="/docs" type="outlined" size="hero">Sign Up</Button>
		</div>
	</div>
</div>
