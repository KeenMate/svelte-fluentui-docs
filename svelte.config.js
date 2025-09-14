import adapter from '@sveltejs/adapter-static'
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

/**
 * @type {import('@sveltejs/kit').Config}
 */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess()],
	kit: {
		adapter: adapter({
			pages: 'dist',
		}),
		prerender: {
			handleHttpError: ({ path, referrer, message }) => {
				// Log the error as a warning instead of failing the build
				console.warn(`Warning: HTTP error during prerender of ${path} (referred by ${referrer}): ${message}`);
				// Continue building instead of failing
				return;
			}
		},
		paths: {
			base: process.env.BASE_PATH || '',
			relative: false
		}
	},
}

export default config
