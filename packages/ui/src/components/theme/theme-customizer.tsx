import React, { useState } from 'react';
import { useTheme, ThemeColors, defaultTheme } from './theme-provider';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  label,
  value,
  onChange,
}) => {
  return (
    <div className="flex items-center justify-between mb-2">
      <label className="text-sm font-medium">{label}</label>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 rounded cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-20 px-2 py-1 text-xs border rounded"
        />
      </div>
    </div>
  );
};

export interface ThemeCustomizerProps {
  onExport?: (theme: ThemeColors) => void;
  compact?: boolean;
  initialTheme?: ThemeColors;
}

export function ThemeCustomizer({
  onExport,
  compact = false,
  initialTheme = defaultTheme,
}: ThemeCustomizerProps) {
  // Try to use ThemeContext, but fallback to local state if not available
  let contextTheme: {
    theme: ThemeColors;
    setTheme: (theme: ThemeColors) => void;
    resetTheme: () => void;
  } | null = null;

  try {
    contextTheme = useTheme();
  } catch (error) {
    // ThemeContext not available, will use local state
  }

  // Local state for when ThemeContext is not available
  const [localTheme, setLocalTheme] = useState<ThemeColors>(initialTheme);
  const [isOpen, setIsOpen] = useState(!compact);

  // Use context if available, otherwise use local state
  const theme = contextTheme ? contextTheme.theme : localTheme;

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    if (contextTheme) {
      contextTheme.setTheme({ ...theme, [key]: value });
    } else {
      setLocalTheme({ ...localTheme, [key]: value });
    }
  };

  const resetTheme = () => {
    if (contextTheme) {
      contextTheme.resetTheme();
    } else {
      setLocalTheme(initialTheme);
    }
  };

  const handleExport = () => {
    if (onExport) {
      onExport(theme);
    } else {
      const themeString = JSON.stringify(theme, null, 2);
      navigator.clipboard.writeText(themeString).then(() => {
        alert('Theme configuration copied to clipboard');
      });
    }
  };

  return (
    <div className="p-4 border rounded-lg shadow-sm bg-white">
      {compact && (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full px-4 py-2 mb-4 text-sm font-medium text-white bg-primary-500 rounded-md hover:bg-primary-600"
        >
          {isOpen ? 'Collapse Theme Editor' : 'Expand Theme Editor'}
        </button>
      )}

      {isOpen && (
        <>
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-medium">Theme Customization</h3>
            <p className="text-sm text-gray-500">
              Adjust colors to customize component theme
            </p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-medium">Base Colors</h4>
              <ColorPicker
                label="Primary"
                value={theme.primary}
                onChange={(value) => handleColorChange('primary', value)}
              />
              <ColorPicker
                label="Secondary"
                value={theme.secondary}
                onChange={(value) => handleColorChange('secondary', value)}
              />
              <ColorPicker
                label="Background"
                value={theme.background}
                onChange={(value) => handleColorChange('background', value)}
              />
              <ColorPicker
                label="Text"
                value={theme.text}
                onChange={(value) => handleColorChange('text', value)}
              />
            </div>

            <div>
              <h4 className="mb-2 text-sm font-medium">Functional Colors</h4>
              <ColorPicker
                label="Destructive"
                value={theme.destructive}
                onChange={(value) => handleColorChange('destructive', value)}
              />
              <ColorPicker
                label="Border"
                value={theme.border}
                onChange={(value) => handleColorChange('border', value)}
              />
              <ColorPicker
                label="Muted"
                value={theme.muted}
                onChange={(value) => handleColorChange('muted', value)}
              />
              <ColorPicker
                label="Accent"
                value={theme.accent}
                onChange={(value) => handleColorChange('accent', value)}
              />
            </div>
          </div>

          <div className="flex gap-2 mt-4">
            <button
              onClick={resetTheme}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
            >
              Reset
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-md hover:bg-primary-600"
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}
