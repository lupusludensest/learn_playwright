// @ts-check
require('dotenv').config();
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto(process.env.PLAYWRIGHT_DOCS_URL);

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);

  await page.pause();
});

test('get started link', async ({ page }) => {
  await page.goto(process.env.PLAYWRIGHT_DOCS_URL);

  // Click the get started link.
  await page.getByRole('link', { name: 'Get started' }).click();

  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();

  await page.pause();
});