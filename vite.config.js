import { fileURLToPath, URL } from "node:url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import jsx from '@vue/babel-plugin-jsx';
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      babel: {
        plugins: [jsx]
      }
    })
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});
