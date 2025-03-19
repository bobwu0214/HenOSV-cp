import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  },
  server: {
    headers: {
      "Content-Security-Policy": "default-src 'self'; font-src 'self' data:;"
    }
  }
})
