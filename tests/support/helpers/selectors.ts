/** Common selectors used across tests */
export const SEL = {
  // Header
  header: "header",
  logo: 'header a[href*="/en"], header a[href*="/hi"], header a[href*="/gu"]',
  startFreeBtn: 'a[href*="app.cheqify.app/register"]',
  loginBtn: 'a[href*="app.cheqify.app/login"]',
  mobileMenuBtn: "header button[aria-label]",

  // Navigation
  navLinks: "nav a",
  footer: "footer",
  footerLinks: "footer a",

  // Cookie consent
  cookieBanner: '[data-testid="cookie-consent"], [class*="cookie"]',

  // Sections
  hero: "section:first-of-type",
  ctaSection: 'section:has(a[href*="app.cheqify.app"])',
} as const;
