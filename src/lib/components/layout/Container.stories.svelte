<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Container from './Container.svelte';

  const { Story } = defineMeta({
    title: 'Components/Layout/Container',
    component: Container,
    tags: ['autodocs']
  });
</script>

<Story name="Demo">
  <p>
    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non consequatur, quo quod deleniti
    eveniet nam, accusamus aliquam nobis libero laboriosam recusandae sunt facere obcaecati quaerat
    magnam ipsa perspiciatis ad praesentium?
  </p>
</Story>
