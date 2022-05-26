<script>
  import Logo from "$lib/Logo/Logo.svelte";
  import Theme from "$lib/Theme.svelte";
  import Nav from "$lib/Nav.svelte";
</script>

<div class="container h-screen w-full mx-auto flex flex-col items-center justify-center">
  <Logo />
  <Theme class="mb-6" />
  <Nav />
</div>