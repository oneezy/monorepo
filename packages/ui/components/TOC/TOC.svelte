<script>
  let CLASS; 
  export { CLASS as class };
</script>

<div class="w-full flex items-center justify-center gap-2 {CLASS || ''}">
  <b class="uppercase font-bold text-black dark:text-white"><slot name="key"></slot></b>
  <i class="flex-1 border-b border-b-slate-300 dark:border-b-slate-800 h-4"></i>
  <span class="text-slate-400 dark:text-slate-500"><slot name="value"></slot></span>
</div>