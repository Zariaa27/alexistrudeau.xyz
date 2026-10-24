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

Open [http://localhost:3000](http://localhost:3000). The contact form is
configured with the Formspree form ID below and is ready to submit once your
Formspree destination email is verified.

## Contact form email delivery

The React contact form submits asynchronously to
[Formspree](https://formspree.io/) at `https://formspree.io/f/xzeedbkb`. The
form ID is public and is already configured for local and production builds, so
no deployment environment variable is required. Verify the destination email
address in your Formspree account, then send a test message and check both the
inbox (including spam) and the Formspree submissions page.

To use a different Formspree form, set `NEXT_PUBLIC_FORMSPREE_FORM_ID` in
`.env.local` for local development or in the Cloudflare Pages build environment
or GitHub Actions repository variables for deployment. Redeploy after changing
it. This value is embedded in the public site; never use a private API key.

## Checks and static export

```bash
npm run lint
npm run typecheck
npm run build
```

The production build writes the deployable site to `out/`. Because this is a
static export, `next start` is not used. The `public/CNAME` file is copied into
`out/CNAME` to keep the custom domain attached to the deployed site.

## Cloudflare Pages deployment

This project is a static export, so Cloudflare Pages can host it directly. No
Workers adapter or separate server is needed. Allow about 10 minutes for the
initial setup; DNS changes for a custom domain can take longer to propagate.

1. Push this repository to GitHub and sign in to the
	[Cloudflare dashboard](https://dash.cloudflare.com/).
2. Open **Workers & Pages → Create application → Pages → Connect to Git**.
	Select the GitHub repository and authorize Cloudflare if prompted.
3. In the build setup, use these settings:

	| Setting | Value |
	| --- | --- |
	| Framework preset | `None` |
	| Build command | `npm run build` |
	| Build output directory | `out` |

4. Under **Environment variables**, add `NODE_VERSION` with value `22` for the
	production environment. If you use preview deployments, add it there too.
5. Select **Save and Deploy**. Cloudflare installs dependencies, builds the
	site, and gives you a `*.pages.dev` URL. Future pushes to the selected
	production branch deploy automatically.
6. To use a custom domain, open the Pages project, choose **Custom domains**,
	and add your domain. Follow Cloudflare's DNS prompts; adding a domain in the
	Cloudflare dashboard is required even if `public/CNAME` contains the domain.

The configured Formspree ID is included in the build, so no Cloudflare
environment variable is needed. To use a different form, follow the override
instructions in [Contact form email delivery](#contact-form-email-delivery).

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
4. The configured Formspree ID is included automatically; no Actions variable
is needed. To use a different form, follow the override instructions in
[Contact form email delivery](#contact-form-email-delivery).

GitHub Pages is free for eligible public repositories. The deployment uses no
application server; Formspree is a separate service used only for contact
submissions.

## Project structure

- `app/`: App Router page, metadata, and global styles
- `components/`: Interactive toolkit and contact form
- `lib/data.ts`: Typed project, skill, and service content
- `public/`: Static assets and the custom-domain `CNAME`
