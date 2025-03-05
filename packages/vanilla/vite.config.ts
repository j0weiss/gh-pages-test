import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  base: '/gh-pages-test/vite-vanilla/',
  build: {
    outDir: '../../gh-pages/vite-vanilla',
    emptyOutDir: true
  }
})
