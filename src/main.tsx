// 应用入口文件
// 将 React 应用挂载到 index.html 中的 #root 元素

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// 引入全局样式（Tailwind CSS 基础层）
import './styles/index.css';
// 引入打印样式（A4 PDF 导出专用）
import './styles/print.css';

// 获取挂载点，如不存在则抛出明确错误
const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('未找到 #root 挂载点，请检查 index.html');
}

// 创建 React 根并渲染应用
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
