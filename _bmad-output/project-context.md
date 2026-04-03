---
project_name: 'Cheqify.app'
user_name: 'Ravi'
date: '2026-04-03'
sections_completed: ['technology_stack', 'language_rules', 'framework_rules', 'testing_rules', 'code_quality', 'workflow_rules', 'anti_patterns']
existing_patterns_found: 15
status: 'complete'
---

# Project Context for AI Agents

_This file contains critical rules and patterns that AI agents must follow when implementing code in this project. Focus on unobvious details that agents might otherwise miss._

---

## Technology Stack & Versions

| Technology | Version | Purpose |
|-----------|---------|---------|
| Next.js | 16.2.1 | App Router, SSG, routing |
| React | 19.2.4 | UI rendering |
| TypeScript | ^5 (strict) | Type safety |
| Tailwind CSS | ^4 | Utility-first styling |
| shadcn/ui | latest | Component library (Radix UI primitives) |
| next-themes | latest | Dark/light mode switching |
| next-intl | latest | i18n routing + translations |
| gray-matter + remark | latest | Blog markdown parsing |
| @formspree/react | latest | Contact form |
| Lucide React | latest | Icons |
| Inter | self-hosted | Typography |
| Playwright | latest | E2E testing |

**Deployment:** Vercel (auto SSG, CDN, HTTPS)

## Critical Implementation Rules

### Language & TypeScript Rules

- TypeScript strict mode is enabled — never use `any` type, always define interfaces
- Use `~/*` path alias for imports: `import { Button } from "~/components/ui/button"`
- Named exports only — no `export default` (except `page.tsx` and `layout.tsx` required by Next.js)
- One component per file — never export multiple components from a single file
- Props interfaces named `{ComponentName}Props`: e.g., `interface HeroProps { locale: string }`

### Next.js App Router Rules

- All pages live under `src/app/[locale]/` for i18n routing
- Pages use `export default function` (Next.js requirement), all other components use named exports
- Use `generateStaticParams` to pre-render all locale variants at build time
- Use `generateMetadata` in every `page.tsx` for per-page per-language SEO meta
- No `"use client"` unless component requires browser APIs (theme toggle, cookie consent, mobile menu, contact form). Default to server components.
- Never use `useEffect` for data fetching — all data is static and resolved at build time

### i18n (next-intl) Rules

- Every visible text string must come from `useTranslations()` — never hardcode text in components
- Translation files at `messages/{locale}.json` (en.json, hi.json, gu.json)
- Keys in camelCase, nested by page then section: `home.hero.headline`, `common.cta.startFree`
- Shared text in `common` namespace — never duplicate strings across page namespaces
- No HTML inside translation values — use component composition instead
- Alt text for images must come from translations

### Theming Rules

- Use `next-themes` ThemeProvider wrapping the app in root `layout.tsx`
- All colors via shadcn/ui CSS variables: `bg-primary`, `text-foreground`, `bg-card` — never hardcode hex values
- Dark mode via `dark:` Tailwind variant: `bg-white dark:bg-slate-900`
- Brand tokens: Primary teal `#00b4a6`, Navy `#0d2137` — configured in CSS variables, not in component code

### Styling (Tailwind CSS) Rules

- Mobile-first: base styles for mobile, then `sm:`, `md:`, `lg:`, `xl:`
- Use `cn()` utility for conditional classes — never string concatenation
- No `@apply` in CSS files — all styles as Tailwind utilities in JSX
- Spacing from Tailwind scale only (4, 8, 12, 16, 24, 32, 48, 64, 96) — never arbitrary values like `p-[13px]`
- Section spacing pattern: `<section className="py-16 md:py-24">` with `<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">`

### Image Rules

- Always use Next.js `<Image>` component — never `<img>` tags
- Hero images: `priority` prop. All others: `loading="lazy"`
- Images in `public/images/` directory, WebP format preferred
- Alt text from translation files — never hardcoded

### SEO Rules

- Every `page.tsx` must export `generateMetadata` with title (< 60 chars), description (< 160 chars)
- Every page must include `alternates.languages` for hreflang (en, hi, gu variants)
- JSON-LD structured data as `<script type="application/ld+json">` in page components
- Semantic HTML: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`

### Third-Party Script Rules

- GA4 and Tawk.to load ONLY after cookie consent — never before
- Load third-party scripts asynchronously — never block page render
- Site must remain fully functional if any third-party script fails to load
- Formspree SDK loads with the page (lightweight, no consent needed)

### Contact Form Rules

- Use `@formspree/react` for form handling
- Three form states: `"idle" | "submitting" | "success" | "error"`
- Disable submit button during submission, show spinner
- Form errors inline below fields, linked via `aria-describedby`

### Blog Rules

- Blog markdown files at `content/blog/{lang}/{slug}.md`
- Required frontmatter: title, description, date (YYYY-MM-DD), author, slug, lang, tags, image
- Slug must match filename (without .md)
- Every post must exist in all 3 languages with the same slug
- In-article CTA ("Start Free") in every blog post

### Accessibility Rules

- Minimum 16px body text — never smaller on any device
- Touch targets minimum 44x44px on mobile
- Color contrast 4.5:1 for body text, 3:1 for large text
- All interactive elements keyboard-accessible with visible teal focus ring
- `prefers-reduced-motion` must disable animations
- Skip-to-content link at top of page
- ARIA labels on all icon-only buttons and decorative images marked `aria-hidden`

### File Naming Rules

- Component files: `kebab-case.tsx` (e.g., `trust-bar.tsx`, `pricing-table.tsx`)
- Component names in code: PascalCase (e.g., `TrustBar`, `PricingTable`)
- Functions/variables: camelCase (e.g., `getBlogPosts`, `isMenuOpen`)
- Constants: UPPER_SNAKE_CASE (e.g., `SUPPORTED_LOCALES`, `DEFAULT_LOCALE`)
- Data files: `kebab-case.ts` (e.g., `bank-logos.ts`, `pricing-plans.ts`)

### Testing Rules

- Playwright E2E tests only — no unit tests for static content components
- Tests in `tests/e2e/` directory
- Test: page renders, navigation, language switching, theme toggle, CTA links, form submission, responsive layouts
- No mocking — test against real built pages

### Critical Anti-Patterns (NEVER do these)

- Never hardcode text strings in components — always use `useTranslations()`
- Never use `<img>` tags — always `<Image>` from next/image
- Never use `export default` on components (except page.tsx/layout.tsx)
- Never use inline styles or `@apply`
- Never use arbitrary Tailwind values like `p-[13px]`
- Never load GA4 or Tawk.to before cookie consent
- Never put multiple components in one file
- Never use string concatenation for Tailwind classes — use `cn()`

---

## Usage Guidelines

**For AI Agents:**

- Read this file before implementing any code
- Follow ALL rules exactly as documented
- When in doubt, prefer the more restrictive option
- Update this file if new patterns emerge

**For Humans:**

- Keep this file lean and focused on agent needs
- Update when technology stack changes
- Review quarterly for outdated rules
- Remove rules that become obvious over time

Last Updated: 2026-04-03
