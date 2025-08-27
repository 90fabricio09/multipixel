import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Otimizações para produção
    minify: 'esbuild', // Usando esbuild como padrão (mais rápido)
    // Alternativa: usar 'terser' se preferir mais otimizações
    // minify: 'terser',
    // terserOptions: {
    //   compress: {
    //     drop_console: true,
    //     drop_debugger: true,
    //   },
    // },
    
    // Gera source maps para debugging
    sourcemap: false,
    
    // Otimiza o chunking
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
        },
      },
    },
  },
  
  // Otimizações de servidor de desenvolvimento
  server: {
    port: 3000,
    open: true,
  },
  
  // Preload de assets críticos
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom'],
  },
})
