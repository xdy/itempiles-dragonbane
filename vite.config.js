import { defineConfig } from 'vite';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import path from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/module/itempiles-dragonbane.js'),
      name: 'ItemPilesDragonbane',
      formats: ['es']
    },
    rollupOptions: {
      external: ['foundry'],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          foundry: 'foundry'
        }
      }
    },
    outDir: 'dist',
    emptyOutDir: true,
    sourcemap: true
  },
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: 'static/module.json',
          dest: '.'
        }
      ]
    })
  ]
});
