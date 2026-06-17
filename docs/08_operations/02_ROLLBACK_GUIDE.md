# 02_ROLLBACK_GUIDE.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 回滚指南 |
| 文件路径 | `docs/08_operations/02_ROLLBACK_GUIDE.md` |
| 所属目录 | `docs/08_operations/` |
| 文档类型 | 操作指南文档 |
| 适用范围 | 部署失败或线上故障时的版本回滚操作 |
| 当前版本 | v0.1 |
| 维护方式 | 随回滚经验积累和备份策略变化持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义版本回滚的标准操作流程；
2. 确保回滚操作安全、可逆；
3. 减少故障恢复时间。

本文件不替代：

1. 运维指南（`00_OPERATIONS_GUIDE.md`）；
2. 常见问题（`01_COMMON_ISSUES.md`）；
3. 部署文档（`docs/05_deployment/`）。

## 3. 回滚触发条件

以下情况考虑回滚：

1. 部署后页面无法访问（非网络/防火墙问题）；
2. 部署后页面内容严重错误；
3. 部署后 PDF 导出异常；
4. 部署后关键功能不可用；
5. 部署后发现合规声明缺失或错误。

以下情况不需要回滚：
- 轻微样式问题（可在线修复）；
- 错别字（可快速重新部署）；
- 浏览器缓存问题（清除缓存即可）。

## 4. 回滚前准备

### 4.1 确认有可用备份

```powershell
# 列出所有备份
Get-ChildItem C:\digifluidic-brochure\backup

# 确认目标备份包含 index.html
Test-Path C:\digifluidic-brochure\backup\<备份目录>\index.html
```

### 4.2 确认当前版本问题

记录回滚原因：
- 当前版本号；
- 故障现象；
- 为什么需要回滚。

## 5. 回滚操作步骤

### 步骤 1：选择回滚目标版本

```powershell
# 查看备份目录，选择要回滚到的版本
Get-ChildItem C:\digifluidic-brochure\backup | Sort-Object Name -Descending
```

备份目录按时间戳命名，如 `dist_20260615_143000`，选择上一个正常工作的版本。

### 步骤 2：备份当前版本（以防需要恢复）

```powershell
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss_before_rollback"
Copy-Item -Path "C:\digifluidic-brochure\dist" -Destination "C:\digifluidic-brochure\backup\dist_$timestamp" -Recurse
```

### 步骤 3：替换 dist/ 为目标版本

```powershell
# 删除当前 dist/ 内容
Remove-Item -Path "C:\digifluidic-brochure\dist\*" -Recurse -Force

# 复制目标备份到 dist/
$targetBackup = "C:\digifluidic-brochure\backup\dist_20260615_143000"  # 替换为目标备份目录
Copy-Item -Path "$targetBackup\*" -Destination "C:\digifluidic-brochure\dist" -Recurse
```

### 步骤 4：验证文件完整性

```powershell
# 确认 index.html 存在
Test-Path C:\digifluidic-brochure\dist\index.html

# 确认 assets/ 目录存在
Test-Path C:\digifluidic-brochure\dist\assets
```

### 步骤 5：重载 Nginx（如需要）

仅替换静态文件通常不需要重载 Nginx。但如果 Nginx 配置也发生了变化，则需重载：

```powershell
nginx -t
nginx -s reload
```

### 步骤 6：验证回滚结果

1. 浏览器硬刷新访问 `http://服务器IP:8083`；
2. 确认页面正常显示；
3. 检查之前的问题是否已解决；
4. 检查合规声明是否完整。

### 步骤 7：记录回滚操作

在运维日志中记录：

| 日期 | 操作类型 | 从版本 | 回滚到版本 | 原因 | 操作人 | 结果 |
|---|---|---|---|---|---|---|
| 2026-06-XX | 回滚 | v2026.06.2 | v2026.06 | 页面404 | XX | 成功 |

## 6. Nginx 配置回滚

如果 Nginx 配置本身出现问题：

### 步骤 1：恢复配置备份

```powershell
# 列出配置备份
Get-ChildItem C:\nginx\conf\nginx.conf.backup*

# 恢复备份
Copy-Item -Path "C:\nginx\conf\nginx.conf.backup_20260615" -Destination "C:\nginx\conf\nginx.conf" -Force
```

### 步骤 2：测试并重载

```powershell
nginx -t
nginx -s reload
```

### 步骤 3：验证

确认所有系统（包括已有系统和 Digifluidic Brochure Builder）均正常。

## 7. 回滚后处理

### 7.1 问题分析

回滚后应分析：
1. 导致回滚的根本原因是什么；
2. 如何避免同类问题再次发生；
3. 是否需要补充测试或检查项。

### 7.2 修复并重新部署

1. 在本地修复问题；
2. 充分测试；
3. 按正常发布流程重新部署。

### 7.3 清理

- 保留回滚前的故障版本备份（用于问题分析）；
- 更早的过期备份可清理（保留最近 5 个版本）。

## 8. 紧急回滚快速参考

```powershell
# === 紧急回滚快速命令 ===

# 1. 备份当前版本
$ts = Get-Date -Format "yyyyMMdd_HHmmss_emergency"
Copy-Item "C:\digifluidic-brochure\dist" "C:\digifluidic-brochure\backup\dist_$ts" -Recurse

# 2. 列出可用备份，选择目标版本
Get-ChildItem C:\digifluidic-brochure\backup | Sort-Object Name -Descending

# 3. 替换（将 <target> 替换为实际备份目录名）
Remove-Item "C:\digifluidic-brochure\dist\*" -Recurse -Force
Copy-Item "C:\digifluidic-brochure\backup\<target>\*" "C:\digifluidic-brochure\dist" -Recurse

# 4. 验证
Test-Path C:\digifluidic-brochure\dist\index.html
# 浏览器访问 http://服务器IP:8083
```

## 9. 当前阶段不纳入

1. 自动化回滚脚本；
2. 一键回滚按钮；
3. 蓝绿部署自动切换；
4. 回滚审批流程。

## 10. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 备份不可用 | 每月检查备份完整性 |
| 回滚到错误版本 | 操作前确认目标备份目录和版本 |
| 回滚过程中断 | 先备份当前版本，即使中断也可恢复 |
| Nginx 配置回滚影响已有系统 | 回滚 Nginx 配置后必须测试所有系统 |

## 11. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_OPERATIONS_GUIDE.md` | 上位文档，本文件细化回滚操作 |
| `01_COMMON_ISSUES.md` | 常见问题中可能触发回滚 |
| `03_MAINTENANCE_CHECKLIST.md` | 维护中检查备份可用性 |
| `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md` | 部署中的备份步骤 |

## 12. 后续维护规则

1. 每次回滚操作后总结经验，更新本文件；
2. 备份策略变化后更新相关步骤；
3. 回滚命令在测试环境验证后再用于生产。
