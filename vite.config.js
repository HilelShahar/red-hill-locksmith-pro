import fs from "node:fs";
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
    configureServer(server) {
      attach(server);
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url !== "/locksmith-red-hill" && url !== "/locksmith-red-hill/") return next();
        res.statusCode = 200;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        fs.createReadStream(path.join(root, "public", "locksmith-red-hill", "index.html")).pipe(res);
      });
    },
    configurePreviewServer(server) {
      attach(server);
      server.middlewares.use((req, res, next) => {
        const url = req.url?.split("?")[0];
        if (url === "/about" || url === "/about/") {
          const query = req.url.includes("?") ? req.url.slice(req.url.indexOf("?")) : "";
          res.statusCode = 301;
          res.setHeader("Location", `/${query}`);
          res.end();
          return;
        }
        if (!url || url.startsWith("/api/") || path.extname(url)) return next();
        const page = url === "/"
          ? path.join(root, "dist", "index.html")
          : path.join(root, "dist", url, "index.html");
        if (fs.existsSync(page)) {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html; charset=utf-8");
          fs.createReadStream(page).pipe(res);
          return;
        }
        const notFound = path.join(root, "dist", "404.html");
        if (!fs.existsSync(notFound)) return next();
        res.statusCode = 404;
        res.setHeader("Content-Type", "text/html; charset=utf-8");
        fs.createReadStream(notFound).pipe(res);
      });
    },
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
