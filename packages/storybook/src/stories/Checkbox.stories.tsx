import React from 'react';
import { Checkbox } from '@shared-libs/ui';

const meta = {
  title: 'UI/Checkbox',
  component: Checkbox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    checked: {
      control: 'boolean',
      description: '是否选中',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    required: {
      control: 'boolean',
      description: '是否必填',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: '选中状态变化时的回调',
    },
  },
};

export default meta;

// 基础示例
export const Default = {
  args: {
    id: 'terms',
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        接受条款和条件
      </label>
    </div>
  ),
};

// 禁用状态
export const Disabled = {
  args: {
    id: 'terms-disabled',
    disabled: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label
        htmlFor="terms-disabled"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        接受条款和条件
      </label>
    </div>
  ),
};

// 选中状态
export const Checked = {
  args: {
    id: 'terms-checked',
    defaultChecked: true,
  },
  render: (args) => (
    <div className="flex items-center space-x-2">
      <Checkbox {...args} />
      <label
        htmlFor="terms-checked"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        接受条款和条件
      </label>
    </div>
  ),
};

// 表单示例
export const FormExample = {
  render: () => (
    <form className="space-y-6">
      <div className="space-y-4">
        <h3 className="text-lg font-medium">订阅设置</h3>
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Checkbox id="email" />
            <label
              htmlFor="email"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              接收电子邮件通知
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sms" defaultChecked />
            <label
              htmlFor="sms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              接收短信通知
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="push" />
            <label
              htmlFor="push"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              接收推送通知
            </label>
          </div>
        </div>
      </div>
      <div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
        >
          保存设置
        </button>
      </div>
    </form>
  ),
};
