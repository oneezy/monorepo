<script>
	import { onMount } from 'svelte'
  import { fade, fly, scale } from 'svelte/transition'
  import Button from '../Button/Button.svelte'
	import clickOutside from '../actions/useClickOutside'

  // Props
  export let type = 'dialog' // dialog / modal / tooltip / toast / menu / drawer / sidebar / wizard
  export let text = 'text'
  export let tooltip = null
  // export let description = 'description'
	


  // Private variables
	let dialog
  let icon
  let isOpen = false

  // Get reference to dialog element
	onMount(() => { 
    dialog = document.querySelector('dialog') 
  })



  // Dialog Controls
  const toggle = () => { 
    isOpen = !isOpen
  }

  const show = () => { 
    isOpen = true
  }

	const close = () => { 
    isOpen = false
  }

	const submit = () => { 
    isOpen = false
  }

  // Modal Controls
  const showModal = () => { 
    dialog.showModal() 
  }

  const closeModal = () => { 
    dialog.close() 
  }

  const submitModal = () => { 
    dialog.close() 
  }

</script>

<!-- Dialog
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
{#if type == 'dialog'}

  <Button on:click={toggle}>Dialog</Button>

  {#if isOpen}
  <dialog open
    bind:this={dialog} 
    in:fly={{ y: -100, duration: 500 }} 
    out:scale={{ scale: 2, duration: 500, opacity: 0 }}
		on:introstart="{() => console.log('intro started')}"
		on:outrostart="{() => console.log('outro started')}"
		on:introend="{() => console.log('intro ended')}"
		on:outroend="{() => console.log('outro ended')}"

    class="bg-black text-white fixed inset-0 z-10 backdrop:bg-black/40 w-96 h-96 { $$props.class || ''}">

    { text }

    <menu class="flex items-center justify-center">
      <Button on:click={close} display="compact">Cancel</Button>
      <Button on:click={submit} display="compact">Ok</Button>
    </menu>
  </dialog>
  {/if}

<!-- Modal
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
{:else if type == 'modal'}

  <Button on:click={show}>Modal</Button>

  {#if isOpen}
  <dialog
    bind:this={dialog} 
    in:fly={{ y: -100, duration: 500 }} 
    out:fly={{ y: -100, duration: 500, opacity: 0 }}

    on:introstart={showModal}
    on:outroend={closeModal}
    class="bg-black text-white fixed inset-0 z-10 backdrop:bg-blue-500 w-96">

    <form method="dialog">
      { text }
    </form>

    <menu class="flex items-center justify-end">
      <Button on:click={close} display="compact">Cancel</Button>
      <Button on:click={close} display="compact">Ok</Button>
    </menu>
  </dialog>
  {/if}

<!-- Nav
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
{:else if type == 'nav'}

  {#if isOpen}
    <Button on:click={close} button="icon" icon="close" size="28" box="0 0 20 20">Close</Button>
  {:else}
    <Button on:click={show} button="icon" icon="menu" size="28" box="0 0 20 20">Menu</Button>
  {/if}

  {#if isOpen}
  <dialog open
    bind:this={dialog} 
    transition:fly={{ y: -600, duration: 400, opacity: 1 }}
    use:clickOutside 
    on:outclick={() => (isOpen = false)}
    class="bg-white/80 dark:bg-black/50 backdrop-blur-lg text-black dark:text-white fixed w-full inset-0 m-auto mt-0 pt-20 pb-10 -z-10 border-0 { $$props.class || ''}">

    <form method="dialog" on:keydown on:click={close}>
      <slot />
    </form>
  </dialog>
  {/if}

<!-- Tooltip
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
{:else if type == 'tooltip'}

  <span class="relative { $$props.class || ''}"
    on:mouseenter={show} 
    on:mouseleave={close}>

    { text }

    {#if isOpen}
    <dialog open class="absolute bottom-[calc(100%+10px)] max-w-xs bg-black text-white pointer-events-none"
      bind:this={dialog} 
      in:fly={{ y: 10, duration: 250 }} 
      out:fly={{ y: -10, duration: 250 }}>
  
      {#if tooltip}
        <p class="text-white dark:text-black">{tooltip}</p>
      {:else}
        <slot/>
      {/if}
        
    </dialog>
    {/if}
  </span>

<!-- Dialog (default)
:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::: -->
{:else}

  <!-- <Button on:click={show} icon="menu" size="20" box="0 0 20 20">Dialog</Button>
  <dialog bind:this={dialog} class="fixed inset-0 bg-blue-200 { $$props.class || ''}">
    <slot />
    <menu class="flex gap-4 my-4">
      <Button on:click={close} display="normal">Close</Button>
      <Button on:click={submit} display="normal">Ok</Button>
    </menu>
  </dialog> -->

{/if}

<style>
	dialog {
    will-change: transform;
	}
	dialog::backdrop {
    animation: fade-in 1s;
  }

  @keyframes fade-in {
    from  { opacity: 0; }
    to    { opacity: 1; }
  }
</style>