import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// import { resolve } from 'path';
// import path from 'path';
// import { fileURLToPath } from 'url';

// const __filename = fileURLToPath(import.meta.url);

// const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // root: __dirname,
  // build: {
  //   outDir: '../dist'
  // },
  // server: {
  //   port: 8080
  // },
  base: "/WebSiteOta-Chelenko-FrontEnd"
})

