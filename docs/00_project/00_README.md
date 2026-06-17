# Digifluidic Brochure Builder 文档中心说明

## 1. 文档目的

本文档用于说明 `Digifluidic Brochure Builder` 项目中 `docs/` 文档体系的组织方式、阅读路径和维护规范，便于开发人员、内容维护人员、设计人员、部署运维人员以及项目交接人员快速定位所需资料。

本项目文档体系服务于 Digifluidic 对外宣传白皮书/宣传册的持续维护，包括内容建模、页面设计、PDF 导出、Windows Server 静态部署、内部评审和版本发布等环节。

本文档不是产品宣传正文，也不是根目录 `README.md` 的替代文件，而是整个 `docs/` 文档目录的入口说明。

---

## 2. 项目简介

`Digifluidic Brochure Builder` 是用于持续生成和维护 Digifluidic 对外宣传白皮书/宣传册的静态网页项目。项目目标是将公司技术平台、产品体系、应用场景、文献证据链和合规说明整理为可在线预览、可打印导出、可版本化维护的宣传材料。

| 项目 | 内容 |
|---|---|
| 公司 | 珠海市迪奇孚瑞生物科技有限公司 |
| 品牌 | Digifluidic |
| 核心设备 | VHunter Plus 全自动核酸分析仪 |
| 主要对象 | 客户、合作伙伴、政府/项目申报场景、内部评审人员 |
| 输出形式 | 网页预览 + PDF 导出 |
| 技术栈 | React + Vite + Tailwind CSS + TypeScript |
| PDF导出 | Playwright 自动导出 + Chrome 手动打印兜底 |
| 部署方式 | 构建为 `dist/` 静态文件，通过 Windows Server 上的 Nginx 托管 |
| 访问端口 | 8083 |
| 访问方式 | `http://服务器IP:8083` |
| 后端服务 | 无 |
| 数据库 | 无 |
| PM2进程 | 无 |

本项目与服务器上已有的 RDPMS、食品安全检验管理系统等业务系统相互独立，仅占用 Nginx 静态访问端口，不新增 API 服务、数据库服务或 PM2 后端进程。

---

## 3. docs 目录结构说明

```text
docs/
├── 00_project/
│   ├── 00_README.md
│   ├── 01_PRD.md
│   ├── 02_ROADMAP.md
│   └── 03_GLOSSARY.md
├── 01_architecture/
│   ├── 00_ARCHITECTURE_OVERVIEW.md
│   ├── 01_TECH_STACK.md
│   ├── 02_DIRECTORY_STRUCTURE.md
│   └── 03_ROUTE_AND_RENDERING.md
├── 02_content/
│   ├── 00_CONTENT_STRATEGY.md
│   ├── 01_CONTENT_MODEL.md
│   ├── 02_PAPER_DATA_SCHEMA.md
│   ├── 03_APPLICATION_MATRIX_SCHEMA.md
│   └── 04_COMPLIANCE_COPY.md
├── 03_design/
│   ├── 00_DESIGN_GUIDELINE.md
│   ├── 01_PAGE_LAYOUT_SPEC.md
│   ├── 02_PRINT_STYLE_SPEC.md
│   └── 03_BRAND_ASSETS_GUIDE.md
├── 04_development/
│   ├── 00_DEVELOPMENT_GUIDE.md
│   ├── 01_LOCAL_PREVIEW.md
│   ├── 02_CODE_STYLE.md
│   ├── 03_COMPONENT_SPEC.md
│   └── 04_DEBUGGING_GUIDE.md
├── 05_deployment/
│   ├── 00_DEPLOYMENT_OVERVIEW.md
│   ├── 01_WINDOWS_NGINX_DEPLOYMENT.md
│   ├── 02_NGINX_CONFIG_SPEC.md
│   ├── 03_PORT_MATRIX.md
│   └── 04_DEPLOY_PS1_SPEC.md
├── 06_pdf_export/
│   ├── 00_PDF_EXPORT_OVERVIEW.md
│   ├── 01_PLAYWRIGHT_EXPORT_SPEC.md
│   ├── 02_BROWSER_PRINT_GUIDE.md
│   └── 03_PDF_QA_CHECKLIST.md
├── 07_review_release/
│   ├── 00_INTERNAL_REVIEW_GUIDE.md
│   ├── 01_RELEASE_PROCESS.md
│   ├── 02_VERSIONING_RULES.md
│   └── 03_CHANGELOG.md
└── 08_operations/
    ├── 00_OPERATIONS_GUIDE.md
    ├── 01_COMMON_ISSUES.md
    ├── 02_ROLLBACK_GUIDE.md
    └── 03_MAINTENANCE_CHECKLIST.md
```

各目录职责如下：

| 目录 | 说明 |
|---|---|
| `00_project/` | 项目定位、需求范围、路线图、术语说明 |
| `01_architecture/` | 技术架构、技术栈、目录结构、路由与渲染方式 |
| `02_content/` | 白皮书内容策略、数据模型、论文数据结构、应用矩阵和合规文案 |
| `03_design/` | 页面设计规范、A4/PDF 版式、打印样式、品牌资产使用规则 |
| `04_development/` | 本地开发、代码风格、组件规范、调试方法 |
| `05_deployment/` | Windows Server、Nginx、8083 端口、部署脚本和端口矩阵 |
| `06_pdf_export/` | Playwright 自动导出、浏览器打印、PDF 质量检查 |
| `07_review_release/` | 内部评审、版本发布、版本号规则和变更记录 |
| `08_operations/` | 上线后运维、常见问题、回滚和维护检查清单 |

---

## 4. 推荐阅读顺序

不同角色可按以下顺序阅读：

1. **项目负责人/交接人员**  
   先阅读 `00_project/00_README.md`、`00_project/01_PRD.md`、`00_project/02_ROADMAP.md`。

2. **内容维护人员**  
   重点阅读 `02_content/`，尤其是 `01_CONTENT_MODEL.md`、`02_PAPER_DATA_SCHEMA.md` 和 `04_COMPLIANCE_COPY.md`。

3. **前端开发人员**  
   依次阅读 `01_architecture/`、`03_design/` 和 `04_development/`。

4. **设计与排版人员**  
   重点阅读 `03_design/00_DESIGN_GUIDELINE.md`、`03_design/01_PAGE_LAYOUT_SPEC.md` 和 `03_design/02_PRINT_STYLE_SPEC.md`。

5. **部署运维人员**  
   重点阅读 `05_deployment/` 和 `08_operations/`，确认 Nginx、端口、静态资源路径和回滚流程。

6. **内部评审人员**  
   重点阅读 `07_review_release/00_INTERNAL_REVIEW_GUIDE.md`，通过内网地址访问页面并反馈内容问题。

---

## 5. 与根目录 README.md 的关系

根目录 `README.md` 面向所有使用者，主要说明项目的快速启动、依赖安装、构建命令、PDF 导出命令和部署入口。

本文档 `docs/00_project/00_README.md` 面向项目维护者，主要说明 `docs/` 文档体系如何组织、如何阅读、如何维护。两者的关系如下：

| 文件 | 面向对象 | 主要内容 |
|---|---|---|
| `README.md` | 开发人员、部署人员、临时接手人员 | 快速启动、构建、导出、部署 |
| `docs/00_project/00_README.md` | 项目维护者、文档维护者、交接人员 | 文档体系、阅读顺序、维护规范 |

---

## 6. 文档维护规范

1. 所有文档统一使用 Markdown 格式。
2. 文件命名采用“编号 + 英文大写描述”的方式，例如 `01_PRD.md`。
3. 同一目录内编号应保持连续，避免随意插入无编号文件。
4. 涉及项目实际部署、端口、路径、命令的内容，应与当前代码和服务器配置保持一致。
5. 涉及宣传口径、产品性能、文献引用和合规声明的内容，应经过技术负责人或合规负责人确认。
6. 对外发布前，应至少完成内容审查、页面预览检查和 PDF 导出检查。
7. 每次重要修改后，应同步更新 `docs/07_review_release/03_CHANGELOG.md`。
8. 不应在文档中写入未公开的服务器密码、密钥、商业敏感配置或其他敏感信息。

---

## 7. 版本更新建议

建议采用以下版本管理原则：

- 小幅文案修改：更新 `03_CHANGELOG.md`，无需调整大版本号；
- 页面结构、章节顺序或 PDF 版式调整：记录为一次功能性变更；
- 部署方式、端口、目录结构或导出流程调整：应同步更新部署和运维文档；
- 对外正式版材料建议使用清晰版本号，例如 `v2026.06`；
- PDF 归档文件建议使用统一命名，例如 `Digifluidic_Brochure_customer_zh-CN_v2026.06.pdf`。

---

## 8. 合规与边界说明

本项目生成的网页和 PDF 材料用于宣传、介绍、内部评审、客户沟通和项目申报辅助，不替代产品注册文件、检测性能声明、法定说明或正式技术协议。

文献、案例和应用场景内容仅用于说明技术研究基础、应用方向和证据链，不应被表述为对具体产品性能、检测结论、注册适用范围或临床/现场应用效果的承诺。

具体产品功能、性能指标、适用范围、注册状态和商业条款，应以公司正式产品资料、注册文件、合同文件或经审批的对外材料为准。

对外发布前，建议至少经过公司内部技术、市场或合规负责人确认。文案中应避免使用“权威证明”“完全验证”“绝对领先”“保证检测”“唯一方案”等绝对化或过度承诺表述。
