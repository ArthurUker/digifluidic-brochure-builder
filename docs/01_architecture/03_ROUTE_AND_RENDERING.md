# 03_ROUTE_AND_RENDERING.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 路由与渲染规范 |
| 文件路径 | `docs/01_architecture/03_ROUTE_AND_RENDERING.md` |
| 所属目录 | `docs/01_architecture/` |
| 文档类型 | 路由与渲染基准文档 |
| 适用范围 | 页面组织方式、路由策略、渲染方式、Web 预览和 PDF 输出共用渲染 |
| 当前版本 | v0.1 |
| 维护方式 | 随页面数量变化、路由方案调整或渲染方式变化持续更新 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义白皮书/宣传册的页面组织方式；
2. 说明是否需要前端路由、采用何种渲染策略；
3. 统一 Web 预览和 PDF 输出共用的渲染逻辑；
4. 约束页面组件的挂载方式和数据注入方式。

本文件不替代：

1. 总体架构概览（`00_ARCHITECTURE_OVERVIEW.md`）；
2. 目录结构文档（`02_DIRECTORY_STRUCTURE.md`）；
3. 组件规范（`docs/04_development/03_COMPONENT_SPEC.md`）；
4. 设计规范（`docs/03_design/00_DESIGN_GUIDELINE.md`）。

## 3. 当前阶段路由策略

### 3.1 推荐方案：单页全量渲染

当前阶段推荐采用**单页全量渲染**策略：

- 不引入 React Router 等前端路由库；
- 白皮书所有章节在单个页面中从上到下连续渲染；
- 页面内部通过锚点（`id` 属性）实现章节间跳转；
- Web 预览展示完整白皮书；
- PDF 导出直接打印整个页面，无需拼接多页。

### 3.2 方案理由

1. **白皮书天然是连续文档**：封面 → 目录 → 各章节 → 合规声明 → 联系方式，适合单页渲染；
2. **PDF 导出简单**：单页全量渲染后，浏览器打印或 Playwright 导出自然得到完整 PDF，无需处理多页拼接；
3. **SEO 友好**：所有内容在一个 HTML 中，搜索引擎可直接索引；
4. **无需额外依赖**：不引入 React Router，减少依赖和维护成本；
5. **加载可控**：纯静态内容无异步数据请求，首屏加载时间可控。

### 3.3 不推荐当前阶段使用的方案

- **多页路由（React Router）**：白皮书场景下增加复杂度，PDF 导出需要额外拼接逻辑；
- **SSR/SSG 框架（Next.js、Gatsby 等）**：当前项目为纯静态站点，Vite 构建已满足需求；
- **懒加载**：白皮书内容量适中，全量渲染不会造成性能问题。

## 4. 页面组件组织方式

### 4.1 组件树

```text
<App>
  <BrochureLayout>
    <CoverPage />
    <ExecutiveSummary />
    <PlatformOverview />
    <ProductEcosystem />
    <TechnologyRoutes />
    <ApplicationMatrix />
    <PaperEvidenceList />
    <ComplianceNotice />
    <ContactAndFooter />
  </BrochureLayout>
</App>
```

### 4.2 组件角色

| 组件 | 角色 | 是否可复用 |
|---|---|---|
| `BrochureLayout` | 提供 A4 页面容器、全局样式、打印分页控制 | 否（根布局） |
| `CoverPage` | 渲染封面页 | 否 |
| `ExecutiveSummary` | 渲染执行摘要 | 否 |
| `PlatformOverview` | 渲染平台概述 | 否 |
| `ProductEcosystem` | 渲染产品生态展示 | 否 |
| `TechnologyRoutes` | 渲染技术路线 | 否 |
| `ApplicationMatrix` | 渲染应用矩阵表格 | 否 |
| `PaperEvidenceList` | 渲染论文证据列表 | 否 |
| `ComplianceNotice` | 渲染合规声明 | 否 |
| `ContactAndFooter` | 渲染联系方式与页脚（版本号、页码等） | 否 |

> 后续可选增强组件（不作为第一版必需）：`TableOfContents`（目录）、`SectionPage`（章节分隔页）、`ContentSection`（通用内容段）。

## 5. 数据注入方式

### 5.1 数据流

```text
src/data/brochure.ts (数据源)
  ↓ import
src/App.tsx (根组件，引入数据)
  ↓ props 传递
各子组件 (接收数据，纯渲染)
```

### 5.2 约束

1. 所有宣传册内容数据集中在 `src/data/brochure.ts` 中维护；
2. `App.tsx` 导入数据后通过 props 传递给各子组件；
3. 子组件为纯展示组件，不自行获取数据、不发起网络请求；
4. 组件不应在内部硬编码宣传文案，所有文案从 props 获取。

## 6. Web 预览与 PDF 输出共用渲染

### 6.1 共用原则

Web 预览和 PDF 输出使用完全相同的 HTML 结构和 CSS，差异仅通过 `@media print` 和 `print.css` 控制：

| 场景 | 渲染方式 | 差异处理 |
|---|---|---|
| Web 预览 | 浏览器正常渲染 | 使用 `@media screen` 样式 |
| PDF 自动导出 | Playwright 打开同一页面 | 自动应用 `@media print` 样式 |
| PDF 手动导出 | Chrome 打印同一页面 | 自动应用 `@media print` 样式 |

### 6.2 打印样式控制要点

打印样式通过 `print.css` 和 Tailwind 的 `print:` 变体控制：

1. **页面尺寸**：A4（210mm × 297mm）；
2. **分页**：使用 `page-break-before` / `page-break-after` 控制封面、章节页和内容页的分页；
3. **页边距**：通过 `@page` 规则设置；
4. **页眉页脚**：浏览器打印时关闭；
5. **背景图形**：确保打印时可见。

## 7. 路由与渲染不纳入范围

当前阶段不纳入：

1. React Router 或其他前端路由库；
2. 动态路由参数；
3. 多语言路由（`/zh-CN/`、`/en/` 等）；
4. 服务端渲染（SSR）；
5. 静态站点生成（SSG）框架；
6. 代码分割（Code Splitting）；
7. 懒加载（React.lazy）；
8. 路由级权限控制。

## 8. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 单页过长导致性能问题 | 白皮书内容量约 20–40 页 A4，纯文本 + 少量图表，Vite + React 渲染性能足够 |
| 未来需要多语言导致重构 | 当前数据文件采用 TypeScript 类型定义，多语言时可扩展为多数据文件或 JSON |
| 打印样式与屏幕样式冲突 | 使用 Tailwind `print:` 变体和独立 `print.css` 隔离 |
| 组件层级过深导致 props 传递繁琐 | 当前组件树为扁平结构，不超过 3 层 |

## 9. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_ARCHITECTURE_OVERVIEW.md` | 上位文档，本文件细化其页面渲染和路由部分 |
| `02_DIRECTORY_STRUCTURE.md` | 定义组件文件存放位置 |
| `docs/03_design/01_PAGE_LAYOUT_SPEC.md` | 定义 A4 页面布局和分页规则 |
| `docs/03_design/02_PRINT_STYLE_SPEC.md` | 定义打印样式具体规则 |
| `docs/04_development/03_COMPONENT_SPEC.md` | 定义组件设计规范和 props 约定 |
| `docs/06_pdf_export/00_PDF_EXPORT_OVERVIEW.md` | 定义 PDF 导出与页面渲染的关系 |

## 10. 后续维护规则

1. 如新增页面组件，需同步更新本文件第 4 节的组件树；
2. 如引入前端路由，需重新评估本文件的单页策略并更新；
3. 如新增数据文件，需同步更新本文件第 5 节的数据流；
4. 打印样式变更需同时检查 Web 预览效果。
