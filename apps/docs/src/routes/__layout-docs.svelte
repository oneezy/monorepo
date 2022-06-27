<script>
	import { page } from '$app/stores'
	import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '@packages/metadata'
	import { Header, HeaderContainer, Scrollbar, Menu, Icon, Nav, Theme, Button, Social, Device } from '@packages/ui'
  import { mediaQuery } from '@packages/ui/components/mediaQuery/mediaQuery.js'
	import '@packages/ui/css/global.css'
  import '$docs/app.css'

	const sm = mediaQuery('(min-width: 0px) and (max-width: 767px)')
	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)')

	let device
</script>

<svelte:head>
	<title>{SITE_NAME} {SITE_SEPARATOR} {SITE_DESCRIPTION}</title>

	<meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
	<link rel="canonical" href="{SITE_URL}{$page.url.pathname}" />

	<meta property="og:locale" content="en_US" />
	<meta property="og:type" content="website" />
	<meta property="og:url" content={$page.url.href} />
	<meta property="og:site_name" content={SITE_NAME} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<!--   
  <meta property="fb:app_id" content="{FB_ID}" />
  <meta property="fb:admins" content="{FB_ADMINS}" /> -->
</svelte:head>

<Device device="hidden" />

{#if !$md}
	<Scrollbar />
{/if}

<Header class="p-4 md:p-8">
	{#if $md}
		<HeaderContainer class="max-w-screen-xl rounded-full py-2 px-4 md:py-4 md:px-8">
			<Menu slot="left" />
			<div slot="center">Docs</div>
			<Theme slot="right" />
		</HeaderContainer>
	{:else}
		<HeaderContainer class="max-w-screen-xl rounded-full py-2 px-4 md:py-4 md:px-8">
			<div slot="left">Docs</div>
			<Nav slot="center" />
			<div class="flex items-center justify-center" slot="right">
				<Theme />
				<Button href="/signup">Sign Up</Button>
			</div>
		</HeaderContainer>
	{/if}
</Header>

<main id="docs">
  <slot />
</main>

<footer class="container mx-auto p-4 md:p-8">
	<Social />
</footer>
