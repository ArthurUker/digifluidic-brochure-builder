# 01_CONTENT_MODEL.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 内容数据模型 |
| 文件路径 | `docs/02_content/01_CONTENT_MODEL.md` |
| 所属目录 | `docs/02_content/` |
| 文档类型 | 内容模型基准文档 |
| 适用范围 | `src/data/brochure.ts` 数据结构设计、组件 props 类型定义 |
| 当前版本 | v0.1 |
| 维护方式 | 随白皮书内容结构调整和组件需求变化持续更新 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义白皮书内容数据的完整 TypeScript 类型结构；
2. 作为 `src/types/brochure.ts` 和 `src/data/brochure.ts` 的设计依据；
3. 确保所有组件从数据文件中获取的数据结构一致；
4. 约束内容字段不得任意膨胀。

本文件不替代：

1. 内容策略文档（`00_CONTENT_STRATEGY.md`）；
2. 论文数据 schema（`02_PAPER_DATA_SCHEMA.md`）；
3. 应用矩阵 schema（`03_APPLICATION_MATRIX_SCHEMA.md`）；
4. 合规文案规范（`04_COMPLIANCE_COPY.md`）。

## 3. 数据模型设计原则

1. **类型安全**：所有字段使用 TypeScript 接口定义，编译期即可发现数据缺失或类型错误；
2. **单一数据源**：所有宣传册内容从一个数据文件导出，组件不自行定义文案；
3. **扁平优先**：避免过深嵌套，一般不超过 3 层；
4. **可选字段明确**：非必需字段使用 `?` 标记；
5. **扩展友好**：使用联合类型和可选字段支持未来内容扩展。

## 4. 顶层数据结构

```typescript
// src/types/brochure.ts

/** 白皮书完整数据 */
export interface BrochureData {
  /** 元信息 */
  meta: BrochureMeta;
  /** 封面数据 */
  cover: CoverData;
  /** 执行摘要 */
  executiveSummary: ExecutiveSummaryData;
  /** 平台概述 */
  platformOverview: PlatformOverviewData;
  /** 目录（可选，第一版前端骨架可不强制实现目录组件） */
  tableOfContents?: TOCItem[];
  /** 内容章节列表 */
  sections: SectionData[];
  /** 应用矩阵 */
  applicationMatrix: ApplicationMatrixData;
  /** 论文证据列表 */
  paperEvidence: PaperEvidenceData;
  /** 技术路线 */
  technologyRoutes: TechnologyRoutesData;
  /** 产品生态 */
  productEcosystem: ProductEcosystemData;
  /** 合规声明 */
  complianceNotice: ComplianceNoticeData;
  /** 联系方式 */
  contact: ContactData;
}
```

## 5. 各子类型定义

### 5.1 元信息 `BrochureMeta`

```typescript
export interface BrochureMeta {
  /** 白皮书标题 */
  title: string;
  /** 副标题 */
  subtitle?: string;
  /** 版本号 */
  version: string;
  /** 发布日期（YYYY.MM 格式） */
  publishDate: string;
  /** 语言 */
  language: 'zh-CN';
  /** 公司名称 */
  companyName: string;
  /** 公司英文名 */
  companyNameEn?: string;
  /** 品牌名 */
  brandName: string;
}
```

### 5.2 封面 `CoverData`

```typescript
export interface CoverData {
  /** 封面主标题 */
  title: string;
  /** 封面副标题 */
  subtitle?: string;
  /** 封面描述文字 */
  description?: string;
  /** 封面图片路径（相对于 public/ 或使用 URL） */
  imagePath?: string;
  /** 封面底部文字 */
  footerText?: string;
}
```

### 5.3 执行摘要 `ExecutiveSummaryData`

```typescript
export interface ExecutiveSummaryData {
  /** 章节标题 */
  title: string;
  /** 核心价值主张（1-3 句） */
  headline: string;
  /** 摘要段落列表 */
  paragraphs: string[];
  /** 关键数据点（可选，用于突出展示） */
  highlights?: string[];
}
```

### 5.4 平台概述 `PlatformOverviewData`

```typescript
export interface PlatformOverviewData {
  /** 章节标题 */
  title: string;
  /** 平台简介段落 */
  paragraphs: string[];
  /** 平台核心能力列表（可选） */
  capabilities?: string[];
  /** 平台架构图路径（可选） */
  diagramPath?: string;
}
```

### 5.5 技术路线 `TechnologyRoutesData`

```typescript
/** 技术路线数据 */
export interface TechnologyRoutesData {
  /** 章节标题 */
  title: string;
  /** 章节说明（可选） */
  description?: string;
  /** 技术路线列表 */
  routes: TechnologyRouteItem[];
}

/** 单条技术路线 */
export interface TechnologyRouteItem {
  /** 技术路线名称，如"LAMP"、"RT-qPCR" */
  name: string;
  /** 技术路线说明（1-2 句） */
  description: string;
  /** 适用应用方向（可选） */
  applications?: string[];
  /** 关联论文分组名（可选） */
  paperGroupRef?: string;
}
```

### 5.6 目录 `TOCItem`

```typescript
export interface TOCItem {
  /** 目录项编号（如 "1"、"2.1"） */
  id: string;
  /** 目录项标题 */
  title: string;
  /** 对应页面锚点 */
  anchor: string;
  /** 子目录项 */
  children?: TOCItem[];
}
```

### 5.7 内容章节 `SectionData`

```typescript
export interface SectionData {
  /** 章节唯一标识（用于锚点） */
  id: string;
  /** 章节编号（如 "1"、"2.1"） */
  number: string;
  /** 章节标题 */
  title: string;
  /** 章节副标题 */
  subtitle?: string;
  /** 章节类型 */
  type: SectionType;
  /** 内容块列表 */
  blocks: ContentBlock[];
  /** 是否为章节起始页（触发分页） */
  isSectionStart?: boolean;
}

/** 章节类型 */
export type SectionType =
  | 'company'       // 公司简介
  | 'product'       // 产品介绍
  | 'technology'    // 技术路线
  | 'application'   // 应用场景
  | 'evidence'      // 证据链
  | 'ecosystem'     // 产品生态
  | 'compliance'    // 合规声明
  | 'contact';      // 联系方式
```

### 5.8 内容块 `ContentBlock`

```typescript
/** 内容块类型 */
export type ContentBlockType =
  | 'paragraph'     // 段落
  | 'heading'       // 小标题
  | 'bulletList'    // 无序列表
  | 'orderedList'   // 有序列表
  | 'image'         // 图片
  | 'table'         // 表格
  | 'callout'       // 高亮提示框
  | 'divider';      // 分隔线

/** 内容块 */
export interface ContentBlock {
  /** 块类型 */
  type: ContentBlockType;
  /** 文本内容（paragraph/heading/callout 使用） */
  text?: string;
  /** 列表项（bulletList/orderedList 使用） */
  items?: string[];
  /** 图片信息（image 使用） */
  image?: ImageData;
  /** 表格数据（table 使用） */
  table?: TableData;
  /** 标题层级（heading 使用，1-6） */
  level?: number;
}
```

### 5.9 图片 `ImageData`

```typescript
export interface ImageData {
  /** 图片路径 */
  src: string;
  /** 替代文字 */
  alt: string;
  /** 图片说明 */
  caption?: string;
  /** 宽度（可选） */
  width?: number;
  /** 高度（可选） */
  height?: number;
}
```

### 5.10 表格 `TableData`

```typescript
export interface TableData {
  /** 表头 */
  headers: string[];
  /** 表格行数据 */
  rows: string[][];
  /** 表格说明 */
  caption?: string;
}
```

### 5.11 应用矩阵 `ApplicationMatrixData`

```typescript
export interface ApplicationMatrixData {
  /** 矩阵标题 */
  title: string;
  /** 矩阵说明 */
  description?: string;
  /** 矩阵行 */
  rows: ApplicationMatrixRow[];
  /** 底部合规声明（必填，不得省略） */
  disclaimer: string;
}

export interface ApplicationMatrixRow {
  /** 应用方向 */
  direction: string;
  /** 产品/材料示例 */
  productExample: string;
  /** 技术路线 */
  technologyRoute: string;
  /** 表达重点 */
  keyMessage: string;
  /** 研发阶段标注 */
  stage: ApplicationStage;
  /** 相关论文引用（可选） */
  paperRefs?: string[];
}

/** 研发阶段 */
export type ApplicationStage =
  | 'product'         // 已有产品
  | 'development'     // 研发中
  | 'research'        // 技术储备/研究阶段
  | 'exploratory';    // 探索性方向
```

### 5.12 论文证据 `PaperEvidenceData`

```typescript
export interface PaperEvidenceData {
  /** 章节标题 */
  title: string;
  /** 说明文字 */
  description?: string;
  /** 论文分组 */
  groups: PaperGroup[];
  /** 底部合规声明（必填，不得省略） */
  disclaimer: string;
}

export interface PaperGroup {
  /** 分组名称（如"食源性病原体检测"） */
  groupName: string;
  /** 分组说明 */
  description?: string;
  /** 论文列表 */
  papers: PaperItem[];
}

export interface PaperItem {
  /** 论文标题 */
  title: string;
  /** 作者 */
  authors?: string;
  /** 期刊 */
  journal?: string;
  /** 发表年份 */
  year: number;
  /** DOI（可选） */
  doi?: string;
  /** 论文类型 */
  type: PaperType;
  /** 与本产品/平台的关系说明 */
  relevance: string;
}

/** 论文类型 */
export type PaperType =
  | 'journal_article'  // 期刊论文
  | 'review'           // 综述
  | 'conference'       // 会议论文
  | 'patent';          // 专利
```

### 5.13 产品生态 `ProductEcosystemData`

```typescript
export interface ProductEcosystemData {
  /** 标题 */
  title: string;
  /** 说明 */
  description?: string;
  /** 生态类别 */
  categories: EcosystemCategory[];
}

export interface EcosystemCategory {
  /** 类别名（如"核心硬件"、"耗材"） */
  name: string;
  /** 类别下的项目 */
  items: EcosystemItem[];
}

export interface EcosystemItem {
  /** 项目名称 */
  name: string;
  /** 项目描述 */
  description?: string;
  /** 图片路径 */
  imagePath?: string;
}
```

### 5.14 合规声明 `ComplianceNoticeData`

```typescript
export interface ComplianceNoticeData {
  /** 标题 */
  title: string;
  /** 声明内容（段落列表） */
  statements: string[];
  /** 章节级声明 */
  sectionDisclaimers: {
    /** 论文证据链章节声明 */
    paperEvidence: string;
    /** 应用矩阵章节声明 */
    applicationMatrix: string;
    /** 产品介绍章节声明（可选） */
    productIntro?: string;
  };
  /** 最后更新日期 */
  lastUpdated?: string;
}
```

### 5.15 联系方式 `ContactData`

```typescript
export interface ContactData {
  /** 标题 */
  title: string;
  /** 公司全称 */
  companyFullName: string;
  /** 地址 */
  address?: string;
  /** 电话 */
  phone?: string;
  /** 邮箱 */
  email?: string;
  /** 官网 */
  website?: string;
  /** 微信公众号 */
  wechatOfficial?: string;
}
```

## 6. 数据文件示例结构

```typescript
// src/data/brochure.ts
import type { BrochureData } from '../types/brochure';

export const brochureData: BrochureData = {
  meta: {
    title: 'Digifluidic VHunter Plus 微流控核酸检测平台应用白皮书',
    version: 'v2026.06',
    publishDate: '2026.06',
    language: 'zh-CN',
    companyName: '珠海市迪奇孚瑞生物科技有限公司',
    companyNameEn: 'Zhuhai Digifluidic Bio-tech Co., Ltd.',
    brandName: 'Digifluidic',
  },
  cover: {
    title: 'Digifluidic VHunter Plus',
    subtitle: '微流控核酸检测平台应用白皮书',
    description: '产品文献应用与技术验证',
  },
  tableOfContents: [
    { id: '1', title: '公司与平台简介', anchor: 'section-company' },
    { id: '2', title: 'VHunter Plus 全自动核酸分析仪', anchor: 'section-product' },
    // ...
  ],
  sections: [
    {
      id: 'section-company',
      number: '1',
      title: '公司与平台简介',
      type: 'company',
      isSectionStart: true,
      blocks: [
        { type: 'paragraph', text: '珠海市迪奇孚瑞生物科技有限公司...' },
        // ...
      ],
    },
    // ...
  ],
  applicationMatrix: {
    title: '应用矩阵',
    rows: [
      {
        direction: '食品安全',
        productExample: '食源性病原体检测芯片',
        technologyRoute: 'LAMP / 多重检测',
        keyMessage: '现场快速筛查、多靶标检测、食品安全场景适配',
        stage: 'development',
      },
      // ...
    ],
    disclaimer: '上述矩阵为宣传材料结构，不代表所有方向均已有正式注册产品。',
  },
  paperEvidence: {
    title: '论文证据链',
    groups: [
      {
        groupName: '食源性病原体检测方向',
        papers: [
          {
            title: '基于数字微流控芯片的实时LAMP食源性病原体多重检测',
            year: 2020,
            type: 'journal_article',
            relevance: '展示了平台在食品安全快速检测方向的应用潜力',
          },
          // ...
        ],
      },
    ],
    disclaimer: '文献内容仅作为技术研究基础和应用方向说明。',
  },
  productEcosystem: {
    title: '产品生态',
    categories: [
      {
        name: '核心硬件',
        items: [{ name: 'VHunter Plus 全自动核酸分析仪' }],
      },
      // ...
    ],
  },
  complianceNotice: {
    title: '合规声明',
    statements: [
      '本文档为技术应用说明材料，不作为产品注册文件。',
      '具体产品功能、性能指标、适用范围和注册状态以公司正式资料和注册文件为准。',
    ],
    sectionDisclaimers: {
      paperEvidence: '以上文献内容仅作为技术研究基础和应用方向说明，不构成对具体产品性能的承诺。具体产品功能、性能指标、适用范围和注册状态以公司正式资料和注册文件为准。',
      applicationMatrix: '上述矩阵为宣传材料结构草案，不代表所有方向均已有正式注册产品。具体产品名称、注册状态和适用范围需以公司正式资料和注册文件为准。',
      productIntro: '以上产品介绍基于当前可公开信息。产品功能、性能和注册状态可能因研发进展和监管审批发生变化，最新信息以公司正式发布为准。',
    },
    lastUpdated: '2026.06',
  },
  contact: {
    title: '联系我们',
    companyFullName: '珠海市迪奇孚瑞生物科技有限公司',
    email: 'contact@digifluidic.com',
    website: 'https://www.digifluidic.com',
  },
};
```

## 7. 类型文件与数据文件的关系

```text
src/types/brochure.ts      → 类型定义（接口、类型别名）
src/data/brochure.ts       → 数据实例（符合类型定义的常量数据）
src/components/*.tsx       → 消费数据（通过 props 接收）
```

约束：
1. 类型文件定义所有接口，数据文件严格遵循类型；
2. 组件通过 TypeScript 泛型约束 props 类型；
3. 修改类型文件后需同步检查数据文件和组件。

## 8. 当前阶段不纳入字段

1. 多语言字段（`locale`、`translations` 等）；
2. 内容版本历史（当前通过 Git 管理）；
3. 内容发布状态（`draft`、`published` 等）；
4. 内容作者/编辑者字段；
5. SEO meta 字段（当前阶段暂不处理搜索引擎优化）。

## 9. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 类型与实际数据不一致 | 数据文件使用 `BrochureData` 类型注解，编译期检查 |
| 字段过度嵌套 | 嵌套深度不超过 3 层，新增嵌套前先评估 |
| 内容过长导致文件过大 | 单章节 blocks 超过 30 条时考虑拆分 |
| 类型变更影响多处 | 类型变更后运行 `npm run build` 检查全项目类型错误 |

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_CONTENT_STRATEGY.md` | 上位文档，定义内容策略，本文件定义数据结构 |
| `02_PAPER_DATA_SCHEMA.md` | 细化论文证据数据结构 |
| `03_APPLICATION_MATRIX_SCHEMA.md` | 细化应用矩阵数据结构 |
| `04_COMPLIANCE_COPY.md` | 定义合规声明的具体文案内容 |
| `docs/01_architecture/02_DIRECTORY_STRUCTURE.md` | 定义数据文件的存放位置 |
| `docs/04_development/03_COMPONENT_SPEC.md` | 定义组件如何消费这些数据类型 |

## 11. 后续维护规则

1. 新增字段前先评估是否可在现有字段中容纳；
2. 类型变更后同步更新数据文件和所有消费该类型的组件；
3. 数据文件中的实际文案由公司内部内容负责人确认后写入；
4. 每次数据文件变更需运行 `npm run build` 确保类型检查通过。
