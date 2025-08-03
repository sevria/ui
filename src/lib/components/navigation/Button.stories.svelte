<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Button from './Button.svelte';

  const { Story } = defineMeta({
    title: 'Components/Navigation/Button',
    component: Button,
    tags: ['autodocs']
  });
</script>

<Story name="Primary">Primary</Story>

<Story name="Secondary" args={{ variant: 'secondary' }}>Secondary</Story>
