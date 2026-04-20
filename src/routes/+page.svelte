<script lang="ts">
  import { Button } from '$lib';
</script>

<svelte:head>
  <title>Sevria UI - Modern component library for Svelte</title>
</svelte:head>

<div class="mx-auto flex h-screen max-w-5xl flex-col items-center justify-center text-center">
  <h1 class="text-4xl leading-snug font-semibold">Modern component library for Svelte</h1>
  <p class="mt-3 max-w-xl text-lg text-muted-foreground">
    Now you can focus on building great things and turning ideas into reality without ever worrying
    about the UI again.
  </p>
  <div class="mt-6 flex gap-3">
    <Button href="/getting-started" size="lg">Get started</Button>
    <Button size="lg" variant="outline">Browse components</Button>
  </div>
</div>
