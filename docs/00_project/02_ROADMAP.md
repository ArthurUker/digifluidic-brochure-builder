# Digifluidic Brochure Builder 项目路线图（Roadmap）

---

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 项目路线图（Roadmap） |
| 项目名称 | Digifluidic Brochure Builder |
| 当前版本 | v2026.06 |
| 适用范围 | 项目执行规划、阶段推进、交付物管理和验收 |
| 维护对象 | 项目负责人、前端开发、内容维护人员、部署运维人员 |
| 主要读者 | 产品负责人、开发人员、项目经理、项目交接人员 |
| 关联文档 | `PROJECT_CONTEXT.md`、`docs/00_project/00_README.md`、`docs/00_project/01_PRD.md` |

---

## 2. 路线图目标

本 Roadmap 的目的是：

1. 将 PRD 中的功能需求和非功能需求转化为可执行的阶段计划；
2. 明确每个阶段的边界、交付物和验收标准，防止范围蔓延；
3. 确保项目按照"文档 → 设计 → 前端 → PDF → 部署 → 评审"的顺序逐步推进；
4. 为项目交接提供清晰的当前状态和下一步指引；
5. 便于在新对话、新工具或新协作者加入时快速对齐项目进度。

---

## 3. 当前版本范围

当前版本定位为**轻量级静态宣传册生成系统**，核心范围包括：

- docs 主干文档建设；
- React + Vite + TypeScript 前端骨架；
- Tailwind CSS 样式系统；
- TypeScript 结构化内容数据文件；
- 宣传册页面组件；
- Playwright PDF 自动导出；
- Windows Server + Nginx 静态部署（8083 端口）；
- 内部评审与版本归档。

**当前版本明确不包括：**

1. 后端 API；
2. 数据库；
3. 用户登录；
4. 权限管理；
5. CMS 内容管理系统；
6. 在线编辑器；
7. 多用户协同编辑；
8. PM2 服务；
9. Docker 部署；
10. Kubernetes；
11. 与 RDPMS 或其他业务系统集成；
12. 自动联网抓取论文。

以上内容仅作为未来扩展设想，不进入当前版本。

---

## 4. 总体阶段划分

| 阶段 | 名称 | 目标 | 主要交付物 | 状态 |
|---|---|---|---|---|
| 阶段 0 | 项目上下文与目录初始化 | 建立项目骨架、目录和上下文文件 | `PROJECT_CONTEXT.md`、`docs/` 目录结构、`00_README.md`、`01_PRD.md` | 已完成 |
| 阶段 1 | 项目文档主干建设 | 完成核心规划文档 | Roadmap、Glossary、Architecture Overview、Content Strategy、Content Model、Design Guideline 等 | 已完成 |
| 阶段 2 | 前端项目骨架生成 | 初始化 Vite + React + TypeScript 项目 | `package.json`、`vite.config.ts`、`tsconfig.json`、`tailwind.config.js`、`src/` 骨架 | 当前进行中 |
| 阶段 3 | 页面组件与视觉样式实现 | 实现宣传册页面组件和品牌化视觉 | 全部页面组件、`print.css`、品牌样式 | 待开始 |
| 阶段 4 | PDF 导出流程实现 | Playwright 自动导出 A4 PDF | `scripts/export-pdf.ts`、`playwright.config.ts`、PDF QA 文档 | 待开始 |
| 阶段 5 | 本地运行与调试 | 本地开发、预览和调试 | 开发服务器、预览、调试 | 待开始 |
| 阶段 6 | Windows Server + Nginx 静态部署 | 部署到 Windows Server 并通过 Nginx 托管 | `dist/` 部署、Nginx 配置、部署验证 | 待开始 |
| 阶段 7 | 内部评审、发布与归档 | 完成内部评审并归档发布版本 | 评审记录、发布版本号、导出 PDF、CHANGELOG | 待开始 |
| 阶段 8 | 未来扩展规划 | 记录未来扩展方向 | 多语言、多版本、JSON 化、CMS 可能性等设想 | 未来规划 |

---

## 5. 阶段 0：项目上下文与目录初始化

### 5.1 已完成内容

1. 确定项目名称为 `Digifluidic Brochure Builder`；
2. 明确纯前端静态站点定位；
3. 明确技术栈为 React + Vite + TypeScript + Tailwind CSS；
4. 明确 PDF 导出使用 Playwright，Chrome 打印作为兜底；
5. 明确部署目标为 Windows Server + Nginx + 8083 端口；
6. 明确无后端、无数据库、不使用 PM2；
7. 创建完整的 `docs/` 目录结构（9 个子目录、39 个 Markdown 文件）；
8. 写入 `PROJECT_CONTEXT.md`（项目上下文锚点文件）；
9. 写入 `docs/00_project/00_README.md`（项目自述文件）；
10. 写入 `docs/00_project/01_PRD.md`（产品需求文档）；
11. 建立 Prompt + VS Code Monica 扩展的协作方式；
12. 建立 `PROJECT_CONTEXT.md` 实时更新规则。

### 5.2 交付物

| 交付物 | 状态 |
|---|---|
| `PROJECT_CONTEXT.md` | 已完成 |
| `docs/` 目录结构 | 已完成 |
| `docs/00_project/00_README.md` | 已完成 |
| `docs/00_project/01_PRD.md` | 已完成 |
| 协作方式与实时更新规则 | 已建立 |

### 5.3 验收标准

| 编号 | 验收项 | 状态 |
|---|---|---|
| AC-0.1 | 项目名称、定位、技术栈和部署边界已明确 | ✅ |
| AC-0.2 | `docs/` 目录结构完整，9 个子目录均已创建 | ✅ |
| AC-0.3 | `PROJECT_CONTEXT.md` 可作为上下文锚点文件使用 | ✅ |
| AC-0.4 | PRD 已完成且覆盖需求范围、功能边界和合规约束 | ✅ |
| AC-0.5 | 协作方式已明确（Monica 扩展写入为主，终端为辅） | ✅ |

---

## 6. 阶段 1：项目文档主干建设

### 6.1 阶段目标

完成项目核心规划文档，为后续开发、设计、内容维护和部署提供完整依据。

### 6.2 已完成文件

| 序号 | 文件路径 | 用途 | 优先级 |
|---|---|---|---|
| 1 | `docs/00_project/02_ROADMAP.md` | 项目路线图，规划阶段、交付物和验收标准 | 高 |
| 2 | `docs/00_project/03_GLOSSARY.md` | 项目术语表，统一项目内部概念和命名 | 高 |
| 3 | `docs/01_architecture/00_ARCHITECTURE_OVERVIEW.md` | 技术架构总览，说明前端架构、渲染方式和组件关系 | 高 |
| 4 | `docs/02_content/00_CONTENT_STRATEGY.md` | 内容策略，明确宣传册内容主线和表达原则 | 高 |
| 5 | `docs/02_content/01_CONTENT_MODEL.md` | 内容数据模型，定义 TypeScript 数据结构和字段规范 | 高 |
| 6 | `docs/03_design/00_DESIGN_GUIDELINE.md` | 设计规范，定义布局、色彩、字体、A4 版式 | 中 |
| 7 | `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md` | Windows Server + Nginx 部署详细说明 | 中 |
| 8 | `docs/06_pdf_export/00_PDF_EXPORT_OVERVIEW.md` | PDF 导出方案总览，说明自动导出和手动兜底 | 中 |
| 9 | `docs/07_review_release/00_INTERNAL_REVIEW_GUIDE.md` | 内部评审指南，明确评审流程和检查项 | 中 |

### 6.3 各文件完成标准

| 文件 | 完成标准 |
|---|---|
| `02_ROADMAP.md` | 覆盖 8 个阶段划分，每阶段有明确交付物和验收标准，依赖关系清晰 ✅ |
| `03_GLOSSARY.md` | 覆盖项目、技术、产品、检测、合规、部署等核心术语，定义清晰无歧义 ✅ |
| `00_ARCHITECTURE_OVERVIEW.md` | 说明项目架构定位、目录结构、组件树、数据流、路由和渲染方式 ✅ |
| `00_CONTENT_STRATEGY.md` | 明确内容主线、受众分层、表达风格、合规边界和内容维护原则 ✅ |
| `01_CONTENT_MODEL.md` | 定义 BrochureMeta、Metrics、ProductItem、ApplicationItem、PaperItem 等完整数据结构 ✅ |
| `00_DESIGN_GUIDELINE.md` | 定义品牌色、字体、间距、A4 页面尺寸、打印断页规则、响应式策略 ✅ |
| `01_WINDOWS_NGINX_DEPLOYMENT.md` | 完整部署步骤，含 Nginx 配置模板、端口矩阵、故障排查 ✅ |
| `00_PDF_EXPORT_OVERVIEW.md` | 说明 Playwright 导出流程、Chrome 手动兜底、文件命名和 QA 检查项 ✅ |
| `00_INTERNAL_REVIEW_GUIDE.md` | 明确评审角色、审查维度、检查清单和签字流程 ✅ |

> 阶段 1 已超额完成，实际写入文件远超出上述 9 个核心文件，最终完成 `docs/` 体系全部 39 个 Markdown 文件。完整清单见 `PROJECT_CONTEXT.md` 11.2 节。

### 6.4 阶段验收标准

| 编号 | 验收项 |
|---|---|
| AC-1.1 | 全部 9 个文档文件已写入且内容完整 |
| AC-1.2 | 各文档之间无矛盾或冲突 |
| AC-1.3 | 文档覆盖项目全生命周期所需的核心信息 |
| AC-1.4 | 文档语气专业、清晰、适合项目交接 |
| AC-1.5 | 无后端、数据库、CMS、PM2 等超出范围的内容 |

---

## 7. 阶段 2：前端项目骨架生成

### 7.1 阶段目标

初始化 Vite + React + TypeScript 项目，配置 Tailwind CSS，建立基础目录结构和入口文件。

### 7.2 预计交付物

| 文件 | 说明 |
|---|---|
| `package.json` | 项目依赖和脚本配置 |
| `vite.config.ts` | Vite 构建配置 |
| `tsconfig.json` | TypeScript 主配置 |
| `tsconfig.node.json` | TypeScript Node 环境配置 |
| `tailwind.config.js` | Tailwind CSS 配置（含品牌色、A4 尺寸断点） |
| `postcss.config.js` | PostCSS 配置 |
| `index.html` | HTML 入口 |
| `src/main.tsx` | React 入口 |
| `src/App.tsx` | 根组件 |
| `src/styles/index.css` | 全局样式（含 Tailwind 指令） |
| `src/styles/print.css` | 打印专用样式 |
| `src/data/brochure.ts` | 宣传册内容数据文件（初始占位） |
| `src/types/brochure.ts` | 宣传册 TypeScript 类型定义 |
| `.gitignore` | Git 忽略规则 |

### 7.3 验收标准

| 编号 | 验收项 |
|---|---|
| AC-2.1 | `npm install` 无错误完成 |
| AC-2.2 | `npm run dev` 启动本地开发服务器，页面可正常显示 |
| AC-2.3 | `npm run build` 成功生成 `dist/` 目录 |
| AC-2.4 | TypeScript 类型检查通过 |
| AC-2.5 | Tailwind CSS 样式正常加载 |
| AC-2.6 | 页面可显示基础宣传册结构（含封面占位） |

---

## 8. 阶段 3：页面组件与视觉样式实现

### 8.1 阶段目标

实现全部宣传册页面组件，建立 A4/PDF 友好的布局，实现品牌化视觉样式，确保页面和 PDF 输出一致。

### 8.2 预计组件

| 组件 | 说明 |
|---|---|
| `BrochureLayout` | 整体布局容器，管理页面尺寸、分页和导航 |
| `CoverPage` | 封面页：项目标题、品牌、版本号、日期 |
| `ExecutiveSummary` | 执行摘要：平台核心能力概述 |
| `PlatformOverview` | 平台概述：技术定位与能力框架 |
| `ProductEcosystem` | 产品生态：硬件、芯片、耗材体系 |
| `TechnologyRoutes` | 技术路线：LAMP、RT-qPCR、多重 PCR、电化学传感 |
| `ApplicationMatrix` | 应用矩阵：方向 × 产品 × 技术路线的结构化表格 |
| `PaperEvidenceList` | 论文证据链：按方向组织的论文列表 |
| `ComplianceNotice` | 合规声明：合规边界与表达规范 |
| `ContactAndFooter` | 联系方式与页脚：联系信息、版本号、版权声明 |

### 8.3 样式要求

- 基于 Tailwind CSS 实现品牌化设计；
- `print.css` 覆盖打印断页、背景色保留、页眉页脚隐藏；
- A4 页面尺寸（210mm × 297mm）作为主要设计约束；
- 页面在 Chrome / Edge 中显示正常；
- 打印预览无明显断版或内容截断。

### 8.4 验收标准

| 编号 | 验收项 |
|---|---|
| AC-3.1 | 全部 10 个组件已实现且功能正常 |
| AC-3.2 | 组件数据来自 `src/data/brochure.ts`，无大段硬编码内容 |
| AC-3.3 | 页面在 Chrome / Edge 中显示正常 |
| AC-3.4 | 打印预览无严重断版问题 |
| AC-3.5 | A4 打印效果与网页预览内容一致 |
| AC-3.6 | 品牌色、字体、间距符合设计规范 |

---

## 9. 阶段 4：PDF 导出流程实现

### 9.1 阶段目标

使用 Playwright 实现自动化 PDF 导出，保留 Chrome 手动打印作为兜底方案，建立 PDF 质量检查清单。

### 9.2 预计交付物

| 文件 | 说明 |
|---|---|
| `scripts/export-pdf.ts` | Playwright PDF 导出脚本 |
| `playwright.config.ts` | Playwright 配置 |
| `docs/06_pdf_export/01_PLAYWRIGHT_EXPORT_SPEC.md` | Playwright 导出技术规格 |
| `docs/06_pdf_export/02_BROWSER_PRINT_GUIDE.md` | 浏览器手动打印指南 |
| `docs/06_pdf_export/03_PDF_QA_CHECKLIST.md` | PDF 质量检查清单 |

### 9.3 验收标准

| 编号 | 验收项 |
|---|---|
| AC-4.1 | `npm run export:pdf` 可成功生成 PDF 文件 |
| AC-4.2 | PDF 页面尺寸为 A4（210mm × 297mm） |
| AC-4.3 | 中文字体正常渲染，无乱码或缺失 |
| AC-4.4 | 背景色和品牌色正确保留 |
| AC-4.5 | 封面、页码、合规声明均完整 |
| AC-4.6 | 表格和图表未发生跨页截断 |
| AC-4.7 | PDF 文件名符合 `Digifluidic_Brochure_customer_zh-CN_v{版本号}.pdf` 规范 |
| AC-4.8 | Chrome 手动打印兜底方案已验证可用 |

---

## 10. 阶段 5：本地运行与调试

### 10.1 阶段目标

在开发环境中完成本地运行、预览和调试，确保页面和 PDF 导出功能正常。

### 10.2 验收标准

| 编号 | 验收项 |
|---|---|
| AC-5.1 | `npm run dev` 启动正常 |
| AC-5.2 | `npm run build` 构建成功 |
| AC-5.3 | `npm run preview` 预览正常 |
| AC-5.4 | 本地 PDF 导出测试通过 |

---

## 11. 阶段 6：Windows Server + Nginx 静态部署

### 11.1 阶段目标

将构建产物 `dist/` 部署到 Windows Server，通过 Nginx 独立 server block 托管，使用 8083 端口对外提供访问。

### 11.2 部署边界

| 配置项 | 说明 |
|---|---|
| 部署目录 | `C:\digifluidic-brochure` |
| WebRoot | `C:\digifluidic-brochure\dist` |
| 访问端口 | 8083 |
| 访问地址 | `http://服务器IP:8083` |
| Web 服务器 | Nginx（静态托管） |
| 已有系统 | 不影响 RDPMS、食品安全检验管理系统等已有业务 |
| PM2 | 不使用 |
| 后端服务 | 不新增 |

### 11.3 验收标准

| 编号 | 验收项 |
|---|---|
| AC-6.1 | `nginx -t` 配置测试通过 |
| AC-6.2 | Nginx reload 后 8083 端口可正常访问 |
| AC-6.3 | 页面所有资源（JS、CSS、字体）加载正常 |
| AC-6.4 | 部署后 PDF 导出测试通过 |
| AC-6.5 | 不影响已有业务系统（RDPMS 等）正常运行 |
| AC-6.6 | 不修改已有系统的 Nginx server block 或端口 |

---

## 12. 阶段 7：内部评审、发布与归档

### 12.1 阶段目标

由技术、市场和合规负责人对宣传材料进行内部评审，确认内容准确性、合规性和页面质量，通过后形成版本归档。

### 12.2 交付物

| 交付物 | 说明 |
|---|---|
| 内部评审记录 | 评审人、评审日期、审查意见和修改记录 |
| 发布版本号 | 按版本规则递增（如 v2026.06 → v2026.07） |
| 导出 PDF | 最终版 PDF 文件，按命名规范保存 |
| Git tag | 对应版本的 Git 标签 |
| CHANGELOG | 版本变更记录 |

### 12.3 验收标准

| 编号 | 验收项 |
|---|---|
| AC-7.1 | 宣传材料中无夸大或绝对化表述 |
| AC-7.2 | 无未经确认的产品性能指标 |
| AC-7.3 | 无未授权的客户名称或案例信息 |
| AC-7.4 | 合规声明完整且位置醒目 |
| AC-7.5 | PDF 和网页内容一致 |
| AC-7.6 | PDF 可对外使用前已完成内部确认 |
| AC-7.7 | 版本号和 Git tag 已正确记录 |

---

## 13. 阶段 8：未来扩展规划

以下内容仅作为未来设想，**不进入当前版本**，需要另行评审后再决定是否启动：

| 扩展方向 | 说明 | 前提条件 |
|---|---|---|
| 多语言支持 | 扩展为中文、英文等多语言版本 | 当前版本稳定运行后评估 |
| 多版本宣传册 | 支持面向不同受众的多版本（客户版、政府版、技术版） | 内容模型和组件架构足够灵活 |
| JSON 内容配置 | 将 TypeScript 数据文件迁移为 JSON 格式 | 非开发人员维护需求明确 |
| 自动化批量 PDF | 一键导出所有语言/版本组合的 PDF | PDF 导出流程成熟 |
| 更丰富的数据可视化 | 引入图表库展示技术路线图、应用覆盖热力图 | 设计规范支持 |
| 轻量 CMS 接入 | 接入轻量内容管理系统供非技术人员编辑 | 维护需求明确且投入合理 |
| 文献数据结构化管理 | 将论文证据链整理为结构化数据文件或轻量数据源 | 论文数据量和维护频率达到阈值 |
| 云端静态托管 | 迁移至云存储 + CDN 静态托管 | 运维策略调整 |

**重要提示**：上述扩展方向不得在未经评审的情况下进入当前版本的范围、需求或验收标准。

---

## 14. 阶段依赖关系

| 依赖关系 | 说明 |
|---|---|
| PRD → Roadmap | PRD 是 Roadmap 的阶段划分和范围依据 |
| Roadmap → 后续文档 | Roadmap 指导阶段 1 各文档的编写顺序和优先级 |
| Content Strategy + Content Model → 前端数据文件 | 内容策略和数据模型是 `src/data/brochure.ts` 的设计依据 |
| Design Guideline → 页面组件 + print.css | 设计规范是组件样式和打印样式的依据 |
| PDF Export Overview → export-pdf.ts | PDF 导出方案是 Playwright 脚本的实现依据 |
| 前端骨架 → 页面组件 | 组件在项目骨架基础上开发 |
| 页面组件 + PDF 脚本 → 集成测试 | 组件和 PDF 脚本完成后进行联调测试 |
| Deployment 文档 → 部署操作 | 部署文档是上线操作的执行依据 |
| 部署完成 → 内部评审 | 评审基于已部署的网页进行 |

---

## 15. 风险与应对

| 风险 | 影响 | 可能性 | 应对措施 |
|---|---|---|---|
| 内容范围膨胀 | 项目周期延长，超出轻量级定位 | 中 | 严格按 Roadmap 阶段推进，新增内容需明确评估后归入未来扩展 |
| 论文证据链被误写为产品性能承诺 | 合规风险，可能误导客户 | 中 | 所有宣传文案遵循合规表达规范，内部评审时重点检查 |
| PDF 断页问题 | 表格或图表跨页截断，影响阅读体验 | 高 | 设计阶段即考虑 A4 断页，`print.css` 设置 `page-break` 规则，QA 时逐页检查 |
| 中文字体渲染问题 | PDF 中文字体缺失或乱码 | 中 | Playwright 配置中指定中文字体，部署前在目标环境测试 |
| Nginx 配置影响已有系统 | 已有业务系统服务中断 | 低 | 使用独立端口 8083，独立 server block，配置后先 `nginx -t` 再 reload |
| Monica 扩展误删上下文或覆盖文件 | 文件内容丢失 | 中 | 关键文件完成后及时 Git 提交，修改前确认文件当前内容 |
| PROJECT_CONTEXT.md 未及时更新 | 后续协作基于过期上下文 | 中 | 每完成一个关键文件后同步更新，助手应主动提醒 |
| 未来扩展需求提前进入当前版本 | 范围失控，延迟交付 | 中 | 明确未来扩展不进入当前验收标准，新增需求归入阶段 8 |

---

## 16. 版本推进建议

建议按以下顺序推进：

1. ✅ 完成 `docs/00_project/02_ROADMAP.md`（本文档）；
2. ✅ 完成 `docs/00_project/03_GLOSSARY.md`；
3. ✅ 完成 `docs/01_architecture/00_ARCHITECTURE_OVERVIEW.md`；
4. ✅ 完成 `docs/02_content/00_CONTENT_STRATEGY.md`；
5. ✅ 完成 `docs/02_content/01_CONTENT_MODEL.md`；
6. ✅ 完成 `docs/03_design/00_DESIGN_GUIDELINE.md`；
7. ✅ 完成 `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md`；
8. ✅ 完成 `docs/06_pdf_export/00_PDF_EXPORT_OVERVIEW.md`；
9. ✅ 完成 `docs/07_review_release/00_INTERNAL_REVIEW_GUIDE.md`；
10. ✅ 完成 `docs/` 体系全部 39 个 Markdown 文件；
11. 🔄 进入阶段 2：前端项目骨架生成（当前进行中）；
12. ⬜ 进入阶段 3：页面组件实现；
13. ⬜ 进入阶段 4：PDF 导出流程实现；
14. ⬜ 进入阶段 5：本地运行与调试；
15. ⬜ 进入阶段 6：部署上线。

每个阶段完成后应同步更新 `PROJECT_CONTEXT.md` 中的"当前已完成事项""当前正在进行"和"当前下一步"。

---

## 17. 当前下一步

docs 文档体系（39/39 文件）已完成，当前进入阶段 2，下一步为：

```text
生成前端项目骨架
```

预计生成文件包括：

```text
package.json
vite.config.ts
tsconfig.json
tsconfig.node.json
tailwind.config.js
postcss.config.js
index.html
src/main.tsx
src/App.tsx
src/styles/index.css
src/styles/print.css
src/data/brochure.ts
src/types/brochure.ts
.gitignore
```
