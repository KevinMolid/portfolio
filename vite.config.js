import { defineConfig } from 'vite';
import ViteHtmlPlugin from 'vite-plugin-html';

export default defineConfig({
  plugins: [
    ViteHtmlPlugin({
      inject: {
        injectData: {
          pages: ['index', 'project-1', 'project-2', 'project-3'],
        },
      },
    }),
  ],
  build: {
    outDir: 'dist',
  },
});