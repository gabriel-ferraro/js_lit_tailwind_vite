import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
                exampleMultiPage: resolve(__dirname, 'pages/examplePage.html'),
                test: resolve(__dirname, 'pages/test.html')
            },
        },
    },
})