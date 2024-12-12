import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/api-frontend-tmdb/",
  plugins: [react()],
  test: {
    globals: true, // Isso permite usar as funções globais de teste como describe, test, etc.
    environment: "jsdom", // Para simular o DOM
  },
});
