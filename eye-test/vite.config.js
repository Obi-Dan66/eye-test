   // vite.config.js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';
   import path from 'path';

   export default defineConfig({
     base: '/eye-test/',  // Replace <repository-name> with your GitHub repo name
     plugins: [react()],
     resolve: {
       alias: {
         '@components': path.resolve(__dirname, 'src/components'),
         // Add other aliases as needed
       }
     },
     build: {
       outDir: 'build',
       assetsDir: 'assets',
       rollupOptions: {
         // Additional Rollup options can be specified here
       }
     }
   });