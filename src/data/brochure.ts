// 白皮书核心数据文件
// 所有宣传册内容均在此处集中维护，组件从此处读取数据

import {
  BrochureData,
  Paper,
} from '../types/brochure';

// ────────────────────────────────────────────
// 板块一：公司署名论文（11 篇）
// ────────────────────────────────────────────

export const companyPapers: Paper[] = [
  {
    id: 'cp-01', index: 1,
    title: 'Multiplex detection of foodborne pathogens by real-time loop-mediated isothermal amplification on a digital microfluidic chip',
    titleZh: '基于数字微流控芯片的实时 LAMP 食源性病原体多重检测',
    journal: 'Food Control', year: 2022, impactFactor: '6.0', quartile: 'Q1', citedBy: 27,
    authors: 'Xie, M., Chen, T., Xin, X., Cai, Z., Dong, C., & Lei, B.',
    citation: 'Xie, M., Chen, T., Xin, X., Cai, Z., Dong, C., & Lei, B. (2022). Multiplex detection of foodborne pathogens by real-time loop-mediated isothermal amplification on a digital microfluidic chip. Food Control, 136(3), 108824.',
    category: 'food-safety',
    tags: ['食品安全', 'LAMP', '多重检测', '现场检测'],
    applicationArea: ['食品安全', '现场检测'],
  },
  {
    id: 'cp-02', index: 2,
    title: '基于数字微流控技术的上呼吸道易感病毒多靶标快速检测方法的建立',
    titleZh: '基于数字微流控技术的上呼吸道易感病毒多靶标快速检测方法的建立',
    journal: '热带医学杂志', year: 2022, impactFactor: '1.236', quartile: '', citedBy: 1,
    authors: '李伟刚, 蒋晓霞, 汪海波, 王敏, 周傲白雪, 罗达圣, 陈天蓝, 董铖',
    citation: '李伟刚, 蒋晓霞, 汪海波, 王敏, 周傲白雪, 罗达圣, 陈天蓝, 董铖. (2022). 基于数字微流控技术的上呼吸道易感病毒多靶标快速检测方法的建立. 热带医学杂志, 22(11), 1487–1492.',
    category: 'respiratory',
    tags: ['呼吸道病原体', '多靶标检测', '快速检测'],
    applicationArea: ['呼吸道病原体', '公共卫生'],
  },
  {
    id: 'cp-03', index: 3,
    title: 'A digital microfluidic RT-qPCR platform for multiple detections of respiratory pathogens',
    titleZh: '数字微流控 RT-qPCR 平台用于多重呼吸道病原体检测',
    journal: 'Micromachines', year: 2022, impactFactor: '—', quartile: '', citedBy: 9,
    authors: 'Huang, H., Huang, K., Sun, Y., Luo, D., Wang, M., Chen, T., Li, M., Duan, J., Huang, L., & Dong, C.',
    citation: 'Huang, H., Huang, K., Sun, Y., Luo, D., Wang, M., Chen, T., Li, M., Duan, J., Huang, L., & Dong, C. (2022). A digital microfluidic RT-qPCR platform for multiple detections of respiratory pathogens. Micromachines, 13(10), 1650.',
    category: 'respiratory',
    tags: ['呼吸道病原体', 'RT-qPCR', '多重检测'],
    applicationArea: ['呼吸道病原体'],
  },
  {
    id: 'cp-04', index: 4,
    title: 'A digital microfluidic platform coupled with colorimetric loop-mediated isothermal amplification for on-site visual diagnosis of multiple disease',
    titleZh: '数字微流控平台联合比色 LAMP 用于多病现场可视化诊断',
    journal: 'Lab on a Chip', year: 2023, impactFactor: '6.1', quartile: 'Q1', citedBy: 7,
    authors: 'Xie, M., Chen, T., Cai, Z., Lei, B., & Dong, C.',
    citation: 'Xie, M., Chen, T., Cai, Z., Lei, B., & Dong, C. (2023). A digital microfluidic platform coupled with colorimetric loop-mediated isothermal amplification for on-site visual diagnosis of multiple disease. Lab on a Chip, 23(9).',
    category: 'food-safety',
    tags: ['食品安全', 'LAMP', '比色检测', '现场诊断'],
    applicationArea: ['食品安全', '现场检测'],
  },
  {
    id: 'cp-05', index: 5,
    title: 'A syndromic diagnostic assay on a macrochannel-to-digital microfluidic platform for automatic identification of multiple respiratory pathogens',
    titleZh: '宏通道-数字混合微流控平台用于多重呼吸道病原体综合征式自动识别',
    journal: 'Lab on a Chip', year: 2023, impactFactor: '6.1', quartile: 'Q1', citedBy: 0,
    authors: 'Dong, C., Li, F., Sun, Y., Long, D., Chen, C., Li, M., Wei, T., Martins, R. P., Chen, T., & Mak, P.-I.',
    citation: 'Dong, C., Li, F., Sun, Y., Long, D., Chen, C., Li, M., Wei, T., Martins, R. P., Chen, T., & Mak, P.-I. (2023). A syndromic diagnostic assay on a macrochannel-to-digital microfluidic platform for automatic identification of multiple respiratory pathogens. Lab on a Chip.',
    category: 'respiratory',
    tags: ['呼吸道病原体', '综合征式检测', '自动化识别', '混合微流控'],
    applicationArea: ['呼吸道病原体', '自动化检测'],
  },
  {
    id: 'cp-06', index: 6,
    title: '基于数字微流控芯片平台进行动物源性成分快速初筛的应用研究',
    titleZh: '基于数字微流控芯片平台进行动物源性成分快速初筛的应用研究',
    journal: '质量安全与检验检测', year: 2023, impactFactor: '0.396', quartile: '', citedBy: 0,
    authors: '汪菊, 王维霞, 姜永莉, 陈天蓝, 梁誉斌, 杨丁一, 王苗苗, 邹明强',
    citation: '汪菊, 王维霞, 姜永莉, 陈天蓝, 梁誉斌, 杨丁一, 王苗苗, 邹明强. (2023). 基于数字微流控芯片平台进行动物源性成分快速初筛的应用研究. 质量安全与检验检测, 33(5), 66–71+82.',
    category: 'food-safety',
    tags: ['食品安全', '动物源性成分', '快速筛查'],
    applicationArea: ['食品安全', '监管检测'],
  },
  {
    id: 'cp-07', index: 7,
    title: 'An all-in-one platform for on-site multiplex foodborne pathogen detection based on channel-digital hybrid microfluidics',
    titleZh: '基于通道-数字混合微流控的现场多重食源性病原体一体化检测平台',
    journal: 'Biosensors', year: 2024, impactFactor: '5.4', quartile: 'Q1', citedBy: 0,
    authors: 'Xie, M., Chen, T., Cai, Z., Lei, B., & Dong, C.',
    citation: 'Xie, M., Chen, T., Cai, Z., Lei, B., & Dong, C. (2024). An all-in-one platform for on-site multiplex foodborne pathogen detection based on channel-digital hybrid microfluidics. Biosensors, 14(1), 50.',
    category: 'food-safety',
    tags: ['食品安全', '混合微流控', '现场检测', '多重检测'],
    applicationArea: ['食品安全', '现场检测'],
  },
  {
    id: 'cp-08', index: 21,
    title: 'Clinical evaluation of a novel digital microfluidic based point-of-care test platform for detection of SARS-CoV-2 and influenza A/B',
    titleZh: '新型数字微流控 POCT 平台用于 SARS-CoV-2 与甲/乙型流感检测的临床评价',
    journal: 'Journal of Clinical Virology', year: 2024, impactFactor: '3.81', quartile: 'Q1', citedBy: 0,
    authors: 'Huang, H., Long, D., Lin, Y., Dong, C., Huang, W., Zhang, M., Wan, L., Gou, H., Chen, T., & Li, F.',
    citation: 'Huang, H., Long, D., Lin, Y., Dong, C., Huang, W., Zhang, M., Wan, L., Gou, H., Chen, T., & Li, F. (2024). Clinical evaluation of a novel digital microfluidic based point-of-care test platform for detection of SARS-CoV-2 and influenza A/B. Journal of Clinical Virology, 173, 105688.',
    category: 'clinical-poct',
    tags: ['临床评价', 'POCT', 'SARS-CoV-2', '流感'],
    applicationArea: ['临床 POCT', '公共卫生'],
  },
  {
    id: 'cp-09', index: 22,
    title: 'Electrochemical DNA biosensor for HPV-16 detection based on novel carbon quantum dots/APTES composite nanofilm',
    titleZh: '基于碳量子点/APTES 复合纳米膜的 HPV-16 电化学 DNA 生物传感器',
    journal: 'Microchemical Journal', year: 2024, impactFactor: '4.848', quartile: 'Q1', citedBy: 2,
    authors: 'Yu, J., Dong, C., Yang, Y., Yu, S., & Chen, T.',
    citation: 'Yu, J., Dong, C., Yang, Y., Yu, S., & Chen, T. (2024). Electrochemical DNA biosensor for HPV-16 detection based on novel carbon quantum dots/APTES composite nanofilm. Microchemical Journal, 204(5), 110949.',
    category: 'clinical-poct',
    tags: ['电化学传感', 'HPV', 'DNA 生物传感器', '纳米材料'],
    applicationArea: ['临床 POCT', '专项检测'],
  },
  {
    id: 'cp-10', index: 23,
    title: 'Current advances and future prospects of bulk and microfluidic-enabled electroporation systems',
    titleZh: '体相与微流控辅助电穿孔系统的研究进展与展望',
    journal: 'Biotechnology and Bioengineering', year: 2025, impactFactor: '3.6', quartile: 'Q3', citedBy: 0,
    authors: 'Li, F., Dong, C., Chen, T., Yu, S., & Chen, C.',
    citation: 'Li, F., Dong, C., Chen, T., Yu, S., & Chen, C. (2025). Current advances and future prospects of bulk and microfluidic-enabled electroporation systems. Biotechnology and Bioengineering, 1–19.',
    category: 'clinical-poct',
    tags: ['电穿孔', '微流控', '合成生物学', '综述'],
    applicationArea: ['专项检测', '技术储备'],
  },
  {
    id: 'cp-11', index: 24,
    title: 'A sample-to-answer digital microfluidic multiplexed PCR system for syndromic pathogen detection in respiratory tract infection',
    titleZh: '用于呼吸道感染综合征病原体检测的样本到结果数字微流控多重 PCR 系统',
    journal: 'Lab on a Chip', year: 2025, impactFactor: '5.4', quartile: 'Q2', citedBy: 0,
    authors: 'Bai, H., Hu, J., Liu, T., Wan, L., Dong, C., Luo, D., Li, F., Yuan, Z., Tang, Y., Chen, T., Wang, S., Gou, H., Zhou, Y., Ying, B., Huang, J., & Hu, W.',
    citation: 'Bai, H., Hu, J., Liu, T., Wan, L., Dong, C., Luo, D., Li, F., Yuan, Z., Tang, Y., Chen, T., Wang, S., Gou, H., Zhou, Y., Ying, B., Huang, J., & Hu, W. (2025). A sample-to-answer digital microfluidic multiplexed PCR system for syndromic pathogen detection in respiratory tract infection. Lab on a Chip.',
    category: 'respiratory',
    tags: ['样本到结果', '多重 PCR', '呼吸道感染', '综合征式检测'],
    applicationArea: ['呼吸道病原体', '自动化检测'],
  },
];

// ────────────────────────────────────────────
// 板块二：核心团队技术积累（10 篇）
// 注：以下为核心团队历史研究积累，非公司署名论文
// ────────────────────────────────────────────

export const teamPapers: Paper[] = [
  {
    id: 'tp-01', index: 8,
    title: 'A novel and robust single-cell trapping method on digital microfluidics',
    titleZh: '数字微流控上新型稳健单细胞捕获方法',
    journal: 'Bio-protocol', year: 2020, impactFactor: '0.8', quartile: 'Q3', citedBy: 3,
    authors: 'Zhai, J., Li, H., Wong, A. H.-H., Dong, C., Yi, S., Jia, Y., & Mak, P.-I.',
    citation: 'Zhai, J., Li, H., Wong, A. H.-H., Dong, C., Yi, S., Jia, Y., & Mak, P.-I. (2020). A novel and robust single-cell trapping method on digital microfluidics. Bio-protocol, 10(19).',
    category: 'platform-tech',
    tags: ['单细胞捕获', '数字微流控', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
  {
    id: 'tp-02', index: 9,
    title: 'Turning on/off satellite droplet ejection for flexible sample delivery on digital microfluidics',
    titleZh: '数字微流控上卫星液滴弹射开关控制与灵活样本递送',
    journal: 'Lab on a Chip', year: 2020, impactFactor: '6.1', quartile: 'Q1', citedBy: 15,
    authors: 'Li, H., Shen, R., Dong, C., Chen, T., Jia, Y., Mak, P.-I., & Martins, R. P.',
    citation: 'Li, H., Shen, R., Dong, C., Chen, T., Jia, Y., Mak, P.-I., & Martins, R. P. (2020). Turning on/off satellite droplet ejection for flexible sample delivery on digital microfluidics. Lab on a Chip, 20(20).',
    category: 'platform-tech',
    tags: ['液滴操控', '样本递送', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
  {
    id: 'tp-03', index: 10,
    title: 'A digital microfluidic system with 3D microstructures for single-cell culture',
    titleZh: '具有 3D 微结构的数字微流控单细胞培养系统',
    journal: 'Microsystems & Nanoengineering', year: 2020, impactFactor: '7.9', quartile: 'Q1', citedBy: 49,
    authors: 'Zhai, J., Li, H., Wong, A. H.-H., Dong, C., Yi, S., Jia, Y., Mak, P.-I., Deng, C., & Martins, R. P.',
    citation: 'Zhai, J., Li, H., Wong, A. H.-H., Dong, C., Yi, S., Jia, Y., Mak, P.-I., Deng, C., & Martins, R. P. (2020). A digital microfluidic system with 3D microstructures for single-cell culture. Microsystems & Nanoengineering, 6(1), 10.',
    category: 'platform-tech',
    tags: ['单细胞培养', '3D 微结构', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
  {
    id: 'tp-04', index: 11,
    title: 'LampPort: a handheld digital microfluidic device for loop-mediated isothermal amplification (LAMP)',
    titleZh: 'LampPort：用于 LAMP 的手持式数字微流控设备',
    journal: 'Biomedical Microdevices', year: 2019, impactFactor: '2.8', quartile: 'Q2', citedBy: 50,
    authors: 'Wan, L., Gao, J., Chen, T., Dong, C., Li, H., Wen, Y.-Z., Lun, Z.-R., Jia, Y., Mak, P.-I., & Martins, R. P.',
    citation: 'Wan, L., Gao, J., Chen, T., Dong, C., Li, H., Wen, Y.-Z., Lun, Z.-R., Jia, Y., Mak, P.-I., & Martins, R. P. (2019). LampPort: a handheld digital microfluidic device for loop-mediated isothermal amplification (LAMP). Biomedical Microdevices, 21(1).',
    category: 'platform-tech',
    tags: ['LAMP', '手持设备', '数字微流控', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
  {
    id: 'tp-05', index: 12,
    title: 'Hydrodynamic-flow-enhanced rapid mixer for isothermal DNA hybridization kinetics analysis on digital microfluidics platform',
    titleZh: '数字微流控平台上流体动力增强快速混合器用于等温 DNA 杂交动力学分析',
    journal: 'Sensors and Actuators B: Chemical', year: 2019, impactFactor: '8.4', quartile: 'Q1', citedBy: 12,
    authors: 'Li, M., Dong, C., Law, M.-K., Jia, Y., Mak, P.-I., & Martins, R. P.',
    citation: 'Li, M., Dong, C., Law, M.-K., Jia, Y., Mak, P.-I., & Martins, R. P. (2019). Hydrodynamic-flow-enhanced rapid mixer for isothermal DNA hybridization kinetics analysis on digital microfluidics platform. Sensors and Actuators B: Chemical, 287, 390–397.',
    category: 'platform-tech',
    tags: ['混合器', 'DNA 杂交', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
  {
    id: 'tp-06', index: 13,
    title: 'A digital microfluidic system for loop-mediated isothermal amplification and sequence specific pathogen detection',
    titleZh: '用于 LAMP 与序列特异性病原体检测的数字微流控系统',
    journal: 'Scientific Reports', year: 2017, impactFactor: '4.6', quartile: 'Q1', citedBy: 58,
    authors: 'Wan, L., Chen, T., Gao, J., Dong, C., Wong, A. H.-H., Jia, Y., Mak, P.-I., Deng, C., & Martins, R. P.',
    citation: 'Wan, L., Chen, T., Gao, J., Dong, C., Wong, A. H.-H., Jia, Y., Mak, P.-I., Deng, C., & Martins, R. P. (2017). A digital microfluidic system for loop-mediated isothermal amplification and sequence specific pathogen detection. Scientific Reports, 7(1), 14586.',
    category: 'platform-tech',
    tags: ['LAMP', '病原体检测', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
  {
    id: 'tp-07', index: 14,
    title: 'A 3D microblade structure for precise and parallel droplet splitting on digital microfluidic chips',
    titleZh: '数字微流控芯片上用于精确并行液滴分裂的 3D 微刀片结构',
    journal: 'Lab on a Chip', year: 2017, impactFactor: '6.1', quartile: 'Q1', citedBy: 33,
    authors: 'Dong, C., Jia, Y., Gao, J., Chen, T., Mak, P.-I., Vai, M.-I., & Martins, R. P.',
    citation: 'Dong, C., Jia, Y., Gao, J., Chen, T., Mak, P.-I., Vai, M.-I., & Martins, R. P. (2017). A 3D microblade structure for precise and parallel droplet splitting on digital microfluidic chips. Lab on a Chip, 17(5), 896–904.',
    category: 'platform-tech',
    tags: ['液滴分裂', '3D 结构', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
  {
    id: 'tp-08', index: 15,
    title: 'Sub-7-second genotyping of single-nucleotide polymorphism by high-resolution melting curve analysis on a thermal digital microfluidic device',
    titleZh: '热数字微流控器件上基于高分辨率熔解曲线分析的 7 秒内 SNP 基因分型',
    journal: 'Lab on a Chip', year: 2016, impactFactor: '6.1', quartile: 'Q1', citedBy: 21,
    authors: 'Chen, T., Jia, Y., Dong, C., Gao, J., Mak, P.-I., & Martins, R. P.',
    citation: 'Chen, T., Jia, Y., Dong, C., Gao, J., Mak, P.-I., & Martins, R. P. (2016). Sub-7-second genotyping of single-nucleotide polymorphism by high-resolution melting curve analysis on a thermal digital microfluidic device. Lab on a Chip, 16(4), 743–752.',
    category: 'platform-tech',
    tags: ['SNP 基因分型', '熔解曲线', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
  {
    id: 'tp-09', index: 16,
    title: 'On the droplet velocity and electrode lifetime of digital microfluidics: voltage actuation techniques and comparison',
    titleZh: '数字微流控液滴速度与电极寿命研究：电压驱动技术比较',
    journal: 'Microfluidics and Nanofluidics', year: 2015, impactFactor: '2.8', quartile: 'Q2', citedBy: 35,
    authors: 'Dong, C., Chen, T., Gao, J., Jia, Y., Mak, P.-I., Vai, M.-I., & Martins, R. P.',
    citation: 'Dong, C., Chen, T., Gao, J., Jia, Y., Mak, P.-I., Vai, M.-I., & Martins, R. P. (2015). On the droplet velocity and electrode lifetime of digital microfluidics: voltage actuation techniques and comparison. Microfluidics and Nanofluidics, 18(4), 673–683.',
    category: 'platform-tech',
    tags: ['液滴速度', '电极寿命', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
  {
    id: 'tp-10', index: 17,
    title: 'Adhesion promoter for a multi-dielectric-layer on a digital microfluidic chip',
    titleZh: '数字微流控芯片多介电层粘附促进剂研究',
    journal: 'RSC Advances', year: 2015, impactFactor: '3.9', quartile: 'Q1', citedBy: 16,
    authors: 'Gao, J., Chen, T., Dong, C., Jia, Y., Mak, P.-I., Vai, M.-I., & Martins, R. P.',
    citation: 'Gao, J., Chen, T., Dong, C., Jia, Y., Mak, P.-I., Vai, M.-I., & Martins, R. P. (2015). Adhesion promoter for a multi-dielectric-layer on a digital microfluidic chip. RSC Advances, 5(60), 48626–48630.',
    category: 'platform-tech',
    tags: ['介电层', '粘附促进', '芯片工艺', '底层技术'],
    applicationArea: ['平台底层技术'],
  },
];

// ────────────────────────────────────────────
// 合并论文列表（供旧版组件 data.papers 使用）
// ────────────────────────────────────────────

const allPapers: Paper[] = [...companyPapers, ...teamPapers];

// ────────────────────────────────────────────
// 白皮书完整数据
// ────────────────────────────────────────────

export const brochureData: BrochureData = {
  title: 'VHunter Plus 微流控核酸检测平台应用白皮书',
  titleEn: 'VHunter Plus Microfluidic Nucleic Acid Detection Platform — Application White Paper',
  version: 'v2026.06',
  lastUpdated: '2026-06-18',

  // 封面页数据
  cover: {
    title: 'VHunter Plus 微流控核酸检测平台',
    subtitle: '应用白皮书',
    companyName: '珠海市迪奇孚瑞生物科技有限公司',
    companyNameEn: 'Zhuhai Digifluidic Bio-tech Co., Ltd.',
    version: 'v2026.06',
    date: '2026 年 6 月',
  },

  // 执行摘要
  executiveSummary: {
    title: '执行摘要',
    paragraphs: [
      '珠海市迪奇孚瑞生物科技有限公司（Digifluidic）专注于数字微流控核酸检测技术的研发与产业化，核心产品 VHunter Plus 全自动核酸分析仪集成了数字微流控芯片、自动化样本处理与多重核酸扩增检测能力。',
      '公司核心团队在数字微流控领域深耕十余年，已在 Food Control、Lab on a Chip、Biosensors、Journal of Clinical Virology 等高影响力 SCI 期刊发表公司署名论文 11 篇，核心团队历史研究积累论文 10 篇，覆盖食品安全、呼吸道病原体检测、临床 POCT 及微流控底层技术等方向。',
      '本白皮书系统梳理了 VHunter Plus 平台的技术路线、应用场景与论文证据链，旨在为客户、合作伙伴及相关机构提供全面的技术参考。',
    ],
    highlights: [
      '公司署名 SCI 论文 11 篇，覆盖 Q1 区期刊 8 篇',
      '核心团队技术积累论文 10 篇，发表年份跨度 2012–2025 年',
      '应用方向覆盖食品安全、呼吸道病原体、临床 POCT 及微流控底层技术',
      'Lab on a Chip 发表论文 7 篇，为团队最高频发表期刊',
    ],
  },

  // 平台概览
  platformOverview: {
    title: 'VHunter Plus 平台概览',
    description: 'VHunter Plus 全自动核酸分析仪基于数字微流控技术，实现从样本到结果的全流程自动化核酸检测，支持多重病原体同步检测，适用于食品安全、呼吸道病原体、临床 POCT 等多种应用场景。',
    specs: [
      { label: '检测技术', value: 'LAMP / RT-qPCR / 多重 PCR' },
      { label: '核心平台', value: '数字微流控芯片' },
      { label: '检测通量', value: '多靶标同步检测' },
      { label: '操作方式', value: '全自动化，样本到结果' },
      { label: '应用场景', value: '食品安全 / 呼吸道病原体 / 临床 POCT / 公共卫生' },
      { label: '输出形式', value: '定量 / 定性结果报告' },
    ],
  },

  // 应用矩阵
  applicationMatrix: [
    {
      direction: '食品安全',
      technology: 'LAMP / 多重检测',
      highlight: '现场快速筛查、多靶标检测、食品安全场景适配',
      paperIds: ['cp-01', 'cp-04', 'cp-06', 'cp-07'],
    },
    {
      direction: '呼吸道病原体',
      technology: 'RT-qPCR / 多重 PCR',
      highlight: '综合征式检测、自动化识别、多病原体覆盖',
      paperIds: ['cp-02', 'cp-03', 'cp-05', 'cp-11'],
    },
    {
      direction: '临床 POCT',
      technology: '样本到结果 POCT',
      highlight: '自动化、快速、近患者检测潜力',
      paperIds: ['cp-08', 'cp-09', 'cp-10'],
    },
    {
      direction: '平台底层技术',
      technology: '液滴操控 / 芯片工艺 / 传感集成',
      highlight: '平台拓展性、方法学储备、科研转化潜力',
      paperIds: ['tp-01', 'tp-02', 'tp-03', 'tp-04', 'tp-05', 'tp-06', 'tp-07', 'tp-08', 'tp-09', 'tp-10'],
    },
  ],

  // 合并论文列表（供组件使用）
  papers: allPapers,

  // 合规声明
  complianceNotice: {
    title: '合规声明',
    paragraphs: [
      '本白皮书所引用的科研论文及研究数据仅作为技术研究基础、应用方向和平台能力说明，不构成对具体产品性能、适用范围或注册状态的承诺。',
      '标注"核心团队历史研究积累"的论文为核心团队成员在加入公司前或非公司署名情况下发表的研究成果，仅用于说明团队技术背景，不代表公司产品能力的直接证明。',
      '具体产品功能、性能指标、适用范围及注册状态，以公司正式产品资料、注册文件或经审批的对外材料为准。',
      '本材料仅供技术交流与参考，对外发布前需经公司内部技术、市场或合规负责人确认。',
    ],
  },

  // 公司信息
  company: {
    nameCn: '珠海市迪奇孚瑞生物科技有限公司',
    nameEn: 'Zhuhai Digifluidic Bio-tech Co., Ltd.',
    brand: 'Digifluidic',
    product: 'VHunter Plus 全自动核酸分析仪',
  },

  // 联系方式
  contact: {
    companyName: '珠海市迪奇孚瑞生物科技有限公司',
    email: 'contact@digifluidic.com',
    phone: '400-xxx-xxxx',
    website: 'www.digifluidic.com',
    address: '广东省珠海市',
  },

  // 论文统计摘要
  paperStats: {
    totalCompany: 11,
    totalTeam: 10,
    sciCount: 19,
    chineseCoreCount: 2,
    q1Count: 14,
    yearRange: '2012–2025',
    topJournal: 'Lab on a Chip',
    topJournalCount: 7,
  },
};
