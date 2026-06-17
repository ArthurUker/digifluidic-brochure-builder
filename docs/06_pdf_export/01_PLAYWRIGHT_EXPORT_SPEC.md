# 01_PLAYWRIGHT_EXPORT_SPEC.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder Playwright PDF 导出规范 |
| 文件路径 | `docs/06_pdf_export/01_PLAYWRIGHT_EXPORT_SPEC.md` |
| 所属目录 | `docs/06_pdf_export/` |
| 文档类型 | 导出脚本规范文档 |
| 适用范围 | `scripts/export-pdf.ts` 的设计、实现和使用 |
| 当前版本 | v0.1 |
| 维护方式 | 随 Playwright 版本升级和导出参数优化持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义 Playwright PDF 导出脚本的功能需求和实现规范；
2. 约束导出参数确保输出一致；
3. 作为脚本编写和审阅的基准。

本文件不替代：

1. PDF 导出概览（`00_PDF_EXPORT_OVERVIEW.md`）；
2. 浏览器打印指南（`02_BROWSER_PRINT_GUIDE.md`）；
3. Playwright 官方文档。

## 3. 依赖与安装

### 3.1 npm 依赖

```json
{
  "devDependencies": {
    "playwright": "^1.40.0"
  }
}
```

### 3.2 安装 Chromium

```bash
npx playwright install chromium
```

Chromium 浏览器将下载到 Playwright 的缓存目录。

## 4. 脚本设计

### 4.1 脚本路径

```text
scripts/export-pdf.ts
```

### 4.2 功能需求

第一版 `scripts/export-pdf.ts` 的功能需求如下：

用户先手动执行：
- `npm run build`
- `npm run preview`（默认 `http://localhost:4173`）

脚本负责：

| 功能 | 说明 |
|---|---|
| 检查目标 URL | 确认预览服务器已启动并可访问 |
| 启动 Chromium | Playwright 启动 Chromium 浏览器 |
| 打开页面 | 导航到预览 URL（默认 `http://localhost:4173`） |
| 等待渲染完成 | 等待关键内容元素出现或网络空闲 |
| 导出 PDF | 调用 `page.pdf()` 生成 A4 PDF |
| 保存文件 | 按命名规范保存到 `exports/` |
| 关闭浏览器 | 导出完成后关闭 Chromium |

> 不在第一版脚本中负责启动和关闭 Vite preview 子进程。自动启动 preview server 可作为未来扩展。

### 4.3 导出参数

```typescript
await page.pdf({
  path: outputPath,
  format: 'A4',
  margin: {
    top: '0',
    bottom: '0',
    left: '0',
    right: '0',
  },
  printBackground: true,          // 打印背景色和背景图
  displayHeaderFooter: false,     // 关闭浏览器默认页眉页脚
  preferCSSPageSize: true,        // 优先使用 CSS @page 定义的尺寸
});
```

### 4.4 参数说明

| 参数 | 值 | 说明 |
|---|---|---|
| `path` | 输出文件路径 | 完整路径，包含文件名 |
| `format` | `'A4'` | 页面尺寸 |
| `margin` | 全 `'0'` | 页边距由页面内 CSS padding 控制 |
| `printBackground` | `true` | 确保品牌色和背景图在 PDF 中可见 |
| `displayHeaderFooter` | `false` | 关闭浏览器默认页眉页脚 |
| `preferCSSPageSize` | `true` | 使用 CSS `@page { size: A4 }` 规则 |

## 5. 脚本实现参考（第一版）

```typescript
// scripts/export-pdf.ts
import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

const PORT = 4173;
const BASE_URL = `http://localhost:${PORT}`;
const OUTPUT_DIR = path.resolve(__dirname, '../exports');
const VERSION = 'v2026.06';
const OUTPUT_FILE = `Digifluidic_Brochure_customer_zh-CN_${VERSION}.pdf`;

async function checkServer(url: string): Promise<void> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`服务器返回状态码：${response.status}`);
    }
  } catch (err) {
    throw new Error(
      `无法访问 ${url}。请先执行 npm run build && npm run preview`
    );
  }
}

async function exportPDF(): Promise<void> {
  // 1. 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  // 2. 检查预览服务器是否已启动
  console.log('检查预览服务器...');
  await checkServer(BASE_URL);
  console.log('预览服务器可访问');

  // 3. 启动浏览器
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    // 4. 打开页面
    await page.goto(BASE_URL, { waitUntil: 'networkidle' });

    // 5. 等待关键内容渲染
    await page.waitForSelector('.brochure-layout', { timeout: 10000 });

    // 6. 导出 PDF
    const outputPath = path.join(OUTPUT_DIR, OUTPUT_FILE);
    await page.pdf({
      path: outputPath,
      format: 'A4',
      margin: { top: '0', bottom: '0', left: '0', right: '0' },
      printBackground: true,
      displayHeaderFooter: false,
      preferCSSPageSize: true,
    });

    console.log(`PDF 导出成功：${outputPath}`);

    // 7. 输出文件信息
    const stats = fs.statSync(outputPath);
    console.log(`文件大小：${(stats.size / 1024 / 1024).toFixed(2)} MB`);
  } finally {
    await browser.close();
    console.log('浏览器已关闭');
  }
}

exportPDF().catch((err) => {
  console.error('PDF 导出失败：', err);
  process.exit(1);
});
```

> 如需自动启动 preview server，可在后续版本中扩展，当前第一版不要求管理子进程。

## 6. 等待策略

### 6.1 页面加载等待

- 使用 `waitUntil: 'networkidle'` 确保所有资源加载完成；
- 额外等待关键 CSS 选择器出现（如 `.brochure-layout`）。

### 6.2 字体加载等待

如使用 Web 字体，需等待字体加载完成：

```typescript
await page.evaluate(() => document.fonts.ready);
```

### 6.3 图片加载等待

```typescript
await page.waitForFunction(() => {
  const images = Array.from(document.querySelectorAll('img'));
  return images.every(img => img.complete);
});
```

## 7. 错误处理

| 场景 | 处理方式 |
|---|---|
| 预览服务器未启动 | 提示先执行 `npm run build && npm run preview` |
| 端口被占用 | 提示更换端口或关闭占用进程 |
| 页面加载超时 | 增加超时时间或检查网络 |
| 关键元素未出现 | 检查 CSS 选择器是否正确 |
| PDF 写入失败 | 检查输出目录权限和磁盘空间 |
| Chromium 未安装 | 提示执行 `npx playwright install chromium` |

## 8. 文件命名规范

```text
Digifluidic_Brochure_[受众]_[语言]_v[版本号].pdf
```

| 变量 | 可选值 | 说明 |
|---|---|---|
| `[受众]` | `customer`、`partner`、`government`、`internal` | 目标受众 |
| `[语言]` | `zh-CN` | 语言代码 |
| `[版本号]` | `v2026.06` | 年月版本号 |

示例：
- `Digifluidic_Brochure_customer_zh-CN_v2026.06.pdf`
- `Digifluidic_Brochure_internal_zh-CN_v2026.06.pdf`

## 9. 当前阶段不纳入

1. 批量多语言 PDF 导出；
2. 带密码保护的 PDF；
3. PDF 元数据自定义（标题、作者等，可后续补充）；
4. 导出进度通知；
5. 并行导出多个 PDF。

## 10. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| Playwright 版本与 Chromium 不兼容 | 使用固定版本号，`npm ci` 安装 |
| 预览服务器残留 | 导出完成后手动关闭 preview server（`Ctrl+C`） |
| 中文字体缺失 | 确保运行环境安装了所需字体 |
| 导出 PDF 内容不完整 | 增加等待策略确保所有内容渲染完成 |

## 11. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_PDF_EXPORT_OVERVIEW.md` | 上位文档，本文件实现其 Playwright 部分 |
| `02_BROWSER_PRINT_GUIDE.md` | 手动打印兜底方案 |
| `03_PDF_QA_CHECKLIST.md` | 导出后的 QA 检查 |
| `docs/03_design/02_PRINT_STYLE_SPEC.md` | 打印样式规范 |
| `docs/04_development/00_DEVELOPMENT_GUIDE.md` | 开发和构建流程 |

## 12. 后续维护规则

1. Playwright 版本升级后检查 API 兼容性；
2. 导出参数调整后重新生成 PDF 并 QA 验证；
3. 新增等待策略后在本文件中补充说明。
