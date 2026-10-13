# Rakesh Tadi — Developer Portfolio

A dark editorial, single-page portfolio built with React, TypeScript, Tailwind CSS v4, TanStack Start, and Motion. Includes accessible section navigation, resume download, project case studies, and reduced-motion support.

## Local development

Install Bun, then run:

```sh
bun install
bun run dev
```

## Checks and production output

```sh
bun run test
bun run lint
bun run build
```

The Lovable environment runs its production checks automatically. No credentials or database are required by the portfolio.

## Content and assets

- `src/lib/portfolio.ts`: verified project, experience, skill, and social content.
- `src/components/portfolio.tsx`: reusable portfolio sections.
- `src/styles.css`: semantic tokens and responsive layout.
- `src/assets/resume.asset.json`: actual uploaded PDF, served through Lovable Assets.
- `src/assets/editorial-sculpture.jpg`: abstract artwork, not an employer screenshot.
- `src/routes/index.tsx`: page metadata. Canonical and sitemap URLs are deliberately omitted until a real domain is known.

The site uses supplied contact links, not a simulated message-delivery form. Internal employer work has no demo or source-code links. Job Hunter is externally hosted and may be unavailable.

## Deployment

The supported application framework in this workspace is TanStack Start, not Next.js. The current configuration targets Lovable’s edge hosting. Publish from Lovable when ready, then connect your domain in the publishing settings.

For Vercel, export the source through GitHub and first configure a Vercel-compatible TanStack Start server adapter, replacing the current edge-hosting preset. This is a separate deployment configuration step, not included or verified here; do not deploy this repository as a Next.js application. After that adapter is configured, import the repository in Vercel, use the Bun lockfile, and set the build command to `bun run build` with the output defined by the adapter. In Vercel’s domain settings, add the custom domain and apply the DNS records Vercel supplies. Verify the resume asset URL on the new host; if needed, host the supplied PDF on that origin and update the resume pointer.

Add canonical metadata and a domain-based sitemap only after the final production domain is confirmed.
