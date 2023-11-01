import { defineConfig } from "vite";
import vike from "vike/plugin";
import react from "@vitejs/plugin-react-swc";

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
    ]
});
