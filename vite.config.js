import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Gera bundles menores separando vendor (React) do código da aplicação
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'vendor';
            }
          }
        },
      },
    },
    // Assets menores que 4KB são embutidos como base64 (elimina requests extras)
    assetsInlineLimit: 4096,
    // CSS compactado inline (remove arquivos CSS separados)
    cssCodeSplit: false,
  },
})
