<script>
	import { hstEvent } from 'histoire/client'
  import TextAnimate from '@packages/components/src/TextAnimate/TextAnimate.svelte';

	export let Hst
	const source = `
  <TextAnimate>
    TextAnimate
  </TextAnimate>
`

	let disabled = false
	const hstEventClick = event => hstEvent('click', event)
</script>

<Hst.Story title="TextAnimate" {source}>
  
	<TextAnimate on:click={hstEventClick}>
		TextAnimate
	</TextAnimate>

	<svelte:fragment slot="controls">
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
		<pre>{JSON.stringify({ disabled }, null, 2)}</pre>
	</svelte:fragment>
</Hst.Story>
