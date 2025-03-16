'use client';

import React from 'react';
import Link from 'next/link';
import { Header as UIHeader, Button } from '@shared-libs/ui';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  // 导航菜单项
  const navItems = [
    { label: '首页', href: '/' },
    { label: '组件', href: '/components' },
  ];

  // 导航菜单
  const menu = (
    <nav className="flex flex-col md:flex-row md:space-x-4 space-y-2 md:space-y-0">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link key={item.href} href={item.href} passHref>
            <Button
              variant={isActive ? 'default' : 'ghost'}
              className={isActive ? 'pointer-events-none' : ''}
            >
              {item.label}
            </Button>
          </Link>
        );
      })}
    </nav>
  );

  // 右侧内容
  const rightContent = (
    <div className="flex items-center space-x-2">
      <a
        href="https://github.com/your-org/shared-libs"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button variant="outline" size="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-github"
          >
            <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
            <path d="M9 18c-4.51 2-5-2-7-2" />
          </svg>
        </Button>
      </a>
    </div>
  );

  // 左侧内容
  const leftContent = (
    <div className="flex items-center gap-2">
      <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold">
        UI
      </div>
      <div className="text-lg font-semibold">Shared UI</div>
    </div>
  );

  return (
    <UIHeader
      sticky
      leftContent={leftContent}
      menu={menu}
      rightContent={rightContent}
    />
  );
}
