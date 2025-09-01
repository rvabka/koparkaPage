import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    name: 'force-utf8',
    enforce: 'pre',
    transform(code) {
      return Buffer.from(code, 'utf8').toString();
    }
  },
  site: 'https://rvabka.github.io'
});
