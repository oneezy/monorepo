<script>

  /* Props
  *************************/
  export let href;
  // export let icon;
  export let size;
  export let type;
  export let position;
  export let state;

  let _default = `
    flex items-center w-full sm:w-auto font-semibold rounded-full relative
     
    focus:outline-none 
    focus:ring-2 
    focus:ring-offset-2 
    focus:ring-slate-400 
    focus:ring-offset-white 
    dark:focus:ring-slate-600 
    dark:focus:ring-offset-black
    dark:highlight-white/20
    `;
  
  /* Props
  *************************/

  // Size
  let _compact     = `h-8 px-4 gap-4 text-md`;
  let _normal      = `h-12 px-6 gap-4 text-md`; // default
  let _hero        = `h-16 px-12 gap-4 text-2xl`;

  // Type
  let _text        = `bg-transparent`;
  let _icon        = ``;
  let _filled      = `bg-black text-white hover:bg-slate-700 dark:bg-white dark:text-black dark:hover:bg-slate-200`; // default
  let _outlined    = `bg-transparent text-black border border-2 border-black dark:text-white dark:border-white dark:hover:bg-slate-700`;

  // Position
  let _left        = `justify-start`;
  let _right       = `justify-end`;
  let _center      = `justify-center`; // default

  // State
  let _disabled    = ``;
  let _loading     = ``;

</script>


{#if href}
  <a href="{href}" class="{ _default }

    { /* Size 
      *************************/
      size == 'compact' ? _compact : 
      size == 'hero' ? _hero : 
      size == 'normal' ? _normal : _normal }

    {  /* Type 
      *************************/
      type == 'text' ? _text : 
      type == 'icon' ? _icon : 
      type == 'outlined' ? _outlined : 
      type == 'filled' ? _filled : _filled } 

    {  /* Position 
      *************************/
      position == 'left' ? _left : 
      position == 'right' ? _right : 
      position == 'center' ? _center : _center } 

    {  /* State 
      *************************/
      state == 'disabled' ? _disabled : 
      state == 'loading' ? _loading : '' }">
    <slot></slot>
  </a>

{:else}

  <button class="{_default} {_normal} {_filled} {_center}">
    <slot></slot>
  </button>

{/if}
