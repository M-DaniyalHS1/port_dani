# Deployment

This frontend uses Next.js App Router in the existing project root. Keep the uv configuration and `.venv`; they are separate from the frontend.

## Vercel

Import the repository into the intended Vercel account. Select the **Next.js** framework and the repository root as the root directory. Use `npm ci` to install, `npm run build` to build, and the default Next.js output settings. No Python service is needed for this portfolio.

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin once the hosting address or domain is known, then rebuild. Vercel’s `VERCEL_PROJECT_PRODUCTION_URL` is used automatically when available. This controls canonical URLs, sharing metadata, and the sitemap. Local builds intentionally have no canonical URL or sitemap entries.

Before publishing, approve About content and configure real contact links in `config/profile.js`. Review the preview on desktop and mobile, then test every enabled destination on the published site.

## Other Node hosting

Use a Node version supported by the installed Next.js release. Run `npm ci`, `npm run check`, and `npm run build`. Start with `npm run start` (default port 3000). Set `NEXT_PUBLIC_SITE_URL` before the build. The host must support the Next.js server and image optimization; this project is not configured as a static export.

## Publication status

Published on 11 October 2026 at https://portdani.vercel.app.

Vercel project: `mdaniyal93337-6659s-projects/port_dani`. The project is connected to `M-DaniyalHS1/port_dani` on GitHub. This first production deployment was uploaded from the current local workspace, including its uncommitted frontend changes. Commit and push those changes before relying on GitHub-triggered deployments to reproduce this version.

`vercel.json` explicitly selects Next.js, `npm ci`, and `npm run build`. `.vercelignore` excludes the separate Python environment, local caches, and environment files from uploads. `.vercel/` contains local project linkage and is ignored by Git.

To redeploy the local workspace, run `vercel deploy --prod` from the project root while signed in to the intended Vercel account. Production metadata uses `VERCEL_PROJECT_PRODUCTION_URL` automatically. The design comparison remains available at `/card-designs` and is marked noindex.
