mohitkyadav.github.io
## The site behind only4.dev

A plain static site with no build step: `index.html`, `style.css`, `hero.svg`, and `404.html`.

### Run it locally
`npx serve -l 3000`, then open http://localhost:3000 (it serves `404.html` for unknown paths, like Netlify)

### Deploy
Push to `master`. Netlify serves the repo root as-is (see `netlify.toml`).
