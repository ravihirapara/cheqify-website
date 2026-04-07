import { test, expect } from "../support/fixtures";
import { LOCALES, PAGES } from "../support/helpers/locales";

test.describe("SEO", () => {
  test("all pages have title and meta description", async ({ page }) => {
    for (const path of PAGES) {
      await page.goto(`/en${path}`);
      const title = await page.title();
      expect(title.length).toBeGreaterThan(0);

      const description = await page
        .locator('meta[name="description"]')
        .getAttribute("content");
      expect(description?.length).toBeGreaterThan(0);
    }
  });

  test("pages have Open Graph tags", async ({ page }) => {
    await page.goto("/en");
    const ogTitle = await page
      .locator('meta[property="og:title"]')
      .getAttribute("content");
    expect(ogTitle?.length).toBeGreaterThan(0);

    const ogDescription = await page
      .locator('meta[property="og:description"]')
      .getAttribute("content");
    expect(ogDescription?.length).toBeGreaterThan(0);
  });

  test("pages have hreflang tags for all locales", async ({ page }) => {
    await page.goto("/en");
    for (const locale of LOCALES) {
      const hreflang = page.locator(
        `link[rel="alternate"][hreflang="${locale}"]`
      );
      const count = await hreflang.count();
      expect(count).toBeGreaterThanOrEqual(1);
    }
  });

  test("homepage has JSON-LD structured data", async ({ page }) => {
    await page.goto("/en");
    const jsonLd = page.locator('script[type="application/ld+json"]');
    const count = await jsonLd.count();
    expect(count).toBeGreaterThan(0);

    const content = await jsonLd.first().textContent();
    const parsed = JSON.parse(content!);
    // Should be valid JSON-LD
    if (Array.isArray(parsed)) {
      expect(parsed.length).toBeGreaterThan(0);
      expect(parsed[0]["@context"]).toBe("https://schema.org");
    } else {
      expect(parsed["@context"]).toBe("https://schema.org");
    }
  });
});
