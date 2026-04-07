import { test, expect } from "../support/fixtures";
import { LOCALES, PAGES } from "../support/helpers/locales";

test.describe("Smoke Tests", () => {
  test("homepage loads with correct title", async ({ page }) => {
    await page.goto("/en");
    await expect(page).toHaveTitle(/Cheqify/i);
  });

  test("Start Free CTA is visible and links correctly", async ({ page }) => {
    await page.goto("/en");
    const cta = page.locator('a[href*="app.cheqify.app/register"]').first();
    await expect(cta).toBeVisible();
    await expect(cta).toHaveAttribute("href", /app\.cheqify\.app\/register/);
  });

  test("all pages return 200 for en locale", async ({ page }) => {
    for (const path of PAGES) {
      const response = await page.goto(`/en${path}`);
      expect(response?.status()).toBe(200);
    }
  });

  for (const locale of LOCALES) {
    test(`homepage loads for locale: ${locale}`, async ({ page }) => {
      const response = await page.goto(`/${locale}`);
      expect(response?.status()).toBe(200);
      await expect(page.locator("header")).toBeVisible();
    });
  }
});
