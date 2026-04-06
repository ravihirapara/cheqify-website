# Story 8.1: About Us Page

Status: review

## Story

As a visitor,
I want to learn about the company behind Cheqify,
so that I can trust the product and understand its mission.

## Acceptance Criteria

1. **Given** the visitor navigates to /about, **When** the page loads, **Then** the company story and mission are displayed
2. **Given** the about page is rendered, **When** the visitor views the "Why we built Cheqify" section, **Then** it explains the problem being solved with a pull-quote and image
3. **Given** the about page is rendered, **When** the visitor views the team section, **Then** team members are displayed with names and roles
4. **Given** the about page is rendered, **When** the visitor views values section, **Then** company values are presented in a bento-style grid
5. **Given** the about page is rendered, **When** the visitor views the bottom, **Then** a CTA section drives sign-ups
6. **Given** the visitor is on any locale, **When** the page renders, **Then** all text comes from translation files (en, hi, gu)
7. **Given** the page is rendered, **When** search engines crawl it, **Then** generateMetadata provides proper title, description, and hreflang tags

## Tasks / Subtasks

- [x] Task 1: Add `about` translation keys to all 3 locale files (AC: #1, #6)
  - [x] 1.1: Add `about.meta.title` and `about.meta.description` for SEO
  - [x] 1.2: Add `about.hero.*` keys (badge, headline, subheadline)
  - [x] 1.3: Add `about.story.*` keys (heading, paragraphs, quote)
  - [x] 1.4: Add `about.values.*` keys (heading, subheading, 4 value cards with title + description)
  - [x] 1.5: Add `about.team.*` keys (heading, intro, member names and roles)
  - [x] 1.6: Add `about.cta.*` keys (heading, subheading, demo button text)
  - [x] 1.7: Add Hindi translations in hi.json
  - [x] 1.8: Add Gujarati translations in gu.json
- [x] Task 2: Create `AboutHero` component (AC: #1)
  - [x] 2.1: Gradient background (primary to primary-container/teal)
  - [x] 2.2: Badge with "Our Mission" label
  - [x] 2.3: H1 headline + subheadline, centered, max-w-4xl
- [x] Task 3: Create `AboutStory` component (AC: #2)
  - [x] 3.1: 2-column layout (text left, image right on desktop; stacked mobile)
  - [x] 3.2: H2 "Why we built Cheqify" heading
  - [x] 3.3: Multiple story paragraphs with leading-relaxed
  - [x] 3.4: Pull-quote with left border (4px primary border)
  - [x] 3.5: Right column image (aspect-square, rounded-xl, shadow-2xl)
- [x] Task 4: Create `AboutValues` component (AC: #4)
  - [x] 4.1: Heading with subtext
  - [x] 4.2: Bento-style grid (mixed spans per Stitch design)
  - [x] 4.3: 4 value cards with icons, titles, descriptions
  - [x] 4.4: Hover effects on cards (shadow-lg)
- [x] Task 5: Create `AboutTeam` component (AC: #3)
  - [x] 5.1: H2 heading with section intro
  - [x] 5.2: 4-column grid (sm:2col, lg:4col)
  - [x] 5.3: Team cards with placeholder images, name (H4), role (uppercase tracking-wider)
  - [x] 5.4: Image aspect ratio 4:5
- [x] Task 6: Create about page at `src/app/[locale]/about/page.tsx` (AC: #5, #7)
  - [x] 6.1: `generateMetadata` with title, description, alternates.languages for hreflang
  - [x] 6.2: Compose: AboutHero → AboutStory → AboutValues → AboutTeam → AboutCta
- [x] Task 7: Build and lint verification

## Dev Notes

### Stitch Design Reference
- **Hero:** Gradient background (primary teal), badge "Our Mission", centered H1 + subheadline, decorative bg image at 20% opacity
- **Story section:** 2-column (text-left, image-right), multiple paragraphs, pull-quote with 4px left primary border, decorative badge card (absolute positioned, hidden on mobile)
- **Values:** Bento grid with mixed column spans — Card 1: 2-col span with icon+text+image, Card 2: 1-col dark bg white text, Card 3: 1-col highlighted surface, Card 4: 2-col span image-left text-right. Cards have hover shadow-lg
- **Team:** 4-column grid, cards with 4:5 aspect-ratio images, group-hover:scale-110 on image, name (H4 bold), role (uppercase tracking-wider smaller font)
- **CTA:** Full-width dark background, centered H2 + sub, two buttons: "Start Free" (primary) + "Schedule Demo" (outline), decorative gradient blurs

### Project Structure Notes

**New files created:**
```
src/app/[locale]/about/page.tsx
src/components/sections/about-hero.tsx
src/components/sections/about-story.tsx
src/components/sections/about-values.tsx
src/components/sections/about-team.tsx
src/components/sections/about-cta.tsx
```

**Existing files modified:**
```
messages/en.json  — added about.* namespace
messages/hi.json  — added about.* namespace
messages/gu.json  — added about.* namespace
```

**Design decisions:**
- Created dedicated `AboutCta` component instead of reusing `CtaSection` — the about page CTA follows Stitch design with dark foreground bg, decorative gradient blurs, and "Schedule Demo" button (different from homepage CTA)
- Team member images use gradient placeholder backgrounds with User icon — ready for real photos later
- Values section uses Lucide icons (Sparkles, Shield, Heart, Globe) matching the four values

### Architecture Compliance

- All text from `useTranslations("about.sectionName")` — never hardcode
- Named exports only (except page.tsx default export)
- Component files in kebab-case, component names in PascalCase
- Mobile-first responsive: base → sm: → md: → lg: → xl:
- Section pattern: `<section className="py-16 md:py-24">` with `<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`
- TypeScript strict mode, no `any`
- Use path alias `~/` for imports

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Epic 8 > Story 8.1]
- [Source: _bmad-output/designs/stitch/about_us/code.html]
- [Source: _bmad-output/planning-artifacts/prd.md — FR33, FR34, FR35]

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6 (1M context)

### Completion Notes List
- Ultimate context engine analysis completed — comprehensive developer guide created
- All 7 tasks completed: translations (en/hi/gu), 5 components, page composition, build+lint pass
- AboutCta created as dedicated component matching Stitch dark-bg CTA design
- Fixed pre-existing lint error in cookie-consent.tsx (setState in useEffect → useSyncExternalStore)
- Build verified: 39 static pages generated, /[locale]/about route active

### File List
- src/app/[locale]/about/page.tsx (new)
- src/components/sections/about-hero.tsx (new)
- src/components/sections/about-story.tsx (new)
- src/components/sections/about-values.tsx (new)
- src/components/sections/about-team.tsx (new)
- src/components/sections/about-cta.tsx (new)
- messages/en.json (modified — added about.* namespace)
- messages/hi.json (modified — added about.* namespace)
- messages/gu.json (modified — added about.* namespace)
- src/components/layout/cookie-consent.tsx (modified — lint fix)
