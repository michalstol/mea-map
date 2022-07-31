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
                find: '@redux',
                replacement: path.resolve(__dirname, './src/@redux'),
            },
            {
                find: '@typings',
                replacement: path.resolve(__dirname, './src/@typings'),
            },
            {
                find: '@hooks',
                replacement: path.resolve(__dirname, './src/@hooks'),
            },
            {
                find: '@styles',
                replacement: path.resolve(__dirname, './src/@styles'),
            },
            {
                find: '@features',
                replacement: path.resolve(__dirname, './src/@features'),
            },
            {
                find: '@helpers',
                replacement: path.resolve(__dirname, './src/@helpers'),
            },
            {
                find: '@temps',
                replacement: path.resolve(__dirname, './src/@temps'),
            },
        ],
    },
});
