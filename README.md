# Bennett & Dyson — agency homepage (skeleton)

Hand-built static single-scroll site. **Structure** mirrors Designjoy's funnel
(hero → how-it-works → why-static → benefits → proof → pricing → book-a-call).
**Aesthetic** is a Ramotion-style restrained-premium reskin (oversized type,
generous whitespace, near-monochrome + one accent). Zero third-party requests
(system fonts), strict CSP — the site *is* the pitch: low attack surface.

> **"Bennett & Dyson" is a placeholder name** — a rebrand may be pending.

## Layout
- `index.html` — the whole page (one file).
- `styles.css` — all styling. **Reskin in one place:** the `:root` tokens (palette, type, rhythm).
- `brand.js` — **the single swap point for brand strings** (name, tagline, CTA, email, booking/scorecard links, placeholder pricing). Edit the `BRAND` object and everything updates. HTML carries no-JS fallbacks.
- `favicon.svg`, `robots.txt` — assets/host config.
- `_headers` — Cloudflare security headers + strict CSP (indexable public storefront).
- `wrangler.jsonc` + `.assetsignore` — Cloudflare assets-only Worker deploy (same pattern as ikad-showcase).

## Rebrand checklist (all trivial)
1. Edit `brand.js` → `BRAND.name`, `nameShort`, `tagline`, `email`, `booking`, `scorecard`, pricing.
2. (optional) Swap palette/logo colour in `styles.css` `:root` (`--accent`, `--ink`) and `favicon.svg`.
3. Wire the two CTAs: point `BRAND.scorecard` (lead-magnet form/scheduler) and `BRAND.booking` (Cal.com/Calendly) at real URLs.

## Preview locally
```
cd bennett-dyson-site && python3 -m http.server 8788
# open http://127.0.0.1:8788/
```

## Deploy (Cloudflare, git-connected)
Repo pushes to `bennett-dyson/site` (GitHub). Connect it once in the Cloudflare
dashboard (Workers & Pages → Create → connect the repo); build command none,
output dir `.`. Thereafter every push to `main` auto-deploys. Or one-shot:
```
npx wrangler deploy    # uses wrangler.jsonc; needs `npx wrangler login` once
```

## What's stubbed
- Pricing numbers (`$X,XXX`) — placeholder until set with the principal.
- Portfolio/proof — 3 placeholder cards (wire IKAD showcase before/after in).
- CTA targets — `#scorecard` / `#book` anchors until the scorecard form + booking link exist.
- The scorecard tool itself (the automated audit lead-magnet) is not built here — this is the storefront only.
