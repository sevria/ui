<script lang="ts">
  import type { HTMLInputAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = HTMLInputAttributes;

  let { class: className, ...rest }: Props = $props();
</script>

<input
  class={twMerge(
    'bg-background-semimuted border-border text-foreground w-full',
    'placeholder:text-placeholder',
    'focus:border-border-brand focus:ring-border-brand',
    'h-11 rounded-md px-3',
    className?.toString()
  )}
  {...rest}
/>
