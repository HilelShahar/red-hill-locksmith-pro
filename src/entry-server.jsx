import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { queryClientInstance } from "@/lib/query-client";
import { AppRoutes } from "@/App.jsx";
import { getPageMeta, PRERENDER_ROUTES } from "@/lib/seo";

export { PRERENDER_ROUTES };

export function render(url) {
  const html = renderToString(
    <QueryClientProvider client={queryClientInstance}>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
      <Toaster />
    </QueryClientProvider>
  );

  return { html, meta: getPageMeta(url) };
}
