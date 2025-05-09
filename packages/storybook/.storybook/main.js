/** @type { import('@storybook/react-vite').StorybookConfig } */
const path = require('path');

const config = {
  stories: [
    '../src/stories/**/*.mdx',
    '../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    disableTelemetry: true,
  },
  viteFinal: async (config) => {
    config.resolve = config.resolve || {};
    config.resolve.alias = {
      ...(config.resolve.alias || {}),
      '@shared-libs/ui': path.resolve(__dirname, '../../ui/src'),
      '@': path.resolve(__dirname, '../../ui/src'),
    };
    return config;
  },
  managerEntries: (entries = []) => [
    ...entries,
    require.resolve('./ThemeToolbarAddon'),
  ],
};

export default config;
