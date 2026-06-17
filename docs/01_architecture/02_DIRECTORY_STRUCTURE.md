# 02_DIRECTORY_STRUCTURE.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 目录结构规范 |
| 文件路径 | `docs/01_architecture/02_DIRECTORY_STRUCTURE.md` |
| 所属目录 | `docs/01_architecture/` |
| 文档类型 | 目录结构基准文档 |
| 适用范围 | 前端源码、构建配置、内容数据、脚本、导出产物和部署相关目录 |
| 当前版本 | v0.1 |
| 维护方式 | 随前端骨架、组件拆分、脚本新增和部署目录变化持续更新 |

## 2. 文档目的与适用范围

本文件用于：

1. 统一项目目录结构认知；
2. 定义每个目录和关键文件的职责；
3. 约束目录不得任意膨胀；
4. 帮助执行型 AI 在生成代码时遵守目录边界；
5. 帮助新加入的工程师快速定位代码。

本文件不替代：

1. 总体架构概览（`00_ARCHITECTURE_OVERVIEW.md`）；
2. 技术栈说明（`01_TECH_STACK.md`）；
3. 路由与渲染文档（`03_ROUTE_AND_RENDERING.md`）；
4. 组件规范（`docs/04_development/03_COMPONENT_SPEC.md`）。

## 3. 目录结构设计目标

1. **扁平优先**：避免过度嵌套，src 下控制在 2–3 层；
2. **职责单一**：每个目录只承担一类职责；
3. **命名一致**：目录和文件命名统一使用 kebab-case 或小写，组件文件使用 PascalCase；
4. **构建无关**：构建产物 `dist/`、`node_modules/`、导出产物 `exports/` 等不与源码混放；
5. **易于交接**：任何有 React + Vite 经验的开发者应能快速理解目录结构。

## 4. 当前 docs 目录结构

```text
docs/
├── 00_project/
│   ├── 00_README.md
│   ├── 01_PRD.md
│   ├── 02_ROADMAP.md
│   └── 03_GLOSSARY.md
├── 01_architecture/
│   ├── 00_ARCHITECTURE_OVERVIEW.md
│   ├── 01_TECH_STACK.md
│   ├── 02_DIRECTORY_STRUCTURE.md          # 本文件
│   └── 03_ROUTE_AND_RENDERING.md
├── 02_content/
│   ├── 00_CONTENT_STRATEGY.md
│   ├── 01_CONTENT_MODEL.md
│   ├── 02_PAPER_DATA_SCHEMA.md
│   ├── 03_APPLICATION_MATRIX_SCHEMA.md
│   └── 04_COMPLIANCE_COPY.md
├── 03_design/
│   ├── 00_DESIGN_GUIDELINE.md
│   ├── 01_PAGE_LAYOUT_SPEC.md
│   ├── 02_PRINT_STYLE_SPEC.md
│   └── 03_BRAND_ASSETS_GUIDE.md
├── 04_development/
│   ├── 00_DEVELOPMENT_GUIDE.md
│   ├── 01_LOCAL_PREVIEW.md
│   ├── 02_CODE_STYLE.md
│   ├── 03_COMPONENT_SPEC.md
│   └── 04_DEBUGGING_GUIDE.md
├── 05_deployment/
│   ├── 00_DEPLOYMENT_OVERVIEW.md
│   ├── 01_WINDOWS_NGINX_DEPLOYMENT.md
│   ├── 02_NGINX_CONFIG_SPEC.md
│   ├── 03_PORT_MATRIX.md
│   └── 04_DEPLOY_PS1_SPEC.md
├── 06_pdf_export/
│   ├── 00_PDF_EXPORT_OVERVIEW.md
│   ├── 01_PLAYWRIGHT_EXPORT_SPEC.md
│   ├── 02_BROWSER_PRINT_GUIDE.md
│   └── 03_PDF_QA_CHECKLIST.md
├── 07_review_release/
│   ├── 00_INTERNAL_REVIEW_GUIDE.md
│   ├── 01_RELEASE_PROCESS.md
│   ├── 02_VERSIONING_RULES.md
│   └── 03_CHANGELOG.md
└── 08_operations/
    ├── 00_OPERATIONS_GUIDE.md
    ├── 01_COMMON_ISSUES.md
    ├── 02_ROLLBACK_GUIDE.md
    └── 03_MAINTENANCE_CHECKLIST.md
```

## 5. 未来前端源码目录结构

```text
Digifluidic_commercial promotion/
├── docs/                                    # 项目文档
├── public/                                  # 静态资源（如有 favicon 等）
├── src/
│   ├── main.tsx                             # React 入口
│   ├── App.tsx                              # 根组件
│   ├── components/                          # 页面组件
│   │   ├── BrochureLayout.tsx               # 宣传册整体布局
│   │   ├── CoverPage.tsx                    # 封面页
│   │   ├── ExecutiveSummary.tsx             # 执行摘要
│   │   ├── PlatformOverview.tsx             # 平台概述
│   │   ├── ProductEcosystem.tsx             # 产品生态
│   │   ├── TechnologyRoutes.tsx             # 技术路线
│   │   ├── ApplicationMatrix.tsx            # 应用矩阵
│   │   ├── PaperEvidenceList.tsx            # 论文证据列表
│   │   ├── ComplianceNotice.tsx             # 合规声明
│   │   └── ContactAndFooter.tsx             # 联系方式与页脚
│   ├── data/
│   │   └── brochure.ts                      # 宣传册内容数据（主数据源）
│   ├── styles/
│   │   ├── index.css                        # 全局样式 + Tailwind 指令
│   │   └── print.css                        # 打印专用样式
│   └── types/
│       └── brochure.ts                      # 内容数据类型定义
├── scripts/
│   └── export-pdf.ts                        # Playwright PDF 导出脚本
├── exports/                                 # PDF 导出产物目录
│   └── .gitkeep
├── package.json
├── vite.config.ts
├── tsconfig.json
├── tsconfig.node.json
├── tailwind.config.js
├── postcss.config.js
├── index.html
├── PROJECT_CONTEXT.md
├── deploy.ps1                                   # Windows 部署脚本，暂放根目录，便于在服务器上直接执行
└── .gitignore
```

## 6. 各目录职责说明

### 6.1 `docs/`

项目文档目录。详见本文件第 4 节。

### 6.2 `public/`

Vite 静态资源目录，构建时直接复制到 `dist/`。如有 favicon、robots.txt 等静态文件放置于此。

### 6.3 `src/`

前端源码根目录。

### 6.4 `src/components/`

React 页面组件目录。每个组件负责一个可复用的宣传册页面区块。

组件命名规则：
- 使用 PascalCase；
- 组件名应反映其页面角色，例如 `CoverPage.tsx`、`ApplicationMatrix.tsx`；
- 每个组件文件只导出一个主组件。

### 6.5 `src/data/`

宣传册内容数据目录。当前阶段优先使用 TypeScript 数据文件 `brochure.ts`，提供类型安全的集中内容管理。

职责：
- 存储白皮书全部文字内容；
- 存储论文证据列表；
- 存储应用矩阵数据；
- 存储合规声明文案；
- 作为组件的唯一数据来源。

当前不纳入范围：
- JSON 内容文件作为多语言扩展方向，当前不作为主数据源；
- 不在 `src/data/` 中存放 API 调用或数据获取逻辑。

### 6.6 `src/styles/`

样式文件目录。使用 Tailwind CSS 作为主样式方案。

职责：
- `index.css`：全局样式入口，包含 Tailwind 指令和项目级全局样式；
- `print.css`：打印专用样式，控制 A4 分页、页边距、页眉页脚隐藏等。

### 6.7 `src/types/`

TypeScript 类型定义目录。

职责：
- `brochure.ts`：定义宣传册内容数据的完整 TypeScript 接口和类型，供 `src/data/brochure.ts` 和所有组件使用。

### 6.8 `scripts/`

构建和工具脚本目录。

职责：
- `export-pdf.ts`：Playwright PDF 导出脚本，基于 `npm run preview` 启动的本地服务导出 A4 PDF。

当前不纳入范围：
- `deploy.ps1` 暂放项目根目录，便于在 Windows Server 上直接执行。如后续部署脚本增多，再评估新增 `deploy/` 目录。

### 6.9 `exports/`

PDF 导出产物目录。

职责：
- 存放 `export-pdf.ts` 生成的 PDF 文件；
- 纳入 `.gitignore`，不提交到版本库。

### 6.10 项目根目录配置文件

| 文件 | 职责 |
|---|---|
| `package.json` | Node.js 项目配置，声明依赖和 npm scripts |
| `vite.config.ts` | Vite 构建配置 |
| `tsconfig.json` | TypeScript 编译配置 |
| `tsconfig.node.json` | Node.js 端 TypeScript 配置（Vite 配置和脚本用） |
| `tailwind.config.js` | Tailwind CSS 配置，包含品牌色和自定义尺寸 |
| `postcss.config.js` | PostCSS 配置，引入 Tailwind 和 autoprefixer |
| `index.html` | Vite 入口 HTML |
| `PROJECT_CONTEXT.md` | 项目上下文锚点文件 |
| `.gitignore` | Git 忽略规则 |

## 7. 文件命名规则

### 7.1 组件文件

- 格式：PascalCase + `.tsx`
- 示例：`CoverPage.tsx`、`ApplicationMatrix.tsx`

### 7.2 数据和类型文件

- 格式：kebab-case 或小写 + `.ts`
- 示例：`brochure.ts`

### 7.3 样式文件

- 格式：小写 + `.css`
- 示例：`index.css`、`print.css`

### 7.4 脚本文件

- 格式：kebab-case + `.ts`
- 示例：`export-pdf.ts`

### 7.5 文档文件

- 格式：`NN_DESCRIPTION.md`
- `NN` 为两位数字编号，`DESCRIPTION` 为大写英文下划线分隔
- 示例：`00_ARCHITECTURE_OVERVIEW.md`

### 7.6 导出产物文件

- 格式：`Digifluidic_Brochure_[audience]_[lang]_v[version].pdf`
- 示例：`Digifluidic_Brochure_customer_zh-CN_v2026.06.pdf`

## 8. 不纳入目录

以下内容不进入项目目录：

1. `node_modules/`（通过 `.gitignore` 排除）；
2. `dist/` 构建产物（通过 `.gitignore` 排除）；
3. 数据库文件；
4. 后端代码；
5. CMS 相关文件；
6. Docker 相关文件（Dockerfile、docker-compose.yml 等）；
7. Kubernetes 配置；
8. PM2 配置；
9. RDPMS 或其他业务系统代码；
10. 个人临时文件。

## 9. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| `src/components/` 文件膨胀 | 组件拆分前先讨论，新增组件需有明确的页面角色 |
| 数据和组件耦合过紧 | 组件仅通过 props 接收数据，数据文件独立于组件 |
| 样式冲突 | 优先使用 Tailwind utility class，print.css 仅处理打印专用逻辑 |
| 目录嵌套过深 | 保持在 2–3 层，如需更深嵌套应先评估 |
| 导出产物混入源码 | `exports/` 和 `dist/` 加入 `.gitignore` |

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_ARCHITECTURE_OVERVIEW.md` | 上位文档，定义总体架构，本文件实现其目录结构部分 |
| `01_TECH_STACK.md` | 技术选型依据，影响目录内文件类型和配置 |
| `03_ROUTE_AND_RENDERING.md` | 定义组件如何组织为页面路由 |
| `docs/02_content/01_CONTENT_MODEL.md` | 定义 `src/data/brochure.ts` 的数据结构 |
| `docs/04_development/03_COMPONENT_SPEC.md` | 定义 `src/components/` 下组件的设计规范 |
| `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md` | 定义 `dist/` 在服务器上的部署路径 |

## 11. 后续维护规则

1. 新增目录或文件前，先评估是否可在现有目录中容纳；
2. 新增 `src/components/` 下的组件后，同步更新本文件第 5 节的目录结构；
3. 新增配置或脚本文件后，同步更新本文件第 6 节；
4. 目录结构调整需在 `PROJECT_CONTEXT.md` 中记录。
