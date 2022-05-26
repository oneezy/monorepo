<script>
  import { page } from '$app/stores';

  export let menu = [
    { label: 'home', href: '/'},
    { label: 'contact', href: '/contact'}
  ];
  
	let CLASS = '';
	export { CLASS as class };
</script>

<nav class="flex flex-col items-center justify-center gap-4 md:flex-row capitalize {CLASS || ''}">
  {#each menu as link}
    <a  href="{link.href}" 
        class="flex items-center justify-center font-semibold text-xl rounded-full py-2 px-6
        {$page.url.pathname === link.href ? 'active bg-black text-white dark:bg-white dark:text-black' : 'text-black dark:text-white'}"
        
        sveltekit:prefetch>
        {link.label}
    </a>
  {/each}
</nav>