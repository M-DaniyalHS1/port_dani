# Deployment

This frontend uses Next.js App Router in the existing project root. Keep the uv configuration and `.venv`; they are separate from the frontend.

## Vercel

Import the repository into the intended Vercel account. Select the **Next.js** framework and the repository root as the root directory. Use `npm ci` to install, `npm run build` to build, and the default Next.js output settings. No Python service is needed for this portfolio.

Set `NEXT_PUBLIC_SITE_URL` to the final HTTPS origin once the hosting address or domain is known, then rebuild. Vercel’s `VERCEL_PROJECT_PRODUCTION_URL` is used automatically when available. This controls canonical URLs, sharing metadata, and the sitemap. Local builds intentionally have no canonical URL or sitemap entries.

Before publishing, approve About content and configure real contact links in `config/profile.js`. Review the preview on desktop and mobile, then test every enabled destination on the published site.

## Other Node hosting

Use a Node version supported by the installed Next.js release. Run `npm ci`, `npm run check`, and `npm run build`. Start with `npm run start` (default port 3000). Set `NEXT_PUBLIC_SITE_URL` before the build. The host must support the Next.js server and image optimization; this project is not configured as a static export.

## Publication status

Publication is deferred at Daniyal's request to keep the portfolio local. No deployment has been created. Hosting account and public domain can be supplied when publication is requested later.
