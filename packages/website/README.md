# Shared UI Components Website

这是一个展示我们共享 UI 组件库的网站，基于 Next.js、TypeScript、Tailwind CSS 和 shadcn 构建。

## 功能特点

- 展示 UI 组件库中的所有组件
- 支持亮色和暗色主题切换
- 提供组件用法示例和代码片段
- 响应式设计，适配各种设备

## 技术栈

- **Next.js**: React 框架，用于构建服务端渲染和静态网站
- **TypeScript**: 类型安全的 JavaScript 超集
- **Tailwind CSS**: 实用优先的 CSS 框架
- **shadcn/ui**: 基于 Radix UI 和 Tailwind CSS 的组件集合

## 开发

### 安装依赖

```bash
pnpm install
```

### 启动开发服务器

```bash
pnpm dev
```

### 构建生产版本

```bash
pnpm build
```

### 启动生产服务器

```bash
pnpm start
```

## 项目结构

```
packages/website/
├── src/
│   ├── app/              # Next.js App Router
│   │   ├── components/   # 组件展示页面
│   │   ├── globals.css   # 全局样式
│   │   ├── layout.tsx    # 根布局
│   │   └── page.tsx      # 首页
│   ├── components/       # 网站组件
│   └── types/            # 类型声明
├── public/               # 静态资源
├── tailwind.config.js    # Tailwind 配置
├── postcss.config.js     # PostCSS 配置
├── tsconfig.json         # TypeScript 配置
└── package.json          # 项目依赖和脚本
```

## 与 UI 库的关系

该网站使用 `@shared-libs/ui` 作为依赖，展示和文档化 UI 组件库中的组件。它通过 Tailwind CSS 配置和主题提供器与 UI 库共享相同的设计系统。
