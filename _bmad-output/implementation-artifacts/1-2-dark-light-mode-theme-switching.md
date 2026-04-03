# Story 1.2: Dark/Light Mode Theme Switching

Status: review

## Story

As a visitor,
I want to toggle between dark and light mode,
so that I can view the website in my preferred visual style.

## Acceptance Criteria

1. **Given** the visitor is on any page, **When** they click the theme toggle, **Then** the entire site switches between light and dark mode instantly **And** all brand tokens (background, foreground, card, primary, muted, border, accent) change to the corresponding mode values

2. **Given** the visitor toggles to dark mode, **When** they close and reopen the browser, **Then** the dark mode preference is persisted and applied on load

3. **Given** the visitor has not set a preference, **When** they visit for the first time, **Then** the system detects `prefers-color-scheme` from their OS and applies the matching theme

4. **Given** the theme is switching, **When** the page loads or theme changes, **Then** no flash of wrong theme (FOUC) occurs — the correct theme is applied before the page renders visibly

## Tasks / Subtasks

- [x] Task 1: Install and configure next-themes (AC: #1, #2, #3, #4)
  - [x] 1.1: Installed next-themes via npm
  - [x] 1.2: Created `src/components/layout/theme-provider.tsx` with attribute="class", defaultTheme="system", enableSystem, disableTransitionOnChange
  - [x] 1.3: Updated `src/app/layout.tsx` — wrapped children with ThemeProvider
  - [x] 1.4: Added `suppressHydrationWarning` to `<html>` tag

- [x] Task 2: Create theme toggle component (AC: #1)
  - [x] 2.1: Created `src/components/layout/theme-toggle.tsx` as client component
  - [x] 2.2: Uses shadcn/ui Button variant="ghost" size="icon"
  - [x] 2.3: Shows Sun icon in dark mode, Moon icon in light mode (via resolvedTheme)
  - [x] 2.4: Toggles between light/dark via setTheme()
  - [x] 2.5: Has aria-label="Toggle theme"
  - [x] 2.6: Touch target h-11 w-11 (44x44px)

- [x] Task 3: Add theme toggle to placeholder page for verification (AC: #1, #2, #3)
  - [x] 3.1: Updated page.tsx with ThemeToggle component
  - [x] 3.2: Light mode uses bg-background (white), text-foreground (navy), text-primary (teal)
  - [x] 3.3: Dark mode uses .dark CSS variables (navy bg, off-white text, teal accent)
  - [x] 3.4: System preference detection via defaultTheme="system" + enableSystem
  - [x] 3.5: Persistence via next-themes localStorage

- [x] Task 4: Prevent flash of unstyled content (AC: #4)
  - [x] 4.1: next-themes ThemeProvider injects script in head automatically
  - [x] 4.2: disableTransitionOnChange prevents CSS transition artifacts
  - [x] 4.3: Confirmed disableTransitionOnChange is set in theme-provider.tsx

- [x] Task 5: Build and lint verification (AC: all)
  - [x] 5.1: `npm run build` — zero errors, compiled in 4.6s
  - [x] 5.2: `npm run lint` — zero errors (fixed React 19 lint issue with useSyncExternalStore pattern)

## Dev Notes

### Architecture Requirements

- **next-themes** is the chosen library (from architecture doc) — handles ThemeProvider, `useTheme` hook, localStorage persistence, system detection, and FOUC prevention
- **Attribute mode:** Use `attribute="class"` — this adds/removes `.dark` class on `<html>`, which matches our `@custom-variant dark (&:is(.dark *))` in globals.css and the `.dark { }` CSS variable block
- **Default theme:** `"system"` — detects `prefers-color-scheme` on first visit
- **No `"use client"` on layout.tsx** — ThemeProvider is wrapped in its own client component (`theme-provider.tsx`), keeping the root layout as a server component

### Previous Story Intelligence (Story 1.1)

- shadcn/ui is initialized with `@custom-variant dark (&:is(.dark *))` in globals.css — this means Tailwind's `dark:` variant works via `.dark` class on ancestor
- Brand tokens already configured in both `:root` (light) and `.dark` (dark) blocks in globals.css
- Body already has `@apply bg-background text-foreground` — will automatically switch colors when `.dark` class toggles
- Layout.tsx is clean — just `<html>` and `<body>` with minimal classes
- All 8 shadcn/ui components are installed and use CSS variables — they'll auto-switch with theme

### Key Technical Notes

- **ThemeProvider must be a client component** — create a separate `theme-provider.tsx` file with `"use client"` directive, don't add `"use client"` to layout.tsx
- **suppressHydrationWarning** on `<html>` is required because next-themes modifies the `class` attribute before React hydrates, causing a mismatch
- **disableTransitionOnChange** prevents a flash/transition artifact when switching themes — instant switch looks cleaner
- **Icon swap pattern:** Use conditional rendering based on `resolvedTheme` (not `theme`) to handle "system" correctly: `resolvedTheme === "dark" ? <Sun /> : <Moon />`
- **Mounted check:** next-themes needs a mounted state check to prevent hydration mismatch on icons — use `useState` + `useEffect` to track if component is mounted, render null/skeleton until mounted

### Existing File State (after Story 1.1)

- `src/app/layout.tsx` — Clean root layout, no ThemeProvider yet
- `src/app/globals.css` — Has `:root` (light) and `.dark` (dark) brand tokens, `@custom-variant dark` configured
- `src/app/page.tsx` — Minimal placeholder with brand tokens
- `src/components/layout/` — Empty directory (created in Story 1.1)
- `package.json` — next-themes NOT yet installed

### Project Structure After This Story

```
src/
├── app/
│   ├── globals.css          (no changes)
│   ├── layout.tsx           (MODIFIED — wraps children with ThemeProvider)
│   └── page.tsx             (MODIFIED — adds ThemeToggle for verification)
├── components/
│   ├── layout/
│   │   ├── theme-provider.tsx  (NEW — client ThemeProvider wrapper)
│   │   └── theme-toggle.tsx    (NEW — client theme toggle button)
│   └── ui/                  (no changes)
└── lib/
    └── utils.ts             (no changes)
```

### References

- [Source: _bmad-output/planning-artifacts/architecture.md#Core Architectural Decisions > Frontend Architecture > Theming]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Design System Foundation > Design System Choice]
- [Source: _bmad-output/project-context.md#Theming Rules]
- [Source: _bmad-output/planning-artifacts/prd.md#Functional Requirements > FR5, FR7]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (1M context)

### Debug Log References

- React 19 ESLint rule `react-hooks/set-state-in-effect` flagged `useState`+`useEffect` mounted pattern. Fixed by using `useSyncExternalStore` for SSR-safe mounted detection instead.

### Completion Notes List

- ✅ next-themes installed and configured with ThemeProvider wrapper (keeps layout.tsx as server component)
- ✅ Theme toggle component with Sun/Moon icons, 44px touch target, aria-label
- ✅ Used `useSyncExternalStore` instead of `useState`+`useEffect` for mounted check (React 19 compatible)
- ✅ Used `resolvedTheme` (not `theme`) for correct icon when system theme is active
- ✅ Build: zero errors | Lint: zero errors

### Change Log

- 2026-04-03: Story 1.2 implementation — dark/light mode theme switching with next-themes

### File List

- `src/components/layout/theme-provider.tsx` (NEW — client ThemeProvider wrapper)
- `src/components/layout/theme-toggle.tsx` (NEW — client theme toggle with Sun/Moon icons)
- `src/app/layout.tsx` (MODIFIED — added ThemeProvider wrapper, suppressHydrationWarning)
- `src/app/page.tsx` (MODIFIED — added ThemeToggle component)
