# 03_GLOSSARY.md

## 1. 文档信息

| 项目 | 内容 |
|---|---|
| 文档名称 | Digifluidic Brochure Builder 术语表 |
| 文件路径 | `docs/00_project/03_GLOSSARY.md` |
| 所属目录 | `docs/00_project/` |
| 文档类型 | 项目基础术语文档 |
| 适用范围 | 项目文档、内容建模、前端开发、PDF 导出、部署说明、合规审阅 |
| 当前版本 | v0.1 |
| 维护方式 | 随项目推进持续更新 |

## 2. 术语表目的与适用范围

本文件用于：

1. 统一项目内部术语，减少不同对话、不同协作角色之间的理解偏差；
2. 降低 AI 协作和人工协作中的理解偏差；
3. 支撑后续架构文档、内容策略、内容模型、设计规范和部署文档；
4. 规范商业宣传材料中的技术表达和合规边界；
5. 帮助新对话中的 AI 助手快速理解项目语境。

本文件不用于替代：

1. 公司正式产品资料；
2. 医疗器械注册资料；
3. 法规文件；
4. 对外发布前的合规审批文件。

## 3. 项目通用术语

| 术语 | 英文/缩写 | 项目内含义 | 使用注意 |
|---|---|---|---|
| Digifluidic Brochure Builder | DGB | 当前项目名称，指用于生成和维护对外白皮书/宣传册的静态网页工程。 | 仅作项目内部命名，不等同于对外产品名。 |
| PROJECT_CONTEXT.md | — | 项目上下文锚点文件，记录项目目标、协作方式、阶段状态和下一步任务。 | 应保持中文为主、持续更新，不应被压缩成英文摘要版。 |
| docs 文档体系 | docs | 项目下的分层文档目录，用于承载 PRD、架构、内容、设计、部署、PDF、运维等文档。 | 文档间应保持引用一致，避免重复定义。 |
| 白皮书 | White Paper | 面向客户、合作方和内部评审的技术与应用说明材料。 | 不是注册资料，不应直接写成营销口号。 |
| 宣传册 | Brochure | 面向对外传播的图文材料，可用于网页预览和 PDF 导出。 | 应兼顾表达性、准确性和合规边界。 |
| 网页预览 | Web Preview | 在浏览器中查看宣传材料排版、内容和交互效果的页面形式。 | 需与 PDF 版式保持口径一致。 |
| PDF 导出 | PDF Export | 将网页内容导出为 A4 等可打印文档的过程。 | 需关注分页、字体、图表和页脚等质量。 |
| 静态站点 | Static Site | 仅前端渲染和静态资源托管的项目形态。 | 本项目当前不包含后端服务。 |
| 当前阶段 | Current Phase | 项目所处的文档、开发、导出或部署推进阶段。 | 应随进展及时更新，不可长期滞后。 |
| 当前下一步 | Next Step | 当前最优先推进的文件或任务。 | 应明确到具体文件或可执行动作。 |
| 项目上下文锚点 | Context Anchor | 供 AI 和人工恢复项目状态的核心上下文文件。 | 应保留完整中文工程信息。 |
| 文档主干建设阶段 | Documentation Backbone Phase | 以 PRD、Roadmap、Glossary、Architecture、Content Model 等基础文档为主的阶段。 | 当前已完成，后续作为项目基础文档持续维护。 |
| 关键文件 | Key File | 对项目推进有基础作用的文档、配置或代码文件。 | 完成后应同步更新 `PROJECT_CONTEXT.md`。 |
| 版本化维护 | Versioned Maintenance | 通过版本号和变更记录持续迭代材料与文档。 | 适用于文档、内容和导出结果。 |
| 内部工程文档 | Internal Engineering Docs | 面向项目协作、开发和审阅的内部文件集合。 | 不直接作为对外宣传最终稿。 |

## 4. 文档与 AI 协作术语

| 术语 | 英文/缩写 | 项目内含义 | 使用注意 |
|---|---|---|---|
| Prompt | Prompt | 提供给 AI 的明确任务描述，指导生成、修改或审阅内容。 | 应包含目标文件、边界、约束和禁止事项。 |
| 执行型 AI 助手 | Agentic AI | 能直接访问项目文件并进行写入、修改或覆盖的工具型 AI。 | 需严格遵守目标路径和局部修改原则。 |
| 对话型 AI 助手 | Conversational AI | 主要通过对话提供分析、审阅和下一步 Prompt 的 AI。 | 不应声称已直接修改本地文件，除非具备写入能力。 |
| VS Code Monica 扩展 | Monica | 当前项目主要使用的执行型写入方式之一。 | 适合直接操作项目文件，不适合长终端写入。 |
| CodeBuddy | CodeBuddy | 可作为执行型 AI 使用的编辑或编程助手。 | 使用时应保持任务边界清晰。 |
| Continue | Continue | 可作为代码与文档协作工具的 AI 扩展。 | 不应引入当前范围外技术。 |
| GitHub Copilot Chat / Agent | Copilot | 具备对话或代理能力的 IDE 内 AI 工具。 | 应遵循项目上下文与当前阶段要求。 |
| 目标文件生成 Prompt | Target File Prompt | 专门用于创建或覆盖某个目标文件的执行指令。 | 应明确路径、结构、内容边界和格式要求。 |
| PROJECT_CONTEXT.md 同步更新 Prompt | Context Sync Prompt | 用于在目标文件完成后更新 `PROJECT_CONTEXT.md` 的指令。 | 适合关键文件推进场景。 |
| 局部修改 | Local Edit | 只修改文件中必要的局部段落，而非重写全文。 | 对已有有效内容应尽量保持不动。 |
| 覆盖写入 | Overwrite | 重新写入整个文件正文。 | 仅在明确需要时使用。 |
| 文件正文 | Body | 文件中真正承载内容的主体部分。 | 不应混入解释性聊天内容。 |
| Markdown 代码块 | Markdown Code Block | 使用三反引号表示的代码块。 | 文件正文可保留，但不要把整篇文档包进代码块。 |
| heredoc | Heredoc | 终端中多行文本输入方式。 | 本项目不推荐用于写长 Markdown 文件。 |
| `cat <<EOF` | — | 常见的 heredoc 写法。 | 本项目不推荐用于写长 Markdown 文件。 |
| Git diff | Git Diff | 查看文件变更差异的方式。 | 适合审阅修改内容。 |
| Git commit | Git Commit | 将本地变更记录到 Git 历史中。 | 建议按阶段提交。 |
| 上下文过期 | Context Drift | 项目上下文因阶段变化或文件变动而失去准确性。 | 发现后应立即同步更新 `PROJECT_CONTEXT.md`。 |
| 问答式确认步骤 | Clarifying Questions | 当信息不足时，先用简短问题补足关键信息的流程。 | 问题应少而清楚，尽量可快速回答。 |
| 下一步可执行 Prompt | Next Action Prompt | 可以直接复制给执行型 AI 执行的下一步任务描述。 | 通常应放在对话型 AI 输出的前部。 |

对 `heredoc`、`cat <<EOF` 等术语，应明确本项目不推荐用它们写入长 Markdown 文件。

## 5. 前端技术术语

| 术语 | 英文/缩写 | 项目内含义 | 使用注意 |
|---|---|---|---|
| React | React | 用于构建页面组件和状态逻辑的前端框架。 | 当前仅用于静态网页前端，不引入后端。 |
| Vite | Vite | 前端构建和本地开发工具。 | 用于开发、构建和预览。 |
| TypeScript | TS | 带类型约束的前端开发语言。 | 便于维护内容文件和组件结构。 |
| Tailwind CSS | Tailwind | 原子化 CSS 工具类方案。 | 用于快速构建页面样式。 |
| Playwright | Playwright | 用于自动化 PDF 导出和页面检查的工具。 | 导出时要关注分页和字体表现。 |
| Chromium | Chromium | Playwright 通常使用的浏览器内核。 | PDF 导出依赖其打印能力。 |
| Chrome 打印 | — | 通过浏览器打印另存为 PDF 的兜底方式。 | 适合手动校验和备用导出。 |
| Node.js | Node.js | 前端构建和脚本运行环境。 | 仅作为开发和构建环境，不是后端服务。 |
| npm | npm | 依赖安装与脚本运行工具。 | 用于安装、启动和构建命令。 |
| 构建 | Build | 将源代码和资源转换为可部署产物。 | 输出通常为 `dist/`。 |
| 本地开发服务 | Dev Server | 供开发时实时预览和调试的本地服务。 | 仅用于本地调试。 |
| 本地预览 | Local Preview | 在浏览器中预览页面效果。 | 应与导出效果尽量一致。 |
| `dist/` | dist | 构建后输出的静态资源目录。 | 部署和预览常以此目录为目标。 |
| `src/` | src | 前端源代码目录。 | 存放组件、样式、数据和入口文件。 |
| 组件 | Component | 可复用的页面逻辑与 UI 单元。 | 应保持职责清晰。 |
| 页面组件 | Page Component | 负责单页或章节页展示的组件。 | 应与内容数据配合。 |
| 数据文件 | Data File | 存放内容和结构化数据的文件。 | 适合承载可维护的文案和表格数据。 |
| TypeScript 数据文件 | TS Data File | 使用 TypeScript 编写的数据文件。 | 适合需要类型约束的内容维护。 |
| JSON | JSON | 结构化数据格式。 | 如后续需要多语言或非开发人员维护，可考虑使用。 |
| 静态资源 | Static Assets | 图片、图标、字体等资源文件。 | 应控制体积并兼顾打印效果。 |
| CSS | CSS | 页面样式定义语言。 | 需兼顾屏幕展示和打印样式。 |
| 打印样式 | Print Styles | 适配 PDF 导出和浏览器打印的样式。 | 要重点检查分页和页眉页脚。 |
| 响应式布局 | Responsive Layout | 适配不同屏幕尺寸的布局方式。 | 同时要兼顾 A4 输出。 |
| A4 页面 | A4 Page | PDF 和打印的常用页面规格。 | 需关注页边距和内容密度。 |
| 前端路由 | Frontend Routing | 浏览器端控制页面切换的方式。 | 如使用 React Router，应与打印页面兼容。 |
| React Router | React Router | React 的前端路由库。 | 本项目如使用，应保持静态导出可用。 |
| `index.html` | index.html | 前端应用入口 HTML 文件。 | 是静态站点的基础入口之一。 |
| `vite.config.ts` | vite.config.ts | Vite 配置文件。 | 影响开发服务器、构建和导出行为。 |
| `tsconfig.json` | tsconfig.json | TypeScript 编译配置。 | 应与项目目录结构保持一致。 |
| `package.json` | package.json | 依赖、脚本和项目元信息配置文件。 | 是构建和运行命令的核心入口。 |

说明：本项目当前是纯前端静态网页项目，不包含后端服务、数据库、登录系统、CMS、PM2、Docker、Kubernetes。

## 6. 内容建模与宣传材料术语

| 术语 | 英文/缩写 | 项目内含义 | 使用注意 |
|---|---|---|---|
| 内容模型 | Content Model | 对白皮书、宣传册内容进行结构化组织的方式。 | 应服务于网页渲染和 PDF 导出。 |
| 结构化内容 | Structured Content | 按字段、条目和关系组织的内容。 | 便于后续维护和复用。 |
| 应用矩阵 | Application Matrix | 将应用方向、产品材料和技术路线对应起来的表格。 | 需避免写成注册范围声明。 |
| 论文证据链 | Paper Evidence Chain | 支撑平台和应用表达的论文与研究积累组合。 | 不能直接等同于产品性能承诺。 |
| 产品生态 | Product Ecosystem | 围绕硬件、芯片、方法学和输出形式形成的整体。 | 需与正式产品资料保持一致。 |
| 应用场景 | Use Case | 材料面向的实际使用环境。 | 要与可证实的能力描述匹配。 |
| 内容主线 | Content Narrative | 白皮书或宣传册的组织逻辑。 | 应围绕清晰表达和合规边界展开。 |
| 合规声明 | Compliance Statement | 对内容边界、适用范围和表达限制的说明。 | 必须保留谨慎表述。 |
| 版本号 | Version | 用于区分文档和材料迭代版本的编号。 | 建议与变更记录配套管理。 |
| 联系方式 | Contact Information | 对外联系入口信息。 | 是否展示应视发布场景决定。 |
| 封面 | Cover | 文档或 PDF 的首页展示内容。 | 需兼顾品牌和信息层级。 |
| 章节页 | Section Page | 用于区分章节或主题的页面。 | 适合白皮书结构化展示。 |
| 页脚 | Footer | 页面底部信息区域。 | 常用于页码、版本和版权信息。 |
| 图表 | Chart/Figure | 说明数据、流程或结构的视觉元素。 | 要避免过度装饰，保证可读性。 |
| 表格 | Table | 用于对比、枚举和结构化说明的呈现方式。 | 需注意跨页、对齐和打印效果。 |
| 对外宣传材料 | External Material | 面向客户、合作方或公众的材料。 | 发布前需合规审阅。 |
| 内部评审材料 | Internal Review Material | 面向公司内部技术、市场和合规审查的材料。 | 可比对更多背景信息，但仍需准确。 |
| 客户版材料 | Customer Version | 面向具体客户或场景裁剪后的材料。 | 需按对象调整表达重心。 |
| 政府/项目申报辅助材料 | Grant/Project Support Material | 用于项目申报或政策沟通的辅助文件。 | 不可夸大技术或注册状态。 |
| 多语言扩展 | Multilingual Extension | 后续支持其他语言版本的能力。 | 当前阶段优先保证中文主版本。 |

强调：内容模型服务于网页渲染、PDF 导出和后续维护，不应在当前阶段引入 CMS。

## 7. 产品与平台术语

| 术语 | 英文/缩写 | 项目内含义 | 使用注意 |
|---|---|---|---|
| Zhuhai Digifluidic Bio-tech Co., Ltd. | — | 公司英文名称。 | 应与正式公司资料保持一致。 |
| 珠海市迪奇孚瑞生物科技有限公司 | — | 公司中文名称。 | 属于正式公司名称，应准确使用。 |
| Digifluidic | — | 品牌名称。 | 在品牌展示中使用时应统一写法。 |
| VHunter Plus | — | 当前项目中重点宣传的核心设备名称。 | 具体功能和性能以正式资料为准。 |
| 全自动核酸分析仪 | — | 对 VHunter Plus 的功能性描述。 | 不应脱离正式产品资料单独夸大。 |
| 微流控核酸检测芯片 | — | 与平台配套的芯片类耗材或应用载体。 | 具体规格需以正式资料为准。 |
| 食源性病原体检测芯片 | — | 面向食品安全场景的芯片示例。 | 不应默认视为所有地区已注册产品。 |
| 呼吸道病原体检测芯片 | — | 面向呼吸道病原体检测场景的芯片示例。 | 需区分研究、临床评价和产品状态。 |
| SARS-CoV-2 / 流感相关检测方案 | — | 与呼吸道感染相关的检测方案表达。 | 适用范围和状态以正式资料为准。 |
| 公共卫生应急多病原体芯片 | — | 面向公共卫生应急场景的多靶标芯片表达。 | 不能写成已覆盖所有病原体。 |
| 试剂耗材体系 | — | 与设备和芯片配套的试剂、耗材和相关材料。 | 应与实际供应和应用范围一致。 |
| 平台能力 | Platform Capability | 平台在自动化、集成化和应用扩展方面的综合能力。 | 适合表达技术基础，不宜绝对化。 |
| 平台扩展性 | Platform Scalability | 平台向新场景、新方法或新芯片延展的能力。 | 应避免暗示已全部实现。 |
| 样本到结果 | Sample-to-Result | 从样本输入到最终结果输出的一体化流程。 | 适合描述自动化流程，不等于所有场景均已商业化。 |
| 自动化检测流程 | Automated Testing Workflow | 由设备和芯片协同完成的自动检测步骤。 | 需与实际流程和验证状态一致。 |

注意：不要将上述方向全部写成已注册产品；具体产品名称、注册状态、适用范围和性能指标以公司正式资料为准。

## 8. 微流控与分子诊断技术术语

| 术语 | 英文/缩写 | 项目内含义 | 使用注意 |
|---|---|---|---|
| 数字微流控 | Digital Microfluidics | 通过电场等方式控制液滴运动的微流控方式。 | 是本项目底层技术表达之一。 |
| Digital Microfluidics | DMF | 数字微流控的英文写法。 | 在中英文材料中可并用。 |
| DMF | DMF | Digital Microfluidics 的缩写。 | 首次出现建议写全称。 |
| 通道-数字混合微流控 | Hybrid Microfluidics | 结合通道式与数字式控制的微流控方案。 | 适合表达平台工程能力。 |
| 液滴操控 | Droplet Manipulation | 对液滴进行移动、合并、分裂或分配的操作。 | 是白皮书中常见底层能力表述。 |
| 液滴分裂 | Droplet Splitting | 将一个液滴分成多个液滴。 | 可用于说明样本分配能力。 |
| 卫星液滴 | Satellite Droplet | 与主液滴分离或伴随出现的小液滴。 | 适合用于工程优化说明。 |
| 3D microblade | 3D microblade | 一类用于液滴分裂或操控的结构设计。 | 首次出现建议保留英文。 |
| 电极 | Electrode | 微流控芯片中用于施加电场的结构。 | 属于基础器件术语。 |
| 电极寿命 | Electrode Lifetime | 电极可稳定工作的持续时间。 | 适合表达器件可靠性。 |
| 介电层 | Dielectric Layer | 绝缘并影响电场分布的材料层。 | 常与液滴操控性能相关。 |
| 多介电层 | Multilayer Dielectric | 多层介电结构设计。 | 适合工程优化描述。 |
| 表面粘附 | Surface Adhesion | 液滴或材料与表面的附着倾向。 | 与器件可靠性和操控稳定性相关。 |
| 微流控芯片 | Microfluidic Chip | 承载液体操控和反应过程的芯片。 | 是本项目核心硬件表达之一。 |
| LAMP | LAMP | 环介导等温扩增技术。 | 适合在应用场景中简明说明。 |
| RT-qPCR | RT-qPCR | 逆转录实时定量 PCR。 | 应注意区分科研和临床评价语境。 |
| 多重 PCR | Multiplex PCR | 在同一反应中同时检测多个靶标的 PCR 方法。 | 需注意靶标覆盖范围和验证状态。 |
| Multiplex PCR | Multiplex PCR | 多重 PCR 的英文写法。 | 中英文材料可并列使用。 |
| 电化学生物传感 | Electrochemical Biosensing | 通过电化学信号进行生物检测的方式。 | 适合描述技术储备。 |
| DNA 生物传感器 | DNA Biosensor | 基于 DNA 识别或信号转换的传感器。 | 需区分科研结果与产品化状态。 |
| HPV-16 | HPV-16 | 人乳头瘤病毒 16 型。 | 属于特定病原或靶标示例。 |
| SARS-CoV-2 | SARS-CoV-2 | 新型冠状病毒。 | 使用时应注意场景和合规表述。 |
| 甲型流感 | Influenza A | A 型流感病毒。 | 可用于呼吸道病原体应用示例。 |
| 乙型流感 | Influenza B | B 型流感病毒。 | 可用于呼吸道病原体应用示例。 |
| 单细胞操控 | Single-cell Manipulation | 对单个细胞进行定位、转移或处理。 | 属于平台拓展能力相关术语。 |
| 单细胞培养 | Single-cell Culture | 对单个细胞进行培养的实验方式。 | 适合作为技术储备说明。 |
| 微流控辅助电穿孔 | Microfluidic-assisted Electroporation | 通过微流控装置辅助实现电穿孔的方式。 | 适合科研能力表达。 |
| 核酸提取 | Nucleic Acid Extraction | 从样本中提取核酸的过程。 | 常见于样本到结果链路中。 |
| 核酸扩增 | Nucleic Acid Amplification | 对目标核酸进行放大检测的过程。 | 应与具体方法学配套描述。 |
| 荧光检测 | Fluorescence Detection | 通过荧光信号读取反应结果。 | 需注意仪器和方法匹配。 |
| 比色检测 | Colorimetric Detection | 通过颜色变化判断结果的检测方式。 | 适合现场可视化表达。 |

要求：
- 解释应简明准确；
- 避免写成教材式长篇综述；
- 结合本项目语境说明这些术语如何服务于白皮书或宣传册内容；
- 对科研论文中出现的技术，应表述为"技术基础""研究支撑""应用潜力"，不得直接等同于注册产品性能。

## 9. 检测与应用场景术语

| 术语 | 英文/缩写 | 项目内含义 | 使用注意 |
|---|---|---|---|
| 食源性病原体 | Foodborne Pathogens | 与食品安全相关的病原微生物。 | 适合食品安全应用场景。 |
| 呼吸道病原体 | Respiratory Pathogens | 与呼吸道感染相关的病原微生物。 | 适合公共卫生和临床相关表达。 |
| 公共卫生应急检测 | Public Health Emergency Testing | 面向突发公共卫生事件的检测表达。 | 适合应急响应语境，避免泛化。 |
| 临床 POCT | Clinical POCT | 面向临床或近患者场景的即时检测表达。 | 不应直接等同于已获批临床产品。 |
| POCT | Point-of-Care Testing | 近患者、现场或即时检测。 | 适合描述快速检测潜力。 |
| 近患者检测 | Near-patient Testing | 在患者附近或临床现场进行的检测。 | 适合对外说明应用场景。 |
| 现场检测 | On-site Testing | 在使用场景现场完成的检测。 | 需注意实际环境限制。 |
| 快速筛查 | Rapid Screening | 以速度优先的初筛方式。 | 不应直接等同于确诊。 |
| 多病原体检测 | Multi-pathogen Detection | 同时面向多个病原靶标的检测。 | 应明确靶标范围和方法。 |
| 多靶标检测 | Multi-target Detection | 同时检测多个目标。 | 需说明检测目标和方法。 |
| 综合征式检测 | Syndromic Testing | 围绕一组症状或场景进行多靶标检测。 | 需与具体靶标和方法匹配。 |
| 自动化识别 | Automated Identification | 通过自动化流程输出识别或判读结果。 | 需结合系统边界描述。 |
| 样本到结果检测 | Sample-to-Result Testing | 从样本进入到结果输出的一体化检测流程。 | 常用于自动化检测场景。 |
| 基层检测 | Primary-level Testing | 在基层医疗或基层实验条件下进行的检测。 | 适合公共卫生和下沉场景。 |
| 疾控场景 | CDC Scenario | 面向疾病预防控制体系的应用场景。 | 需结合具体单位和流程说明。 |
| 食品安全监管 | Food Safety Supervision | 面向食品安全监管与抽检的场景。 | 不应扩大为监管认可结论。 |
| 海关检测 | Customs Testing | 面向进出口或口岸检验的检测场景。 | 需与法规和流程边界一致。 |
| 企业质控 | Corporate Quality Control | 面向企业内部质量管理的检测需求。 | 适合说明内部应用潜力。 |
| 第三方检测机构 | Third-party Testing Lab | 独立于生产方的检测服务机构。 | 适合应用场景说明。 |
| 科研转化 | Research Translation | 将研究成果转化为应用或产品能力。 | 需区分研究阶段与产品阶段。 |
| 平台拓展 | Platform Extension | 向新应用、新芯片或新方法扩展。 | 适合表达平台潜力。 |
| 应急响应 | Emergency Response | 对突发事件的快速处置与检测支持。 | 适合公共卫生与现场场景。 |

要求：
- 明确这些是应用方向或场景描述；
- 不要将所有应用方向都表述为已上市或已注册产品；
- 使用"可用于支持""适合转化为应用板块""展示应用潜力"等谨慎表达。

## 10. 合规与传播边界术语

| 术语 | 英文/缩写 | 项目内含义 | 使用注意 |
|---|---|---|---|
| 合规边界 | Compliance Boundary | 对外表达的可接受范围。 | 需结合正式资料和审批要求。 |
| 合规声明 | Compliance Statement | 对内容边界、适用范围和表达限制的说明。 | 应在对外材料中保留。 |
| 注册声明 | Registration Statement | 医疗器械或相关产品的注册信息表达。 | 不得无依据使用。 |
| 医疗器械注册资料 | Medical Device Registration Materials | 作为注册申报或已注册产品依据的资料集合。 | 仅在正式资料可用时引用。 |
| 正式产品资料 | Official Product Materials | 公司正式发布的产品功能、性能和适用范围资料。 | 应作为最终口径来源。 |
| 经审批的对外材料 | Approved External Material | 已经内部审批可对外发布的材料。 | 需保留版本和审批记录。 |
| 科研论文 | Research Paper | 用于说明研究方法、结果和技术背景的文献。 | 不能直接等同于产品声明。 |
| 技术储备 | Technical Reserve | 当前已掌握、可后续转化的技术能力。 | 适合平台能力说明。 |
| 产品能力 | Product Capability | 产品或平台能够支持的功能范围。 | 需与正式资料一致。 |
| 临床评价 | Clinical Evaluation | 针对临床场景进行的性能或适用性评估。 | 不能直接写成正式注册结论。 |
| 性能指标 | Performance Metrics | 用于描述设备或方法能力的量化指标。 | 应以正式资料或验证结果为准。 |
| 适用范围 | Intended Use | 产品或材料适用的场景边界。 | 不得超范围推断。 |
| 应用潜力 | Application Potential | 技术或平台在某场景中的延展可能。 | 适合谨慎表达。 |
| 证据链 | Evidence Chain | 支撑技术表达的文献、试验和资料组合。 | 不可直接写成性能承诺。 |
| 文献报道 | Literature Report | 论文或公开文献中的结论表述。 | 需与正式资料区分。 |
| 研究显示 | Research Indicates | 对研究结论的谨慎引用方式。 | 比"证明"更稳妥。 |
| 禁止绝对化表达 | Prohibit Absolute Claims | 对"唯一""完全""百分百"等表达的限制。 | 对外内容应避免。 |
| 夸大宣传 | Exaggerated Marketing | 超出事实的宣传表达。 | 本项目中不应出现。 |
| 对外发布审阅 | External Release Review | 发布前对措辞、范围和版本进行检查。 | 建议在流程中固定。 |
| 内部评审 | Internal Review | 公司内部对材料进行技术、市场和合规检查。 | 建议先内部审阅再外发。 |

### 10.1 推荐表达与慎用表达

| 类型 | 推荐表达 | 慎用或禁用表达 | 说明 |
|---|---|---|---|
| 研究结论 | 研究显示 | 权威证明 | 前者保留研究语境，后者容易越界。 |
| 文献引用 | 文献报道 | 完全验证 | 文献可作为参考，不能替代正式验证结论。 |
| 应用表达 | 展示应用潜力 | 保证检测 | 潜力表述更适合研发和转化阶段。 |
| 能力描述 | 有助于构建多靶标检测能力 | 全面替代传统检测 | 避免把平台能力写成绝对替代关系。 |
| 性能说明 | 具体性能以正式产品资料和注册文件为准 | 百分百准确 | 以正式资料为准的表述最稳妥。 |
| 参考定位 | 可作为技术参考 | 临床金标准 | 前者是技术参考，后者需要严格证据。 |
| 监管相关 | 相关研究支持该技术方向 | 监管认可（无正式依据） | 无正式依据时不得借用监管措辞。 |

## 11. 部署、PDF 导出与运维术语

| 术语 | 英文/缩写 | 项目内含义 | 使用注意 |
|---|---|---|---|
| Windows Server | Windows Server | 目标部署环境所使用的 Windows 服务器系统。 | 部署步骤需兼容现有业务系统。 |
| 腾讯云 | Tencent Cloud | 服务器所在云环境。 | 需遵守现有服务器资源和权限边界。 |
| Nginx | Nginx | 用于静态资源托管和访问转发的服务。 | Windows Server 上需独立配置。 |
| server block | server block | Nginx 中的站点配置块。 | 不应影响已有系统配置。 |
| WebRoot | WebRoot | 静态资源根目录。 | 当前通常指 `dist/`。 |
| `C:\digifluidic-brochure` | — | 推荐部署目录。 | 需与其他业务目录隔离。 |
| `C:\digifluidic-brochure\dist` | — | 推荐静态站点根目录。 | 作为 Nginx root 目标。 |
| 8083 端口 | 8083 | 本项目建议使用的访问端口。 | 需避免与现有业务冲突。 |
| `try_files` | try_files | Nginx 中用于静态路由回退的配置指令。 | React Router 场景常用。 |
| reload | reload | 重新加载 Nginx 配置。 | 修改配置后先测试再 reload。 |
| Nginx 配置测试 | Nginx config test | 对 Nginx 配置进行语法检查。 | 修改后必须执行。 |
| 部署脚本 | Deployment Script | 自动化部署步骤脚本。 | 当前阶段不急于编写。 |
| `deploy.ps1` | deploy.ps1 | Windows PowerShell 部署脚本示例名称。 | 属于后续扩展内容。 |
| 构建产物 | Build Artifact | 构建生成的可部署文件。 | 应与源代码分开管理。 |
| 备份 | Backup | 部署前保存旧版本的副本。 | 回滚时依赖备份。 |
| 回滚 | Rollback | 发生问题后恢复到先前可用版本。 | 应提前准备回滚方案。 |
| PDF 自动导出 | PDF Auto Export | 使用 Playwright 自动生成 PDF。 | 重点检查分页和字体。 |
| 浏览器打印 | Browser Print | 通过浏览器"另存为 PDF"导出。 | 作为手动兜底方案。 |
| A4 | A4 | 常用纸张规格。 | PDF 与打印均需匹配。 |
| 页眉页脚 | Header/Footer | 打印或 PDF 页面顶部和底部信息。 | 导出时需检查是否显示正确。 |
| 背景图形 | Background Graphics | 打印时保留的背景与装饰元素。 | 导出 PDF 前通常需要开启。 |
| PDF QA | PDF Quality Assurance | PDF 导出质量检查。 | 重点检查封面、分页和字体。 |
| 版本归档 | Version Archive | 将已发布版本保存和记录。 | 便于后续追溯和恢复。 |

说明：
- 当前阶段不急于编写部署脚本；
- 部署必须与服务器上已有 RDPMS 系统、食品安全检验管理系统等隔离；
- 推荐端口为 8083；
- 不应修改已有系统的端口和 Nginx server block。

## 12. 缩写对照表

| 缩写 | 全称 | 中文说明 | 项目内使用场景 |
|---|---|---|---|
| AI | Artificial Intelligence | 人工智能 | 用于说明协作方式和工具能力 |
| API | Application Programming Interface | 应用程序接口 | 当前阶段不引入相关后端设计 |
| CMS | Content Management System | 内容管理系统 | 当前阶段不引入 |
| CSS | Cascading Style Sheets | 层叠样式表 | 用于页面样式与打印样式 |
| DMF | Digital Microfluidics | 数字微流控 | 微流控技术术语 |
| DNA | Deoxyribonucleic Acid | 脱氧核糖核酸 | 分子诊断和传感术语 |
| Git | Git | 分布式版本控制系统 | 用于提交和版本管理 |
| HPV | Human Papillomavirus | 人乳头瘤病毒 | 论文或应用术语示例 |
| HTML | HyperText Markup Language | 超文本标记语言 | 页面入口与结构 |
| IVD | In Vitro Diagnostic | 体外诊断 | 合规和产品分类语境 |
| JSON | JavaScript Object Notation | 轻量级结构化数据格式 | 可作为内容数据文件格式 |
| LAMP | Loop-mediated Isothermal Amplification | 环介导等温扩增 | 方法学术语 |
| Nginx | Nginx | 高性能 Web 服务器和反向代理 | 部署和静态站点托管 |
| npm | Node Package Manager | Node.js 包管理与脚本工具 | 安装依赖和运行脚本 |
| PCR | Polymerase Chain Reaction | 聚合酶链式反应 | 分子诊断术语 |
| PDF | Portable Document Format | 便携式文档格式 | 导出与发布格式 |
| PM2 | Process Manager 2 | Node 进程管理工具 | 当前阶段不引入 |
| POCT | Point-of-Care Testing | 近患者/现场检测 | 应用场景术语 |
| PRD | Product Requirements Document | 产品需求文档 | 项目基础文档之一 |
| QA | Quality Assurance | 质量保证/质量检查 | PDF 与文档审阅常用 |
| RDPMS | RDPMS | 现有业务系统名称缩写 | 作为部署隔离边界说明 |
| React | React | 前端 UI 框架 | 页面组件和交互实现 |
| RNA | Ribonucleic Acid | 核糖核酸 | 分子诊断术语 |
| RT-qPCR | Reverse Transcription quantitative PCR | 逆转录实时定量 PCR | 方法学和应用术语 |
| SARS-CoV-2 | SARS-CoV-2 | 新型冠状病毒 | 应用场景示例 |
| SCI | Science Citation Index | 科学引文索引 | 论文证据链说明 |
| TypeScript | TypeScript | 带类型的前端开发语言 | 数据文件和组件开发 |
| Vite | Vite | 前端构建工具 | 开发、构建和预览 |
| WebRoot | WebRoot | 网站根目录 | 部署目录与 Nginx root |
| VS Code | Visual Studio Code | 代码编辑器 | 当前项目主要开发环境 |

对 CMS、PM2、API 等当前不纳入范围的缩写，应在说明中明确"当前阶段不引入"或"仅作为边界说明出现"。

## 13. 术语使用原则

1. 同一术语在项目文档、网页内容和 PDF 输出中应尽量保持一致；
2. 首次出现的英文缩写应给出中文解释；
3. 产品名称、文件路径、命令名应保持大小写和拼写一致；
4. 科研论文相关术语应与产品注册声明区分；
5. 不确定的术语不得强行定义，应标记为待确认；
6. 对外宣传材料中的术语应接受技术、市场或合规负责人审阅；
7. 本术语表应随项目推进持续更新。

## 14. 术语维护规则

1. 新增关键文档时，如出现新术语，应同步补充本文件；
2. 新增产品方向、应用场景或技术路线时，应检查术语是否需要更新；
3. 如公司正式产品资料或注册文件中的术语与本文件不一致，应以后者正式资料为准，并同步修订本文件；
4. 如后续进入多语言版本，应保持中文术语、英文术语和缩写之间的一致映射；
5. 修改术语表后，应在 `PROJECT_CONTEXT.md` 的已完成事项或当前状态中同步记录。

## 15. 后续待补充术语

以下术语可暂列为待确认或后续补充：

1. 具体芯片商品名；
2. 正式注册证名称；
3. 各应用芯片的正式适用范围；
4. 公司标准品牌色名称；
5. 正式宣传材料版本号规则；
6. 最终 PDF 文件命名规则；
7. 多语言版本术语；
8. 论文数据库字段名；
9. 图表组件命名；
10. 部署脚本参数。

## 16. 关联文档

本文件与以下文档相互关联：

| 文档 | 关系 |
|---|---|
| `PROJECT_CONTEXT.md` | 当前项目上下文锚点，术语表应与其状态同步 |
| `docs/00_project/00_README.md` | 项目总览和文件入口说明 |
| `docs/00_project/01_PRD.md` | 需求范围与功能边界的术语依据 |
| `docs/00_project/02_ROADMAP.md` | 阶段推进和里程碑相关术语依据 |
| `docs/01_architecture/00_ARCHITECTURE_OVERVIEW.md` | 架构术语和整体技术路线说明 |
| `docs/02_content/00_CONTENT_STRATEGY.md` | 内容组织、表达方式和宣传边界 |
| `docs/02_content/01_CONTENT_MODEL.md` | 内容字段、结构化内容和数据模型 |
| `docs/03_design/00_DESIGN_GUIDELINE.md` | 页面、版式、视觉与打印术语 |
| `docs/05_deployment/01_WINDOWS_NGINX_DEPLOYMENT.md` | Windows Server 和 Nginx 部署术语 |
| `docs/06_pdf_export/00_PDF_EXPORT_OVERVIEW.md` | PDF 导出、预览和质量检查术语 |
