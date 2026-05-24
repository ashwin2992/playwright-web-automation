// [1] Import test and expect functions from the playwright module
const { test, expect } = require('@playwright/test'); 

// [1] Define the test block with a title and an anonymous async function
test('Check Box Test', async ({ page }) => { 

    // [2, 3] Navigate to the application URL
    await page.goto('https://demoqa.com/checkbox'); 

     await page.locator("span[class='rc-tree-switcher rc-tree-switcher_close']").click();
    await page.getByLabel('Home').check();

// Assert the checked state
expect(page.getByLabel('Home')).toBeChecked();

// Select the radio button
await page.getByLabel('Home').check();


await page.waitForTimeout(5000); 
});