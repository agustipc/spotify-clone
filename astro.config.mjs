import { defineConfig } from 'astro/config'

import tailwind from '@astrojs/tailwind'

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind()],
  output: 'server'
  // renderizar paginas en servidor => en este caso tiene sentido porque spotify tiene muchas paginas
  // sino, deberiamos crear un getStaticpath y generar todas las paginas estaticas para todas las playlists
})
