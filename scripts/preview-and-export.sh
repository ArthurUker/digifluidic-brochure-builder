#!/bin/bash
# 一键启动预览服务并导出 PDF
# 使用方式：bash scripts/preview-and-export.sh

set -e

echo "▶ 构建生产包..."
npm run build

echo "▶ 启动预览服务（后台）..."
npm run preview &
PREVIEW_PID=$!

# 等待预览服务启动
echo "▶ 等待预览服务就绪（3 秒）..."
sleep 3

echo "▶ 执行 PDF 导出..."
npm run export:pdf

# 关闭后台预览服务
echo "▶ 关闭预览服务..."
kill $PREVIEW_PID 2>/dev/null || true

echo "✓ 全流程完成，PDF 已保存至 output/ 目录"
