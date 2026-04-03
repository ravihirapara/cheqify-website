---
stepsCompleted: [1, 2, 3, 4, 5, 6, 7, 8]
status: 'complete'
completedAt: '2026-04-03'
inputDocuments:
  - "_bmad-output/planning-artifacts/prd.md"
  - "_bmad-output/planning-artifacts/ux-design-specification.md"
  - "_bmad-output/planning-artifacts/product-brief-cheqify-app-2026-03-26.md"
  - "_bmad-output/designs/stitch/cheqify_precision/DESIGN.md"
workflowType: 'architecture'
project_name: 'Cheqify.app'
user_name: 'Ravi'
date: '2026-04-03'
---

# Architecture Decision Document

_This document builds collaboratively through step-by-step discovery. Sections are appended as we work through each architectural decision together._

## Project Context Analysis

### Requirements Overview

**Functional Requirements:**
52 FRs across 12 capability areas: Navigation & Global Layout (7), Homepage Experience (9), Features Page (3), Pricing Page (4), Blog (5), Contact Page (4), About Us Page (3), Privacy Policy Page (3), Cookie Consent (3), Live Chat (2), SEO & Discoverability (5), Multi-Language Content (4). All FRs are visitor-facing — no admin, no backend operations.

**Non-Functional Requirements:**
34 NFRs across 6 categories: Performance (9), Security (6), Scalability (2), Accessibility (8), Integration (4), SEO (5). Performance and SEO NFRs are the primary architecture drivers — they mandate SSG, CDN delivery, and lazy-loaded third-party scripts.

**Scale & Complexity:**

- Primary domain: Frontend web (Static Site Generation)
- Complexity level: Low-Medium
- Estimated architectural components: ~15-20 (7 page templates, shared layout, 5-8 reusable UI components, i18n system, theme system, consent manager, SEO utilities)

### Technical Constraints & Dependencies

- **Next.js App Router with SSG** — all pages pre-rendered at build time, no server-side runtime
- **Tailwind CSS + shadcn/ui** — component library choice is pre-decided from UX spec
- **Vercel deployment** — hosting platform is pre-decided, enables automatic SSG and CDN
- **Formspree** — contact form backend, no custom API needed
- **Tawk.to** — live chat, third-party widget injection
- **Google Analytics 4** — analytics, loaded after consent
- **Static markdown blog** — MVP blog with Sanity.io migration path in Phase 2
- **Inter font** — typography choice pre-decided from UX spec

### Cross-Cutting Concerns Identified

1. **Internationalization (i18n)** — affects all 7 pages, routing structure, content management, SEO meta tags, and blog content. Every text string must be externalised.
2. **Theming (dark/light)** — affects all UI components, must use CSS variables for seamless switching. Must persist preference in localStorage.
3. **SEO** — affects all pages. Requires per-page per-language meta tags, structured data, hreflang, sitemap generation. Drives the SSG rendering choice.
4. **Cookie Consent** — gates GA4 and Tawk.to loading. Must be the first thing resolved before any third-party script loads.
5. **Responsive Design** — 4 breakpoints affect all page layouts and components. Mobile-first approach.

## Starter Template Evaluation

### Primary Technology Domain

Frontend web (Static Site Generation) — Next.js App Router with TypeScript and Tailwind CSS.

### Existing Project Foundation

The project was initialized with `create-next-app` and already includes:

| Technology | Version | Status |
|-----------|---------|--------|
| Next.js | 16.2.1 | Latest |
| React | 19.2.4 | Latest |
| TypeScript | ^5 | Latest |
| Tailwind CSS | ^4 | Latest |
| ESLint | ^9 | Latest |

**Path alias:** `~/*` → `./src/*` (configured in tsconfig)

### Starter Options Considered

1. **Keep existing `create-next-app` base** — Already initialized, latest versions, clean foundation
2. **T3 Stack (`create-t3-app`)** — Adds tRPC, Prisma, NextAuth — overkill for a static marketing site with no backend
3. **shadcn/ui init** — Not a full starter, but a CLI that adds component infrastructure to existing Next.js projects

### Selected Approach: Extend existing `create-next-app` with `shadcn/ui init`

**Rationale:**
- Project already has the correct Next.js + TypeScript + Tailwind foundation
- No backend/database/auth needed — T3 or full-stack starters add unnecessary complexity
- `shadcn/ui init` adds the component infrastructure (CSS variables, theme config, cn utility) needed for our design system
- This is the lightest-weight approach that gives us everything we need

**Additional packages to add:**

```bash
# shadcn/ui initialization
npx shadcn@latest init

# Theme switching
npm install next-themes

# i18n (internationalization)
npm install next-intl

# Blog (markdown rendering)
npm install gray-matter remark remark-html

# Formspree (contact form)
npm install @formspree/react
```

### Architectural Decisions Provided by Starter

**Language & Runtime:**
TypeScript with strict mode, ES2017 target, bundler module resolution

**Styling Solution:**
Tailwind CSS v4 with PostCSS — shadcn/ui adds CSS variables for theming and `cn()` utility for conditional classes

**Build Tooling:**
Next.js built-in (SWC compiler, automatic code splitting, image optimization, static export)

**Testing Framework:**
Not included in starter — to be decided in architecture decisions (likely Playwright for E2E given this is a marketing site)

**Code Organization:**
App Router with `src/` directory, path alias `~/*`

**Development Experience:**
Next.js dev server with Fast Refresh, TypeScript type checking, ESLint linting

**Note:** Project initialization and `shadcn/ui init` should be the first implementation story.

## Core Architectural Decisions

### Decision Priority Analysis

**Critical Decisions (Block Implementation):**
- i18n approach (next-intl with SSG routing)
- Component architecture (shadcn/ui + custom components)
- Blog content architecture (static markdown with migration path)
- Cookie consent architecture (gates third-party scripts)

**Important Decisions (Shape Architecture):**
- Testing strategy (Playwright E2E)
- CI/CD pipeline (Vercel + GitHub Actions)
- SEO utilities (sitemap, structured data, meta generation)

**Deferred Decisions (Post-MVP):**
- Sanity.io CMS integration (Phase 2)
- Additional language support (Phase 2)
- Interactive demo architecture (Phase 3)

### Data Architecture

**No database.** All content is static:

| Content Type | Storage | Format |
|-------------|---------|--------|
| Page content | JSON translation files | `messages/en.json`, `messages/hi.json`, `messages/gu.json` |
| Blog posts | Markdown files | `content/blog/{lang}/{slug}.md` with frontmatter |
| Images/assets | `public/` directory | Optimized via Next.js Image component |
| Config (bank logos, pricing plans, testimonials) | JSON/TypeScript constants | `src/data/*.ts` |

**Blog Post Frontmatter Schema:**
```yaml
title: string
description: string
date: YYYY-MM-DD
author: string
slug: string
lang: en | hi | gu
tags: string[]
image: string (optional)
```

### Authentication & Security

**No user authentication.** Security decisions:

| Decision | Choice | Rationale |
|----------|--------|-----------|
| HTTPS | Enforced by Vercel | All traffic encrypted |
| CSP Headers | next.config.js security headers | Prevent XSS, restrict script sources |
| Cookie Consent | Custom component + localStorage | Gates GA4 and Tawk.to loading |
| Form Security | Formspree built-in spam protection | No custom backend needed |
| Inline Scripts | Forbidden | All JS from trusted sources only |

### API & Communication Patterns

**No custom API.** Third-party integrations only:

| Integration | Method | Loading Strategy |
|------------|--------|-----------------|
| Formspree | Form POST via `@formspree/react` | Loaded with page (lightweight SDK) |
| Tawk.to | Script injection | Loaded async after cookie consent |
| Google Analytics 4 | Script injection | Loaded async after cookie consent |
| Google Search Console | Meta tag verification | Static, no runtime loading |

### Frontend Architecture

**Internationalization (i18n):**
- Library: `next-intl`
- Strategy: SSG with `generateStaticParams` for all locale variants
- Routing: `/en/`, `/hi/`, `/gu/` URL prefixes
- Translation files: `messages/{locale}.json` — one file per language with nested keys by page/section
- Locale detection: User preference (localStorage) > URL path > browser default
- All pages pre-rendered in all 3 languages at build time

**Component Architecture:**

```
src/
├── components/
│   ├── ui/              # shadcn/ui base components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── tabs.tsx
│   │   ├── navigation-menu.tsx
│   │   ├── sheet.tsx
│   │   ├── dropdown-menu.tsx
│   │   └── badge.tsx
│   ├── layout/          # Shared layout components
│   │   ├── header.tsx
│   │   ├── footer.tsx
│   │   ├── mobile-nav.tsx
│   │   └── cookie-consent.tsx
│   └── sections/        # Page section components
│       ├── hero.tsx
│       ├── trust-bar.tsx
│       ├── bank-logos.tsx
│       ├── how-it-works.tsx
│       ├── features-tabs.tsx
│       ├── stats-bar.tsx
│       ├── testimonials.tsx
│       ├── cta-section.tsx
│       ├── pricing-table.tsx
│       └── blog-card.tsx
```

**State Management:**
No global state management library needed. Local component state (React useState) for:
- Theme toggle (managed by next-themes)
- Language selection (managed by next-intl)
- Cookie consent state (localStorage)
- Mobile menu open/close
- Tab selections

**Theming:**
- `next-themes` with `ThemeProvider` wrapping the app
- CSS variables defined in Tailwind config for light/dark tokens
- Brand colors from UX spec: Primary teal `#00b4a6`, Navy `#0d2137`, surfaces per mode
- `prefers-color-scheme` detection with localStorage persistence

**Performance Optimization:**
- SSG for all pages — zero server runtime
- Next.js Image component for all images (WebP, responsive sizes, lazy loading)
- Self-hosted Inter font with `font-display: swap`
- Dynamic imports for below-fold sections
- Third-party scripts loaded only after consent and after page render

### Infrastructure & Deployment

**Hosting:** Vercel
- Automatic SSG builds on push
- Global CDN distribution
- Automatic HTTPS
- Preview deployments for PRs

**CI/CD Pipeline:**

| Trigger | Action | Environment |
|---------|--------|------------|
| Push to master | Vercel auto-deploys to production | Production |
| PR to master | Vercel preview deployment + GitHub Actions (lint, type check, build) | Preview |
| Manual | Playwright E2E tests | CI |

**GitHub Actions Workflow (PR checks):**
1. `npm run lint` — ESLint check
2. `npx tsc --noEmit` — TypeScript type check
3. `npm run build` — Verify SSG build succeeds

**Testing Strategy:**
- **Playwright E2E** — Primary testing approach for marketing site
- Test cases: page renders, navigation works, language switching, theme toggle, CTA links correct, form submission, responsive layouts
- No unit tests for static content components (low ROI)
- Lighthouse CI for performance regression testing

**Environment Configuration:**
- `.env.local` for development (Formspree ID, GA4 ID, Tawk.to property ID)
- Vercel environment variables for production
- No secrets in repository — all third-party IDs are public-facing widget IDs

### Decision Impact Analysis

**Implementation Sequence:**
1. shadcn/ui init + theme setup + brand tokens
2. next-intl setup + translation file structure
3. Layout components (header, footer, mobile nav)
4. Cookie consent component
5. Page implementations (homepage first)
6. Blog infrastructure (markdown parsing)
7. Third-party integrations (Formspree, Tawk.to, GA4)
8. SEO utilities (sitemap, structured data, meta)
9. Playwright E2E tests
10. GitHub Actions CI pipeline

**Cross-Component Dependencies:**
- i18n affects all components (every text string externalised)
- Theme affects all components (CSS variables everywhere)
- Cookie consent must load before GA4 and Tawk.to
- Layout (header/footer) must be built before any page
- Blog infrastructure independent of page implementations

## Implementation Patterns & Consistency Rules

### Naming Patterns

**File Naming:**
- Components: `kebab-case.tsx` — e.g., `hero.tsx`, `trust-bar.tsx`, `pricing-table.tsx`
- Pages: `page.tsx` (Next.js App Router convention)
- Layouts: `layout.tsx` (Next.js convention)
- Utilities: `kebab-case.ts` — e.g., `format-date.ts`, `get-blog-posts.ts`
- Data files: `kebab-case.ts` — e.g., `bank-logos.ts`, `pricing-plans.ts`
- Translation files: `{locale}.json` — e.g., `en.json`, `hi.json`, `gu.json`

**Component Naming (in code):**
- PascalCase for components: `Hero`, `TrustBar`, `PricingTable`
- camelCase for functions/variables: `getBlogPosts`, `formatDate`, `isMenuOpen`
- UPPER_SNAKE_CASE for constants: `SUPPORTED_LOCALES`, `DEFAULT_LOCALE`

**CSS/Tailwind Naming:**
- CSS variables: `--primary`, `--background`, `--foreground` (shadcn/ui convention)
- Custom CSS classes: avoid — use Tailwind utility classes exclusively
- `cn()` utility for conditional classes: `cn("base-classes", conditional && "conditional-classes")`

### Translation Key Patterns

**Structure:** Nested by page, then section, then element.

```json
{
  "common": {
    "nav": { "home": "Home", "features": "Features", "pricing": "Pricing" },
    "cta": { "startFree": "Start Free", "login": "Login", "watchDemo": "Watch Demo" },
    "footer": { "copyright": "..." }
  },
  "home": {
    "hero": { "headline": "...", "subheadline": "...", "noCreditCard": "..." },
    "trustBar": { "bankGrade": "...", "banks": "...", "anyDevice": "...", "freeForever": "..." },
    "howItWorks": { "title": "...", "step1": "...", "step2": "...", "step3": "..." }
  },
  "features": { "..." : "..." },
  "pricing": { "..." : "..." }
}
```

**Rules:**
- Keys in camelCase: `startFree`, not `start_free` or `start-free`
- Shared text in `common` namespace — never duplicate strings across pages
- Each page has its own top-level namespace matching the route name
- No HTML in translation values — use component composition instead

### Component Patterns

**Component File Structure:**
Every component file follows this order:
1. Imports
2. Types/interfaces (if any)
3. Component function (named export)

```tsx
import { useTranslations } from "next-intl";
import { Button } from "~/components/ui/button";

interface HeroProps {
  locale: string;
}

export function Hero({ locale }: HeroProps) {
  const t = useTranslations("home.hero");
  return ( /* ... */ );
}
```

**Rules:**
- Named exports only — no default exports (except `page.tsx` and `layout.tsx` which Next.js requires as default)
- One component per file — no multiple component exports
- Props interface named `{ComponentName}Props`
- Use `useTranslations` hook in every component that renders text — never hardcode strings

### Styling Patterns

**Tailwind Usage Rules:**
- Mobile-first: base styles for mobile, then `sm:`, `md:`, `lg:`, `xl:` for larger screens
- Dark mode: use `dark:` variant — e.g., `bg-white dark:bg-slate-900`
- No `@apply` in CSS files — keep all styles as Tailwind utility classes in JSX
- Use shadcn/ui CSS variables for brand colors: `bg-primary`, `text-primary-foreground`
- Spacing: use Tailwind scale (4, 8, 12, 16, 24, 32, 48, 64, 96) — never arbitrary values like `p-[13px]`

**Section Spacing Pattern:**
Every page section follows consistent vertical spacing:
```tsx
<section className="py-16 md:py-24">
  <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    {/* Section content */}
  </div>
</section>
```

### Image Patterns

**All images use Next.js Image component:**
```tsx
import Image from "next/image";

<Image
  src="/images/screenshot-dashboard.webp"
  alt={t("features.dashboardAlt")}
  width={800}
  height={450}
  className="rounded-xl"
  loading="lazy"
/>
```

**Rules:**
- Hero image: `priority` prop (above fold)
- All other images: `loading="lazy"` (below fold)
- Alt text from translation files — never hardcoded
- Images in `public/images/` directory
- WebP format preferred, with fallback

### Error & Loading State Patterns

**Contact Form States:**
```tsx
type FormState = "idle" | "submitting" | "success" | "error";
```

**Loading Pattern:**
- Forms: Disable submit button + show spinner during submission
- No skeleton loaders needed — SSG means pages load fully rendered
- Third-party widgets (Tawk.to): Load silently after consent, no loading indicator

**Error Pattern:**
- Form errors: Inline below the field, red text, linked via `aria-describedby`
- Form submission error: Toast or inline message above form
- Third-party failures: Silent — site remains fully functional

### SEO Patterns

**Every page exports metadata:**
```tsx
export function generateMetadata({ params }: Props): Metadata {
  return {
    title: t("meta.title"),
    description: t("meta.description"),
    alternates: {
      languages: {
        en: "/en/features",
        hi: "/hi/features",
        gu: "/gu/features",
      },
    },
  };
}
```

**Rules:**
- Every page must have unique title and description per language
- `alternates.languages` on every page for hreflang
- Open Graph image and Twitter Card meta on every page
- JSON-LD structured data rendered as `<script type="application/ld+json">`

### Blog Content Patterns

**Markdown file location:** `content/blog/{lang}/{slug}.md`

**Frontmatter required fields:**
```yaml
---
title: "How to Print a Cheque at Home"
description: "Step-by-step guide..."
date: "2026-04-01"
author: "Ravi"
slug: "how-to-print-cheque-at-home"
lang: "en"
tags: ["cheque-printing", "guide"]
image: "/images/blog/print-cheque.webp"
---
```

**Rules:**
- Slug must match filename (without `.md`)
- Every post must exist in all 3 languages with same slug
- Date in ISO format `YYYY-MM-DD`
- Tags in kebab-case

### Enforcement Guidelines

**All AI Agents MUST:**
- Use `cn()` for conditional Tailwind classes — never string concatenation
- Use `useTranslations()` for all visible text — never hardcode strings
- Use Next.js `Image` component — never `<img>` tags
- Use named exports — never default exports (except page/layout)
- Use the section spacing pattern for consistent vertical rhythm
- Follow file naming: `kebab-case.tsx` for components, PascalCase in code

**Anti-Patterns (NEVER do these):**
- Hardcoded text strings in components
- Inline styles or `@apply` in CSS
- Default exports on components
- Arbitrary Tailwind values (`p-[13px]`)
- `<img>` tags instead of `Image` component
- Multiple components in one file

## Project Structure & Boundaries

### Complete Project Directory Structure

```
cheqify-website/
├── .env.local                    # Formspree ID, GA4 ID, Tawk.to property ID
├── .env.example                  # Template for env vars
├── .gitignore
├── .github/
│   └── workflows/
│       └── ci.yml                # Lint + type check + build on PRs
├── next.config.ts                # i18n config, security headers, redirects
├── package.json
├── tsconfig.json
├── tailwind.config.ts            # Brand tokens, shadcn/ui theme
├── components.json               # shadcn/ui configuration
├── postcss.config.mjs
│
├── messages/                     # i18n translation files
│   ├── en.json                   # English translations
│   ├── hi.json                   # Hindi translations
│   └── gu.json                   # Gujarati translations
│
├── content/                      # Static content (blog)
│   └── blog/
│       ├── en/
│       │   ├── how-to-print-cheque-at-home.md
│       │   ├── cheque-bounce-reasons-and-solutions.md
│       │   └── cheqify-vs-manual-cheque-writing.md
│       ├── hi/
│       │   ├── how-to-print-cheque-at-home.md
│       │   ├── cheque-bounce-reasons-and-solutions.md
│       │   └── cheqify-vs-manual-cheque-writing.md
│       └── gu/
│           ├── how-to-print-cheque-at-home.md
│           ├── cheque-bounce-reasons-and-solutions.md
│           └── cheqify-vs-manual-cheque-writing.md
│
├── public/
│   ├── images/
│   │   ├── logo.svg              # Cheqify logo
│   │   ├── logo-dark.svg         # Logo for dark mode
│   │   ├── og-image.png          # Default Open Graph image
│   │   ├── screenshots/          # Product screenshots
│   │   │   ├── dashboard.webp
│   │   │   ├── cheque-printing.webp
│   │   │   ├── lifecycle-tracking.webp
│   │   │   └── owner-dashboard.webp
│   │   ├── banks/                # Bank logos
│   │   │   ├── sbi.svg
│   │   │   ├── hdfc.svg
│   │   │   ├── icici.svg
│   │   │   ├── axis.svg
│   │   │   ├── pnb.svg
│   │   │   ├── kotak.svg
│   │   │   ├── bob.svg
│   │   │   ├── yes-bank.svg
│   │   │   └── indusind.svg
│   │   ├── team/                 # Team photos (About Us)
│   │   └── blog/                 # Blog post images
│   ├── fonts/
│   │   └── inter/                # Self-hosted Inter font files
│   ├── favicon.ico
│   ├── robots.txt
│   └── sitemap.xml               # Auto-generated at build time
│
├── src/
│   ├── app/
│   │   ├── globals.css           # Tailwind base + shadcn/ui CSS variables
│   │   ├── layout.tsx            # Root layout (ThemeProvider, font)
│   │   └── [locale]/             # i18n dynamic route
│   │       ├── layout.tsx        # Locale layout (Header, Footer, CookieConsent)
│   │       ├── page.tsx          # Homepage
│   │       ├── features/
│   │       │   └── page.tsx      # Features page
│   │       ├── pricing/
│   │       │   └── page.tsx      # Pricing page
│   │       ├── blog/
│   │       │   ├── page.tsx      # Blog listing page
│   │       │   └── [slug]/
│   │       │       └── page.tsx  # Individual blog post
│   │       ├── contact/
│   │       │   └── page.tsx      # Contact page
│   │       ├── about/
│   │       │   └── page.tsx      # About Us page
│   │       └── privacy/
│   │           └── page.tsx      # Privacy Policy page
│   │
│   ├── components/
│   │   ├── ui/                   # shadcn/ui base components
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── tabs.tsx
│   │   │   ├── navigation-menu.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── dropdown-menu.tsx
│   │   │   ├── badge.tsx
│   │   │   └── input.tsx
│   │   ├── layout/               # Shared layout components
│   │   │   ├── header.tsx        # Sticky header (nav, language, theme, CTAs)
│   │   │   ├── footer.tsx        # Site footer
│   │   │   ├── mobile-nav.tsx    # Mobile hamburger menu (Sheet)
│   │   │   ├── language-switcher.tsx
│   │   │   ├── theme-toggle.tsx
│   │   │   └── cookie-consent.tsx
│   │   └── sections/             # Reusable page sections
│   │       ├── hero.tsx          # Homepage hero
│   │       ├── trust-bar.tsx     # Trust signals bar
│   │       ├── bank-logos.tsx    # Bank logos strip
│   │       ├── how-it-works.tsx  # 3-step section
│   │       ├── features-tabs.tsx # Tabbed features
│   │       ├── stats-bar.tsx     # Social proof stats
│   │       ├── testimonials.tsx  # Testimonial cards
│   │       ├── cta-section.tsx   # Final CTA section
│   │       ├── pricing-table.tsx # Pricing plans + comparison
│   │       ├── blog-card.tsx     # Blog post card
│   │       └── contact-form.tsx  # Formspree contact form
│   │
│   ├── lib/                      # Utilities and helpers
│   │   ├── utils.ts              # cn() utility (shadcn/ui)
│   │   ├── blog.ts               # getBlogPosts(), getBlogPost() markdown parsing
│   │   ├── seo.ts                # generateStructuredData(), generateMetadata helpers
│   │   └── constants.ts          # SUPPORTED_LOCALES, DEFAULT_LOCALE, external URLs
│   │
│   ├── data/                     # Static data (TypeScript constants)
│   │   ├── bank-logos.ts         # Bank name + logo path array
│   │   ├── pricing-plans.ts     # Plan details, features, prices
│   │   ├── testimonials.ts       # Testimonial content
│   │   ├── team-members.ts       # Team info for About page
│   │   └── stats.ts              # Social proof numbers
│   │
│   └── i18n/                     # i18n configuration
│       ├── request.ts            # next-intl request config
│       └── routing.ts            # next-intl routing config
│
├── tests/
│   └── e2e/                      # Playwright E2E tests
│       ├── homepage.spec.ts
│       ├── navigation.spec.ts
│       ├── language-switching.spec.ts
│       ├── theme-toggle.spec.ts
│       ├── contact-form.spec.ts
│       └── blog.spec.ts
│
├── playwright.config.ts
│
└── _bmad-output/                 # BMAD planning artifacts (not deployed)
    ├── planning-artifacts/
    └── designs/
```

### Architectural Boundaries

**Component Boundaries:**
- `components/ui/` — shadcn/ui primitives. Never modified directly after initial setup. Customized via CSS variables only.
- `components/layout/` — Shared across all pages. Rendered once in `[locale]/layout.tsx`.
- `components/sections/` — Reusable across pages. Each section is self-contained with its own translation namespace.
- `src/data/` — Static data. Imported by section components. Changed here updates all pages.

**Data Boundaries:**
- Translation files (`messages/`) — The single source of truth for all visible text
- Blog content (`content/blog/`) — Markdown files parsed at build time
- Static data (`src/data/`) — TypeScript constants for structured data (plans, banks, testimonials)
- No runtime data fetching — everything resolved at build time

### Requirements to Structure Mapping

| FR Category | Primary Directory | Key Files |
|------------|------------------|-----------|
| Navigation & Global Layout (FR1-7) | `components/layout/` | `header.tsx`, `footer.tsx`, `mobile-nav.tsx`, `language-switcher.tsx`, `theme-toggle.tsx` |
| Homepage Experience (FR8-16) | `app/[locale]/page.tsx` + `components/sections/` | `hero.tsx`, `trust-bar.tsx`, `bank-logos.tsx`, `how-it-works.tsx`, `features-tabs.tsx`, `stats-bar.tsx`, `testimonials.tsx`, `cta-section.tsx` |
| Features Page (FR17-19) | `app/[locale]/features/page.tsx` | Reuses `features-tabs.tsx` with extended content |
| Pricing Page (FR20-23) | `app/[locale]/pricing/page.tsx` | `pricing-table.tsx` |
| Blog (FR24-28) | `app/[locale]/blog/` + `content/blog/` + `lib/blog.ts` | `blog-card.tsx`, markdown files |
| Contact Page (FR29-32) | `app/[locale]/contact/page.tsx` | `contact-form.tsx` |
| About Us (FR33-35) | `app/[locale]/about/page.tsx` | `data/team-members.ts` |
| Privacy Policy (FR36-38) | `app/[locale]/privacy/page.tsx` | Translation file content |
| Cookie Consent (FR39-41) | `components/layout/cookie-consent.tsx` | localStorage for persistence |
| Live Chat (FR42-43) | `app/[locale]/layout.tsx` | Script injection after consent |
| SEO (FR44-48) | `lib/seo.ts` + each `page.tsx` | `generateMetadata`, `robots.txt`, `sitemap.xml` |
| Multi-Language (FR49-52) | `messages/` + `src/i18n/` + `app/[locale]/` | Translation JSONs, routing config |

### Integration Points

**External Integrations:**

| Service | Integration Point | Loading |
|---------|-------------------|---------|
| **Formspree** | `contact-form.tsx` via `@formspree/react` | With page (lightweight) |
| **Tawk.to** | `[locale]/layout.tsx` script injection | After cookie consent |
| **Google Analytics 4** | `[locale]/layout.tsx` script injection | After cookie consent |
| **app.cheqify.app** | CTA button `href` links | Static links, no API |

**Data Flow:**
```
Build Time:
  messages/*.json → next-intl → All components (translated text)
  content/blog/**/*.md → lib/blog.ts → Blog pages (parsed HTML)
  src/data/*.ts → Section components (static data)

Runtime:
  Cookie consent (localStorage) → gates → GA4 + Tawk.to script loading
  Contact form submit → Formspree API → success/error state
  Theme toggle → next-themes → CSS variables → all components
  Language switch → next-intl routing → new locale page
```

## Architecture Validation Results

### Coherence Validation ✅

**Decision Compatibility:**
- Next.js 16 + TypeScript + Tailwind v4 + shadcn/ui — fully compatible, standard modern stack
- next-intl works with Next.js App Router SSG — confirmed compatible
- next-themes works with shadcn/ui CSS variables — designed to work together
- Formspree React SDK works with Next.js — confirmed
- Vercel deployment for Next.js — optimal pairing, zero config needed

**Pattern Consistency:**
- kebab-case files + PascalCase components — follows shadcn/ui conventions exactly
- Translation key structure (camelCase, nested by page) — aligns with next-intl patterns
- Section spacing pattern — consistent with Tailwind's spacing scale
- Named exports convention — compatible with Next.js tree-shaking

**Structure Alignment:**
- `[locale]/` routing matches next-intl's recommended App Router structure
- `components/ui/` + `components/sections/` + `components/layout/` — clean separation
- `messages/` at root — next-intl's default expected location
- `content/blog/` separate from `src/` — clean content/code separation for future CMS migration

### Requirements Coverage Validation ✅

**Functional Requirements Coverage:**

| FR Category | Count | Covered By | Status |
|------------|-------|-----------|--------|
| Navigation & Global Layout (FR1-7) | 7 | `components/layout/`, next-intl, next-themes | ✅ |
| Homepage Experience (FR8-16) | 9 | `components/sections/`, `app/[locale]/page.tsx` | ✅ |
| Features Page (FR17-19) | 3 | `app/[locale]/features/page.tsx`, `features-tabs.tsx` | ✅ |
| Pricing Page (FR20-23) | 4 | `app/[locale]/pricing/page.tsx`, `pricing-table.tsx` | ✅ |
| Blog (FR24-28) | 5 | `content/blog/`, `lib/blog.ts`, `app/[locale]/blog/` | ✅ |
| Contact Page (FR29-32) | 4 | `contact-form.tsx`, Formspree | ✅ |
| About Us (FR33-35) | 3 | `app/[locale]/about/page.tsx`, `data/team-members.ts` | ✅ |
| Privacy Policy (FR36-38) | 3 | `app/[locale]/privacy/page.tsx`, translations | ✅ |
| Cookie Consent (FR39-41) | 3 | `cookie-consent.tsx`, localStorage | ✅ |
| Live Chat (FR42-43) | 2 | Tawk.to script in layout, consent-gated | ✅ |
| SEO (FR44-48) | 5 | `lib/seo.ts`, `generateMetadata`, sitemap, robots.txt | ✅ |
| Multi-Language (FR49-52) | 4 | next-intl, `messages/`, `[locale]/` routing | ✅ |

**All 52 FRs covered.** No gaps.

**Non-Functional Requirements Coverage:**

| NFR Category | Architectural Support | Status |
|-------------|----------------------|--------|
| Performance (NFR1-9) | SSG, Image optimization, font swap, lazy loading, async third-party scripts | ✅ |
| Security (NFR10-15) | Vercel HTTPS, CSP headers, consent gating, Formspree spam protection | ✅ |
| Scalability (NFR16-17) | Static CDN delivery, no server runtime | ✅ |
| Accessibility (NFR18-25) | shadcn/ui Radix primitives (WCAG built-in), semantic HTML patterns, focus indicators | ✅ |
| Integration (NFR26-29) | Graceful degradation pattern, async loading, consent gating | ✅ |
| SEO (NFR30-34) | SSG, structured data, sitemap, meta generation, hreflang | ✅ |

**All 34 NFRs covered.** No gaps.

### Implementation Readiness Validation ✅

**Decision Completeness:**
- All technology choices specified with versions ✅
- All integration approaches documented ✅
- Component architecture with full directory tree ✅
- Data flow clearly mapped (build time vs runtime) ✅

**Pattern Completeness:**
- File naming, component naming, CSS naming — all specified ✅
- Translation key structure with examples ✅
- Section spacing, image, SEO, blog patterns — all documented ✅
- Anti-patterns explicitly listed ✅

### Gap Analysis Results

**Critical Gaps:** None found.

**Minor Items (not blocking):**
- Actual Formspree project ID, GA4 measurement ID, and Tawk.to property ID needed at implementation time — documented in `.env.example`
- Product screenshots and demo video not yet available — architecture supports placeholders
- Actual pricing in INR not finalized — `data/pricing-plans.ts` is easy to update

### Architecture Completeness Checklist

**✅ Requirements Analysis**
- [x] Project context thoroughly analyzed
- [x] Scale and complexity assessed (low-medium)
- [x] Technical constraints identified (SSG, no backend)
- [x] Cross-cutting concerns mapped (i18n, theming, SEO, consent, responsive)

**✅ Architectural Decisions**
- [x] Critical decisions documented with versions
- [x] Technology stack fully specified
- [x] Integration patterns defined
- [x] Performance considerations addressed

**✅ Implementation Patterns**
- [x] Naming conventions established
- [x] Structure patterns defined
- [x] Component patterns specified
- [x] Process patterns documented (error/loading states)

**✅ Project Structure**
- [x] Complete directory structure defined
- [x] Component boundaries established
- [x] Integration points mapped
- [x] All 52 FRs mapped to specific files/directories

### Architecture Readiness Assessment

**Overall Status:** READY FOR IMPLEMENTATION

**Confidence Level:** High

**Key Strengths:**
- Simple, well-understood stack (Next.js SSG + Tailwind + shadcn/ui)
- No backend complexity — pure static site with third-party integrations
- Clear separation of concerns (content vs code vs data)
- All 52 FRs and 34 NFRs have explicit architectural support
- Stitch designs provide visual reference for every page

**Areas for Future Enhancement:**
- Sanity.io CMS integration (Phase 2) — architecture supports migration via `lib/blog.ts` abstraction
- Additional languages — add new JSON files to `messages/`, no architecture changes needed
- Comparison pages (Phase 2) — follow same page template pattern

### Implementation Handoff

**AI Agent Guidelines:**
- Follow all architectural decisions exactly as documented
- Use implementation patterns consistently across all components
- Respect project structure and boundaries
- Refer to this document for all architectural questions

**First Implementation Priority:**
1. `npx shadcn@latest init` — initialize component infrastructure
2. Install dependencies: `next-themes`, `next-intl`, `gray-matter`, `remark`, `remark-html`, `@formspree/react`
3. Configure brand tokens in Tailwind config
4. Set up i18n routing structure
