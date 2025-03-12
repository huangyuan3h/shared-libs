import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@shared-libs/ui';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
        'primary',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    children: '默认按钮',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: '主要按钮',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: '次要按钮',
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  args: {
    children: '危险按钮',
    variant: 'destructive',
  },
};

export const Outline: Story = {
  args: {
    children: '轮廓按钮',
    variant: 'outline',
  },
};

export const Ghost: Story = {
  args: {
    children: '幽灵按钮',
    variant: 'ghost',
  },
};

export const Link: Story = {
  args: {
    children: '链接按钮',
    variant: 'link',
  },
};

export const Small: Story = {
  args: {
    children: '小按钮',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    children: '大按钮',
    size: 'lg',
  },
};

export const Disabled: Story = {
  args: {
    children: '禁用按钮',
    disabled: true,
  },
};
