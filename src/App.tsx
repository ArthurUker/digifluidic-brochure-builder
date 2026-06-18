// 应用根组件
// 当前为骨架占位，后续替换为 BrochureLayout 组件

import React from 'react';
import { brochureData } from './data/brochure';

/**
 * App 根组件
 * 阶段 2 骨架：渲染封面标题和合规声明，验证数据读取正常
 * 阶段 3 将替换为完整的 BrochureLayout 组件
 */
const App: React.FC = () => {
  // 从数据文件读取封面和合规声明数据
  const { cover, complianceNotice } = brochureData;

  return (
    <div className="min-h-screen bg-gray-100 py-8">
      {/* 白皮书页面容器 */}
      <div className="brochure-page">
        {/* 封面区域：骨架验证用 */}
        <div className="page-content cover-page">
          <h1 className="text-brand text-4xl font-bold mb-4">{cover.title}</h1>
          <p className="text-xl text-gray-600 mb-2">{cover.subtitle}</p>
          <p className="text-gray-500">{cover.companyName}</p>
          <p className="text-gray-400 text-sm mt-2">
            {cover.version} · {cover.date}
          </p>
        </div>

        {/* 合规声明区域：骨架验证用，确保合规声明始终存在 */}
        <div className="page-content compliance-page">
          <div className="compliance-block">
            <h2 className="text-lg font-semibold text-gray-700 mb-3">
              {complianceNotice.title}
            </h2>
            {complianceNotice.paragraphs.map((para, index) => (
              <p key={index} className="mb-2 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
