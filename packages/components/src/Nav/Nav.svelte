<script>
  import Link from '../Link/Link.svelte';

  export let links = [
    { label: 'features', href: '/'},
    { label: 'docs', href: '/docs'},
    // { label: 'pricing', href: '/pricing'},
    // { label: 'tutorial', href: '/tutorial'},
    // { label: 'blog', href: '/blog'},
    // { label: 'FAQ', href: '/FAQ'},
  ];
  
	let _class = '';
	export { _class as class };
</script>

<nav class="flex flex-col items-center justify-center md:flex-row gap-6 capitalize {$$props.class || ''}" data-sveltekit-prefetch>
	{#each links as link}
		<Link href={link.href}>
			{link.label}
		</Link>
	{/each}
</nav>