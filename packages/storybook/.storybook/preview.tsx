import React, { useEffect } from 'react';
import './tailwind.css';
import { ThemeProvider } from '@shared-libs/ui';

const withThemeProvider = (Story: React.ComponentType, context: any) => {
  const selectedTheme = context.globals.theme;

  return (
    <ThemeProvider defaultThemeColors={selectedTheme}>
      <Story />
    </ThemeProvider>
  );
};

export const defaultTheme = {
  primary: '#0ea5e9', // blue-500
  secondary: '#f3f4f6', // gray-100
  background: '#ffffff',
  text: '#171717', // neutral-900
  destructive: '#ef4444', // red-500
  border: '#e5e7eb', // gray-200
  muted: '#f9fafb', // gray-50
  accent: '#f3f4f6', // gray-100
};

const preview = {
  globalTypes: {
    theme: defaultTheme,
  },
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
