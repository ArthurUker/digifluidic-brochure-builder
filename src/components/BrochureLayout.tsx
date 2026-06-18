// 白皮书整体布局组件
// 本组件是所有页面组件的容器，负责按顺序渲染各章节页面
// 阶段 3 中各子组件将逐步替换此处的占位内容

import React from 'react';
import type { BrochureData } from '../types/brochure';

/** BrochureLayout 组件属性 */
interface BrochureLayoutProps {
  /** 白皮书完整数据 */
  data: BrochureData;
}

/**
 * 白皮书整体布局组件
 * 按白皮书内容主线顺序渲染各章节：
 * 1. 封面页（CoverPage）
 * 2. 执行摘要（ExecutiveSummary）
 * 3. 平台概览（PlatformOverview）
 * 4. 应用矩阵（ApplicationMatrix）
 * 5. 论文证据链（PaperEvidenceList）
 * 6. 合规声明（ComplianceNotice）
 * 7. 联系方式（Footer）
 */
const BrochureLayout: React.FC<BrochureLayoutProps> = ({ data }) => {
  return (
    // 外层背景容器：网页预览时显示灰色背景
    <div className="min-h-screen bg-gray-100 py-8 print:bg-white print:py-0">

      {/* ── 封面页 ── */}
      <div className="brochure-page cover-page mb-8 print:mb-0">
        <div className="page-content flex flex-col justify-between min-h-screen print:min-h-0">
          {/* 封面主体内容 */}
          <div className="flex-1 flex flex-col justify-center">
            {/* 品牌标识区 */}
            <div className="mb-12">
              <p className="text-brand font-semibold text-lg tracking-widest uppercase mb-2">
                Digifluidic
              </p>
              <div className="w-16 h-1 bg-brand mb-8" />
            </div>

            {/* 主标题区 */}
            <h1 className="text-brand text-4xl font-bold leading-tight mb-4">
              {data.cover.title}
            </h1>
            <p className="text-2xl text-gray-600 mb-8">
              {data.cover.subtitle}
            </p>

            {/* 分隔线 */}
            <div className="w-24 h-0.5 bg-brand-light mb-8" />

            {/* 公司信息 */}
            <div>
              <p className="text-gray-700 font-medium text-lg">
                {data.cover.companyName}
              </p>
              <p className="text-gray-400 text-sm mt-1">
                {data.cover.companyNameEn}
              </p>
            </div>
          </div>

          {/* 封面底部：版本号和日期 */}
          <div className="flex justify-between items-end pt-8 border-t border-gray-200">
            <p className="text-gray-400 text-sm">{data.cover.version}</p>
            <p className="text-gray-400 text-sm">{data.cover.date}</p>
          </div>
        </div>
      </div>

      {/* ── 执行摘要 ── */}
      <div className="brochure-page section-page mb-8 print:mb-0">
        <div className="page-content">
          <h2 className="section-title">{data.executiveSummary.title}</h2>

          {/* 摘要段落 */}
          <div className="space-y-4 mb-8">
            {data.executiveSummary.paragraphs.map((para, index) => (
              <p key={index} className="text-gray-700 leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {/* 核心亮点列表（可选） */}
          {data.executiveSummary.highlights && (
            <div className="bg-brand/5 border-l-4 border-brand rounded-r p-6">
              <h3 className="text-brand font-semibold mb-3">核心亮点</h3>
              <ul className="space-y-2">
                {data.executiveSummary.highlights.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-700">
                    {/* 亮点前缀标记 */}
                    <span className="text-brand font-bold mt-0.5">·</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* ── 平台概览 ── */}
      <div className="brochure-page section-page mb-8 print:mb-0">
        <div className="page-content">
          <h2 className="section-title">{data.platformOverview.title}</h2>

          {/* 平台简介 */}
          <p className="text-gray-700 leading-relaxed mb-8">
            {data.platformOverview.description}
          </p>

          {/* 核心参数表格 */}
          <h3 className="text-lg font-semibold text-gray-700 mb-4">核心参数</h3>
          <div className="overflow-hidden rounded border border-gray-200">
            <table className="w-full text-sm">
              <tbody>
                {data.platformOverview.specs.map((spec, index) => (
                  <tr
                    key={index}
                    // 奇偶行交替背景色
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 font-medium text-brand w-1/3 border-r border-gray-200">
                      {spec.label}
                    </td>
                    <td className="px-4 py-3 text-gray-700">
                      {spec.value}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── 应用矩阵 ── */}
      <div className="brochure-page section-page mb-8 print:mb-0">
        <div className="page-content">
          <h2 className="section-title">应用矩阵</h2>
          <p className="text-gray-500 text-sm mb-6">
            以下应用方向基于团队技术积累和研究成果，不代表所有方向均已有正式注册产品。
          </p>

          {/* 应用矩阵表格 */}
          <div className="overflow-hidden rounded border border-gray-200">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-brand text-white">
                  <th className="px-4 py-3 text-left font-semibold">应用方向</th>
                  <th className="px-4 py-3 text-left font-semibold">产品/材料示例</th>
                  <th className="px-4 py-3 text-left font-semibold">技术路线</th>
                  <th className="px-4 py-3 text-left font-semibold">表达重点</th>
                </tr>
              </thead>
              <tbody>
                {data.applicationMatrix.map((item, index) => (
                  <tr
                    key={index}
                    className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                  >
                    <td className="px-4 py-3 font-medium text-brand">{item.area}</td>
                    <td className="px-4 py-3 text-gray-700">{item.product}</td>
                    <td className="px-4 py-3 text-gray-600">{item.technology}</td>
                    <td className="px-4 py-3 text-gray-600">{item.highlight}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ── 论文证据链 ── */}
      <div className="brochure-page section-page mb-8 print:mb-0">
        <div className="page-content">
          <h2 className="section-title">论文证据链</h2>
          <p className="text-gray-500 text-sm mb-6">
            以下论文为平台核心技术积累的代表性文献，仅作为技术研究基础说明。
          </p>

          {/* 论文列表 */}
          <div className="space-y-4">
            {data.papers.map((paper) => (
              <div
                key={paper.id}
                className="border border-gray-200 rounded p-4 hover:border-brand transition-colors"
              >
                {/* 论文标题 */}
                <p className="font-medium text-gray-800 mb-1">{paper.title}</p>
                {/* 作者和期刊信息 */}
                <p className="text-sm text-gray-500 mb-2">
                  {paper.authors} · {paper.journal} · {paper.year}
                </p>
                {/* 标签区域 */}
                <div className="flex flex-wrap gap-1">
                  {paper.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs bg-brand/10 text-brand px-2 py-0.5 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {paper.applicationArea.map((area) => (
                    <span
                      key={area}
                      className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 合规声明（必须保留，不得省略） ── */}
      <div className="brochure-page compliance-page mb-8 print:mb-0">
        <div className="page-content">
          <h2 className="section-title">{data.complianceNotice.title}</h2>
          <div className="compliance-block">
            {data.complianceNotice.paragraphs.map((para, index) => (
              <p key={index} className="mb-3 leading-relaxed last:mb-0">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ── 联系方式 ── */}
      <div className="brochure-page mb-8 print:mb-0">
        <div className="page-content">
          <h2 className="section-title">联系我们</h2>
          <div className="space-y-2 text-gray-700">
            <p className="font-medium text-lg">{data.contact.companyName}</p>
            {data.contact.address && (
              <p className="text-gray-500">地址：{data.contact.address}</p>
            )}
            {data.contact.email && (
              <p className="text-gray-500">邮箱：{data.contact.email}</p>
            )}
            {data.contact.phone && (
              <p className="text-gray-500">电话：{data.contact.phone}</p>
            )}
            {data.contact.website && (
              <p className="text-gray-500">官网：{data.contact.website}</p>
            )}
          </div>
        </div>
      </div>

    </div>
  );
};

export default BrochureLayout;
