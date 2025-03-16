'use client';

import { Button, Checkbox } from '@shared-libs/ui';
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

          {/* 复选框组件示例 */}
          <section className="border rounded-lg p-6">
            <h2 className="text-2xl font-semibold mb-6">复选框 (Checkbox)</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-3">基础用法</h3>
                <div className="flex items-center space-x-2">
                  <Checkbox id="terms1" />
                  <label
                    htmlFor="terms1"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    接受条款和条件
                  </label>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">状态</h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="checked" defaultChecked />
                    <label
                      htmlFor="checked"
                      className="text-sm font-medium leading-none"
                    >
                      已选中
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="unchecked" />
                    <label
                      htmlFor="unchecked"
                      className="text-sm font-medium leading-none"
                    >
                      未选中
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled" disabled />
                    <label
                      htmlFor="disabled"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      禁用状态
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="disabled-checked" disabled defaultChecked />
                    <label
                      htmlFor="disabled-checked"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      禁用且选中
                    </label>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">表单示例</h3>
                <form className="space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">订阅设置</h4>
                    <div className="space-y-2">
                      <div className="flex items-center space-x-2">
                        <Checkbox id="email" />
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none"
                        >
                          接收电子邮件通知
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="sms" defaultChecked />
                        <label
                          htmlFor="sms"
                          className="text-sm font-medium leading-none"
                        >
                          接收短信通知
                        </label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Checkbox id="push" />
                        <label
                          htmlFor="push"
                          className="text-sm font-medium leading-none"
                        >
                          接收推送通知
                        </label>
                      </div>
                    </div>
                  </div>
                  <Button type="submit" size="sm">
                    保存设置
                  </Button>
                </form>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-3">用法示例</h3>
                <div className="p-4 border rounded bg-card text-card-foreground">
                  <pre className="text-sm">
                    {`import { Checkbox } from '@shared-libs/ui';

// 基本用法
<div className="flex items-center space-x-2">
  <Checkbox id="terms" />
  <label htmlFor="terms" className="text-sm font-medium">
    接受条款和条件
  </label>
</div>

// 默认选中
<Checkbox id="checked" defaultChecked />

// 禁用状态
<Checkbox id="disabled" disabled />

// 禁用且选中
<Checkbox id="disabled-checked" disabled defaultChecked />

// 监听状态变化
<Checkbox 
  id="onChange" 
  onCheckedChange={(checked) => console.log(checked)} 
/>`}
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
