<script lang="ts">
  import type { HTMLAttributes, HTMLButtonAttributes } from 'svelte/elements';
  import { twMerge } from 'tailwind-merge';

  type Props = HTMLButtonAttributes &
    HTMLAttributes<HTMLAnchorElement> & {
      href?: string;
      size?: 'sm' | 'md' | 'lg';
      square?: boolean;
      variant?: 'primary' | 'secondary' | 'ghost';
    };

  let {
    children,
    class: className,
    href,
    size = 'md',
    square,
    variant = 'primary',
    ...rest
  }: Props = $props();

  let _class = twMerge(
    'cursor-pointer flex items-center justify-center',
    'font-semibold transition-colors duration-75',
    'outline-none ring-0 ring-offset-background focus-visible:ring-offset-2 focus-visible:ring-2 focus-visible:ring-border-brand',
    size === 'md' && 'h-10 px-4 text-base rounded-md',
    size === 'lg' && 'h-11 px-5 text-base rounded-md',
    square && 'px-0 w-8 h-8 rounded-lg',
    variant === 'primary' && 'bg-background-brand text-white hover:bg-background-brand-active',
    variant === 'secondary' &&
      'bg-background-semimuted text-foreground border border-border hover:bg-background-muted',
    variant === 'ghost' && 'hover:bg-background-semimuted',
    className?.toString()
  );
</script>

{#if href}
  <a class={_class} {href} {...rest}>
    {@render children?.()}
  </a>
{:else}
  <button class={_class} {...rest}>
    {@render children?.()}
  </button>
{/if}
