import React from 'react';
import { Header, Button, ThemeProvider } from '@shared-libs/ui';

const meta = {
  title: 'UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    sticky: {
      control: 'boolean',
      description: '是否固定在顶部',
    },
    leftContent: {
      control: 'text',
      description: '左侧内容（如Logo和网站名称）',
    },
    menu: {
      control: 'text',
      description: '菜单内容',
    },
    rightContent: {
      control: 'text',
      description: '右侧内容（如登录信息）',
    },
  },
};

export default meta;

// 基础示例
export const Default = {
  args: {
    leftContent: <div className="font-bold text-xl">Logo</div>,
    menu: (
      <nav className="flex space-x-4">
        <a href="#" className="hover:text-primary">
          首页
        </a>
        <a href="#" className="hover:text-primary">
          产品
        </a>
        <a href="#" className="hover:text-primary">
          关于我们
        </a>
        <a href="#" className="hover:text-primary">
          联系我们
        </a>
      </nav>
    ),
    rightContent: (
      <Button variant="primary" size="sm">
        登录
      </Button>
    ),
  },
};

// 固定在顶部
export const Sticky = {
  args: {
    ...Default.args,
    sticky: true,
  },
};

// 只有左侧内容
export const LeftContentOnly = {
  args: {
    leftContent: <div className="font-bold text-xl">Logo</div>,
  },
};

// 只有菜单
export const MenuOnly = {
  args: {
    menu: (
      <nav className="flex space-x-4">
        <a href="#" className="hover:text-primary">
          首页
        </a>
        <a href="#" className="hover:text-primary">
          产品
        </a>
        <a href="#" className="hover:text-primary">
          关于我们
        </a>
        <a href="#" className="hover:text-primary">
          联系我们
        </a>
      </nav>
    ),
  },
};

// 只有右侧内容
export const RightContentOnly = {
  args: {
    rightContent: (
      <div className="flex space-x-2">
        <Button variant="outline" size="sm">
          注册
        </Button>
        <Button variant="primary" size="sm">
          登录
        </Button>
      </div>
    ),
  },
};

// 自定义样式
export const CustomStyle = {
  args: {
    ...Default.args,
    className: 'bg-primary text-white',
  },
};

// 优化布局示例：左侧Logo和菜单相邻，右侧内容保持在最右侧
export const OptimizedLayout = {
  args: {
    leftContent: <div className="font-bold text-xl">Brand</div>,
    menu: (
      <nav className="flex space-x-6">
        <a href="#" className="hover:text-primary font-medium">
          首页
        </a>
        <a href="#" className="hover:text-primary">
          产品
        </a>
        <a href="#" className="hover:text-primary">
          解决方案
        </a>
        <a href="#" className="hover:text-primary">
          文档
        </a>
        <a href="#" className="hover:text-primary">
          价格
        </a>
      </nav>
    ),
    rightContent: (
      <div className="flex items-center space-x-4">
        <a href="#" className="text-sm hover:text-primary">
          帮助中心
        </a>
        <Button variant="outline" size="sm">
          注册
        </Button>
        <Button variant="primary" size="sm">
          登录
        </Button>
      </div>
    ),
  },
};
