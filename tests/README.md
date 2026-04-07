# Cheqify.app - Test Suite

## Setup

```bash
# Install Playwright and browsers
npm install -D @playwright/test
npx playwright install
```

## Running Tests

```bash
# Run all tests
npm run test:e2e

# Run in headed mode (see browser)
npx playwright test --headed

# Run specific test file
npx playwright test smoke

# Run with UI mode (interactive)
npx playwright test --ui

# Debug a test
npx playwright test --debug

# View last test report
npx playwright show-report test-results/html
```

## Architecture

```
tests/
  e2e/                  # Test specs
    smoke.spec.ts       # Smoke tests (P0 subset)
    cta-links.spec.ts   # CTA link validation (P0)
    navigation.spec.ts  # Navigation tests (P1)
  support/
    fixtures/           # Playwright test fixtures
      index.ts          # Custom test extensions
    helpers/            # Shared utilities
      locales.ts        # Locale/page constants
      selectors.ts      # Common selectors
    page-objects/       # Page object models (future)
```

## Conventions

- Use `data-testid` attributes for reliable selectors
- Tests should be independent and parallelizable
- Artifacts (screenshots, traces, videos) captured only on failure
- All tests run against all 3 locales (en, hi, gu) where applicable

## CI Integration

Tests run automatically via GitHub Actions on PRs. Configuration includes:
- Chromium, Firefox, WebKit, and Mobile Chrome
- 2 retries in CI, 0 locally
- JUnit XML report for CI consumption
- HTML report for local debugging
