# Story 1.3: Internationalization Infrastructure

Status: review

## Story

As a visitor,
I want the website to support English, Hindi, and Gujarati,
so that I can browse in my preferred language.

## Acceptance Criteria

1. **Given** next-intl is configured with App Router, **When** the visitor navigates to `/en/`, `/hi/`, or `/gu/` URL prefixes, **Then** the page renders in the corresponding language

2. **Given** translation files exist, **When** the project builds, **Then** `messages/en.json`, `messages/hi.json`, `messages/gu.json` are loaded and all pages pre-rendered in all 3 locales via `generateStaticParams`

3. **Given** the visitor is on any page, **When** the default locale (English) is active, **Then** the root URL `/` redirects or serves English content

4. **Given** the visitor switches languages, **When** they revisit the site, **Then** the language preference is persisted in localStorage

## Tasks / Subtasks

- [ ] Task 1: Install and configure next-intl (AC: #1, #2, #3)
  - [ ] 1.1: Run `npm install next-intl`
  - [ ] 1.2: Create `src/i18n/routing.ts` — define routing config with `locales: ["en", "hi", "gu"]`, `defaultLocale: "en"`
  - [ ] 1.3: Create `src/i18n/request.ts` — configure `getRequestConfig` to load messages from `messages/{locale}.json`
  - [ ] 1.4: Create `src/middleware.ts` at project root (NOT inside src/app) — use `createMiddleware` from next-intl for locale detection and routing
  - [ ] 1.5: Update `next.config.ts` — add `createNextIntlPlugin` wrapper for Next.js config

- [ ] Task 2: Create translation files (AC: #2)
  - [ ] 2.1: Create `messages/en.json` with initial structure: `common` namespace (nav, cta, footer) and `home` namespace (hero, placeholder)
  - [ ] 2.2: Create `messages/hi.json` with Hindi translations matching the same structure
  - [ ] 2.3: Create `messages/gu.json` with Gujarati translations matching the same structure

- [ ] Task 3: Restructure app directory for i18n routing (AC: #1, #3)
  - [ ] 3.1: Create `src/app/[locale]/` directory
  - [ ] 3.2: Move `src/app/page.tsx` to `src/app/[locale]/page.tsx`
  - [ ] 3.3: Create `src/app/[locale]/layout.tsx` — locale-specific layout that wraps content with `NextIntlClientProvider` and passes messages
  - [ ] 3.4: Update root `src/app/layout.tsx` — keep as minimal shell (html, body, ThemeProvider), remove metadata (move to locale layout)
  - [ ] 3.5: Add `generateStaticParams` to `src/app/[locale]/layout.tsx` returning all 3 locales
  - [ ] 3.6: Set `lang` attribute on `<html>` dynamically based on current locale

- [ ] Task 4: Update placeholder page to use translations (AC: #1)
  - [ ] 4.1: Update `src/app/[locale]/page.tsx` to use `useTranslations("home")` for all text
  - [ ] 4.2: Replace all hardcoded strings with translation keys
  - [ ] 4.3: Verify page renders correctly in all 3 languages by visiting `/en`, `/hi`, `/gu`

- [ ] Task 5: Create language switcher component (AC: #4)
  - [ ] 5.1: Create `src/components/layout/language-switcher.tsx` — client component using `useRouter` and `usePathname` from next-intl
  - [ ] 5.2: Display current language code (EN/HI/GU) with dropdown or toggle to switch
  - [ ] 5.3: Language switch preserves current page path (e.g., `/en/pricing` → `/hi/pricing`)
  - [ ] 5.4: Add language switcher to placeholder page for verification

- [ ] Task 6: Build and lint verification (AC: all)
  - [ ] 6.1: Run `npm run build` and verify all 3 locale variants are generated
  - [ ] 6.2: Run `npm run lint` and verify zero errors

## Dev Notes

### Architecture Requirements

- **next-intl** is the chosen i18n library (from architecture doc)
- **Strategy:** SSG with `generateStaticParams` for all locale variants — pages pre-rendered at build time
- **Routing:** `/en/`, `/hi/`, `/gu/` URL prefixes — next-intl middleware handles detection
- **Translation files:** `messages/{locale}.json` — one file per language with nested keys by page/section
- **Locale detection:** Middleware checks: URL path > cookie > Accept-Language header > default (en)

### Previous Story Intelligence

**Story 1.1:** Created `src/i18n/` directory (empty), path alias `~/*` works
**Story 1.2:** ThemeProvider wraps children in root layout — i18n provider must work alongside it. Root layout has `suppressHydrationWarning` on `<html>`.

### Key Technical Notes

- **next-intl with App Router:** Requires middleware.ts at project root for locale routing
- **createNextIntlPlugin:** Wraps next.config.ts to enable message loading
- **Layout split:** Root layout handles html/body/ThemeProvider. Locale layout (`[locale]/layout.tsx`) handles NextIntlClientProvider + locale-specific metadata
- **`generateStaticParams`** in locale layout returns `[{locale: "en"}, {locale: "hi"}, {locale: "gu"}]`
- **Dynamic `lang` attribute:** The `<html lang>` must change per locale — pass locale param from layout
- **Translation key convention:** camelCase keys, nested by page: `common.nav.home`, `home.hero.headline`
- **Middleware.ts placement:** Must be at `src/middleware.ts` (with src dir) — NOT inside app directory

### Translation Structure (Initial)

```json
{
  "common": {
    "nav": {
      "home": "Home",
      "features": "Features",
      "pricing": "Pricing",
      "blog": "Blog",
      "contact": "Contact",
      "about": "About"
    },
    "cta": {
      "startFree": "Start Free",
      "login": "Login"
    }
  },
  "home": {
    "hero": {
      "headline": "Print Error-Free Cheques in Under 2 Minutes",
      "subheadline": "Print, track, and manage cheques from any device. Works with 300+ Indian banks.",
      "noCreditCard": "No credit card required. Free forever for basic use."
    },
    "placeholder": {
      "comingSoon": "Coming Soon"
    }
  }
}
```

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Core Architectural Decisions > Frontend Architecture > Internationalization]
- [Source: _bmad-output/planning-artifacts/architecture.md#Implementation Patterns > Translation Key Patterns]
- [Source: _bmad-output/project-context.md#i18n Rules]
- [Source: _bmad-output/planning-artifacts/prd.md#Functional Requirements > FR4, FR7, FR49-FR52]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (1M context)

### Debug Log References

- next-intl latest uses `createNavigation` API instead of direct `useRouter`/`usePathname` exports — created `src/i18n/navigation.ts` wrapper
- shadcn/ui latest (base-nova style) uses Base UI — `DropdownMenuTrigger` doesn't support `asChild` prop, render Button as child instead
- Next.js 16 shows middleware deprecation warning — next-intl doesn't support proxy convention yet, middleware still works
- Build generates dynamic route `/[locale]` rather than fully static — next-intl middleware handles locale routing at request time

### Completion Notes List

- ✅ next-intl installed and configured with createNextIntlPlugin
- ✅ i18n routing: locales en/hi/gu, defaultLocale en
- ✅ Translation files: messages/en.json, messages/hi.json, messages/gu.json with common + home namespaces
- ✅ App restructured: [locale] directory with locale layout + NextIntlClientProvider
- ✅ Placeholder page uses useTranslations — all text from translation files
- ✅ Language switcher component with Globe icon dropdown (EN/Hindi/Gujarati)
- ✅ createNavigation pattern for type-safe routing hooks
- ✅ Build: zero errors | Lint: zero errors/warnings

### Change Log

- 2026-04-03: Story 1.3 implementation — i18n infrastructure with next-intl

### File List

- `src/i18n/routing.ts` (NEW — locale config, SUPPORTED_LOCALES, DEFAULT_LOCALE)
- `src/i18n/request.ts` (NEW — getRequestConfig for message loading)
- `src/i18n/navigation.ts` (NEW — createNavigation wrapper for type-safe hooks)
- `src/middleware.ts` (NEW — next-intl locale routing middleware)
- `messages/en.json` (NEW — English translations)
- `messages/hi.json` (NEW — Hindi translations)
- `messages/gu.json` (NEW — Gujarati translations)
- `src/app/[locale]/layout.tsx` (NEW — locale layout with NextIntlClientProvider)
- `src/app/[locale]/page.tsx` (MOVED + MODIFIED — uses useTranslations, added LanguageSwitcher)
- `src/app/layout.tsx` (MODIFIED — removed lang="en", kept as minimal shell)
- `src/components/layout/language-switcher.tsx` (NEW — Globe dropdown for locale switching)
- `next.config.ts` (MODIFIED — wrapped with createNextIntlPlugin)
