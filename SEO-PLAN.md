# Cheqify.app SEO Plan

**Date:** 2026-04-13
**Current Score:** 8.5/10 — Foundation is excellent, needs tactical improvements

---

## Phase 1: Quick Wins (This Week)

| # | Task | Impact | Effort | Status |
|---|------|--------|--------|--------|
| 1 | Add HSTS header in `netlify.toml` — `Strict-Transport-Security: max-age=31536000` | Security + SEO trust signal | 2 min | Done |
| 2 | Optimize OG image — current `og-cheqify.jpg` is 560KB, should be <200KB | Faster social sharing | 5 min | Done |
| 3 | Add font preload — Inter font not preloaded, causes flash of unstyled text | Core Web Vitals (CLS) | 5 min | Done |
| 4 | Request indexing for top 6 English pages in Search Console | Get indexed faster | 10 min | Manual |
| 5 | Submit sitemap in Search Console if not already done | Crawl discovery | 2 min | Manual |

---

## Phase 2: Technical SEO Fixes (This Week / Next Week)

| # | Task | Impact | Effort | Status |
|---|------|--------|--------|--------|
| 6 | Enable image optimization — `unoptimized: true` in `next.config.ts` disables all Next.js image optimization (resizing, WebP/AVIF serving, compression). Evaluate if Netlify supports it or switch to a loader. | Page speed, bandwidth | 30 min | Done |
| 7 | Add page-specific OG images — all pages share one generic image. At minimum, blog posts should have their cover image as OG image. | Social CTR | 1 hr | Done |
| 8 | Add Content-Security-Policy header in `netlify.toml` | Security | 30 min | Done |
| 9 | Add more structured data — Contact page (ContactPoint schema), Features page (Product schema), About page (Organization with team) | Rich snippets | 1 hr | Done |

---

## Phase 3: Content & On-Page SEO (Next 2 Weeks)

| # | Task | Impact | Effort | Status |
|---|------|--------|--------|--------|
| 10 | Add "Related Posts" section to blog post pages — increases internal linking and session duration | Internal linking, engagement | 2 hr | Done |
| 11 | Add reading time to blog posts | User experience | 30 min | Done |
| 12 | Create tag/category archive pages for blog (e.g., `/blog/tag/cheque-fraud`) | New indexable pages, long-tail keywords | 3 hr | Done |
| 13 | Write more blog content — target 2 posts/week on Indian cheque-related keywords | Organic traffic | Ongoing | Ongoing |
| 14 | Add FAQ section to Features page with FAQPage schema (like already on Pricing page) | Featured snippets | 1 hr | Done |

---

## Phase 4: Off-Page & Growth (Ongoing)

| # | Task | Impact | Effort | Status |
|---|------|--------|--------|--------|
| 15 | Build backlinks — submit to Indian SaaS directories, startup listings (ProductHunt, BetaList, SaaSHub) | Domain authority | Ongoing | Manual |
| 16 | Google Business Profile — create if not exists, helps with "cheque printing software India" searches | Local SEO | 30 min | Manual |
| 17 | Social signals — share blog posts on LinkedIn, Twitter, relevant Indian finance forums | Traffic + crawl signals | Ongoing | Manual |
| 18 | Monitor Search Console weekly — track which pages get indexed, which queries drive impressions | Data-driven decisions | Ongoing | Manual |

---

## Current SEO Audit — What's Already Excellent

### Metadata
- Centralized `buildSeoMetadata()` function ensures consistency across all pages
- Title, description, Open Graph, Twitter Card set on every page
- Canonical URLs properly configured per locale
- Hreflang alternate links for all 3 locales (en, hi, gu)
- Google Bot directives: max-video-preview, max-image-preview: large

### Structured Data (JSON-LD)
- Organization schema (homepage)
- WebSite schema (homepage)
- SoftwareApplication schema (homepage)
- BreadcrumbList schema (all pages)
- BlogPosting schema (blog posts with author, publisher, dates)
- FAQPage schema (Pricing page — 5 FAQs, Comparison page — 3 FAQs)

### Accessibility
- Semantic HTML: header, nav, main, footer, section, article used correctly
- Skip-to-content link with sr-only class
- 21 ARIA implementations (aria-label, aria-current, etc.)
- Language attribute on html element (locale-aware)

### Technical
- Robots.txt allows all, disallows /studio, points to sitemap
- Sitemap.xml with all 48+ URLs (27 static + blog posts across 3 locales)
- Custom 404 page with helpful navigation links
- PWA manifest configured
- Self-hosted Inter font with font-display: swap
- Netlify caching headers (1yr static assets, 30d images, no-cache HTML)
- Security headers: X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy

### Internal Linking
- Footer with comprehensive links (Product, Resources, Company, Legal)
- Blog prev/next navigation
- Breadcrumb trails on all pages
- Header navigation covers all major pages

---

## Google Search Console — Current Status (2026-04-13)

| Status | Count | Details |
|--------|-------|---------|
| Indexed | 11 | Pages Google has crawled and added to search results |
| Not Indexed | 40 | Pages discovered but not yet indexed |

### Not-Indexed Breakdown

| Reason | Pages | Action |
|--------|-------|--------|
| Discovered – currently not indexed | 35 | Normal for new site. Wait 2-4 weeks + request indexing manually |
| Crawled – currently not indexed | 3 | Check for thin content or Sanity Studio pages |
| Page with redirect | 1 | Root `/` redirects to `/en` — expected, no fix needed |
| Duplicate, Google chose different canonical | 1 | Monitor — may resolve with hreflang tags already in place |

---

## Key Files Reference

| File | Purpose |
|------|---------|
| `src/lib/seo.ts` | Centralized SEO metadata builder |
| `src/app/sitemap.ts` | Dynamic sitemap generation |
| `src/app/robots.ts` | Robots.txt configuration |
| `src/app/layout.tsx` | Root layout with base metadata |
| `src/app/[locale]/layout.tsx` | Locale layout with language config |
| `netlify.toml` | Headers, caching, security |
| `next.config.ts` | Next.js config (image optimization flag) |
| `public/manifest.json` | PWA manifest |
