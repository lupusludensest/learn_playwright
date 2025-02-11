import { test, expect } from '@playwright/test';

test.only('Learning selectors', async ({ page }) => {
    // Navigate to the webpage
    await page.goto('http://127.0.0.1:5500/clickMe.html');

    // 1. Select by ID and assert counter increment
    await page.locator('#clickButton').click();
    await expect(page.locator('#counter')).toHaveText('1');

    // 2. Selecting by Class
    await page.locator('.button-style').click();
    await expect(page.locator('#counter')).toHaveText('2');

    // 3. Selecting by Tag and Class
    await page.locator('button.button-style').click();
    await expect(page.locator('#counter')).toHaveText('3');

    // 4. Selecting by Attribute Value
    await page.locator('[id="clickButton"]').click();
    await expect(page.locator('#counter')).toHaveText('4');
    await page.locator('[class="button-style"]').click();
    await expect(page.locator('#counter')).toHaveText('5');

    // 5. Selecting by Partial Attribute
    await page.locator('[id*="But"]').click();
    await expect(page.locator('#counter')).toHaveText('6');

    // 6. Selecting by the text content
    await page.locator('text=CLICK ME)').click

    // 7.  Combine selectors for presision, class and text - find exact text match
    await page.locator('.button-style:text("CLICK ME")').click();

    // 8. Find elements containing partial text, has-text
    await page.locator('button:has-text("ICK")').click();
    
    // 9. Attribute and text combination
    await page.locator('[id="clickButton"]:text("CLICK ME")').click();

    // 10. Playwright locator, http://playwright.dev/docs/locators
    // get by text
    await page.getByText('CLICK ME').click();

    // 11. xPATH, attribute and exact text combination
    await page.locator("//button[contains(text(), 'CLICK ME')]").click(); 

    // 12. By role
    await page.getByRole('button', { name: /click me/i }).click();

    // Assert final counter value
    await expect(page.locator('#counter')).toHaveText('12');

    await page.pause();
});