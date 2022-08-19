<script>
  import Button from '@packages/components/lib/Button/Button.svelte';

  export let Hst

  let disabled = false
  let content = 'Hello world'
</script>

<Hst.Story>
  <svelte:fragment slot="controls">
    <Hst.Text bind:value={content} title="Content" />
    <Hst.Checkbox bind:value={disabled} title="Disabled" />
  </svelte:fragment>

  <Hst.Variant title="Variant 1">
    <Button {disabled}>
      {content}
    </Button>
  </Hst.Variant>

  <Hst.Variant title="Variant 2">
    <Button {disabled}>
      {content}
    </Button>
  </Hst.Variant>
</Hst.Story>