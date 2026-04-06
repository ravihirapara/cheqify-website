# Story 7.2: Tawk.to Live Chat Integration

Status: in-progress

## Story

As a visitor,
I want to start a live chat,
so that I can get real-time help while browsing.

## Acceptance Criteria

1. **Given** the visitor has accepted cookie consent, **When** Tawk.to loads, **Then** a chat icon appears in the bottom-right corner
2. **Given** the chat icon is visible, **When** clicked, **Then** chat window opens
3. **Given** the Tawk.to widget, **When** loading, **Then** it loads asynchronously without blocking page render
4. **Given** the widget, **When** loaded, **Then** it does not cause layout shift (CLS < 0.1)
5. **Given** cookie consent is NOT given, **When** the page loads, **Then** Tawk.to does not load

## Dev Notes

- Content from PRD: FR42, FR43
- Tawk.to loads ONLY after cookie consent (Epic 9 will implement consent banner)
- For now: create the TawkTo component that accepts a `consentGiven` prop
- Load script asynchronously via dynamic script injection
- Env variable: NEXT_PUBLIC_TAWKTO_PROPERTY_ID
- No layout shift — widget is position:fixed by Tawk.to itself

## Dev Agent Record
### Agent Model Used
### Completion Notes List
### File List
