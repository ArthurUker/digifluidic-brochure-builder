# 04_DEPLOY_PS1_SPEC.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 部署脚本规范 |
| 文件路径 | `docs/05_deployment/04_DEPLOY_PS1_SPEC.md` |
| 所属目录 | `docs/05_deployment/` |
| 文档类型 | 脚本规范文档 |
| 适用范围 | `deploy.ps1` PowerShell 部署脚本的设计和实现 |
| 当前版本 | v0.1 |
| 维护方式 | 随部署流程优化和脚本功能扩展持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义 `deploy.ps1` 部署脚本的功能需求和实现规范；
2. 约束脚本的操作范围和安全边界；
3. 作为后续脚本编写和审阅的基准。

本文件不替代：

1. 部署概览（`00_DEPLOYMENT_OVERVIEW.md`）；
2. Windows Nginx 部署指南（`01_WINDOWS_NGINX_DEPLOYMENT.md`）。

## 3. 脚本定位

`deploy.ps1` 是 Windows Server 上的静态站点部署脚本，暂放项目根目录（`C:\digifluidic-brochure\deploy.ps1`），便于在 Windows Server 上直接执行。如后续部署脚本增多，再评估新增 `deploy/` 目录。

**脚本职责**（仅限以下操作）：
1. 检查 `dist/` 是否存在；
2. 备份旧 `dist/`；
3. 复制新 `dist/` 到目标目录；
4. 可选执行 `nginx -t`；
5. 可选执行 `nginx -s reload`；
6. 输出部署结果和回滚提示。

**脚本不得**：
- 启动 Node.js 服务；
- 调用 PM2；
- 删除已有系统目录；
- 修改 RDPMS 或食品安全检验管理系统配置；
- 重启服务器；
- 启停无关服务。

**脚本不是**：
- PM2 进程管理脚本；
- 后端服务部署脚本；
- 数据库迁移脚本；
- 服务器端构建脚本（构建在本地完成）。

## 4. 功能需求

`deploy.ps1` 假设用户已在本地完成 `npm run build`，并将 `dist/` 上传到服务器。脚本仅负责服务器端的文件替换和 Nginx 重载。

### 4.1 必需功能

| 功能 | 说明 |
|---|---|
| 检查 dist/ | 确认新 `dist/index.html` 和 `dist/assets/` 存在 |
| 备份旧版本 | 将当前 `dist/` 复制到 `backup/` 并打时间戳 |
| 替换文件 | 将新构建产物复制到 `C:\digifluidic-brochure\dist\` |
| 输出结果 | 显示部署状态、访问地址和回滚提示 |

### 4.2 可选功能

| 功能 | 说明 |
|---|---|
| 测试 Nginx 配置 | 执行 `nginx -t` |
| Reload Nginx | 执行 `nginx -s reload` |
| 参数化 | 支持 `-SkipNginxReload` 等参数 |
| 日志 | 将部署过程写入日志文件 |
| 错误处理 | 任一步骤失败时停止并报告 |

## 5. 脚本实现规范

### 5.1 脚本结构

```powershell
# deploy.ps1
# Digifluidic Brochure Builder 部署脚本
# 用途：替换静态站点文件并重载 Nginx
# 前置条件：用户已在本机构建 dist/ 并上传到服务器
# 最后更新：2026.06

param(
    [switch]$SkipNginxReload,# 跳过 Nginx reload
    [string]$SourceDist = ""  # 新 dist/ 的路径（如未指定则使用当前目录下的 dist/）
)

# 配置
$ProjectRoot = "C:\digifluidic-brochure"
$DistPath = "$ProjectRoot\dist"
$BackupPath = "$ProjectRoot\backup"
$NginxPath = "C:\nginx"  # 以实际路径为准

# 错误时停止
$ErrorActionPreference = "Stop"

Write-Host "=== Digifluidic Brochure Builder 部署开始 ===" -ForegroundColor Green

try {
    # 1. 确定新 dist/ 路径
    $newDist = if ($SourceDist) { $SourceDist } else { "$PSScriptRoot\dist" }
    Write-Host "[1/4] 新构建产物路径：$newDist" -ForegroundColor Cyan

    # 2. 检查新构建产物
    Write-Host "[2/4] 检查构建产物..." -ForegroundColor Cyan
    if (-not (Test-Path "$newDist\index.html")) {
        throw "构建产物不完整：$newDist 中缺少 index.html"
    }
    if (-not (Test-Path "$newDist\assets")) {
        throw "构建产物不完整：$newDist 中缺少 assets/ 目录"
    }

    # 3. 备份旧版本
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $backupDir = "$BackupPath\dist_$timestamp"
    Write-Host "[3/4] 备份旧版本到 $backupDir..." -ForegroundColor Cyan

    if (Test-Path $DistPath) {
        Copy-Item -Path $DistPath -Destination $backupDir -Recurse
        # 删除旧 dist/ 内容，避免残留
        Remove-Item -Path "$DistPath\*" -Recurse -Force
    } else {
        New-Item -ItemType Directory -Path $DistPath -Force | Out-Null
    }

    # 4. 替换文件
    Copy-Item -Path "$newDist\*" -Destination $DistPath -Recurse
    Write-Host "文件替换完成" -ForegroundColor Green

    # 5. 测试并重载 Nginx（可选）
    if (-not $SkipNginxReload) {
        Write-Host "[4/4] 重载 Nginx..." -ForegroundColor Cyan

        # 测试配置
        $testResult = & "$NginxPath\nginx.exe" -t 2>&1
        if ($LASTEXITCODE -ne 0) {
            throw "Nginx 配置测试失败：$testResult"
        }

        # 重载
        & "$NginxPath\nginx.exe" -s reload
        Write-Host "Nginx 重载成功" -ForegroundColor Green
    }

    Write-Host "=== 部署完成 ===" -ForegroundColor Green
    Write-Host "访问地址：http://服务器IP:8083" -ForegroundColor Yellow
    Write-Host "如需回滚，恢复备份：$backupDir" -ForegroundColor Yellow
}
catch {
    Write-Host "=== 部署失败 ===" -ForegroundColor Red
    Write-Host $_.Exception.Message -ForegroundColor Red
    Write-Host "如需回滚，请使用 backup/ 目录中的旧版本" -ForegroundColor Yellow
    exit 1
}
```

### 5.2 安全约束

1. 脚本不包含硬编码的密码或密钥；
2. 脚本不修改 Nginx 配置文件（仅测试和 reload）；
3. 脚本不操作已有系统的文件或进程；
4. 脚本不执行 PM2 相关命令；
5. 脚本不操作数据库；
6. 脚本不启动 Node.js 服务；
7. 脚本不执行 `npm install`、`npm run build`、`git pull` 等服务器端操作。

### 5.3 错误处理

| 场景 | 处理方式 |
|---|---|
| 新 dist/ 检查失败 | 停止部署，提示检查本地构建产物 |
| 备份失败 | 停止部署（避免覆盖后无法回滚） |
| 文件替换失败 | 停止部署，提示检查磁盘空间和权限 |
| nginx -t 失败 | 停止部署，输出 Nginx 错误信息 |
| nginx -s reload 失败 | 停止部署，提示手动检查 Nginx 状态 |

## 6. 脚本使用方式

### 6.1 标准部署（dist/ 已上传到项目根目录）

```powershell
.\deploy.ps1
```

### 6.2 指定 dist/ 路径

```powershell
.\deploy.ps1 -SourceDist "D:\uploads\dist"
```

### 6.3 跳过 Nginx Reload（仅替换文件）

```powershell
.\deploy.ps1 -SkipNginxReload
```

## 7. 脚本存放位置

`deploy.ps1` 暂放项目根目录，便于在 Windows Server 上直接执行：

```text
C:\digifluidic-brochure\
├── deploy.ps1        ← 部署脚本（暂放根目录）
├── dist/
├── backup/
└── ...
```

如后续部署脚本增多，再评估新增 `deploy/` 目录。

## 8. 当前阶段不纳入

1. PM2 相关命令；
2. Docker 部署命令；
3. 数据库迁移脚本；
4. 多服务器并行部署；
5. 部署审批流程自动化；
6. 部署通知（邮件、IM 等）；
7. 部署健康检查端点。

## 9. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 脚本以管理员权限运行导致误操作 | 脚本仅操作 `C:\digifluidic-brochure\` 目录和 Nginx reload，不修改系统配置 |
| 旧文件残留导致异常 | 替换前先删除 `dist/` 内容，再复制新文件 |
| Nginx reload 影响已有系统 | reload 是优雅重载，不影响现有连接 |
| 脚本中断导致状态不一致 | 使用 try/catch 和步骤检查，失败时保留备份 |
| 新 dist/ 不完整 | 替换前检查 `index.html` 和 `assets/` 是否存在 |

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_DEPLOYMENT_OVERVIEW.md` | 部署流程的上位说明 |
| `01_WINDOWS_NGINX_DEPLOYMENT.md` | 手动部署步骤，脚本实现其自动化 |
| `02_NGINX_CONFIG_SPEC.md` | Nginx 配置参考 |
| `docs/08_operations/02_ROLLBACK_GUIDE.md` | 部署失败时的回滚操作 |

## 11. 后续维护规则

1. 部署流程变化时同步更新脚本和本文件；
2. Nginx 路径变化时更新脚本中的路径配置；
3. 新增部署参数时在本文件中补充说明；
4. 脚本在测试环境验证后再用于生产部署。
