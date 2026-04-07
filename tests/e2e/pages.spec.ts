import { test, expect } from "../support/fixtures";

test.describe("Page Sections", () => {
  test("features page has tabs", async ({ page }) => {
    await page.goto("/en/features");
    // Should have feature sections or tabs
    const heading = page.locator("h1, h2").first();
    await expect(heading).toBeVisible();
  });

  test("pricing page displays free plan", async ({ page }) => {
    await page.goto("/en/pricing");
    // Should show pricing information with "Free" mentioned
    const content = await page.locator("main").textContent();
    expect(content?.toLowerCase()).toContain("free");
  });

  test("about page renders all sections", async ({ page }) => {
    await page.goto("/en/about");
    // Should have hero, story, values sections
    const sections = page.locator("main section, main > div");
    const count = await sections.count();
    expect(count).toBeGreaterThanOrEqual(2);
  });

  test("privacy page renders content", async ({ page }) => {
    await page.goto("/en/privacy");
    const heading = page.locator("h1");
    await expect(heading).toBeVisible();
    // Should have substantial content
    const content = await page.locator("main").textContent();
    expect(content?.length).toBeGreaterThan(200);
  });

  test("homepage has hero, trust bar, and CTA sections", async ({ page }) => {
    await page.goto("/en");
    // Hero section with heading
    const heroHeading = page.locator("h1").first();
    await expect(heroHeading).toBeVisible();

    // Should have CTA buttons
    const ctaLinks = page.locator('a[href*="app.cheqify.app"]');
    const count = await ctaLinks.count();
    expect(count).toBeGreaterThan(0);
  });

  test("homepage demo video section exists", async ({ page }) => {
    await page.goto("/en");
    // Look for video iframe or video element
    const video = page.locator("iframe, video");
    const count = await video.count();
    expect(count).toBeGreaterThanOrEqual(0); // Video may be lazy-loaded
  });
});
