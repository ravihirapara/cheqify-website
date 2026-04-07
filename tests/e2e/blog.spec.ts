import { test, expect } from "../support/fixtures";

test.describe("Blog", () => {
  test("blog listing page shows posts", async ({ page }) => {
    await page.goto("/en/blog");
    // Should have at least one blog post card/link
    const postLinks = page.locator('a[href*="/blog/"]');
    const count = await postLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("individual blog post renders correctly", async ({ page }) => {
    await page.goto("/en/blog/cheqify-vs-manual-cheque-writing");
    // Post should have a title (h1)
    const title = page.locator("h1");
    await expect(title).toBeVisible();
    const titleText = await title.textContent();
    expect(titleText?.length).toBeGreaterThan(5);
  });

  test("blog post has prev/next navigation", async ({ page }) => {
    await page.goto("/en/blog/cheqify-vs-manual-cheque-writing");
    // Should have navigation links to other posts
    const navLinks = page.locator("nav a[href*='/blog/']");
    const count = await navLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("blog posts render in all locales", async ({ page }) => {
    const locales = ["en", "hi", "gu"];
    for (const locale of locales) {
      const response = await page.goto(`/${locale}/blog`);
      expect(response?.status()).toBe(200);
    }
  });
});
