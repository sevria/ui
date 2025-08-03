<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Link from './Link.svelte';

  const { Story } = defineMeta({
    title: 'Components/Navigation/Link',
    component: Link,
    tags: ['autodocs']
  });
</script>

<Story name="Demo" args={{ href: '/' }}>Go home</Story>
