import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // or whatever port you prefer
  },
  build: {
    outDir: 'build', // keeps the same output directory as CRA
  }
})