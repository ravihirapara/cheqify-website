# Story 9.1: Cookie Consent Banner

Status: done

## Story

As a visitor,
I want to accept or decline tracking cookies,
so that I control what data is collected about me.

## Acceptance Criteria

1. First visit: cookie consent banner appears at bottom of screen
2. Banner explains what cookies are used for
3. "Accept" and "Decline" buttons clearly visible
4. After accepting: GA4 and Tawk.to scripts load
5. After declining: no tracking scripts load
6. Preference saved in localStorage
7. Subsequent visits: banner does not reappear

## Dev Notes

- Content from PRD: FR39, FR40, FR41
- Custom component + localStorage (from architecture doc)
- Gates GA4 and Tawk.to loading
- Non-intrusive bottom banner

## Dev Agent Record
### Agent Model Used
### Completion Notes List
### File List
