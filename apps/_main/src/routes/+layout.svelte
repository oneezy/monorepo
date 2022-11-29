<script>
	import { page } from '$app/stores'
  import { fade, fly } from 'svelte/transition';
	import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '@packages/metadata'
	import { mediaQuery, Intro, Header, Scrollbar, Dialog, Nav, Logo, Theme, Button, Social, Device, Page, Link, Icon } from '@packages/components'
	import '@packages/components/css/global.css';
  import '$main/app.css';

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

<!-- Mobile -->
<Header class="block md:hidden">
  <Dialog slot="left" type="nav">
    <Nav />
  </Dialog>
  <Logo slot="center" />
  <Theme slot="right" />
</Header>

<!-- Desktop -->
<Header class="hidden md:block">
  <Logo slot="left" class="ml-8" />
  <Nav slot="center" />
  <div class="flex items-center justify-center gap-2" slot="right">
    <Link href="https://discord.gg/6Ys7gEr" target="_blank" rel="noreferrer">
      <Icon name="discord" viewBox="0 0 28 28" size="42" class="fill--primary rounded-full" />
    </Link>
    <Theme />
    <Button href="/signin" class="ml-2">Sign Up</Button>
  </div>
</Header>

<!-- Layout -->
<Intro>
  <div in:fly="{{ y: 20, delay: 800, duration: 800 }}">
    <slot />
    <footer class="container mx-auto p-4 md:p-8">
      <Social />
    </footer>
  </div>
</Intro>