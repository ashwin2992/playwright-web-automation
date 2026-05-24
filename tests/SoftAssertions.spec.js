const { test, expect } = require('@playwright/test'); // [5]

test('Soft Assertions Demo', async ({ page }) => { // [5, 6]
    
    // Launch the application
    await page.goto('https://www.demoblaze.com/index.html'); // [6]

    // Implementation of Soft Assertions
    // Even if the first assertion fails, the subsequent ones will still execute
    await expect.soft(page).toHaveTitle('Store123'); // Intentionally failing title [7, 8]
    await expect.soft(page).toHaveURL('https://www.demoblaze.com/index.html'); // [4, 7]
    
    const logo = page.locator('#nava'); 
    await expect.soft(logo).toBeVisible(); // [4, 7]

    // The test continues to execute code here even if assertions above failed [4]
    console.log("Rest of the code is executing..."); 
});