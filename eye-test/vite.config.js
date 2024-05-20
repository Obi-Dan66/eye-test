import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: { outDir: 'build'
    // `outDir` might be missing or set to 'dist'
  }
})
