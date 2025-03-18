'use client';

import {
  Avatar,
  AvatarImage,
  AvatarFallback,
  CodeBlock,
} from '@shared-libs/ui';

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">头像 (Avatar)</h1>
        <p className="text-muted-foreground">
          头像组件用于展示用户或实体的图像，支持图像和回退显示。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同尺寸</h2>
          <div className="flex items-center space-x-4">
            <Avatar className="size-6">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="size-8">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="size-12">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="size-16">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">回退显示</h2>
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>AB</AvatarFallback>
            </Avatar>
            <Avatar>
              <AvatarFallback>CK</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">自定义样式</h2>
          <div className="flex items-center space-x-4">
            <Avatar className="bg-blue-500 text-white">
              <AvatarFallback>BL</AvatarFallback>
            </Avatar>
            <Avatar className="bg-green-500 text-white">
              <AvatarFallback>GR</AvatarFallback>
            </Avatar>
            <Avatar className="bg-red-500 text-white">
              <AvatarFallback>RD</AvatarFallback>
            </Avatar>
            <Avatar className="border-2 border-yellow-500">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>YL</AvatarFallback>
            </Avatar>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <CodeBlock>
            {`import { Avatar, AvatarImage, AvatarFallback } from '@shared-libs/ui';

// 基本用法
<Avatar>
  <AvatarImage src="https://example.com/avatar.jpg" alt="用户头像" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// 自定义尺寸
<Avatar className="size-12">
  <AvatarImage src="https://example.com/avatar.jpg" alt="用户头像" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>

// 自定义样式
<Avatar className="bg-blue-500 text-white">
  <AvatarFallback>BL</AvatarFallback>
</Avatar>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
