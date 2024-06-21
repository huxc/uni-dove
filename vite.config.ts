import path from 'node:path'
import process from 'node:process'
import { defineConfig } from 'vite'
import { createVitePlugins } from './viteConfig/plugins'

// https://vitejs.dev/config/
export default defineConfig({
  envDir: './env',
  plugins: [createVitePlugins()],
  resolve: {
    alias: {
      '@': path.join(process.cwd(), './src'),
      '@/img': path.join(process.cwd(), './src/static/images'),
    },
  },

})
