# Story 10.3: Dedicated /demo Watch Page for Video Indexing

Status: done

## Story

As an SEO owner,
I want a dedicated `/[locale]/demo` watch page where the product video is the primary content,
so that Google Search Console stops failing the "Video isn't on a watch page" validation and the demo video becomes eligible for video search results.

## Acceptance Criteria

1. New route `src/app/[locale]/demo/page.tsx` renders a page where the YouTube embed is the dominant element above the fold.
2. The `VideoObject` JSON-LD schema (previously on homepage) lives only on the `/demo` page; homepage no longer claims to be a video watch page.
3. Page exists in all three locales (en, hi, gu) with translated copy in `messages/{en,hi,gu}.json` under a new `demo` namespace.
4. Page is added to `src/app/sitemap.ts` `STATIC_PAGES` array so all three locale variants appear in the sitemap.
5. Footer Resources column links to `/demo` via a new `nav.demo` translation key.
6. Page sets canonical and hreflang correctly via `buildSeoMetadata({ pathname: "/demo" })`.
7. Breadcrumb JSON-LD lists Home → Demo.
8. `npm run build` completes without errors and the new locale pages appear in `.next/server/app/[locale]/demo/`.

## Dev Notes

- Trigger: GSC Video Indexing report (2026-05-04) failing on three URLs — `cheqify.app/{en,hi,gu}` — with reason "Video isn't on a watch page". Validation started 29/04/2026, failed 30/04/2026.
- Google's "watch page" requirement: the page hosting `VideoObject` schema must have the video as its primary content — not buried as the 5th of 9 marketing sections.
- Fix strategy chosen by Ravi on 2026-05-07 — Option 2 from a 3-way comparison (drop schema vs. dedicated watch page vs. hybrid). Dedicated page also doubles as a new SEO landing page targeting "cheqify demo", "cheque printing demo", "cheque software demo video" keywords.
- Homepage retains the existing `<DemoVideo />` iframe section (no removal) — only the JSON-LD schema moves.
- Sitemap is dynamic (`src/app/sitemap.ts`, `force-static`) — new entries for `/en/demo`, `/hi/demo`, `/gu/demo` will appear after `npm run build`.
- After deploy, append the three new URLs to `_bmad-output/seo/gsc-indexing-queue.md` and submit them to Search Console to trigger fresh validation.

## Dev Agent Record

### Agent Model Used
claude-opus-4-7[1m] (Claude Code)

### Completion Notes List
- Created `src/app/[locale]/demo/page.tsx` with video as the dominant element above the fold, plus highlights grid, transcript paragraphs (SEO text), and closing CTA.
- VideoObject schema lives only on the new demo page; removed `JSONLD_VIDEO` from the homepage JSON-LD array.
- Added `demo` namespace + `nav.demo` + `footer.watchDemo` keys to en/hi/gu translation files via a one-off insertion script.
- Footer Product column now links to `/demo` (added third row after Pricing).
- `npm run build` successful; sitemap.xml.body contains all three demo URLs (cheqify.app/{en,hi,gu}/demo); 81 total locs.
- Pending: redeploy + GSC URL Inspection submission of the three new URLs to clear the failing video-indexing validation.

### File List
- `src/app/[locale]/demo/page.tsx` (new)
- `src/app/[locale]/page.tsx` (remove JSONLD_VIDEO)
- `src/app/sitemap.ts` (add /demo)
- `src/components/layout/footer.tsx` (add /demo link)
- `messages/en.json` (add demo namespace + nav.demo)
- `messages/hi.json` (add demo namespace + nav.demo)
- `messages/gu.json` (add demo namespace + nav.demo)
- `_bmad-output/implementation-artifacts/10-3-demo-watch-page.md` (this file)
