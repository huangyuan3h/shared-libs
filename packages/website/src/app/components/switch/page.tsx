'use client';

import { Switch, Label, Button, CodeBlock } from '@shared-libs/ui';

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">开关 (Switch)</h1>
        <p className="text-muted-foreground">
          开关组件用于表示两种状态（打开/关闭）之间的切换，是复选框的替代方案，常用于设置页面。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <Switch />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">默认选中</h2>
          <Switch defaultChecked />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">禁用状态</h2>
          <div className="flex flex-col gap-2">
            <Switch disabled />
            <Switch disabled defaultChecked />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">带标签</h2>
          <div className="flex items-center space-x-2">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">飞行模式</Label>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">表单示例</h2>
          <form className="space-y-6 max-w-md">
            <div className="space-y-4">
              <h4 className="text-base font-medium">通知设置</h4>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <Label htmlFor="email-notifications">电子邮件通知</Label>
                  <Switch id="email-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="push-notifications">推送通知</Label>
                  <Switch id="push-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between">
                  <Label htmlFor="marketing-emails">营销邮件</Label>
                  <Switch id="marketing-emails" />
                </div>
              </div>
            </div>
            <Button type="button">保存设置</Button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <CodeBlock>
            {`import { Switch, Label, Button } from '@shared-libs/ui';

// 基本用法
<Switch />

// 默认选中
<Switch defaultChecked />

// 禁用状态
<Switch disabled />
<Switch disabled defaultChecked />

// 带标签
<div className="flex items-center space-x-2">
  <Switch id="airplane-mode" />
  <Label htmlFor="airplane-mode">飞行模式</Label>
</div>

// 表单示例
<form className="space-y-6">
  <div className="space-y-4">
    <h4 className="text-base font-medium">通知设置</h4>
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="email-notifications">电子邮件通知</Label>
        <Switch id="email-notifications" defaultChecked />
      </div>
      <div className="flex items-center justify-between">
        <Label htmlFor="push-notifications">推送通知</Label>
        <Switch id="push-notifications" defaultChecked />
      </div>
    </div>
  </div>
  <Button type="submit">保存设置</Button>
</form>

// 监听状态变化
<Switch 
  onCheckedChange={(checked) => {
    console.log(checked); 
  }}
/>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
