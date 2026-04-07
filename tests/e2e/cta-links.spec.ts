import { test, expect } from "../support/fixtures";
import { LOCALES, PAGES } from "../support/helpers/locales";

test.describe("CTA Links", () => {
  for (const locale of LOCALES) {
    test(`Start Free CTA links correctly on homepage - ${locale}`, async ({ page }) => {
      await page.goto(`/${locale}`);
      const ctaLinks = page.locator('a[href*="app.cheqify.app/register"]');
      const count = await ctaLinks.count();
      expect(count).toBeGreaterThan(0);

      for (let i = 0; i < count; i++) {
        await expect(ctaLinks.nth(i)).toHaveAttribute(
          "href",
          /https:\/\/app\.cheqify\.app\/register/
        );
      }
    });
  }

  test("Login CTA links correctly", async ({ page }) => {
    await page.goto("/en");
    const loginLinks = page.locator('a[href*="app.cheqify.app/login"]');
    const count = await loginLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      await expect(loginLinks.nth(i)).toHaveAttribute(
        "href",
        /https:\/\/app\.cheqify\.app\/login/
      );
    }
  });

  for (const locale of LOCALES) {
    test(`CTA buttons exist on all pages - ${locale}`, async ({ page }) => {
      for (const path of PAGES) {
        await page.goto(`/${locale}${path}`);
        // At minimum, header should have a CTA
        const headerCta = page
          .locator('header a[href*="app.cheqify.app"]')
          .first();
        await expect(headerCta).toBeVisible();
      }
    });
  }
});
