import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages के लिए base path add करें
  base: process.env.NODE_ENV === 'production' ? '/your-repository-name/' : '/',
  
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  
  // GitHub Pages के लिए build output optimize करें
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
}));