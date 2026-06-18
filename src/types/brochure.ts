// 白皮书核心类型定义文件

// ────────────────────────────────────────────
// 论文数据类型
// ────────────────────────────────────────────

/** 论文应用方向分类 */
export type PaperCategory =
  | 'food-safety'      // 食品安全
  | 'respiratory'      // 呼吸道病原体
  | 'clinical-poct'    // 临床 POCT / 专项检测
  | 'platform-tech';   // 微流控底层技术

/** 单篇论文数据结构 */
export interface Paper {
  /** 唯一标识符 */
  id: string;
  /** 原始序号 */
  index: number;
  /** 英文标题 */
  title: string;
  /** 中文标题或中文简述 */
  titleZh: string;
  /** 期刊名称 */
  journal: string;
  /** 发表年份 */
  year: number;
  /** 影响因子 */
  impactFactor: string;
  /** 分区 */
  quartile: string;
  /** 被引次数 */
  citedBy: number;
  /** 作者列表（格式化字符串） */
  authors: string;
  /** 统一引用格式（APA 7th 简化版） */
  citation: string;
  /** 应用方向分类 */
  category: PaperCategory;
  /** 标签列表 */
  tags: string[];
  /** 应用领域（兼容旧组件字段） */
  applicationArea: string[];
}

// ────────────────────────────────────────────
// 封面页类型
// ────────────────────────────────────────────

/** 封面页数据 */
export interface CoverData {
  /** 主标题 */
  title: string;
  /** 副标题 */
  subtitle: string;
  /** 中文公司名 */
  companyName: string;
  /** 英文公司名 */
  companyNameEn: string;
  /** 版本号 */
  version: string;
  /** 日期 */
  date: string;
}

// ────────────────────────────────────────────
// 执行摘要类型
// ────────────────────────────────────────────

/** 执行摘要数据 */
export interface ExecutiveSummaryData {
  /** 板块标题 */
  title: string;
  /** 正文段落列表 */
  paragraphs: string[];
  /** 亮点列表（可选） */
  highlights?: string[];
}

// ────────────────────────────────────────────
// 平台概览类型
// ────────────────────────────────────────────

/** 平台规格参数条目 */
export interface PlatformSpec {
  /** 参数名称 */
  label: string;
  /** 参数值 */
  value: string;
}

/** 平台概览数据 */
export interface PlatformOverviewData {
  /** 板块标题 */
  title: string;
  /** 平台描述 */
  description: string;
  /** 规格参数列表 */
  specs: PlatformSpec[];
}

// ────────────────────────────────────────────
// 应用矩阵类型
// ────────────────────────────────────────────

/** 应用矩阵条目 */
export interface ApplicationMatrixItem {
  /** 应用方向 */
  direction: string;
  /** 技术路线 */
  technology: string;
  /** 表达重点 */
  highlight: string;
  /** 代表性论文 ID 列表 */
  paperIds: string[];
}

// ────────────────────────────────────────────
// 合规声明类型
// ────────────────────────────────────────────

/** 合规声明数据 */
export interface ComplianceNoticeData {
  /** 板块标题 */
  title: string;
  /** 声明段落列表 */
  paragraphs: string[];
}

// ────────────────────────────────────────────
// 联系方式类型
// ────────────────────────────────────────────

/** 联系方式 */
export interface ContactInfo {
  /** 公司中文名（兼容旧组件字段） */
  companyName: string;
  /** 邮箱 */
  email: string;
  /** 电话 */
  phone: string;
  /** 网站 */
  website: string;
  /** 地址（可选，兼容旧组件字段） */
  address?: string;
}

// ────────────────────────────────────────────
// 公司信息类型
// ────────────────────────────────────────────

/** 公司基本信息 */
export interface CompanyInfo {
  /** 中文公司名 */
  nameCn: string;
  /** 英文公司名 */
  nameEn: string;
  /** 品牌名 */
  brand: string;
  /** 核心产品名称 */
  product: string;
}

// ────────────────────────────────────────────
// 论文统计摘要类型
// ────────────────────────────────────────────

/** 论文统计摘要（用于封面或摘要页） */
export interface PaperStats {
  /** 公司署名论文总数 */
  totalCompany: number;
  /** 核心团队技术积累论文总数 */
  totalTeam: number;
  /** SCI 论文数 */
  sciCount: number;
  /** 中文核心期刊论文数 */
  chineseCoreCount: number;
  /** Q1 区论文数 */
  q1Count: number;
  /** 发表年份跨度 */
  yearRange: string;
  /** 发表最多的期刊 */
  topJournal: string;
  /** 该期刊论文数 */
  topJournalCount: number;
}

// ────────────────────────────────────────────
// 白皮书顶层数据类型
// ────────────────────────────────────────────

/** 白皮书完整数据接口 */
export interface BrochureData {
  /** 中文标题 */
  title: string;
  /** 英文标题 */
  titleEn: string;
  /** 版本号 */
  version: string;
  /** 最后更新日期 */
  lastUpdated: string;
  /** 公司信息 */
  company: CompanyInfo;
  /** 联系方式 */
  contact: ContactInfo;
  /** 论文统计摘要 */
  paperStats: PaperStats;
  /** 封面页数据 */
  cover: CoverData;
  /** 执行摘要数据 */
  executiveSummary: ExecutiveSummaryData;
  /** 平台概览数据 */
  platformOverview: PlatformOverviewData;
  /** 应用矩阵列表 */
  applicationMatrix: ApplicationMatrixItem[];
  /** 论文列表（兼容旧组件，合并公司署名与团队积累） */
  papers: Paper[];
  /** 合规声明数据 */
  complianceNotice: ComplianceNoticeData;
}
