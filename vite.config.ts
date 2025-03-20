import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/HenOSV-cp/',
  plugins: [react()],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    assetsDir: 'assets',  // 明确指定资源目录
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://static.jianweidata.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
