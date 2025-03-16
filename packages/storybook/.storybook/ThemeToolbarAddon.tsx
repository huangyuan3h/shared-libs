import React, { useState, useCallback, useEffect } from 'react';
import { IconButton, WithTooltip } from '@storybook/components';
import { addons, types, useGlobals } from '@storybook/manager-api';
import { Palette, Moon, Sun } from 'lucide-react';

// 定义主题类型 - 使用 HSL 格式
interface ThemeColors {
  background: string;
  foreground: string;
  card: string;
  cardForeground: string;
  popover: string;
  popoverForeground: string;
  primary: string;
  primaryForeground: string;
  secondary: string;
  secondaryForeground: string;
  muted: string;
  mutedForeground: string;
  accent: string;
  accentForeground: string;
  destructive: string;
  destructiveForeground: string;
  border: string;
  input: string;
  ring: string;
  radius: string;
}

// 亮色主题 - 基于 shadcn 的 :root 变量
const lightTheme: ThemeColors = {
  background: 'hsl(0, 0%, 100%)',
  foreground: 'hsl(240, 10%, 3.9%)',
  card: 'hsl(0, 0%, 100%)',
  cardForeground: 'hsl(240, 10%, 3.9%)',
  popover: 'hsl(0, 0%, 100%)',
  popoverForeground: 'hsl(240, 10%, 3.9%)',
  primary: 'hsl(142.1, 76.2%, 36.3%)',
  primaryForeground: 'hsl(355.7, 100%, 97.3%)',
  secondary: 'hsl(240, 4.8%, 95.9%)',
  secondaryForeground: 'hsl(240, 5.9%, 10%)',
  muted: 'hsl(240, 4.8%, 95.9%)',
  mutedForeground: 'hsl(240, 3.8%, 46.1%)',
  accent: 'hsl(240, 4.8%, 95.9%)',
  accentForeground: 'hsl(240, 5.9%, 10%)',
  destructive: 'hsl(0, 84.2%, 60.2%)',
  destructiveForeground: 'hsl(0, 0%, 98%)',
  border: 'hsl(240, 5.9%, 90%)',
  input: 'hsl(240, 5.9%, 90%)',
  ring: 'hsl(142.1, 76.2%, 36.3%)',
  radius: '0.75rem',
};

// 暗色主题 - 基于 shadcn 的 .dark 变量
const darkTheme: ThemeColors = {
  background: 'hsl(20, 14.3%, 4.1%)',
  foreground: 'hsl(0, 0%, 95%)',
  card: 'hsl(24, 9.8%, 10%)',
  cardForeground: 'hsl(0, 0%, 95%)',
  popover: 'hsl(0, 0%, 9%)',
  popoverForeground: 'hsl(0, 0%, 95%)',
  primary: 'hsl(142.1, 70.6%, 45.3%)',
  primaryForeground: 'hsl(144.9, 80.4%, 10%)',
  secondary: 'hsl(240, 3.7%, 15.9%)',
  secondaryForeground: 'hsl(0, 0%, 98%)',
  muted: 'hsl(0, 0%, 15%)',
  mutedForeground: 'hsl(240, 5%, 64.9%)',
  accent: 'hsl(12, 6.5%, 15.1%)',
  accentForeground: 'hsl(0, 0%, 98%)',
  destructive: 'hsl(0, 62.8%, 30.6%)',
  destructiveForeground: 'hsl(0, 85.7%, 97.3%)',
  border: 'hsl(240, 3.7%, 15.9%)',
  input: 'hsl(240, 3.7%, 15.9%)',
  ring: 'hsl(142.4, 71.8%, 29.2%)',
  radius: '0.75rem',
};

// ThemeCustomizer props interface
interface ThemeCustomizerProps {
  onExport?: (theme: ThemeColors) => void;
  compact?: boolean;
  isDarkMode?: boolean;
  onToggleDarkMode?: () => void;
}

// Simple local implementation of ThemeCustomizer
const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  onExport,
  compact = false,
  isDarkMode = false,
  onToggleDarkMode,
}) => {
  const [theme, setTheme] = useState<ThemeColors>(
    isDarkMode ? darkTheme : lightTheme,
  );

  // 当暗色模式变化时更新主题
  useEffect(() => {
    setTheme(isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    setTheme({ ...theme, [key]: value });
  };

  const handleExport = () => {
    if (onExport) {
      onExport(theme);
    }
  };

  // 从 HSL 字符串中提取 H, S, L 值
  const extractHSL = (hslString: string) => {
    const match = hslString.match(/hsl\(([^,]+),\s*([^,]+)%,\s*([^)]+)%\)/);
    if (match) {
      return {
        h: parseFloat(match[1]),
        s: parseFloat(match[2]),
        l: parseFloat(match[3]),
      };
    }
    return { h: 0, s: 0, l: 0 };
  };

  // 将 HSL 值转换为 HSL 字符串
  const hslToString = (h: number, s: number, l: number) => {
    return `hsl(${h}, ${s}%, ${l}%)`;
  };

  return (
    <div
      style={{
        padding: '16px',
        width: '300px',
        color: theme.foreground,
        backgroundColor: theme.background,
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginBottom: '16px',
        }}
      >
        <h3 style={{ margin: 0 }}>Theme Customizer</h3>
        <button
          onClick={onToggleDarkMode}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            padding: '4px',
          }}
        >
          {isDarkMode ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>Primary</label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="color"
            value={(() => {
              const { h, s, l } = extractHSL(theme.primary);
              return `#${Math.round((l / 100) * 255)
                .toString(16)
                .padStart(2, '0')}${Math.round((s / 100) * 255)
                .toString(16)
                .padStart(2, '0')}${Math.round((h / 360) * 255)
                .toString(16)
                .padStart(2, '0')}`;
            })()}
            onChange={(e) => {
              // @ts-ignore - Handle input value
              const hexValue = e.target.value;
              // 简单转换 - 实际应用中可能需要更复杂的转换逻辑
              const r = parseInt(hexValue.slice(1, 3), 16);
              const g = parseInt(hexValue.slice(3, 5), 16);
              const b = parseInt(hexValue.slice(5, 7), 16);

              // 简化的 RGB 到 HSL 转换
              const max = Math.max(r, g, b) / 255;
              const min = Math.min(r, g, b) / 255;
              const l = ((max + min) / 2) * 100;

              let h = 0;
              let s = 0;

              if (max !== min) {
                const d = max - min;
                s =
                  l > 50
                    ? (d / (2 - max - min)) * 100
                    : (d / (max + min)) * 100;

                if (max === r / 255)
                  h = (g / 255 - b / 255) / d + (g < b ? 6 : 0);
                else if (max === g / 255) h = (b / 255 - r / 255) / d + 2;
                else h = (r / 255 - g / 255) / d + 4;

                h = h * 60;
              }

              handleColorChange('primary', `hsl(${h}, ${s}%, ${l}%)`);
            }}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <div style={{ marginBottom: '12px' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>
          Secondary
        </label>
        <div style={{ display: 'flex', gap: '8px' }}>
          <input
            type="color"
            value={(() => {
              const { h, s, l } = extractHSL(theme.secondary);
              return `#${Math.round((l / 100) * 255)
                .toString(16)
                .padStart(2, '0')}${Math.round((s / 100) * 255)
                .toString(16)
                .padStart(2, '0')}${Math.round((h / 360) * 255)
                .toString(16)
                .padStart(2, '0')}`;
            })()}
            onChange={(e) => {
              // @ts-ignore - Handle input value
              const hexValue = e.target.value;
              // 简单转换 - 实际应用中可能需要更复杂的转换逻辑
              const r = parseInt(hexValue.slice(1, 3), 16);
              const g = parseInt(hexValue.slice(3, 5), 16);
              const b = parseInt(hexValue.slice(5, 7), 16);

              // 简化的 RGB 到 HSL 转换
              const max = Math.max(r, g, b) / 255;
              const min = Math.min(r, g, b) / 255;
              const l = ((max + min) / 2) * 100;

              let h = 0;
              let s = 0;

              if (max !== min) {
                const d = max - min;
                s =
                  l > 50
                    ? (d / (2 - max - min)) * 100
                    : (d / (max + min)) * 100;

                if (max === r / 255)
                  h = (g / 255 - b / 255) / d + (g < b ? 6 : 0);
                else if (max === g / 255) h = (b / 255 - r / 255) / d + 2;
                else h = (r / 255 - g / 255) / d + 4;

                h = h * 60;
              }

              handleColorChange('secondary', `hsl(${h}, ${s}%, ${l}%)`);
            }}
            style={{ width: '100%' }}
          />
        </div>
      </div>

      <button
        onClick={handleExport}
        style={{
          padding: '8px 16px',
          backgroundColor: theme.primary,
          color: theme.primaryForeground,
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
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [globals, updateGlobals] = useGlobals();

  const handleExport = (theme: ThemeColors) => {
    console.log('Theme exported:', theme);
    updateGlobals({ ...globals, theme });
  };

  const toggleDarkMode = useCallback(() => {
    setIsDarkMode(!isDarkMode);
    updateGlobals({ ...globals, isDarkMode: !isDarkMode });
  }, [isDarkMode, globals, updateGlobals]);

  return (
    <WithTooltip
      placement="bottom"
      trigger="click"
      visible={isOpen}
      onVisibleChange={(visible: boolean) => setIsOpen(visible)}
      tooltip={
        <div>
          <ThemeCustomizer
            onExport={handleExport}
            compact={isOpen}
            isDarkMode={isDarkMode}
            onToggleDarkMode={toggleDarkMode}
          />
        </div>
      }
    >
      <IconButton title="Theme Customizer" active={isOpen}>
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
