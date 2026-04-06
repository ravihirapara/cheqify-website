# Story 8.2: Privacy Policy Page

Status: review

## Story

As a visitor,
I want to read the privacy policy,
so that I understand how my data is handled.

## Acceptance Criteria

1. **Given** the visitor navigates to /privacy, **When** the page loads, **Then** the privacy policy is displayed with numbered sections
2. **Given** the privacy page is rendered, **When** the visitor reads it, **Then** it covers: Information Collection, How We Use Data, Data Security, Your Privacy Rights
3. **Given** the privacy page is rendered, **When** the visitor reads data collection, **Then** it discloses data collected via: contact form (Formspree), analytics (GA4), live chat (Tawk.to), cookies
4. **Given** the privacy page is rendered, **When** the visitor looks for contact info, **Then** privacy inquiry contact information is provided
5. **Given** the privacy page is rendered, **When** the visitor checks the date, **Then** a last updated date is displayed
6. **Given** the visitor is on any locale, **When** the page renders, **Then** all text comes from translation files (en, hi, gu)
7. **Given** the page is rendered, **When** search engines crawl it, **Then** generateMetadata provides proper title, description, and hreflang tags

## Tasks / Subtasks

- [x] Task 1: Add `privacy` translation keys to all 3 locale files (AC: #1-6)
  - [x] 1.1: Add `privacy.meta.title` and `privacy.meta.description` for SEO
  - [x] 1.2: Add `privacy.hero.*` keys (title, description, lastUpdated)
  - [x] 1.3: Add `privacy.sections.*` keys for all 5 sections (introduction, collection, usage, security, rights)
  - [x] 1.4: Add `privacy.contact.*` keys (heading, email, description)
  - [x] 1.5: Add Hindi translations in hi.json
  - [x] 1.6: Add Gujarati translations in gu.json
- [x] Task 2: Create `PrivacyHero` component (AC: #1, #5)
  - [x] 2.1: Page title and description
  - [x] 2.2: Last updated date display
- [x] Task 3: Create `PrivacyContent` component (AC: #1-4)
  - [x] 3.1: Section 1 — Introduction
  - [x] 3.2: Section 2 — Information Collection (2-col bento: Directly Provided vs Automated Logs)
  - [x] 3.3: Section 3 — How We Use Data (bulleted list with icons)
  - [x] 3.4: Section 4 — Data Security (prominent dark section per Stitch)
  - [x] 3.5: Section 5 — Your Privacy Rights (2x2 grid)
  - [x] 3.6: Contact section with privacy email and address
- [x] Task 4: Create privacy page at `src/app/[locale]/privacy/page.tsx` (AC: #7)
  - [x] 4.1: `generateMetadata` with title, description
  - [x] 4.2: Compose: PrivacyHero → PrivacyContent
- [x] Task 5: Build and lint verification

## Dev Notes

### Stitch Design Reference
- Hero: badge "Compliance & Legal", H1 title, last updated date + description
- Section headers: icon in rounded box + numbered heading
- Information Collection: 2-col bento grid with hover effects
- Data Security: dark bg section with gradient blur decoration
- Privacy Rights: 2x2 grid of rights with icons
- Contact: centered with email pill + address pill

### References
- [Source: _bmad-output/designs/stitch/privacy_policy/code.html]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 8 > Story 8.2]
- [Source: _bmad-output/planning-artifacts/prd.md — FR36, FR37, FR38]

## Dev Agent Record

### Agent Model Used
Claude Opus 4.6 (1M context)

### Completion Notes List
- All 5 tasks completed: translations (en/hi/gu), hero, content with 5 sections + contact, page composition
- Fixed remaining cookie-consent.tsx build error (removed leftover setConsent calls)
- Lucide icons used throughout (Gavel, Database, Eye, Shield, etc.) replacing Stitch Material Symbols
- Data collection section accurately discloses Formspree, GA4, Tawk.to with consent gating
- Privacy email uses contact.cheqify@gmail.com (consistent with contact page)

### File List
- src/app/[locale]/privacy/page.tsx (new)
- src/components/sections/privacy-hero.tsx (new)
- src/components/sections/privacy-content.tsx (new)
- messages/en.json (modified — added privacy.* namespace)
- messages/hi.json (modified — added privacy.* namespace)
- messages/gu.json (modified — added privacy.* namespace)
- src/components/layout/cookie-consent.tsx (modified — removed leftover setConsent calls)
