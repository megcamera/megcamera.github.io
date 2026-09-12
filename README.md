# MEG.camera

Photography portfolio for Megan Feng, built with the same portable Astro/static-site approach as the Insights project.

Planned address: <https://megcamera.github.io>

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm ci
npm run dev
```

## Verify

```bash
npm run check
npm run build
npm run preview
```

The complete static website is generated in `dist/`. All published photographs, styles, and scripts are stored inside this repository; the live site does not depend on Lightroom or Canva.

## Content map

- `src/pages/` — page content
- `src/data/gallery.ts` — photo order, titles, categories, and alt text
- `src/styles/` — design tokens and responsive styling
- `public/images/work/` — optimized 800 px and 1600 px WebP photographs
- `.github/workflows/deploy.yml` — GitHub Pages deployment

## Publishing

The GitHub account and repository must both use the exact name `megcamera` / `megcamera.github.io`. In repository **Settings → Pages**, choose **GitHub Actions** as the source. Every push to `main` then publishes automatically.

## Photo source

The selected work was supplied through Megan’s Lightroom album. The website uses optimized display copies for performance. Full-resolution originals should be archived separately and should not be committed to GitHub.
