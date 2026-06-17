# 00_DEPLOYMENT_OVERVIEW.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 部署概览 |
| 文件路径 | `docs/05_deployment/00_DEPLOYMENT_OVERVIEW.md` |
| 所属目录 | `docs/05_deployment/` |
| 文档类型 | 部署概览基准文档 |
| 适用范围 | 部署架构、部署流程、端口规划和部署脚本 |
| 当前版本 | v0.1 |
| 维护方式 | 随部署目标环境变化和部署流程优化持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 统一部署架构和部署流程认知；
2. 说明部署目标环境和隔离原则；
3. 作为 Nginx 配置、端口矩阵和部署脚本的上位说明；
4. 约束部署操作不得影响已有业务系统。

本文件不替代：

1. Windows Nginx 部署文档（`01_WINDOWS_NGINX_DEPLOYMENT.md`）；
2. Nginx 配置规范（`02_NGINX_CONFIG_SPEC.md`）；
3. 端口矩阵（`03_PORT_MATRIX.md`）；
4. 部署脚本规范（`04_DEPLOY_PS1_SPEC.md`）。

## 3. 部署架构

### 3.1 总体架构

```text
用户浏览器
  ↓ HTTP :8083
Windows Server
  └── Nginx
       ├── server block (已有系统 A, 端口 A)
       ├── server block (已有系统 B, 端口 B)
       └── server block (Digifluidic, :8083)    ← 本系统
            └── root C:/digifluidic-brochure/dist
                 ├── index.html
                 └── assets/
```

### 3.2 部署环境

| 参数 | 值 |
|---|---|
| 操作系统 | Windows Server（腾讯云） |
| Web 服务器 | Nginx（已安装，服务于多个系统） |
| 部署目录 | `C:\digifluidic-brochure` |
| WebRoot | `C:\digifluidic-brochure\dist` |
| 访问端口 | `8083` |
| 访问地址 | `http://服务器IP:8083` |
| 构建方式 | 本地构建 → 上传 dist → 或服务器端构建 |

### 3.3 隔离原则

1. 使用独立端口（8083），不占用已有系统端口；
2. 使用独立 server block，不修改已有系统配置；
3. 使用独立部署目录，不与已有系统共用文件；
4. 不引入 PM2 管理本系统（纯静态站点，Nginx 直接托管）；
5. 不影响 RDPMS、食品安全检验管理系统等已有服务。

## 4. 部署流程

### 4.1 推荐部署流程

```
本地开发 → npm run build → 生成 dist/
  ↓
上传 dist/ 到服务器（或服务器端拉取代码构建）
  ↓
备份旧版本 dist/
  ↓
替换为新版本 dist/
  ↓
nginx -t 测试配置
  ↓
nginx -s reload 重载配置
  ↓
浏览器访问 http://服务器IP:8083 验证
```

### 4.2 首次部署额外步骤

1. 在服务器上创建部署目录 `C:\digifluidic-brochure`；
2. 在 Nginx 中新增 8083 端口的 server block；
3. 配置 Windows 防火墙允许 8083 端口入站；
4. 测试 Nginx 配置并 reload。

## 5. 部署方式选择

### 5.1 方式一：本地构建 + 上传 dist（推荐）

1. 在本地 Mac 执行 `npm run build`；
2. 将 `dist/` 目录打包上传到服务器；
3. 在服务器上解压替换 `C:\digifluidic-brochure\dist`。

**优点**：服务器不需要 Node.js 环境，部署简单。

### 5.2 方式二：服务器端拉取代码构建（备用）

1. 在服务器上 `git pull` 拉取最新代码；
2. 在服务器上执行 `npm install && npm run build`；
3. 构建产物自动生成到 `dist/`。

**前提**：服务器需安装 Node.js 18+ 和 Git。

> 注意：服务器生产环境不运行 Node.js，不运行 `npm run preview`，不使用 PM2。方式二仅在服务器已安装 Node.js 时作为备用方案。推荐使用方式一（本地构建 + 上传 dist）。

## 6. 部署前检查清单

| 检查项 | 说明 |
|---|---|
| 构建成功 | `npm run build` 无错误 |
| dist/ 完整 | `dist/index.html` 和 `dist/assets/` 存在 |
| 类型检查通过 | `npm run typecheck` 无错误 |
| 本地预览正常 | `npm run preview` 页面正常 |
| PDF 导出正常 | `npm run export:pdf` 生成正确 PDF |
| 合规声明完整 | PDF 和 Web 预览中声明清晰可读 |

## 7. 回滚方案

如部署后发现问题：

1. 恢复备份的旧版本 `dist/`；
2. `nginx -s reload`；
3. 验证回滚后页面正常。

详细回滚流程见 `02_ROLLBACK_GUIDE.md`（`docs/08_operations/`）。

## 8. 当前阶段不纳入

1. CI/CD 自动部署流水线；
2. Docker 部署；
3. Kubernetes 部署；
4. 蓝绿部署或灰度发布；
5. 负载均衡；
6. HTTPS/SSL 配置（如需要可后续补充）；
7. CDN 加速；
8. 域名绑定（当前使用 IP:端口 访问）。

## 9. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 端口冲突 | 部署前检查 8083 端口是否被占用，`netstat -ano \| findstr :8083` |
| 影响已有系统 | 仅新增 server block，不修改已有配置；操作前备份 Nginx 配置 |
| 构建产物不完整 | 部署前按第 6 节清单逐项检查 |
| Nginx 配置错误导致服务中断 | 修改后必须执行 `nginx -t` 测试，通过后再 reload |
| 部署后页面无法访问 | 检查防火墙、Nginx 错误日志、文件权限 |

## 10. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `01_WINDOWS_NGINX_DEPLOYMENT.md` | 详细部署步骤 |
| `02_NGINX_CONFIG_SPEC.md` | Nginx 配置详细规范 |
| `03_PORT_MATRIX.md` | 服务器端口使用情况 |
| `04_DEPLOY_PS1_SPEC.md` | 部署脚本规范 |
| `docs/01_architecture/00_ARCHITECTURE_OVERVIEW.md` | 部署架构的上位说明 |
| `docs/08_operations/02_ROLLBACK_GUIDE.md` | 部署失败后的回滚流程 |

## 11. 后续维护规则

1. 部署流程变更后同步更新本文件；
2. 新增部署方式后在第 5 节补充说明；
3. 部署前检查清单根据实际经验持续完善。
