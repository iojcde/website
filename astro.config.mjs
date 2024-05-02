import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx'; 
import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(),   tailwind({applyBaseStyles:false}), react()], devToolbar: {
    enabled: false
  }
});