# Story 9.2: Google Analytics 4 Integration

Status: done

## Story

As a product owner,
I want GA4 tracking on the website,
so that I can measure traffic, conversions, and user behavior.

## Acceptance Criteria

1. After cookie consent accepted: GA4 scripts load
2. Page views tracked across all pages and languages
3. GA4 loads asynchronously without blocking page render
4. If consent not given: GA4 does not load
5. GA4 measurement ID from environment variable

## Dev Notes

- Content from PRD: FR40, NFR8, NFR11, NFR28
- GA4 ID via NEXT_PUBLIC_GA4_ID env variable
- Load only after consent — same consent state as Tawk.to

## Dev Agent Record
### Agent Model Used
### Completion Notes List
### File List
