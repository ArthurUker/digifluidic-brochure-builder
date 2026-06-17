# 00_DEVELOPMENT_GUIDE.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 开发指南 |
| 文件路径 | `docs/04_development/00_DEVELOPMENT_GUIDE.md` |
| 所属目录 | `docs/04_development/` |
| 文档类型 | 开发指南基准文档 |
| 适用范围 | 本地开发环境搭建、开发流程、构建和预览 |
| 当前版本 | v0.1 |
| 维护方式 | 随开发工具链升级和环境变化持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 统一本地开发环境搭建流程；
2. 定义开发、构建和预览的标准命令；
3. 约束开发过程中不得引入项目范围外技术；
4. 帮助新开发者快速上手。

本文件不替代：

1. 本地预览指南（`01_LOCAL_PREVIEW.md`）；
2. 代码风格规范（`02_CODE_STYLE.md`）；
3. 组件规范（`03_COMPONENT_SPEC.md`）；
4. 调试指南（`04_DEBUGGING_GUIDE.md`）。

## 3. 开发环境要求

### 3.1 必需软件

| 软件 | 最低版本 | 说明 |
|---|---|---|
| Node.js | 18.x LTS | 运行时环境 |
| npm | 9.x（随 Node.js 18 附带） | 包管理器 |
| Git | 2.x | 版本控制 |
| VS Code | 最新稳定版 | 推荐 IDE |

### 3.2 推荐 VS Code 扩展

| 扩展 | 用途 |
|---|---|
| Tailwind CSS IntelliSense | Tailwind 类名自动完成和提示 |
| ESLint | 代码质量检查 |
| Prettier | 代码格式化 |
| TypeScript Vue Plugin (Volar) | TSX 语法支持 |
| Playwright Test for VS Code | Playwright 测试和调试（可选） |

### 3.3 操作系统

- 开发：macOS 或 Windows 均可；
- 构建：macOS（本地）或 Windows Server（部署目标）；
- PDF 导出：需要 Chromium（Playwright 自动下载）。

## 4. 项目初始化

### 4.1 克隆项目

```bash
git clone <repository-url>
cd Digifluidic_commercial\ promotion
```

### 4.2 安装依赖

```bash
npm install
```

### 4.3 验证环境

```bash
npm run dev
```

打开浏览器访问 `http://localhost:5173`，确认页面正常显示。

## 5. 常用命令

### 5.1 开发命令

| 命令 | 说明 |
|---|---|
| `npm run dev` | 启动 Vite 开发服务器（热更新） |
| `npm run build` | 构建生产版本到 `dist/` |
| `npm run preview` | 本地预览构建产物 |
| `npm run export:pdf` | 执行 Playwright PDF 导出脚本 |

### 5.2 检查命令

| 命令 | 说明 |
|---|---|
| `npx tsc --noEmit` | TypeScript 类型检查（不生成文件） |
| `npm run build` | 构建时自动包含类型检查（如配置） |
| `npx playwright install chromium` | 安装 Playwright Chromium 浏览器 |

### 5.3 建议的 package.json scripts

```json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "export:pdf": "npx tsx scripts/export-pdf.ts",
    "typecheck": "tsc --noEmit"
  }
}
```

## 6. 开发流程

### 6.1 日常开发流程

1. **拉取最新代码**：`git pull`
2. **安装依赖（如有更新）**：`npm install`
3. **启动开发服务器**：`npm run dev`
4. **修改代码**：编辑 `src/` 下的文件
5. **浏览器预览**：开发服务器自动热更新
6. **类型检查**：`npm run typecheck`
7. **构建验证**：`npm run build`
8. **提交代码**：`git add` + `git commit`

### 6.2 内容更新流程

1. 编辑 `src/data/brochure.ts`
2. 浏览器预览确认内容正确
3. 检查打印预览
4. 构建验证：`npm run build`
5. 如需导出 PDF：`npm run export:pdf`
6. 提交代码

### 6.3 样式调整流程

1. 编辑 `src/styles/print.css` 或 Tailwind 类名
2. 浏览器预览确认屏幕效果
3. 浏览器打印预览确认打印效果
4. 如需导出 PDF 验证：`npm run export:pdf`
5. 提交代码

## 7. 目录约定

开发时文件放置规则：

| 创建内容 | 放置位置 |
|---|---|
| 新组件 | `src/components/` |
| 新数据类型 | `src/types/` |
| 新样式 | `src/styles/`（在 `index.css` 或 `print.css` 中追加） |
| 新脚本 | `scripts/` |
| 新静态资源 | `public/` |

## 8. 开发约束

### 8.1 必须遵守

1. 所有新代码使用 TypeScript；
2. 样式优先使用 Tailwind CSS 工具类；
3. 组件为纯展示组件，不发起网络请求；
4. 内容数据从 `src/data/brochure.ts` 获取；
5. 不引入项目范围外的依赖。

### 8.2 禁止行为

1. 不引入后端框架（Express、Koa 等）；
2. 不引入数据库驱动；
3. 不引入状态管理库（Redux、Zustand 等，当前不需要）；
4. 不引入路由库（React Router 等，当前不需要）；
5. 不引入 CSS-in-JS 库（当前使用 Tailwind）；
6. 不修改 `PROJECT_CONTEXT.md` 中的核心约束；
7. 不删除已有文档内容。

## 9. 构建产物

### 9.1 构建输出

```
dist/
├── index.html
├── assets/
│   ├── index-[hash].js
│   ├── index-[hash].css
│   └── [其他资源]
└── brand/
    └── [品牌资产文件]
```

### 9.2 构建检查

每次构建后检查：
1. `dist/index.html` 存在；
2. `dist/assets/` 下有 JS 和 CSS 文件；
3. 静态资源（如图片、Logo）已复制到 `dist/`；
4. `dist/` 总大小合理（预期 < 5MB）。

## 10. 当前阶段不纳入

1. 单元测试框架（Jest、Vitest 等，后续阶段可引入）；
2. E2E 测试；
3. Storybook 组件文档；
4. CI/CD 流水线；
5. Docker 开发环境；
6. 多语言开发环境；
7. 开发环境热更新之外的代理配置。

## 11. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 依赖版本冲突 | 使用 `package-lock.json` 锁定版本 |
| 构建失败 | `npm run build` 中包含 `tsc` 类型检查 |
| 开发与生产效果不一致 | 使用 `npm run preview` 预览生产构建 |
| Node.js 版本不兼容 | 在 `package.json` 中声明 `engines` 字段 |

## 12. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `01_LOCAL_PREVIEW.md` | 详细说明本地预览方式 |
| `02_CODE_STYLE.md` | 代码风格和格式化规范 |
| `03_COMPONENT_SPEC.md` | 组件开发规范 |
| `04_DEBUGGING_GUIDE.md` | 常见问题和调试方法 |
| `docs/01_architecture/01_TECH_STACK.md` | 技术栈约束 |
| `docs/01_architecture/02_DIRECTORY_STRUCTURE.md` | 目录结构约束 |

## 13. 后续维护规则

1. 新增 npm scripts 后更新本文件第 5 节；
2. 新增依赖后评估是否在项目范围内；
3. 开发环境要求变化后更新本文件第 3 节；
4. 构建流程变化后更新本文件第 9 节。
