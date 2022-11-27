<script>
  import { scale, fade, fly } from 'svelte/transition';
	import { elasticOut } from 'svelte/easing';
  import Button from '../Button/Button.svelte';
	let isDark;

	if (typeof localStorage !== 'undefined') {
		if ( localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
			isDark = true;
		}
	}

  function darkTheme() {
    isDark = true;
    document.head.querySelector('meta[name=theme-color]').setAttribute('content', 'black')
    document.documentElement.classList.remove('light', 'system');
    document.documentElement.classList.add('dark');
    localStorage.theme = 'dark';
  }

  function lightTheme() {
    isDark = false;
    document.head.querySelector('meta[name=theme-color]').setAttribute('content', 'white')
    document.documentElement.classList.remove('dark', 'system');
    document.documentElement.classList.add('light');
    localStorage.theme = 'light';
  }

  // function systemTheme() {
  //   isDark = null;
  //   document.documentElement.classList.remove('light', 'dark');
  //   document.documentElement.classList.add('system');
  //   localStorage.theme = 'system';
  //   document.documentElement.querySelector('meta[name="theme-color"]').setAttribute("content", '');
  //   document.documentElement.setAttribute('style', '');
  // }
</script>

<svelte:head>
  {#if isDark} 
    <meta name="theme-color" content="black" />
  {:else if !isDark}
    <meta name="theme-color" content="white" />
  {/if}
</svelte:head>

<Button
  class="fill--primary block dark:hidden"
  aria-label="Toggle Dark Mode"
  aria-live="polite"
  button="icon"
  icon="sun"
  size="28"
  box="0 0 20 20"
  on:click={darkTheme}>
</Button>

<Button
  class="fill--primary hidden dark:block"
  aria-label="Toggle Dark Mode"
  aria-live="polite"
  button="icon"
  icon="moon"
  size="28"
  box="0 0 20 20"
  on:click={lightTheme}>
</Button>