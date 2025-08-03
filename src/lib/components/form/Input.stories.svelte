<script module>
  import { defineMeta } from '@storybook/addon-svelte-csf';
  import Input from './Input.svelte';

  const { Story } = defineMeta({
    title: 'Components/Form/Input',
    component: Input,
    tags: ['autodocs'],
    args: {
      class: 'w-80'
    }
  });
</script>

<Story name="Basic" args={{ placeholder: 'Your name' }} />

<Story name="Password" args={{ placeholder: 'Your password', type: 'password' }} />
