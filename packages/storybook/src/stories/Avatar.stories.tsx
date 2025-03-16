import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from '@shared-libs/ui';

const meta = {
  title: 'UI/Avatar',
  component: Avatar,
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
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
};

// 不同尺寸
export const Sizes = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar className="size-6">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <Avatar className="size-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// 回退显示
export const WithFallback = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar>
        <AvatarFallback>JD</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>AB</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback>CK</AvatarFallback>
      </Avatar>
    </div>
  ),
};

// 自定义样式
export const CustomStyles = {
  render: () => (
    <div className="flex items-center space-x-4">
      <Avatar className="bg-blue-500 text-white">
        <AvatarFallback>BL</AvatarFallback>
      </Avatar>
      <Avatar className="bg-green-500 text-white">
        <AvatarFallback>GR</AvatarFallback>
      </Avatar>
      <Avatar className="bg-red-500 text-white">
        <AvatarFallback>RD</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-yellow-500">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>YL</AvatarFallback>
      </Avatar>
    </div>
  ),
};
