import {defineConfig} from 'vite';
import motionCanvasPackage from '@motion-canvas/vite-plugin';

// Node ESM + paketin CommonJS çıktısında fonksiyon iç içe default olarak gelir.
const motionCanvas = ((motionCanvasPackage as unknown as {default?: typeof motionCanvasPackage}).default ?? motionCanvasPackage) as unknown as () => import('vite').PluginOption[];

export default defineConfig({
  plugins: [motionCanvas()],
});
