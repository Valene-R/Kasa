import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Pas de port défini
  },
  base: '/', // Permet d'éviter les erreurs de chemin
});