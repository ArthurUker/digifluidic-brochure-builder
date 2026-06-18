// Vite 构建配置
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // 使用 React 插件支持 JSX/TSX
  plugins: [react()],
  // 构建产物输出到 dist 目录，用于 Nginx 静态托管
  build: {
    outDir: 'dist',
  },
});
