import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  base: '/vite-svelte/',
  build: {
    outDir: '../../gh-pages/vite-svelte',
    emptyOutDir: true
  }
})
