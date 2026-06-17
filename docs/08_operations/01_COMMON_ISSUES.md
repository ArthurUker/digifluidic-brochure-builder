# 01_COMMON_ISSUES.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 常见问题 |
| 文件路径 | `docs/08_operations/01_COMMON_ISSUES.md` |
| 所属目录 | `docs/08_operations/` |
| 文档类型 | 故障排查文档 |
| 适用范围 | 上线后运维中可能遇到的常见问题和解决方案 |
| 当前版本 | v0.1 |
| 维护方式 | 随故障处理经验积累持续更新 |

## 2. 文档目的与适用范围

本文件用于：

1. 列出上线后常见的故障现象和解决方案；
2. 帮助运维人员快速定位和解决问题；
3. 积累运维经验，减少重复排查时间。

本文件不替代：

1. 运维指南（`00_OPERATIONS_GUIDE.md`）；
2. 回滚指南（`02_ROLLBACK_GUIDE.md`）；
3. 开发调试指南（`docs/04_development/04_DEBUGGING_GUIDE.md`）。

## 3. 页面访问问题

### 3.1 页面无法访问（连接超时）

**现象**：浏览器访问 `http://服务器IP:8083` 显示"无法访问此网站"或连接超时。

**可能原因与解决**：

| 原因 | 检查方法 | 解决方案 |
|---|---|---|
| Nginx 未运行 | `Get-Process nginx` | `start nginx` |
| 8083 端口未监听 | `netstat -ano \| findstr :8083` | 检查 Nginx 配置，reload |
| 防火墙阻止 | 检查 Windows 防火墙规则 | 添加 8083 入站规则 |
| 腾讯云安全组未放行 | 检查腾讯云控制台安全组 | 添加 8083 入站规则 |
| Nginx 配置错误 | `nginx -t` | 修正配置，reload |

### 3.2 8083 端口无法访问

**现象**：Nginx 运行中但 8083 端口无法从外部访问。

**排查步骤**：
1. 检查 Nginx 是否监听 8083：`netstat -ano | findstr :8083`；
2. 检查 Windows 防火墙：`Get-NetFirewallRule -DisplayName "Digifluidic Brochure 8083"`；
3. 检查腾讯云安全组是否放行 8083；
4. 确认访问地址使用的是服务器 IP 而非 localhost；
5. 如 8083 端口冲突，按端口矩阵选择备选端口。

### 3.3 页面 404

**现象**：Nginx 返回 404 页面。

**可能原因与解决**：

| 原因 | 检查方法 | 解决方案 |
|---|---|---|
| dist/ 目录不存在 | `Test-Path C:\digifluidic-brochure\dist\index.html` | 重新部署 dist/ |
| root 路径配置错误 | 检查 Nginx 配置中的 root 路径 | 修正路径，确保使用正斜杠 |
| index.html 缺失 | 检查 dist/ 内容 | 重新构建并部署 |

### 3.4 页面空白

**现象**：页面可访问但显示为空白页。

**可能原因与解决**：

| 原因 | 检查方法 | 解决方案 |
|---|---|---|
| JavaScript 错误 | 浏览器控制台（F12）查看错误 | 检查构建产物，修正代码后重新部署 |
| index.html 中 `<div id="root">` 缺失 | 查看 dist/index.html 源码 | 确认 Vite 构建正常 |
| 静态资源 404 | 浏览器 Network 标签查看资源加载状态 | 检查 assets/ 路径和 Nginx 配置 |

### 3.5 页面样式丢失

**现象**：页面可访问但无样式（纯文字）。

**可能原因与解决**：

| 原因 | 检查方法 | 解决方案 |
|---|---|---|
| assets/ 目录缺失 | 检查 `dist/assets/` 是否存在 | 重新构建 |
| Nginx location 配置错误 | 检查 `/assets/` location 配置 | 确认配置正确 |
| base 路径配置错误 | 检查 `vite.config.ts` 中的 `base` | 应为 `'/'` |
| 浏览器缓存 | 硬刷新（Ctrl+Shift+R） | 清除缓存 |

### 3.6 页面部分内容不显示

**现象**：页面可访问但某些章节或组件不显示。

**可能原因与解决**：

| 原因 | 检查方法 | 解决方案 |
|---|---|---|
| 数据文件错误 | 检查 `src/data/brochure.ts` | 修正数据，重新构建部署 |
| 组件渲染错误 | 浏览器控制台查看错误 | 修正组件代码 |
| 构建不完整 | 检查 dist/ 文件列表 | 重新构建 |

## 4. Nginx 问题

### 4.1 Nginx 无法启动

**现象**：执行 `start nginx` 无效果或报错。

**解决步骤**：
1. 检查配置语法：`nginx -t`；
2. 检查端口是否被占用：`netstat -ano | findstr :8083`；
3. 检查错误日志：`C:\nginx\logs\error.log`；
4. 检查是否有已运行的 Nginx 实例：`Get-Process nginx`；
5. 如有旧实例，先停止：`nginx -s quit`，再启动。

### 4.2 nginx -t 报错

**现象**：配置测试失败。

**常见错误**：
- 路径格式错误：Windows 路径必须使用正斜杠 `/`，不能使用反斜杠 `\`；
- 缺少分号：每条指令以 `;` 结尾；
- 大括号不匹配：检查 `{` `}` 配对。

### 4.3 Windows 路径斜杠错误

**现象**：Nginx 无法找到文件，日志显示路径错误。

**解决**：
- Nginx 配置中 Windows 路径必须使用正斜杠 `/`，不能使用反斜杠 `\`；
- 正确示例：`root C:/digifluidic-brochure/dist;`
- 错误示例：`root C:\digifluidic-brochure\dist;`

### 4.4 Nginx reload 失败

**现象**：`nginx -s reload` 执行失败或报错。

**解决**：
- 先执行 `nginx -t` 检查配置语法；
- 检查是否有 Nginx 进程在运行：`Get-Process nginx`；
- 如无进程，先执行 `start nginx` 启动；
- 检查错误日志：`C:\nginx\logs\error.log`。

### 4.5 Nginx reload 后页面仍显示旧内容

**解决**：
- 确认 dist/ 文件已更新；
- 浏览器硬刷新（Ctrl+Shift+R）；
- 检查 Nginx 是否开启了缓存（当前配置未开启）。

## 5. PDF 导出问题

### 5.1 浏览器打印 PDF 空白

**解决**：
- 确认"背景图形"已勾选；
- 确认 `@media print` 未误隐藏内容；
- 使用 Chrome 浏览器。

### 5.2 打印 PDF 分页异常

**解决**：
- 检查 CSS 分页规则；
- 确认打印设置中纸张尺寸为 A4；
- 确认边距设置为"无"。

### 5.3 打印 PDF 中文字体异常

**解决**：
- 确认系统已安装中文字体；
- 在 CSS 中使用系统通用字体作为备选；
- 考虑使用 Web 字体确保跨平台一致。

### 5.4 Playwright PDF 导出字体异常

**现象**：Playwright 导出的 PDF 中文字体显示为方块或乱码。

**解决**：
- 确认 Playwright 运行环境（本地 Mac）已安装所需中文字体；
- 检查 `font-family` 是否包含系统通用字体；
- 如需跨平台一致，可在 `print.css` 中引入 Web 字体（如 Noto Sans SC）。

### 5.5 Logo 或图片不显示

**现象**：PDF 或 Web 页面中 Logo/图片不显示。

**解决**：
- 检查 `public/` 目录下图片文件是否存在；
- 检查图片引用路径是否正确（应使用绝对路径 `/brand/logo.png` 或相对路径）；
- 确认 `vite.config.ts` 中 `base` 配置为 `'/'`；
- 检查 Nginx `location /assets/` 配置是否正确；
- 确认图片格式受支持（PNG、JPG、SVG、WebP）。

## 6. 部署问题

### 6.1 部署后页面未更新

**解决**：
1. 确认新 dist/ 文件已完全替换旧文件；
2. 浏览器硬刷新；
3. 检查 Nginx 是否配置了强缓存（当前未配置）。

### 6.2 部署后部分文件 404

**解决**：
- 检查 dist/ 目录内容是否完整；
- 旧文件是否已清理（残留旧文件可能导致引用错误）；
- 更新部署时建议先删除旧 dist/ 内容再复制新文件。

## 7. 服务器资源问题

### 7.1 磁盘空间不足

**检查**：
```powershell
Get-PSDrive C
```

**解决**：
- 清理旧备份：保留最近 5 个版本，删除更早的；
- 清理 Nginx 日志（如日志过大）；
- 清理系统临时文件。

### 7.2 内存不足

静态站点对内存需求极低（Nginx 通常 < 100MB），如内存不足通常是其他系统导致。检查：

```powershell
Get-Process | Sort-Object WorkingSet64 -Descending | Select-Object -First 10
```

## 8. 问题记录模板

每次处理故障后，建议记录：

```markdown
## [日期] [问题简述]

- **发现时间**：YYYY-MM-DD HH:MM
- **故障现象**：描述
- **影响范围**：描述
- **排查过程**：步骤
- **根本原因**：分析
- **解决方案**：操作
- **恢复时间**：YYYY-MM-DD HH:MM
- **后续措施**：预防建议
```

## 9. 当前阶段不纳入

1. 自动化故障检测和告警；
2. 性能瓶颈分析；
3. 安全漏洞扫描；
4. 第三方服务故障排查。

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_OPERATIONS_GUIDE.md` | 上位文档，本文件细化故障排查 |
| `02_ROLLBACK_GUIDE.md` | 无法修复时的回滚操作 |
| `03_MAINTENANCE_CHECKLIST.md` | 周期性维护中的问题预防 |
| `docs/04_development/04_DEBUGGING_GUIDE.md` | 开发阶段的调试指南 |
| `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md` | 部署操作参考 |

## 11. 后续维护规则

1. 每次处理新类型故障后，追加到本文件对应章节；
2. 解决方案经验证有效后再记录；
3. 过时或不再适用的问题可标注"已过时"。
