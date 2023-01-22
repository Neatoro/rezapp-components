import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';
import { resolve } from 'path';

export default defineConfig({
    plugins: [svelte()],
    build: {
        lib: {
            name: 'rezapp-components',
            entry: resolve(__dirname, 'src', 'index.ts')
        }
    }
});
