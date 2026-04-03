# Story 1.1: Initialize shadcn/ui and Brand Design Tokens

Status: ready-for-dev

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

- [ ] Task 1: Initialize shadcn/ui in the project (AC: #4, #5)
  - [ ] 1.1: Run `npx shadcn@latest init` — select New York style, slate base color, CSS variables enabled, `~/` path alias
  - [ ] 1.2: Verify `components.json` is created at project root with correct configuration
  - [ ] 1.3: Verify `src/lib/utils.ts` is created with `cn()` utility function
  - [ ] 1.4: Add required shadcn/ui components: `npx shadcn@latest add button card tabs navigation-menu sheet dropdown-menu badge input`
  - [ ] 1.5: Verify all 8 components exist in `src/components/ui/`

- [ ] Task 2: Configure Cheqify brand design tokens (AC: #1)
  - [ ] 2.1: Update `src/app/globals.css` — replace default CSS variables with Cheqify light mode tokens: `--background: #ffffff`, `--foreground: #0d2137`, `--primary: #00b4a6`, `--primary-foreground: #ffffff`, `--card: #f8fafb`, `--card-foreground: #0d2137`, `--muted: #6b7280`, `--muted-foreground: #6b7280`, `--accent: #e0f7f5`, `--accent-foreground: #0d2137`, `--border: #e5e7eb`
  - [ ] 2.2: Add dark mode CSS variables in `.dark` class: `--background: #0d2137`, `--foreground: #f1f5f9`, `--primary: #00b4a6`, `--primary-foreground: #ffffff`, `--card: #132d46`, `--card-foreground: #f1f5f9`, `--muted: #9ca3af`, `--muted-foreground: #9ca3af`, `--accent: #0a3d38`, `--accent-foreground: #f1f5f9`, `--border: #1e3a5f`
  - [ ] 2.3: Add semantic color tokens: `--success: #22c55e`, `--warning: #f59e0b`, `--error: #ef4444`, `--info: #3b82f6`
  - [ ] 2.4: Remove the `@media (prefers-color-scheme: dark)` block (next-themes will handle dark mode via `.dark` class instead)

- [ ] Task 3: Replace Geist fonts with Inter (AC: #2)
  - [ ] 3.1: Download Inter font files (woff2) and place in `public/fonts/inter/` directory
  - [ ] 3.2: Add `@font-face` declarations in `globals.css` for Inter Regular (400), Medium (500), Semibold (600), Bold (700) with `font-display: swap`
  - [ ] 3.3: Update `src/app/layout.tsx` — remove Geist/Geist_Mono imports, remove font variables from `<html>` className
  - [ ] 3.4: Update CSS `--font-sans` to use `Inter, system-ui, sans-serif`
  - [ ] 3.5: Set body font-family to use the CSS variable `var(--font-sans)`

- [ ] Task 4: Install Lucide Icons (AC: #3)
  - [ ] 4.1: Run `npm install lucide-react`
  - [ ] 4.2: Verify import works: add a temporary test import in layout.tsx or page.tsx and remove after verification

- [ ] Task 5: Clean up default create-next-app files (AC: #6)
  - [ ] 5.1: Replace `src/app/page.tsx` with a minimal placeholder page that displays "Cheqify.app — Coming Soon" using the new brand tokens (bg-background, text-foreground, text-primary for accent)
  - [ ] 5.2: Remove default Next.js assets: `public/next.svg`, `public/vercel.svg`, `public/file.svg`, `public/globe.svg`, `public/window.svg`
  - [ ] 5.3: Update `src/app/layout.tsx` metadata to `title: "Cheqify.app"`, `description: "Print Error-Free Cheques in Under 2 Minutes"`
  - [ ] 5.4: Create directory structure: `src/components/ui/` (already from shadcn), `src/components/layout/`, `src/components/sections/`, `src/lib/`, `src/data/`, `src/i18n/`, `public/images/`, `public/fonts/`
  - [ ] 5.5: Run `npm run build` and verify zero errors
  - [ ] 5.6: Run `npm run lint` and verify zero errors

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

### Completion Notes List

### File List
