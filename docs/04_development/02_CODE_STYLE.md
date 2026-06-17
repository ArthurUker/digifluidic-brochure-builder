# 02_CODE_STYLE.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 代码风格规范 |
| 文件路径 | `docs/04_development/02_CODE_STYLE.md` |
| 所属目录 | `docs/04_development/` |
| 文档类型 | 代码风格规范文档 |
| 适用范围 | TypeScript、React、CSS 和配置文件代码风格 |
| 当前版本 | v0.1 |
| 维护方式 | 随团队规范和工具链升级持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 统一项目代码风格；
2. 约束命名规范、文件组织和导入顺序；
3. 减少代码审阅中的风格争议；
4. 帮助 AI 执行型助手生成风格一致的代码。

本文件不替代：

1. 开发指南（`00_DEVELOPMENT_GUIDE.md`）；
2. 组件规范（`03_COMPONENT_SPEC.md`）；
3. TypeScript 官方规范或 React 官方推荐。

## 3. TypeScript 规范

### 3.1 类型注解

- 所有函数参数和返回值必须显式标注类型；
- 优先使用 `interface` 定义对象类型，`type` 用于联合类型和工具类型；
- 避免使用 `any`，如无法避免需注释说明原因。

```typescript
// ✅ 推荐
interface SectionData {
  id: string;
  title: string;
  blocks: ContentBlock[];
}

// ❌ 不推荐
const data: any = getData();
```

### 3.2 导入

- 使用 ES Module `import/export` 语法；
- 导入顺序：第三方库 → 项目内模块 → 类型导入；
- 类型导入使用 `import type`。

```typescript
// ✅ 推荐
import React from 'react';
import { CoverPage } from './components/CoverPage';
import type { BrochureData } from '../types/brochure';
```

### 3.3 命名规范

| 元素 | 规范 | 示例 |
|---|---|---|
| 文件名（组件） | PascalCase | `CoverPage.tsx` |
| 文件名（工具/数据） | kebab-case 或 camelCase | `brochure.ts`、`export-pdf.ts` |
| 接口/类型 | PascalCase | `SectionData`、`ContentBlock` |
| 变量/函数 | camelCase | `brochureData`、`getSectionById` |
| 常量 | UPPER_SNAKE_CASE 或 camelCase | `DEFAULT_MARGIN` |
| React 组件 | PascalCase | `CoverPage`、`ApplicationMatrix` |
| CSS 类名 | Tailwind 工具类 或 kebab-case | `brochure-page`、`cover-title` |

### 3.4 函数

- 优先使用箭头函数（组件内）或 `function` 声明（组件定义）；
- 函数体超过 30 行应考虑拆分；
- 纯函数优先，避免副作用。

```typescript
// ✅ 组件定义
export function CoverPage({ data }: CoverPageProps): JSX.Element {
  return <div>...</div>;
}

// ✅ 工具函数
const formatDate = (date: string): string => {
  return date.replace(/-/g, '.');
};
```

### 3.5 注释

- 使用 JSDoc 风格注释公共 API（类型、导出函数）；
- 复杂逻辑添加行内注释说明；
- 不使用无意义注释。

```typescript
/** 白皮书内容章节数据 */
export interface SectionData {
  /** 章节唯一标识，用于锚点导航 */
  id: string;
  /** 章节标题 */
  title: string;
}
```

## 4. React 规范

### 4.1 组件定义

- 优先使用函数组件 + TypeScript；
- 使用 `interface` 定义 Props 类型；
- 组件导出使用命名导出。

```typescript
// ✅ 推荐
import type { FC } from 'react';

interface CoverPageProps {
  title: string;
  subtitle?: string;
}

export const CoverPage: FC<CoverPageProps> = ({ title, subtitle }) => {
  return (
    <div className="cover-page">
      <h1>{title}</h1>
      {subtitle && <p>{subtitle}</p>}
    </div>
  );
};
```

### 4.2 JSX 规范

- 使用括号包裹多行 JSX；
- 属性超过 2 个时换行；
- 自闭合标签使用 `/>`；
- 布尔属性省略 `={true}`。

```typescript
// ✅ 推荐
return (
  <div
    className="section-page"
    id={sectionId}
    data-section={sectionNumber}
  >
    <ContentBlock block={block} />
  </div>
);

// ❌ 不推荐
return <div className="section-page" id={sectionId}><ContentBlock block={block}></ContentBlock></div>;
```

### 4.3 Hooks

- 只在函数组件顶层调用 Hooks；
- 自定义 Hook 以 `use` 开头；
- 当前阶段不需要 `useState` 或 `useEffect`（纯静态展示），如未来需要再引入。

### 4.4 组件拆分

- 单个组件文件不超过 200 行；
- 可复用的 UI 片段提取为独立组件；
- 组件只做渲染，业务逻辑和数据获取放在组件外部。

## 5. CSS / Tailwind 规范

### 5.1 Tailwind 优先

- 优先使用 Tailwind 工具类；
- 避免内联 `style` 属性（除动态值外）；
- 重复使用的样式组合提取为 Tailwind `@apply` 或组件。

### 5.2 类名顺序

建议按以下顺序组织类名：
1. 布局（`flex`、`grid`、`block`）
2. 尺寸（`w-`、`h-`、`max-w-`）
3. 间距（`p-`、`m-`、`gap-`）
4. 排版（`text-`、`font-`、`leading-`）
5. 颜色（`bg-`、`text-`、`border-`）
6. 其他（`rounded-`、`shadow-`）

### 5.3 自定义 CSS

- 仅在 Tailwind 无法实现时使用自定义 CSS；
- 自定义样式放在 `src/styles/index.css` 或 `src/styles/print.css`；
- 使用 CSS 变量管理品牌色等全局值。

### 5.4 响应式与打印

- 使用 Tailwind 响应式前缀：`sm:`、`md:`、`lg:`；
- 使用 Tailwind 打印前缀：`print:`；
- 屏幕和打印样式严格隔离。

## 6. 文件和目录规范

### 6.1 文件大小

- 单个源文件不超过 300 行；
- 超过 300 行应考虑拆分为多个文件。

### 6.2 文件组织

- 一个文件导出一个主要模块（组件、类型、函数）；
- 相关的辅助类型和函数可放在同一文件。

### 6.3 目录

- 目录嵌套不超过 3 层；
- 每个目录下的文件数不超过 15 个；
- 避免空目录。

## 7. Git 提交规范

### 7.1 Commit Message 格式

```
<type>: <description>
```

| type | 说明 |
|---|---|
| `feat` | 新功能 |
| `fix` | 修复问题 |
| `docs` | 文档变更 |
| `style` | 样式变更（不影响功能） |
| `refactor` | 代码重构 |
| `chore` | 构建/工具变更 |
| `test` | 测试相关 |

### 7.2 示例

```
feat: add cover page component
docs: update content strategy document
fix: correct print page break behavior
chore: update tailwind config with brand colors
```

## 8. 当前阶段不纳入

1. ESLint 自定义规则（当前使用默认推荐规则）；
2. Prettier 自定义配置（当前使用默认配置）；
3. Husky 或 lint-staged 提交前检查；
4. 自动化代码格式化脚本；
5. 代码覆盖率要求。

## 9. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_DEVELOPMENT_GUIDE.md` | 上位文档，本文件细化代码风格部分 |
| `03_COMPONENT_SPEC.md` | 组件级的设计和实现规范 |
| `docs/01_architecture/02_DIRECTORY_STRUCTURE.md` | 目录结构约束 |

## 10. 后续维护规则

1. 新开发者加入时，首先阅读本文件；
2. 代码审阅时以本文件为风格基准；
3. 新增技术栈（如引入测试框架）后更新相应风格规范。
