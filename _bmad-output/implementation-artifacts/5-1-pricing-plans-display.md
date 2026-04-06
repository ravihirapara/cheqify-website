# Story 5.1: Pricing Plans Display

Status: done

## Story

As a visitor,
I want to see all pricing plans clearly,
so that I can choose the right plan for my needs.

## Acceptance Criteria

1. **Given** the visitor navigates to /pricing, **When** the page loads, **Then** pricing plans are displayed (Free, Professional, Team) with prices
2. **Given** the pricing page is rendered, **When** the visitor views the cards, **Then** the Free plan is highlighted as "Recommended"
3. **Given** each plan card is rendered, **When** the visitor views it, **Then** included features are listed
4. **Given** each plan card is rendered, **When** the visitor views CTAs, **Then** each plan has a "Start Free" CTA button
5. **Given** the pricing page is rendered, **When** the visitor views below cards, **Then** "No credit card required" messaging is visible
6. **Given** the visitor is on any locale, **When** the page renders, **Then** all text from translation files

## Tasks / Subtasks

- [x] Task 1: Add pricing translation keys to all 3 locale files
- [x] Task 2: Create PricingHero component (centered, no screenshot)
- [x] Task 3: Create PricingCards component (3 cards, Free highlighted)
- [x] Task 4: Create pricing page at src/app/[locale]/pricing/page.tsx with generateMetadata
- [x] Task 5: Build and lint verification

## Dev Notes

### Stitch Design Reference
- Hero: centered badge "PRICING PLANS" + headline with primary highlight + subheading with bold "No credit card required"
- 3 cards in md:grid-cols-3: Free (border-2 border-primary, "Recommended" badge, shadow), Professional, Team
- Free plan features: 3 included + 1 excluded (line-through)
- Each card: plan name, description, price, features list, CTA button, bottom note
- Free CTA: bg-primary. Others: bg-muted hover:bg-primary

### References
- [Source: _bmad-output/designs/stitch/pricing/code.html]
- [Source: _bmad-output/planning-artifacts/epics.md#Epic 5 > Story 5.1]

## Dev Agent Record

### Agent Model Used
### Debug Log References
### Completion Notes List
### File List
