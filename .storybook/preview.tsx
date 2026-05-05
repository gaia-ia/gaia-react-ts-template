import type { Preview, StoryFn } from '@storybook/react';
import { themes } from '@storybook/theming';
import React from 'react';
import { MemoryRouter } from 'react-router';

import '../src/index.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    backgrounds: {
      disable: true,
    },
    docs: {
      theme: themes.dark,
    },
  },
  decorators: [
    (Story: StoryFn) => {
      return (
        <div className="dark">
          <MemoryRouter>
            <Story />
          </MemoryRouter>
        </div>
      );
    },
  ],
};

export default preview;
