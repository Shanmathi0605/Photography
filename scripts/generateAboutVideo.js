import path from 'path';
import { fileURLToPath } from 'url';
import ffmpeg from 'fluent-ffmpeg';
import ffmpegStatic from 'ffmpeg-static';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

ffmpeg.setFfmpegPath(ffmpegStatic);

const inputImage = path.resolve(__dirname, '../public/images/b0c1a9580e35d9da72850cbd828a0d53.jpg');
const outputVideo = path.resolve(__dirname, '../public/video/about_video.mp4');

console.log('Generating video from image...');

ffmpeg()
  .input(inputImage)
  .loop(10) // 10 seconds
  .outputOptions([
    '-vf', "zoompan=z='min(zoom+0.001,1.1)':d=300:x='iw/2-(iw/zoom/2)':y='ih/2-(ih/zoom/2)'",
    '-c:v', 'libx264',
    '-t', '10',
    '-pix_fmt', 'yuv420p'
  ])
  .output(outputVideo)
  .on('end', () => {
    console.log('Video successfully generated at', outputVideo);
  })
  .on('error', (err) => {
    console.error('Error generating video:', err);
  })
  .run();
