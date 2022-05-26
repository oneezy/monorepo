<!-- Transition.svelte -->
<script>
  import { fly } from 'svelte/transition';

	let ID;
	export { ID as id };

	let CLASS;
	export { CLASS as class };

  export let url = ''; 
</script>

{#key url}
  <main 
    id={`${ID}`}
    class={`${CLASS}`}
    in:fly={{y:50, duration: 500, delay: 500}} 
    out:fly={{duration: 500}}>
    <slot />
  </main>
{/key}