# Story 10.1: Per-Page SEO Metadata

Status: ready-for-dev

## Story

As a search engine,
I want proper meta tags on every page,
so that pages are correctly indexed and displayed in search results.

## Acceptance Criteria

1. **Given** any page is rendered, **When** the HTML is generated, **Then** each page has a unique title (< 60 chars) and description (< 160 chars) per language
2. **Given** any page is rendered, **When** the HTML is generated, **Then** Open Graph tags (og:title, og:description, og:image, og:url) are present
3. **Given** any page is rendered, **When** the HTML is generated, **Then** Twitter Card tags are present
4. **Given** any page is rendered, **When** the HTML is generated, **Then** hreflang tags link all 3 language variants (en, hi, gu)
5. **Given** any page is rendered, **When** the HTML is generated, **Then** canonical URL is set

## Tasks / Subtasks

- [ ] Task 1: Add `home.meta` translation keys for homepage (AC: #1)
  - [ ] 1.1: Add `home.meta.title` and `home.meta.description` to en.json, hi.json, gu.json
- [ ] Task 2: Add `generateMetadata` to homepage (AC: #1-5)
  - [ ] 2.1: Add generateMetadata with title, description, OG, Twitter, alternates, canonical
- [ ] Task 3: Enhance all existing pages with full SEO metadata (AC: #1-5)
  - [ ] 3.1: Create shared SEO helper to build alternates.languages and canonical URL
  - [ ] 3.2: Update features/page.tsx with OG, Twitter, alternates, canonical
  - [ ] 3.3: Update pricing/page.tsx
  - [ ] 3.4: Update blog/page.tsx
  - [ ] 3.5: Update blog/[slug]/page.tsx (dynamic — use post frontmatter for OG)
  - [ ] 3.6: Update contact/page.tsx
  - [ ] 3.7: Update about/page.tsx
  - [ ] 3.8: Update privacy/page.tsx
- [ ] Task 4: Build and lint verification

## Dev Notes

### Current State (Audit Results)
- Homepage: MISSING generateMetadata entirely
- Features, Pricing, Blog, Blog Post, Contact, About, Privacy: have basic generateMetadata (title + description only)
- ALL pages missing: alternates.languages (hreflang), Open Graph, Twitter Cards, canonical URLs
- Root layout.tsx has fallback title "Cheqify.app" and description

### Implementation Approach
- Create a shared helper `src/lib/seo.ts` to generate alternates.languages and canonical URL from locale + pathname
- Each page's generateMetadata will use the helper + add page-specific OG/Twitter metadata
- Default OG image: `/images/og-default.webp` (placeholder — can be replaced later)
- Blog posts use frontmatter title/description for dynamic OG tags

### SEO Helper Pattern
```typescript
// src/lib/seo.ts
export function buildAlternates(locale: string, pathname: string) {
  const BASE_URL = "https://cheqify.app";
  return {
    canonical: `${BASE_URL}/${locale}${pathname}`,
    languages: {
      en: `${BASE_URL}/en${pathname}`,
      hi: `${BASE_URL}/hi${pathname}`,
      gu: `${BASE_URL}/gu${pathname}`,
    },
  };
}
```

### Architecture Compliance
- All metadata from translations via `getTranslations()`
- Use Next.js `Metadata` type from "next"
- OG image path: `/images/og-default.webp`
- Base URL: `https://cheqify.app`
- Twitter card type: `summary_large_image`
- Title format: "Page Title | Cheqify.app" (already in translation keys)

### References
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 10 > Story 10.1]
- [Source: _bmad-output/planning-artifacts/prd.md — FR45, FR46]
- [Source: _bmad-output/project-context.md — SEO Rules]

## Dev Agent Record

### Agent Model Used
### Completion Notes List
- Story context analysis completed — full SEO audit performed
### File List
