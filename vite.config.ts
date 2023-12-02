import { defineConfig } from "vite";
import dotenv from "dotenv";
dotenv.config();
import react from "@vitejs/plugin-react-swc";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: process.env.VITE_MUNDO_PORT as unknown as number,
    proxy: {
      "/api": {
        target: process.env.VITE_SERVER_URI,
        changeOrigin: true
      }
    }
  }
});
