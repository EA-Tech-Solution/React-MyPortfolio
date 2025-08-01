import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/React-MyPortfolio/', // <-- important https://ea-tech-solution.github.io/React-MyPortfolio/
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
  plugins: [react()],
})
