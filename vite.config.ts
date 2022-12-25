import * as path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        svgr({
            svgrOptions: {
                icon: true,
            },
        }),
        react(),
    ],
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
                find: '@uTypes',
                replacement: path.resolve(__dirname, './src/@uTypes'),
            },
            {
                find: '@hooks',
                replacement: path.resolve(__dirname, './src/@hooks'),
            },
            {
                find: '@query',
                replacement: path.resolve(__dirname, './src/@query'),
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
                find: '@atoms',
                replacement: path.resolve(__dirname, './src/@components/Atoms'),
            },
            {
                find: '@molecules',
                replacement: path.resolve(
                    __dirname,
                    './src/@components/Molecules'
                ),
            },
            {
                find: '@organizms',
                replacement: path.resolve(
                    __dirname,
                    './src/@components/Organizms'
                ),
            },
            {
                find: '@helpers',
                replacement: path.resolve(__dirname, './src/@helpers'),
            },
            {
                find: '@pages',
                replacement: path.resolve(__dirname, './src/@pages'),
            },
            {
                find: '@views',
                replacement: path.resolve(__dirname, './src/@views'),
            },
            {
                find: '@svg',
                replacement: path.resolve(__dirname, './src/@svg'),
            },
            {
                find: '@temps',
                replacement: path.resolve(__dirname, './src/@temps'),
            },
        ],
    },
});
