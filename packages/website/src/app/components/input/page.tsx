'use client';

import { Label, Input, Button, CodeBlock } from '@shared-libs/ui';

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">输入框 (Input)</h1>
        <p className="text-muted-foreground">
          输入框组件用于接收用户输入的文本信息，适用于各种表单和数据收集场景。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <div className="w-full max-w-sm">
            <Input placeholder="请输入内容..." />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同类型</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-md">
            <div className="space-y-2">
              <Label htmlFor="text">文本</Label>
              <Input id="text" type="text" placeholder="请输入文本" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">电子邮箱</Label>
              <Input
                id="email"
                type="email"
                placeholder="example@example.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">密码</Label>
              <Input id="password" type="password" placeholder="请输入密码" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="number">数字</Label>
              <Input id="number" type="number" placeholder="请输入数字" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">禁用状态</h2>
          <div className="w-full max-w-sm space-y-2">
            <Label htmlFor="disabled">禁用输入框</Label>
            <Input id="disabled" disabled placeholder="此输入框已禁用" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同尺寸</h2>
          <div className="w-full max-w-sm space-y-4">
            <div className="space-y-2">
              <Label htmlFor="small">小尺寸</Label>
              <Input
                id="small"
                className="h-8 text-xs"
                placeholder="小尺寸输入框"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="default">默认尺寸</Label>
              <Input id="default" placeholder="默认尺寸输入框" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="large">大尺寸</Label>
              <Input
                id="large"
                className="h-12 text-base"
                placeholder="大尺寸输入框"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">前缀和后缀</h2>
          <div className="w-full max-w-sm space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
                ￥
              </span>
              <Input className="pl-6" placeholder="请输入金额" type="number" />
            </div>
            <div className="relative">
              <Input className="pr-16" placeholder="请输入搜索内容" />
              <Button
                size="sm"
                className="absolute right-1 top-1/2 -translate-y-1/2 h-7"
              >
                搜索
              </Button>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">表单示例</h2>
          <form className="w-full max-w-md space-y-4">
            <div className="space-y-2">
              <Label htmlFor="form-name">姓名</Label>
              <Input id="form-name" placeholder="请输入您的姓名" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-email">电子邮箱</Label>
              <Input
                id="form-email"
                type="email"
                placeholder="请输入您的电子邮箱"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="form-phone">电话号码</Label>
              <Input
                id="form-phone"
                type="tel"
                placeholder="请输入您的电话号码"
              />
            </div>
            <Button type="submit">提交</Button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">验证状态</h2>
          <div className="w-full max-w-md space-y-4">
            <div>
              <Input
                placeholder="有效输入"
                className="border-green-500 focus-visible:ring-green-500/50"
              />
              <p className="text-sm text-green-500 mt-1">输入有效</p>
            </div>
            <div>
              <Input
                placeholder="无效输入"
                className="border-destructive focus-visible:ring-destructive/50"
                aria-invalid="true"
              />
              <p className="text-sm text-destructive mt-1">请输入有效内容</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <CodeBlock>
            {`import { Input, Label, Button } from '@shared-libs/ui';

// 基本用法
<Input placeholder="请输入内容..." />

// 不同类型
<Input type="email" placeholder="请输入电子邮箱" />
<Input type="password" placeholder="请输入密码" />
<Input type="number" placeholder="请输入数字" />

// 禁用状态
<Input disabled placeholder="此输入框已禁用" />

// 自定义尺寸
<Input className="h-8 text-xs" placeholder="小尺寸" />
<Input placeholder="默认尺寸" />
<Input className="h-12 text-base" placeholder="大尺寸" />

// 前缀示例
<div className="relative">
  <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
    ￥
  </span>
  <Input className="pl-6" placeholder="请输入金额" type="number" />
</div>

// 后缀示例
<div className="relative">
  <Input className="pr-16" placeholder="请输入搜索内容" />
  <Button
    size="sm"
    className="absolute right-1 top-1/2 -translate-y-1/2 h-7"
  >
    搜索
  </Button>
</div>

// 表单中使用
<form className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="name">姓名</Label>
    <Input 
      id="name" 
      placeholder="请输入您的姓名" 
      onChange={(e) => setName(e.target.value)}
    />
  </div>
  <Button type="submit">提交</Button>
</form>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
