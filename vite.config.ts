/// <reference types="vitest"/>
import react from "@vitejs/plugin-react-swc";
import vike from "vike/plugin";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
    publicDir: "public",
    build: {
        chunkSizeWarningLimit: 1500
    },
    plugins: [
        react({
            plugins: [["@swc/plugin-emotion", {}]],
            jsxImportSource: "@emotion/react"
        }),
        vike()
    ],

    test: {
        globals: true,
        environment: "jsdom",
        setupFiles: "./src/test/setup.ts",
        deps: {}
    }
});
