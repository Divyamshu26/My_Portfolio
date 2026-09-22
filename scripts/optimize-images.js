import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import process from 'process';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const publicDir = path.resolve(__dirname, '../public');

const targets = [
  { name: 'Ridepal architecture diagram.png', format: 'webp', quality: 90 },
  { name: 'Ridepal System Design Diagram.png', format: 'webp', quality: 90 },
  { name: 'Choti Bhojan Yatra Architecture diagram.jpg', format: 'webp', quality: 90 },
  { name: 'Choti Bhojan Yatra system design.jpg', format: 'webp', quality: 90 },
  { name: 'Syla Architecture diagram.jpg', format: 'webp', quality: 90 },
  { name: 'Syla System diagram.jpg', format: 'webp', quality: 90 },
  { name: 'boy_coding.png', format: 'webp', quality: 90 }
];

async function optimize() {
  console.log('--- Starting Diagram & Image Optimization ---');
  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const item of targets) {
    const inputPath = path.join(publicDir, item.name);
    if (!fs.existsSync(inputPath)) {
      console.warn(`File not found: ${item.name}`);
      continue;
    }

    const origStat = fs.statSync(inputPath);
    totalOriginal += origStat.size;

    const baseName = item.name.substring(0, item.name.lastIndexOf('.'));
    const outputPathWebp = path.join(publicDir, `${baseName}.webp`);

    // 1. Generate high-quality WebP
    await sharp(inputPath)
      .webp({ quality: item.quality, effort: 6 })
      .toFile(outputPathWebp);

    const webpStat = fs.statSync(outputPathWebp);
    totalOptimized += webpStat.size;

    const origKB = (origStat.size / 1024).toFixed(1);
    const webpKB = (webpStat.size / 1024).toFixed(1);
    const saving = ((1 - webpStat.size / origStat.size) * 100).toFixed(1);

    console.log(`[Optimized] ${item.name}`);
    console.log(`  -> WebP: ${webpKB} KB (was ${origKB} KB, saved ${saving}%)`);

    // 2. Also compress large PNGs in-place if they were multi-megabyte
    if (item.name.endsWith('.png') && origStat.size > 1024 * 1024) {
      const tempCompressedPng = path.join(publicDir, `temp_${item.name}`);
      await sharp(inputPath)
        .png({ compressionLevel: 9, palette: true, quality: 90 })
        .toFile(tempCompressedPng);
      
      const compStat = fs.statSync(tempCompressedPng);
      if (compStat.size < origStat.size) {
        fs.unlinkSync(inputPath);
        fs.renameSync(tempCompressedPng, inputPath);
        console.log(`  -> Also compressed fallback PNG from ${origKB} KB to ${(compStat.size / 1024).toFixed(1)} KB`);
      } else {
        fs.unlinkSync(tempCompressedPng);
      }
    }
  }

  const origMB = (totalOriginal / (1024 * 1024)).toFixed(2);
  const optMB = (totalOptimized / (1024 * 1024)).toFixed(2);
  const totalSaving = ((1 - totalOptimized / totalOriginal) * 100).toFixed(1);

  console.log('---------------------------------------------');
  console.log(`Total Original Size:  ${origMB} MB`);
  console.log(`Total Optimized WebP: ${optMB} MB`);
  console.log(`Overall Reduction:    ${totalSaving}% savings!`);
  console.log('---------------------------------------------');
}

optimize().catch(err => {
  console.error('Optimization failed:', err);
  process.exit(1);
});
