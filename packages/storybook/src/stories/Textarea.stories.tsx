import React from 'react';
import { Textarea, Label } from '@shared-libs/ui';

const meta = {
  title: 'UI/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    placeholder: {
      control: 'text',
      description: '占位文本',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    required: {
      control: 'boolean',
      description: '是否必填',
    },
    className: {
      control: 'text',
      description: '自定义类名',
    },
  },
};

export default meta;

// 基础示例
export const Default = {
  args: {
    placeholder: '请输入内容...',
  },
  render: (args) => <Textarea {...args} />,
};

// 带标签
export const WithLabel = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="message">留言</Label>
      <Textarea id="message" placeholder="请输入您的留言..." />
    </div>
  ),
};

// 禁用状态
export const Disabled = {
  render: () => (
    <div className="grid w-full gap-1.5">
      <Label htmlFor="disabled-message" className="text-muted-foreground">
        禁用状态
      </Label>
      <Textarea id="disabled-message" placeholder="此文本区域已禁用" disabled />
    </div>
  ),
};

// 不同尺寸
export const Sizes = {
  render: () => (
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
  ),
};

// 表单示例
export const FormExample = {
  render: () => (
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
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        提交反馈
      </button>
    </form>
  ),
};
