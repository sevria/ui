<script lang="ts">
  import type { HTMLAnchorAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import { classNames } from '$lib/index.js';

  type Props = HTMLAnchorAttributes;

  let { class: className, children, ...rest }: Props = $props();
</script>

<a
  class={twMerge(
    'text-foreground-brand rounded-sm font-medium',
    classNames.focusable,
    className?.toString()
  )}
  {...rest}
>
  {@render children?.()}
</a>
