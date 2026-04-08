import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Change this to your GitHub repo name, e.g. '/my-web-hub/'
// If deploying to username.github.io (root), set base: '/'
export default defineConfig({
  plugins: [react()],
  base: '/my-web-hub/',
})
