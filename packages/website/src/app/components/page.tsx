'use client';

import { Button } from '@shared-libs/ui';
import Link from 'next/link';

export default function ComponentsPage() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="w-full max-w-5xl">
        <div className="flex items-center justify-between mb-8">
          <h1 className="text-4xl font-bold">组件库</h1>
          <Button variant="outline" asChild>
            <Link href="/">返回首页</Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-8">
          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">按钮 (Button)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">变体</h3>
                <div className="flex flex-wrap gap-4">
                  <Button variant="default">默认按钮</Button>
                  <Button variant="primary">主要按钮</Button>
                  <Button variant="secondary">次要按钮</Button>
                  <Button variant="destructive">危险按钮</Button>
                  <Button variant="outline">轮廓按钮</Button>
                  <Button variant="ghost">幽灵按钮</Button>
                  <Button variant="link">链接按钮</Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">尺寸</h3>
                <div className="flex flex-wrap gap-4 items-center">
                  <Button size="sm">小按钮</Button>
                  <Button size="default">默认按钮</Button>
                  <Button size="lg">大按钮</Button>
                  <Button size="icon">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M12 5v14" />
                      <path d="M5 12h14" />
                    </svg>
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">状态</h3>
                <div className="flex flex-wrap gap-4">
                  <Button>正常状态</Button>
                  <Button disabled>禁用状态</Button>
                  <Button variant="outline" className="border-dashed">
                    自定义样式
                  </Button>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">用法示例</h3>
                <div className="p-4 border rounded bg-card text-card-foreground">
                  <pre className="text-sm">
                    {`import { Button } from '@shared-libs/ui';

// 基本用法
<Button>按钮文本</Button>

// 设置变体
<Button variant="primary">主要按钮</Button>
<Button variant="destructive">危险按钮</Button>

// 设置尺寸
<Button size="sm">小按钮</Button>
<Button size="lg">大按钮</Button>

// 禁用状态
<Button disabled>禁用按钮</Button>

// 与 Next.js Link 组件结合
<Button asChild>
  <Link href="/some-page">链接按钮</Link>
</Button>`}
                  </pre>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
