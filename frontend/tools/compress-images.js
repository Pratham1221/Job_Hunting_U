
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const ASSETS_DIR = 'src/assets';

async function compressImages() {
  const files = fs.readdirSync(ASSETS_DIR);

  for (const file of files) {
    if (!file.endsWith('.webp')) continue;

    const filePath = path.join(ASSETS_DIR, file);
    const tempPath = path.join(ASSETS_DIR, `temp_${file}`);
    
    console.log(`Processing: ${file}...`);

    try {
      let pipeline = sharp(filePath);
      
      // Resize logic
      if (file.includes('hero')) {
        // Hero images: max 1920px width
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
      } else if (file !== 'Logo_1.svg' && !file.includes('background')) {
        // Team and other images: max 800px width
        pipeline = pipeline.resize({ width: 800, withoutEnlargement: true });
      }

      // Compress WebP
      await pipeline
        .webp({ quality: 80, effort: 6 })
        .toFile(tempPath);

      // Replace original with compressed
      fs.unlinkSync(filePath);
      fs.renameSync(tempPath, filePath);
      
      const oldSize = fs.statSync(filePath).size;
      console.log(`✅ ${file} optimized. Final size: ${(oldSize / 1024).toFixed(2)} KB`);
      
    } catch (err) {
      console.error(`❌ Error processing ${file}:`, err);
    }
  }
}

compressImages();
