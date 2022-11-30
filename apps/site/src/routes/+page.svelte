<script>
	import { page } from '$app/stores'
  import { SITE_NAME, SITE_SEPARATOR, SITE_DESCRIPTION } from '@packages/metadata';
</script>

<svelte:head>
	<title>Site {SITE_SEPARATOR} {SITE_NAME}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<meta property="og:title" content="Site {SITE_NAME} {SITE_SEPARATOR}" />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

Site