import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                education: resolve(__dirname, 'education/education.html'),
                profexp: resolve(__dirname, 'profexp/index.html'),
                projects: resolve(__dirname, 'projects/index.html'),
            },
        },
    },
})