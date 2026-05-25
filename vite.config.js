import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// GitHub Pages serves this site under https://rustamisroilov.github.io/Portfolio/,
// so production builds need every asset URL prefixed with /Portfolio/.
// In dev (npm run dev) Vite uses '/' so local development is unaffected.
const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  base: isProd ? '/Portfolio/' : '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
