<script lang="ts">
  // import {
  //   CircleUserRound,
  //   LayoutDashboard,
  //   LibraryBig,
  //   LogOut,
  //   Settings,
  //   UsersRound
  // } from '@lucide/svelte';

  // const links = [
  //   { href: '#', label: 'Dashboard', icon: LayoutDashboard },
  //   { href: '#', label: 'Collections', icon: LibraryBig },
  //   { href: '#', label: 'Users', icon: UsersRound },
  //   { href: '#', label: 'Settings', icon: Settings },
  //   { href: '#', label: 'Profile', icon: CircleUserRound },
  //   { href: '#', label: 'Log out', icon: LogOut }
  // ];

  let { children } = $props();
</script>

<div class="bg-background border-border-muted fixed inset-y-0 left-0 w-72 border-r px-6 py-5">
  {@render children?.()}

  <!-- <p class="inline-flex items-center gap-1.5 py-1">
    <img alt="Logo" src="/logo.svg" class="size-6" />
    <span class="text-foreground text-xl font-semibold">Sevria</span>
  </p>

  <div class="-mx-2.5 mt-5 flex flex-col gap-0.5">
    {#each links as { href, label, icon }}
      <a
        {href}
        class="text-foreground hover:bg-background-muted inline-flex items-center gap-2.5 rounded-md px-2.5 py-2"
      >
        <svelte:component this={icon} class="text-foreground-muted size-5 stroke-2" />
        <span class="text-base font-normal">{label}</span>
      </a>
    {/each}
  </div> -->
</div>
