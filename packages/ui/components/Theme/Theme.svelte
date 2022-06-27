<script>
  import { scale, fade, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
	let isDark = false;

	if (typeof localStorage !== 'undefined') {
		if (
			localStorage.theme === 'dark' ||
			(!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			isDark = true;
		}
	}

	function toggleDarkMode() {
		if (isDark) {
			document.documentElement.classList.remove('dark');
			localStorage.theme = 'light';
			isDark = false;
		} else {
			document.documentElement.classList.add('dark');
			localStorage.theme = 'dark';
			isDark = true;
		}
	}

	let CLASS;
	export { CLASS as class };
</script>

<button
  class="{CLASS || ''} flex items-center justify-center h-9 w-9 sun-moon relative rounded-full"
  aria-label="Toggle Dark Mode"
  aria-live="polite"
  on:click={toggleDarkMode}>

  {#if isDark}
    <img in:scale="{{ duration: 400, start: 0, end: 1, opacity: 1 }}"  
         class="absolute sun invert" 
         src="/images/icons/sun.svg" 
         alt="Light Mode" />

  {:else}
    <img in:fly="{{ y: 20, duration: 400 }}" 
         class="absolute moon" 
         src="/images/icons/moon.svg" 
         alt="Dark Mode" />
  {/if}
</button>