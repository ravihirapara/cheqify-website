# Story 2.1: Sticky Header with Navigation

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a visitor,
I want a sticky header with navigation links,
so that I can easily move between pages from anywhere on the site.

## Acceptance Criteria

1. **Given** the visitor is on any page, **When** they scroll down the page, **Then** the header remains visible at the top (sticky positioning)

2. **Given** the header is rendered, **When** the visitor views the navigation, **Then** links are displayed for: Home, Features, Pricing, Blog, Contact, About

3. **Given** the header is rendered, **When** the visitor looks at the logo area, **Then** the Cheqify logo links to the homepage

4. **Given** the header is rendered, **When** the visitor views the right side of the header, **Then** the language switcher and theme toggle are present

5. **Given** the header is rendered, **When** the visitor views the action buttons, **Then** a "Login" button (ghost style) links to `https://app.cheqify.app/login` and a "Start Free" button (teal primary) links to `https://app.cheqify.app/register`

6. **Given** the header renders on desktop (>= 1024px), **When** the visitor views navigation, **Then** all nav links, language switcher, theme toggle, Login, and Start Free are visible inline

7. **Given** the visitor is on any locale (en/hi/gu), **When** the header renders, **Then** all header text comes from translation files and nav links use locale-prefixed paths

## Tasks / Subtasks

- [x] Task 1: Add header translation keys to all locale files (AC: #7)
  - [x] 1.1: Add `common.nav` keys for all 6 nav items (home, features, pricing, blog, contact, about) — already partially exist, verify completeness
  - [x] 1.2: Add `common.cta.startFree` and `common.cta.login` keys — verify they exist
  - [x] 1.3: Add `common.header.logoAlt` key for logo alt text in all 3 locale files
  - [x] 1.4: Add `common.header.skipToContent` key for accessibility skip link

- [x] Task 2: Create the Header component (AC: #1, #2, #3, #4, #5, #6)
  - [x] 2.1: Create `src/components/layout/header.tsx` as a `"use client"` component (needs useTranslations, usePathname for active link detection)
  - [x] 2.2: Implement sticky positioning with `<header className="sticky top-0 z-50 ...">` with a background blur/solid background on scroll
  - [x] 2.3: Use `max-w-7xl mx-auto px-4 sm:px-6 lg:px-8` container inside the header for consistent width
  - [x] 2.4: Left section: Cheqify logo (text-based "Cheqify" with ".app" in primary color) linking to homepage via `Link` from `~/i18n/navigation`
  - [x] 2.5: Center section (desktop only, hidden below lg): Navigation links using `Link` from `~/i18n/navigation` for each of the 6 pages (/, /features, /pricing, /blog, /contact, /about)
  - [x] 2.6: Highlight active nav link with primary color based on current pathname
  - [x] 2.7: Right section: LanguageSwitcher, ThemeToggle, "Login" Button (ghost variant, links to `https://app.cheqify.app/login`), "Start Free" Button (default/primary variant, links to `https://app.cheqify.app/register`)
  - [x] 2.8: Add `border-b border-border` to header for subtle bottom border separation
  - [x] 2.9: Ensure header background uses `bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60` for translucent sticky effect

- [x] Task 3: Add skip-to-content link for accessibility (AC: #1)
  - [x] 3.1: Add a visually hidden skip link as the first element inside header: `<a href="#main-content" className="sr-only focus:not-sr-only ...">Skip to content</a>`
  - [x] 3.2: Add `id="main-content"` to the `<main>` element in the page

- [x] Task 4: Integrate Header into the locale layout (AC: #1, #6, #7)
  - [x] 4.1: Import and render `<Header />` in `src/app/[locale]/layout.tsx` above `{children}`
  - [x] 4.2: Wrap children in `<main id="main-content" className="flex-1">` for proper semantic structure
  - [x] 4.3: Remove ThemeToggle and LanguageSwitcher from the placeholder homepage (they move to the header)

- [x] Task 5: Build and lint verification (AC: all)
  - [x] 5.1: Run `npm run build` and verify zero errors — all locale variants generated
  - [x] 5.2: Run `npm run lint` and verify zero errors
  - [x] 5.3: Manually verify header is sticky on scroll, all links work, logo links to home

## Dev Notes

### Architecture Requirements

- **Component location:** `src/components/layout/header.tsx` (per architecture doc component structure)
- **Sticky header:** Required by FR1, FR2 — header must remain visible on scroll with "Start Free" always accessible
- **Navigation links:** Home, Features, Pricing, Blog, Contact, About (from FR1, UX spec)
- **CTA buttons:** "Login" (ghost) → `https://app.cheqify.app/login`, "Start Free" (primary teal) → `https://app.cheqify.app/register` (FR2, FR3)
- **Language switcher + theme toggle in header** (from UX spec patterns and architecture component structure)

### Project Structure Notes

- **Routing:** All internal links must use `Link` from `~/i18n/navigation` (NOT next/link) for locale-aware routing
- **Translations:** All visible text via `useTranslations()` — never hardcode strings
- **Component exports:** Named exports only (`export function Header()`) — no default exports
- **Styling:** Use `cn()` for conditional classes, Tailwind utilities only, no arbitrary values
- **Minimum touch targets:** 44x44px for all interactive elements (buttons already use `h-11 w-11` for icon buttons)
- **Color tokens:** Use `bg-primary`, `text-foreground`, `bg-background` etc. — never hardcode hex values

### Previous Story Intelligence

**From Story 1.1:** shadcn/ui components available: Button, Card, Tabs, NavigationMenu, Sheet, DropdownMenu, Badge, Input. `cn()` utility at `~/lib/utils`.

**From Story 1.2:** ThemeProvider wraps app in root layout. ThemeToggle component exists at `src/components/layout/theme-toggle.tsx`. Uses `useSyncExternalStore` pattern for SSR safety.

**From Story 1.3:**
- `Link` from `~/i18n/navigation` for locale-aware links
- `usePathname` from `~/i18n/navigation` for current path detection
- LanguageSwitcher component exists at `src/components/layout/language-switcher.tsx`
- Translation keys: `common.nav.*`, `common.cta.*` already exist
- Root layout has `suppressHydrationWarning` on `<html>`
- Locale layout wraps with `NextIntlClientProvider`
- `body` has `className="min-h-full flex flex-col"` — header + main + footer pattern ready

**From Story 1.3 debug log:**
- shadcn/ui latest uses Base UI (`@base-ui/react`) — NOT Radix UI
- `DropdownMenuTrigger` doesn't support `asChild` — render Button as child instead
- Build generates dynamic route `/[locale]` — middleware handles routing

### Key Technical Notes

- **Button component uses `@base-ui/react/button`** — not Radix. The `Button` component accepts standard props but uses `ButtonPrimitive` from Base UI.
- **External links** (`https://app.cheqify.app/...`) should use regular `<a>` tags or `<Link>` with full URLs — NOT the i18n `Link` component
- **NavigationMenu from shadcn/ui** uses `@base-ui/react/navigation-menu` — available but may be overkill for simple nav links. Simple `Link` elements with styling may be cleaner for this use case.
- **Desktop breakpoint:** `lg:` (1024px) — hide nav links below this, show hamburger menu (Story 2.2 will handle mobile nav)
- **Section spacing pattern from project-context:** `<section className="py-16 md:py-24">` with `<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`
- **Header height:** Keep consistent (h-16 recommended) for predictable sticky behavior

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Epic 2 > Story 2.1]
- [Source: _bmad-output/planning-artifacts/architecture.md#Frontend Architecture > Component Architecture]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Navigation Patterns > Sticky header with CTA]
- [Source: _bmad-output/project-context.md#Next.js App Router Rules, i18n Rules, Styling Rules, Accessibility Rules]
- [Source: _bmad-output/planning-artifacts/prd.md#FR1, FR2, FR3]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (1M context)

### Debug Log References

- NavigationMenu from shadcn/ui (Base UI) was available but deemed overkill for simple nav links — used plain Link elements with Tailwind styling instead for cleaner, lighter markup
- External links (app.cheqify.app) use regular `<a>` tags since i18n Link is only for internal locale-aware routing
- "Start Free" button visible from sm breakpoint (640px+) for mobile conversion, Login hidden below lg (1024px) — mobile nav (Story 2.2) will provide these

### Completion Notes List

- ✅ Translation keys: Added `common.header.logoAlt` and `common.header.skipToContent` to all 3 locale files (en, hi, gu)
- ✅ Verified existing nav and CTA keys are complete in all locales
- ✅ Header component: sticky, translucent backdrop-blur, h-16, border-b, max-w-7xl container
- ✅ Logo: text-based "Cheqify.app" with primary color accent, links to homepage via i18n Link
- ✅ Desktop nav: 6 links (Home, Features, Pricing, Blog, Contact, About) with active state detection using primary color
- ✅ Right section: LanguageSwitcher, ThemeToggle, Login (ghost), Start Free (primary)
- ✅ Skip-to-content: accessible skip link as first element in header, targets #main-content
- ✅ Locale layout: Header rendered above children, children wrapped in `<main id="main-content" className="flex-1">`
- ✅ Homepage cleaned: removed ThemeToggle and LanguageSwitcher (now in header), changed inner `<main>` to `<div>` to avoid nested main elements
- ✅ Build: zero errors | Lint: zero errors/warnings

### Change Log

- 2026-04-06: Story 2.1 implementation — Sticky header with navigation, logo, CTA buttons, language/theme controls, skip-to-content accessibility

### File List

- `src/components/layout/header.tsx` (NEW — sticky header with nav, logo, CTAs, language/theme controls, skip-to-content)
- `src/app/[locale]/layout.tsx` (MODIFIED — added Header import and rendering, wrapped children in main element)
- `src/app/[locale]/page.tsx` (MODIFIED — removed ThemeToggle and LanguageSwitcher imports/usage, changed inner main to div)
- `messages/en.json` (MODIFIED — added common.header.logoAlt and common.header.skipToContent keys)
- `messages/hi.json` (MODIFIED — added common.header.logoAlt and common.header.skipToContent keys)
- `messages/gu.json` (MODIFIED — added common.header.logoAlt and common.header.skipToContent keys)
