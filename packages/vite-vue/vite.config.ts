import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  base: '/gh-pages-test/vite-vue/',
  build: {
    outDir: '../../gh-pages/vite-vue',
    emptyOutDir: true
  }
})
