<script>
	import { hstEvent } from 'histoire/client'
  import Dialog from '@packages/components/src/Dialog/Dialog.svelte';

	export let Hst
	const source = `
  <Dialog>
    Dialog
  </Dialog>
`

	let disabled = false
	const hstEventClick = event => hstEvent('click', event)
</script>

<Hst.Story title="Dialog" {source}>
  
	<Dialog on:click={hstEventClick}>
		Dialog
	</Dialog>

	<svelte:fragment slot="controls">
		<Hst.Checkbox bind:value={disabled} title="Disabled" />
		<pre>{JSON.stringify({ disabled }, null, 2)}</pre>
	</svelte:fragment>
</Hst.Story>
