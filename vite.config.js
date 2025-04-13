import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import ghPages from 'vite-plugin-gh-pages';

// Replace 'your-username' and 'your-repo-name' with actual GitHub values
export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/nunohs-portfolio/', 
});

