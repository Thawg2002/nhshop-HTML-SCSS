// vite.config.js
import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        shop: resolve(__dirname, "./shop.html"),
        product: resolve(__dirname, "./product.html"),
        cart: resolve(__dirname, "./cart.html"),
        bill: resolve(__dirname, "./bill.html"),
      },
    },
  },
});
