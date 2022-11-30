<script>
  import Link from '../Link/Link.svelte';

  export let links = [
    { label: 'home', href: '/'},
    { label: 'site', href: '/site'},
    { label: 'docs', href: '/docs'},
    // { label: 'pricing', href: '/pricing'},
    // { label: 'tutorial', href: '/tutorial'},
    // { label: 'blog', href: '/blog'},
    // { label: 'FAQ', href: '/FAQ'},
  ]
</script>

<nav class="flex flex-col items-center justify-center md:flex-row gap-6 capitalize {$$props.class || ''}">
	{#each links as link}
		<Link href={link.href} data-sveltekit-prefetch>
			{link.label}
		</Link>
	{/each}
</nav>