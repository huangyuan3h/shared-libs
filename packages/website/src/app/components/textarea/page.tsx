'use client';

import { Textarea, Label, Button, Input, CodeBlock } from '@shared-libs/ui';

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
            <Label htmlFor="message">消息</Label>
            <Textarea id="message" placeholder="请输入您的消息..." />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">禁用状态</h2>
          <div className="grid w-full gap-1.5">
            <Label htmlFor="disabled-textarea">禁用消息框</Label>
            <Textarea
              id="disabled-textarea"
              placeholder="禁用状态..."
              disabled
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同尺寸</h2>
          <div className="grid w-full gap-4">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="small">小尺寸</Label>
              <Textarea
                id="small"
                className="min-h-[80px]"
                placeholder="小尺寸文本域..."
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="medium">中等尺寸</Label>
              <Textarea
                id="medium"
                className="min-h-[120px]"
                placeholder="中等尺寸文本域..."
              />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="large">大尺寸</Label>
              <Textarea
                id="large"
                className="min-h-[160px]"
                placeholder="大尺寸文本域..."
              />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">表单示例</h2>
          <form className="space-y-4 max-w-md">
            <div className="grid w-full gap-1.5">
              <Label htmlFor="name">姓名</Label>
              <Input id="name" placeholder="请输入您的姓名" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="email">电子邮箱</Label>
              <Input id="email" type="email" placeholder="请输入您的电子邮箱" />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="feedback">反馈</Label>
              <Textarea
                id="feedback"
                placeholder="请输入您的反馈或建议..."
                className="min-h-[120px]"
              />
            </div>
            <Button type="submit">提交反馈</Button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <CodeBlock>
            {`import { Textarea, Label, Input, Button } from '@shared-libs/ui';

// 基本用法
<Textarea placeholder="请输入内容..." />

// 带标签
<div className="grid w-full gap-1.5">
  <Label htmlFor="message">消息</Label>
  <Textarea id="message" placeholder="请输入您的消息..." />
</div>

// 禁用状态
<Textarea 
  placeholder="禁用状态..." 
  disabled 
/>

// 自定义尺寸
<Textarea 
  className="min-h-[120px]" 
  placeholder="自定义高度..." 
/>

// 表单示例
<form className="space-y-4">
  <div className="grid w-full gap-1.5">
    <Label htmlFor="name">姓名</Label>
    <Input id="name" placeholder="请输入您的姓名" />
  </div>
  <div className="grid w-full gap-1.5">
    <Label htmlFor="feedback">反馈</Label>
    <Textarea
      id="feedback"
      placeholder="请输入您的反馈或建议..."
      className="min-h-[120px]"
    />
  </div>
  <Button type="submit">提交反馈</Button>
</form>

// 监听变化
<Textarea 
  placeholder="请输入内容..." 
  onChange={(e) => {
    console.log(e.target.value);
  }}
/>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
