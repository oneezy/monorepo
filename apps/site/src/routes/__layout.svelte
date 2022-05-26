<script context="module">
	import { SITE_URL, SITE_TITLE, SITE_SEPARATOR, SITE_AUTHOR, SITE_DESCRIPTION } from '$data/meta.js';
</script>

<script>
	import { mediaQuery } from '$stores/media';
	import { screenH, scrollY, scrollDir, scrollUp, scrollDown, scrollTop, scrollBottom } from '$stores/device.js';
  import { page } from '$app/stores';
  import Device from '$lib/utils/Device.svelte';
  import Scrollbar from '$lib/Scrollbar.svelte';
  // import Social from '$lib/Social.svelte';
  import '../app.css';
  
	const sm = mediaQuery('(min-width: 0px) and (max-width: 767px)');
	const md = mediaQuery('(min-width: 0px) and (max-width: 1024px)');
</script>


<svelte:head>
  <title>{SITE_TITLE} {SITE_SEPARATOR} {SITE_AUTHOR}</title>

  <meta name="robots" content="max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
  <link rel="canonical" href="{SITE_URL}{$page.url.pathname}" />

  <meta property="og:locale" content="en_US" />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="{$page.url.href}" />
  <meta property="og:site_name" content="{SITE_TITLE}" />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />
  <!--   
  <meta property="fb:app_id" content="{FB_ID}" />
  <meta property="fb:admins" content="{FB_ADMINS}" /> -->
</svelte:head>

<Device />

{#if !$md}
  <Scrollbar />
{/if}

<slot />

<!-- 
<footer class="container mx-auto p-4 md:p-8">
  <Social />
</footer> -->