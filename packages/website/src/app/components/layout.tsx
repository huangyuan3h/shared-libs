'use client';

import { Button } from '@shared-libs/ui';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const componentGroups = [
  {
    title: '基础组件',
    items: [
      { name: 'Button', path: '/components/button', label: '按钮' },
      { name: 'Checkbox', path: '/components/checkbox', label: '复选框' },
      { name: 'Label', path: '/components/label', label: '标签' },
      { name: 'Switch', path: '/components/switch', label: '开关' },
      { name: 'Textarea', path: '/components/textarea', label: '文本域' },
    ],
  },
  {
    title: '数据展示',
    items: [
      { name: 'Avatar', path: '/components/avatar', label: '头像' },
      { name: 'Skeleton', path: '/components/skeleton', label: '骨架屏' },
    ],
  },
  {
    title: '导航组件',
    items: [
      { name: 'Breadcrumb', path: '/components/breadcrumb', label: '面包屑' },
      { name: 'Header', path: '/components/header', label: '页头' },
    ],
  },
  {
    title: '表单组件',
    items: [{ name: 'Select', path: '/components/select', label: '选择器' }],
  },
  {
    title: '反馈组件',
    items: [
      { name: 'Toaster', path: '/components/toaster', label: '消息提示' },
    ],
  },
];

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      {/* 侧边栏 */}
      <aside className="w-64 border-r p-6 bg-muted/20">
        <div className="flex flex-col space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold">组件库</h2>
            <Button variant="outline" size="sm" asChild>
              <Link href="/">返回首页</Link>
            </Button>
          </div>

          <div className="space-y-6">
            <Link
              href="/components"
              className={`block text-sm font-medium ${
                pathname === '/components'
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              概览
            </Link>

            {componentGroups.map((group) => (
              <div key={group.title} className="space-y-2">
                <h3 className="text-xs uppercase tracking-wider text-muted-foreground">
                  {group.title}
                </h3>
                <ul className="space-y-1">
                  {group.items.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.path}
                        className={`block text-sm ${
                          pathname === item.path
                            ? 'text-primary font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {item.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </aside>

      {/* 主内容区 */}
      <main className="flex-1 p-8">{children}</main>
      {/* <Toaster /> */}
    </div>
  );
}
