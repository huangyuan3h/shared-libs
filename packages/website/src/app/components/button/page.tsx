'use client';

import { Button } from '@shared-libs/ui';

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">按钮 (Button)</h1>
        <p className="text-muted-foreground">
          按钮组件用于触发操作或事件，如提交表单、打开对话框、取消操作或执行删除操作。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">变体</h2>
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
          <h2 className="text-xl font-semibold mb-3">尺寸</h2>
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
          <h2 className="text-xl font-semibold mb-3">状态</h2>
          <div className="flex flex-wrap gap-4">
            <Button>正常状态</Button>
            <Button disabled>禁用状态</Button>
            <Button variant="outline" className="border-dashed">
              自定义样式
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
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
    </div>
  );
}
