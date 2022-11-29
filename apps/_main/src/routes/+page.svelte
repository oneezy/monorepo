<script>
	import { SITE_NAME, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '@packages/metadata'
	import { page } from '$app/stores'
	import { Button } from '@packages/components'
  import Main from '$main/lib/Main.svelte'
</script>

<svelte:head>
	<title>{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<meta property="og:title" content="{SITE_NAME} {SITE_SEPARATOR} {SITE_TITLE}" />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

<Main id="main" />