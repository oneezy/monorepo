<script>
	import { page } from '$app/stores'
	import { SITE_URL, SITE_NAME, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '@packages/metadata'
	import { Header, Scrollbar, Menu, Logo, Theme, Button, Social, Device, Page, Link, Icon } from '@packages/components'
  import { mediaQuery } from '@packages/components/lib/mediaQuery/mediaQuery.js'
	import '@packages/components/global.css';
  import '$site/app.css';

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

<Page id="site">
  {#if !$md}
    <Scrollbar />
  {/if}

  {#if $md}
  <Header class="p-4 md:p-8">
    <Menu slot="left" />
    <Logo slot="center" />
    <Theme slot="right" />
  </Header>

  {:else}
  <Header class="p-4 md:p-8">
    <Logo slot="left" class="ml-8" />
    <nav slot="center" class="flex flex-col items-center justify-center md:flex-row gap-6 capitalize">
      <Link href="/">Home</Link>
      <Link href="docs">Docs</Link>
    </nav>
    <div class="flex items-center justify-center gap-2" slot="right">
      <Link href="https://github.com/oneezy/monorepo" target="_blank">
        <Icon name="github" viewBox="0 0 24 24" size="32" class="fill--primary rounded-full" />
      </Link>
      <Theme />
      <Button href="https://github.com/oneezy/monorepo" target="_blank" class="ml-2">Lets Gooo</Button>
    </div>
  </Header>
  {/if}

  <slot />

  <footer class="container mx-auto p-4 md:p-8">
    <Social />
  </footer>
</Page>