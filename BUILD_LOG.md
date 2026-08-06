# Build Log

## 2026-08-05 — PWA offline support

**Task:** Make the site installable ("Add to Home Screen") and usable offline.

**Changes:**
- `public/sw.js` — new service worker. Navigations: network-first → cache → `/offline`. Static assets (`_next/static`, images, fonts): cache-first. Everything else: stale-while-revalidate.
- `app/offline/page.tsx` — new static offline fallback page.
- `components/layout/sw-register.tsx` — new client component, registers the SW in production builds only; wired into `app/layout.tsx`.
- `public/site.webmanifest` — added `start_url`, `scope`, `id`, `description`, `orientation`; added non-maskable (`purpose: "any"`) icon entries alongside existing maskable ones.
- `lib/metadata.ts` — added `appleWebApp` (capable, black-translucent status bar) for iOS home-screen install.
- `next.config.ts` — added `no-cache` + `Service-Worker-Allowed` headers for `/sw.js`.

**Verification:** `npm install && npm run build && npm run start`, then in-browser: confirmed SW reached `activated` state, visited `/` and `/about` to populate cache, killed the server process, reloaded `/about` (served fully from cache) and navigated to an unvisited route `/projects/spenta-enquiry-crm` (served `/offline` fallback instead of a browser error). Restarted the server and confirmed normal network operation resumed.

**Not done / follow-ups:** Did not add `next-pwa` (compatibility with Next 16 unconfirmed) — SW is hand-written. Project detail pages are only cached once visited; if full offline coverage of all project slugs is wanted, extend `PRECACHE_URLS` in `public/sw.js`.
