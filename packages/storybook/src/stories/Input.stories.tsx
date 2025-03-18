import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@shared-libs/ui';

const meta: Meta<typeof Input> = {
  title: 'UI/Input',
  component: Input,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Input>;

export const Default: Story = {
  args: {
    placeholder: '请输入内容...',
  },
};

export const WithType: Story = {
  args: {
    type: 'email',
    placeholder: '请输入电子邮箱...',
  },
};

export const WithValue: Story = {
  args: {
    value: '预填充内容',
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
    placeholder: '禁用状态',
  },
};

export const WithSizes: Story = {
  render: () => (
    <div className="flex flex-col gap-4">
      <Input className="h-8 text-xs" placeholder="小尺寸" />
      <Input placeholder="默认尺寸" />
      <Input className="h-12 text-base" placeholder="大尺寸" />
    </div>
  ),
};

export const WithPrefix: Story = {
  render: () => (
    <div className="relative">
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground">
        ￥
      </span>
      <Input className="pl-6" placeholder="请输入金额" type="number" />
    </div>
  ),
};

export const WithSuffix: Story = {
  render: () => (
    <div className="relative">
      <Input className="pr-16" placeholder="请输入搜索内容" />
      <button className="absolute right-2 top-1/2 -translate-y-1/2 rounded-sm px-2 py-1 text-xs bg-primary text-primary-foreground">
        搜索
      </button>
    </div>
  ),
};

export const WithValidation: Story = {
  render: () => (
    <div className="space-y-4">
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
  ),
};
