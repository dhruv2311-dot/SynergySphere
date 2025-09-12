### SynergySphere

Modern full‑stack React + Express boilerplate with TypeScript, Vite, Tailwind, and a rich UI kit. Single‑port dev server (Vite + Express), shared types, Netlify serverless adapter, and batteries‑included DX.

— Built for fast SPA development, with a minimal Express API for just what must run on the server.

### Tech Stack

- **Runtime & Package Manager**: Node 22+, npm
- **Frontend**: React 18, React Router 6 (SPA), TypeScript, Vite 7, TailwindCSS 3
- **Backend**: Express 5 (mounted into Vite dev server)
- **UI/UX**: Radix UI, Tailwind + tailwind-merge, class-variance-authority, Lucide Icons
- **State/Data**: @tanstack/react-query
- **Testing**: Vitest
- **Infra**: Netlify Functions (serverless-http)

### Project Structure

```
client/                   # React SPA
├─ pages/                 # Route components (Index.tsx = home)
├─ components/ui/         # Pre-built UI components (Radix + Tailwind)
├─ App.tsx                # Router + providers
└─ global.css             # Tailwind theme + globals

server/                   # Express API
├─ index.ts               # Express app factory
└─ routes/                # API route handlers

shared/                   # Cross-cutting types/utilities
└─ api.ts                 # Shared API types (e.g., DemoResponse)

netlify/
└─ functions/api.ts       # Netlify serverless entry (wraps Express)
```

### Scripts

```bash
npm run dev           # Start Vite dev server (Express mounted, SPA on :8080)
npm run build         # Build client and server bundles
npm run build:client
npm run build:server
npm run start         # Run built server entry (dist/server/node-build.mjs)
npm run typecheck     # TypeScript diagnostics
npm test              # Run Vitest
npm run format.fix    # Prettier write
```

### Local Development

1) Install dependencies
```bash
npm install
```

2) Start dev server
```bash
npm run dev
```

- The SPA and API share the same dev server on port 8080.
- Express is attached as a Vite middleware via a plugin in `vite.config.ts`.

### Routing (SPA)

Defined in `client/App.tsx` using `react-router-dom`:

- `/` → `pages/Index.tsx`
- `/project/:id` → `pages/Project.tsx`
- `/profile` → `pages/Profile.tsx`
- `/settings` → `pages/Settings.tsx`
- `/projects`, `/tasks`, `/team`, `/reports` → `pages/Placeholder.tsx`
- `*` → `pages/NotFound.tsx`

Add a new page:
```tsx
// client/pages/MyPage.tsx
export default function MyPage() {
  return <div>My page</div>;
}

// client/App.tsx
<Route path="/my-page" element={<MyPage />} />
```

### Styling & UI

- **TailwindCSS 3** for utility classes; customize design tokens in `client/global.css` and `tailwind.config.ts`.
- **Prebuilt UI** in `client/components/ui/*` (Radix primitives wrapped with Tailwind).
- `cn()` utility from `lib/utils.ts` combines `clsx` and `tailwind-merge` for safe class merges.

```ts
// Example: conditional classes
className={cn("base", { "is-active": active }, props.className)}
```

### API (Express)

- Dev server mounts Express: requests to `/api/*` hit Express routes.
- Example routes:
  - `GET /api/ping` → `{ message: string }` (configurable with `PING_MESSAGE` in env)
  - `GET /api/demo` → `DemoResponse` from `shared/api.ts`

Add a new endpoint:
```ts
// server/routes/my-route.ts
import { RequestHandler } from "express";
export const handleMyRoute: RequestHandler = (_req, res) => {
  res.json({ ok: true });
};

// server/index.ts
import { handleMyRoute } from "./routes/my-route";
app.get("/api/my-route", handleMyRoute);
```

Share types with the client via `shared/*` and import using alias `@shared`.

### TypeScript Path Aliases

- `@` → `./client`
- `@shared` → `./shared`

Configured in `vite.config.ts` and `vite.config.server.ts`.

### Environment Variables

- Create a `.env` in project root.
- Example:
```env
PING_MESSAGE=ping
```
- Dev server denies direct access to `.env` files via Vite FS safety.

### Building & Running

```bash
npm run build       # client (dist/spa) + server (dist/server)
npm run start       # runs node dist/server/node-build.mjs
```

Server build is configured for Node 22 (ESM output) in `vite.config.server.ts`.

### Deployment (Netlify)

- Netlify configuration in `netlify.toml`:
  - Builds client only (`npm run build:client`) → outputs to `dist/spa`.
  - Proxies `/api/*` to Netlify Functions → `netlify/functions/api.ts` wraps Express via `serverless-http`.
  - SPA redirects are handled by Vite output and Netlify settings.

Minimal steps:
1) Connect repo to Netlify.
2) Set Build command: `npm run build:client`, Publish directory: `dist/spa`.
3) Ensure functions directory is `netlify/functions`.

### Testing & Quality

```bash
npm test           # Vitest
npm run typecheck  # tsc --noEmit
npm run format.fix # prettier --write .
```

### Troubleshooting

- Port already in use (8080): stop other services or change `server.port` in `vite.config.ts`.
- ESM/CJS module errors in production: ensure Node 22+ and do not change server build format.
- Env not picked: confirm `.env` exists and restart dev server (uses dotenv in `server/index.ts`).

### Roadmap (suggested)

- Add authentication scaffold
- Connect a database adapter
- Add e2e tests (Playwright/Cypress)
- Configure CI for typecheck, test, and build

### License

MIT — Use freely, contributions welcome.
