# Story 4.1: Features Page with Detailed Tabs

Status: done

## Story

As a visitor,
I want a dedicated features page with detailed breakdowns,
so that I can deeply understand what Cheqify offers before signing up.

## Acceptance Criteria

1. **Given** the visitor navigates to /features, **When** the page loads, **Then** a hero section with features page headline is displayed

2. **Given** the features page is rendered, **When** the visitor views the tabbed content, **Then** 3 tabs are shown: Cheque Printing, Lifecycle Tracking, Owner Dashboard

3. **Given** the visitor clicks a tab, **When** the tab content loads, **Then** detailed feature descriptions, bullet points with icons, and product screenshot placeholder are shown

4. **Given** the features page is rendered, **When** the visitor scrolls down, **Then** feature highlight cards with icons are displayed in a grid

5. **Given** the features page is rendered, **When** the visitor scrolls to the bottom, **Then** a CTA section drives sign-ups

6. **Given** the visitor is on any locale, **When** the page renders, **Then** all text comes from translation files

## Tasks / Subtasks

- [x] Task 1: Add features page translation keys (AC: #6)
  - [x] 1.1: Add `features.meta`, `features.hero`, `features.core`, `features.highlights` namespaces to all 3 locale files

- [x] Task 2: Create FeaturesHero component (AC: #1)
  - [x] 2.1: Create `src/components/sections/features-hero.tsx` — badge + headline with primary highlight + subheadline + CTAs + screenshot placeholder

- [x] Task 3: Create FeaturesCore component (AC: #2, #3)
  - [x] 3.1: Create `src/components/sections/features-core.tsx` — horizontal tabs with 3 product pillars
  - [x] 3.2: Each tab: left side (5-col) with title, description, feature list with icons; right side (7-col) with screenshot placeholder

- [x] Task 4: Create FeatureHighlights component (AC: #4)
  - [x] 4.1: Create `src/components/sections/feature-highlights.tsx` — 3 cards in grid with icons, titles, descriptions, hover shadow

- [x] Task 5: Create features page (AC: #1, #5)
  - [x] 5.1: Create `src/app/[locale]/features/page.tsx` with generateMetadata
  - [x] 5.2: Compose FeaturesHero + FeaturesCore + FeatureHighlights + CtaSection

- [x] Task 6: Build and lint verification (AC: all)
  - [x] 6.1: Run `npm run build` and verify zero errors
  - [x] 6.2: Run `npm run lint` and verify zero errors

## Dev Notes

### Architecture Requirements

- **Page location:** `src/app/[locale]/features/page.tsx`
- **Components:** `src/components/sections/features-hero.tsx`, `features-core.tsx`, `feature-highlights.tsx`
- **Design reference:** `_bmad-output/designs/stitch/features/code.html` — follow exact layout
- **Reuse CtaSection** from `~/components/sections/cta-section` for final CTA

### Previous Story Intelligence

- Hero pattern established: badge + split headline + CTAs + elevated screenshot placeholder
- Tab pattern: horizontal buttons with border-b-2 active state
- Stitch design uses lg:grid-cols-12 (5:7 split) for feature tab content
- Feature cards: p-10, shadow-sm hover:shadow-md, icon with group-hover:scale-110

### References

- [Source: _bmad-output/designs/stitch/features/code.html]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 4 > Story 4.1]
- [Source: _bmad-output/planning-artifacts/prd.md#FR17, FR18, FR19]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (1M context)

### Debug Log References

- Stitch features page uses lg:grid-cols-12 (5:7) for tab content — replicated exactly
- Reused CtaSection from homepage for final CTA
- generateMetadata uses features.meta namespace for per-page SEO

### Completion Notes List

- ✅ FeaturesHero: badge, split headline, CTAs, elevated mock dashboard placeholder
- ✅ FeaturesCore: horizontal tabs, 3 pillars with feature lists and screenshot placeholders
- ✅ FeatureHighlights: 3-card grid with icons, hover shadow, scale animation
- ✅ Features page with generateMetadata, composed from 4 sections
- ✅ All translations in EN/HI/GU
- ✅ Build: zero errors | Lint: zero errors

### Change Log

- 2026-04-06: Story 4.1 implementation — Features page with Stitch design layout

### File List

- `src/app/[locale]/features/page.tsx` (NEW — features page with generateMetadata)
- `src/components/sections/features-hero.tsx` (NEW — features hero with badge, headline, CTAs)
- `src/components/sections/features-core.tsx` (NEW — tabbed core ecosystem with 5:7 grid)
- `src/components/sections/feature-highlights.tsx` (NEW — 3-card feature grid)
- `messages/en.json` (MODIFIED — added features namespace)
- `messages/hi.json` (MODIFIED — added features namespace)
- `messages/gu.json` (MODIFIED — added features namespace)
- `_bmad-output/implementation-artifacts/sprint-status.yaml` (MODIFIED — epic-4 and story done)
