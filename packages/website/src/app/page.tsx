'use client';

import { Button } from '@shared-libs/ui';
import { useTheme } from '@shared-libs/ui';
import Link from 'next/link';
import { LocalThemeCustomizer } from '../components/local-theme-customizer';

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Shared UI Components</h1>
          <Button onClick={toggleDarkMode} variant="outline">
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <p className="text-lg mb-6">
              This is a website showcasing our shared UI component library. You
              can view and interact with all available components here.
            </p>
            <div className="flex gap-4">
              <Button asChild>
                <Link href="/components">Browse Component Library</Link>
              </Button>
              <Button variant="outline" asChild>
                <Link
                  href="https://github.com/yourusername/shared-libs"
                  target="_blank"
                >
                  View on GitHub
                </Link>
              </Button>
            </div>
          </div>
          <div>
            <LocalThemeCustomizer />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Button Components</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">Default Button</Button>
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="destructive">Destructive Button</Button>
            </div>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Theme Customization</h2>
            <p className="mb-4">
              Our component library supports light and dark themes, and can be
              customized through the ThemeProvider.
            </p>
            <div className="flex gap-4">
              <div className="w-8 h-8 rounded-full bg-primary"></div>
              <div className="w-8 h-8 rounded-full bg-secondary"></div>
              <div className="w-8 h-8 rounded-full bg-accent"></div>
              <div className="w-8 h-8 rounded-full bg-destructive"></div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Built with Next.js, TypeScript, Tailwind CSS and shadcn
          </p>
        </div>
      </div>
    </main>
  );
}
