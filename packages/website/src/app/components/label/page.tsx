'use client';

import { Label } from '@shared-libs/ui';

export default function LabelPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">标签 (Label)</h1>
        <p className="text-muted-foreground">
          标签组件用于为表单控件提供可访问的文本标签，提高表单的可用性和可访问性。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">电子邮箱</Label>
            <input
              type="email"
              id="email"
              placeholder="example@example.com"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">必填标记</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              htmlFor="username"
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              用户名
            </Label>
            <input
              type="text"
              id="username"
              placeholder="请输入用户名"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              required
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">禁用状态</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="disabled" className="text-muted-foreground">
              禁用输入框
            </Label>
            <input
              type="text"
              id="disabled"
              placeholder="禁用状态"
              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm opacity-50 cursor-not-allowed"
              disabled
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">与其他表单元素一起使用</h2>
          <div className="grid w-full max-w-sm gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="name">姓名</Label>
              <input
                type="text"
                id="name"
                placeholder="张三"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="message">留言</Label>
              <textarea
                id="message"
                placeholder="请输入您的留言..."
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="terms"
                className="h-4 w-4 rounded border-gray-300"
              />
              <Label htmlFor="terms">我同意条款和条件</Label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <div className="p-4 border rounded bg-card text-card-foreground">
            <pre className="text-sm">
              {`import { Label } from '@shared-libs/ui';

// 基本用法
<div className="grid gap-1.5">
  <Label htmlFor="email">电子邮箱</Label>
  <input
    type="email"
    id="email"
    placeholder="example@example.com"
    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
  />
</div>

// 必填标记
<Label 
  htmlFor="username" 
  className="after:content-['*'] after:ml-0.5 after:text-red-500"
>
  用户名
</Label>

// 禁用状态
<Label htmlFor="disabled" className="text-muted-foreground">
  禁用输入框
</Label>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
