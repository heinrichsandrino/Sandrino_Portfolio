import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/', // ✅ Important for GitHub Pages routing
  plugins: [
    react(),
    tailwindcss(),
  ],
})