'use client';

import { Switch, Label } from '@shared-libs/ui';

export default function SwitchPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">开关 (Switch)</h1>
        <p className="text-muted-foreground">
          开关组件用于切换单个设置的开启或关闭状态，是复选框的替代方案。
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
          <div className="flex flex-col space-y-4">
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
          <form className="w-full max-w-md space-y-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">通知设置</h3>
              <div className="flex items-center justify-between">
                <Label htmlFor="email-notifications">电子邮件通知</Label>
                <Switch id="email-notifications" defaultChecked />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="push-notifications">推送通知</Label>
                <Switch id="push-notifications" />
              </div>
              <div className="flex items-center justify-between">
                <Label htmlFor="marketing-emails">营销邮件</Label>
                <Switch id="marketing-emails" />
              </div>
            </div>
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
            >
              保存设置
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <div className="p-4 border rounded bg-card text-card-foreground">
            <pre className="text-sm">
              {`import { Switch, Label } from '@shared-libs/ui';

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

// 监听状态变化
<Switch 
  onCheckedChange={(checked) => console.log(checked)} 
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
