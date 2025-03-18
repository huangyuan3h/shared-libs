import React from 'react';
import { Toaster } from '@shared-libs/ui';
import { Button } from '@shared-libs/ui';
import { toast } from 'sonner';

const meta = {
  title: 'UI/Toaster',
  component: Toaster,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// 基础示例
export const Default = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Toaster />
      <div className="flex flex-wrap gap-4">
        <Button onClick={() => toast('这是一条默认提示')}>默认提示</Button>
        <Button onClick={() => toast.success('操作成功')}>成功提示</Button>
        <Button onClick={() => toast.error('操作失败')}>错误提示</Button>
        <Button onClick={() => toast.warning('警告信息')}>警告提示</Button>
        <Button onClick={() => toast.info('提示信息')}>信息提示</Button>
      </div>
    </div>
  ),
};

// 带描述的提示
export const WithDescription = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Toaster />
      <Button
        onClick={() =>
          toast('文件已上传', {
            description: '您的文件已成功上传到云端存储。',
          })
        }
      >
        带描述的提示
      </Button>
    </div>
  ),
};

// 持续时间
export const Duration = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Toaster />
      <div className="flex flex-wrap gap-4">
        <Button
          onClick={() =>
            toast('短暂提示', {
              duration: 1000,
            })
          }
        >
          1秒提示
        </Button>
        <Button
          onClick={() =>
            toast('较长提示', {
              duration: 5000,
            })
          }
        >
          5秒提示
        </Button>
        <Button
          onClick={() =>
            toast('持久提示', {
              duration: Infinity,
            })
          }
        >
          持久提示
        </Button>
      </div>
    </div>
  ),
};

// 带操作的提示
export const WithAction = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Toaster />
      <Button
        onClick={() =>
          toast('邮件已发送', {
            description: '您的邮件已成功发送给收件人。',
            action: {
              label: '撤回',
              onClick: () => toast('邮件已撤回'),
            },
          })
        }
      >
        带操作的提示
      </Button>
    </div>
  ),
};

// 自定义样式
export const CustomStyle = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Toaster />
      <Button
        onClick={() =>
          toast('自定义样式提示', {
            style: {
              background: 'linear-gradient(to right, #00b09b, #96c93d)',
              color: 'white',
              border: 'none',
            },
          })
        }
      >
        自定义样式
      </Button>
    </div>
  ),
};
