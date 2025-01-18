import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/DonFlorino/', // Replace 'DonFlorino' with your GitHub repository name
});
