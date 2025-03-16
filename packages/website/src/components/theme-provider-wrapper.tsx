'use client';

import React from 'react';
import { ThemeProvider } from '@shared-libs/ui';
import type { ThemeColors } from '@shared-libs/ui';

interface ThemeProviderWrapperProps {
  children: React.ReactNode;
  defaultThemeColors?: ThemeColors;
  defaultDarkMode?: boolean;
}

export default function ThemeProviderWrapper({
  children,
  defaultThemeColors,
  defaultDarkMode = false,
}: ThemeProviderWrapperProps) {
  return (
    <ThemeProvider
      defaultThemeColors={defaultThemeColors}
      defaultDarkMode={defaultDarkMode}
    >
      {children}
    </ThemeProvider>
  );
}
