import React, { createContext, useContext, useState, useEffect } from 'react';

// 定义主题类型
export type ThemeColors = {
  primary: string;
  secondary: string;
  background: string;
  text: string;
  destructive: string;
  border: string;
  muted: string;
  accent: string;
};

// 默认主题
export const defaultTheme: ThemeColors = {
  primary: '#0ea5e9', // blue-500
  secondary: '#f3f4f6', // gray-100
  background: '#ffffff',
  text: '#171717', // neutral-900
  destructive: '#ef4444', // red-500
  border: '#e5e7eb', // gray-200
  muted: '#f9fafb', // gray-50
  accent: '#f3f4f6', // gray-100
};

// 创建主题上下文
type ThemeContextType = {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
  resetTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultThemeColors?: ThemeColors;
}

export function ThemeProvider({
  children,
  defaultThemeColors = defaultTheme,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeColors>(defaultThemeColors);

  // 重置主题
  const resetTheme = () => setTheme(defaultThemeColors);

  // 应用主题到 CSS 变量
  useEffect(() => {
    const root = document.documentElement;
    
    // 设置主色调
    root.style.setProperty('--color-primary', theme.primary);
    root.style.setProperty('--color-primary-foreground', '#ffffff');
    
    // 设置次要色调
    root.style.setProperty('--color-secondary', theme.secondary);
    root.style.setProperty('--color-secondary-foreground', theme.text);
    
    // 设置背景和文本
    root.style.setProperty('--color-background', theme.background);
    root.style.setProperty('--color-foreground', theme.text);
    
    // 设置危险色
    root.style.setProperty('--color-destructive', theme.destructive);
    root.style.setProperty('--color-destructive-foreground', '#ffffff');
    
    // 设置边框和静音色
    root.style.setProperty('--color-border', theme.border);
    root.style.setProperty('--color-muted', theme.muted);
    root.style.setProperty('--color-muted-foreground', '#6b7280'); // gray-500
    
    // 设置强调色
    root.style.setProperty('--color-accent', theme.accent);
    root.style.setProperty('--color-accent-foreground', theme.text);
    
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, resetTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// 使用主题的钩子
export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
} 