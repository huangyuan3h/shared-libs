'use client';

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
  CodeBlock,
} from '@shared-libs/ui';

export default function SelectPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">选择器 (Select)</h1>
        <p className="text-muted-foreground">
          选择器组件允许用户从预定义的选项列表中选择一个选项，适用于表单和数据筛选。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择一个水果" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="apple">苹果</SelectItem>
              <SelectItem value="banana">香蕉</SelectItem>
              <SelectItem value="orange">橙子</SelectItem>
              <SelectItem value="grape">葡萄</SelectItem>
              <SelectItem value="watermelon">西瓜</SelectItem>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">带分组选项</h2>
          <Select>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="选择一个食物" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>水果</SelectLabel>
                <SelectItem value="apple">苹果</SelectItem>
                <SelectItem value="banana">香蕉</SelectItem>
                <SelectItem value="orange">橙子</SelectItem>
              </SelectGroup>
              <SelectSeparator />
              <SelectGroup>
                <SelectLabel>蔬菜</SelectLabel>
                <SelectItem value="carrot">胡萝卜</SelectItem>
                <SelectItem value="potato">土豆</SelectItem>
                <SelectItem value="tomato">番茄</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">禁用状态</h2>
          <div className="flex gap-4">
            <Select disabled>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="已禁用" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">苹果</SelectItem>
                <SelectItem value="banana">香蕉</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="选择一项" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="apple">苹果</SelectItem>
                <SelectItem value="banana">香蕉</SelectItem>
                <SelectItem value="orange" disabled>
                  橙子 (已禁用)
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">表单中使用</h2>
          <form className="grid gap-4 w-full max-w-md">
            <div className="grid gap-2">
              <label htmlFor="language">语言偏好</label>
              <Select defaultValue="chinese">
                <SelectTrigger id="language" className="w-full">
                  <SelectValue placeholder="选择语言" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="chinese">简体中文</SelectItem>
                  <SelectItem value="english">English</SelectItem>
                  <SelectItem value="japanese">日本語</SelectItem>
                  <SelectItem value="korean">한국어</SelectItem>
                </SelectContent>
              </Select>
              <p className="text-sm text-muted-foreground">
                选择您偏好的语言，影响通知和界面显示。
              </p>
            </div>
            <div className="grid gap-2">
              <label htmlFor="theme">主题</label>
              <Select defaultValue="system">
                <SelectTrigger id="theme" className="w-full">
                  <SelectValue placeholder="选择主题" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">浅色主题</SelectItem>
                  <SelectItem value="dark">深色主题</SelectItem>
                  <SelectItem value="system">跟随系统</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button
              type="submit"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none"
            >
              保存设置
            </button>
          </form>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <CodeBlock>
            {`import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
  SelectGroup,
  SelectLabel,
  SelectSeparator,
} from '@shared-libs/ui';

// 基本用法
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="选择一个选项" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">苹果</SelectItem>
    <SelectItem value="banana">香蕉</SelectItem>
    <SelectItem value="orange">橙子</SelectItem>
  </SelectContent>
</Select>

// 带分组
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="选择一个食物" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>水果</SelectLabel>
      <SelectItem value="apple">苹果</SelectItem>
      <SelectItem value="banana">香蕉</SelectItem>
    </SelectGroup>
    <SelectSeparator />
    <SelectGroup>
      <SelectLabel>蔬菜</SelectLabel>
      <SelectItem value="carrot">胡萝卜</SelectItem>
      <SelectItem value="potato">土豆</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

// 默认值
<Select defaultValue="apple">
  <SelectTrigger className="w-[180px]">
    <SelectValue />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">苹果</SelectItem>
    <SelectItem value="banana">香蕉</SelectItem>
  </SelectContent>
</Select>

// 禁用状态
<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="已禁用" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">苹果</SelectItem>
  </SelectContent>
</Select>`}
          </CodeBlock>
        </div>
      </div>
    </div>
  );
}
