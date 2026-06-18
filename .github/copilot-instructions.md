# Digifluidic Brochure Builder — Copilot 协作规范

## 代码注释语言规范

本项目所有代码注释必须使用**中文**。

- 变量名、函数名、接口名、类型名等标识符保持英文
- 所有 `//`、`/* */`、`/** */` 注释内容必须为中文
- JSDoc 中 `@param`、`@returns`、`@description` 等标签后的说明文字必须为中文
- 禁止使用英文注释
- 如修改已有文件，应将已存在的英文注释同步改为中文

## 项目架构约束

- 本项目为纯前端静态站点，禁止引入后端、数据库、登录系统、CMS、PM2、Docker、Kubernetes
- 技术栈：React + Vite + TypeScript + Tailwind CSS + Playwright
- 所有内容数据集中在 `src/data/brochure.ts`，组件通过 props 读取，不在组件内硬编码文案
- 组件树层级不超过 3 层

## 合规约束

- 不得将论文证据链直接表述为具体产品性能承诺
- 不得使用"权威证明""完全验证""绝对领先""保证检测"等绝对化表述
- 合规声明不得省略，`disclaimer` 字段为必填
