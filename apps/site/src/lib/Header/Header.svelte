<script>
	import { fade, fly } from 'svelte/transition';
	import { screenH, scrollY, scrollDir, scrollUp, scrollDown, scrollTop, scrollBottom } from '$stores/device.js';
  import Device from '$lib/utils/Device.svelte';
	let CLASS; 
	export { CLASS as class };
	
	export let headerHeight = ''; 
</script>

<Device device="hidden" /> 


<!-- Start --> 
{#if ( (!$scrollUp) && (!$scrollDown) )}
  <header in:fly={{ x: -40, duration: 500, delay: 500 }} 
          out:fly={{ duration: 500, delay: 500 }}
					bind:clientHeight={headerHeight} 
					class="header absolute {CLASS || ''}" 
					style="position: absolute">

          <slot /> 
  </header>

<!-- Top --> 
{:else if ( ($scrollY > headerHeight) && ($scrollUp) )}
  <header in:fly="{{ y: -(headerHeight*2), opacity: 1 }}" 
          out:fly="{{ y: -(headerHeight*2), opacity: 1 }}" 
					bind:clientHeight={headerHeight}
					class="header active fixed {CLASS || ''}" 
					style="position: fixed">

          <slot /> 
  </header>

<!-- Everything else... -->
{:else}
  <header in:fade 
          out:fade 
					bind:clientHeight={headerHeight} 
					class="header absolute {CLASS || ''}" 
					style="position: absolute">

          <slot />
  </header>
{/if}

<style>
  header { width: 100%; left: 0; top: 0; right: 0; z-index: 10; }
</style>