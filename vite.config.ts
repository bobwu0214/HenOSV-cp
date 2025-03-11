import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/HenOSV-cp/',  // 确保路径正确
  build: {
    outDir: 'docs',  // **这里指定输出到 docs 目录**
  },
})
