<script>
	import { hstEvent } from 'histoire/client'
  import Img from '@packages/components/src/Img/Img.svelte';

	export let Hst
	const source = `
  <Img>
    Img
  </Img>
`

	let disabled = false
	const hstEventClick = event => hstEvent('click', event)
</script>

<Hst.Story title="Img" {source}>
  
	<Img on:click={hstEventClick}>
		Img
	</Img>

	<svelte:fragment slot="controls">
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
		<pre>{JSON.stringify({ disabled }, null, 2)}</pre>
	</svelte:fragment>
</Hst.Story>
