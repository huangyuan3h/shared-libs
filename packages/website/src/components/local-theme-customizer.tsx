'use client';

import React from 'react';
import { ThemeCustomizer as UIThemeCustomizer } from '@shared-libs/ui';

export function LocalThemeCustomizer() {
  return (
    <div className="w-full border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">Customize Theme</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Try our theme customizer to change colors and see them applied in
        real-time.
      </p>
      <div className="w-full">
        <UIThemeCustomizer compact={true} />
      </div>
    </div>
  );
}
