# Story 3.1: Hero Section

Status: done

## Story

As a visitor,
I want to see a clear hero section when I land on the homepage,
so that I instantly understand what Cheqify does and can take action.

## Acceptance Criteria

1. **Given** the visitor lands on the homepage, **When** the page loads, **Then** the hero displays headline "Print Error-Free Cheques in Under 2 Minutes"

2. **Given** the hero is rendered, **When** the visitor views it, **Then** a subheadline explains the product value

3. **Given** the hero is rendered, **When** the visitor views CTAs, **Then** "Start Free" (teal primary button) links to `https://app.cheqify.app/register`

4. **Given** the hero is rendered, **When** the visitor views CTAs, **Then** "Watch Demo" (outline button with play icon) is visible

5. **Given** the hero is rendered, **When** the visitor views below CTAs, **Then** "No credit card required. Free forever for basic use." text appears

6. **Given** the hero is rendered on desktop, **When** the visitor views the layout, **Then** a product screenshot or placeholder visual is displayed on the right side

7. **Given** the hero is rendered on mobile, **When** the visitor views the layout, **Then** the visual appears below the text content (stacked layout)

## Tasks / Subtasks

- [x] Task 1: Add hero translation keys to all locale files (AC: #1, #2, #5)
  - [x] 1.1: Verify existing `home.hero.headline`, `home.hero.subheadline`, `home.hero.noCreditCard` keys in all 3 locales
  - [x] 1.2: Add `home.hero.watchDemo` key (or verify `common.cta.watchDemo` exists)
  - [x] 1.3: Add `home.hero.productScreenshotAlt` key for the hero image alt text in all 3 locales

- [x] Task 2: Create the Hero section component (AC: #1, #2, #3, #4, #5, #6, #7)
  - [x] 2.1: Create `src/components/sections/hero.tsx` as a client component (needs `useTranslations`)
  - [x] 2.2: Use the section spacing pattern: `<section className="py-16 md:py-24">` with `<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`
  - [x] 2.3: Split layout: text left + visual right on desktop (`lg:grid lg:grid-cols-2 lg:gap-12`), stacked on mobile
  - [x] 2.4: Headline: use Display typography (text-4xl md:text-5xl lg:text-6xl font-bold, leading-tight) with text from `home.hero.headline`
  - [x] 2.5: Subheadline: Body Large (text-lg text-muted-foreground) with text from `home.hero.subheadline`
  - [x] 2.6: CTA row: "Start Free" (primary Button, links to `https://app.cheqify.app/register`) + "Watch Demo" (outline Button with Play icon from Lucide)
  - [x] 2.7: Below CTAs: "No credit card required..." text (text-sm text-muted-foreground) from `home.hero.noCreditCard`
  - [x] 2.8: Right side (desktop): placeholder product visual — styled card with brand-colored placeholder shapes
  - [x] 2.9: Ensure "Start Free" CTA is visible without scrolling on all devices (above the fold)

- [x] Task 3: Integrate Hero into the homepage (AC: all)
  - [x] 3.1: Replace the current placeholder content in `src/app/[locale]/page.tsx` with the Hero component
  - [x] 3.2: Import and render `<Hero />` as the first section on the homepage

- [x] Task 4: Build and lint verification (AC: all)
  - [x] 4.1: Run `npm run build` and verify zero errors
  - [x] 4.2: Run `npm run lint` and verify zero errors

## Dev Notes

### Architecture Requirements

- **Component location:** `src/components/sections/hero.tsx` (per architecture: `components/sections/` for page section components)
- **Hero layout:** Split — text left, visual right on desktop. Stacked — text top, visual below on mobile. (UX spec: Hero Section Specification)
- **Typography:** Display size (48px/3rem) for headline, Body Large (18px) for subheadline (UX spec: Type Scale)
- **CTAs:** "Start Free" (primary teal) and "Watch Demo" (outline with play icon) — (UX spec + epics)
- **No carousel:** Static hero only (UX spec anti-pattern: auto-rotating carousel)
- **Product visual:** Use placeholder until real screenshots available (PRD risk mitigation)

### Project Structure Notes

- **Translations:** All text via `useTranslations("home")` — hero keys already partially exist (`home.hero.headline`, `home.hero.subheadline`, `home.hero.noCreditCard`)
- **`common.cta.watchDemo`** already exists in all locale files
- **External links:** Use plain `<a>` tags for `https://app.cheqify.app/register` — NOT i18n Link
- **Images:** Use Next.js `<Image>` component when real screenshots available. For placeholder, styled div is fine.
- **Lucide icons:** `Play` icon for Watch Demo button
- **Section spacing:** `py-16 md:py-24` with `max-w-7xl` container (project-context.md)
- **No arbitrary Tailwind values** — use scale values only

### Previous Story Intelligence

**From Epic 2 (code review):**
- Root layout is now a pass-through; locale layout has `<html lang={locale}>`, ThemeProvider, Header, Footer
- Homepage `page.tsx` currently has minimal placeholder content — will be replaced
- `NAV_ITEMS` in `src/lib/navigation.ts` — shared constants pattern established
- Button component uses `@base-ui/react/button` — works with standard props
- External links use `<a>` wrapping `<Button>` pattern (established in header)

**From UX spec:**
- Hero headline: 48px/3rem, Bold (700), line-height 1.1
- Subheadline: 18px/1.125rem, Regular (400), line-height 1.6
- Primary CTA "Start Free" must be above the fold on ALL devices
- No auto-play video — demo video is a separate story (3.6)
- The "Watch Demo" button here is just a CTA — the actual video section is Story 3.6

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Epic 3 > Story 3.1]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Hero Section Specification]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Typography System]
- [Source: _bmad-output/project-context.md#Styling Rules, Image Rules, i18n Rules]
- [Source: _bmad-output/planning-artifacts/prd.md#FR8, FR9]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (1M context)

### Debug Log References

- Used `useTranslations("common.cta")` for shared CTA keys instead of duplicating in home namespace
- "Watch Demo" links to `#demo` anchor — Story 3.6 (Demo Video Embed) will implement the target section
- Product visual is a styled placeholder (brand-colored shapes in a card) — real screenshots will replace it later
- Removed `home.placeholder.comingSoon` key from locale files as it's no longer used

### Completion Notes List

- ✅ Verified all hero translation keys exist; added `home.hero.productScreenshotAlt` to all 3 locales
- ✅ Removed unused `home.placeholder` namespace from all 3 locale files
- ✅ Hero component: split layout (text left, visual right), responsive stacking on mobile
- ✅ Display typography for headline (text-4xl to text-6xl), Body Large for subheadline
- ✅ Start Free (primary) + Watch Demo (outline with Play icon) CTAs
- ✅ "No credit card required" trust text below CTAs
- ✅ Placeholder product visual with brand-colored card
- ✅ Homepage replaced — Hero is first section
- ✅ Build: zero errors | Lint: zero errors

### Change Log

- 2026-04-06: Story 3.1 implementation — Hero section with headline, CTAs, product visual placeholder

### File List

- `src/components/sections/hero.tsx` (NEW — hero section with split layout, CTAs, placeholder visual)
- `src/app/[locale]/page.tsx` (MODIFIED — replaced placeholder with Hero component)
- `messages/en.json` (MODIFIED — added hero.productScreenshotAlt, removed placeholder namespace)
- `messages/hi.json` (MODIFIED — added hero.productScreenshotAlt, removed placeholder namespace)
- `messages/gu.json` (MODIFIED — added hero.productScreenshotAlt, removed placeholder namespace)
