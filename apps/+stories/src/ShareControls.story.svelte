<script>
  import Button from '@packages/components/src/components/Button/Button.svelte';

  export let Hst

  let disabled = false
  let content = 'Hello world'
</script>

<Hst.Story group="examples" title="Shared Controls">

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
  
  <svelte:fragment slot="controls">
    <Hst.Text bind:value={content} title="Content" />
    <Hst.Checkbox bind:value={disabled} title="Disabled" />
  </svelte:fragment>

</Hst.Story>