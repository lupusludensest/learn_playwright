require('dotenv').config();
import { test, expect } from '@playwright/test';

test('Learning selectors', async ({ page }) => {
    // Set a longer timeout for the test
    test.setTimeout(20000); // Set timeout to 20 seconds

    // Navigate to the webpage
    await page.goto('http://127.0.0.1:5500/clickMe.html');

    // Helper function to wait for the counter to have the expected text
    async function waitForCounterText(expectedText) {
        await page.waitForTimeout(500); // Short delay before checking
        await page.waitForFunction((text) => {
            const counterElement = document.querySelector('#counter');
            return counterElement && counterElement.innerText === text;
        }, expectedText, { timeout: 20000 }); // Increase the timeout here
    }

    // Reset the page state before each test if needed
    // This can be done using beforeEach if you have multiple tests

    // 1. Select by ID and assert counter increment
    await page.locator('#clickButton').click();
    await waitForCounterText('1');
    await expect(page.locator('#counter')).toHaveText('1');

    // 2. Selecting by Class
    await page.locator('.button-style').click();
    await waitForCounterText('2');
    await expect(page.locator('#counter')).toHaveText('2');

    // 3. Selecting by Tag and Class
    await page.locator('button.button-style').click();
    await waitForCounterText('3');
    await expect(page.locator('#counter')).toHaveText('3');

    // 4. Selecting by Attribute Value
    await page.locator('[id="clickButton"]').click();
    await waitForCounterText('4');
    await expect(page.locator('#counter')).toHaveText('4');

    await page.locator('[class="button-style"]').click();
    await waitForCounterText('5');
    await expect(page.locator('#counter')).toHaveText('5');

    // 5. Selecting by Partial Attribute
    await page.locator('[id*="But"]').click();
    await waitForCounterText('6');
    await expect(page.locator('#counter')).toHaveText('6');

    // 6. Selecting by the text content
    await page.locator('text=CLICK ME').click();
    await waitForCounterText('7');
    await expect(page.locator('#counter')).toHaveText('7');

    // 7. Combine selectors for precision, class and text - find exact text match
    await page.locator('.button-style:text("CLICK ME")').click();
    await waitForCounterText('8');
    await expect(page.locator('#counter')).toHaveText('8');

    // 8. Find elements containing partial text, has-text
    await page.locator('button:has-text("ICK")').click();
    await waitForCounterText('9');
    await expect(page.locator('#counter')).toHaveText('9');

    // 9. Attribute and text combination
    await page.locator('[id="clickButton"]:text("CLICK ME")').click();
    await waitForCounterText('10');
    await expect(page.locator('#counter')).toHaveText('10');

    // 10. Playwright locator, http://playwright.dev/docs/locators
    // get by text
    await page.getByText('CLICK ME').click();
    await waitForCounterText('11');
    await expect(page.locator('#counter')).toHaveText('11');

    // 11. xPATH, attribute and exact text combination
    await page.locator("//button[contains(text(), 'CLICK ME')]").click();
    await waitForCounterText('12');
    await expect(page.locator('#counter')).toHaveText('12');

    // 12. By role
    await page.getByRole('button', { name: /click me/i }).click();
    await waitForCounterText('13');
    await expect(page.locator('#counter')).toHaveText('13');

    // Assert final counter value
    await expect(page.locator('#counter')).toHaveText('13');
});