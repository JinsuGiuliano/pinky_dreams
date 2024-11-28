import { sveltekit } from '@sveltejs/kit/vite';
import viteImagemin from 'vite-plugin-imagemin';

import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		viteImagemin({
			webp: {
			  quality: 85
			},
		  })
	]
});
