'use client';

import {
  Header,
  Button,
  Avatar,
  AvatarFallback,
  AvatarImage,
  CodeBlock,
} from '@shared-libs/ui';

export default function HeaderPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">页头 (Header)</h1>
        <p className="text-muted-foreground">
          页头组件用于展示网站或应用的顶部导航栏，包含品牌标识、导航链接和用户操作等元素。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <div className="border rounded overflow-hidden">
            <Header
              leftContent={
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 mr-2"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  <span className="font-bold">品牌名称</span>
                </div>
              }
              menu={
                <nav className="flex md:flex-row flex-col md:items-center md:space-x-4 space-y-2 md:space-y-0">
                  <a href="#" className="font-medium text-primary">
                    首页
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    产品
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    服务
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    关于我们
                  </a>
                </nav>
              }
              rightContent={<Button size="sm">登录</Button>}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">带用户头像</h2>
          <div className="border rounded overflow-hidden">
            <Header
              leftContent={
                <div className="flex items-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 mr-2"
                  >
                    <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
                  </svg>
                  <span className="font-bold">品牌名称</span>
                </div>
              }
              menu={
                <nav className="flex md:flex-row flex-col md:items-center md:space-x-4 space-y-2 md:space-y-0">
                  <a href="#" className="font-medium text-primary">
                    首页
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    产品
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    服务
                  </a>
                  <a href="#" className="font-medium hover:text-primary">
                    关于我们
                  </a>
                </nav>
              }
              rightContent={
                <Avatar className="size-8">
                  <AvatarImage
                    src="https://github.com/shadcn.png"
                    alt="@shadcn"
                  />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              }
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <CodeBlock>
            {`import { Header, Button } from '@shared-libs/ui';

export default function MyHeader() {
  return (
    <Header
      leftContent={
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-6 w-6 mr-2"
          >
            <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
          </svg>
          <span className="font-bold">品牌名称</span>
        </div>
      }
      menu={
        <nav className="flex md:flex-row flex-col md:items-center md:space-x-4 space-y-2 md:space-y-0">
          <a href="/" className="font-medium text-primary">首页</a>
          <a href="/products" className="font-medium hover:text-primary">产品</a>
          <a href="/services" className="font-medium hover:text-primary">服务</a>
          <a href="/about" className="font-medium hover:text-primary">关于我们</a>
        </nav>
      }
      rightContent={<Button size="sm">登录</Button>}
    />
  );
}`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
