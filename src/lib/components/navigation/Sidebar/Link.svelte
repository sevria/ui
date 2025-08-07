<script lang="ts">
  import type { IconProps } from '@lucide/svelte';
  import type { Component } from 'svelte';
  import type { HTMLAnchorAttributes } from 'svelte/elements';

  type Props = HTMLAnchorAttributes & {
    href: string;
    label?: string;
    icon: Component<IconProps>;
  };

  let { children, href, label = '', icon: Icon }: Props = $props();
</script>

<a
  {href}
  class="text-foreground hover:bg-background-muted inline-flex items-center gap-2.5 rounded-md px-2.5 py-2"
>
  <Icon class="text-foreground-muted size-5 stroke-2" />
  <span class="text-base font-normal">
    {label}
    {@render children?.()}
  </span>
</a>
