'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

// 定义主题类型 - 使用 HSL 格式
export type ThemeColors = {
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
};

// 亮色主题 - 基于 shadcn 的 :root 变量
export const lightTheme: ThemeColors = {
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
export const darkTheme: ThemeColors = {
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

// 默认使用亮色主题
export const defaultTheme = lightTheme;

// 创建主题上下文
type ThemeContextType = {
  theme: ThemeColors;
  setTheme: (theme: ThemeColors) => void;
  resetTheme: () => void;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultThemeColors?: ThemeColors;
  defaultDarkMode?: boolean;
}

export function ThemeProvider({
  children,
  defaultThemeColors = defaultTheme,
  defaultDarkMode = false,
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<ThemeColors>(defaultThemeColors);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(defaultDarkMode);

  // 当默认主题改变时更新主题
  useEffect(() => {
    setTheme(defaultThemeColors);
  }, [defaultThemeColors]);

  // 当暗色模式切换时更新主题
  useEffect(() => {
    setTheme(isDarkMode ? darkTheme : lightTheme);
  }, [isDarkMode]);

  // 重置主题
  const resetTheme = () => setTheme(isDarkMode ? darkTheme : lightTheme);

  // 切换暗色/亮色模式
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  // 应用主题到 CSS 变量
  useEffect(() => {
    const root = document.documentElement;

    // 设置基础变量
    root.style.setProperty('--background', theme.background);
    root.style.setProperty('--foreground', theme.foreground);

    // 设置卡片变量
    root.style.setProperty('--card', theme.card);
    root.style.setProperty('--card-foreground', theme.cardForeground);

    // 设置弹出层变量
    root.style.setProperty('--popover', theme.popover);
    root.style.setProperty('--popover-foreground', theme.popoverForeground);

    // 设置主色调
    root.style.setProperty('--primary', theme.primary);
    root.style.setProperty('--primary-foreground', theme.primaryForeground);

    // 设置次要色调
    root.style.setProperty('--secondary', theme.secondary);
    root.style.setProperty('--secondary-foreground', theme.secondaryForeground);

    // 设置静音色
    root.style.setProperty('--muted', theme.muted);
    root.style.setProperty('--muted-foreground', theme.mutedForeground);

    // 设置强调色
    root.style.setProperty('--accent', theme.accent);
    root.style.setProperty('--accent-foreground', theme.accentForeground);

    // 设置危险色
    root.style.setProperty('--destructive', theme.destructive);
    root.style.setProperty(
      '--destructive-foreground',
      theme.destructiveForeground,
    );

    // 设置边框和输入框
    root.style.setProperty('--border', theme.border);
    root.style.setProperty('--input', theme.input);

    // 设置环形和圆角
    root.style.setProperty('--ring', theme.ring);
    root.style.setProperty('--radius', theme.radius);

    // 设置暗色模式类
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme, isDarkMode]);

  return (
    <ThemeContext.Provider
      value={{ theme, setTheme, resetTheme, isDarkMode, toggleDarkMode }}
    >
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
