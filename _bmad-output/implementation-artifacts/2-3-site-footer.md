# Story 2.3: Site Footer

Status: done

## Story

As a visitor,
I want a clean footer with essential links,
so that I can find important pages and information.

## Acceptance Criteria

1. **Given** the visitor scrolls to the bottom of any page, **When** the footer is visible, **Then** it displays the Cheqify logo and brief tagline

2. **Given** the footer is rendered, **When** the visitor views the links, **Then** links are organized in columns: Product (Features, Pricing), Resources (Blog), Company (About, Contact), Legal (Privacy)

3. **Given** the footer is rendered, **When** the visitor views the bottom, **Then** a copyright notice with the current year is displayed

4. **Given** the visitor is on any locale (en/hi/gu), **When** the footer renders, **Then** all footer text comes from translation files and links use locale-prefixed paths

## Tasks / Subtasks

- [x] Task 1: Add footer translation keys to all locale files (AC: #4)
  - [x] 1.1: Add `common.footer.product`, `common.footer.resources`, `common.footer.company`, `common.footer.legal` column heading keys
  - [x] 1.2: Add `common.footer.privacy` key for the Privacy link label
  - [x] 1.3: Verify existing `common.footer.copyright` and `common.footer.tagline` keys

- [x] Task 2: Create the Footer component (AC: #1, #2, #3, #4)
  - [x] 2.1: Create `src/components/layout/footer.tsx` as client component (needs Link from i18n/navigation and useTranslations)
  - [x] 2.2: Use `<footer>` semantic element with `border-t border-border` top border
  - [x] 2.3: Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container for consistent width
  - [x] 2.4: Top section: Cheqify logo (text-based) and tagline from translations
  - [x] 2.5: Link columns in a responsive grid: Product (Features, Pricing), Resources (Blog), Company (About, Contact), Legal (Privacy)
  - [x] 2.6: All internal links use `Link` from `~/i18n/navigation`
  - [x] 2.7: Bottom section: copyright with dynamic year via `{year}` ICU placeholder in translation
  - [x] 2.8: Responsive layout: stacked on mobile, multi-column grid on desktop

- [x] Task 3: Integrate Footer into the locale layout (AC: #1)
  - [x] 3.1: Import and render `<Footer />` in `src/app/[locale]/layout.tsx` below `<main>`

- [x] Task 4: Build and lint verification (AC: all)
  - [x] 4.1: Run `npm run build` and verify zero errors
  - [x] 4.2: Run `npm run lint` and verify zero errors

## Dev Notes

### Architecture Requirements

- **Component location:** `src/components/layout/footer.tsx` (per architecture component structure)
- **Footer links:** Product (Features, Pricing), Resources (Blog), Company (About, Contact), Legal (Privacy) — from FR6, epics
- **Logo + tagline** in footer (from UX spec)
- **Copyright with current year** — use ICU message format `{year}` placeholder already in translation files

### Project Structure Notes

- **Server component OK** — footer has no client interactivity (no useState, no event handlers beyond links)
- **BUT** `useTranslations` from next-intl requires client component context when used directly. Alternative: use `getTranslations` from `next-intl/server` for server components, or make it a client component for simplicity
- **Internal links:** `Link` from `~/i18n/navigation` — requires client component. So footer must be `"use client"`
- **Existing translations:** `common.footer.copyright` already has `{year}` placeholder, `common.footer.tagline` exists
- **Nav labels** (`common.nav.*`) already exist and can be reused for link text

### Previous Story Intelligence

**From Story 2.1:** Header uses `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container pattern. Logo is text-based "Cheqify.app" with primary color. Internal links use `Link` from `~/i18n/navigation`.

**From Story 2.2:** NAV_ITEMS exported from header — footer links are a subset but with different grouping, so define footer-specific link groups.

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Epic 2 > Story 2.3]
- [Source: _bmad-output/planning-artifacts/prd.md#FR6]
- [Source: _bmad-output/project-context.md#Styling Rules, i18n Rules]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (1M context)

### Debug Log References

- Footer must be "use client" because `Link` from `~/i18n/navigation` and `useTranslations` require client component context
- Used `bg-card` background for footer to subtly distinguish from main content area
- FOOTER_LINKS array uses mixed key paths: `nav.*` for reusing existing nav labels, `footer.privacy` for the new privacy link label

### Completion Notes List

- ✅ Translation keys: Added footer.product, footer.resources, footer.company, footer.legal, footer.privacy to all 3 locales
- ✅ Footer component: semantic `<footer>`, border-t, bg-card, max-w-7xl container
- ✅ Logo + tagline section in footer
- ✅ 4-column link grid: Product (Features, Pricing), Resources (Blog), Company (About, Contact), Legal (Privacy)
- ✅ All links use i18n Link component for locale-aware routing
- ✅ Copyright with dynamic year via ICU {year} placeholder
- ✅ Responsive: stacked on mobile, grid on sm/lg breakpoints (grid-cols-2 → grid-cols-5)
- ✅ Integrated in locale layout below main
- ✅ Build: zero errors | Lint: zero errors

### Change Log

- 2026-04-06: Story 2.3 implementation — Site footer with logo, tagline, link columns, copyright

### File List

- `src/components/layout/footer.tsx` (NEW — footer with logo, tagline, 4 link columns, copyright)
- `src/app/[locale]/layout.tsx` (MODIFIED — added Footer import and rendering below main)
- `messages/en.json` (MODIFIED — added footer column heading and privacy keys)
- `messages/hi.json` (MODIFIED — added footer column heading and privacy keys)
- `messages/gu.json` (MODIFIED — added footer column heading and privacy keys)
