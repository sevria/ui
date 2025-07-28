import type { Preview } from '@storybook/sveltekit';
import { Provider } from '$lib/index.js';
import '$lib/styles.css';

const preview: Preview = {
  decorators: [
    (story) => ({
      Component: Provider,
      props: {
        children: story
      }
    })
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
