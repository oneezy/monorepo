<script>
	import { page } from '$app/stores'
  import { SITE_NAME, SITE_SEPARATOR, SITE_DESCRIPTION } from '@packages/metadata';
  import { Hero } from '@packages/components'
</script>

<svelte:head>
	<title>Docs {SITE_SEPARATOR} {SITE_NAME}</title>
	<meta name="description" content={SITE_DESCRIPTION} />

	<meta property="og:title" content="Docs {SITE_NAME} {SITE_SEPARATOR}" />
	<meta property="og:description" content={SITE_DESCRIPTION} />
	<meta property="og:image" content="{$page.url.origin}/og.png" />
</svelte:head>

Docs