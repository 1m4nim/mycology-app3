import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc"; // SWC版のReactを使う場合

export default defineConfig({
  plugins: [react()],
});
