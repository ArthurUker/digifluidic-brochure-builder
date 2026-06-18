// 白皮书内容数据文件
// 本文件是宣传册所有页面内容的唯一数据源
// 修改内容时只需修改本文件，组件会自动读取

import type { BrochureData } from '../types/brochure';

/** 白皮书完整数据 */
export const brochureData: BrochureData = {

  // ──────────────────────────────────────────
  // 封面页
  // ──────────────────────────────────────────
  cover: {
    title: 'VHunter Plus 微流控核酸检测平台',
    subtitle: '产品文献应用与技术验证白皮书',
    companyName: '珠海市迪奇孚瑞生物科技有限公司',
    companyNameEn: 'Zhuhai Digifluidic Bio-tech Co., Ltd.',
    version: 'v2026.06',
    date: '2026 年 6 月',
  },

  // ──────────────────────────────────────────
  // 执行摘要
  // ──────────────────────────────────────────
  executiveSummary: {
    title: '执行摘要',
    paragraphs: [
      'Digifluidic VHunter Plus 全自动核酸分析仪是珠海市迪奇孚瑞生物科技有限公司自主研发的微流控核酸检测平台，集成数字微流控芯片、自动化样本处理和多重核酸扩增检测能力。',
      '本白皮书汇总了支撑该平台的核心技术积累，涵盖食源性病原体检测、呼吸道病原体检测、临床 POCT 及公共卫生应急检测等应用方向，并梳理了相关科研论文证据链。',
      '本材料中引用的文献数据仅作为技术研究基础和应用方向说明，不构成具体产品性能承诺。具体产品功能、性能指标及适用范围以公司正式产品资料和注册文件为准。',
    ],
    highlights: [
      '全自动样本到结果检测流程',
      '支持 LAMP、RT-qPCR、多重 PCR 多种方法学',
      '覆盖食品安全、呼吸道病原体、公共卫生等多应用场景',
      '基于 2012–2025 年约 24 篇 SCI 及核心期刊论文的技术积累',
    ],
  },

  // ──────────────────────────────────────────
  // 平台概览
  // ──────────────────────────────────────────
  platformOverview: {
    title: 'VHunter Plus 全自动核酸分析仪',
    description:
      'VHunter Plus 采用通道-数字混合微流控技术，将样本制备、核酸扩增和结果检测集成于单一芯片平台，实现从样本到结果的全自动化检测流程。',
    specs: [
      { label: '检测方法', value: 'LAMP / RT-qPCR / 多重 PCR' },
      { label: '芯片类型', value: '微流控核酸检测芯片（可更换）' },
      { label: '检测通量', value: '支持多靶标同步检测' },
      { label: '自动化程度', value: '样本到结果全流程自动化' },
      { label: '应用场景', value: '食品安全 / 呼吸道病原体 / 临床 POCT / 公共卫生' },
    ],
  },

  // ──────────────────────────────────────────
  // 论文证据链（示例数据，后续按实际论文补充）
  // ──────────────────────────────────────────
  papers: [
    {
      id: 1,
      title: '基于数字微流控芯片的实时 LAMP 食源性病原体多重检测',
      authors: 'Digifluidic 研究团队等',
      journal: 'Lab on a Chip',
      year: 2022,
      tags: ['LAMP', '数字微流控', '多重检测'],
      applicationArea: ['食品安全'],
    },
    {
      id: 2,
      title: '数字微流控平台上的多重呼吸道病原体 RT-qPCR 检测',
      authors: 'Digifluidic 研究团队等',
      journal: 'Biosensors and Bioelectronics',
      year: 2023,
      tags: ['RT-qPCR', '数字微流控', '多重检测'],
      applicationArea: ['呼吸道病原体'],
    },
    {
      id: 3,
      title: '基于数字微流控的 SARS-CoV-2 与甲/乙型流感 POCT 平台临床评价',
      authors: 'Digifluidic 研究团队等',
      journal: 'Analytical Chemistry',
      year: 2024,
      tags: ['样本到结果', 'POCT', '临床评价'],
      applicationArea: ['临床 POCT'],
    },
  ],

  // ──────────────────────────────────────────
  // 应用矩阵
  // ──────────────────────────────────────────
  applicationMatrix: [
    {
      area: '食品安全',
      product: '食源性病原体检测芯片',
      technology: 'LAMP / 多重检测',
      highlight: '现场快速筛查、多靶标检测、食品安全场景适配',
    },
    {
      area: '呼吸道病原体',
      product: '呼吸道病原体检测芯片',
      technology: 'RT-qPCR / 多重 PCR',
      highlight: '综合征式检测、自动化识别、多病原体覆盖',
    },
    {
      area: '临床 POCT',
      product: 'SARS-CoV-2 / 流感相关检测方案',
      technology: '样本到结果 POCT',
      highlight: '自动化、快速、近患者检测潜力',
    },
    {
      area: '公共卫生',
      product: '多病原体应急检测芯片',
      technology: '自动化综合检测',
      highlight: '应急响应、基层检测、公共卫生监测',
    },
    {
      area: '专项检测',
      product: 'HPV / 电化学相关技术储备',
      technology: '电化学传感 / 微流控操作',
      highlight: '平台拓展性、方法学储备、科研转化潜力',
    },
  ],

  // ──────────────────────────────────────────
  // 合规声明（必填，不得省略）
  // ──────────────────────────────────────────
  complianceNotice: {
    title: '合规声明',
    paragraphs: [
      '本白皮书中引用的科研论文数据、文献结果及技术描述，仅作为平台技术研究基础和应用方向说明，不构成具体产品性能承诺，不代表所有方向均已有正式注册产品。',
      '具体产品名称、注册状态、性能指标及适用范围，以公司正式产品资料、注册证书和经审批的对外材料为准。',
      '本材料仅供参考，不作为医疗诊断依据。如需了解产品详细信息，请联系公司官方渠道。',
    ],
  },

  // ──────────────────────────────────────────
  // 联系方式
  // ──────────────────────────────────────────
  contact: {
    companyName: '珠海市迪奇孚瑞生物科技有限公司',
    address: '广东省珠海市',
    email: 'contact@digifluidic.com',
    website: 'www.digifluidic.com',
  },
};
