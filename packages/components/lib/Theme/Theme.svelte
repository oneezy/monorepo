<script>
  import { scale, fade, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
  import Button from '../Button/Button.svelte';
  import Icon from '../Icon/Icon.svelte';
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
</script>

{#if isDark}
  <Button
    class="fill--primary"
    aria-label="Toggle Dark Mode"
    aria-live="polite"
    button="icon"
    icon="moon"
    size="32"
    box="0 0 20 20"
    on:click={toggleDarkMode}>
  </Button>
{:else}
  <Button
    class="fill--primary"
    aria-label="Toggle Dark Mode"
    aria-live="polite"
    button="icon"
    icon="sun"
    size="32"
    box="0 0 20 20"
    on:click={toggleDarkMode}>
  </Button>
{/if}
