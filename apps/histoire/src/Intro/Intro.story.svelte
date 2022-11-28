<script>
	import { hstEvent } from 'histoire/client'
  import Intro from '@packages/components/src/Intro/Intro.svelte';

	export let Hst
	const source = `
  <Intro>
    Intro
  </Intro>
`

	let disabled = false
	const hstEventClick = event => hstEvent('click', event)
</script>

<Hst.Story title="Intro" {source}>
  
	<Intro on:click={hstEventClick}>
		Intro
	</Intro>

	<svelte:fragment slot="controls">
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
		<pre>{JSON.stringify({ disabled }, null, 2)}</pre>
	</svelte:fragment>
</Hst.Story>
