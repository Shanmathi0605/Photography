import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

ffmpeg.setFfmpegPath(ffmpegStatic);

const videoPath = path.resolve(__dirname, '../public/video/Camera_assembling_from_parts_202607131436.mp4');
const outDir = path.resolve(__dirname, '../public/images/hero-sequence');

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

console.log('Extracting frames... This may take a moment.');

ffmpeg(videoPath)
  .outputOptions([
    '-vf', 'scale=1280:-1',
    '-c:v', 'libwebp',
    '-qscale', '80'
  ])
  .output(`${outDir}/frame_%04d.webp`)
  .on('end', () => {
    console.log('Frames successfully extracted to', outDir);
    const files = fs.readdirSync(outDir).filter(f => f.endsWith('.webp'));
    console.log('Total frames:', files.length);
  })
  .on('error', (err) => {
    console.error('Error extracting frames:', err);
  })
  .run();
