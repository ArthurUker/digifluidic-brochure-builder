# 01_WINDOWS_NGINX_DEPLOYMENT.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder Windows Nginx 部署指南 |
| 文件路径 | `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md` |
| 所属目录 | `docs/05_deployment/` |
| 文档类型 | 部署操作指南文档 |
| 适用范围 | Windows Server + Nginx 环境下首次部署和后续更新部署 |
| 当前版本 | v0.1 |
| 维护方式 | 随部署环境变化和操作经验积累持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 提供完整的 Windows Server + Nginx 部署操作步骤；
2. 指导首次部署和后续更新部署；
3. 约束部署操作的安全性。

本文件不替代：

1. 部署概览（`00_DEPLOYMENT_OVERVIEW.md`）；
2. Nginx 配置规范（`02_NGINX_CONFIG_SPEC.md`）；
3. 端口矩阵（`03_PORT_MATRIX.md`）。

## 3. 前提条件

### 3.1 服务器环境

| 项目 | 要求 |
|---|---|
| 操作系统 | Windows Server（腾讯云） |
| Nginx | 已安装并运行中 |
| 端口 8083 | 未被占用 |
| 防火墙 | 允许 8083 端口入站（如需要外部访问） |

### 3.2 权限要求

- Windows 管理员权限（创建目录、修改 Nginx 配置）；
- Nginx 配置目录写入权限；
- 部署目录读写权限。

## 4. 首次部署步骤

### 步骤 1：创建部署目录

在 Windows Server 上以管理员身份打开 PowerShell：

```powershell
New-Item -ItemType Directory -Path "C:\digifluidic-brochure" -Force
New-Item -ItemType Directory -Path "C:\digifluidic-brochure\dist" -Force
New-Item -ItemType Directory -Path "C:\digifluidic-brochure\backup" -Force
```

### 步骤 2：准备构建产物

在本地 Mac 上执行：

```bash
npm run build
```

确认 `dist/` 目录已生成，包含 `index.html` 和 `assets/`。

### 步骤 3：上传构建产物

将本地 `dist/` 目录内容上传到服务器的 `C:\digifluidic-brochure\dist\`。

可选上传方式：
- SCP/SFTP；
- 远程桌面文件传输；
- 云存储中转；
- Git 拉取 + 服务器端构建。

### 步骤 4：备份现有 Nginx 配置

```powershell
copy C:\nginx\conf\nginx.conf C:\nginx\conf\nginx.conf.backup
```

> 注意：Nginx 安装路径以实际为准，常见路径包括 `C:\nginx\`、`C:\Program Files\nginx\` 等。

### 步骤 5：配置 Nginx

在 Nginx 配置文件中新增 server block。详见 `02_NGINX_CONFIG_SPEC.md`。

编辑 `nginx.conf`，在 `http` 块内添加：

```nginx
server {
    listen 8083;
    server_name _;

    root C:/digifluidic-brochure/dist;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }
}
```

### 步骤 6：测试 Nginx 配置

```powershell
nginx -t
```

预期输出：

```text
nginx: the configuration file C:\nginx\conf\nginx.conf syntax is ok
nginx: configuration file C:\nginx\conf\nginx.conf test is successful
```

### 步骤 7：重载 Nginx

```powershell
nginx -s reload
```

### 步骤 8：配置防火墙（如需要）

如果服务器有 Windows 防火墙且需要外部访问 8083 端口：

```powershell
New-NetFirewallRule -DisplayName "Digifluidic Brochure 8083" -Direction Inbound -Protocol TCP -LocalPort 8083 -Action Allow
```

### 步骤 9：验证部署

在浏览器中访问：

```text
http://服务器IP:8083
```

检查：
1. 页面正常加载；
2. 封面页显示正确；
3. 各章节内容完整；
4. 合规声明可见；
5. 浏览器打印预览正常。

## 5. 更新部署步骤

### 步骤 1：本地构建新版本

```bash
npm run build
```

### 步骤 2：备份当前版本

在服务器上：

```powershell
# 备份当前 dist
$timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
Copy-Item -Path "C:\digifluidic-brochure\dist" -Destination "C:\digifluidic-brochure\backup\dist_$timestamp" -Recurse
```

### 步骤 3：替换构建产物

将新版本 `dist/` 内容上传并覆盖 `C:\digifluidic-brochure\dist\`。

建议先删除旧内容再复制新内容，避免残留旧文件：

```powershell
Remove-Item -Path "C:\digifluidic-brochure\dist\*" -Recurse -Force
# 然后将新文件复制到 dist/
```

### 步骤 4：重载 Nginx

```powershell
nginx -s reload
```

> 注意：仅替换静态文件不需要重启 Nginx，但如果更新了 Nginx 配置（如缓存策略），则需要 reload。

### 步骤 5：验证更新

1. 浏览器硬刷新（`Ctrl+Shift+R`）访问页面；
2. 检查更新内容是否正确；
3. 检查 PDF 导出是否正常。

## 6. 文件权限

确保 Nginx 工作进程对部署目录有读取权限：

```powershell
# 查看 Nginx 运行用户
Get-Process nginx -IncludeUserName

# 如需要，赋予读取权限
icacls "C:\digifluidic-brochure\dist" /grant "Users:(RX)" /T
```

## 7. Nginx 常用命令（Windows）

| 命令 | 说明 |
|---|---|
| `nginx -t` | 测试配置文件语法 |
| `nginx -s reload` | 重载配置（不中断服务） |
| `nginx -s stop` | 快速停止 |
| `nginx -s quit` | 优雅停止 |
| `nginx -v` | 查看版本 |
| `start nginx` | 启动 Nginx |

## 8. 故障排查

### 8.1 页面 404

- 检查 `root` 路径是否正确（Windows 使用正斜杠 `/`）；
- 检查 `dist/index.html` 是否存在；
- 检查 `try_files` 配置。

### 8.2 端口无法访问

- 检查防火墙是否开放 8083 端口；
- 检查 `netstat -ano | findstr :8083` 确认 Nginx 正在监听；
- 检查是否使用了 `localhost` 而非服务器 IP。

### 8.3 Nginx 启动失败

- 查看 Nginx 错误日志：`C:\nginx\logs\error.log`；
- 检查配置文件语法：`nginx -t`；
- 检查端口是否被占用。

### 8.4 页面样式丢失

- 检查 `index.html` 中资源引用路径是否正确；
- 检查 `vite.config.ts` 中 `base` 配置（应为 `'/'`）；
- 检查 Nginx `location /assets/` 配置。

## 9. 当前阶段不纳入

1. HTTPS/SSL 证书配置；
2. 域名绑定；
3. CDN 配置；
4. Gzip 压缩（Nginx 默认通常已启用）；
5. 访问日志分析；
6. 限流配置。

## 10. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 部署过程中断已有服务 | 操作前备份 Nginx 配置，仅新增 server block |
| 旧文件残留导致异常 | 更新时先删除 dist/ 内容再复制新文件 |
| 端口冲突 | 首次部署前确认 8083 未被占用 |
| 权限不足 | 使用管理员权限执行目录创建和 Nginx 操作 |

## 11. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_DEPLOYMENT_OVERVIEW.md` | 上位文档，本文件细化操作步骤 |
| `02_NGINX_CONFIG_SPEC.md` | Nginx 配置详细规范 |
| `03_PORT_MATRIX.md` | 端口占用情况 |
| `04_DEPLOY_PS1_SPEC.md` | 自动化部署脚本规范 |
| `docs/08_operations/02_ROLLBACK_GUIDE.md` | 部署失败回滚流程 |

## 12. 后续维护规则

1. Nginx 路径或版本变化后更新本文件中的命令；
2. 新增部署步骤或检查项后补充到对应章节；
3. 故障排查经验积累后追加到第 8 节。
