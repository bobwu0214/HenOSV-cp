import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',  // 如果部署到根域名，保持为 '/'
  // 如果部署到子路径，改为 '/HenOSV-cp/'
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
