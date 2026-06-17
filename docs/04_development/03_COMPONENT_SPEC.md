# 03_COMPONENT_SPEC.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 组件规范 |
| 文件路径 | `docs/04_development/03_COMPONENT_SPEC.md` |
| 所属目录 | `docs/04_development/` |
| 文档类型 | 组件开发规范文档 |
| 适用范围 | 所有 `src/components/` 下 React 组件的设计、开发和维护 |
| 当前版本 | v0.1 |
| 维护方式 | 随组件增删和设计模式变化持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义每个页面组件的职责、Props 和渲染逻辑；
2. 约束组件之间的数据传递方式；
3. 确保组件风格一致、可维护、可测试；
4. 指导 AI 执行型助手生成组件代码。

本文件不替代：

1. 开发指南（`00_DEVELOPMENT_GUIDE.md`）；
2. 代码风格规范（`02_CODE_STYLE.md`）；
3. 设计规范（`docs/03_design/`）；
4. 路由与渲染文档（`docs/01_architecture/03_ROUTE_AND_RENDERING.md`）。

## 3. 组件设计原则

1. **纯展示组件**：组件只负责渲染，不管理状态、不发起网络请求、不直接操作 DOM；
2. **单一职责**：每个组件只负责一个页面区块；
3. **Props 驱动**：所有数据通过 props 传入，组件内部不硬编码大段内容；
4. **类型安全**：所有 props 使用 TypeScript 接口定义；
5. **无副作用**：组件渲染不产生副作用（不修改全局变量、不操作 localStorage 等）；
6. **数据来源统一**：`App.tsx` 从 `src/data/brochure.ts` 导入数据，并分发给子组件；
7. **不创建额外目录**：不创建 `api/`、`services/`、`store/`、`server/` 等目录。

## 4. 组件清单与规范

### 4.1 第一版必需组件

以下 10 个组件为第一版前端骨架的必需组件：

#### 4.1.1 BrochureLayout

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/BrochureLayout.tsx` |
| 职责 | 提供白皮书整体布局容器，控制 A4 页面尺寸和打印分页 |
| Props | `children: ReactNode` |
| 备注 | 根布局组件，包裹所有子组件 |

```typescript
interface BrochureLayoutProps {
  children: React.ReactNode;
}

export const BrochureLayout: FC<BrochureLayoutProps> = ({ children }) => {
  return (
    <div className="brochure-layout">
      {children}
    </div>
  );
};
```

#### 4.1.2 CoverPage

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/CoverPage.tsx` |
| 职责 | 渲染白皮书封面页 |
| Props | `data: CoverData` + `meta: BrochureMeta` |

```typescript
interface CoverPageProps {
  meta: BrochureMeta;
  data: CoverData;
}

export const CoverPage: FC<CoverPageProps> = ({ meta, data }) => {
  return (
    <div className="cover-page page-break-after print:break-after-page">
      {/* 品牌 Logo */}
      {/* 产品名 */}
      {/* 白皮书标题 */}
      {/* 副标题 */}
      {/* 公司名 */}
      {/* 版本号 */}
    </div>
  );
};
```

**打印规则**：封面页后强制分页（`break-after: page`）。

#### 4.1.3 ExecutiveSummary

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/ExecutiveSummary.tsx` |
| 职责 | 渲染执行摘要/概要页 |
| Props | `data: ExecutiveSummaryData` |

#### 4.1.4 PlatformOverview

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/PlatformOverview.tsx` |
| 职责 | 渲染平台概述页 |
| Props | `data: PlatformOverviewData` |

#### 4.1.5 ProductEcosystem

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/ProductEcosystem.tsx` |
| 职责 | 渲染产品生态展示 |
| Props | `data: ProductEcosystemData` |

**打印规则**：产品生态前强制分页。类别之间禁止分页（`break-inside: avoid`）。

#### 4.1.6 TechnologyRoutes

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/TechnologyRoutes.tsx` |
| 职责 | 渲染技术路线展示 |
| Props | `data: TechnologyRoutesData` |

#### 4.1.7 ApplicationMatrix

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/ApplicationMatrix.tsx` |
| 职责 | 渲染应用矩阵表格 |
| Props | `data: ApplicationMatrixData` |

```typescript
interface ApplicationMatrixProps {
  data: ApplicationMatrixData;
}

export const ApplicationMatrix: FC<ApplicationMatrixProps> = ({ data }) => {
  return (
    <div className="application-matrix page-break-before print:break-before-page">
      <h2>{data.title}</h2>
      {data.description && <p>{data.description}</p>}
      <table>
        <thead>
          <tr>
            <th>应用方向</th>
            <th>产品/材料示例</th>
            <th>技术路线</th>
            <th>表达重点</th>
          </tr>
        </thead>
        <tbody>
          {data.rows.map((row, i) => (
            <tr key={i}>
              <td>{row.direction}</td>
              <td>{row.productExample}</td>
              <td>{row.technologyRoute}</td>
              <td>{row.keyMessage}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <p className="disclaimer">{data.disclaimer}</p>
    </div>
  );
};
```

**打印规则**：应用矩阵前强制分页。表头每页重复（通过 CSS `thead { display: table-header-group; }`）。行内禁止分页（`break-inside: avoid`）。

#### 4.1.8 PaperEvidenceList

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/PaperEvidenceList.tsx` |
| 职责 | 渲染论文证据列表，按研究方向分组 |
| Props | `data: PaperEvidenceData` |

**打印规则**：论文列表前强制分页。每篇论文条目内禁止分页（`break-inside: avoid`）。合规声明完整保留。

#### 4.1.9 ComplianceNotice

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/ComplianceNotice.tsx` |
| 职责 | 渲染合规声明 |
| Props | `data: ComplianceNoticeData` |

```typescript
interface ComplianceNoticeProps {
  data: ComplianceNoticeData;
}

export const ComplianceNotice: FC<ComplianceNoticeProps> = ({ data }) => {
  return (
    <div className="compliance-notice page-break-before print:break-before-page">
      <h2>{data.title}</h2>
      {data.statements.map((statement, i) => (
        <p key={i}>{statement}</p>
      ))}
      {data.lastUpdated && (
        <p className="last-updated">最后更新：{data.lastUpdated}</p>
      )}
    </div>
  );
};
```

**打印规则**：合规声明前强制分页。声明块内禁止分页。字号不得小于正文字号。颜色不得弱化。

#### 4.1.10 ContactAndFooter

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/ContactAndFooter.tsx` |
| 职责 | 渲染联系方式与页脚（公司名 + 页码） |
| Props | `data: ContactData` + `companyName: string` + `pageNumber?: number` |

### 4.2 后续可选组件

以下组件可作为后续版本补充，不作为第一版必需组件：

#### 4.2.1 TableOfContents

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/TableOfContents.tsx` |
| 职责 | 渲染目录页（第一版可省略） |
| Props | `items: TOCItem[]` |

**打印规则**：目录页后强制分页。

#### 4.2.2 SectionPage

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/SectionPage.tsx` |
| 职责 | 渲染章节分隔页（第一版可省略） |
| Props | `number: string` + `title: string` + `subtitle?: string` |

```typescript
interface SectionPageProps {
  number: string;
  title: string;
  subtitle?: string;
}

export const SectionPage: FC<SectionPageProps> = ({ number, title, subtitle }) => {
  return (
    <div className="section-page page-break-before print:break-before-page page-break-after print:break-after-page">
      <div className="section-number">{number}</div>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
};
```

**打印规则**：章节页前强制分页，页后强制分页（独占一页）。

#### 4.2.3 ContentSection

| 属性 | 说明 |
|---|---|
| 文件路径 | `src/components/ContentSection.tsx` |
| 职责 | 渲染通用内容章节（第一版可省略） |
| Props | `data: SectionData` |

**打印规则**：如 `isSectionStart` 为 true，则章节前强制分页。

### 4.3 内部辅助组件

#### 4.3.1 ContentBlockRenderer

| 属性 | 说明 |
|---|---|
| 职责 | 根据 `ContentBlock.type` 渲染对应内容块 |
| Props | `block: ContentBlock` |

支持渲染：
- `paragraph` → `<p>`
- `heading` → `<h3>` 或 `<h4>`
- `bulletList` → `<ul>` + `<li>`
- `orderedList` → `<ol>` + `<li>`
- `image` → `<figure>` + `<img>` + `<figcaption>`
- `table` → `<table>`
- `callout` → 高亮信息框
- `divider` → `<hr>`

## 5. 组件 Props 设计规则

1. 所有 props 使用 `interface` 定义，命名为 `{ComponentName}Props`；
2. 可选 props 使用 `?` 标记；
3. 不使用 `React.FC` 的 `children` 隐式类型，显式声明 `children` prop；
4. 不为 props 设置默认值（使用解构默认值或调用方处理）。

## 6. 组件文件模板

```typescript
// src/components/ComponentName.tsx
import type { FC } from 'react';

// === Types ===
interface ComponentNameProps {
  /** Props 说明 */
  data: SomeDataType;
}

// === Component ===
export const ComponentName: FC<ComponentNameProps> = ({ data }) => {
  return (
    <div className="component-name">
      {/* 组件内容 */}
    </div>
  );
};
```

## 7. 组件测试考虑

当前阶段不要求编写单元测试，但组件设计应保持可测试性：
1. 组件为纯函数，输入 props 输出 JSX；
2. 不依赖全局状态；
3. 不产生副作用；
4. 可使用快照测试验证渲染输出。

## 8. 当前阶段不纳入

1. 组件库文档（Storybook）；
2. 组件单元测试；
3. 组件性能优化（React.memo、useMemo 等，当前内容量不需要）；
4. 组件动画和过渡效果；
5. 组件懒加载。

## 9. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 组件职责不清导致代码重复 | 每个组件在本文件中明确定义职责，新增组件前先检查是否可复用现有组件 |
| Props 类型与实际数据不一致 | 使用 `src/types/brochure.ts` 中的类型，编译期检查 |
| 组件样式不一致 | 遵循设计规范和 Tailwind 工具类约定 |
| 打印分页逻辑遗漏 | 每个组件在本文件中标注打印规则，QA 时对照检查 |

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_DEVELOPMENT_GUIDE.md` | 上位文档，本文件细化组件开发部分 |
| `02_CODE_STYLE.md` | 代码风格规范，组件文件需遵循 |
| `docs/01_architecture/02_DIRECTORY_STRUCTURE.md` | 定义组件文件存放位置 |
| `docs/01_architecture/03_ROUTE_AND_RENDERING.md` | 定义组件树和渲染方式 |
| `docs/02_content/01_CONTENT_MODEL.md` | 定义组件 props 中使用的数据类型 |
| `docs/03_design/` | 定义组件的视觉设计规范 |

### 10.1 第一版组件汇总

| # | 组件名 | 文件 | 第一版 |
|---|---|---|---|
| 1 | BrochureLayout | `src/components/BrochureLayout.tsx` | ✅ 必需 |
| 2 | CoverPage | `src/components/CoverPage.tsx` | ✅ 必需 |
| 3 | ExecutiveSummary | `src/components/ExecutiveSummary.tsx` | ✅ 必需 |
| 4 | PlatformOverview | `src/components/PlatformOverview.tsx` | ✅ 必需 |
| 5 | ProductEcosystem | `src/components/ProductEcosystem.tsx` | ✅ 必需 |
| 6 | TechnologyRoutes | `src/components/TechnologyRoutes.tsx` | ✅ 必需 |
| 7 | ApplicationMatrix | `src/components/ApplicationMatrix.tsx` | ✅ 必需 |
| 8 | PaperEvidenceList | `src/components/PaperEvidenceList.tsx` | ✅ 必需 |
| 9 | ComplianceNotice | `src/components/ComplianceNotice.tsx` | ✅ 必需 |
| 10 | ContactAndFooter | `src/components/ContactAndFooter.tsx` | ✅ 必需 |
| 11 | TableOfContents | `src/components/TableOfContents.tsx` | 🔜 可选 |
| 12 | SectionPage | `src/components/SectionPage.tsx` | 🔜 可选 |
| 13 | ContentSection | `src/components/ContentSection.tsx` | 🔜 可选 |
| 14 | ContentBlockRenderer | `src/components/ContentBlockRenderer.tsx` | 🔜 可选 |

## 11. 后续维护规则

1. 新增组件时，在本文件第 4 节补充组件规范；
2. 修改组件 props 时，同步更新本文件；
3. 组件删除时，从本文件中移除对应条目；
4. 每次组件变更后检查打印分页规则是否仍然有效。
