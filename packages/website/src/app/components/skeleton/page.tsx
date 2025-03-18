'use client';

import { Skeleton, CodeBlock } from '@shared-libs/ui';

export default function SkeletonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">骨架屏 (Skeleton)</h1>
        <p className="text-muted-foreground">
          骨架屏组件用于在内容加载过程中显示占位符，提高用户感知的加载速度和整体体验。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <Skeleton className="h-4 w-[250px]" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同尺寸</h2>
          <div className="space-y-2">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[500px]" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">卡片加载状态</h2>
          <div className="border p-4 rounded-lg space-y-3 max-w-sm">
            <Skeleton className="h-32 w-full rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
            <div className="space-y-2">
              <Skeleton className="h-4 w-[260px]" />
              <Skeleton className="h-4 w-[230px]" />
              <Skeleton className="h-4 w-[180px]" />
            </div>
            <div className="flex justify-end">
              <Skeleton className="h-8 w-[100px]" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用户资料加载状态</h2>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[150px]" />
              <Skeleton className="h-4 w-[100px]" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">表格加载状态</h2>
          <div className="border rounded-lg">
            <div className="border-b px-4 py-2 grid grid-cols-4 gap-4">
              <Skeleton className="h-4 w-[80px]" />
              <Skeleton className="h-4 w-[100px]" />
              <Skeleton className="h-4 w-[120px]" />
              <Skeleton className="h-4 w-[60px]" />
            </div>
            {[...Array(5)].map((_, i) => (
              <div
                key={i}
                className="px-4 py-2 grid grid-cols-4 gap-4 border-b last:border-0"
              >
                <Skeleton className="h-4 w-[80px]" />
                <Skeleton className="h-4 w-[100px]" />
                <Skeleton className="h-4 w-[120px]" />
                <Skeleton className="h-4 w-[60px]" />
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <CodeBlock>
            {`import { Skeleton } from '@shared-libs/ui';

// 基本用法
<Skeleton className="h-4 w-[250px]" />

// 卡片加载状态
<div className="border p-4 rounded-lg space-y-3 max-w-sm">
  <Skeleton className="h-32 w-full rounded-md" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
  <div className="space-y-2">
    <Skeleton className="h-4 w-[260px]" />
    <Skeleton className="h-4 w-[230px]" />
    <Skeleton className="h-4 w-[180px]" />
  </div>
</div>

// 头像加载状态
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[150px]" />
    <Skeleton className="h-4 w-[100px]" />
  </div>
</div>

// 在加载状态中使用
import { useState, useEffect } from 'react';

function ProfileCard() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState(null);
  
  useEffect(() => {
    // 模拟数据加载
    const timer = setTimeout(() => {
      setData({ name: "张三", role: "设计师" });
      setIsLoading(false);
    }, 2000);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="space-y-3">
      {isLoading ? (
        <>
          <Skeleton className="h-12 w-12 rounded-full" />
          <Skeleton className="h-4 w-[150px]" />
          <Skeleton className="h-4 w-[100px]" />
        </>
      ) : (
        <>
          <div className="h-12 w-12 bg-primary rounded-full" />
          <h3 className="text-lg font-medium">{data.name}</h3>
          <p className="text-muted-foreground">{data.role}</p>
        </>
      )}
    </div>
  );
}`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
