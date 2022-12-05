<script>
	import { onMount } from 'svelte';
	let loaded = false;
	
	onMount(() => {
		loaded = true;
	});
</script>

{#if loaded}
	<slot></slot>
{/if}