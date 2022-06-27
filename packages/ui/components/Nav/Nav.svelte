<script>
  import { page } from '$app/stores';

  export let menu = [
    { label: 'home', href: '/'},
    { label: 'docs', href: '/docs'}
  ];
  
	let _class = '';
	export { _class as class };
</script>

<nav class="flex flex-col items-center justify-center md:flex-row gap-6 capitalize {_class || ''}">
  {#each menu as link}
    <a  href="{link.href}" 
        class="flex items-center justify-center font-normal text-lg py-2 relative hover:text-black
        {$page.url.pathname === link.href ? 'active font-medium text-black dark:text-white' : 'text-slate-400 dark:text-slate-400'}"
        
        sveltekit:prefetch>
        {link.label}

        {#if $page.url.pathname === link.href}
        <b class="h-[3px] w-full inline-block bg-gradient-to-r from-indigo-600 to-pink-600 absolute top-full"></b>
        {/if}
    </a>
  {/each}
</nav>