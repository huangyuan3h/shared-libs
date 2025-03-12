'use client';

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
}

/**
 * 主题自定义器组件
 * 允许用户自定义主题颜色并导出
 */
export const ThemeCustomizer: React.FC<ThemeCustomizerProps> = ({
  onExport,
  compact = false,
}) => {
  const { theme: currentTheme, setTheme } = useTheme();
  const initialTheme = currentTheme || defaultTheme;

  const [localTheme, setLocalTheme] = useState<ThemeColors>(initialTheme);
  const [isOpen, setIsOpen] = useState(!compact);

  // 处理颜色变化
  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    setLocalTheme({
      ...localTheme,
      [key]: value,
    });
  };

  // 导出主题
  const handleExport = () => {
    setTheme(localTheme);
    if (onExport) {
      onExport(localTheme);
    }
  };

  // 重置主题
  const handleReset = () => {
    setLocalTheme(initialTheme);
  };

  // 切换面板展开/折叠
  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="theme-customizer">
      <div className="theme-customizer-header">
        <h3 className="theme-customizer-title">主题定制</h3>
        <button
          className="theme-customizer-toggle"
          onClick={toggleOpen}
          aria-expanded={isOpen}
        >
          {isOpen ? '折叠' : '展开'}
        </button>
      </div>

      {isOpen && (
        <div className="theme-customizer-content">
          <div className="theme-customizer-colors">
            <div className="theme-customizer-color-group">
              <h4 className="theme-customizer-subtitle">主要颜色</h4>
              <div className="theme-customizer-color-item">
                <label htmlFor="primary-color">主色调</label>
                <input
                  id="primary-color"
                  type="color"
                  value={localTheme.primary}
                  onChange={(e) => handleColorChange('primary', e.target.value)}
                />
              </div>
              <div className="theme-customizer-color-item">
                <label htmlFor="secondary-color">次要色调</label>
                <input
                  id="secondary-color"
                  type="color"
                  value={localTheme.secondary}
                  onChange={(e) =>
                    handleColorChange('secondary', e.target.value)
                  }
                />
              </div>
              <div className="theme-customizer-color-item">
                <label htmlFor="accent-color">强调色</label>
                <input
                  id="accent-color"
                  type="color"
                  value={localTheme.accent}
                  onChange={(e) => handleColorChange('accent', e.target.value)}
                />
              </div>
            </div>

            <div className="theme-customizer-color-group">
              <h4 className="theme-customizer-subtitle">背景和文本</h4>
              <div className="theme-customizer-color-item">
                <label htmlFor="background-color">背景色</label>
                <input
                  id="background-color"
                  type="color"
                  value={localTheme.background}
                  onChange={(e) =>
                    handleColorChange('background', e.target.value)
                  }
                />
              </div>
              <div className="theme-customizer-color-item">
                <label htmlFor="foreground-color">文本色</label>
                <input
                  id="foreground-color"
                  type="color"
                  value={localTheme.foreground}
                  onChange={(e) =>
                    handleColorChange('foreground', e.target.value)
                  }
                />
              </div>
            </div>

            <div className="theme-customizer-color-group">
              <h4 className="theme-customizer-subtitle">其他颜色</h4>
              <div className="theme-customizer-color-item">
                <label htmlFor="destructive-color">危险色</label>
                <input
                  id="destructive-color"
                  type="color"
                  value={localTheme.destructive}
                  onChange={(e) =>
                    handleColorChange('destructive', e.target.value)
                  }
                />
              </div>
              <div className="theme-customizer-color-item">
                <label htmlFor="border-color">边框色</label>
                <input
                  id="border-color"
                  type="color"
                  value={localTheme.border}
                  onChange={(e) => handleColorChange('border', e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="theme-customizer-actions">
            <button
              className="theme-customizer-button theme-customizer-button-reset"
              onClick={handleReset}
            >
              重置
            </button>
            <button
              className="theme-customizer-button theme-customizer-button-export"
              onClick={handleExport}
            >
              应用主题
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
