declare module '@shared-libs/ui' {
  import React from 'react';

  export interface ThemeColors {
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

  export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultThemeColors?: ThemeColors;
    defaultDarkMode?: boolean;
  }

  export interface ThemeCustomizerProps {
    onExport?: (theme: ThemeColors) => void;
    compact?: boolean;
    isDarkMode?: boolean;
    onToggleDarkMode?: () => void;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export const ThemeCustomizer: React.FC<ThemeCustomizerProps>;
  export const defaultTheme: ThemeColors;
  export const lightTheme: ThemeColors;
  export const darkTheme: ThemeColors;

  export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?:
      | 'default'
      | 'destructive'
      | 'outline'
      | 'secondary'
      | 'ghost'
      | 'link'
      | 'primary';
    size?: 'default' | 'sm' | 'lg' | 'icon';
    asChild?: boolean;
  }

  export const Button: React.ForwardRefExoticComponent<
    ButtonProps & React.RefAttributes<HTMLButtonElement>
  >;

  export function useTheme(): {
    theme: ThemeColors;
    setTheme: (theme: ThemeColors) => void;
    resetTheme: () => void;
    isDarkMode: boolean;
    toggleDarkMode: () => void;
  };
}
