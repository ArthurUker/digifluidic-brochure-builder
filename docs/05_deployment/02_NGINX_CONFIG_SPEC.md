# 02_NGINX_CONFIG_SPEC.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder Nginx 配置规范 |
| 文件路径 | `docs/05_deployment/02_NGINX_CONFIG_SPEC.md` |
| 所属目录 | `docs/05_deployment/` |
| 文档类型 | 配置规范文档 |
| 适用范围 | Nginx server block 配置、静态资源缓存、安全头部和日志 |
| 当前版本 | v0.1 |
| 维护方式 | 随 Nginx 版本升级和安全需求变化持续维护 |

## 2. 文档目的与适用范围

本文件用于：

1. 定义 Digifluidic Brochure Builder 的 Nginx server block 标准配置；
2. 约束配置修改的安全操作流程；
3. 作为部署和运维时的配置参考。

本文件不替代：

1. 部署概览（`00_DEPLOYMENT_OVERVIEW.md`）；
2. Windows Nginx 部署指南（`01_WINDOWS_NGINX_DEPLOYMENT.md`）；
3. Nginx 官方文档。

## 3. Server Block 标准配置

### 3.1 基础配置

```nginx
server {
    listen 8083;
    server_name _;

    # WebRoot 路径（Windows 使用正斜杠）
    root C:/digifluidic-brochure/dist;
    index index.html;

    # 字符集
    charset utf-8;

    # 主 location
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # 禁止访问隐藏文件
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

### 3.2 配置说明

| 指令 | 值 | 说明 |
|---|---|---|
| `listen` | `8083` | 监听端口，不与其他系统冲突 |
| `server_name` | `_` | 匹配所有主机名（当前使用 IP 访问） |
| `root` | `C:/digifluidic-brochure/dist` | WebRoot 路径，Windows 使用正斜杠 |
| `index` | `index.html` | 默认索引文件 |
| `charset` | `utf-8` | 中文字符集 |
| `try_files` | `$uri $uri/ /index.html` | SPA 回退，所有路由指向 index.html |
| `expires` | `30d` | 静态资源缓存 30 天 |

## 4. 扩展配置（可选）

### 4.1 Gzip 压缩

如果服务器未在 http 块中全局启用 Gzip，可在 server 块中添加：

```nginx
server {
    # ... 基础配置 ...

    gzip on;
    gzip_types text/plain text/css application/json application/javascript text/xml application/xml text/javascript;
    gzip_min_length 1000;
    gzip_vary on;
}
```

### 4.2 安全头部

```nginx
server {
    # ... 基础配置 ...

    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
}
```

### 4.3 访问日志

```nginx
server {
    # ... 基础配置 ...

    access_log C:/nginx/logs/digifluidic-brochure.access.log;
    error_log C:/nginx/logs/digifluidic-brochure.error.log;
}
```

## 5. 配置修改安全流程

每次修改 Nginx 配置必须遵循以下流程：

```
1. 备份当前配置
   copy nginx.conf nginx.conf.backup_YYYYMMDD

2. 编辑配置
   在 http 块中添加或修改 server block

3. 测试配置
   nginx -t

4. 如测试通过 → 重载
   nginx -s reload

5. 如测试失败 → 检查错误信息，修正后重新测试

6. 验证
   浏览器访问确认页面正常
```

**严禁**：不测试直接 reload，可能导致 Nginx 无法启动或已有服务中断。

## 6. 已有系统保护规则

### 6.1 绝对禁止

1. 修改已有系统的 server block；
2. 修改已有系统的端口号；
3. 修改 http 块的全局配置（除非确认不影响已有系统）；
4. 删除或注释已有配置。

### 6.2 操作原则

1. 仅新增，不修改，不删除；
2. 新增的 server block 放在已有配置之后；
3. 使用独立端口（8083）；
4. 使用独立 root 路径。

## 7. Windows Nginx 路径注意事项

| 注意事项 | 说明 |
|---|---|
| 路径分隔符 | 使用正斜杠 `/`，不使用反斜杠 `\` |
| 盘符 | 使用大写盘符，如 `C:/` |
| 路径引号 | 路径值不需要引号（除非包含空格） |
| 中文路径 | 避免在路径中使用中文 |
| 文件权限 | 确保 Nginx 工作进程对 `dist/` 有读取权限 |

```nginx
# ✅ 正确
root C:/digifluidic-brochure/dist;

# ❌ 错误
root C:\digifluidic-brochure\dist;
root "C:/digifluidic-brochure/dist";
```

## 8. 完整配置示例

```nginx
# ============================================
# Digifluidic Brochure Builder
# 端口: 8083
# WebRoot: C:/digifluidic-brochure/dist
# 最后更新: 2026.06
# ============================================

server {
    listen 8083;
    server_name _;

    root C:/digifluidic-brochure/dist;
    index index.html;
    charset utf-8;

    # 访问日志（可选）
    # access_log C:/nginx/logs/digifluidic-brochure.access.log;
    # error_log C:/nginx/logs/digifluidic-brochure.error.log;

    # 安全头部（可选）
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;

    # 主 location
    location / {
        try_files $uri $uri/ /index.html;
    }

    # 静态资源缓存
    location /assets/ {
        expires 30d;
        add_header Cache-Control "public, immutable";
    }

    # 禁止访问隐藏文件
    location ~ /\. {
        deny all;
        access_log off;
        log_not_found off;
    }
}
```

## 9. 配置验证清单

每次修改 Nginx 配置后检查：

| 检查项 | 命令/方法 |
|---|---|
| 语法正确 | `nginx -t` |
| Nginx 正常运行 | `Get-Process nginx`（PowerShell） |
| 8083 端口监听 | `netstat -ano \| findstr :8083` |
| 页面可访问 | 浏览器访问 `http://服务器IP:8083` |
| 已有系统正常 | 浏览器访问已有系统的地址和端口 |

## 10. 当前阶段不纳入

1. HTTPS/SSL 配置；
2. HTTP/2 配置；
3. 反向代理配置；
4. 负载均衡配置；
5. 限流配置；
6. IP 白名单/黑名单；
7. CORS 配置。

## 11. 风险与控制措施

| 风险 | 控制措施 |
|---|---|
| 配置错误导致 Nginx 无法启动 | 修改后必须执行 `nginx -t`，通过后再 reload |
| 路径错误导致 404 | Windows 路径使用正斜杠，确认 dist/ 目录存在 |
| 影响已有系统 | 仅新增 server block，不修改已有配置 |
| 缓存导致更新不生效 | 静态资源使用内容哈希命名（Vite 默认），或手动清除浏览器缓存 |

## 12. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_DEPLOYMENT_OVERVIEW.md` | 上位文档，本文件细化 Nginx 配置部分 |
| `01_WINDOWS_NGINX_DEPLOYMENT.md` | 部署操作中引用本文件的配置 |
| `03_PORT_MATRIX.md` | 端口 8083 的上下文说明 |
| `docs/01_architecture/00_ARCHITECTURE_OVERVIEW.md` | Nginx 在整体架构中的位置 |

## 13. 后续维护规则

1. Nginx 版本升级后检查配置兼容性；
2. 新增安全头部或性能优化配置时，更新本文件；
3. 如未来绑定域名或启用 HTTPS，补充对应配置。
