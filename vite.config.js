import { defineConfig } from 'vite';

export default defineConfig({
  base: '/test/',
  define: {
    'process.env': {},
  },
});
