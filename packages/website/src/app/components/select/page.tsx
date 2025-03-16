'use client';

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@shared-libs/ui';

export default function SelectPage() {
  return (
    <div className="space-y-8">
      <div className="space-y-2">
        <h1 className="text-3xl font-bold">选择器 (Select)</h1>
        <p className="text-muted-foreground">
          选择器组件允许用户从预定义的选项列表中选择一个值，适用于表单和筛选场景。
        </p>
      </div>

      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold mb-3">基础示例</h2>
          <div className="w-[240px]">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择一个选项" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">苹果</SelectItem>
                  <SelectItem value="banana">香蕉</SelectItem>
                  <SelectItem value="orange">橙子</SelectItem>
                  <SelectItem value="grape">葡萄</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">带标签</h2>
          <div className="w-[240px]">
            <label className="block text-sm font-medium mb-1">水果</label>
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择一个水果" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>水果列表</SelectLabel>
                  <SelectItem value="apple">苹果</SelectItem>
                  <SelectItem value="banana">香蕉</SelectItem>
                  <SelectItem value="orange">橙子</SelectItem>
                  <SelectItem value="grape">葡萄</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">禁用状态</h2>
          <div className="w-[240px]">
            <Select disabled>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择一个选项" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">苹果</SelectItem>
                  <SelectItem value="banana">香蕉</SelectItem>
                  <SelectItem value="orange">橙子</SelectItem>
                  <SelectItem value="grape">葡萄</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">禁用选项</h2>
          <div className="w-[240px]">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择一个选项" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="apple">苹果</SelectItem>
                  <SelectItem value="banana" disabled>
                    香蕉
                  </SelectItem>
                  <SelectItem value="orange">橙子</SelectItem>
                  <SelectItem value="grape" disabled>
                    葡萄
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">分组选项</h2>
          <div className="w-[240px]">
            <Select>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="选择一个选项" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>水果</SelectLabel>
                  <SelectItem value="apple">苹果</SelectItem>
                  <SelectItem value="banana">香蕉</SelectItem>
                  <SelectItem value="orange">橙子</SelectItem>
                </SelectGroup>
                <SelectGroup>
                  <SelectLabel>蔬菜</SelectLabel>
                  <SelectItem value="carrot">胡萝卜</SelectItem>
                  <SelectItem value="broccoli">西兰花</SelectItem>
                  <SelectItem value="cucumber">黄瓜</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">不同尺寸</h2>
          <div className="space-y-4">
            <div className="w-[240px]">
              <Select>
                <SelectTrigger className="w-full" size="default">
                  <SelectValue placeholder="默认尺寸" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="default">默认选项</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="w-[240px]">
              <Select>
                <SelectTrigger className="w-full" size="sm">
                  <SelectValue placeholder="小尺寸" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="small">小选项</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">表单示例</h2>
          <div className="max-w-md p-6 border rounded-lg space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">国家</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="选择国家" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="cn">中国</SelectItem>
                  <SelectItem value="us">美国</SelectItem>
                  <SelectItem value="jp">日本</SelectItem>
                  <SelectItem value="uk">英国</SelectItem>
                  <SelectItem value="ca">加拿大</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">城市</label>
              <Select>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="选择城市" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="beijing">北京</SelectItem>
                  <SelectItem value="shanghai">上海</SelectItem>
                  <SelectItem value="guangzhou">广州</SelectItem>
                  <SelectItem value="shenzhen">深圳</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <button className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90">
              提交
            </button>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-3">用法示例</h2>
          <div className="p-4 border rounded bg-card text-card-foreground">
            <pre className="text-sm">
              {`import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
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

// 带分组的选择器
<Select>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="选择一个选项" />
  </SelectTrigger>
  <SelectContent>
    <SelectGroup>
      <SelectLabel>水果</SelectLabel>
      <SelectItem value="apple">苹果</SelectItem>
      <SelectItem value="banana">香蕉</SelectItem>
    </SelectGroup>
    <SelectGroup>
      <SelectLabel>蔬菜</SelectLabel>
      <SelectItem value="carrot">胡萝卜</SelectItem>
      <SelectItem value="broccoli">西兰花</SelectItem>
    </SelectGroup>
  </SelectContent>
</Select>

// 禁用状态
<Select disabled>
  <SelectTrigger className="w-[180px]">
    <SelectValue placeholder="选择一个选项" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="apple">苹果</SelectItem>
  </SelectContent>
</Select>

// 不同尺寸
<Select>
  <SelectTrigger className="w-[180px]" size="sm">
    <SelectValue placeholder="小尺寸" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="small">小选项</SelectItem>
  </SelectContent>
</Select>`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}
