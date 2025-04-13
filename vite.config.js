import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Replace 'your-username' and 'your-repo-name' with actual GitHub values
export default defineConfig({
  plugins: [react()],
  base: '/nunohs-portfolio/', 
});

