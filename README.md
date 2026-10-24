# alexistrudeau.xyz

Personal portfolio for systems engineering and full-stack development. The site
is built with Next.js 15, TypeScript, React, and Tailwind CSS, and exported as
static files for GitHub Pages. Hosting the site does not require a running
application server.

## Requirements

- Node.js 22 or newer
- npm

## Local development

```bash
npm ci
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The development server
works without a Formspree ID; the contact form will show its direct-email
fallback until the form is configured.

Before publishing, create a form with [Formspree](https://formspree.io/) and
replace `your_form_id` in `.env.local` with its form ID. This public form ID is
embedded in the static JavaScript at build time; do not put a private API key in
a `NEXT_PUBLIC_` variable. Set the same variable in the GitHub Actions
environment if the production contact form should submit to Formspree.

## Checks and static export

```bash
npm run lint
npm run typecheck
npm run build
```

The production build writes the deployable site to `out/`. Because this is a
static export, `next start` is not used. The `public/CNAME` file is copied into
`out/CNAME` to keep the custom domain attached to the deployed site.

## GitHub Pages deployment

The workflow in `.github/workflows/deploy.yml` runs on pushes to `main` and can
also be started manually from the Actions tab. It installs from the lockfile,
runs lint and type checks, builds the static export, and publishes `out/` to
GitHub Pages.

1. Push this repository to GitHub and select **Settings → Pages → Build and
	deployment → GitHub Actions** as the source.
2. In **Settings → Pages → Custom domain**, enter `alexistrudeau.xyz` and save.
	The deployed `CNAME` file is supplied by `public/CNAME`.
3. At your DNS provider, configure the apex and optional `www` records using
	GitHub's current [custom-domain instructions](https://docs.github.com/pages/configuring-a-custom-domain-for-your-github-pages-site).
	Enable **Enforce HTTPS** in Pages settings after DNS verification completes.
4. If using Formspree, add `NEXT_PUBLIC_FORMSPREE_FORM_ID` to the repository's
	Actions variables so it is available during the build. Formspree's free
	plan has its own submission limits.

GitHub Pages is free for eligible public repositories. The deployment uses no
application server; Formspree is a separate service used only for contact
submissions.

## Project structure

- `app/`: App Router page, metadata, and global styles
- `components/`: Interactive toolkit and contact form
- `lib/data.ts`: Typed project, skill, and service content
- `public/`: Static assets and the custom-domain `CNAME`
