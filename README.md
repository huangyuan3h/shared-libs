# IT and Tea shard libs

本仓库包含共享的 UI 组件库、相关文档及展示网站。

# Shared UI Components Library

这是一个基于 NX + PNPM 的 monorepo 项目，包含 React + Tailwind CSS + shadcn/ui 组件库、Storybook 文档以及展示网站。

## 项目架构

本项目采用 monorepo 架构，使用 NX 作为构建系统和 PNPM 作为包管理器。这种架构的主要优势包括：

- **代码共享**：所有包可以共享代码，避免重复
- **统一版本控制**：所有包在同一个仓库中，便于管理版本
- **统一构建流程**：使用 NX 提供的构建工具链，确保一致的构建过程
- **增量构建**：NX 支持增量构建，只重新构建受影响的部分

### 目录结构

```
shared-libs/
├── packages/                      # 所有包的根目录
│   ├── ui/                        # 核心 UI 组件库
│   │   ├── src/                   # 组件源代码
│   │   │   ├── components/        # 所有 UI 组件
│   │   │   ├── hooks/             # 共享 React hooks
│   │   │   ├── utils/             # 工具函数
│   │   │   ├── styles/            # 全局样式和 Tailwind 配置
│   │   │   └── index.ts           # 主入口文件
│   │   ├── package.json           # 组件库包配置
│   │   └── tsconfig.json          # TypeScript 配置
│   │
│   ├── storybook/                 # Storybook 文档项目
│   │   ├── src/                   # Storybook 源代码
│   │   │   └── stories/           # 组件故事
│   │   ├── .storybook/            # Storybook 配置
│   │   ├── package.json           # Storybook 包配置
│   │   └── tsconfig.json          # TypeScript 配置
│   │
│   ├── website/                   # 展示网站
│       ├── src/                   # 网站源代码
│       │   ├── app/               # Next.js 应用
│       │   ├── components/        # 网站特定组件
│       │   └── pages/             # 网站页面
│       ├── package.json           # 网站包配置
│       └── tsconfig.json          # TypeScript 配置
│
│
├── tools/                         # 构建和开发工具
│   └── eslint-config/             # 共享 ESLint 配置
│
├── nx.json                        # NX 配置
├── package.json                   # 根 package.json
├── pnpm-workspace.yaml            # PNPM 工作区配置
├── tsconfig.base.json             # 基础 TypeScript 配置
└── .nvmrc                         # Node.js 版本控制
```

## 核心包说明

### @shared-libs/ui

核心 UI 组件库，基于 React 和 Tailwind CSS，采用 shadcn/ui 的设计理念。

- **特点**：

  - 使用 Tailwind CSS 实现样式
  - 基于 Radix UI 原语构建的无障碍组件
  - 支持主题定制
  - 类型安全（TypeScript）
  - 轻量级，无运行时依赖

- **组件**：
  - Button：多样式按钮组件，支持不同的变体和尺寸
  - Theme：主题系统组件，支持动态切换主题

#### 样式集成

`@shared-libs/ui` 组件依赖 Tailwind CSS 的原子类来实现样式，但 **库本身并不直接导出 CSS 文件**。因此，在使用此 UI 库的项目中，你需要：

1.  **配置 Tailwind CSS**:
    - 确保你的项目已安装并配置了 Tailwind CSS。
    - 在你的 `tailwind.config.js` (或 `.ts`) 文件的 `content` 数组中，包含指向 `@shared-libs/ui` 组件源文件的路径，以便 Tailwind 可以扫描这些文件中的类。例如：
      ```js
      // tailwind.config.js
      module.exports = {
        // ... 其他配置
        content: [
          './src/**/*.{js,ts,jsx,tsx,mdx}', // 你自己项目的源文件
          '../../packages/ui/src/**/*.{js,ts,jsx,tsx}', // 指向 UI 库源文件 (路径可能需要根据你的项目结构调整)
        ],
        // ... 其他配置
      };
      ```
2.  **引入 Tailwind 指令**:
    - 在你的全局 CSS 文件（例如 `src/app/globals.css` 或 `src/index.css`）中，引入 Tailwind 的基础、组件和工具层：
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
3.  **（可选）定义主题变量**:
    - 如果你希望使用库提供的主题功能或自定义主题，需要在全局 CSS 中定义相应的 CSS 变量。你可以参考 `packages/website/src/app/globals.css` 文件中的 `:root` 和 `.dark` 选择器下的变量定义。

你可以参考 `packages/website` 项目中的 `tailwind.config.js` 和 `src/app/globals.css` 文件作为配置示例。

### @shared-libs/storybook

Storybook 文档项目，用于展示和测试组件。

- **特点**：
  - 交互式组件展示
  - 组件文档
  - 组件变体和属性展示
  - 支持主题切换

### @shared-libs/website

展示网站，使用 Next.js 构建，展示组件库的实际应用。

- **特点**：
  - 基于 Next.js 框架
  - 展示组件在实际应用中的使用
  - 提供组件使用示例

## 技术栈

- **框架**：React 18
- **样式**：Tailwind CSS
- **组件**：shadcn/ui 设计系统
- **文档**：Storybook 8
- **构建工具**：NX
- **包管理**：PNPM
- **类型检查**：TypeScript
- **Node 版本**：v22.14.0（通过 .nvmrc 锁定）

## 开发指南

### 环境设置

确保你使用正确的 Node.js 版本：

```bash
# 如果你使用 nvm
nvm use

# 或者手动安装 Node.js v22.14.0
```

安装依赖：

```bash
pnpm install
```

### 常用命令

```bash
# 启动所有开发服务 (通常会同时启动 Storybook 和展示网站)
pnpm dev

# 启动 Storybook
pnpm storybook

# 启动展示网站
pnpm website

# 构建所有包
pnpm build

# 构建特定包
pnpm nx build @shared-libs/ui

# 运行 lint
pnpm lint
```

### 添加新组件

1. 在 `packages/ui/src/components` 目录下创建新组件
2. 在 `packages/ui/src/components/index.ts` 中导出组件
3. 在 `packages/storybook/src/stories` 中创建对应的故事文件
4. 在展示网站中使用新组件

## 许可证

MIT
