// Tailwind CSS 配置
/** @type {import('tailwindcss').Config} */
export default {
  // 扫描所有 TSX/TS/HTML 文件中的 Tailwind 类名
  content: [
    './index.html',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      // 品牌主色：Digifluidic 蓝
      colors: {
        brand: {
          DEFAULT: '#1B4FA8',
          light: '#3B6FD4',
          dark: '#0F2F6A',
        },
        // 辅助色：科技灰
        tech: {
          DEFAULT: '#4A5568',
          light: '#718096',
          dark: '#2D3748',
        },
      },
      // A4 页面尺寸（用于打印和 PDF 导出）
      width: {
        'a4': '210mm',
      },
      minHeight: {
        'a4': '297mm',
      },
      // 字体族：优先使用系统中文字体
      fontFamily: {
        sans: [
          'PingFang SC',
          'Hiragino Sans GB',
          'Microsoft YaHei',
          'Noto Sans SC',
          'sans-serif',
        ],
      },
    },
  },
  plugins: [],
};
