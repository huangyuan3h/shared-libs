'use client';

import { Button } from '@shared-libs/ui';
import { useTheme } from '@shared-libs/ui';
import Link from 'next/link';

export default function Home() {
  const { isDarkMode, toggleDarkMode } = useTheme();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">Shared UI Components</h1>
          <Button onClick={toggleDarkMode} variant="outline">
            {isDarkMode ? '切换到亮色模式' : '切换到暗色模式'}
          </Button>
        </div>

        <div className="mb-12">
          <p className="text-lg mb-6">
            这是一个展示我们共享 UI
            组件库的网站。您可以在这里查看和交互所有可用的组件。
          </p>
          <Button asChild>
            <Link href="/components">浏览组件库</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">按钮组件</h2>
            <div className="flex flex-wrap gap-4">
              <Button variant="default">默认按钮</Button>
              <Button variant="primary">主要按钮</Button>
              <Button variant="secondary">次要按钮</Button>
              <Button variant="destructive">危险按钮</Button>
            </div>
          </div>

          <div className="p-6 border rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">主题定制</h2>
            <p className="mb-4">
              我们的组件库支持亮色和暗色主题，并且可以通过 ThemeProvider
              进行自定义。
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
            基于 Next.js、TypeScript、Tailwind CSS 和 shadcn 构建
          </p>
        </div>
      </div>
    </main>
  );
}
