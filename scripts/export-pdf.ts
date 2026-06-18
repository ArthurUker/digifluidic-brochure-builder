// PDF 导出脚本
// 使用 Playwright 启动 Chromium，访问本地 Vite 预览服务，将白皮书导出为 A4 PDF
// 使用方式：npm run export:pdf（需先启动 npm run preview）

import { chromium } from 'playwright';
import path from 'path';
import fs from 'fs';

// ────────────────────────────────────────────
// 配置项
// ────────────────────────────────────────────

/** 本地预览服务地址（npm run preview 默认端口 4173） */
const PREVIEW_URL = 'http://localhost:4173';

/** PDF 输出目录 */
const OUTPUT_DIR = path.resolve(process.cwd(), 'output');

/** PDF 输出文件名（含时间戳，避免覆盖） */
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
const OUTPUT_FILE = path.join(OUTPUT_DIR, `VHunterPlus_白皮书_${timestamp}.pdf`);

// ────────────────────────────────────────────
// 主函数
// ────────────────────────────────────────────

async function exportPDF(): Promise<void> {
  // 确保输出目录存在
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    console.log(`✓ 已创建输出目录：${OUTPUT_DIR}`);
  }

  console.log('▶ 启动 Chromium...');
  const browser = await chromium.launch({
    headless: true,
  });

  const page = await browser.newPage();

  // 设置视口为 A4 宽度（794px = 210mm @ 96dpi）
  await page.setViewportSize({ width: 794, height: 1123 });

  console.log(`▶ 访问预览页面：${PREVIEW_URL}`);
  await page.goto(PREVIEW_URL, {
    waitUntil: 'networkidle',
    timeout: 30000,
  });

  // 等待页面内容完全渲染（等待封面标题出现）
  await page.waitForSelector('h1', { timeout: 10000 });

  // 额外等待字体和样式加载完成
  await page.waitForTimeout(1500);

  console.log('▶ 生成 PDF...');
  await page.pdf({
    path: OUTPUT_FILE,
    format: 'A4',
    printBackground: true,       // 打印背景色和背景图
    margin: {
      top: '15mm',
      bottom: '15mm',
      left: '20mm',
      right: '20mm',
    },
    displayHeaderFooter: false,  // 不显示浏览器默认页眉页脚
  });

  await browser.close();

  console.log(`✓ PDF 导出成功：${OUTPUT_FILE}`);
}

// ────────────────────────────────────────────
// 执行入口
// ────────────────────────────────────────────

exportPDF().catch((err) => {
  console.error('✗ PDF 导出失败：', err);
  process.exit(1);
});
