<script>
	// Mounts a component when the DOM is ready. Useful for intro animations.
	import { onMount } from 'svelte';
	let loaded = false;
	
	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	<slot></slot>
{/if}