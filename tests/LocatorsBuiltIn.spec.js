const { test, expect } = require('@playwright/test'); // [3]
const testdata= JSON.parse(JSON.stringify(require("../testdata.json"))) 

test('Built-in Locators Demo', async ({ page }) => { // [4]

    // Navigate to the application
    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'); // [8]

    // 1. getByAltText: Locate the logo by its alternative text
    const logo = page.getByAltText('company-branding'); // [9, 10]
    await expect(logo).toBeVisible(); // [11, 12]

    // 2. getByPlaceholder: Locate input fields by their placeholder hints
    await page.getByPlaceholder('Username').fill(testdata.username); // [5, 13]
    await page.getByPlaceholder('Password').fill(testdata.password); // [14]

    // 3. getByRole: Locate the login button by its functional role and type
    await page.getByRole('button', { type: 'submit' }).click(); // [6, 15, 16]

    // 4. getByText: Verify a successful login by finding specific visible text
    // Example: Verifying the user's name is displayed after login
    const dashboardHeader = await page.getByText('PIM'); // [17, 18]
    await expect(dashboardHeader).toBeVisible(); // [19]

    await page.close(); // [20]
});