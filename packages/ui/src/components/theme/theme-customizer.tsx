'use client';

import React, { useState, useEffect } from 'react';
import {
  useTheme,
  ThemeColors,
  defaultTheme,
  lightTheme,
  darkTheme,
} from './theme-provider';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  colorKey: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  label,
  value,
  onChange,
  colorKey,
}) => {
  return (
    <div className="flex items-center justify-between mb-3">
      <label htmlFor={`${colorKey}-color`} className="text-sm font-medium">
        {label}
      </label>
      <div className="flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-full border border-border"
          style={{ backgroundColor: value }}
        />
        <input
          id={`${colorKey}-color`}
          type="color"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-8 h-8 rounded cursor-pointer"
        />
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          className="w-24 px-2 py-1 text-xs border rounded"
        />
      </div>
    </div>
  );
};

interface RadiusPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  colorKey: string;
}

const RadiusPicker: React.FC<RadiusPickerProps> = ({
  label,
  value,
  onChange,
  colorKey,
}) => {
  // 从 rem 值中提取数字部分
  const numericValue = parseFloat(value) || 0.5;

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseFloat(e.target.value);
    onChange(`${newValue}rem`);
  };

  return (
    <div className="flex flex-col mb-4">
      <div className="flex items-center justify-between mb-2">
        <label htmlFor={`${colorKey}-radius`} className="text-sm font-medium">
          {label}
        </label>
        <span className="text-xs text-muted-foreground">{value}</span>
      </div>
      <input
        id={`${colorKey}-radius`}
        type="range"
        min="0"
        max="2"
        step="0.125"
        value={numericValue}
        onChange={handleSliderChange}
        className="w-full"
      />
      <div className="flex justify-between mt-1">
        <span className="text-xs text-muted-foreground">0rem</span>
        <span className="text-xs text-muted-foreground">1rem</span>
        <span className="text-xs text-muted-foreground">2rem</span>
      </div>
    </div>
  );
};

export interface ThemeCustomizerProps {
  onExport?: (theme: ThemeColors) => void;
  compact?: boolean;
  position?: 'top' | 'right' | 'bottom' | 'left';
  showTitle?: boolean;
  className?: string;
}

/**
 * Theme Customizer Component
 * Allows users to customize theme colors and export them
 */
export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  onExport,
  compact = false,
  position = 'right',
  showTitle = true,
  className = '',
}) => {
  const {
    theme: currentTheme,
    setTheme,
    isDarkMode,
    toggleDarkMode,
    resetTheme,
  } = useTheme();

  const [localTheme, setLocalTheme] = useState<ThemeColors>(
    currentTheme || defaultTheme,
  );
  const [isOpen, setIsOpen] = useState(!compact);

  // Update local theme when current theme changes
  useEffect(() => {
    setLocalTheme(currentTheme || defaultTheme);
  }, [currentTheme]);

  // Handle color change
  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    setLocalTheme({
      ...localTheme,
      [key]: value,
    });
  };

  // Export theme
  const handleExport = () => {
    setTheme(localTheme);
    if (onExport) {
      onExport(localTheme);
    }
  };

  // Reset theme
  const handleReset = () => {
    resetTheme();
  };

  // Switch between light and dark theme
  const handleThemeSwitch = (isDark: boolean) => {
    const baseTheme = isDark ? darkTheme : lightTheme;
    setLocalTheme(baseTheme);
    setTheme(baseTheme);
  };

  // Toggle panel expand/collapse
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  // Get position classes
  const getPositionClasses = () => {
    switch (position) {
      case 'top':
        return 'top-0 left-1/2 transform -translate-x-1/2';
      case 'right':
        return 'top-1/2 right-0 transform -translate-y-1/2';
      case 'bottom':
        return 'bottom-0 left-1/2 transform -translate-x-1/2';
      case 'left':
        return 'top-1/2 left-0 transform -translate-y-1/2';
      default:
        return 'top-1/2 right-0 transform -translate-y-1/2';
    }
  };

  return (
    <div className={`theme-customizer ${getPositionClasses()} ${className}`}>
      <div className="theme-customizer-header p-3 border-b flex items-center justify-between bg-card">
        {showTitle && (
          <h3 className="theme-customizer-title text-lg font-medium">
            Theme Customizer
          </h3>
        )}
        <div className="flex items-center gap-2">
          <button
            className="theme-customizer-toggle p-2 rounded-md hover:bg-muted"
            onClick={toggleDarkMode}
            aria-label={
              isDarkMode ? 'Switch to light mode' : 'Switch to dark mode'
            }
          >
            {isDarkMode ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="5"></circle>
                <line x1="12" y1="1" x2="12" y2="3"></line>
                <line x1="12" y1="21" x2="12" y2="23"></line>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
                <line x1="1" y1="12" x2="3" y2="12"></line>
                <line x1="21" y1="12" x2="23" y2="12"></line>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
              </svg>
            )}
          </button>
          <button
            className="theme-customizer-toggle p-2 rounded-md hover:bg-muted"
            onClick={toggleOpen}
            aria-expanded={isOpen}
            aria-label={isOpen ? 'Collapse' : 'Expand'}
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="18 15 12 9 6 15"></polyline>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="theme-customizer-content p-4 bg-background border border-t-0 max-h-[80vh] overflow-y-auto">
          <div className="theme-customizer-theme-switch mb-6">
            <h4 className="theme-customizer-subtitle text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
              Theme Mode
            </h4>
            <div className="flex gap-4">
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium flex-1 ${
                  !isDarkMode
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                }`}
                onClick={() => handleThemeSwitch(false)}
              >
                Light
              </button>
              <button
                className={`px-4 py-2 rounded-md text-sm font-medium flex-1 ${
                  isDarkMode
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-secondary text-secondary-foreground'
                }`}
                onClick={() => handleThemeSwitch(true)}
              >
                Dark
              </button>
            </div>
          </div>

          <div className="theme-customizer-radius mb-6">
            <h4 className="theme-customizer-subtitle text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
              Border Radius
            </h4>
            <RadiusPicker
              label="Border Radius"
              value={localTheme.radius}
              onChange={(value) => handleColorChange('radius', value)}
              colorKey="radius"
            />
            <div className="flex gap-2 mt-2">
              {['0rem', '0.25rem', '0.5rem', '0.75rem', '1rem'].map(
                (radius) => (
                  <button
                    key={radius}
                    className={`w-8 h-8 border ${
                      localTheme.radius === radius
                        ? 'border-primary bg-primary/10'
                        : 'border-border'
                    }`}
                    style={{ borderRadius: radius }}
                    onClick={() => handleColorChange('radius', radius)}
                    aria-label={`Set radius to ${radius}`}
                  />
                ),
              )}
            </div>
          </div>

          <div className="theme-customizer-colors space-y-6">
            <div className="theme-customizer-color-group">
              <h4 className="theme-customizer-subtitle text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                Primary Colors
              </h4>
              <ColorPicker
                label="Primary"
                value={localTheme.primary}
                onChange={(value) => handleColorChange('primary', value)}
                colorKey="primary"
              />
              <ColorPicker
                label="Primary Foreground"
                value={localTheme.primaryForeground}
                onChange={(value) =>
                  handleColorChange('primaryForeground', value)
                }
                colorKey="primary-foreground"
              />
              <ColorPicker
                label="Secondary"
                value={localTheme.secondary}
                onChange={(value) => handleColorChange('secondary', value)}
                colorKey="secondary"
              />
              <ColorPicker
                label="Secondary Foreground"
                value={localTheme.secondaryForeground}
                onChange={(value) =>
                  handleColorChange('secondaryForeground', value)
                }
                colorKey="secondary-foreground"
              />
            </div>

            <div className="theme-customizer-color-group">
              <h4 className="theme-customizer-subtitle text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                Background & Text
              </h4>
              <ColorPicker
                label="Background"
                value={localTheme.background}
                onChange={(value) => handleColorChange('background', value)}
                colorKey="background"
              />
              <ColorPicker
                label="Foreground"
                value={localTheme.foreground}
                onChange={(value) => handleColorChange('foreground', value)}
                colorKey="foreground"
              />
              <ColorPicker
                label="Card"
                value={localTheme.card}
                onChange={(value) => handleColorChange('card', value)}
                colorKey="card"
              />
              <ColorPicker
                label="Card Foreground"
                value={localTheme.cardForeground}
                onChange={(value) => handleColorChange('cardForeground', value)}
                colorKey="card-foreground"
              />
            </div>

            <div className="theme-customizer-color-group">
              <h4 className="theme-customizer-subtitle text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                Accent Colors
              </h4>
              <ColorPicker
                label="Accent"
                value={localTheme.accent}
                onChange={(value) => handleColorChange('accent', value)}
                colorKey="accent"
              />
              <ColorPicker
                label="Accent Foreground"
                value={localTheme.accentForeground}
                onChange={(value) =>
                  handleColorChange('accentForeground', value)
                }
                colorKey="accent-foreground"
              />
              <ColorPicker
                label="Muted"
                value={localTheme.muted}
                onChange={(value) => handleColorChange('muted', value)}
                colorKey="muted"
              />
              <ColorPicker
                label="Muted Foreground"
                value={localTheme.mutedForeground}
                onChange={(value) =>
                  handleColorChange('mutedForeground', value)
                }
                colorKey="muted-foreground"
              />
            </div>

            <div className="theme-customizer-color-group">
              <h4 className="theme-customizer-subtitle text-sm font-semibold mb-3 text-muted-foreground uppercase tracking-wider">
                Utility Colors
              </h4>
              <ColorPicker
                label="Destructive"
                value={localTheme.destructive}
                onChange={(value) => handleColorChange('destructive', value)}
                colorKey="destructive"
              />
              <ColorPicker
                label="Destructive Foreground"
                value={localTheme.destructiveForeground}
                onChange={(value) =>
                  handleColorChange('destructiveForeground', value)
                }
                colorKey="destructive-foreground"
              />
              <ColorPicker
                label="Border"
                value={localTheme.border}
                onChange={(value) => handleColorChange('border', value)}
                colorKey="border"
              />
              <ColorPicker
                label="Input"
                value={localTheme.input}
                onChange={(value) => handleColorChange('input', value)}
                colorKey="input"
              />
              <ColorPicker
                label="Ring"
                value={localTheme.ring}
                onChange={(value) => handleColorChange('ring', value)}
                colorKey="ring"
              />
            </div>
          </div>

          <div className="theme-customizer-actions flex justify-between mt-6 pt-4 border-t">
            <button
              className="theme-customizer-button theme-customizer-button-reset px-4 py-2 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80"
              onClick={handleReset}
            >
              Reset
            </button>
            <button
              className="theme-customizer-button theme-customizer-button-export px-4 py-2 text-sm font-medium bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              onClick={handleExport}
            >
              Apply Theme
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
