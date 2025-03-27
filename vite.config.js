import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase",
    },
  },
  server: {
    host: '0.0.0.0', // This allows the server to listen on all network interfaces
    port: 5173,       // Optional: Ensure Vite is listening on port 5173
  }
})
