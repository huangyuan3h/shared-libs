declare module '@shared-libs/ui' {
  import React from 'react';

  export interface ThemeColors {
    primary: string;
    secondary: string;
    background: string;
    text: string;
    destructive: string;
    border: string;
    muted: string;
    accent: string;
  }

  export interface ThemeProviderProps {
    children: React.ReactNode;
    defaultThemeColors?: ThemeColors;
  }

  export interface ThemeCustomizerProps {
    onExport?: (theme: ThemeColors) => void;
    compact?: boolean;
  }

  export const ThemeProvider: React.FC<ThemeProviderProps>;
  export const ThemeCustomizer: React.FC<ThemeCustomizerProps>;
  export const defaultTheme: ThemeColors;

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
}
