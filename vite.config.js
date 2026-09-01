import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  envPrefix: ['VITE_', 'SUAPABASE_', 'SUPABASE_'],
  server: {
    port: 3000,
    open: false,
    watch: {
      usePolling: true,
      interval: 1000
    }
  }
})
