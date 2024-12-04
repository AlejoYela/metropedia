import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import path from 'path';

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercel(),
  resolve: {
    alias: {
      '@': path.resolve('./src'), 
      '@components': path.resolve('./src/components'), // Alias para 'components'
      '@icons': path.resolve('./src/icons'), // Alias para 'icons' // Define el alias '@' para apuntar a la carpeta 'src'
      '@layouts': path.resolve('./src/layouts'), // Alias para 'layouts' // Define el alias '@' para apuntar a la carpeta 'src'
      '@pages': path.resolve('./src/pages'), // Alias para 'pages' // Define el alias '@' para apuntar a la carpeta 'src'
    },
  },
});