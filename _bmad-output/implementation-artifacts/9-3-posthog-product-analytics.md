# Story 9.3: PostHog Product Analytics

Status: done

## Story

As a product owner,
I want comprehensive product analytics via PostHog,
so that I can understand visitor behavior, replay sessions, and optimize conversion.

## Acceptance Criteria

1. PostHog initializes on every page via `posthog-provider.tsx` in the root locale layout
2. Autocapture records every click, form submission, and input change
3. Session replay is recorded with `maskAllInputs: true`; sensitive elements opt in via `data-ph-mask` attribute
4. Heatmaps (`capture_heatmaps: true`) and rageclick detection (`rageclick: true`) are enabled
5. Client-side exceptions are captured via `capture_exceptions: true`
6. Cross-subdomain cookie (`cross_subdomain_cookie: true`) keeps `distinct_id` consistent across cheqify.app and app.cheqify.app
7. Custom conversion events: `cta_login_clicked`, `cta_signup_clicked`, `language_changed`, `cookie_consent`
8. `NEXT_PUBLIC_POSTHOG_KEY` and `NEXT_PUBLIC_POSTHOG_HOST` configured on Netlify (clear-cache rebuild required after token changes)
9. Website and app.cheqify.app both feed into the same PostHog project ("Cheqify App & Website") for end-to-end funnel analysis

## Dev Notes

- Content from PRD: FR43a–FR43f, NFR8 (updated), NFR11 (updated), NFR28 (updated)
- PostHog project is on US Cloud region — host must be `https://us.i.posthog.com`
- Session recording toggle is project-level; enabling it in PostHog Settings → Session replay turns it on for both the website and the app
- Privacy: inputs and `data-ph-mask` elements are masked in session replays; disclose in Privacy Policy
- The `l`/`1` transcription error in the project token caused a silent 401/404 integration failure — always copy tokens as text, never from screenshots

## Dev Agent Record

### Agent Model Used
claude-opus-4-7[1m] (Claude Code)

### Completion Notes List
- Fixed token typo (`NZl3` → `NZ13`) in `.env.local` and Netlify env var
- Triggered cache-free Netlify rebuild to re-inline the corrected `NEXT_PUBLIC_POSTHOG_KEY` at build time
- Fixed React hydration mismatch #418 in `cookie-consent.tsx` (server/client snapshot divergence in `useSyncExternalStore`) — replaced with `useState + useEffect`
- Added custom event `onClick` handlers to header + mobile nav CTAs, language switcher, and cookie consent buttons
- Added PostHog authorized URLs: `https://cheqify.app` and `https://app.cheqify.app`
- Updated Web Analytics domain from `/en`-scoped URL to root `https://cheqify.app` so all language paths track

### File List
- `src/components/layout/posthog-provider.tsx`
- `src/components/layout/cookie-consent.tsx`
- `src/components/layout/header.tsx`
- `src/components/layout/mobile-nav.tsx`
- `src/components/layout/language-switcher.tsx`
- `.env.local` (local only)
- `.env.local.example`
