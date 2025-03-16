import React from 'react';
import { Skeleton } from '@shared-libs/ui';

export default {
  title: 'UI/Skeleton',
  component: Skeleton,
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

// 基础示例
export const Default = () => <Skeleton className="h-4 w-[250px]" />;

// 不同尺寸
export const Sizes = () => (
  <div className="flex flex-col space-y-4">
    <Skeleton className="h-4 w-[100px]" />
    <Skeleton className="h-4 w-[200px]" />
    <Skeleton className="h-4 w-[300px]" />
    <Skeleton className="h-4 w-[400px]" />
    <Skeleton className="h-4 w-[500px]" />
  </div>
);

// 卡片加载状态
export const CardLoading = () => (
  <div className="flex flex-col space-y-3">
    <Skeleton className="h-[125px] w-[250px] rounded-xl" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

// 用户资料加载状态
export const ProfileLoading = () => (
  <div className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
);

// 表格加载状态
export const TableLoading = () => (
  <div className="w-[600px] space-y-4">
    <div className="flex justify-between">
      <Skeleton className="h-6 w-[150px]" />
      <Skeleton className="h-6 w-[100px]" />
    </div>
    <div className="space-y-2">
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="flex justify-between">
          <Skeleton className="h-4 w-[400px]" />
          <Skeleton className="h-4 w-[100px]" />
        </div>
      ))}
    </div>
  </div>
);
