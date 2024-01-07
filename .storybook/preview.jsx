import MyThemeProvider from '../src/styles/MyThemeProvider';
import React from 'react';
import { theme } from '../src/styles/theme';

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: theme.colors.white
        },
        {
          name: 'dark',
          value: theme.colors.primaryColor
        }
      ]
    }
  },

  decorators: [
    (Story) => (
    <MyThemeProvider>
      <Story/>
    </MyThemeProvider>
    )
  ]
};

export default preview;
