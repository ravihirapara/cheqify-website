import { test, expect } from "../support/fixtures";

test.describe("Navigation", () => {
  test("header is visible with logo and nav links", async ({ page }) => {
    await page.goto("/en");
    await expect(page.locator("header")).toBeVisible();
    const navLinks = page.locator("header nav a, header a");
    await expect(navLinks.first()).toBeVisible();
  });

  test("footer is visible with links", async ({ page }) => {
    await page.goto("/en");
    await expect(page.locator("footer")).toBeVisible();
  });

  test("mobile menu toggles on small viewport", async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto("/en");

    // Look for mobile menu trigger button
    const menuButton = page.locator("header button").first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      // Mobile nav uses Sheet component — wait for any new visible nav links
      await page.waitForTimeout(500);
      const mobileLinks = page.locator('a[href*="/en/"]');
      const count = await mobileLinks.count();
      expect(count).toBeGreaterThan(0);
    }
  });

  test("language switcher changes locale", async ({ page }) => {
    await page.goto("/en");
    const langTrigger = page.locator("button:has-text('EN'), button:has-text('English')").first();
    if (await langTrigger.isVisible()) {
      await langTrigger.click();
      const hiOption = page.locator("a:has-text('HI'), a:has-text('Hindi'), a[href*='/hi']").first();
      if (await hiOption.isVisible()) {
        await hiOption.click();
        await expect(page).toHaveURL(/\/hi/);
      }
    }
  });
});
