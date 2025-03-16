'use client';

import { Skeleton } from '@shared-libs/ui';

export default function SkeletonPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">骨架屏 (Skeleton)</h1>
        <p className="text-muted-foreground">
          骨架屏组件用于在内容加载期间显示占位符，提高用户体验和感知性能。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <Skeleton className="h-4 w-[250px]" />
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同尺寸</h2>
          <div className="flex flex-col space-y-4">
            <Skeleton className="h-4 w-[100px]" />
            <Skeleton className="h-4 w-[200px]" />
            <Skeleton className="h-4 w-[300px]" />
            <Skeleton className="h-4 w-[400px]" />
            <Skeleton className="h-4 w-[500px]" />
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">卡片加载状态</h2>
          <div className="flex flex-col space-y-3">
            <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用户资料加载状态</h2>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">表格加载状态</h2>
          <div className="w-full max-w-[600px] space-y-4">
            <div className="flex justify-between">
              <Skeleton className="h-6 w-[150px]" />
              <Skeleton className="h-6 w-[100px]" />
            </div>
            <div className="space-y-2">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex justify-between">
                  <Skeleton className="h-4 w-[400px]" />
                  <Skeleton className="h-4 w-[100px]" />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <div className="p-4 border rounded bg-card text-card-foreground">
            <pre className="text-sm">
              {`import { Skeleton } from '@shared-libs/ui';

// 基本用法
<Skeleton className="h-4 w-[250px]" />

// 卡片加载状态
<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>

// 用户资料加载状态
<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>

// 条件渲染
{isLoading ? (
  <Skeleton className="h-4 w-[250px]" />
) : (
  <p>{data.title}</p>
)}`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
