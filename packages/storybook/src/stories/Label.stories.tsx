import React from 'react';
import { Label } from '@shared-libs/ui';

const meta = {
  title: 'UI/Label',
  component: Label,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
      description: '自定义类名',
    },
  },
};

export default meta;

// 基础示例
export const Default = {
  render: () => (
    <div className="grid w-full max-w-sm items-center gap-1.5">
      <Label htmlFor="email">电子邮箱</Label>
      <input
        type="email"
        id="email"
        placeholder="example@example.com"
        className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
      />
    </div>
  ),
};

// 必填标记
export const Required = {
  render: () => (
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
  ),
};

// 禁用状态
export const Disabled = {
  render: () => (
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
  ),
};

// 与其他表单元素一起使用
export const WithFormElements = {
  render: () => (
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
  ),
};
