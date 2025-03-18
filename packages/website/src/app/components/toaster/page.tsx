'use client';

import { Button, Toaster, CodeBlock } from '@shared-libs/ui';
import { toast } from 'sonner';

export default function ToasterPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">提示条 (Toaster)</h1>
        <p className="text-muted-foreground">
          提示条组件用于显示简短的、非阻塞性的消息通知，用于操作反馈、状态更新和信息通知。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <Button
            onClick={() => {
              toast('这是一条普通提示', {
                description: '提示的详细描述信息',
              });
            }}
          >
            显示提示
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同类型</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => {
                toast('默认提示', {
                  description: '这是一条默认类型的提示',
                });
              }}
            >
              默认
            </Button>
            <Button
              variant="destructive"
              onClick={() => {
                toast.error('错误提示', {
                  description: '这是一条错误类型的提示',
                });
              }}
            >
              错误
            </Button>
            <Button
              onClick={() => {
                toast.success('成功提示', {
                  description: '这是一条成功类型的提示',
                });
              }}
            >
              成功
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">自定义操作</h2>
          <Button
            onClick={() => {
              toast('提示', {
                description: '您的修改尚未保存。',
                action: {
                  label: '立即保存',
                  onClick: () => console.log('保存修改'),
                },
              });
            }}
          >
            显示带操作的提示
          </Button>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同位置</h2>
          <div className="flex flex-wrap gap-2">
            <Button
              onClick={() => {
                toast('顶部居中提示', {
                  description: '这是一条顶部居中显示的提示',
                  position: 'top-center',
                });
              }}
            >
              顶部居中
            </Button>
            <Button
              onClick={() => {
                toast('顶部右侧提示', {
                  description: '这是一条顶部右侧显示的提示',
                  position: 'top-right',
                });
              }}
            >
              顶部右侧
            </Button>
            <Button
              onClick={() => {
                toast('底部提示', {
                  description: '这是一条底部显示的提示',
                  position: 'bottom-center',
                });
              }}
            >
              底部
            </Button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <CodeBlock>
            {`import { Toaster } from '@shared-libs/ui';
import { toast } from 'sonner';

// 1. 在布局组件中添加 Toaster 组件
// layout.tsx
export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  );
}

// 2. 在组件中使用 toast 函数
// page.tsx
'use client';
import { toast } from 'sonner';
import { Button } from '@shared-libs/ui';

function Page() {
  return (
    <div>
      <Button
        onClick={() => {
          toast('成功', {
            description: '您的设置已保存',
          });
        }}
      >
        保存设置
      </Button>
      
      <Button
        variant="destructive"
        onClick={() => {
          toast.error('错误', {
            description: '保存过程中发生错误',
          });
        }}
      >
        模拟错误
      </Button>
      
      <Button
        onClick={() => {
          toast('提示', {
            description: '有未保存的变更',
            action: {
              label: '保存',
              onClick: () => console.log('保存操作')
            },
          });
        }}
      >
        带操作的提示
      </Button>
    </div>
  );
}`}
          </CodeBlock>
        </div>
      </div>
      <Toaster />
    </div>
  );
}
