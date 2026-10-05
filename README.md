# Red Hill Security & Locksmith

Public site for Red Hill Security & Locksmith. Quote requests are saved locally by the Vite dev server.

## Setup

1. Install [Node.js](https://nodejs.org/) (version 20 or newer).
2. Install dependencies:

```bash
npm install
```

3. Start the site:

```bash
npm run dev
```

Open the URL Vite prints (typically `http://localhost:5173`).

## Quote requests

The contact form posts to `POST /api/quotes`.

Locally, `npm run dev` and `npm run preview` write each request to `data/quotes/` as JSON, plus the attached photo when one is included. That folder is gitignored.

On Vercel, `api/quotes.js` emails the request with Resend. Set `RESEND_API_KEY` in the project environment (see `.env.example`). `ENQUIRY_FROM_EMAIL` and `ENQUIRY_TO_EMAIL` are optional.

## Scripts

- `npm run dev` — local site and quote API
- `npm run build` — production build into `dist/`
- `npm run preview` — serve the production build, including the quote API
- `npm run lint` — lint the site components
- `npm run typecheck` — typecheck the included JS files
