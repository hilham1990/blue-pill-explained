import {makeProject} from '@motion-canvas/core';
import ffmpeg from '@motion-canvas/ffmpeg/lib/client';
import pilot from './scenes/day01-pilot?scene';

export default makeProject({
  scenes: [pilot],
  plugins: [ffmpeg()],
  audio: '/media/day01-pilot-mix.wav',
});
