import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 4000,
  },
  plugins: [react()],
  define: {
    "process.env": {
      PUBLIC_URL: "/activity_buddies",
    },
  },
  build: {
    outDir: "./build",
  },
});
