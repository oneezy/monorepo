<script>
  export let title;
  export let subtitle;
</script>

<div class="h-96 bg-slate-300 w-full flex place-content-center">
  <section class="prose md:prose-2xl dark:prose-invert flex flex-col text-center items-center justify-center">
    <h1 class="text-center font-sans">{ title }</h1>
    <p class="font-mono">{ subtitle }</p>
  </section>
</div>

<article class="container prose md:prose-xl dark:prose-invert mt-8 mb-48">
  <slot />
</article>