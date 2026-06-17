# Digifluidic Brochure Builder 项目上下文
## 0. 文件用途
本文件是 `Digifluidic Brochure Builder` 项目的上下文锚点文件，用于在不同对话、不同开发阶段和不同协作会话之间快速恢复项目状态。
本文件不是正式对外宣传材料，也不是产品注册资料，而是项目协作、开发、文档编写和上下文管理的内部参考文件。
后续如果开启新的 AI 协作对话，可将本文件全文粘贴给助手，并说明“请基于该上下文继续协作”。
---
## 1. 项目基本信息
| 项目 | 内容 |
|---|---|
| 项目名称 | Digifluidic Brochure Builder |
| 当前本地目录 | `Digifluidic_commercial promotion` |
| 公司 | 珠海市迪奇孚瑞生物科技有限公司 |
| 英文公司名 | Zhuhai Digifluidic Bio-tech Co., Ltd. |
| 品牌 | Digifluidic |
| 核心设备 | VHunter Plus 全自动核酸分析仪 |
| 材料类型 | 对外宣传白皮书 / 宣传册 / 技术应用材料 |
| 主要输出 | 网页预览 + PDF 导出 |
| 当前开发方式 | 本地 VS Code + Monica 扩展辅助写入，Mac 终端用于检查、Git、npm、构建和部署 |
| 当前 AI 协作方式 | 助手提供文件生成/修改 Prompt，用户交给 VS Code Monica 扩展执行，生成后再由助手审阅 |
---
## 2. 项目总体目标
本项目用于持续生成和维护 Digifluidic 对外宣传白皮书/宣传册，将公司技术平台、产品体系、应用场景、论文证据链和合规说明整理为可在线预览、可打印导出、可版本化维护的宣传材料。
项目希望解决以下问题：
1. 将已有科研论文、技术积累和产品能力转化为更易理解的商业传播材料；
2. 建立可持续维护的宣传材料生成系统，而不是一次性 PPT 或 Word 文件；
3. 统一网页展示和 PDF 输出口径；
4. 支持面向客户、合作伙伴、监管/项目申报、内部评审等不同场景的材料复用；
5. 通过结构化内容和组件化页面降低后续更新成本；
6. 在宣传表达中保持合规边界，避免夸大产品性能或混淆科研证据与注册声明。
---
## 3. 目标受众与使用场景
### 3.1 目标受众
本项目生成的材料主要面向以下对象：
| 受众类型 | 典型对象 | 关注重点 |
|---|---|---|
| 医疗与临床相关方 | 医院、疾控中心、第三方检测机构 | 自动化核酸检测能力、样本到结果流程、检测通量、应用场景 |
| 食品安全与监管相关方 | 食品安全机构、海关、市场监管、企业质控部门 | 食源性病原体检测、现场检测、快速筛查、平台适配性 |
| 公共卫生与应急场景 | 疾控、基层检测、应急筛查单位 | 多病原体综合检测、自动化、便携化、快速响应 |
| 科研与产业合作方 | 高校、研究院所、农业/兽医机构、产业合作伙伴 | 微流控平台能力、方法学扩展、芯片开发和应用转化 |
| 政府/项目申报场景 | 项目评审专家、政府主管部门、产业园区 | 技术基础、论文证据链、产品化路径、应用价值 |
| 内部评审人员 | 公司技术、市场、管理、合规相关人员 | 宣传口径、内容准确性、页面质量、发布风险 |
### 3.2 使用场景
本项目材料可用于：
1. 客户初次介绍；
2. 展会或路演前材料准备；
3. 合作伙伴沟通；
4. 政府项目、基金、平台建设等申报材料辅助；
5. 内部产品培训；
6. 技术方案和商业方案融合展示；
7. 对外 PDF 归档；
8. 后续多语言宣传材料扩展。
---
## 4. 科研论文与技术证据链背景
### 4.1 总体情况
Digifluidic 核心技术和团队技术积累由 2012–2025 年期间约 24 篇关键论文支撑，覆盖高影响力 SCI 期刊和中文核心期刊。
这些论文构成 VHunter Plus 自动化核酸分析仪及相关微流控芯片的技术证据链，主要涉及：
- 数字微流控；
- 通道-数字混合微流控；
- LAMP；
- RT-qPCR；
- 多重 PCR；
- 样本到结果检测系统；
- 食源性病原体检测；
- 呼吸道病原体检测；
- 临床 POCT；
- 电化学生物传感；
- 单细胞操控与培养；
- 微流控液滴操控基础技术；
- 电极寿命、液滴速度、介电层和材料工艺优化。
### 4.2 食源性病原体检测方向
代表性技术积累包括：
1. 基于数字微流控芯片的实时 LAMP 食源性病原体多重检测；
2. 通道-数字混合微流控平台用于现场多重检测；
3. 比色 LAMP 现场可视化诊断策略。
该方向适合在白皮书中转化为“食品安全快速检测”和“现场多病原体筛查”应用板块。
### 4.3 呼吸道病原体检测方向
代表性技术积累包括：
1. 数字微流控平台上的多重呼吸道病原体 RT-qPCR 检测；
2. 宏通道到数字微流控平台用于综合征式呼吸道病原体自动识别；
3. 样本到结果的多重 PCR 呼吸道感染病原体检测系统。
该方向适合在白皮书中转化为“呼吸道感染综合检测”“公共卫生应急检测”和“样本到结果自动化检测”板块。
### 4.4 临床评价与专项检测方向
代表性技术积累包括：
1. 基于数字微流控的 SARS-CoV-2 与甲/乙型流感 POCT 平台临床评价；
2. HPV-16 电化学 DNA 生物传感器；
3. 微流控辅助电穿孔系统；
4. 特定病原体和专病方向检测拓展。
该方向适合在白皮书中作为“临床 POCT 拓展能力”和“专项检测技术储备”进行呈现，但需要注意区分科研论文结果、临床评价结果和正式注册产品声明。
### 4.5 微流控底层技术方向
代表性技术积累包括：
1. 基于 3D microblade 结构的液滴精确分裂；
2. 卫星液滴开启/关闭控制与灵活样本递送；
3. 单细胞培养和捕获微结构；
4. 液滴速度与电极寿命优化；
5. 多介电层粘附促进和器件可靠性优化。
该方向适合在白皮书中作为“平台底层技术基础”“微流控工程能力”和“芯片设计能力”进行呈现。
---
## 5. 商业宣传白皮书定位
### 5.1 建议材料定位
建议将宣传材料定位为：
```text
产品文献应用与技术验证白皮书
```
或：
```text
Digifluidic VHunter Plus 微流控核酸检测平台应用白皮书
```
该定位的核心逻辑是：
1. 不仅展示产品参数；
2. 不仅堆砌论文列表；
3. 而是将科研证据、平台能力、应用场景和产品生态整合为面向市场的可信说明材料。
### 5.2 内容主线
建议白皮书采用以下主线：
1. 公司与平台简介；
2. VHunter Plus 自动化核酸分析仪；
3. 微流控芯片与试剂耗材体系；
4. 技术路线：LAMP、RT-qPCR、多重 PCR、电化学传感等；
5. 应用场景：食品安全、呼吸道病原体、公共卫生、临床 POCT、专项检测；
6. 论文证据链；
7. 平台优势；
8. 应用矩阵；
9. 合规说明；
10. 联系方式或合作入口。
### 5.3 产品生态
当前宣传材料应围绕以下产品生态组织：
| 类别 | 内容 |
|---|---|
| 核心硬件 | VHunter Plus 全自动核酸分析仪 |
| 耗材 | 微流控核酸检测芯片 |
| 应用芯片 | 食源性病原体芯片、呼吸道病原体芯片、SARS-CoV-2/流感相关芯片、公共卫生应急多病原体芯片等 |
| 方法学 | LAMP、RT-qPCR、多重 PCR、电化学传感 |
| 输出形式 | 自动化检测流程、结果展示、网页宣传、PDF 材料 |
---
## 6. 应用矩阵草案
白皮书中可设置应用矩阵，将论文证据链与产品/应用场景对应起来。
| 应用方向 | 产品/材料示例 | 技术路线 | 表达重点 |
|---|---|---|---|
| 食品安全 | 食源性病原体检测芯片 | LAMP / 多重检测 | 现场快速筛查、多靶标检测、食品安全场景适配 |
| 呼吸道病原体 | 呼吸道病原体检测芯片 | RT-qPCR / 多重 PCR | 综合征式检测、自动化识别、多病原体覆盖 |
| 临床 POCT | SARS-CoV-2 / 流感相关检测方案 | 样本到结果 POCT | 自动化、快速、近患者检测潜力 |
| 公共卫生 | 多病原体应急检测芯片 | 自动化综合检测 | 应急响应、基层检测、公共卫生监测 |
| 专项检测 | HPV / 单细胞 / 电化学相关技术储备 | 电化学传感 / 3D 培养 / 微流控操作 | 平台拓展性、方法学储备、科研转化潜力 |
注意：上述矩阵是宣传材料结构草案，不代表所有方向均已有正式注册产品。具体产品名称、注册状态和适用范围需以公司正式资料为准。
---
## 7. 技术实现方案
### 7.1 前端技术栈
项目采用现代前端静态站点方案：
| 模块 | 技术 |
|---|---|
| 构建工具 | Vite |
| 前端框架 | React |
| 类型系统 | TypeScript |
| 样式 | Tailwind CSS |
| PDF 自动导出 | Playwright |
| 手动 PDF 兜底 | Chrome 浏览器打印 |
| 部署 | Nginx 静态托管 |
| 构建产物 | `dist/` |
### 7.2 项目架构定位
本项目是纯前端静态网页项目。
明确边界：
- 无后端服务；
- 无数据库；
- 不使用 PM2；
- 不需要登录系统；
- 不需要 CMS；
- 不需要管理后台；
- 不需要 Docker；
- 不需要 Kubernetes；
- 不新增 API 服务；
- 不影响服务器上已有系统。
### 7.3 推荐内容维护方式
建议后续将宣传册内容集中维护在结构化数据文件中，例如：
```text
src/content/zh-CN.json
```
或：
```text
src/data/brochure.ts
```
建议优先使用 TypeScript 数据文件，便于类型约束和组件调用；如后续需要多语言或非开发人员维护内容，再考虑 JSON 化或 CMS 化。
当前阶段不引入 CMS。
---
## 8. 部署约束
### 8.1 服务器环境
部署环境为腾讯云 Windows Server。
服务器上已经存在其他业务系统，例如：
- RDPMS 系统；
- 食品安全检验管理系统；
- 其他可能通过 Nginx 或 PM2 运行的服务。
本项目必须保持独立，不应影响已有系统。
### 8.2 推荐部署方式
推荐部署目录：
```text
C:\digifluidic-brochure
```
推荐 WebRoot：
```text
C:\digifluidic-brochure\dist
```
推荐访问端口：
```text
8083
```
推荐访问地址：
```text
http://服务器IP:8083
```

> 路径格式说明：以上 `C:\...` 使用反斜杠是 Windows 文件系统（PowerShell/CMD）中的标准路径写法。Nginx 配置中必须使用正斜杠（`C:/...`），见 §8.3。

### 8.3 Nginx 配置原则
Nginx 应单独增加一个 `server` block：
```nginx
server {
    listen 8083;
    server_name _;
    root C:/digifluidic-brochure/dist;
    index index.html;
    location / {
        try_files $uri $uri/ /index.html;
    }
}
```
注意：
1. 如项目使用 React Router，需保留 `try_files $uri $uri/ /index.html`；
2. 如项目最终只有单页无前端路由，也可保留该配置；
3. 不应修改已有系统的端口和 server block；
4. 修改 Nginx 后必须先测试配置再 reload；
5. Nginx 配置中 Windows 路径必须使用正斜杠（`C:/...`），不能使用反斜杠（`C:\...`）。
### 8.4 部署脚本方向
后续可编写 `deploy.ps1` 完成：
1. 检查 `dist/`；
2. 备份旧版本；
3. 替换静态文件；
4. 测试 Nginx 配置；
5. reload Nginx；
6. 输出访问地址和部署结果。

> PowerShell 脚本中 Windows 路径使用反斜杠（`C:\...`）；Nginx 配置文件中路径使用正斜杠（`C:/...`）。两者不能混用。

但当前阶段先完成项目文档和本地前端骨架，不急于编写部署脚本。
---
## 9. PDF 导出方案
### 9.1 自动导出
建议使用 Playwright 实现自动化 PDF 导出。
基本思路：
1. 本地启动 Vite 预览服务；
2. Playwright 打开指定 URL；
3. 等待页面渲染完成；
4. 使用 Chromium PDF 能力导出 A4 PDF；
5. 保存到 `output/` 或 `exports/` 目录。
### 9.2 手动兜底
保留 Chrome 浏览器手动打印方案：
1. 打开本地或服务器页面；
2. 使用浏览器打印；
3. 选择“另存为 PDF”；
4. 页面尺寸选择 A4；
5. 背景图形打开；
6. 页眉页脚关闭；
7. 缩放按设计规范调整。
### 9.3 PDF 质量检查
导出后需要检查：
- 封面是否完整；
- 页码是否正确；
- 页面断点是否合理；
- 图表是否被截断；
- 表格是否跨页异常；
- 中文字体是否正常；
- 品牌色是否正确；
- 联系方式和版本号是否正确；
- 合规声明是否保留；
- PDF 文件名是否符合命名规范。
推荐 PDF 命名格式：
```text
Digifluidic_Brochure_customer_zh-CN_v2026.06.pdf
```
---
## 10. docs 文档体系
### 10.1 当前 docs 目录规划
已在 Mac 版 VS Code 终端中生成全部 docs 子目录和空白文件。
目录规划如下：
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
### 10.2 各目录职责
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
## 11. 当前已完成事项
### 11.1 已完成
1. 已确定项目名称为 `Digifluidic Brochure Builder`；
2. 已明确项目定位为纯前端宣传册/白皮书生成项目；
3. 已明确技术栈为 React + Vite + TypeScript + Tailwind CSS；
4. 已明确 PDF 导出使用 Playwright，Chrome 打印作为兜底；
5. 已明确部署目标为 Windows Server + Nginx + 8083 端口；
6. 已明确无后端、无数据库、无 PM2；
7. 已生成全部 docs 目录和空白文件；
8. 已写入 `docs/00_project/00_README.md`；
9. 已导出并上传前期对话总结 PDF；
10. 已决定不再使用 Continue + Ollama 本地模型进行长文档生成；
11. 已调整协作方式：后续主要由助手提供完整 Prompt，用户交给 VS Code Monica 扩展直接写入或修改文件，终端仅用于检查、Git、npm、构建和部署等操作；
12. 已生成并写入 `docs/00_project/01_PRD.md`，作为项目需求范围、功能边界、验收标准和合规约束的基准文档；
13. 已生成并写入 `docs/00_project/02_ROADMAP.md`，作为项目阶段划分、交付物安排、风险控制和版本推进顺序的基准文档；
14. 已生成并写入 `docs/00_project/03_GLOSSARY.md`，作为项目术语统一、AI 协作、内容建模、技术表达和合规表述的基础术语文档；
15. 已生成并写入 `docs/01_architecture/00_ARCHITECTURE_OVERVIEW.md`，作为项目总体架构、纯前端静态站点方案、内容数据流、PDF 导出链路和 Windows Nginx 部署隔离原则的基准文档；
16. 已生成并写入 `docs/01_architecture/01_TECH_STACK.md`，作为项目技术栈、工具角色、选型原因、风险控制和当前阶段不纳入技术的基准文档；
17. 已完成 docs 文档体系全部 39 个 Markdown 文件的填充，涵盖 `00_project/`、`01_architecture/`、`02_content/`、`03_design/`、`04_development/`、`05_deployment/`、`06_pdf_export/`、`07_review_release/`、`08_operations/` 共 9 个子目录，文档主干建设阶段完成。
18. 已创建 GitHub 远程仓库（https://github.com/ArthurUker/digifluidic-brochure-builder.git），并完成本地代码首次推送。
### 11.2 当前正在进行
文档主干建设阶段已完成，当前进入前端项目骨架生成阶段。

已完成（39/39 文件）：

```text
docs/00_project/00_README.md
docs/00_project/01_PRD.md
docs/00_project/02_ROADMAP.md
docs/00_project/03_GLOSSARY.md
docs/01_architecture/00_ARCHITECTURE_OVERVIEW.md
docs/01_architecture/01_TECH_STACK.md
docs/01_architecture/02_DIRECTORY_STRUCTURE.md
docs/01_architecture/03_ROUTE_AND_RENDERING.md
docs/02_content/00_CONTENT_STRATEGY.md
docs/02_content/01_CONTENT_MODEL.md
docs/02_content/02_PAPER_DATA_SCHEMA.md
docs/02_content/03_APPLICATION_MATRIX_SCHEMA.md
docs/02_content/04_COMPLIANCE_COPY.md
docs/03_design/00_DESIGN_GUIDELINE.md
docs/03_design/01_PAGE_LAYOUT_SPEC.md
docs/03_design/02_PRINT_STYLE_SPEC.md
docs/03_design/03_BRAND_ASSETS_GUIDE.md
docs/04_development/00_DEVELOPMENT_GUIDE.md
docs/04_development/01_LOCAL_PREVIEW.md
docs/04_development/02_CODE_STYLE.md
docs/04_development/03_COMPONENT_SPEC.md
docs/04_development/04_DEBUGGING_GUIDE.md
docs/05_deployment/00_DEPLOYMENT_OVERVIEW.md
docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md
docs/05_deployment/02_NGINX_CONFIG_SPEC.md
docs/05_deployment/03_PORT_MATRIX.md
docs/05_deployment/04_DEPLOY_PS1_SPEC.md
docs/06_pdf_export/00_PDF_EXPORT_OVERVIEW.md
docs/06_pdf_export/01_PLAYWRIGHT_EXPORT_SPEC.md
docs/06_pdf_export/02_BROWSER_PRINT_GUIDE.md
docs/06_pdf_export/03_PDF_QA_CHECKLIST.md
docs/07_review_release/00_INTERNAL_REVIEW_GUIDE.md
docs/07_review_release/01_RELEASE_PROCESS.md
docs/07_review_release/02_VERSIONING_RULES.md
docs/07_review_release/03_CHANGELOG.md
docs/08_operations/00_OPERATIONS_GUIDE.md
docs/08_operations/01_COMMON_ISSUES.md
docs/08_operations/02_ROLLBACK_GUIDE.md
docs/08_operations/03_MAINTENANCE_CHECKLIST.md
```

下一步：进入阶段 2，生成前端项目骨架。
---
## 12. 当前协作方式
### 12.1 推荐方式
当前采用“Prompt 驱动的 VS Code Monica 扩展写入方式”。
具体流程：
1. 助手根据项目上下文，为指定文件编写完整的生成或修改 Prompt；
2. 用户将该 Prompt 复制到 VS Code Monica 扩展中执行；
3. Monica 扩展直接创建、覆盖或修改目标文件；
4. 用户检查生成结果，并将文件内容、关键片段或文件上传给助手；
5. 助手进行审阅，指出结构、技术、合规或表达问题；
6. 如需调整，助手继续提供修订 Prompt；
7. 完成后由用户通过 Git 记录变更。
### 12.2 为什么不再优先使用终端写入长文件
不再优先使用 `cat <<EOF`、heredoc 或长 shell 命令写入 Markdown 和代码文件，原因包括：
1. 长 Markdown 文件中常包含反引号、代码块、Windows 路径和特殊字符；
2. 终端复制过程中容易触发 `bquote>` 等未闭合状态；
3. 容易将 `EOF`、`echo` 等终端命令残留写入正文；
4. 不利于审查和逐段修改；
5. VS Code Monica 扩展更适合直接操作当前项目文件。
### 12.3 终端仍然适用的场景
终端仍可用于：
1. 查看文件内容，例如 `sed -n '1,80p' file.md`；
2. 查看 Git 差异，例如 `git diff -- file.md`；
3. Git 提交；
4. npm 安装依赖；
5. 本地开发、构建和预览；
6. PDF 导出；
7. 部署和 Nginx 检查。
### 12.4 给 Monica 扩展的通用 Prompt 约束
后续生成或修改文件时，建议在 Prompt 末尾加入以下约束：
1. 只写入目标文件正文，不要输出解释；
2. 不要将整个文件内容用 Markdown 代码块包裹；如文件正文需要命令示例或代码块，可正常保留；
3. 不要输出 cat、EOF、echo、python、bash 等终端命令；
4. 不要在文件末尾添加额外说明；
5. 保持中文、专业、清晰；
6. 不要引入当前项目不存在的后端、数据库、登录、CMS、PM2、Docker、Kubernetes；
7. 如为宣传或合规相关文档，不得将论文证据链直接表述为具体产品性能承诺；
8. 如修改已有文件，应尽量保留既有结构和有效内容，只修正明确需要调整的部分。
### 12.5 每轮标准流程
每完成一个文件后，建议：
1. 在 VS Code 中查看文件；
2. 如有需要，将文件内容或关键片段发给助手审阅；
3. 使用 `git diff -- 文件路径` 检查变更；
4. 完成一个目录或一组相关文件后执行 Git 提交。

### 12.6 PROJECT_CONTEXT.md 实时更新规则

`PROJECT_CONTEXT.md` 是项目协作的上下文锚点文件，应随项目进展持续更新，而不是一次性静态文件。

以下情况发生后，应同步更新本文件：

- 完成新的关键文档，例如 PRD、Roadmap、Glossary、Architecture Overview、Content Model 等；
- 项目技术路线、部署方式、端口、目录结构或协作方式发生变化；
- 当前阶段、下一步任务或优先级发生变化；
- 新增明确的项目边界、合规要求或暂不纳入范围；
- 完成前端骨架、核心组件、PDF 导出脚本或部署流程；
- 发现此前上下文中存在过期、错误或容易误导后续协作的内容。

每次更新时应至少检查：

- "当前已完成事项"是否需要追加；
- "当前正在进行"是否准确；
- "当前下一步"是否仍然有效；
- "后续推荐推进路线"是否需要调整；
- 是否需要新增风险、约束或协作注意事项。

#### 12.6.1 骨架文件分批生成时的中间状态更新规则

阶段 2（前端骨架）涉及多个文件，可能分多轮生成。为避免上下文过期，分批生成时按以下节点更新 `PROJECT_CONTEXT.md`：

| 节点 | 何时更新 | 更新位置 |
|---|---|---|
| 骨架第一批完成 | `package.json`、`vite.config.ts`、`tsconfig.json`、`tsconfig.node.json`、`tailwind.config.js`、`postcss.config.js`、`index.html`、`.gitignore` 生成后 | §11.2 更新"当前正在进行"中已生成的文件列表 |
| 骨架全部完成 | 所有 14 个骨架文件生成完毕后 | §11.1 追加"前端骨架生成完成"；§11.2 更新为"骨架生成完成"；§18 更新为下一阶段 |
| 骨架分批过程中 | 每生成一批文件后 | §11.2 更新已生成文件清单，保持"当前正在进行"准确 |

执行型 AI 助手在每批骨架文件生成后，应自动更新 §11.2 中"已完成"文件列表，并在全部骨架文件完成后追加 §11.1 并更新 §18。不应等到所有阶段结束后才一次性更新。

当用户将 `PROJECT_CONTEXT.md` 贴给新的 AI 对话或 VS Code Monica 扩展时，助手应以该文件中的最新状态为准继续协作。不同类型 AI 助手应根据本文件第 12.7 和第 12.8 小节判断自身角色：对话型 AI 助手负责分析、审阅和输出 Prompt；执行型 AI 助手负责按 Prompt 直接写入文件，并在关键文件完成后自动同步更新 `PROJECT_CONTEXT.md`。

### 12.7 对话型 AI 助手输出下一步 Prompt 的规则

本小节适用于不直接修改项目文件、主要通过对话方式提供分析、审阅和 Prompt 的 AI 助手，例如：

- Mac 上常用的 Monica 聊天助手；
- Web 端或桌面端的通用 AI 对话助手；
- 其他不直接访问当前项目文件系统的 AI 模型。

对话型 AI 助手的主要职责是：

1. 阅读并理解用户上传或粘贴的 `PROJECT_CONTEXT.md`；
2. 判断当前项目已完成事项、正在进行阶段和当前下一步；
3. 审阅用户上传的项目文件，指出结构、技术、合规、表达或流程问题；
4. 根据当前上下文输出下一步可执行方案；
5. 为 VS Code 中的执行型 AI 助手编写可直接执行的完整 Prompt；
6. 在关键文件推进时，同时规划目标文件生成/修改和 `PROJECT_CONTEXT.md` 同步更新；
7. 提醒用户在关键节点保持 `PROJECT_CONTEXT.md` 最新；
8. 不应声称自己已经直接修改了本地项目文件，除非当前工具环境明确具备文件写入能力。

当用户上传或粘贴 `PROJECT_CONTEXT.md` 时，对话型 AI 助手应先判断：

1. 当前已完成哪些关键文件；
2. 当前正在进行的阶段；
3. 当前下一步任务；
4. 是否存在过期状态、冲突信息或需要同步更新的内容；
5. 当前任务完成后应如何更新 `PROJECT_CONTEXT.md`。

对话型 AI 助手在输出下一步工作内容时，通常应同时提供两类 Prompt：

1. **目标文件生成/修改 Prompt**：用于交给 VS Code 中的 Monica、CodeBuddy、Continue、Copilot 等执行型 AI 助手创建或修改目标文件；
2. **PROJECT_CONTEXT.md 同步更新 Prompt**：用于目标文件完成后，同步更新"当前已完成事项""当前正在进行""当前下一步""后续推荐推进路线"等内容。

如果用户明确要求"只给下一步文件生成 Prompt"或"暂不更新 PROJECT_CONTEXT.md"，对话型 AI 助手可以只输出目标文件 Prompt，但应提示这样可能导致上下文过期。

对话型 AI 助手输出 Prompt 时应遵循：

1. 明确目标文件路径；
2. 明确是创建、覆盖还是局部修改；
3. 明确不能引入当前项目范围外内容；
4. 明确不要输出解释、终端命令或文件正文外的额外内容；
5. 对宣传、合规、论文证据链相关内容，应保持谨慎表达；
6. 对长 Markdown、代码、配置文件，优先要求执行型 AI 助手直接写入文件，而非通过终端 heredoc 写入；
7. 必须基于 `PROJECT_CONTEXT.md` 的最新状态判断下一步，不应重新设计项目技术路线。

### 12.8 执行型 AI 助手的文件写入与自动更新规则

本小节适用于能够直接访问当前项目目录、创建文件、修改文件或覆盖文件的 IDE 内 AI 工具，例如：

- VS Code Monica 扩展；
- CodeBuddy；
- Continue；
- GitHub Copilot Chat / Agent；
- 其他具备项目文件读写能力的 AI 编程助手。

执行型 AI 助手的主要职责是：

1. 按照用户或对话型 AI 助手提供的 Prompt，创建、覆盖或局部修改指定文件；
2. 严格遵守目标文件路径，不应擅自修改无关文件；
3. 只写入目标文件正文，不应把解释性说明、执行总结或聊天内容写入项目文件；
4. 对已有文件进行修改时，应优先局部修改，避免无必要地重写全文；
5. 完成关键文件生成或修改后，自动同步更新 `PROJECT_CONTEXT.md` 中的项目状态；
6. 如发现 Prompt 与 `PROJECT_CONTEXT.md` 冲突，应优先以 `PROJECT_CONTEXT.md` 的最新内容为准，并提示用户确认；
7. 不应引入当前项目范围外的后端、数据库、登录、CMS、PM2、Docker、Kubernetes 等内容。

对于关键文件推进，执行型 AI 助手在完成目标文件后，应自动检查并更新 `PROJECT_CONTEXT.md`，而不应只提示"是否需要更新"。除非用户明确说明"本轮不要更新 PROJECT_CONTEXT.md"或"只修改目标文件"，否则以下情况发生后必须同步更新 `PROJECT_CONTEXT.md`：

1. 新增或完成关键文档，例如 PRD、Roadmap、Glossary、Architecture Overview、Content Strategy、Content Model、Design Guideline 等；
2. 新增或完成前端骨架文件；
3. 新增或完成核心组件；
4. 新增或完成 PDF 导出脚本；
5. 新增或完成部署文档或部署脚本；
6. 项目阶段、下一步任务、技术路线、部署方式或协作方式发生变化；
7. 发现 `PROJECT_CONTEXT.md` 中存在过期、错误或容易误导后续协作的内容。

执行型 AI 助手同步更新 `PROJECT_CONTEXT.md` 时，至少应检查以下位置：

1. `### 11.1 已完成`：追加新完成的关键文件或关键事项；
2. `### 11.2 当前正在进行`：更新已完成文件、当前阶段和下一步建议；
3. `## 16. 后续推荐推进路线`：如阶段顺序或优先级变化，应同步调整；
4. `## 17. 每次新对话恢复方式`：必要时更新示例中的"上次做到"文件；
5. `## 18. 当前下一步`：更新为下一个应生成或修改的文件。

执行型 AI 助手在写入文件时应遵循：

1. 不要将整个文件内容用 Markdown 代码块包裹；
2. 如文件正文需要命令示例或代码块，可正常保留；
3. 不要输出 cat、EOF、echo、python、bash 等终端写入命令；
4. 不要在文件末尾添加额外解释；
5. 不要将执行总结写入目标文件；
6. 不要删除已有有效章节；
7. 不要重排全文，除非用户明确要求；
8. 不要擅自新增项目范围外技术；
9. 对宣传和合规相关内容，不得将论文证据链直接表述为具体产品性能承诺；
10. 文件修改完成后，如当前工具界面需要回复用户，应简要说明修改完成和修改文件列表，不要把该说明写入项目文件正文。

### 12.9 对话型 AI 助手的输出顺序规则

本小节适用于 Mac 本地 Monica 对话型 AI 助手，以及其他主要通过对话方式提供分析、审阅和 Prompt 的 AI 模型。

当用户上传或粘贴 `PROJECT_CONTEXT.md`，并要求继续推进项目时，对话型 AI 助手应优先服务于项目执行。除非用户明确要求先做纯分析，否则默认回复应分为两大类，且顺序如下：

1. **下一步可执行 Prompt**
   - 第一部分应优先输出下一步可直接复制给 VS Code Monica、CodeBuddy、Continue、Copilot 等执行型 AI 助手的完整 Prompt。
   - Prompt 应明确目标文件路径、创建/覆盖/局部修改方式、文档结构、内容边界、合规要求和禁止事项。
   - 如果目标任务属于关键文件推进，Prompt 中应明确要求执行型 AI 在完成目标文件后自动同步更新 `PROJECT_CONTEXT.md`。
   - 如有必要，也可以额外提供单独的 `PROJECT_CONTEXT.md` 同步更新 Prompt 作为兜底。

2. **审阅结论、分析与建议**
   - 第二部分再输出文件审阅结论、质量判断、风险提示、合规提醒、技术建议或后续路线建议。
   - 分析应服务于下一步执行，不应在可执行 Prompt 之前输出过长背景说明。
   - 如用户已经明确请求"仔细审阅"或"先分析"，则可以适当提高审阅部分的详细程度，但仍应尽量给出后续可执行动作。

如果当前信息不足，导致对话型 AI 助手无法立即给出下一步 Prompt，则应先给出简短的问答式确认步骤，而不是直接输出长篇推测分析。确认问题应遵循：

1. 只询问完成下一步 Prompt 所必需的信息；
2. 明确指出缺失、冲突或不确定的上下文；
3. 尽量使用 A/B/C 选项或编号问题，方便用户快速回复；
4. 在问题后简要说明"确认后将输出的 Prompt 类型"。

推荐默认回复结构：

```text
## 1. 下一步可执行 Prompt

[这里输出完整 Prompt]

## 2. 审阅结论与建议

[这里输出审阅结论、风险提示和建议]
```

如需先确认，则使用：

```text
## 1. 需要先确认的问题

1. ...
2. ...

## 2. 确认后我将输出的内容

[说明确认后将输出哪个目标文件的生成/修改 Prompt，以及是否包含 PROJECT_CONTEXT.md 同步更新要求]
```

对话型 AI 助手不得声称自己已经直接修改本地项目文件，除非当前工具环境明确具备文件写入能力。对话型 AI 助手应明确自身主要职责是：阅读上下文、审阅文件、判断下一步、输出执行型 AI 可用的 Prompt，以及在必要时提供 `PROJECT_CONTEXT.md` 同步更新方案。

---

## 13. Git 使用建议

### 13.0 当前 Git 与 GitHub 状态

当前 GitHub 远程仓库已创建，仓库地址如下：

- HTTPS：https://github.com/ArthurUker/digifluidic-brochure-builder.git
- SSH：git@github.com:ArthurUker/digifluidic-brochure-builder.git
- 仓库可见性：Public
- 仓库所有者：ArthurUker

本地代码已完成首次推送（`git push -u origin main`），远程主分支为 `main`。

后续推送命令：

```bash
git add .
git commit -m "描述本次变更"
git push
```

推荐在以下节点执行 Git 提交和推送：
- 完成一个 docs 子目录的文档填充；
- 完成前端骨架文件生成；
- 完成核心组件；
- 完成 PDF 导出脚本；
- 完成部署配置。

### 13.1 本地 Git 初始化

如果项目尚未初始化 Git，可执行：

```bash
git init
git add .
git commit -m "chore: initialize digifluidic brochure project"
```

后续建议按阶段提交：

### 13.2 完成项目文档目录后

```bash
git add docs/00_project PROJECT_CONTEXT.md
git commit -m "docs: add project overview documents"
```

### 13.3 完成架构文档后

```bash
git add docs/01_architecture
git commit -m "docs: add architecture documentation"
```

### 13.4 完成内容模型文档后

```bash
git add docs/02_content
git commit -m "docs: add content model documentation"
```

### 13.5 完成前端骨架后

```bash
git add package.json vite.config.ts tsconfig.json index.html src
git commit -m "feat: initialize brochure frontend"
```

### 13.6 完成 PDF 导出后

```bash
git add scripts docs/06_pdf_export
git commit -m "feat: add PDF export workflow"
```

---

## 14. 合规与传播边界

### 14.1 基本原则

所有项目文档和宣传内容应遵循：

1. 中文为主。除产品名、技术名词、文件名、路径、命令名、依赖名和必要品牌名外，项目内部文档应以中文为主；
2. 专业、清晰、适合项目交接；
3. 避免夸大宣传；
4. 避免绝对化表达；
5. 区分科研论文、技术储备、产品能力、注册声明；
6. 区分公司已署名论文和核心团队历史研究积累；
7. 文献内容仅作为技术研究基础、应用方向和证据链说明；
8. 不将文献或案例直接表述为具体产品性能承诺；
9. 具体产品功能、性能指标、适用范围、注册状态以公司正式产品资料、注册文件或经审批的对外材料为准；
10. 对外发布前需经过公司内部技术、市场或合规负责人确认。

### 14.2 禁止或慎用表述

避免使用：

- 权威证明；
- 完全验证；
- 绝对领先；
- 保证检测；
- 唯一方案；
- 全球第一；
- 零风险；
- 百分百准确；
- 全面替代传统检测；
- 已完全覆盖所有病原体；
- 临床金标准；
- 监管认可但无法提供正式依据的表述。

### 14.3 推荐表达方式

推荐使用：

- 研究显示；
- 文献报道；
- 在相关研究中；
- 可用于支持某类应用场景的技术基础；
- 展示了平台在某方向的应用潜力；
- 有助于构建多靶标检测能力；
- 可作为现场检测方案的技术参考；
- 具体性能以正式产品资料和注册文件为准。

---

## 15. 当前阶段不纳入范围

为避免项目失控，当前阶段不纳入以下内容：

1. 后端 API；
2. 数据库；
3. 用户登录；
4. 权限管理；
5. CMS 内容管理系统；
6. 在线编辑器；
7. 多用户协同编辑；
8. 服务器端 PDF 渲染服务；
9. PM2 服务；
10. Docker 部署；
11. Kubernetes；
12. 复杂数据可视化后台；
13. 与 RDPMS 或其他业务系统集成；
14. 自动同步论文数据库；
15. 自动联网抓取文献。

这些内容可作为未来扩展设想，但不进入当前版本。

---

## 16. 后续推荐推进路线

### 阶段 1：完成 docs 主干文档 ✅（已完成）

docs 文档体系全部 39 个 Markdown 文件已完成填充，涵盖 9 个子目录：

```text
docs/00_project/      → 4/4 ✅（README、PRD、Roadmap、Glossary）
docs/01_architecture/ → 4/4 ✅（架构概览、技术栈、目录结构、路由与渲染）
docs/02_content/      → 5/5 ✅（内容策略、内容模型、论文数据、应用矩阵、合规文案）
docs/03_design/       → 4/4 ✅（设计规范、页面布局、打印样式、品牌资产）
docs/04_development/  → 5/5 ✅（开发指南、本地预览、代码风格、组件规范、调试指南）
docs/05_deployment/   → 5/5 ✅（部署概览、Nginx 部署、Nginx 配置、端口矩阵、部署脚本）
docs/06_pdf_export/   → 4/4 ✅（导出概览、Playwright 导出、浏览器打印、PDF QA）
docs/07_review_release/ → 4/4 ✅（内部评审、发布流程、版本号规则、变更记录）
docs/08_operations/   → 4/4 ✅（运维指南、常见问题、回滚指南、维护检查清单）
```

### 阶段 2：生成前端项目骨架

预计文件包括：

```text
package.json
vite.config.ts
tsconfig.json
tsconfig.node.json
tailwind.config.js
postcss.config.js
index.html
src/main.tsx
src/App.tsx
src/styles/index.css
src/styles/print.css
src/data/brochure.ts
src/types/brochure.ts
.gitignore
```

### 阶段 3：生成页面组件

预计文件包括：

```text
src/components/BrochureLayout.tsx
src/components/CoverPage.tsx
src/components/ExecutiveSummary.tsx
src/components/PlatformOverview.tsx
src/components/SectionPage.tsx
src/components/ApplicationMatrix.tsx
src/components/PaperEvidenceList.tsx
src/components/ProductEcosystem.tsx
src/components/ComplianceNotice.tsx
src/components/Footer.tsx
```

### 阶段 4：生成 PDF 导出脚本

预计文件包括：

```text
scripts/export-pdf.ts
playwright.config.ts
```

### 阶段 5：本地运行与调试

推荐命令：

```bash
npm install
npm run dev
npm run build
npm run preview
npm run export:pdf
```

### 阶段 6：部署到 Windows Server

预计内容：

1. 构建 `dist/`；
2. 上传或拉取代码；
3. 执行构建；
4. 配置 Nginx 8083；
5. reload Nginx；
6. 浏览器访问测试；
7. PDF 导出测试；
8. 内部评审。

---

## 17. 每次新对话恢复方式

如果开启新对话，用户可发送：

```text
这是当前项目上下文，请基于以下 PROJECT_CONTEXT.md 继续协作：
[粘贴 PROJECT_CONTEXT.md 全文]
```

然后继续说明：

```text
我们上次已完成 docs 文档体系全部 39 个文件的填充，文档主干建设阶段完成，请继续下一阶段：生成前端项目骨架。
```

助手应基于本文件继续，不应重新设计项目技术路线，不应引入后端、数据库、CMS 或 PM2。

---

## 18. 当前下一步

当前下一步：

```text
生成前端项目骨架（阶段 2）
```

GitHub 远程仓库已就绪，下一步进入阶段 2，生成以下前端骨架文件：

```text
package.json
vite.config.ts
tsconfig.json
tsconfig.node.json
tailwind.config.js
postcss.config.js
index.html
src/main.tsx
src/App.tsx
src/styles/index.css
src/styles/print.css
src/data/brochure.ts
src/types/brochure.ts
.gitignore
```

骨架文件全部生成完毕后，执行一次 Git 提交和推送，再继续阶段 3（页面组件）。