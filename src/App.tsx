// 应用根组件
// 阶段 3：替换为 BrochureLayout 完整布局组件

import React from 'react';
import BrochureLayout from './components/BrochureLayout';
import { brochureData } from './data/brochure';

/**
 * App 根组件
 * 将白皮书数据传入 BrochureLayout，渲染完整白皮书页面
 */
const App: React.FC = () => {
  return <BrochureLayout data={brochureData} />;
};

export default App;
