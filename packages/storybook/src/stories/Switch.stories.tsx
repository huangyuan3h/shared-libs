import type { Meta, StoryObj } from '@storybook/react';
import * as React from 'react';
import { StoryWrapper } from '../components/StoryWrapper';

// 手动创建Switch组件
interface SwitchProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
}

const Switch = React.forwardRef<HTMLButtonElement, SwitchProps>(
  ({ className, defaultChecked, onCheckedChange, ...props }, ref) => {
    const [checked, setChecked] = React.useState(defaultChecked || false);

    const handleClick = () => {
      const newChecked = !checked;
      setChecked(newChecked);
      onCheckedChange?.(newChecked);
    };

    return (
      <button
        ref={ref}
        type="button"
        role="switch"
        aria-checked={checked}
        data-state={checked ? 'checked' : 'unchecked'}
        data-slot="switch"
        className={className}
        onClick={handleClick}
        {...props}
      >
        <span
          data-state={checked ? 'checked' : 'unchecked'}
          data-slot="switch-thumb"
        />
      </button>
    );
  },
);

Switch.displayName = 'Switch';

// 简化的Label组件
const Label = ({
  htmlFor,
  children,
}: {
  htmlFor?: string;
  children: React.ReactNode;
}) => (
  <label htmlFor={htmlFor} className="text-sm font-medium">
    {children}
  </label>
);

const meta = {
  title: 'UI/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    defaultChecked: {
      control: 'boolean',
      description: '默认是否选中',
    },
    disabled: {
      control: 'boolean',
      description: '是否禁用',
    },
    onCheckedChange: {
      action: 'checked changed',
      description: '选中状态变化时的回调',
    },
  },
  decorators: [
    (Story: React.ComponentType) => (
      <StoryWrapper>
        <Story />
      </StoryWrapper>
    ),
  ],
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof Switch>;

// 基础示例
export const Default: Story = {
  render: () => <Switch />,
};

// 默认选中
export const Checked: Story = {
  render: () => <Switch defaultChecked />,
};

// 禁用状态
export const Disabled: Story = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Switch disabled />
      <Switch disabled defaultChecked />
    </div>
  ),
};

// 带标签
export const WithLabel: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="airplane-mode" />
      <Label htmlFor="airplane-mode">飞行模式</Label>
    </div>
  ),
};

// 表单示例
export const FormExample: Story = {
  render: () => (
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
        type="submit"
        className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
      >
        保存设置
      </button>
    </form>
  ),
};
