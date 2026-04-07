import { test, expect } from "../support/fixtures";
import { LOCALES, PAGES } from "../support/helpers/locales";

test.describe("Internationalization (i18n)", () => {
  for (const locale of LOCALES) {
    test(`all pages render for locale: ${locale}`, async ({ page }) => {
      for (const path of PAGES) {
        const response = await page.goto(`/${locale}${path}`);
        expect(response?.status()).toBe(200);
      }
    });
  }

  for (const locale of LOCALES) {
    test(`no untranslated keys visible - ${locale}`, async ({ page }) => {
      for (const path of PAGES) {
        await page.goto(`/${locale}${path}`);
        const body = await page.locator("body").textContent();
        // next-intl shows raw keys like "home.hero.title" when missing
        // Check for patterns that look like nested translation keys (3+ segments)
        const missingKeys = body?.match(/\b[a-z]+\.[a-z]+\.[a-zA-Z]+\.[a-z]+/g) || [];
        expect(missingKeys, `Found untranslated keys on ${locale}${path}: ${missingKeys.join(", ")}`).toHaveLength(0);
      }
    });
  }

  test("html lang attribute matches locale", async ({ page }) => {
    for (const locale of LOCALES) {
      await page.goto(`/${locale}`);
      const lang = await page.locator("html").getAttribute("lang");
      expect(lang).toBe(locale);
    }
  });
});
