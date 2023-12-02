import path from "path"
import react from '@vitejs/plugin-react-swc'
import { defineConfig } from "vite"
 
export default defineConfig({
  base: "/",
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    port: 5173,
    strictPort: true,
    host: true,
    origin: "http://localhost:5173"
  }
})