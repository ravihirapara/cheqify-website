# Test Design: Cheqify.app Marketing Website (All Epics)

**Date:** 2026-04-07
**Author:** Ravi
**Status:** Draft

---

## Executive Summary

**Scope:** Full system-wide test design covering all 10 epics (21 stories), 52 functional requirements, and 34 non-functional requirements for the Cheqify.app marketing website.

**Project Type:** Static marketing website (Next.js SSG, 7 pages, 3 languages)
**Deployment:** Netlify (static `out/` folder)
**Integrations:** Formspree (contact form), Tawk.to (live chat), Google Analytics 4

**Risk Summary:**

- Total risks identified: 14
- High-priority risks (>=6): 2
- Critical categories: PERF, BUS, SEC

**Coverage Summary:**

- P0 scenarios: 8 (16 hours)
- P1 scenarios: 18 (18 hours)
- P2/P3 scenarios: 22 (14.5 hours)
- **Total effort**: 48.5 hours (~6 days)

---

## Risk Assessment

### High-Priority Risks (Score >=6)

| Risk ID | Category | Description | Probability | Impact | Score | Mitigation | Owner | Timeline |
| ------- | -------- | ----------- | ----------- | ------ | ----- | ---------- | ----- | -------- |
| R-001 | PERF | Core Web Vitals failure (LCP >2.5s, CLS >0.1) on mobile devices — directly impacts SEO ranking and user bounce rate | 2 | 3 | 6 | Lighthouse CI in build pipeline, lazy-load images, optimize font loading | Dev | Sprint 0 |
| R-002 | BUS | Broken "Start Free" / "Login" CTA links across pages and locales — blocks primary conversion funnel | 2 | 3 | 6 | E2E test on all CTA buttons across all 3 locales, verify href to app.cheqify.app | QA | Sprint 0 |

### Medium-Priority Risks (Score 3-4)

| Risk ID | Category | Description | Probability | Impact | Score | Mitigation | Owner |
| ------- | -------- | ----------- | ----------- | ------ | ----- | ---------- | ----- |
| R-003 | BUS | Missing or incorrect translations (hi/gu) causing garbled UI or untranslated keys visible to users | 2 | 2 | 4 | Validate all translation keys exist in all 3 locale files, visual check per locale | QA |
| R-004 | SEC | Cookie consent banner not gating analytics/chat — tracking fires before user consent (GDPR/IT Act risk) | 2 | 2 | 4 | Verify GA4 and Tawk.to scripts only load after consent accepted | Dev |
| R-005 | BUS | Contact form (Formspree) fails silently or shows no confirmation — lost leads | 2 | 2 | 4 | E2E test form submission flow, verify success message | QA |
| R-006 | PERF | Large JavaScript bundle (>150KB) due to third-party scripts (Tawk.to, GA4) degrading TTI | 2 | 2 | 4 | Async loading, consent-gating, measure bundle size in CI | Dev |
| R-007 | TECH | Static export breaks i18n routing — locale URLs return 404 on Netlify | 2 | 2 | 4 | Smoke test all locale routes after deploy, verify _redirects | Dev |
| R-008 | BUS | Blog post rendering errors (markdown parsing, missing frontmatter fields) | 1 | 3 | 3 | Validate all 18 blog posts (6 per locale) render correctly | QA |
| R-009 | SEC | XSS via blog content — dangerouslySetInnerHTML used for markdown rendering | 1 | 3 | 3 | Sanitize HTML output from remark, review CSP headers | Dev |
| R-010 | BUS | Mobile navigation menu doesn't open/close correctly or covers content | 2 | 2 | 4 | E2E mobile viewport test for hamburger menu toggle | QA |

### Low-Priority Risks (Score 1-2)

| Risk ID | Category | Description | Probability | Impact | Score | Action |
| ------- | -------- | ----------- | ----------- | ------ | ----- | ------ |
| R-011 | OPS | Netlify build fails due to SSG errors or missing environment variables | 1 | 2 | 2 | Monitor deploy logs, test build locally before push |
| R-012 | BUS | Dark/light theme toggle doesn't persist or flashes wrong theme on load | 1 | 1 | 1 | Monitor — cosmetic issue, defaulting to light now |
| R-013 | TECH | SEO structured data (JSON-LD) invalid — fails Google Rich Results validation | 1 | 2 | 2 | Validate JSON-LD with Google Rich Results Test |
| R-014 | OPS | Sitemap.xml or robots.txt not generated correctly in static export | 1 | 2 | 2 | Verify files exist in out/ folder and contain correct URLs |

### Risk Category Legend

- **TECH**: Technical/Architecture (flaws, integration, scalability)
- **SEC**: Security (access controls, auth, data exposure)
- **PERF**: Performance (SLA violations, degradation, resource limits)
- **DATA**: Data Integrity (loss, corruption, inconsistency)
- **BUS**: Business Impact (UX harm, logic errors, revenue)
- **OPS**: Operations (deployment, config, monitoring)

---

## Test Coverage Plan

### P0 (Critical) - Run on every commit

**Criteria**: Blocks core journey + High risk (>=6) + No workaround

| Requirement | Test Level | Risk Link | Test Count | Owner | Notes |
| ----------- | ---------- | --------- | ---------- | ----- | ----- |
| Homepage loads with hero, CTA buttons visible | E2E | R-002 | 1 | QA | All 3 locales |
| "Start Free" CTA links to app.cheqify.app/register | E2E | R-002 | 3 | QA | 1 per locale |
| "Login" CTA links to app.cheqify.app/login | E2E | R-002 | 1 | QA | Spot-check en |
| Core Web Vitals pass (LCP <2.5s, CLS <0.1) | E2E/Lighthouse | R-001 | 1 | Dev | Lighthouse CI on homepage |
| All 7 pages render without errors (en locale) | E2E | R-007 | 1 | QA | Smoke test all routes |
| Mobile responsive — header, nav, hero render correctly | E2E | R-010 | 1 | QA | Mobile viewport 375px |

**Total P0**: 8 tests, 16 hours

### P1 (High) - Run on PR to main

**Criteria**: Important features + Medium risk (3-4) + Common workflows

| Requirement | Test Level | Risk Link | Test Count | Owner | Notes |
| ----------- | ---------- | --------- | ---------- | ----- | ----- |
| All 7 pages render in hi and gu locales | E2E | R-003 | 2 | QA | 1 per locale, all routes |
| No untranslated keys visible (no "key.path" text) | E2E | R-003 | 3 | QA | Regex scan per locale |
| Cookie consent banner appears on first visit | E2E | R-004 | 1 | QA | Verify banner visible |
| GA4 script not loaded before consent | E2E | R-004 | 1 | QA | Check network requests |
| Contact form submits successfully | E2E | R-005 | 1 | QA | Formspree integration |
| Contact form shows validation errors | E2E | R-005 | 1 | QA | Empty required fields |
| Mobile hamburger menu opens and closes | E2E | R-010 | 1 | QA | 375px viewport |
| Blog listing page shows all posts | E2E | R-008 | 1 | QA | en locale |
| Individual blog post renders markdown correctly | E2E | R-008 | 1 | QA | Spot check 1 post |
| Features page tabs switch content | E2E | - | 1 | QA | Tab interaction |
| Pricing page displays free plan card | E2E | - | 1 | QA | Verify pricing info |
| Footer links navigate correctly | E2E | - | 1 | QA | All footer nav links |
| Language switcher changes locale | E2E | R-003 | 1 | QA | en -> hi -> gu |
| Theme toggle switches light/dark | E2E | R-012 | 1 | QA | Visual check |
| About page renders all sections | E2E | - | 1 | QA | Hero, story, values, CTA |

**Total P1**: 18 tests, 18 hours

### P2 (Medium) - Run nightly/weekly

**Criteria**: Secondary features + Low risk (1-2) + Edge cases

| Requirement | Test Level | Risk Link | Test Count | Owner | Notes |
| ----------- | ---------- | --------- | ---------- | ----- | ----- |
| SEO meta tags present on all pages | E2E | R-013 | 7 | QA | title, description, og tags |
| JSON-LD structured data valid | Unit | R-013 | 2 | Dev | Validate schema format |
| Sitemap.xml contains all routes | Unit | R-014 | 1 | Dev | Check route count |
| Robots.txt allows crawling | Unit | R-014 | 1 | Dev | Verify content |
| Hreflang tags present for all locales | E2E | - | 3 | QA | 1 per locale |
| Blog prev/next navigation works | E2E | R-008 | 1 | QA | Navigate between posts |
| Privacy policy page renders 5 sections | E2E | - | 1 | QA | Section count check |
| Demo video embed loads | E2E | - | 1 | QA | iframe present |
| Trust bar and bank logos visible | E2E | - | 1 | QA | Homepage section |
| How It Works section renders steps | E2E | - | 1 | QA | 3 steps visible |
| Testimonials section renders | E2E | - | 1 | QA | Cards visible |
| Stats bar numbers visible | E2E | - | 1 | QA | Homepage section |

**Total P2**: 21 tests, 10.5 hours

### P3 (Low) - Run on-demand

**Criteria**: Nice-to-have + Exploratory + Performance benchmarks

| Requirement | Test Level | Test Count | Owner | Notes |
| ----------- | ---------- | ---------- | ----- | ----- |
| Lighthouse score >=90 on all pages | Lighthouse | 7 | Dev | Performance audit |
| Accessibility audit (WCAG AA) | Lighthouse/axe | 7 | Dev | axe-core checks |
| Bundle size <150KB initial JS | Unit | 1 | Dev | Build output check |
| Font-display: swap applied | Unit | 1 | Dev | CSS check |

**Total P3**: 16 tests, 4 hours

---

## Execution Order

### Smoke Tests (<5 min)

**Purpose**: Fast feedback, catch build-breaking issues

- [ ] Homepage /en loads (200 status) (15s)
- [ ] "Start Free" CTA visible and has correct href (15s)
- [ ] Mobile viewport renders without overflow (30s)
- [ ] All 7 routes return 200 in en locale (1min)

**Total**: 4 scenarios

### P0 Tests (<10 min)

**Purpose**: Critical path validation

- [ ] CTA links across all 3 locales (E2E)
- [ ] Core Web Vitals - Lighthouse CI (E2E)
- [ ] All pages render without JS errors (E2E)
- [ ] Mobile responsive check (E2E)

**Total**: 8 scenarios

### P1 Tests (<30 min)

**Purpose**: Important feature coverage

- [ ] Multi-locale rendering (hi, gu) (E2E)
- [ ] Translation completeness check (E2E)
- [ ] Cookie consent + analytics gating (E2E)
- [ ] Contact form submission (E2E)
- [ ] Blog listing and post rendering (E2E)
- [ ] Navigation and interactive elements (E2E)

**Total**: 18 scenarios

### P2/P3 Tests (<60 min)

**Purpose**: Full regression coverage

- [ ] SEO metadata validation (E2E)
- [ ] Structured data and sitemap checks (Unit)
- [ ] All page sections render (E2E)
- [ ] Lighthouse performance audit (Lighthouse)
- [ ] Accessibility audit (axe-core)

**Total**: 37 scenarios

---

## Resource Estimates

### Test Development Effort

| Priority | Count | Hours/Test | Total Hours | Notes |
| -------- | ----- | ---------- | ----------- | ----- |
| P0 | 8 | 2.0 | 16 | Critical paths, multi-locale |
| P1 | 18 | 1.0 | 18 | Feature coverage |
| P2 | 21 | 0.5 | 10.5 | Secondary checks |
| P3 | 16 | 0.25 | 4 | Audits, benchmarks |
| **Total** | **63** | **-** | **48.5** | **~6 days** |

### Prerequisites

**Test Data:**

- Blog markdown fixtures (6 posts x 3 locales = 18 files, already exist in content/blog/)
- Translation fixture validation (3 JSON files in messages/)

**Tooling:**

- Playwright for E2E browser testing
- Lighthouse CI for performance/SEO audits
- axe-core (via @axe-core/playwright) for accessibility
- No database or API mocking needed (static site)

**Environment:**

- Local dev server (npm run dev) for development testing
- Static build output (out/) for production-like testing
- Netlify preview deploys for integration testing

---

## Quality Gate Criteria

### Pass/Fail Thresholds

- **P0 pass rate**: 100% (no exceptions)
- **P1 pass rate**: >=95% (waivers required for failures)
- **P2/P3 pass rate**: >=90% (informational)
- **High-risk mitigations**: 100% complete or approved waivers

### Coverage Targets

- **Critical paths (CTA, navigation)**: >=90%
- **Multi-locale rendering**: 100% (all 3 locales)
- **SEO fundamentals**: >=80%
- **Accessibility**: WCAG AA compliance

### Non-Negotiable Requirements

- [ ] All P0 tests pass
- [ ] No high-risk (>=6) items unmitigated
- [ ] "Start Free" CTA works in all locales
- [ ] Core Web Vitals passing (LCP <2.5s)
- [ ] Cookie consent gates all tracking scripts

---

## Mitigation Plans

### R-001: Core Web Vitals Failure (Score: 6)

**Mitigation Strategy:** Integrate Lighthouse CI into build pipeline. Set performance budget: LCP <2.5s, CLS <0.1, FID <100ms. Optimize images with Next.js Image (unoptimized but properly sized), use font-display: swap, async-load third-party scripts.
**Owner:** Dev
**Timeline:** Sprint 0
**Status:** Planned
**Verification:** Lighthouse CI score >=90 on homepage in CI pipeline

### R-002: Broken CTA Links (Score: 6)

**Mitigation Strategy:** E2E test that visits every page in all 3 locales, finds all "Start Free" and "Login" buttons, and verifies their href attributes point to app.cheqify.app/register and app.cheqify.app/login respectively.
**Owner:** QA
**Timeline:** Sprint 0
**Status:** Planned
**Verification:** E2E test passes on every PR — zero broken CTAs across 21 page variants (7 pages x 3 locales)

---

## Assumptions and Dependencies

### Assumptions

1. Formspree endpoint is configured and active for contact form submissions
2. Tawk.to widget ID is valid and the service is operational
3. Google Analytics 4 measurement ID is configured correctly
4. All 18 blog posts (6 per locale) have valid frontmatter schema
5. Netlify handles the _redirects file for root-to-locale routing

### Dependencies

1. Playwright installed and configured — Required before test implementation
2. Netlify deployment active — Required for production smoke tests
3. Formspree account active — Required for contact form E2E tests

### Risks to Plan

- **Risk**: Formspree rate-limits test submissions
  - **Impact**: Contact form E2E tests may fail intermittently
  - **Contingency**: Mock Formspree in CI, test real submission manually

- **Risk**: Tawk.to widget loading is flaky in headless browsers
  - **Impact**: Cannot verify chat widget in E2E
  - **Contingency**: Verify script tag injection only, not widget render

---

## Follow-on Workflows (Manual)

- Run `*framework` to set up Playwright test infrastructure
- Run `*atdd` to generate failing P0 tests
- Run `*automate` for broader coverage once tests are stable
- Run `*ci` to configure CI/CD pipeline with test stages

---

## Approval

**Test Design Approved By:**

- [ ] Product Manager: Ravi Date: ____
- [ ] Tech Lead: Ravi Date: ____
- [ ] QA Lead: Ravi Date: ____

**Comments:**

---

## Appendix

### Knowledge Base References

- `risk-governance.md` - Risk classification framework (6 categories, scoring matrix)
- `probability-impact.md` - Risk scoring methodology (P x I matrix)
- `test-levels-framework.md` - Test level selection (E2E vs API vs Component vs Unit)
- `test-priorities-matrix.md` - P0-P3 prioritization criteria

### Related Documents

- PRD: `_bmad-output/planning-artifacts/prd.md`
- Epics: `_bmad-output/planning-artifacts/epics.md`
- Architecture: `_bmad-output/planning-artifacts/architecture.md`

---

**Generated by**: BMad TEA Agent - Test Architect Module
**Workflow**: `_bmad/bmm/testarch/test-design`
**Version**: 4.0 (BMad v6)
