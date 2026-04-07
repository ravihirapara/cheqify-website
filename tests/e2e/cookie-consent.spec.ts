import { test, expect } from "../support/fixtures";

test.describe("Cookie Consent", () => {
  test("cookie consent banner appears on first visit", async ({ page }) => {
    await page.goto("/en");
    // Cookie consent is a fixed bottom div with Accept/Decline buttons
    const banner = page.locator("div.fixed").filter({ hasText: /accept|cookie/i });
    await expect(banner.first()).toBeVisible({ timeout: 10000 });
  });

  test("GA4 script not present before consent", async ({ page }) => {
    await page.goto("/en");
    // GA4 should not be loaded before user consents (consent-gated loading)
    const ga4Scripts = await page.locator(
      'script[src*="googletagmanager"], script[src*="gtag"]'
    ).count();
    expect(ga4Scripts).toBe(0);
  });
});
