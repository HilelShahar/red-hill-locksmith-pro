# AGENTS.md

## Project Context

This is the Red Hill Security & Locksmith site: a Vite + React app. Treat it as user-owned application code, keep changes focused on the user's request, and preserve existing project conventions.

Start with `README.md` for local setup.

## Key Files

- `src/`: frontend application source.
- `server/quotes.js`: local quote-request API used by the Vite dev and preview servers.
- `api/quotes.js`: Vercel function that emails quote requests through Resend.
- `vite.config.js`: Vite config, `@` alias, and quote API plugin.
- `public/images/`: site images served as static files.

## Working Notes

- Use `npm run dev` for local development. It serves the frontend and `POST /api/quotes`.
- Quote submissions are written to `data/quotes/`, which is gitignored.
- Run the relevant checks from `package.json` before finishing code changes.
