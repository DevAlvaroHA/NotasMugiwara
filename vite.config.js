import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default {
  server: {
    host: '0.0.0.0',  // Esto permite que Vite acepte conexiones desde cualquier red
    port: 5173         // Asegúrate de que esté configurado para usar el puerto 5173
  }
};

