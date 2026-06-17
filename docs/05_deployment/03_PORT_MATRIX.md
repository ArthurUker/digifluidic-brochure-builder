# 03_PORT_MATRIX.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 端口矩阵 |
| 文件路径 | `docs/05_deployment/03_PORT_MATRIX.md` |
| 所属目录 | `docs/05_deployment/` |
| 文档类型 | 端口管理文档 |
| 适用范围 | 服务器端口分配、冲突检测和防火墙配置 |
| 当前版本 | v0.1 |
| 维护方式 | 随服务器端口变化和系统增删持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 记录服务器上所有端口的占用情况；
2. 确保 Digifluidic Brochure Builder 的端口（8083）不与已有系统冲突；
3. 作为端口规划和防火墙配置的参考。

本文件不替代：

1. 部署概览（`00_DEPLOYMENT_OVERVIEW.md`）；
2. Windows Nginx 部署指南（`01_WINDOWS_NGINX_DEPLOYMENT.md`）。

## 3. 端口分配表

### 3.1 Digifluidic Brochure Builder

| 参数 | 值 |
|---|---|
| 服务名 | Digifluidic Brochure Builder |
| 端口 | **8083** |
| 协议 | HTTP |
| 用途 | 白皮书/宣传册 Web 访问 |
| 访问地址 | `http://服务器IP:8083` |
| 外部访问 | 是（需防火墙开放） |

### 3.2 本地开发端口

| 端口 | 用途 | 外部访问 |
|---|---|---|
| 5173 | Vite 开发服务器（`npm run dev`） | 否 |
| 4173 | Vite 预览服务器（`npm run preview`） | 否 |

### 3.3 已有系统端口（参考）

| 端口 | 系统 | 说明 |
|---|---|---|
| 80 | 可能被其他系统占用 | 默认 HTTP 端口 |
| 443 | 可能被其他系统占用 | 默认 HTTPS 端口 |
| 8080 | 可能被其他系统占用 | 常见备用 HTTP 端口 |
| [其他] | RDPMS、食品安全检验管理系统等 | 具体端口以服务器实际配置为准 |

> 注意：已有系统的端口以服务器实际配置为准。本文件仅记录已知信息，部署前应实际检查服务器端口占用情况。

## 4. 端口选择说明

### 4.1 为什么选择 8083

1. 不与常见默认端口冲突（80、443、8080、3000、5000 等）；
2. 不与已有业务系统端口冲突；
3. 在 Windows 防火墙中易于识别和管理；
4. 数字 8083 无特殊含义，仅为可用端口。

### 4.2 备选端口

如果 8083 被占用，可选用以下备选端口：

| 优先级 | 端口 | 说明 |
|---|---|---|
| 1 | 8083 | 首选 |
| 2 | 8084 | 第一备选 |
| 3 | 8090 | 第二备选 |
| 4 | 8183 | 第三备选 |

更换端口时需同步更新：
1. Nginx server block 的 `listen` 指令；
2. 防火墙规则；
3. 本文件；
4. 部署文档和运维文档中的端口引用。

## 5. 端口检查命令

### 5.1 Windows Server

```powershell
# 检查指定端口是否被占用
netstat -ano | findstr :8083

# 查看所有监听端口
netstat -ano | findstr LISTENING

# 查看端口对应的进程
netstat -ano | findstr :8083
# 记录 PID，然后：
tasklist | findstr <PID>
```

### 5.2 本地 Mac（开发环境）

```bash
# 检查端口是否被占用
lsof -i :5173
lsof -i :4173
```

## 6. 防火墙配置

### 6.1 Windows 防火墙规则

| 参数 | 值 |
|---|---|
| 规则名称 | Digifluidic Brochure 8083 |
| 方向 | 入站 |
| 协议 | TCP |
| 端口 | 8083 |
| 操作 | 允许 |

### 6.2 PowerShell 命令

```powershell
# 创建防火墙规则
New-NetFirewallRule -DisplayName "Digifluidic Brochure 8083" -Direction Inbound -Protocol TCP -LocalPort 8083 -Action Allow

# 查看规则
Get-NetFirewallRule -DisplayName "Digifluidic Brochure 8083"

# 删除规则（如需要）
Remove-NetFirewallRule -DisplayName "Digifluidic Brochure 8083"
```

### 6.3 腾讯云安全组

如果服务器在腾讯云且配置了安全组，还需在腾讯云控制台中放行 8083 端口：

1. 登录腾讯云控制台；
2. 进入云服务器 → 安全组；
3. 添加入站规则：协议 TCP，端口 8083，来源 0.0.0.0/0（或指定 IP 范围）。

## 7. 端口冲突处理

如果 8083 端口已被占用：

1. **确认占用进程**：
   ```powershell
   netstat -ano | findstr :8083
   tasklist | findstr <PID>
   ```

2. **判断是否可以释放**：
   - 如果是已知业务系统 → 不能释放，更换 Digifluidic 端口；
   - 如果是测试或临时进程 → 可协商释放。

3. **更换端口**：
   - 按第 4.2 节选择备选端口；
   - 更新 Nginx 配置；
   - 更新防火墙规则；
   - 更新所有文档中的端口引用。

## 8. 当前阶段不纳入

1. HTTPS 443 端口配置；
2. WebSocket 端口；
3. 管理后台端口；
4. 数据库端口；
5. 内部服务间通信端口。

## 9. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 端口冲突未被发现 | 部署前执行端口检查命令 |
| 防火墙未放行 | 部署后从外部网络测试访问 |
| 端口被后续新增系统占用 | 将 8083 记录到服务器端口分配表中 |
| 腾讯云安全组未配置 | 部署前检查安全组规则 |

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_DEPLOYMENT_OVERVIEW.md` | 端口规划的上位说明 |
| `01_WINDOWS_NGINX_DEPLOYMENT.md` | 部署操作中涉及端口配置 |
| `02_NGINX_CONFIG_SPEC.md` | Nginx 配置中引用端口号 |
| `docs/08_operations/00_OPERATIONS_GUIDE.md` | 运维中的端口检查 |

## 11. 后续维护规则

1. 服务器新增系统时，更新本文件的端口占用记录；
2. 更换端口时，同步更新所有引用该端口的文档；
3. 定期（建议每季度）检查端口占用情况。
