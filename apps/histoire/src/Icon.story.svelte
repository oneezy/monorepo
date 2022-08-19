<script>
  export let Hst
  import Icon from '@packages/components/lib/Icon/Icon.svelte'
  let size = 100;
  let width;
</script>

<Hst.Story
  title="Icons"
  layout={{ type: 'grid', width: 200 }}
  icon="carbon:home"
  iconColor="gray"
>
  <Hst.Variant title="Check">
    <Icon name="check" viewBox="0 0 20 20" {size} />
  </Hst.Variant>
  <Hst.Variant title="Discord">
    <Icon name="discord" {size} />
  </Hst.Variant>
  <Hst.Variant title="Oneezy">
    <Icon name="oneezy-icon" {size} />
  </Hst.Variant>
  <Hst.Variant title="Oneezy Logo">
    <Icon name="oneezy-logo" />
  </Hst.Variant>
</Hst.Story>