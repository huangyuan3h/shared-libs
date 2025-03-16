'use client';

import { Button, Toaster } from '@shared-libs/ui';
import { toast } from 'sonner';

export default function ToasterPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">提示框 (Toaster)</h1>
        <p className="text-muted-foreground">
          提示框组件用于显示简短的、非阻塞性的通知消息，如操作成功、错误提示或警告信息。
        </p>
      </div>

      <Toaster />

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => toast('这是一条基本的提示消息')}>
              显示提示
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同类型</h2>
          <div className="flex flex-wrap gap-3">
            <Button onClick={() => toast.success('操作已成功完成')}>
              成功提示
            </Button>
            <Button
              variant="destructive"
              onClick={() => toast.error('发生了一个错误')}
            >
              错误提示
            </Button>
            <Button onClick={() => toast.warning('请注意')}>警告提示</Button>
            <Button onClick={() => toast.info('提示信息')}>信息提示</Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">带描述的提示</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast('新消息', {
                  description: '您有一条新消息需要查看',
                })
              }
            >
              带描述的提示
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">带操作按钮</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast('邮件已发送', {
                  description: '您的邮件已成功发送给收件人',
                  action: {
                    label: '撤回',
                    onClick: () => toast('邮件已撤回'),
                  },
                })
              }
            >
              带操作按钮
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">自定义持续时间</h2>
          <div className="flex flex-wrap gap-3">
            <Button
              onClick={() =>
                toast('短暂提示', {
                  description: '这条提示将在3秒后消失',
                  duration: 3000,
                })
              }
            >
              短暂提示 (3秒)
            </Button>
            <Button
              onClick={() =>
                toast('持久提示', {
                  description: '这条提示将持续显示直到手动关闭',
                  duration: Infinity,
                })
              }
            >
              持久提示
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <div className="p-4 border rounded bg-card text-card-foreground">
            <pre className="text-sm">
              {`import { Button, Toaster } from '@shared-libs/ui';
import { toast } from 'sonner';

function MyComponent() {
  const showToast = () => {
    toast('这是一条默认提示');
  };

  const showSuccessToast = () => {
    toast.success('操作成功');
  };

  const showErrorToast = () => {
    toast.error('操作失败，请重试');
  };

  const showToastWithAction = () => {
    toast('邮件已发送', {
      description: '您的邮件已成功发送给收件人',
      action: {
        label: '撤回',
        onClick: () => toast('邮件已撤回'),
      },
    });
  };

  return (
    <>
      <Toaster />
      <div className="space-y-4">
        <Button onClick={showToast}>显示默认提示</Button>
        <Button onClick={showSuccessToast}>显示成功提示</Button>
        <Button variant="destructive" onClick={showErrorToast}>
          显示错误提示
        </Button>
        <Button onClick={showToastWithAction}>显示带操作的提示</Button>
      </div>
    </>
  );
}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
