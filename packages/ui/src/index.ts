// 导出所有组件
export * from './components';

// 导出工具函数
export * from './utils';

// 导出钩子函数
export * from './hooks';

// 直接导出Button组件，确保向后兼容
export { Button, buttonVariants } from './components/ui/button';

// 直接导出Header组件，确保向后兼容
export { Header } from './components/ui/header';

// 直接导出ThemeCustomizer组件，确保向后兼容
export { ThemeCustomizer } from './components/theme/theme-customizer';

// 直接导出ThemeProvider组件和相关类型，确保向后兼容
export {
  ThemeProvider,
  useTheme,
  type ThemeColors,
  defaultTheme,
  lightTheme,
  darkTheme,
} from './components/theme/theme-provider';
