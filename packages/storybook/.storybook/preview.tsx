import React from 'react';
import './tailwind.css';
import { ThemeProvider } from '@shared-libs/ui';

// 主题装饰器
const withThemeProvider = (Story: React.ComponentType) => {
  return (
    <ThemeProvider>
      <Story />
    </ThemeProvider>
  );
};

const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
  decorators: [withThemeProvider],
};

export default preview; 