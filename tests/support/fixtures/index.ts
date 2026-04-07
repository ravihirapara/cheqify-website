import { test as base, expect } from "@playwright/test";

/**
 * Extended test fixtures for Cheqify.app marketing website.
 * No data factories needed — this is a static site with no user accounts or APIs.
 */

type TestFixtures = {
  /** Navigate to a specific locale path */
  navigateToLocale: (locale: string, path?: string) => Promise<void>;
};

export const test = base.extend<TestFixtures>({
  navigateToLocale: async ({ page }, use) => {
    const navigate = async (locale: string, path = "") => {
      await page.goto(`/${locale}${path}`);
    };
    await use(navigate);
  },
});

export { expect };
