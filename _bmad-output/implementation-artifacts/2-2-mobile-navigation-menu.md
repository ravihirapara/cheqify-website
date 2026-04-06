# Story 2.2: Mobile Navigation Menu

Status: done

<!-- Note: Validation is optional. Run validate-create-story for quality check before dev-story. -->

## Story

As a mobile visitor,
I want a hamburger menu for navigation,
so that I can access all pages on smaller screens.

## Acceptance Criteria

1. **Given** the visitor is on a mobile device (< 1024px), **When** they view the header, **Then** a hamburger icon button is visible instead of the desktop nav links

2. **Given** the visitor taps the hamburger icon, **When** the menu opens, **Then** a Sheet (slide-out menu) opens with all navigation links: Home, Features, Pricing, Blog, Contact, About

3. **Given** the mobile menu is open, **When** the visitor views the menu, **Then** "Start Free" and "Login" buttons are visible in the mobile menu

4. **Given** the mobile menu is open, **When** the visitor views the menu, **Then** language switcher and theme toggle are accessible in the mobile menu

5. **Given** the mobile menu is open, **When** the visitor taps a navigation link, **Then** the menu closes and navigates to the selected page

6. **Given** the mobile menu is open, **When** the visitor taps outside the menu (on the overlay), **Then** the menu closes

## Tasks / Subtasks

- [x] Task 1: Add mobile menu translation keys (AC: #1)
  - [x] 1.1: Add `common.header.openMenu` and `common.header.closeMenu` keys to all 3 locale files for aria-labels

- [x] Task 2: Create MobileNav component (AC: #1, #2, #3, #4, #5, #6)
  - [x] 2.1: Create `src/components/layout/mobile-nav.tsx` as a `"use client"` component
  - [x] 2.2: Use shadcn/ui `Sheet` component (side="right") for the slide-out menu
  - [x] 2.3: Trigger button: `Menu` icon from Lucide, visible only below `lg:` breakpoint, 44x44px touch target
  - [x] 2.4: Sheet content: render all 6 nav links using `Link` from `~/i18n/navigation` with active state highlighting
  - [x] 2.5: Include "Start Free" (primary) and "Login" (ghost) buttons in the sheet, full-width
  - [x] 2.6: Include LanguageSwitcher and ThemeToggle in the sheet
  - [x] 2.7: On link click, close the sheet by setting open state to false
  - [x] 2.8: Sheet overlay click closes the menu (built-in Sheet behavior)

- [x] Task 3: Integrate MobileNav into Header (AC: #1)
  - [x] 3.1: Import and render `<MobileNav />` in the header component, visible only below `lg:` breakpoint
  - [x] 3.2: Position the hamburger button in the header's right section, before other controls on mobile

- [x] Task 4: Build and lint verification (AC: all)
  - [x] 4.1: Run `npm run build` and verify zero errors
  - [x] 4.2: Run `npm run lint` and verify zero errors

## Dev Notes

### Architecture Requirements

- **Component location:** `src/components/layout/mobile-nav.tsx` (per architecture doc: `components/layout/mobile-nav.tsx`)
- **Sheet component:** Already available from shadcn/ui — `~/components/ui/sheet`
- **Breakpoint:** `lg:` (1024px) — mobile nav visible below this, desktop nav visible above
- **Touch targets:** 44x44px minimum for all interactive elements (NFR20)

### Project Structure Notes

- **Sheet uses `@base-ui/react/dialog`** — NOT Radix. SheetContent accepts `side` prop. SheetOverlay provides backdrop click-to-close.
- **Sheet state:** Use React `useState` for `open` prop — set to `false` on nav link click to close menu
- **SheetContent has built-in close button** via `showCloseButton` prop (default true)
- **All text via translations** — `useTranslations("common")`
- **Internal links:** `Link` from `~/i18n/navigation`. External links: plain `<a>` tags.

### Previous Story Intelligence

**From Story 2.1:**
- Header component at `src/components/layout/header.tsx` — already has desktop nav hidden below `lg:`
- `NAV_ITEMS` array defined with key/href pairs — can be exported and reused
- Right section has `LanguageSwitcher` and `ThemeToggle` — on mobile, these should also appear in the Sheet
- "Start Free" button already visible from `sm:` breakpoint in header — will also be in mobile Sheet for redundancy/completeness
- "Login" button hidden below `lg:` — must be available in mobile Sheet
- External links use `<a>` tags with `target="_blank" rel="noopener noreferrer"`

**From Story 1.3 debug log:**
- Base UI Sheet (`Dialog`) — SheetTrigger doesn't support `asChild`, render Button as child
- SheetClose render prop pattern: `<SheetPrimitive.Close render={<Button ... />}>`

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Epic 2 > Story 2.2]
- [Source: _bmad-output/planning-artifacts/architecture.md#Frontend Architecture > Component Architecture]
- [Source: _bmad-output/project-context.md#Accessibility Rules, Styling Rules]
- [Source: _bmad-output/planning-artifacts/prd.md#FR1, FR2, FR3]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (1M context)

### Debug Log References

- Sheet trigger: Used `Button` with `onClick` to set open state rather than `SheetTrigger` — simpler pattern since Sheet trigger doesn't support asChild in Base UI version
- Exported `NAV_ITEMS` from header.tsx to share between Header and MobileNav — avoids duplication
- Hamburger button uses `lg:hidden` class directly on Button — Sheet component itself is always rendered but trigger controls visibility
- Added `navigation` key to translations for aria-label on mobile nav

### Completion Notes List

- ✅ Translation keys: Added `common.header.openMenu`, `common.header.closeMenu`, `common.header.navigation` to all 3 locales
- ✅ MobileNav component: Sheet slide-out from right, all 6 nav links with active state, Start Free + Login CTAs, LanguageSwitcher + ThemeToggle
- ✅ Nav links close sheet on click via `onClick={() => setOpen(false)}`
- ✅ Overlay click closes menu (built-in Sheet behavior)
- ✅ Hamburger button: Menu icon, 44x44px touch target, visible below lg: only
- ✅ Integrated into Header component in right section
- ✅ NAV_ITEMS exported from header for shared use
- ✅ Build: zero errors | Lint: zero errors

### Change Log

- 2026-04-06: Story 2.2 implementation — Mobile navigation with Sheet slide-out menu

### File List

- `src/components/layout/mobile-nav.tsx` (NEW — mobile Sheet navigation with nav links, CTAs, language/theme controls)
- `src/components/layout/header.tsx` (MODIFIED — exported NAV_ITEMS, imported and rendered MobileNav)
- `messages/en.json` (MODIFIED — added common.header.openMenu, closeMenu, navigation keys)
- `messages/hi.json` (MODIFIED — added common.header.openMenu, closeMenu, navigation keys)
- `messages/gu.json` (MODIFIED — added common.header.openMenu, closeMenu, navigation keys)
