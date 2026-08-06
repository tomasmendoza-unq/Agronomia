import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { fileURLToPath } from "url";

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            "@": fileURLToPath(new URL("./src", import.meta.url)),
            "@styled-system": path.resolve(__dirname, "./styled-system"),
        },
    },
    plugins: [react()],
    server: {
        proxy: {
            "/api": {
                target:
                    process.env.VITE_API_BASE_URL || "http://localhost:8080",
                changeOrigin: true,
                secure: false,
                rewrite: (path) => path.replace(/^\/api/, "/api"),
            },
        },
    },
});
