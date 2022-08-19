<script>
  import { hstEvent } from 'histoire/client'
  import Button from '@packages/components/lib/Button/Button.svelte'

  export let Hst
  const source = `
  <Button>
    Click me!
  </Button>
`

  let disabled = false
  let display = 'normal'
  let button = 'filled'
  let href;
  let icon;
  let position;
  let box;
  let size = 48;

  const hstEventClick = event => hstEvent('click', event)
</script>
  
<Hst.Story title="Button" {source}>
  
  <Button {disabled} {display} {button} {href} {icon} {position} {size} {box} on:click={hstEventClick}>
    test
  </Button>

  <Button button={'outline'} icon="discord" size="48" box={'0 0 28 28'} on:click={hstEventClick}>test</Button>

  <div class="my-2">
    <label>
      <input type="checkbox" bind:checked={disabled} >
      Disabled
    </label>
  </div>

  <div class="my-2">
    <label>
      <input bind:value={icon} >
      Icon
    </label>
  </div>

  <svelte:fragment slot="controls">
    <Hst.Checkbox
      bind:value={disabled}
      title="Disabled"
    />
    <Hst.Select
      bind:value={button}
      options={['text', 'filled', 'outline', 'icon']}
      title="Button"
    />
    <Hst.Select
      bind:value={display}
      options={['compact', 'normal', 'hero']}
      title="Display"
    />
    <Hst.Text
      bind:value={icon}
      title="Icon"
    />
    <Hst.Select
      bind:value={position}
      options={['left', 'right']}
      title="Position"
    />
    <pre>{JSON.stringify({ disabled, button, display, href, icon, position, box }, null, 2)}</pre>
  </svelte:fragment>
</Hst.Story>