'use client';

import { Textarea, Label } from '@shared-libs/ui';

export default function TextareaPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">文本域 (Textarea)</h1>
        <p className="text-muted-foreground">
          文本域组件用于收集多行文本输入，如评论、描述或消息内容。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <Textarea placeholder="请输入内容..." />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">带标签</h2>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="message">留言</Label>
            <Textarea id="message" placeholder="请输入您的留言..." />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">禁用状态</h2>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="disabled-message" className="text-muted-foreground">
              禁用状态
            </Label>
            <Textarea
              id="disabled-message"
              placeholder="此文本区域已禁用"
              disabled
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同尺寸</h2>
          <div className="grid w-full gap-4">
            <div className="grid gap-1.5">
              <Label htmlFor="small">小尺寸</Label>
              <Textarea
                id="small"
                placeholder="小尺寸文本区域"
                className="min-h-[80px]"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="medium">中等尺寸</Label>
              <Textarea
                id="medium"
                placeholder="中等尺寸文本区域"
                className="min-h-[120px]"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="large">大尺寸</Label>
              <Textarea
                id="large"
                placeholder="大尺寸文本区域"
                className="min-h-[160px]"
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">表单示例</h2>
          <form className="w-full max-w-md space-y-4">
            <div className="grid gap-1.5">
              <Label htmlFor="name">姓名</Label>
              <input
                id="name"
                type="text"
                placeholder="请输入您的姓名"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="email">电子邮箱</Label>
              <input
                id="email"
                type="email"
                placeholder="请输入您的电子邮箱"
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="feedback">反馈</Label>
              <Textarea
                id="feedback"
                placeholder="请输入您的反馈..."
                className="min-h-[120px]"
              />
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              提交反馈
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <div className="p-4 border rounded bg-card text-card-foreground">
            <pre className="text-sm">
              {`import { Textarea, Label } from '@shared-libs/ui';

// 基本用法
<Textarea placeholder="请输入内容..." />

// 带标签
<div className="grid w-full gap-1.5">
  <Label htmlFor="message">留言</Label>
  <Textarea id="message" placeholder="请输入您的留言..." />
</div>

// 禁用状态
<Textarea disabled placeholder="此文本区域已禁用" />

// 自定义尺寸
<Textarea className="min-h-[160px]" placeholder="大尺寸文本区域" />

// 监听输入变化
<Textarea 
  onChange={(e) => console.log(e.target.value)} 
  placeholder="请输入内容..."
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
