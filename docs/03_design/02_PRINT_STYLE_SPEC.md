# 02_PRINT_STYLE_SPEC.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 打印样式规范 |
| 文件路径 | `docs/03_design/02_PRINT_STYLE_SPEC.md` |
| 所属目录 | `docs/03_design/` |
| 文档类型 | 打印样式规范文档 |
| 适用范围 | `src/styles/print.css` 编写、Tailwind `print:` 变体使用、Playwright 导出参数 |
| 当前版本 | v0.1 |
| 维护方式 | 随打印效果调整和浏览器兼容性变化持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义所有打印专用 CSS 规则；
2. 统一 `@media print` 和 Tailwind `print:` 变体的使用方式；
3. 指导 Playwright PDF 导出时的样式参数配置；
4. 确保 Web 预览和打印输出视觉一致。

本文件不替代：

1. 设计规范总则（`00_DESIGN_GUIDELINE.md`）；
2. 页面布局规范（`01_PAGE_LAYOUT_SPEC.md`）；
3. PDF 导出规范（`docs/06_pdf_export/`）。

## 3. 打印样式架构

### 3.1 样式分层

```
1. Tailwind 基础样式（@tailwind base/components/utilities）
2. Tailwind print: 变体（print:text-sm、print:p-0 等）
3. src/styles/print.css（@media print 专用规则）
4. Playwright 导出参数（headerTemplate、footerTemplate、margin）
```

### 3.2 文件组织

| 文件 | 内容 |
|---|---|
| `src/styles/index.css` | Tailwind 指令 + 全局样式 + 屏幕专用样式 |
| `src/styles/print.css` | `@media print` 规则，覆盖或补充打印样式 |

### 3.3 引入方式

推荐在 `src/main.tsx` 中分别引入两个样式文件：

```typescript
import './styles/index.css';
import './styles/print.css';
```

说明：
- `index.css` 负责 Tailwind 指令（`@tailwind base/components/utilities`）和全局屏幕样式；
- `print.css` 负责 `@page`、`@media print`、分页控制、打印隐藏/显示等规则；
- 避免在 `index.css` 中使用 `@import './print.css'` 放在 Tailwind 指令之后，导致样式处理顺序不清晰。

## 4. @page 规则

### 4.1 基础页面设置

```css
@page {
  size: A4;
  margin: 0; /* 边距由页面内 padding 控制，不由 @page margin 控制 */
}
```

### 4.2 封面页

```css
@page cover {
  size: A4;
  margin: 0;
}
```

封面页通过 `.cover-page` 类的 `page: cover` 属性应用。

### 4.3 横向页面（当前阶段不启用）

```css
/* 当前阶段不启用，保留作为未来扩展 */
@page landscape {
  size: A4 landscape;
  margin: 0;
}
```

## 5. 分页控制

### 5.1 强制分页

```css
@media print {
  .page-break-before {
    page-break-before: always;
    break-before: page;
  }

  .page-break-after {
    page-break-after: always;
    break-after: page;
  }
}
```

Tailwind 等效写法：
```html
<div class="print:break-before-page">...</div>
<div class="print:break-after-page">...</div>
```

### 5.2 禁止内部分页

```css
@media print {
  .break-inside-avoid {
    page-break-inside: avoid;
    break-inside: avoid;
  }
}
```

Tailwind 等效写法：
```html
<div class="print:break-inside-avoid">...</div>
```

### 5.3 表格表头重复

```css
@media print {
  thead {
    display: table-header-group;
  }

  tbody {
    display: table-row-group;
  }

  tr {
    page-break-inside: avoid;
    break-inside: avoid;
  }
}
```

## 6. 背景与颜色

### 6.1 强制打印背景

```css
@media print {
  * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }
}
```

### 6.2 品牌色保持

```css
@media print {
  .brand-bg {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
    background-color: var(--brand-color) !important;
  }
}
```

## 7. 字体与排版

### 7.1 字号调整

```css
@media print {
  body {
    font-size: 11pt;
    line-height: 1.6;
  }

  h1 {
    font-size: 24pt;
  }

  h2 {
    font-size: 18pt;
  }

  h3 {
    font-size: 14pt;
  }

  .text-footnote {
    font-size: 8pt;
  }
}
```

Tailwind 等效写法：
```html
<h1 class="text-4xl print:text-2xl">标题</h1>
<p class="text-base print:text-sm">正文</p>
```

### 7.2 字体族

```css
@media print {
  body {
    font-family: 'Noto Serif SC', 'SimSun', 'Songti SC', serif;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Noto Sans SC', 'SimHei', 'Heiti SC', sans-serif;
  }
}
```

## 8. 显示/隐藏控制

### 8.1 隐藏元素

```css
@media print {
  .no-print {
    display: none !important;
  }

  /* 隐藏导航、按钮等交互元素 */
  nav,
  button,
  .interactive-only {
    display: none !important;
  }
}
```

Tailwind 等效写法：
```html
<div class="print:hidden">仅在屏幕显示</div>
```

### 8.2 仅打印显示

```css
@media print {
  .print-only {
    display: block !important;
  }
}
```

Tailwind 等效写法：
```html
<div class="hidden print:block">仅在打印显示</div>
```

### 8.3 阴影和装饰

```css
@media print {
  /* 移除 Web 预览阴影 */
  .brochure-page {
    box-shadow: none !important;
  }

  /* 移除不必要的边框和装饰 */
  .screen-decoration {
    display: none;
  }
}
```

## 9. 图片处理

### 9.1 图片尺寸控制

```css
@media print {
  img {
    max-width: 100%;
    height: auto;
  }

  .print-image {
    max-width: 170mm; /* A4 可用内容宽度 */
    max-height: 200mm; /* 限制图片高度避免占据整页 */
  }
}
```

### 9.2 SVG 图标

```css
@media print {
  svg {
    max-width: 100%;
    height: auto;
  }
}
```

## 10. 链接处理

```css
@media print {
  a {
    text-decoration: none;
    color: inherit;
  }

  /* 可选：在链接后显示 URL */
  a[href^="http"]::after {
    content: " (" attr(href) ")";
    font-size: 8pt;
    color: #666;
  }
}
```

当前阶段建议不显示链接 URL（白皮书为正式文档，链接使用品牌色标注即可）。

## 11. 合规声明打印样式

```css
@media print {
  .compliance-notice {
    page-break-before: always;
    break-before: page;
    font-size: 9pt;
    color: #333; /* 确保可读，不使用灰色弱化 */
    line-height: 1.5;
  }

  .compliance-notice h3 {
    font-size: 12pt;
    font-weight: bold;
  }
}
```

## 12. 完整的 print.css 模板

```css
/* src/styles/print.css */

@media print {
  /* === 页面基础设置 === */
  @page {
    size: A4;
    margin: 0;
  }

  /* === 背景和颜色 === */
  * {
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  /* === 隐藏交互元素 === */
  .no-print,
  nav,
  button,
  .interactive-only {
    display: none !important;
  }

  /* === 仅打印显示 === */
  .print-only {
    display: block !important;
  }

  /* === 页面容器 === */
  .brochure-page {
    box-shadow: none !important;
    margin: 0 !important;
    width: 210mm;
    min-height: 297mm;
  }

  /* === 分页 === */
  .page-break-before {
    page-break-before: always;
    break-before: page;
  }

  .page-break-after {
    page-break-after: always;
    break-after: page;
  }

  .break-inside-avoid {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* === 表格 === */
  thead {
    display: table-header-group;
  }

  tr {
    page-break-inside: avoid;
    break-inside: avoid;
  }

  /* === 图片 === */
  img {
    max-width: 100%;
    height: auto;
  }

  /* === 链接 === */
  a {
    text-decoration: none;
    color: inherit;
  }

  /* === 合规声明 === */
  .compliance-notice {
    page-break-before: always;
    break-before: page;
    font-size: 9pt;
    color: #333;
  }
}
```

## 13. Playwright 导出时的样式处理

Playwright 导出 PDF 时自动应用 `@media print` 样式，无需额外配置。但以下参数需要注意：

```typescript
await page.pdf({
  format: 'A4',
  margin: {
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
  },
  printBackground: true,           // 打印背景色
  displayHeaderFooter: false,      // 关闭浏览器默认页眉页脚
  preferCSSPageSize: true,         // 使用 CSS @page 定义的尺寸
});
```

## 14. 当前阶段不纳入

1. 横向 A4 打印样式；
2. 双面打印样式；
3. 小册子打印排版；
4. 不同纸张尺寸的打印样式；
5. 打印进度条或加载动画。

## 15. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| Chrome 和 Playwright 打印效果不一致 | 以 Playwright 输出为准，Chrome 手动打印作为兜底验证 |
| 中文字体在 PDF 中缺失 | 使用系统通用字体或确保 Playwright 运行环境安装了所需字体 |
| `print-color-adjust: exact` 不生效 | 部分浏览器需要 `-webkit-` 前缀，同时设置两个属性 |
| 分页位置与预期不同 | 使用固定高度内容块 + `break-inside: avoid` 精确控制 |

## 16. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_DESIGN_GUIDELINE.md` | 上位文档，本文件实现其打印部分 |
| `01_PAGE_LAYOUT_SPEC.md` | 定义页面尺寸和边距，本文件用 CSS 实现 |
| `docs/06_pdf_export/01_PLAYWRIGHT_EXPORT_SPEC.md` | 定义 Playwright 导出时对本文件样式的应用 |
| `docs/06_pdf_export/02_BROWSER_PRINT_GUIDE.md` | 定义浏览器手动打印时对本文件样式的依赖 |

## 17. 后续维护规则

1. 新增打印样式规则后，需在 Playwright 导出和 Chrome 手动打印中分别验证；
2. 修改 `print.css` 后需重新生成 PDF 并检查关键页面；
3. 浏览器版本升级后检查打印兼容性。
