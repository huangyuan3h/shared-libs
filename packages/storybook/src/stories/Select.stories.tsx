import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@shared-libs/ui';

const meta = {
  title: 'UI/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};

export default meta;

// 基础示例
export const Default = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="选择一个水果" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>水果</SelectLabel>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana">香蕉</SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
          <SelectItem value="grape">葡萄</SelectItem>
          <SelectItem value="pear">梨</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

// 分组选择
export const Grouped = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="选择一个食物" />
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
          <SelectItem value="potato">土豆</SelectItem>
          <SelectItem value="broccoli">西兰花</SelectItem>
        </SelectGroup>
        <SelectGroup>
          <SelectLabel>肉类</SelectLabel>
          <SelectItem value="beef">牛肉</SelectItem>
          <SelectItem value="chicken">鸡肉</SelectItem>
          <SelectItem value="pork">猪肉</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

// 禁用选项
export const DisabledOptions = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="选择一个水果" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>水果</SelectLabel>
          <SelectItem value="apple">苹果</SelectItem>
          <SelectItem value="banana" disabled>
            香蕉
          </SelectItem>
          <SelectItem value="orange">橙子</SelectItem>
          <SelectItem value="grape" disabled>
            葡萄
          </SelectItem>
          <SelectItem value="pear">梨</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
};

// 不同尺寸
export const Sizes = {
  render: () => (
    <div className="flex flex-col space-y-4">
      <Select>
        <SelectTrigger className="w-[180px]" size="default">
          <SelectValue placeholder="默认尺寸" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="default">默认选项</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="w-[180px]" size="sm">
          <SelectValue placeholder="小尺寸" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="small">小选项</SelectItem>
        </SelectContent>
      </Select>
    </div>
  ),
};
