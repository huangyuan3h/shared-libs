import React, { useState, useCallback } from 'react';
import { IconButton, WithTooltip } from '@storybook/components';
import { addons, types, useGlobals } from '@storybook/manager-api';
import { Palette } from 'lucide-react';

// Define ThemeColors interface locally
interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  destructive: string;
  border: string;
  muted: string;
  accent: string;
}

// ThemeCustomizer props interface
interface ThemeCustomizerProps {
  onExport?: (theme: ThemeColors) => void;
  compact?: boolean;
}

// Simple local implementation of ThemeCustomizer
const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  onExport,
  compact = false,
}) => {
  const [theme, setTheme] = useState<ThemeColors>({
    primary: '#0ea5e9',
    secondary: '#f3f4f6',
    background: '#ffffff',
    text: '#171717',
    destructive: '#ef4444',
    border: '#e5e7eb',
    muted: '#f9fafb',
    accent: '#f3f4f6',
  });

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    setTheme({ ...theme, [key]: value });
  };

  const handleExport = () => {
    if (onExport) {
      onExport(theme);
    }
  };

  return (
    <div style={{ padding: '16px', width: '300px' }}>
      <h3 style={{ marginBottom: '12px' }}>Theme Customizer</h3>

      <div style={{ marginBottom: '8px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>Primary</label>
        <input
          type="color"
          value={theme.primary}
          onChange={(e) => {
            // @ts-ignore - Handle input value
            const value = e.target.value;
            handleColorChange('primary', value);
          }}
          style={{ width: '100%' }}
        />
      </div>

      <button
        onClick={handleExport}
        style={{
          padding: '8px 16px',
          backgroundColor: theme.primary,
          color: 'white',
          border: 'none',
          borderRadius: '4px',
          cursor: 'pointer',
          marginTop: '12px',
        }}
      >
        Export Theme
      </button>
    </div>
  );
};

const ThemeToolbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [globals, updateGlobals] = useGlobals();

  const handleExport = (theme: ThemeColors) => {
    console.log('Theme exported:', theme);
    updateGlobals({ ...globals, theme });
  };

  return (
    <WithTooltip
      placement="bottom"
      trigger="click"
      visible={isOpen}
      onVisibleChange={(visible: boolean) => setIsOpen(visible)}
      tooltip={
        <div>
          <ThemeCustomizer onExport={handleExport} compact={isOpen} />
        </div>
      }
    >
      <IconButton title="Theme Switcher" active={isOpen}>
        <Palette size={16} />
      </IconButton>
    </WithTooltip>
  );
};

addons.register('storybook/theme-toolbar', () => {
  addons.add('storybook/theme-toolbar/tool', {
    title: 'Theme Customizer',
    type: types.TOOL,
    match: ({ viewMode }) => viewMode === 'story',
    render: () => <ThemeToolbar />,
  });
});
