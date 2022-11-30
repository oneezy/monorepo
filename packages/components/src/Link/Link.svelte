<script>
  import { base } from '$app/paths'
  import { page } from '$app/stores';
	import { activeSectionId } from '../Section/store';

  /* Props
  *************************/
  export let usebase = false;
  export let href = '';
  // export let size;
  // export let type;
  export let state = null;
  // export let icon;
  
  let _default = `
    flex items-center justify-center font-normal text-lg py-2 relative group
    
    hover:text-dark
    hover:headerActive:text-lite
    
    focus:outline-none
    focus:text-dark
    focus:headerActive:text-lite

    dark:hover:text-lite
    dark:hover:headerActive:text-dark
    
    dark:focus:text-lite
    dark:focus:headerActive:text-dark
  `;
  
  /* Private Variables 
  *************************/

  // Type
  let _link       = `h-8 px-4 gap-4 text-md`;
  let _button     = `h-8 px-4 gap-4 text-md`;

  // State
  let _normal      = `text--neutral`;
  let _active      = `active font-medium text--primary parentsUntilActive:text-lite dark:parentsUntilActive:text-dark`;
  let _disabled    = ``;
  let _loading     = ``;
  
</script>

<a 
  href="{usebase === true ? base : ''}{href}"
  {usebase}
  {state} 
  class="{ _default }

  {  /* State 
    *************************/
    `#${$activeSectionId}` === href ? _active : 
    $page.url.pathname === href ? _active :
    state == 'disabled' ? _disabled : 
    state == 'loading' ? _loading : 
    state == 'normal' ? _normal : _normal } 
    
  {  /* Custom class... 
    *************************/
    $$restProps.class || ''}" {...$$restProps}>
    
  <slot></slot>
  
  <b class="
    h-[3px] 
    w-full 
    inline-block 
    absolute 
    top-full

    parentActive:bg--brand">
  </b>
</a>