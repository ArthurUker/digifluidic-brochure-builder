# 01_TECH_STACK.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 技术栈说明 |
| 文件路径 | `docs/01_architecture/01_TECH_STACK.md` |
| 所属目录 | `docs/01_architecture/` |
| 文档类型 | 技术栈基准文档 |
| 适用范围 | 前端开发、内容数据维护、PDF 导出、构建部署、AI 协作约束 |
| 当前版本 | v0.1 |
| 维护方式 | 随技术选型变化、前端骨架生成和部署方案变化持续更新 |

## 2. 技术栈文档目的与适用范围

本文件用于：

1. 统一当前项目技术栈认知；
2. 说明每项技术在项目中的角色和使用边界；
3. 约束执行型 AI 不得擅自引入范围外技术；
4. 为后续目录结构、组件设计、PDF 导出和部署文档提供技术依据。

本文件不替代：

1. 总体架构概览（`00_ARCHITECTURE_OVERVIEW.md`）；
2. 目录结构文档（`02_DIRECTORY_STRUCTURE.md`）；
3. 路由与渲染文档（`03_ROUTE_AND_RENDERING.md`）；
4. PDF 导出规范（`docs/06_pdf_export/`）；
5. Windows Nginx 部署文档（`docs/05_deployment/`）；
6. 具体代码实现。

## 3. 当前确认的技术栈总览

| 技术/工具 | 项目内角色 | 使用阶段 | 是否当前阶段必需 | 备注 |
|---|---|---|---|---|
| React | 组件化页面渲染 | 开发、构建 | 是 | 仅用于静态前端，不引入 SSR |
| Vite | 本地开发服务与构建 | 开发、构建、预览 | 是 | 不用于服务端渲染 |
| TypeScript | 类型约束与数据文件维护 | 开发、构建 | 是 | 用于组件和数据文件的类型安全 |
| Tailwind CSS | 原子化样式方案 | 开发、构建 | 是 | 需同时兼顾屏幕展示和打印样式 |
| Playwright | 自动化 PDF 导出 | PDF 导出 | 是 | 重点关注分页、字体和背景图形 |
| Chromium | Playwright 使用的浏览器内核 | PDF 导出 | 是 | 提供 PDF 渲染能力 |
| Chrome 打印 | PDF 导出手动兜底方案 | PDF 导出 | 是（兜底） | 适合手动校验和备用导出 |
| Nginx | 静态资源托管与访问转发 | 部署 | 是 | Windows Server 上需独立配置 |
| Windows Server | 目标部署环境 | 部署 | 是 | 需与已有系统隔离 |
| Node.js | 构建与脚本运行环境 | 开发、构建 | 是 | 仅作为开发环境，非生产后端 |
| npm | 依赖安装与脚本运行 | 开发、构建 | 是 | 安装、启动和构建命令入口 |
| Git | 版本记录 | 全程 | 是 | 按阶段提交 |
| VS Code | 主要编辑环境 | 开发 | 是 | 当前项目主要 IDE |
| Monica / CodeBuddy / Copilot | 执行型 AI 辅助生成与修改 | 文档编写、代码生成 | 辅助 | 不得改变项目架构边界 |

## 4. React

React 在本项目中的作用：

1. 组件化渲染白皮书/宣传册页面；
2. 将结构化数据映射为封面、章节页、应用矩阵、论文证据链、产品生态和合规声明等组件；
3. 同一套组件服务于 Web 预览和 PDF 导出；
4. 组件不应硬编码大段内容，应优先从数据文件读取；
5. 当前页面以展示为主，交互需求有限，不需要复杂状态管理库。

当前阶段不引入：

- Redux；
- MobX；
- Zustand；
- React Query；
- 服务端渲染（SSR）；
- Next.js。

如未来确需引入状态管理或 SSR，应先更新架构文档，评估必要性和影响后再引入。

## 5. Vite

Vite 在本项目中的作用：

1. 提供本地开发服务，支持热更新和快速反馈；
2. 执行生产构建，输出 `dist/` 静态产物；
3. 支持 `npm run preview` 本地预览构建结果；
4. 原生支持 React + TypeScript 项目，配置简洁。

典型命令（具体以 `package.json` 最终配置为准）：

```bash
npm run dev      # 启动开发服务
npm run build    # 构建生产产物
npm run preview  # 预览构建结果
```

明确当前项目不是 SSR 项目，不使用 Vite 作为后端服务，不配置 Vite 服务端渲染插件。

## 6. TypeScript

TypeScript 在本项目中的作用：

1. 为 React 组件 props 提供类型约束；
2. 为结构化内容数据提供 schema 约束，确保数据文件结构和字段类型正确；
3. 降低后续维护和 AI 生成代码时的类型出错风险；
4. 适合维护 `src/data/brochure.ts` 等内容数据文件，通过接口定义明确章节、矩阵、论文列表等字段。

当前阶段优先采用 TypeScript 数据文件维护内容，推荐路径：

```text
src/data/brochure.ts
```

JSON 内容文件可作为未来多语言或非开发人员维护场景的扩展方向，但当前不作为主内容源。

## 7. Tailwind CSS

Tailwind CSS 在本项目中的作用：

1. 快速构建页面样式，减少手写 CSS 量；
2. 通过工具类统一间距、字体、颜色和布局；
3. 支持 Web 预览和打印样式两套输出；
4. 降低多组件样式分散和命名冲突的风险。

同时需要注意：

1. 打印样式仍需单独维护（如 `src/styles/print.css`），不能仅依赖 Tailwind；
2. 不应在组件中无限堆叠难以维护的 class 字符串；
3. 品牌色、页面尺寸、字体策略等应在设计规范文档（`docs/03_design/00_DESIGN_GUIDELINE.md`）中进一步定义；
4. A4 页面相关尺寸和边距应提前在 Tailwind 配置中设定好自定义值。

## 8. Playwright 与 Chromium

Playwright 与 Chromium 在 PDF 自动导出中的作用：

1. 自动打开本地预览页面或部署后的静态页面；
2. 等待页面渲染完成（包括字体、图表等资源加载）；
3. 调用 Chromium 内置 PDF 能力导出 A4 PDF；
4. 可编程控制页边距、背景图形开关、页面尺寸、缩放等参数；
5. 支持后续扩展自动化 PDF QA 检查流程。

导出链路：

```text
本地预览服务 / 部署页面 → Playwright 启动 Chromium → 页面渲染 → PDF 生成 → 输出文件
```

正式导出 PDF 时，推荐优先基于构建后的预览服务（`npm run preview`）或部署后的静态页面进行导出，以尽量接近最终发布效果。

明确当前阶段不建设服务端 PDF 渲染 API，PDF 导出在本地或开发环境执行。

## 9. Chrome 打印兜底方案

Chrome 浏览器打印作为手动兜底方案，其作用包括：

1. 手动校验：在浏览器中打开页面，通过"打印 → 另存为 PDF"检查效果；
2. 备用导出：当 Playwright 环境不可用时，可通过 Chrome 手动完成导出；
3. 对照验证：发现 Playwright 输出差异时，用 Chrome 打印结果进行对照排查；
4. 内部审阅阶段快速导出预览版 PDF。

手动打印时需要关注以下设置：

- 纸张尺寸：A4；
- 背景图形：开启；
- 页眉页脚：关闭；
- 缩放比例：默认（100%）或按需调整；
- 边距：建议自定义或选择"无"；
- 中文字体：检查是否正确嵌入；
- 分页断点：检查表格、图表是否被截断。

## 10. Nginx 与 Windows Server

Nginx 在本项目中的作用：

1. 托管 `dist/` 静态资源，对外提供网页访问；
2. 使用独立 server block，与已有系统配置隔离；
3. 使用独立端口 8083，避免与已有服务冲突；
4. 通过 `try_files` 支持前端路由回退。

推荐配置示例：

```nginx
server {
    listen 8083;
    server_name _;
    root C:/digifluidic-brochure/dist;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

注意事项：

1. Windows 下 Nginx 路径建议使用正斜杠；
2. 修改配置后必须执行 `nginx -t` 测试语法，再执行 `nginx -s reload`；
3. 不应修改已有系统（RDPMS、食品安全检验管理系统等）的 server block 和端口；
4. 出现端口冲突时，优先调整本项目端口（如改用 8084），而不是已有系统端口；
5. 部署前应确认 `C:\digifluidic-brochure` 目录存在且 `dist/` 内容完整。

## 11. Node.js 与 npm

Node.js 和 npm 在本项目中的作用：

1. 安装项目依赖（`npm install`）；
2. 运行 Vite 开发服务（`npm run dev`）；
3. 执行生产构建（`npm run build`）；
4. 预览构建结果（`npm run preview`）；
5. 执行 PDF 导出脚本（`npm run export:pdf`）；
6. 管理项目脚本入口，统一命令调用方式。

**重要**：Node.js 仅作为开发和构建环境使用，不应将 Node.js 服务作为生产后端运行。本项目生产环境只需要 Nginx 托管静态产物，不需要 Node.js 进程持续运行。

## 12. Git、VS Code 与 AI 协作工具

在本项目中的角色：

1. **Git**：用于版本记录，按阶段提交变更，管理文档和代码的历史追溯。建议在完成一组相关文件后执行提交，提交信息应简洁明了；
2. **VS Code**：当前项目主要编辑环境，配合 Monica 扩展实现 Prompt 驱动的文件写入和修改；
3. **Monica / CodeBuddy / Copilot 等 AI 工具**：可辅助生成、修改和审阅文档及代码。执行型 AI 工具应遵守：
   - 不得擅自改变当前架构边界；
   - 不得引入后端、数据库、CMS、PM2、Docker、Kubernetes 等范围外技术；
   - 关键文档完成后应同步更新 `PROJECT_CONTEXT.md`。

详细 AI 协作规则以 `PROJECT_CONTEXT.md` 第 12 节为准，本文仅说明 AI 工具在技术栈中的角色定位。

## 13. 当前阶段不纳入的技术

以下技术当前阶段明确不引入：

| 不纳入技术 | 类别 | 暂不引入原因 |
|---|---|---|
| 后端 API（Express、NestJS 等） | 后端服务 | 宣传册以静态展示为主，无需服务端业务逻辑 |
| 数据库（MySQL、PostgreSQL、SQLite 等） | 数据存储 | 内容量适合用结构化文件维护 |
| Prisma 等 ORM | 数据层 | 无数据库则不需要 ORM |
| 用户登录与权限系统 | 认证授权 | 无在线编辑和用户管理需求 |
| CMS（Strapi、WordPress 等） | 内容管理 | 结构化文件 + Git 版本管理已满足需求 |
| 在线编辑器 | 内容编辑 | 内容通过文件维护，不需要 Web 编辑器 |
| PM2 | 进程管理 | 静态站点无需 Node.js 进程持续运行 |
| Docker | 容器化 | 静态站点部署简单，容器化增加不必要的复杂度 |
| Kubernetes | 容器编排 | 单机部署不需要编排 |
| Next.js | 前端框架 | 当前不需要 SSR/SSG，React + Vite 已满足需求 |
| SSR（服务端渲染） | 渲染方式 | 静态站点不需要服务端渲染 |
| 服务端 PDF 渲染服务 | PDF 导出 | 本地 Playwright 导出已满足需求 |
| 自动联网抓取论文 | 数据获取 | 超出当前阶段范围，论文数据通过手动维护 |
| 自动同步论文数据库 | 数据同步 | 超出当前阶段范围 |
| 与 RDPMS 或其他系统深度集成 | 系统集成 | 本项目应保持独立部署和运行 |

以上技术可作为未来扩展方向考虑，但必须经过架构评估和文档更新后才能引入。

## 14. 技术选型原因

当前技术栈选型主要基于以下考量：

1. **与宣传册/白皮书生成场景匹配**：React 组件化渲染适合封面、章节页、矩阵、列表等结构化内容的展示，不需要复杂的在线交互；
2. **降低部署复杂度**：纯前端静态站点只需 Nginx 托管 `dist/` 目录，无需维护后端服务、数据库和进程管理；
3. **便于结构化内容维护**：TypeScript 数据文件提供类型约束，内容变更可通过修改数据文件完成，无需改动组件代码；
4. **便于 Web 预览与 PDF 输出共用**：同一套 React 组件和内容数据同时服务于网页展示和 PDF 导出，减少维护成本；
5. **便于 Git 管理版本**：所有内容以文本文件形式存在，Git 可完整记录变更历史，支持差异对比和版本回退；
6. **便于与已有服务器系统隔离**：独立目录、独立端口、独立 Nginx server block，不影响已有 RDPMS 和食品安全检验管理系统；
7. **当前团队资源可控**：技术栈均为成熟、社区活跃的工具，学习成本和维护成本较低；
8. **后续仍保留扩展空间**：如未来需要多语言、多版本、自动化 PDF QA 或部署脚本，可在当前架构基础上扩展，不涉及架构重写。

## 15. 技术栈风险与控制措施

| 风险 | 影响 | 控制措施 |
|---|---|---|
| React 组件硬编码内容 | 内容修改需要改组件代码，维护困难 | 内容集中在数据文件中维护，组件只负责渲染 |
| TypeScript 类型定义缺失 | 数据文件结构出错，AI 生成代码偏离预期 | 优先定义数据接口，后续组件严格按类型约束开发 |
| Tailwind class 过度堆叠 | 组件可读性下降，样式难以调试 | 提取公共样式组合；关键打印样式单独维护 |
| PDF 分页不稳定 | 导出质量差，封面或章节页断点异常 | 使用 CSS `page-break` 控制分页；Playwright 导出前充分测试 |
| 中文字体不一致 | PDF 中文字体缺失或替换，影响专业形象 | 指定 Web 安全字体或引入字体文件；导出前检查字体嵌入 |
| Playwright 与 Chrome 手动打印结果不一致 | 两种导出方式效果不同，口径混乱 | 以 Playwright 自动导出为主要方案；Chrome 打印仅作兜底和对照 |
| Nginx 配置误影响已有系统 | 已有 RDPMS 等业务中断 | 使用独立 server block 和端口；修改后先测试再 reload |
| 执行型 AI 擅自引入后端或数据库 | 架构偏离纯前端方案，增加不必要的复杂度 | Prompt 中明确禁止；`PROJECT_CONTEXT.md` 中记录架构边界 |
| Node/npm 版本差异导致构建失败 | 开发环境不一致，构建报错 | 建议在 `package.json` 中锁定依赖版本；后续可考虑 `.nvmrc` 统一 Node 版本 |
| 静态资源路径在部署后异常 | 部署后页面资源 404 | 配置 Vite `base` 路径；部署后验证资源加载 |

## 16. 与其他文档的关系

| 文档 | 关系 |
|---|---|
| `PROJECT_CONTEXT.md` | 项目上下文锚点，本文件是其技术栈层面的细化 |
| `docs/01_architecture/00_ARCHITECTURE_OVERVIEW.md` | 总体架构概览，本文件是其第 6 节的详细展开 |
| `docs/01_architecture/02_DIRECTORY_STRUCTURE.md` | 目录结构文档，本文件中各技术的文件组织方式将在此细化 |
| `docs/01_architecture/03_ROUTE_AND_RENDERING.md` | 路由与渲染文档，本文件中 React 和 Vite 的渲染方案将在此细化 |
| `docs/02_content/01_CONTENT_MODEL.md` | 内容模型文档，本文件中 TypeScript 数据文件的 schema 定义将在此细化 |
| `docs/03_design/00_DESIGN_GUIDELINE.md` | 设计规范文档，本文件中 Tailwind CSS 和打印样式的视觉标准将在此细化 |
| `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md` | Windows Nginx 部署文档，本文件中 Nginx 和 Windows Server 的部署方案将在此细化 |
| `docs/06_pdf_export/00_PDF_EXPORT_OVERVIEW.md` | PDF 导出概览，本文件中 Playwright 和 Chrome 打印的导出方案将在此细化 |

## 17. 后续维护规则

1. 技术栈变更必须先更新架构文档（`00_ARCHITECTURE_OVERVIEW.md`），再更新本文件；
2. 新增关键技术需说明引入原因、对现有架构的影响和替代方案评估；
3. 不得由执行型 AI 擅自引入范围外技术，如需引入应先在对话中讨论并更新文档；
4. 前端骨架生成后，如实际脚本命令、依赖版本或配置与本文不一致，应同步修订本文件；
5. 关键技术栈更新应记录在 `PROJECT_CONTEXT.md` 的已完成事项或当前状态中，并通过 Git 提交保留变更记录。
