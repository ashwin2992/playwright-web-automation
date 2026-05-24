const { test, expect } = require('@playwright/test'); // [4]

// The 'async' keyword is placed before the function to make it return a promise [3, 5, 6]
test('Home Page Test', async ({ page }) => { 

  // The 'await' keyword is used before commands to wait for the action to complete [1, 6]
  await page.goto('https://www.demoblaze.com/index.html'); // Opens the URL [7]

  const pageTitle = await page.title(); // Waits to capture the page title [8, 9]
  console.log('Page title is:', pageTitle); // [10]

  // 'await' is also required for assertions to wait for the validation promise [11, 12]
  await expect(page).toHaveTitle('STORE'); 
  await expect(page).toHaveURL('https://www.demoblaze.com/index.html'); 

  await page.close(); // Waits for the page to close before finishing [9, 13]
});