<script>
  import { inview } from "svelte-inview";
	import { activeSectionId } from './store.js'
	
	const options = { threshold: 0.5 }
  const handleEnter = id => ($activeSectionId = id);

	let _class = null; 
	export { _class as class };

  /* Props
  *************************/
  export let id = null;
  export let state = null;
  
  /* Private Variables 
  *************************/
  let _default = `w-full min-h-[50vh] relative`;

  // State
  let _normal      = `text-black dark:text-white`;
  let _active      = `active section--active`;
  let _disabled    = `opacity-50 cursor-not-allowed`;
  let _loading     = ``;
</script>

<section {id} use:inview={options} on:enter={() => handleEnter(id)} class="{ _default }

  {  /* State 
    *************************/
    $activeSectionId === id ? _active : 
    state == 'disabled' ? _disabled : 
    state == 'loading' ? _loading : 
    state == 'normal' ? _normal : _normal } 
  

  {  /* Classes 
    *************************/
    _class || '' }">

  <slot />

</section>