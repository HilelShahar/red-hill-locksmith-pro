import react from "@vitejs/plugin-react";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import { attachQuoteApi } from "./server/quotes.js";

const root = fileURLToPath(new URL(".", import.meta.url));

function quoteApi() {
  const attach = (server) => {
    attachQuoteApi(server.middlewares, root);
  };

  return {
    name: "quote-api",
    configureServer: attach,
    configurePreviewServer: attach,
  };
}

export default defineConfig({
  plugins: [quoteApi(), react()],
  resolve: {
    alias: {
      "@": path.resolve(root, "src"),
    },
  },
});
