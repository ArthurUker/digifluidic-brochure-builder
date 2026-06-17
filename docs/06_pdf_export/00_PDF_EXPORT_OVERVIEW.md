# 00_PDF_EXPORT_OVERVIEW.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder PDF 导出概览 |
| 文件路径 | `docs/06_pdf_export/00_PDF_EXPORT_OVERVIEW.md` |
| 所属目录 | `docs/06_pdf_export/` |
| 文档类型 | PDF 导出概览基准文档 |
| 适用范围 | PDF 导出架构、方案选择、输出规格和 QA 策略 |
| 当前版本 | v0.1 |
| 维护方式 | 随导出方案优化和输出需求变化持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 统一 PDF 导出方案认知；
2. 说明 Playwright 自动导出和 Chrome 手动打印的双轨策略；
3. 作为导出脚本规范和 QA 检查清单的上位说明。

本文件不替代：

1. Playwright 导出规范（`01_PLAYWRIGHT_EXPORT_SPEC.md`）；
2. 浏览器打印指南（`02_BROWSER_PRINT_GUIDE.md`）；
3. PDF QA 检查清单（`03_PDF_QA_CHECKLIST.md`）。

## 3. PDF 导出方案

### 3.1 双轨策略

| 方案 | 用途 | 适用场景 |
|---|---|---|
| **Playwright 自动导出**（推荐） | 自动化、可重复、可脚本化 | 正式发布、本地自动化导出、未来 CI 集成扩展 |
| **Chrome 手动打印**（兜底） | 手动操作、无需额外依赖 | 快速验证、应急导出、非技术人员操作 |

### 3.2 方案对比

| 维度 | Playwright 自动导出 | Chrome 手动打印 |
|---|---|---|
| 自动化程度 | 全自动 | 手动操作 |
| 可重复性 | 完全一致 | 依赖操作人 |
| 参数控制 | 精确（代码控制） | 手动设置 |
| 依赖 | Playwright + Chromium | Chrome 浏览器 |
| 适用场景 | 正式发布 | 快速验证/应急 |
| 输出稳定性 | 高 | 中 |

## 4. 导出架构

```text
npm run build → dist/
  ↓
npm run preview → localhost:4173
  ↓
scripts/export-pdf.ts (Playwright)
  ↓ 启动 Chromium
  ↓ 打开 localhost:4173
  ↓ 等待渲染完成
  ↓ page.pdf({ format: 'A4', ... })
  ↓
exports/Digifluidic_Brochure_*.pdf
```

## 5. 输出规格

### 5.1 页面规格

| 参数 | 值 |
|---|---|
| 页面尺寸 | A4（210mm × 297mm） |
| 方向 | 纵向（Portrait） |
| 页边距 | 由页面 CSS 控制，Playwright margin 设为 0 |
| 背景打印 | 开启（`printBackground: true`） |
| 页眉页脚 | 关闭（`displayHeaderFooter: false`） |

### 5.2 文件规格

| 参数 | 值 |
|---|---|
| 输出目录 | `exports/` |
| 文件命名 | `Digifluidic_Brochure_[audience]_[lang]_v[version].pdf` |
| 命名示例 | `Digifluidic_Brochure_customer_zh-CN_v2026.06.pdf` |
| 文件大小 | 预期 < 10MB |

### 5.3 内容要求

PDF 必须包含：

1. 封面页（完整，独占一页）；
2. 目录页（如有）；
3. 所有内容章节；
4. 应用矩阵表格；
5. 论文证据列表；
6. 产品生态展示；
7. 合规声明（完整、清晰、不可裁剪）；
8. 联系方式。

## 6. 导出流程

### 6.1 Playwright 自动导出流程

第一版导出流程（用户手动启动 preview server）：

```
1. npm run build            # 构建生产版本
2. npm run preview          # 手动启动预览服务器（默认 localhost:4173）
3. npm run export:pdf       # 执行 Playwright 导出脚本，访问已启动的预览页面
4. 检查 exports/ 中的 PDF
5. 按 QA 清单检查
```

> 自动启动 preview server 可作为未来扩展，当前第一版不要求在脚本中管理子进程。

### 6.2 Chrome 手动打印流程

```
1. npm run dev 或 npm run preview
2. 浏览器打开页面
3. Cmd+P / Ctrl+P 打开打印
4. 设置：A4、无页边距、打印背景、关闭页眉页脚
5. 另存为 PDF
6. 按 QA 清单检查
```

## 7. PDF QA 策略

导出后必须按 `03_PDF_QA_CHECKLIST.md` 逐项检查。

关键检查项：
1. 封面完整性；
2. 分页位置合理性；
3. 表格跨页处理；
4. 中文字体正确性；
5. 品牌色准确性；
6. 合规声明完整性和可读性；
7. 文件命名规范性。

## 8. 当前阶段不纳入

1. 批量多语言 PDF 导出；
2. PDF/A 归档格式；
3. 加密或数字签名 PDF；
4. PDF 压缩优化；
5. 服务器端 PDF 渲染服务；
6. PDF 在线预览服务；
7. PDF 内容搜索索引。

## 9. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| Playwright 导出与 Chrome 手动打印效果不一致 | 以 Playwright 导出为准，Chrome 手动打印作为兜底验证 |
| 中文字体在 PDF 中缺失 | 使用系统通用字体或通过 Playwright 环境安装所需字体 |
| 导出 PDF 文件过大 | 控制图片分辨率，使用 SVG 代替 PNG |
| 预览服务器端口冲突 | 使用 Vite 默认端口，冲突时指定 `--port` 参数 |

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `01_PLAYWRIGHT_EXPORT_SPEC.md` | Playwright 自动导出的详细规范 |
| `02_BROWSER_PRINT_GUIDE.md` | Chrome 手动打印的详细步骤 |
| `03_PDF_QA_CHECKLIST.md` | PDF 质量检查清单 |
| `docs/03_design/02_PRINT_STYLE_SPEC.md` | 打印样式规范，PDF 导出的样式基础 |
| `docs/01_architecture/00_ARCHITECTURE_OVERVIEW.md` | PDF 导出在整体架构中的位置 |

## 11. 后续维护规则

1. PDF 输出规格变化后更新本文件第 5 节；
2. 新增导出方案后在本文件第 3 节补充；
3. 文件命名规范变化后更新本文件和所有引用处。
