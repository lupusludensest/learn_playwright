import { test, expect } from '@playwright/test';
import exp from 'constants';

test.describe.only('Learn assertions', () => {
    
    test('Verify web page behaviour', async ({page}) => {
        await page.goto('http://the-internet.herokuapp.com/');

        // 1. To have URL

        await expect(page).toHaveURL('http://the-internet.herokuapp.com/');

        await page.pause();

        // 2. To have a title 

        await expect(page).toHaveTitle('The Internet');
        
        await page.pause();
    })

    test.only('Continue with assertions part 1', async ({page}) => {
        await page.goto('http://the-internet.herokuapp.com/');
        
        // 3. Assert the visibility of an element

        await page.pause();

        await expect(page.locator('h1')).toBeVisible();

        await page.pause();

        // 4. Assert element to have a text

        await expect(page.locator('h2')).toHaveText('Available Examples');

        await page.pause();

        // 5. Assert element to have a text

        await expect(page.locator('body')).toContainText('WYSIWYG');

        await page.pause();

    }); 

    test.only('Continue with assertions part 2', async ({page}) => {
            await page.goto('http://the-internet.herokuapp.com/');

        // 6. Assert count of elements

        await page.pause();

        await expect(page.locator('li')).toHaveCount(44);
        
        await page.pause();


        // 7. Assert element to be checked
        await page.goto('http://the-internet.herokuapp.com/checkboxes');

        await page.waitForTimeout(1000);
        await page.waitForLoadState('networkidle')
        let checkbox = await page.getByRole('checkbox').nth(0);
        await checkbox.waitFor();

        await page.getByRole('checkbox').nth(0).check();
        await page.getByRole('checkbox').nth(1).uncheck();

        await expect(page.getByRole('checkbox').nth(0)).toBeChecked();
        await expect(page.getByRole('checkbox').nth(1)).not.toBeChecked();
        

    })

    test.only('Continue with assertions part 3', async ({page}) => {
        await page.goto('http://the-internet.herokuapp.com/');

        // 8. Assert element to have value
        await page.goto('http://the-internet.herokuapp.com/login');

        await page.pause();

        await page.locator('#username').fill( 'tomsmith');
        await expect(page.locator('#username')).toHaveValue('tomsmith');

        await page.pause();

        // 9. Element is enabled
        await expect(page.locator('button[type="submit"]')).toBeEnabled();  
        // vawait expect(page.locator('button[type="submit"]')).toBeDisabled();  
            
    })

    test.only('Continue with assertions part 4', async ({page}) => {
    await page.goto('http://the-internet.herokuapp.com/');

    //10. Verify text store in variable
    const headerText = await page.locator('h1').textContent();
    expect(headerText).toBe('Welcome to the-internet');  

    await page.pause();

        });


})

    
