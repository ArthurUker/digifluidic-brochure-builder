// 白皮书数据类型定义
// 本文件定义白皮书所有页面和数据结构的 TypeScript 类型

// ────────────────────────────────────────────
// 封面页数据
// ────────────────────────────────────────────

/** 封面页数据接口 */
export interface CoverData {
  /** 白皮书主标题 */
  title: string;
  /** 白皮书副标题 */
  subtitle: string;
  /** 公司中文名称 */
  companyName: string;
  /** 公司英文名称 */
  companyNameEn: string;
  /** 版本号，格式如 v2026.06 */
  version: string;
  /** 发布日期，格式如 2026 年 6 月 */
  date: string;
}

// ────────────────────────────────────────────
// 执行摘要
// ────────────────────────────────────────────

/** 执行摘要数据接口 */
export interface ExecutiveSummaryData {
  /** 摘要标题 */
  title: string;
  /** 摘要段落列表 */
  paragraphs: string[];
  /** 核心亮点列表（可选） */
  highlights?: string[];
}

// ────────────────────────────────────────────
// 平台概览
// ────────────────────────────────────────────

/** 平台核心参数项 */
export interface PlatformSpec {
  /** 参数名称 */
  label: string;
  /** 参数值 */
  value: string;
}

/** 平台概览数据接口 */
export interface PlatformOverviewData {
  /** 板块标题 */
  title: string;
  /** 平台简介段落 */
  description: string;
  /** 核心参数列表 */
  specs: PlatformSpec[];
}

// ────────────────────────────────────────────
// 论文证据链
// ────────────────────────────────────────────

/** 单篇论文数据接口 */
export interface PaperItem {
  /** 论文编号（内部排序用） */
  id: number;
  /** 论文标题 */
  title: string;
  /** 作者列表（简写） */
  authors: string;
  /** 发表期刊或来源 */
  journal: string;
  /** 发表年份 */
  year: number;
  /** 技术方向标签，如 LAMP、RT-qPCR、数字微流控 */
  tags: string[];
  /** 应用方向标签，如 食品安全、呼吸道病原体 */
  applicationArea: string[];
  /** DOI 或链接（可选） */
  doi?: string;
}

// ────────────────────────────────────────────
// 应用矩阵
// ────────────────────────────────────────────

/** 应用矩阵单行数据接口 */
export interface ApplicationMatrixItem {
  /** 应用方向名称 */
  area: string;
  /** 代表性产品或材料示例 */
  product: string;
  /** 技术路线 */
  technology: string;
  /** 宣传表达重点 */
  highlight: string;
}

// ────────────────────────────────────────────
// 合规声明
// ────────────────────────────────────────────

/** 合规声明数据接口（必填，不得省略） */
export interface ComplianceNoticeData {
  /** 声明标题 */
  title: string;
  /** 声明正文段落列表 */
  paragraphs: string[];
}

// ────────────────────────────────────────────
// 联系方式
// ────────────────────────────────────────────

/** 联系方式数据接口 */
export interface ContactData {
  /** 公司名称 */
  companyName: string;
  /** 公司地址 */
  address: string;
  /** 联系邮箱 */
  email: string;
  /** 联系电话（可选） */
  phone?: string;
  /** 官网地址（可选） */
  website?: string;
}

// ────────────────────────────────────────────
// 白皮书完整数据根接口
// ────────────────────────────────────────────

/** 白皮书完整数据根接口，所有页面数据均挂载于此 */
export interface BrochureData {
  /** 封面页数据 */
  cover: CoverData;
  /** 执行摘要数据 */
  executiveSummary: ExecutiveSummaryData;
  /** 平台概览数据 */
  platformOverview: PlatformOverviewData;
  /** 论文证据链列表 */
  papers: PaperItem[];
  /** 应用矩阵列表 */
  applicationMatrix: ApplicationMatrixItem[];
  /** 合规声明数据（必填，不得省略） */
  complianceNotice: ComplianceNoticeData;
  /** 联系方式数据 */
  contact: ContactData;
}
