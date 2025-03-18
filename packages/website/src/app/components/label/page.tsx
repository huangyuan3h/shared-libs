'use client';

import { Label, Input, Textarea, Checkbox, CodeBlock } from '@shared-libs/ui';

export default function LabelPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">标签 (Label)</h1>
        <p className="text-muted-foreground">
          标签组件用于为表单控件提供文字说明，增强表单的可访问性和用户体验。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">电子邮箱</Label>
            <Input type="email" id="email" placeholder="example@example.com" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">必填字段</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label
              htmlFor="username"
              className="after:content-['*'] after:ml-0.5 after:text-red-500"
            >
              用户名
            </Label>
            <Input type="text" id="username" placeholder="请输入用户名" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">禁用状态</h2>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="disabled">禁用输入</Label>
            <Input type="text" id="disabled" disabled />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">与其他表单元素结合</h2>
          <div className="space-y-4">
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="name">姓名</Label>
              <Input id="name" />
            </div>
            <div className="grid w-full max-w-sm items-center gap-1.5">
              <Label htmlFor="message">留言</Label>
              <Textarea id="message" />
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label htmlFor="terms">接受条款和条件</Label>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <CodeBlock>
            {`import { Label, Input, Textarea, Checkbox } from '@shared-libs/ui';

// 基本用法
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="email">电子邮箱</Label>
  <Input type="email" id="email" placeholder="example@example.com" />
</div>

// 必填字段
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="username" className="after:content-['*'] after:ml-0.5 after:text-red-500">
    用户名
  </Label>
  <Input type="text" id="username" placeholder="请输入用户名" />
</div>

// 禁用状态
<div className="grid w-full max-w-sm items-center gap-1.5">
  <Label htmlFor="disabled" disabled>
    禁用输入
  </Label>
  <Input type="text" id="disabled" disabled />
</div>

// 与复选框结合
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <Label htmlFor="terms">接受条款和条件</Label>
</div>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
