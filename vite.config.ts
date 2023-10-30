import { UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import vercel from "vite-plugin-vercel";

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
        vercel()
    ],
    vercel: {
        additionalEndpoints: [
            {
                source: "src/endpoints/og.tsx",
                destination: `og`,
                addRoute: true
            }
        ]
    }
});
