import { defineConfig } from 'vite';

export default defineConfig({
  root: './src', // Tell Vite to look for files in the 'src' directory
  build: {
    outDir: '../dist', // Output the build files to the 'dist' directory
  },
});
