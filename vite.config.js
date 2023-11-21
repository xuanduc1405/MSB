import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
const path = require("path");

export default defineConfig({
    plugins: [react(), svgr()],
    server: {
        port: 3000
    },
    css: {
        devSourcemap: true
    },
    resolve: {
        alias: {
            '~': path.resolve(__dirname, './src')
        }
    },
    build: {
        outDir: './build'
    }
});