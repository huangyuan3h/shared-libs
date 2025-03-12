import React, { useState } from 'react';
import { useTheme, ThemeColors } from './theme-provider';

interface ColorPickerProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ label, value, onChange }) => {
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

export function ThemeCustomizer({ onExport, compact = false }: ThemeCustomizerProps) {
  const { theme, setTheme, resetTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(!compact);

  const handleColorChange = (key: keyof ThemeColors, value: string) => {
    setTheme({ ...theme, [key]: value });
  };

  const handleExport = () => {
    if (onExport) {
      onExport(theme);
    } else {
      // 复制到剪贴板
      const themeString = JSON.stringify(theme, null, 2);
      navigator.clipboard.writeText(themeString).then(() => {
        alert('主题配置已复制到剪贴板');
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
          {isOpen ? '收起主题编辑器' : '展开主题编辑器'}
        </button>
      )}

      {isOpen && (
        <>
          <div className="mb-4">
            <h3 className="mb-2 text-lg font-medium">主题定制</h3>
            <p className="text-sm text-gray-500">调整颜色以自定义组件主题</p>
          </div>

          <div className="space-y-4">
            <div>
              <h4 className="mb-2 text-sm font-medium">基础颜色</h4>
              <ColorPicker
                label="主色调"
                value={theme.primary}
                onChange={(value) => handleColorChange('primary', value)}
              />
              <ColorPicker
                label="次要色调"
                value={theme.secondary}
                onChange={(value) => handleColorChange('secondary', value)}
              />
              <ColorPicker
                label="背景色"
                value={theme.background}
                onChange={(value) => handleColorChange('background', value)}
              />
              <ColorPicker
                label="文本色"
                value={theme.text}
                onChange={(value) => handleColorChange('text', value)}
              />
            </div>

            <div>
              <h4 className="mb-2 text-sm font-medium">功能颜色</h4>
              <ColorPicker
                label="危险色"
                value={theme.destructive}
                onChange={(value) => handleColorChange('destructive', value)}
              />
              <ColorPicker
                label="边框色"
                value={theme.border}
                onChange={(value) => handleColorChange('border', value)}
              />
              <ColorPicker
                label="静音色"
                value={theme.muted}
                onChange={(value) => handleColorChange('muted', value)}
              />
              <ColorPicker
                label="强调色"
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
              重置
            </button>
            <button
              onClick={handleExport}
              className="px-4 py-2 text-sm font-medium text-white bg-primary-500 rounded-md hover:bg-primary-600"
            >
              导出主题
            </button>
          </div>
        </>
      )}
    </div>
  );
} 