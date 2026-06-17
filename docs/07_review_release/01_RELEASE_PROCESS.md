# 01_RELEASE_PROCESS.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 发布流程 |
| 文件路径 | `docs/07_review_release/01_RELEASE_PROCESS.md` |
| 所属目录 | `docs/07_review_release/` |
| 文档类型 | 发布流程规范文档 |
| 适用范围 | 白皮书/宣传册的版本发布、部署和对外分发 |
| 当前版本 | v0.1 |
| 维护方式 | 随发布流程优化和分发渠道变化持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义从评审通过到对外发布的完整流程；
2. 约束发布前必须完成的检查项；
3. 统一发布物命名和归档规范。

本文件不替代：

1. 内部评审指南（`00_INTERNAL_REVIEW_GUIDE.md`）；
2. 版本号规则（`02_VERSIONING_RULES.md`）；
3. 部署文档（`docs/05_deployment/`）。

## 3. 发布流程

### 3.1 标准发布流程

```
所有评审通过
  ↓
确认版本号
  ↓
构建生产版本（npm run build）
  ↓
导出 PDF（npm run export:pdf）
  ↓
PDF QA 检查
  ↓
更新 CHANGELOG
  ↓
Git 提交并打 Tag
  ↓
部署到服务器
  ↓
验证线上页面
  ↓
内部通知发布完成
  ↓
（可选）对外分发 PDF
```

### 3.2 紧急修复发布流程

```
问题确认
  ↓
修复内容/代码
  ↓
内容负责人确认（如涉及文案）
  ↓
构建 → PDF QA（快速） → 部署
  ↓
通知相关人员
```

## 4. 发布前检查清单

### 4.1 必须通过项

| # | 检查项 | 负责角色 | 确认 |
|---|---|---|---|
| 1 | 技术评审通过 | 技术负责人 | ☐ |
| 2 | 内容评审通过 | 内容负责人 | ☐ |
| 3 | 合规评审通过 | 合规负责人 | ☐ |
| 4 | 设计评审通过 | 设计负责人 | ☐ |
| 5 | PDF QA 通过 | QA 执行人 | ☐ |
| 6 | 版本号确认 | 项目经理 | ☐ |
| 7 | CHANGELOG 更新 | 开发者 | ☐ |
| 8 | 构建成功 | 开发者 | ☐ |
| 9 | 线上验证通过 | 开发者 | ☐ |

### 4.2 可选检查项

| # | 检查项 | 说明 |
|---|---|---|
| 1 | 实体打印测试 | 使用实体打印机输出 PDF 验证 |
| 2 | 外部网络访问测试 | 从外部网络访问服务器页面 |
| 3 | 多浏览器验证 | Chrome、Edge、Firefox 访问验证 |

## 5. 发布操作步骤

### 步骤 1：确认版本号

按 `02_VERSIONING_RULES.md` 确定本次发布的版本号。

### 步骤 2：构建

```bash
npm run build
```

确认构建成功，`dist/` 目录完整。

### 步骤 3：导出 PDF

**前提**：已安装 Playwright 及 Chromium（`npx playwright install chromium`）。

**操作步骤**：

1. 先构建生产版本：

```bash
npm run build
```

2. 启动构建预览服务：

```bash
npm run preview
```

3. 确认 `http://localhost:4173` 可访问后，在另一个终端执行：

```bash
npm run export:pdf
```

确认 PDF 生成到 `exports/` 目录。

> 说明：第一版 `scripts/export-pdf.ts` 默认访问已启动的 Vite preview 页面（`http://localhost:4173`），不负责自动启动和关闭 preview server。导出完成后手动关闭 preview 服务（Ctrl+C）。

### 步骤 4：PDF QA

按 `docs/06_pdf_export/03_PDF_QA_CHECKLIST.md` 执行 QA。

### 步骤 5：更新 CHANGELOG

在 `docs/07_review_release/03_CHANGELOG.md` 中记录本次变更。

### 步骤 6：Git 操作

```bash
# 提交所有变更
git add .
git commit -m "release: v2026.06"

# 打版本标签
git tag -a v2026.06 -m "Release v2026.06"

# 推送（如有远程仓库）
git push origin main
git push origin v2026.06
```

### 步骤 7：部署

按 `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md` 执行部署。

### 步骤 8：线上验证

1. 浏览器访问 `http://服务器IP:8083`；
2. 逐页浏览确认内容正确；
3. 在本地或运维终端浏览器访问 `http://服务器IP:8083`，使用 Chrome 打印预览确认页面可正常导出 PDF；
4. 从外部网络访问确认（如适用）。

### 步骤 9：通知

通知相关人员发布完成，包括：
- 版本号；
- 访问地址；
- 主要变更内容；
- PDF 文件位置。

## 6. 发布物管理

### 6.1 发布物清单

| 发布物 | 位置 | 说明 |
|---|---|---|
| Web 页面 | `http://服务器IP:8083` | 在线访问 |
| PDF 文件 | `exports/Digifluidic_Brochure_*_v*.pdf` | PDF 归档 |
| 构建产物 | `dist/` | 部署源文件 |
| Git Tag | `v2026.06` | 版本标记 |

### 6.2 PDF 归档

- 每次发布的 PDF 应归档保存；
- 归档位置：`exports/archive/` 或公司文件服务器；
- 归档命名：保持原始文件名。

### 6.3 构建产物归档

- 每次发布的 `dist/` 备份保存在 `C:\digifluidic-brochure\backup\dist_YYYYMMDD_HHmmss`；
- 保留最近 5 个版本的备份；
- 更早版本可清理。

## 7. 对外分发规范

### 7.1 分发前确认

对外分发 PDF 前必须确认：

1. 所有内部评审已通过；
2. 合规声明完整；
3. PDF QA 通过；
4. 公司内部已批准对外分发。

### 7.2 分发方式

- 邮件附件（建议控制文件大小；如超过邮件限制，可使用云盘分享链接）；
- 云盘分享链接；
- 官网下载页面（如有）；
- 展会 USB 拷贝。

### 7.3 分发记录

建议记录分发情况：

| 日期 | 接收方 | 版本 | 分发方式 | 备注 |
|---|---|---|---|---|
| 2026-06-XX | XX客户 | v2026.06 | 邮件 | |

## 8. 当前阶段不纳入

1. 自动化发布流水线（CI/CD）；
2. 发布审批系统；
3. 多渠道自动分发；
4. 下载统计和分析；
5. 发布回滚自动化。

## 9. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 未通过评审即发布 | 发布前检查清单中评审确认为必须项 |
| 版本号混乱 | 严格按 `02_VERSIONING_RULES.md` 执行 |
| 部署后发现问题 | 保留旧版本备份，可快速回滚 |
| 对外分发未授权版本 | 对外分发前需内部批准 |

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_INTERNAL_REVIEW_GUIDE.md` | 发布前的评审流程 |
| `02_VERSIONING_RULES.md` | 版本号确定规则 |
| `03_CHANGELOG.md` | 发布变更记录 |
| `docs/05_deployment/00_DEPLOYMENT_OVERVIEW.md` | 部署流程 |
| `docs/06_pdf_export/03_PDF_QA_CHECKLIST.md` | PDF QA 检查 |
| `docs/08_operations/02_ROLLBACK_GUIDE.md` | 发布失败回滚 |

## 11. 后续维护规则

1. 发布流程变更后同步更新本文件；
2. 新增分发渠道后在第 7 节补充；
3. 每次发布后更新 CHANGELOG 和版本记录。
