'use client';

import { Header, Button } from '@shared-libs/ui';

export default function HeaderPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">页头 (Header)</h1>
        <p className="text-muted-foreground">
          页头组件用于网站或应用的顶部导航，提供品牌标识、导航菜单和操作按钮。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <div className="border rounded-lg overflow-hidden">
            <Header
              leftContent={<div className="font-bold">网站名称</div>}
              menu={
                <nav className="flex space-x-4">
                  <a href="#" className="hover:text-primary">
                    首页
                  </a>
                  <a href="#" className="hover:text-primary">
                    关于
                  </a>
                  <a href="#" className="hover:text-primary">
                    服务
                  </a>
                  <a href="#" className="hover:text-primary">
                    联系我们
                  </a>
                </nav>
              }
              rightContent={<Button size="sm">登录</Button>}
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">只有左侧内容</h2>
          <div className="border rounded-lg overflow-hidden">
            <Header leftContent={<div className="font-bold">网站名称</div>} />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">只有右侧内容</h2>
          <div className="border rounded-lg overflow-hidden">
            <Header
              rightContent={
                <div className="flex space-x-2">
                  <Button size="sm" variant="outline">
                    注册
                  </Button>
                  <Button size="sm">登录</Button>
                </div>
              }
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">自定义样式</h2>
          <div className="border rounded-lg overflow-hidden">
            <Header
              className="bg-primary text-primary-foreground"
              leftContent={<div className="font-bold">网站名称</div>}
              menu={
                <nav className="flex space-x-4">
                  <a href="#" className="hover:text-white/70">
                    首页
                  </a>
                  <a href="#" className="hover:text-white/70">
                    关于
                  </a>
                  <a href="#" className="hover:text-white/70">
                    服务
                  </a>
                  <a href="#" className="hover:text-white/70">
                    联系我们
                  </a>
                </nav>
              }
              rightContent={
                <Button size="sm" variant="secondary">
                  登录
                </Button>
              }
            />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <div className="p-4 border rounded bg-card text-card-foreground">
            <pre className="text-sm">
              {`import { Header, Button } from '@shared-libs/ui';
import Link from 'next/link';

// 基本用法
<Header
  leftContent={<div className="font-bold">网站名称</div>}
  menu={
    <nav className="flex space-x-4">
      <a href="#">首页</a>
      <a href="#">关于</a>
    </nav>
  }
  rightContent={<Button size="sm">登录</Button>}
/>

// 自定义样式
<Header
  className="bg-primary text-primary-foreground"
  leftContent={<div className="font-bold">网站名称</div>}
  rightContent={<Button size="sm" variant="secondary">登录</Button>}
/>

// 与Next.js结合使用
<Header
  leftContent={<div className="font-bold">网站名称</div>}
  menu={
    <nav className="flex space-x-4">
      <Link href="/" className="hover:text-primary">首页</Link>
      <Link href="/about" className="hover:text-primary">关于</Link>
    </nav>
  }
  rightContent={<Button size="sm">登录</Button>}
/>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
