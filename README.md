# IT and Tea shard libs

<a alt="Nx logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a>

✨ Your new, shiny [Nx workspace](https://nx.dev) is almost ready ✨.

[Learn more about this workspace setup and its capabilities](https://nx.dev/nx-api/js?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or run `npx nx graph` to visually explore what was created. Now, let's get you up to speed!

## Finish your CI setup

[Click here to finish setting up your workspace!](https://cloud.nx.app/connect/icPbzFoiRf)

## Generate a library

```sh
npx nx g @nx/js:lib packages/pkg1 --publishable --importPath=@my-org/pkg1
```

## Run tasks

To build the library use:

```sh
npx nx build pkg1
```

To run any task with Nx use:

```sh
npx nx <target> <project-name>
```

These targets are either [inferred automatically](https://nx.dev/concepts/inferred-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects) or defined in the `project.json` or `package.json` files.

[More about running tasks in the docs &raquo;](https://nx.dev/features/run-tasks?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Versioning and releasing

To version and release the library use

```
npx nx release
```

Pass `--dry-run` to see what would happen without actually releasing the library.

[Learn more about Nx release &raquo;](hhttps://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Keep TypeScript project references up to date

Nx automatically updates TypeScript [project references](https://www.typescriptlang.org/docs/handbook/project-references.html) in `tsconfig.json` files to ensure they remain accurate based on your project dependencies (`import` or `require` statements). This sync is automatically done when running tasks such as `build` or `typecheck`, which require updated references to function correctly.

To manually trigger the process to sync the project graph dependencies information to the TypeScript project references, run the following command:

```sh
npx nx sync
```

You can enforce that the TypeScript project references are always in the correct state when running in CI by adding a step to your CI job configuration that runs the following command:

```sh
npx nx sync:check
```

[Learn more about nx sync](https://nx.dev/reference/nx-commands#sync)

[Learn more about Nx on CI](https://nx.dev/ci/intro/ci-with-nx#ready-get-started-with-your-provider?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Install Nx Console

Nx Console is an editor extension that enriches your developer experience. It lets you run tasks, generate code, and improves code autocompletion in your IDE. It is available for VSCode and IntelliJ.

[Install Nx Console &raquo;](https://nx.dev/getting-started/editor-setup?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

## Useful links

Learn more:

- [Learn more about this workspace setup](https://nx.dev/nx-api/js?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Learn about Nx on CI](https://nx.dev/ci/intro/ci-with-nx?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [Releasing Packages with Nx release](https://nx.dev/features/manage-releases?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)
- [What are Nx plugins?](https://nx.dev/concepts/nx-plugins?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

And join the Nx community:

- [Discord](https://go.nx.dev/community)
- [Follow us on X](https://twitter.com/nxdevtools) or [LinkedIn](https://www.linkedin.com/company/nrwl)
- [Our Youtube channel](https://www.youtube.com/@nxdevtools)
- [Our blog](https://nx.dev/blog?utm_source=nx_project&utm_medium=readme&utm_campaign=nx_projects)

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
- **Node 版本**：v20.11.1（通过 .nvmrc 锁定）

## 开发指南

### 环境设置

确保你使用正确的 Node.js 版本：

```bash
# 如果你使用 nvm
nvm use

# 或者手动安装 Node.js v20.11.1
```

安装依赖：

```bash
pnpm install
```

### 常用命令

```bash
# 启动所有开发服务
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

## 贡献指南

1. 确保使用正确的 Node.js 版本（v20.11.1）
2. 遵循项目的代码风格和最佳实践
3. 为新功能编写测试和文档
4. 提交前运行 lint 和测试

## 许可证

MIT
