import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svelte from "@astrojs/svelte";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), svelte(), react()],
  output: 'server'
  // renderizar paginas en servidor => en este caso tiene sentido porque spotify tiene muchas paginas
  // sino, deberiamos crear un getStaticpath y generar todas las paginas estaticas para todas las playlists
});