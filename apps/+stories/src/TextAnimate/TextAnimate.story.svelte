<script>
  import TextAnimate from '@packages/components/src/TextAnimate/TextAnimate.svelte';
	export let Hst

	let disabled = false
	const hstEventClick = event => hstEvent('click', event)
</script>

<Hst.Story group="components" title="Atoms/TextAnimate">
  
	<TextAnimate class="text-[11vw] font-black text-center m-auto" on:click={hstEventClick}>
		TextAnimate
	</TextAnimate>

	<svelte:fragment slot="controls">
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
		<pre>{JSON.stringify({ disabled }, null, 2)}</pre>
	</svelte:fragment>
</Hst.Story>
