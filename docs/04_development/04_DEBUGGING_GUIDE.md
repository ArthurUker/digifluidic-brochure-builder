# 04_DEBUGGING_GUIDE.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 调试指南 |
| 文件路径 | `docs/04_development/04_DEBUGGING_GUIDE.md` |
| 所属目录 | `docs/04_development/` |
| 文档类型 | 调试指南文档 |
| 适用范围 | 开发过程中的常见问题排查和调试方法 |
| 当前版本 | v0.1 |
| 维护方式 | 随新问题发现和解决方案积累持续更新 |

## 2. 文档目的与适用范围

本文件用于：

1. 列出开发过程中常见的问题和解决方案；
2. 提供系统化的调试步骤；
3. 帮助开发者快速定位和解决问题。

本文件不替代：

1. 开发指南（`00_DEVELOPMENT_GUIDE.md`）；
2. 本地预览指南（`01_LOCAL_PREVIEW.md`）；
3. 运维常见问题（`docs/08_operations/01_COMMON_ISSUES.md`）。

## 3. 通用调试步骤

遇到问题时按以下顺序排查：

1. **查看终端输出**：检查 Vite 开发服务器或构建命令的终端输出；
2. **查看浏览器控制台**：`F12` 打开 DevTools → Console 标签页；
3. **检查网络请求**：DevTools → Network 标签页，确认资源加载状态；
4. **检查元素**：DevTools → Elements 标签页，确认 DOM 结构和 CSS 样式；
5. **清除缓存**：浏览器硬刷新（`Cmd+Shift+R` 或 `Ctrl+Shift+R`）；
6. **重启开发服务器**：`Ctrl+C` 停止 → `npm run dev` 重启；
7. **删除 node_modules 重装**：`rm -rf node_modules && npm install`。

## 4. 开发服务器问题

### 4.1 开发服务器启动失败

**现象**：`npm run dev` 报错或无法访问 `localhost:5173`。

**排查步骤**：
1. 检查 Node.js 版本：`node -v`（需要 18.x+）；
2. 检查依赖是否安装：`ls node_modules/vite`；
3. 重新安装依赖：`rm -rf node_modules && npm install`；
4. 检查端口是否被占用：`lsof -i :5173`；
5. 如端口被占用，Vite 会自动尝试下一个端口。

### 4.2 热更新不生效

**现象**：修改代码后浏览器不自动刷新。

**排查步骤**：
1. 确认文件保存在 `src/` 目录下；
2. 检查 Vite 配置中 `server.watch` 是否正常；
3. 手动刷新浏览器；
4. 重启开发服务器。

### 4.3 页面白屏

**现象**：浏览器显示空白页面。

**排查步骤**：
1. 打开浏览器控制台，查看 JavaScript 错误；
2. 检查 `index.html` 中 `<div id="root">` 是否存在；
3. 检查 `src/main.tsx` 中 `document.getElementById('root')` 是否正确；
4. 检查 React 组件是否有渲染错误。

## 5. TypeScript 问题

### 5.1 类型错误

**现象**：`tsc --noEmit` 或编辑器中显示类型错误。

**排查步骤**：
1. 检查 `tsconfig.json` 配置是否正确；
2. 确认导入路径是否正确（大小写敏感）；
3. 检查类型定义文件 `src/types/` 是否存在；
4. 运行 `npm run typecheck` 查看完整错误列表。

**常见错误**：
- `Cannot find module`：检查文件路径和大小写；
- `Property does not exist on type`：检查接口定义是否包含该属性；
- `Type 'X' is not assignable to type 'Y'`：检查数据文件中的值是否符合类型定义。

### 5.2 导入路径问题

**现象**：编辑器提示找不到模块。

**解决**：
- 使用相对路径导入：`import { BrochureData } from '../types/brochure'`；
- 确认文件扩展名正确（`.ts`、`.tsx`）；
- 检查 `tsconfig.json` 中的 `paths` 别名配置（如有）。

## 6. Tailwind CSS 问题

### 6.1 样式不生效

**现象**：Tailwind 类名写了但样式没应用。

**排查步骤**：
1. 检查 `tailwind.config.js` 的 `content` 路径是否包含所有源码文件：
   ```javascript
   content: [
     './index.html',
     './src/**/*.{ts,tsx}',
   ],
   ```
2. 检查 `src/styles/index.css` 是否包含 Tailwind 指令：
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```
3. 重启开发服务器（Tailwind JIT 引擎需要重新扫描）；
4. 确认类名拼写正确（Tailwind 类名区分大小写）。

### 6.2 自定义颜色不生效

**排查步骤**：
1. 检查 `tailwind.config.js` 中 `theme.extend.colors` 配置；
2. 使用完全限定类名，如 `bg-brand-500`、`text-brand-700`；
3. 重启开发服务器。

### 6.3 打印样式不生效

**排查步骤**：
1. 确认 `print:` 前缀类名正确；
2. 确认 `print.css` 已在 `src/main.tsx` 中通过 `import './styles/print.css'` 引入；
3. 检查 `@media print` 规则是否被覆盖；
4. 使用浏览器 DevTools → Rendering → Emulate CSS media type → print 调试。

## 7. 构建问题

### 7.1 构建失败

**现象**：`npm run build` 报错。

**排查步骤**：
1. 先运行 `npm run typecheck` 确认类型无错误；
2. 检查 `vite.config.ts` 配置；
3. 检查是否有不兼容的依赖；
4. 删除 `dist/` 和 `node_modules/.vite` 缓存后重试。

### 7.2 构建产物异常

**现象**：构建成功但 `dist/` 内容异常。

**排查步骤**：
1. 检查 `dist/index.html` 是否存在；
2. 检查 `dist/assets/` 下 JS/CSS 文件是否生成；
3. 使用 `npm run preview` 验证构建产物；
4. 检查 `vite.config.ts` 的 `base` 配置（应为 `'/'`）。

## 8. 打印和 PDF 问题

### 8.1 打印预览空白

**排查步骤**：
1. 确认 `@media print` 中没有 `display: none` 误隐藏了内容；
2. 检查 `print-color-adjust: exact` 是否生效；
3. 确认页面内容在 `@media screen` 下正常显示。

### 8.2 分页位置不对

**排查步骤**：
1. 检查 `page-break-before`、`page-break-after` 是否应用；
2. 确认分页类名是否使用了 `print:` 前缀；
3. 使用固定高度或 `break-inside: avoid` 控制内容不被截断；
4. 在浏览器打印预览中逐页检查。

### 8.3 中文字体在 PDF 中显示为方块

**排查步骤**：
1. 确认 `font-family` 中包含了系统通用中文字体；
2. 确认 Playwright 运行环境安装了所需字体；
3. 使用 Web 字体（如 Google Fonts 的 Noto Sans SC）确保跨平台一致。

## 9. 调试工具推荐

### 9.1 浏览器 DevTools

- **Elements**：检查 DOM 结构和 CSS 样式；
- **Console**：查看 JavaScript 错误和日志；
- **Rendering**：模拟打印样式（Emulate CSS media type → print）；
- **Layers**：检查分页边界。

### 9.2 VS Code 调试

- 使用 VS Code 内置调试器附加到 Chrome；
- 在 `.vscode/launch.json` 中配置调试任务。

### 9.3 React DevTools

- 安装 React DevTools 浏览器扩展；
- 检查组件树和 props 传递。

## 10. 当前阶段不纳入

1. 单元测试调试；
2. Playwright 脚本调试（后续阶段补充）；
3. 远程服务器调试；
4. 性能分析工具。

## 11. 与其他文档的关系

| 相关文档 | 关系说明 |
|---|---|
| `00_DEVELOPMENT_GUIDE.md` | 开发流程参考 |
| `01_LOCAL_PREVIEW.md` | 预览相关问题 |
| `docs/06_pdf_export/03_PDF_QA_CHECKLIST.md` | PDF 输出质量检查 |
| `docs/08_operations/01_COMMON_ISSUES.md` | 部署和运维中的常见问题 |

## 12. 后续维护规则

1. 发现新的常见问题时，追加到本文件对应章节；
2. 技术栈升级后检查调试步骤是否需要更新；
3. 每次解决一个非预期问题后，评估是否值得记录到本文件。
