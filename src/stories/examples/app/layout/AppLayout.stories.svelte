<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import AppLayout from './AppLayout.svelte';

  const { Story } = defineMeta({
    title: 'Examples/App/Layout',
    component: AppLayout,
    parameters: {
      layout: 'fullscreen'
    }
  });
</script>

<Story name="Demo" />
