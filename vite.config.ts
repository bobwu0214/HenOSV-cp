import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',  // 确保 base 为根路径
  build: {
    outDir: 'docs',  // 输出到 docs 目录
    emptyOutDir: true,  // 构建前清空目录
  },
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://static.jianweidata.com',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
});
