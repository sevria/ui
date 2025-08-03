<script lang="ts">
  import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';
  import { classNames } from '../index.js';

  type Props = HTMLButtonAttributes &
    HTMLAttributes<HTMLAnchorElement> & {
      disabled?: boolean;
      href?: string;
      size?: 'sm' | 'md' | 'lg';
      square?: boolean;
      variant?: 'primary' | 'secondary';
    };

  let {
    disabled = false,
    children,
    class: className,
    href,
    size = 'md',
    square,
    variant = 'primary',
    ...rest
  }: Props = $props();

  let _class = $derived(
    twMerge(
      'cursor-pointer flex items-center justify-center',
      'font-semibold transition-colors duration-75',
      disabled && 'opacity-70 pointer-events-none',
      size === 'sm' && 'h-9 px-3.5 text-sm rounded-md',
      size === 'md' && 'h-10 px-4 text-base rounded-md',
      size === 'lg' && 'h-11 px-5 text-base rounded-md',
      square && 'px-0 w-8 h-8 rounded-lg',
      variant === 'primary' && 'bg-background-brand text-white hover:bg-background-brand-active',
      variant === 'secondary' &&
        'bg-background-semimuted text-foreground border border-border hover:bg-background-muted',
      classNames.focusable,
      className?.toString()
    )
  );
</script>

{#if href}
  <a class={_class} {href} {...rest}>
    {@render children?.()}
  </a>
{:else}
  <button class={_class} {disabled} {...rest}>
    {@render children?.()}
  </button>
{/if}
