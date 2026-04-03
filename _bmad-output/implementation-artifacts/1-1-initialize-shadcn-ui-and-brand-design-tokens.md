# Story 1.1: Initialize shadcn/ui and Brand Design Tokens

Status: review

## Story

As a developer,
I want the project initialized with shadcn/ui and Cheqify brand tokens configured,
so that all components use consistent brand colors and styling.

## Acceptance Criteria

1. **Given** the existing Next.js project, **When** shadcn/ui is initialized, **Then** CSS variables are defined for light mode (primary teal #00b4a6, background white #ffffff, foreground navy #0d2137, card #f8fafb) **And** CSS variables are defined for dark mode (primary teal #00b4a6, background navy #0d2137, foreground off-white #f1f5f9, card #132d46)

2. **Given** shadcn/ui is initialized, **When** the project builds, **Then** Inter font is self-hosted with `font-display: swap` **And** Geist fonts from create-next-app default are removed

3. **Given** the project dependencies, **When** packages are installed, **Then** Lucide Icons (`lucide-react`) is available for use in components

4. **Given** shadcn/ui setup is complete, **When** a developer imports from `~/lib/utils`, **Then** the `cn()` utility function is available for conditional Tailwind class merging

5. **Given** the component library is initialized, **When** a developer needs UI primitives, **Then** these shadcn/ui components are installed and available: Button, Card, Tabs, NavigationMenu, Sheet, DropdownMenu, Badge, Input

6. **Given** all setup is complete, **When** `npm run build` is executed, **Then** the project builds successfully with zero errors **And** `npm run lint` passes with zero errors

## Tasks / Subtasks

- [x] Task 1: Initialize shadcn/ui in the project (AC: #4, #5)
  - [x] 1.1: Run `npx shadcn@latest init` — initialized with base-nova style, neutral base color, CSS variables enabled, `~/` path alias
  - [x] 1.2: Verify `components.json` is created at project root with correct configuration
  - [x] 1.3: Verify `src/lib/utils.ts` is created with `cn()` utility function
  - [x] 1.4: Add required shadcn/ui components: `npx shadcn@latest add button card tabs navigation-menu sheet dropdown-menu badge input`
  - [x] 1.5: Verify all 8 components exist in `src/components/ui/`

- [x] Task 2: Configure Cheqify brand design tokens (AC: #1)
  - [x] 2.1: Updated `src/app/globals.css` with Cheqify light mode tokens (teal primary, navy foreground, white background)
  - [x] 2.2: Added dark mode CSS variables in `.dark` class (navy background, off-white foreground, teal primary)
  - [x] 2.3: Added semantic color tokens: success, warning, error, info
  - [x] 2.4: Removed `@media (prefers-color-scheme: dark)` block — replaced with `.dark` class approach for next-themes

- [x] Task 3: Replace Geist fonts with Inter (AC: #2)
  - [x] 3.1: Downloaded Inter variable font (woff2) to `public/fonts/inter/inter-latin.woff2`
  - [x] 3.2: Added `@font-face` declaration for Inter variable font (weight 100-900) with `font-display: swap`
  - [x] 3.3: Updated `src/app/layout.tsx` — removed Geist/Geist_Mono imports and font variables
  - [x] 3.4: Updated CSS `--font-sans` to use `Inter, system-ui, -apple-system, sans-serif`
  - [x] 3.5: Body font-family set via `@apply font-sans` in base layer

- [x] Task 4: Install Lucide Icons (AC: #3)
  - [x] 4.1: lucide-react already installed as shadcn/ui dependency
  - [x] 4.2: Verified via `npm install lucide-react` (reported "up to date")

- [x] Task 5: Clean up default create-next-app files (AC: #6)
  - [x] 5.1: Replaced `src/app/page.tsx` with minimal placeholder using brand tokens
  - [x] 5.2: Removed default Next.js assets (next.svg, vercel.svg, file.svg, globe.svg, window.svg)
  - [x] 5.3: Updated layout.tsx metadata: title "Cheqify.app", description "Print Error-Free Cheques in Under 2 Minutes"
  - [x] 5.4: Created directory structure: components/layout/, components/sections/, data/, i18n/, public/images/, public/fonts/
  - [x] 5.5: `npm run build` — zero errors, compiled in 22.2s, static pages generated
  - [x] 5.6: `npm run lint` — zero errors

## Dev Notes

### Architecture Requirements

- **Rendering:** Next.js SSG with App Router — this story sets up the foundation; no i18n routing yet (that's Story 1.3)
- **Styling:** Tailwind CSS v4 + shadcn/ui — shadcn/ui uses Radix UI primitives underneath
- **Path alias:** `~/*` maps to `./src/*` (already configured in tsconfig.json)
- **Font strategy:** Self-host Inter (don't use Google Fonts CDN) for performance — download woff2 files

### Brand Token Reference (from UX Design Spec)

**Light Mode:**
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#00b4a6` (Teal) | CTAs, links, active states |
| Primary Hover | `#009e92` | Button hover |
| Background | `#ffffff` | Page background |
| Surface/Card | `#f8fafb` | Cards, sections |
| Foreground | `#0d2137` | Primary text |
| Muted | `#6b7280` | Secondary text |
| Border | `#e5e7eb` | Dividers, card borders |
| Accent | `#e0f7f5` | Badges, highlights |

**Dark Mode:**
| Token | Value | Usage |
|-------|-------|-------|
| Primary | `#00b4a6` (Teal) | Same as light |
| Primary Hover | `#00c8b8` | Button hover |
| Background | `#0d2137` | Page background |
| Surface/Card | `#132d46` | Cards, sections |
| Foreground | `#f1f5f9` | Primary text |
| Muted | `#9ca3af` | Secondary text |
| Border | `#1e3a5f` | Dividers, card borders |
| Accent | `#0a3d38` | Badges, highlights |

### Key Technical Notes

- **Tailwind CSS v4:** Uses `@import "tailwindcss"` syntax (already in globals.css), NOT the v3 `@tailwind base/components/utilities` syntax
- **shadcn/ui with Tailwind v4:** Make sure `components.json` is compatible with Tailwind v4. shadcn/ui latest supports it.
- **CSS Variables:** shadcn/ui uses HSL format for CSS variables by default. When configuring brand tokens, convert hex to HSL or use the `cssVariables: true` option during init
- **Existing globals.css:** Currently has `@import "tailwindcss"` and `@theme inline` block — preserve the `@import` and `@theme` pattern, update the variables within
- **Existing layout.tsx:** Currently uses Geist fonts — must be completely replaced with Inter font setup
- **No `"use client"` needed** in this story — all setup is server-side compatible

### Existing File State

- `src/app/layout.tsx` — Default create-next-app with Geist fonts → will be modified
- `src/app/globals.css` — Default Tailwind v4 setup with basic variables → will be modified
- `src/app/page.tsx` — Default landing page → will be replaced
- `next.config.ts` — Empty config → no changes needed for this story
- `tsconfig.json` — Has `~/*` path alias already configured ✅
- `package.json` — Has Next.js 16.2.1, React 19.2.4, Tailwind v4, TypeScript v5 ✅

### Project Structure Notes

After this story, the directory structure should look like:
```
src/
├── app/
│   ├── globals.css      (modified — Cheqify brand tokens)
│   ├── layout.tsx        (modified — Inter font, clean metadata)
│   └── page.tsx          (replaced — minimal placeholder)
├── components/
│   ├── ui/               (NEW — shadcn/ui components: button, card, tabs, etc.)
│   ├── layout/           (NEW — empty, for future header/footer)
│   └── sections/         (NEW — empty, for future page sections)
├── lib/
│   └── utils.ts          (NEW — cn() utility from shadcn/ui)
├── data/                 (NEW — empty, for future static data)
└── i18n/                 (NEW — empty, for future i18n config)
public/
├── fonts/
│   └── inter/            (NEW — Inter woff2 font files)
└── images/               (NEW — empty, for future assets)
```

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Starter Template Evaluation]
- [Source: _bmad-output/planning-artifacts/architecture.md#Core Architectural Decisions > Frontend Architecture > Theming]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Visual Design Foundation > Color System]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Visual Design Foundation > Typography System]
- [Source: _bmad-output/planning-artifacts/prd.md#Web App Technical Requirements > Implementation Stack]
- [Source: _bmad-output/project-context.md#Theming Rules]
- [Source: _bmad-output/project-context.md#Styling Rules]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (1M context)

### Debug Log References

- shadcn/ui init used "base-nova" style (latest default) instead of "new-york" — functionally equivalent
- Inter variable font (352KB) downloaded from rsms.me instead of individual weight files — single file supports all weights 100-900
- lucide-react was already included as a shadcn/ui dependency — no separate install needed

### Completion Notes List

- ✅ shadcn/ui initialized with 8 components (button, card, tabs, navigation-menu, sheet, dropdown-menu, badge, input)
- ✅ Cheqify brand tokens configured for both light and dark modes using hex values
- ✅ Inter variable font self-hosted with font-display: swap
- ✅ Geist fonts completely removed from layout.tsx
- ✅ Default create-next-app files cleaned up, placeholder page created
- ✅ Directory structure created for future components, data, i18n
- ✅ Build: zero errors (compiled in 22.2s, TypeScript in 18.4s)
- ✅ Lint: zero errors

### Change Log

- 2026-04-03: Story 1.1 implementation complete — foundation setup with shadcn/ui, brand tokens, Inter font

### File List

- `components.json` (NEW — shadcn/ui configuration)
- `src/lib/utils.ts` (NEW — cn() utility)
- `src/components/ui/button.tsx` (NEW — shadcn/ui)
- `src/components/ui/card.tsx` (NEW — shadcn/ui)
- `src/components/ui/tabs.tsx` (NEW — shadcn/ui)
- `src/components/ui/navigation-menu.tsx` (NEW — shadcn/ui)
- `src/components/ui/sheet.tsx` (NEW — shadcn/ui)
- `src/components/ui/dropdown-menu.tsx` (NEW — shadcn/ui)
- `src/components/ui/badge.tsx` (NEW — shadcn/ui)
- `src/components/ui/input.tsx` (NEW — shadcn/ui)
- `src/app/globals.css` (MODIFIED — Cheqify brand tokens, Inter font, dark mode)
- `src/app/layout.tsx` (MODIFIED — removed Geist fonts, updated metadata)
- `src/app/page.tsx` (REPLACED — minimal Cheqify placeholder)
- `public/fonts/inter/inter-latin.woff2` (NEW — Inter variable font)
- `public/next.svg` (DELETED)
- `public/vercel.svg` (DELETED)
- `public/file.svg` (DELETED)
- `public/globe.svg` (DELETED)
- `public/window.svg` (DELETED)
- `src/components/layout/` (NEW — empty directory)
- `src/components/sections/` (NEW — empty directory)
- `src/data/` (NEW — empty directory)
- `src/i18n/` (NEW — empty directory)
- `public/images/` (NEW — empty directory)
