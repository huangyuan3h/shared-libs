'use client';

import Link from 'next/link';

const componentGroups = [
  {
    title: '基础组件',
    description: '构建用户界面的基础元素',
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
    description: '展示各种类型数据的组件',
    items: [
      { name: 'Avatar', path: '/components/avatar', label: '头像' },
      { name: 'Skeleton', path: '/components/skeleton', label: '骨架屏' },
    ],
  },
  {
    title: '导航组件',
    description: '帮助用户在应用中导航的组件',
    items: [
      { name: 'Breadcrumb', path: '/components/breadcrumb', label: '面包屑' },
      { name: 'Header', path: '/components/header', label: '页头' },
    ],
  },
  {
    title: '表单组件',
    description: '用于数据收集和用户输入的组件',
    items: [{ name: 'Select', path: '/components/select', label: '选择器' }],
  },
  {
    title: '反馈组件',
    description: '向用户提供操作反馈的组件',
    items: [
      { name: 'Toaster', path: '/components/toaster', label: '消息提示' },
    ],
  },
];

export default function ComponentsPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">组件库</h1>
        <p className="text-muted-foreground">
          基于 React + Tailwind CSS + shadcn/ui
          的组件库，提供美观、易用且可定制的 UI 组件。
        </p>
      </div>

      <div className="grid gap-6">
        {componentGroups.map((group) => (
          <div key={group.title} className="space-y-4">
            <div>
              <h2 className="text-xl font-semibold">{group.title}</h2>
              <p className="text-sm text-muted-foreground">
                {group.description}
              </p>
            </div>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {group.items.map((item) => (
                <Link
                  key={item.name}
                  href={item.path}
                  className="flex items-center justify-between rounded-lg border p-4 hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <div className="font-medium">{item.label}</div>
                    <div className="text-xs text-muted-foreground">
                      {item.name}
                    </div>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-muted-foreground"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
