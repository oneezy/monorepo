<script>
	let _class = null; 
	export { _class as class };

  export let id = null;
  export let grid = null;
  export let flex = null;

  let _default = `container mx-auto px-4 md:px-5 max-w-screen-xl`;
  let _grid = `grid`;
  let _flex = `flex`;
  let _center = `items-center justify-center`;
</script>

<div {id} class="{ _default } { _class || '' }

{ 
  /* Layout 
  *************************/
  grid == 'center' ? _grid : 
  grid ? _grid : 

  flex == 'center' ? _flex :
  flex ? _flex : ''

}">

  <slot />

</div>