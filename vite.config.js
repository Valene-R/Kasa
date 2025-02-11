import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Pas de port défini
    watch: {
      usePolling: true, // Améliore la détection des changements sur certains systèmes
    },
  },
  base: '/', // Permet d'éviter les erreurs de chemin
});