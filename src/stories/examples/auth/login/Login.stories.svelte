<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Login from './Login.svelte';

  const { Story } = defineMeta({
    title: 'Examples/Auth/Login',
    component: Login,
    parameters: {
      layout: 'fullscreen'
    }
  });
</script>

<Story name="Demo" />
