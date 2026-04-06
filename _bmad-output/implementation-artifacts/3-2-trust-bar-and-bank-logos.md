# Story 3.2: Trust Bar and Bank Logos

Status: done

## Story

As a visitor,
I want to see trust signals and supported bank logos,
so that I feel confident Cheqify is reliable and works with my bank.

## Acceptance Criteria

1. **Given** the visitor scrolls past the hero section, **When** the trust bar is visible, **Then** it displays: Bank-Grade Security, 300+ Indian Banks, Works on Any Device, Free Forever

2. **Given** the trust bar is rendered, **When** the visitor views each item, **Then** each trust signal has an icon and label text

3. **Given** the visitor scrolls below the trust bar, **When** the bank logos section is visible, **Then** bank logos are displayed: SBI, HDFC, ICICI, Axis, PNB, Kotak, BOB, Yes Bank, IndusInd + "300+ more"

4. **Given** the bank logos section is rendered, **When** the visitor views it, **Then** logos are displayed in a clean horizontal strip

5. **Given** the visitor is on any locale, **When** the sections render, **Then** all text comes from translation files

## Tasks / Subtasks

- [x] Task 1: Add trust bar and bank logos translation keys (AC: #5)
  - [x] 1.1: Add `home.trustBar.bankSecurity`, `home.trustBar.indianBanks`, `home.trustBar.anyDevice`, `home.trustBar.freeForever` keys to all 3 locales
  - [x] 1.2: Add `home.bankLogos.heading` and `home.bankLogos.moreBanks` keys to all 3 locales

- [x] Task 2: Create TrustBar component (AC: #1, #2, #5)
  - [x] 2.1: Create `src/components/sections/trust-bar.tsx` as client component
  - [x] 2.2: Section with `bg-card` background and border-y for visual separation
  - [x] 2.3: 4 trust items in a responsive grid (2x2 on mobile, 4 columns on desktop)
  - [x] 2.4: Each item: Lucide icon + text label from translations
  - [x] 2.5: Icons: Shield (security), Building2 (banks), Smartphone (any device), Sparkles (free forever)

- [x] Task 3: Create BankLogos component (AC: #3, #4, #5)
  - [x] 3.1: Create `src/components/sections/bank-logos.tsx` as client component
  - [x] 3.2: Display bank names as styled text badges (placeholder until real logos available)
  - [x] 3.3: Horizontal wrap layout with flex-wrap, centered
  - [x] 3.4: Include "300+ more" badge with primary color accent

- [x] Task 4: Integrate into homepage (AC: all)
  - [x] 4.1: Add TrustBar and BankLogos below Hero in `src/app/[locale]/page.tsx`

- [x] Task 5: Build and lint verification (AC: all)
  - [x] 5.1: Run `npm run build` and verify zero errors
  - [x] 5.2: Run `npm run lint` and verify zero errors

## Dev Notes

### Architecture Requirements

- **Component locations:** `src/components/sections/trust-bar.tsx` and `src/components/sections/bank-logos.tsx`
- **Trust signals:** Bank-Grade Security, 300+ Indian Banks, Works on Any Device, Free Forever (UX spec: Trust Bar below hero)
- **Bank logos:** SBI, HDFC, ICICI, Axis, PNB, Kotak, BOB, Yes Bank, IndusInd + "300+ more" (UX spec)
- **Bank logos as text badges for now** — real SVG logos can be added later in `public/images/banks/`

### Previous Story Intelligence

- Hero section pattern established: section spacing `py-16 md:py-24`, container `max-w-7xl`
- Trust bar should use `bg-card` for visual separation
- Bank logos strip is a clean horizontal layout, not a grid

### References

- [Source: _bmad-output/planning-artifacts/epics.md#Epic 3 > Story 3.2]
- [Source: _bmad-output/planning-artifacts/ux-design-specification.md#Trust Bar, Bank Logos Strip]
- [Source: _bmad-output/planning-artifacts/prd.md#FR10, FR11]

## Dev Agent Record

### Agent Model Used

Claude Opus 4.6 (1M context)

### Debug Log References

- Bank names are not translated — they are proper nouns (SBI, HDFC, etc.) and remain the same across all languages
- Used text badges instead of image logos as placeholder — real SVG logos can be added in public/images/banks/ later
- "300+ more" badge uses primary color styling to stand out from bank name badges

### Completion Notes List

- ✅ Translation keys added: trustBar (4 items) + bankLogos (heading, moreBanks) in all 3 locales
- ✅ TrustBar: bg-card section, 2x2 → 4-col grid, Lucide icons + translated labels
- ✅ BankLogos: 9 bank name badges + "300+ more" primary accent badge, flex-wrap centered
- ✅ Homepage: Hero → TrustBar → BankLogos section order
- ✅ Build: zero errors | Lint: zero errors

### Change Log

- 2026-04-06: Story 3.2 implementation — Trust bar with 4 signals and bank logos strip

### File List

- `src/components/sections/trust-bar.tsx` (NEW — trust signals grid with icons)
- `src/components/sections/bank-logos.tsx` (NEW — bank name badges in horizontal strip)
- `src/app/[locale]/page.tsx` (MODIFIED — added TrustBar and BankLogos sections)
- `messages/en.json` (MODIFIED — added trustBar and bankLogos keys)
- `messages/hi.json` (MODIFIED — added trustBar and bankLogos keys)
- `messages/gu.json` (MODIFIED — added trustBar and bankLogos keys)
