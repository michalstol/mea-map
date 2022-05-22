import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            {
                find: '@configs',
                replacement: path.resolve(__dirname, './src/@configs'),
            },
            {
                find: '@facades',
                replacement: path.resolve(__dirname, './src/@facades'),
            },
            {
                find: '@typings',
                replacement: path.resolve(__dirname, './src/@typings'),
            },
            {
                find: '@hooks',
                replacement: path.resolve(__dirname, './src/@hooks'),
            },
        ],
    },
});
