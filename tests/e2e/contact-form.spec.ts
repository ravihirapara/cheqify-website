import { test, expect } from "../support/fixtures";

test.describe("Contact Form", () => {
  test("contact page renders form fields", async ({ page }) => {
    await page.goto("/en/contact");

    const form = page.locator("form");
    await expect(form).toBeVisible();

    // Form has: name input, email input, subject select, message textarea, consent checkbox
    const inputs = page.locator("form input, form textarea, form select");
    const count = await inputs.count();
    expect(count).toBeGreaterThanOrEqual(3);
  });

  test("contact form shows validation for empty required fields", async ({ page }) => {
    await page.goto("/en/contact");

    const submitBtn = page.locator('form button[type="submit"]');
    await expect(submitBtn).toBeVisible();
    await submitBtn.click();

    // Browser validation should prevent submission
    const invalidInputs = page.locator("input:invalid, textarea:invalid, select:invalid");
    const invalidCount = await invalidInputs.count();
    expect(invalidCount).toBeGreaterThan(0);
  });
});
