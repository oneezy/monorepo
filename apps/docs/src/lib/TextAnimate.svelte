
<span class="{`
  text-animate block
  text-transparent bg-clip-text bg-gradient-to-r 
  from-brand-primary via-brand-secondary to-brand-primary 
  dark:from-brand-primary dark:via-brand-secondary-6 dark:to-brand-primary-6

  ${$$props.class || ''}`}">
  
  <slot/>
</span>

<style>
  .text-animate {
    background-size: 200% auto;
    animation: shine 8s ease infinite;
    animation-delay: 4s;
  }
  @keyframes shine {
    50%, 100% {
      background-position: 200% center;
    }
  }
</style>