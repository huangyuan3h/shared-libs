'use client';

import { Checkbox, CodeBlock } from '@shared-libs/ui';

export default function CheckboxPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">复选框 (Checkbox)</h1>
        <p className="text-muted-foreground">
          复选框组件允许用户从一组选项中选择一个或多个值，常用于表单和设置页面。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础用法</h2>
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
          <h2 className="text-xl font-semibold mb-3">状态</h2>
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
          <h2 className="text-xl font-semibold mb-3">表单示例</h2>
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
          <CodeBlock>
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
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
