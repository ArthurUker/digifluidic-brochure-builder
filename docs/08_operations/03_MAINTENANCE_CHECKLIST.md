# 03_MAINTENANCE_CHECKLIST.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 维护检查清单 |
| 文件路径 | `docs/08_operations/03_MAINTENANCE_CHECKLIST.md` |
| 所属目录 | `docs/08_operations/` |
| 文档类型 | 检查清单文档 |
| 适用范围 | 上线后的周期性维护检查 |
| 当前版本 | v0.1 |
| 维护方式 | 随维护经验积累和检查需求变化持续更新 |

## 2. 文档目的与适用范围

本文件用于：

1. 提供标准化的周期性维护检查清单；
2. 确保系统长期稳定运行；
3. 及时发现潜在问题。

本文件不替代：

1. 运维指南（`00_OPERATIONS_GUIDE.md`）；
2. 常见问题（`01_COMMON_ISSUES.md`）；
3. 回滚指南（`02_ROLLBACK_GUIDE.md`）。

## 3. 维护频率总览

| 维护类型 | 频率 | 执行人 |
|---|---|---|
| 日常检查 | 每日 | 运维人员 |
| 周度检查 | 每周 | 运维人员 |
| 月度维护 | 每月 | 运维人员 |
| 季度维护 | 每季度 | 技术负责人 + 运维人员 |
| 内容审阅 | 每半年 | 内容负责人 |

## 4. 日常检查清单

| # | 检查项 | 方法 | 通过标准 |
|---|---|---|---|
| D1 | 页面可访问 | 浏览器访问 `http://服务器IP:8083` | 页面正常加载 |
| D2 | 封面页正常 | 确认封面标题、Logo、版本号正确 | 无异常 |
| D3 | 合规声明可见 | 滚动到页面底部 | 声明完整可读 |

## 5. 周度检查清单

| # | 检查项 | 方法 | 通过标准 |
|---|---|---|---|
| W1 | Nginx 进程状态 | `Get-Process nginx` | 进程存在 |
| W2 | 8083 端口监听 | `netstat -ano \| findstr :8083` | LISTENING |
| W3 | 页面全章节浏览 | 逐章节滚动检查 | 所有章节正常 |
| W4 | 浏览器打印测试 | Chrome 打印预览 | 分页正常 |
| W5 | 外部网络访问（如适用） | 从外部网络访问 | 可正常访问 |
| W6 | 静态资源加载 | 浏览器 DevTools Network 标签 | 无 404 资源 |
| W7 | 是否影响已有系统 | 访问 RDPMS 和食品安全检验管理系统 | 已有系统正常 |

## 6. 月度维护清单

| # | 检查项 | 方法 | 通过标准 |
|---|---|---|---|
| M1 | 磁盘空间 | `Get-PSDrive C` | 剩余 > 1GB |
| M2 | 备份完整性 | 检查最新备份的 `index.html` | 存在且可读 |
| M3 | 过期备份清理 | 保留最近 5 个版本，删除更早的 | 备份目录整洁 |
| M4 | Nginx 错误日志 | `Get-Content C:\nginx\logs\error.log -Tail 50` | 无严重错误 |
| M5 | 内容版本号检查 | 确认页面显示的版本号与最新一致 | 版本号正确 |
| M6 | PDF 导出测试 | `npm run export:pdf`（如环境支持）或浏览器打印 | PDF 正常 |
| M7 | Nginx 配置备份 | 确认 `nginx.conf` 已有备份文件 | 备份存在 |
| M8 | 端口矩阵更新 | 检查 8083 端口占用情况 | 无新增冲突 |
| M9 | `PROJECT_CONTEXT.md` 同步 | 检查上下文文件是否与当前状态一致 | 无过期信息 |
| M10 | Git 提交记录 | 检查近期提交是否正常 | 无遗漏提交 |

## 7. 季度维护清单

| # | 检查项 | 方法 | 通过标准 |
|---|---|---|---|
| Q1 | 完整功能验证 | 所有章节、表格、图片检查 | 无异常 |
| Q2 | 多浏览器测试 | Chrome、Edge、Firefox | 均正常 |
| Q3 | 部署流程验证 | 模拟一次完整部署 | 流程正常 |
| Q4 | 回滚流程验证 | 模拟一次回滚操作 | 回滚正常 |
| Q5 | 文档审阅 | 检查运维文档是否过期 | 文档最新 |
| Q6 | 安全更新检查 | 检查 Nginx 版本是否有安全更新 | 评估升级需求 |
| Q7 | 备份恢复测试 | 从备份恢复并验证 | 备份可用 |
| Q8 | PDF QA 检查 | 按 `docs/06_pdf_export/03_PDF_QA_CHECKLIST.md` 逐项检查 | 全部通过 |

## 8. 半年内容审阅清单

| # | 检查项 | 方法 | 通过标准 |
|---|---|---|---|
| H1 | 公司信息 | 确认公司名、地址、联系方式 | 与最新一致 |
| H2 | 产品信息 | 确认产品名、注册状态 | 与最新一致 |
| H3 | 论文列表 | 核对论文信息准确性 | 无过期或错误 |
| H4 | 应用矩阵 | 确认研发阶段标注准确 | 与产品规划一致 |
| H5 | 合规声明 | 确认声明内容仍然适用 | 无过时 |
| H6 | 品牌资产 | 确认 Logo 等为最新版本 | 与公司规范一致 |

## 9. 维护记录模板

```markdown
## 维护记录

### [YYYY-MM-DD] [维护类型：日常/周度/月度/季度/半年]

**执行人**：[姓名]

#### 检查结果

| 检查项 | 结果 | 备注 |
|---|---|---|
| D1 页面可访问 | ✅ 通过 | |
| D2 封面正常 | ✅ 通过 | |
| W1 Nginx 进程 | ✅ 通过 | |

#### 发现的问题

| # | 问题描述 | 严重程度 | 处理方式 |
|---|---|---|---|
| 1 | ... | 高/中/低 | 已修复/待修复/已记录 |

#### 操作记录

| 操作 | 说明 |
|---|---|
| 清理过期备份 | 删除 3 个过期备份，释放 50MB |
```

## 10. 维护工具

### 10.1 PowerShell 检查脚本（可选）

可将常用检查命令保存为脚本 `check-status.ps1`：

```powershell
# check-status.ps1
Write-Host "=== Digifluidic Brochure Builder 状态检查 ===" -ForegroundColor Green

# Nginx 进程
$nginx = Get-Process nginx -ErrorAction SilentlyContinue
if ($nginx) {
    Write-Host "✅ Nginx 运行中" -ForegroundColor Green
} else {
    Write-Host "❌ Nginx 未运行" -ForegroundColor Red
}

# 端口监听
$port = netstat -ano | Select-String ":8083"
if ($port) {
    Write-Host "✅ 8083 端口监听中" -ForegroundColor Green
} else {
    Write-Host "❌ 8083 端口未监听" -ForegroundColor Red
}

# dist/ 完整性
if (Test-Path "C:\digifluidic-brochure\dist\index.html") {
    Write-Host "✅ dist/index.html 存在" -ForegroundColor Green
} else {
    Write-Host "❌ dist/index.html 缺失" -ForegroundColor Red
}

# 磁盘空间
$disk = Get-PSDrive C
Write-Host "📊 C 盘剩余空间：$([math]::Round($disk.Free / 1GB, 2)) GB" -ForegroundColor Cyan

# 备份数量
$backups = Get-ChildItem "C:\digifluidic-brochure\backup" -Directory -ErrorAction SilentlyContinue
if ($backups) {
    Write-Host "📊 备份数量：$($backups.Count)" -ForegroundColor Cyan
} else {
    Write-Host "⚠️ 无备份" -ForegroundColor Yellow
}
```

## 11. 当前阶段不纳入

1. 自动化维护脚本定时执行；
2. 维护报告自动生成；
3. 维护提醒和通知；
4. SLA 监控和报告。

## 12. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 维护遗漏 | 使用本清单逐项检查并记录 |
| 备份不可用 | 季度恢复测试 |
| 内容信息过时 | 半年内容审阅 |
| 维护人员变更 | 本文件作为交接文档 |

## 13. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_OPERATIONS_GUIDE.md` | 上位文档，本文件细化检查清单 |
| `01_COMMON_ISSUES.md` | 检查中发现的问题参考常见问题处理 |
| `02_ROLLBACK_GUIDE.md` | 检查中发现严重问题时可能触发回滚 |
| `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md` | 部署相关检查参考 |

## 14. 后续维护规则

1. 根据实际运维经验持续完善检查项；
2. 新增系统组件后补充对应检查项；
3. 每季度审阅本清单是否需要调整。
