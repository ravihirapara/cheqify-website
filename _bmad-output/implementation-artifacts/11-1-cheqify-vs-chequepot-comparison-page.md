# Story 11.1: Cheqify vs ChequePot Comparison Page

Status: ready-for-dev

## Story

As a **potential user searching for cheque printing software**,
I want **a dedicated comparison page showing Cheqify vs ChequePot side-by-side**,
so that **I can clearly see why Cheqify is the better free alternative and make a confident switching decision**.

## Acceptance Criteria

1. **AC1: Page accessible at `/[locale]/comparison`** for all 3 locales (en, hi, gu)
2. **AC2: Hero section** with badge, headline highlighting Cheqify's advantage, subheading, and CTA buttons (Start Free + Explore Features)
3. **AC3: Feature comparison table** with side-by-side columns (Cheqify vs ChequePot) covering at least 12 features with checkmarks/crosses
4. **AC4: Key advantages section** with 4-6 cards highlighting why Cheqify wins (Free, Modern UI, More Banks, Lifecycle Tracking, etc.)
5. **AC5: Verdict/CTA section** with strong closing message and Start Free button
6. **AC6: Full SEO metadata** via `buildSeoMetadata()` with title, description targeting "ChequePot alternative" keywords
7. **AC7: BreadcrumbList JSON-LD** via `buildBreadcrumbJsonLd()`
8. **AC8: ComparisonChart or FAQPage JSON-LD** structured data for rich search results
9. **AC9: All text translated** in en.json, hi.json, gu.json under `comparison` namespace
10. **AC10: Navigation link** added to header/footer pointing to comparison page
11. **AC11: Responsive design** — works on mobile, tablet, desktop
12. **AC12: `setRequestLocale(locale)`** called for static export compatibility

## Tasks / Subtasks

- [ ] Task 1: Create translation keys (AC: #9)
  - [ ] Add `comparison` namespace to `messages/en.json`
  - [ ] Add `comparison` namespace to `messages/hi.json`
  - [ ] Add `comparison` namespace to `messages/gu.json`
  - [ ] Keys: meta.title, meta.description, hero.*, table.*, advantages.*, verdict.*

- [ ] Task 2: Create comparison page route (AC: #1, #6, #7, #8, #12)
  - [ ] Create `src/app/[locale]/comparison/page.tsx`
  - [ ] Add `generateMetadata()` with `buildSeoMetadata({ pathname: "/comparison" })`
  - [ ] Add `setRequestLocale(locale)` in default export
  - [ ] Add BreadcrumbList JSON-LD via `buildBreadcrumbJsonLd()`
  - [ ] Add ComparisonChart/FAQPage JSON-LD

- [ ] Task 3: Create hero component (AC: #2)
  - [ ] Create `src/components/sections/comparison-hero.tsx`
  - [ ] Badge: "SIDE-BY-SIDE COMPARISON"
  - [ ] Headline with highlight: "See Why Cheqify Wins"
  - [ ] Subheading explaining free vs paid
  - [ ] Two CTA buttons: Start Free (external) + Explore Features (internal)

- [ ] Task 4: Create comparison table component (AC: #3, #11)
  - [ ] Create `src/components/sections/comparison-table.tsx`
  - [ ] Two-column comparison: Cheqify (green checkmarks) vs ChequePot (red crosses where applicable)
  - [ ] Features to compare:
    - Cheque Printing (Both: Yes)
    - Price (Cheqify: Free / ChequePot: Paid)
    - Bank Formats (Cheqify: 300+ / ChequePot: Limited)
    - MICR Validation (Cheqify: Yes / ChequePot: No)
    - Batch Printing (Cheqify: Yes / ChequePot: Limited)
    - Lifecycle Tracking (Cheqify: Yes / ChequePot: No)
    - Owner Dashboard (Cheqify: Yes / ChequePot: No)
    - Team Management (Cheqify: Yes / ChequePot: No)
    - Auto Amount-in-Words (Cheqify: Yes / ChequePot: Manual)
    - Multi-Language Support (Cheqify: 3 languages / ChequePot: English only)
    - Mobile Responsive (Cheqify: Yes / ChequePot: No)
    - Export Reports (Cheqify: PDF, Excel, CSV / ChequePot: Limited)
  - [ ] Responsive: stack on mobile, side-by-side on desktop

- [ ] Task 5: Create advantages section (AC: #4)
  - [ ] Create `src/components/sections/comparison-advantages.tsx`
  - [ ] 4-6 cards with icons (lucide-react):
    - Free Forever (Wallet icon)
    - Modern Interface (Monitor icon)
    - 300+ Banks (Building2 icon)
    - Lifecycle Tracking (GitGraph icon)
    - Real-Time Alerts (Bell icon)
    - Works Anywhere (Globe icon)

- [ ] Task 6: Create verdict/CTA section (AC: #5)
  - [ ] Reuse existing `CtaSection` component OR create `comparison-verdict.tsx`
  - [ ] Strong headline: "The Clear Winner"
  - [ ] Start Free CTA button

- [ ] Task 7: Add navigation link (AC: #10)
  - [ ] Add "Compare" or "vs ChequePot" link to footer under "Product" section
  - [ ] Update footer FOOTER_LINKS in `src/components/layout/footer.tsx`
  - [ ] Update translation keys in `common.footer` or `common.nav` namespace

- [ ] Task 8: Build and test (AC: #1, #11)
  - [ ] Run `npm run build` — verify page generates for all 3 locales
  - [ ] Test responsive layout at 375px, 768px, 1440px

## Dev Notes

### Page Structure (follow existing patterns exactly)

```
src/app/[locale]/comparison/page.tsx        — async server component
src/components/sections/comparison-hero.tsx  — "use client" component
src/components/sections/comparison-table.tsx — "use client" component
src/components/sections/comparison-advantages.tsx — "use client" component
```

### Architecture Compliance

- **Rendering:** Static export (`output: "export"`) — MUST call `setRequestLocale(locale)`
- **i18n:** Use `next-intl` — `useTranslations("comparison.section")` in client components, `getTranslations()` in generateMetadata
- **SEO:** Use `buildSeoMetadata()` from `~/lib/seo` and `buildBreadcrumbJsonLd()` from `~/lib/breadcrumbs`
- **Styling:** Tailwind CSS + shadcn/ui Button component
- **Icons:** lucide-react (already installed)
- **Links:** Use `Link` from `~/i18n/navigation` for internal links, `<a>` for external

### Translation Key Pattern

```
comparison.meta.title
comparison.meta.description
comparison.hero.badge
comparison.hero.headlinePart1
comparison.hero.headlineHighlight
comparison.hero.subheading
comparison.hero.cta
comparison.table.heading
comparison.table.subheading
comparison.table.cheqify
comparison.table.chequepot
comparison.table.feature1Name
comparison.table.feature1Cheqify
comparison.table.feature1Chequepot
...
comparison.advantages.heading
comparison.advantages.card1Title
comparison.advantages.card1Description
...
comparison.verdict.heading
comparison.verdict.subheading
comparison.verdict.cta
```

### SEO Keywords to Target

- "ChequePot alternative"
- "ChequePot vs Cheqify"
- "free cheque printing software India"
- "best cheque printing app India"
- Include these naturally in meta title, description, and h1/h2 tags

### Project Structure Notes

- Path alias: `~/` maps to `./src/`
- All section components are `"use client"` directives
- Pages are async server components
- Translation files: `messages/en.json`, `messages/hi.json`, `messages/gu.json`

### References

- [Source: _bmad-output/planning-artifacts/prd.md#line-106] — Competitor comparison pages listed as deferred scope
- [Source: _bmad-output/planning-artifacts/prd.md#line-167-171] — Sunita persona searches "ChequePot alternative India"
- [Source: _bmad-output/planning-artifacts/prd.md#line-291] — SEO keyword "ChequePot alternative"
- [Source: src/app/[locale]/pricing/page.tsx] — Page structure with FAQ JSON-LD pattern
- [Source: src/app/[locale]/features/page.tsx] — Page structure with breadcrumbs pattern
- [Source: src/components/sections/pricing-cards.tsx] — Feature list with checkmarks pattern
- [Source: src/lib/seo.ts] — SEO metadata builder
- [Source: src/lib/breadcrumbs.ts] — Breadcrumb JSON-LD builder

## Dev Agent Record

### Agent Model Used

### Debug Log References

### Completion Notes List

### File List
