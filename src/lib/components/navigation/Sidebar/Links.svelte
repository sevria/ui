<script lang="ts">
  let { children } = $props();
</script>

<div class="-mx-2.5 flex flex-col gap-0.5">
  {@render children?.()}
</div>
