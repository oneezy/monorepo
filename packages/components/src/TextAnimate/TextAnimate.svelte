<script>
  import { onMount } from 'svelte'
	export let isPlaying = null;

  // wait for a bit...
  function wait(time = 250) {
    setTimeout(() => {
      isPlaying = true
    }, time);
  }

  // start animation after page load
	onMount(() => {
    wait();
	});

  // pause animation when user leaves
	function handleBlur(e) {
    isPlaying = false
	}

  // start animation when user returns
	function handleFocus(e) {
    isPlaying = true
	}

  // pause animation when user scrolls
  // start animation when user stops scrollingS
  function handleScroll(e) {
    isPlaying = false
    wait()
  }

  // pause animation when user resizes window
  // start animation when user stops resizing window
  function handleResize(e) {
    isPlaying = false
    wait()
  }
</script>

<svelte:window on:blur={handleBlur} on:focus={handleFocus} on:scroll={handleScroll} on:resize={handleResize} />


<span {...$$restProps} class="text-animate transform-gpu

  {  /* Play Animation 
    *************************/
    isPlaying ? 'text-animate--playing' : 'text-animate--paused' }

  {`
  text-transparent bg-clip-text bg-gradient-to-r 
  from-brand-primary via-brand-secondary to-brand-primary 
  dark:from-brand-primary dark:via-brand-secondary-6 dark:to-brand-primary-6

  ${$$props.class || ''}`}">
  
  <slot/>
</span>

<style>
  .text-animate {
    background-size: 200% auto;
    animation: shine 8s 4s ease infinite var(--textAnimationState);
    /* animation-delay: 4s; */
  }

  .text-animate--paused {
    will-change: background-position, animation, animation-play-state, scroll-position;
    --textAnimationState: paused;
  }

  .text-animate--playing {
    --textAnimationState: running;
  }
  @keyframes shine {
    50%, 100% {
      background-position: 200% center;
    }
  }
</style>