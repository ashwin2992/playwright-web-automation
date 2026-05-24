// Step 1: Import the required modules from the Playwright test package
const { test, expect } = require('@playwright/test'); [1, 6]

// Step 2: Define the test block with a title and an async anonymous function
test('Locators Test', async ({ page }) => { [7, 8]

    // Step 3: Navigate to the application URL
    await page.goto('https://www.demoblaze.com/index.html'); [9]

    // Step 4: Click the Login link using a property (ID) locator
    // You can call click() directly from the page fixture
    await page.click('id=login2'); [10, 11]

    // Step 5: Provide the Username using a CSS selector (#ID)
    // The fill() method is used to provide text to input boxes
    await page.fill('#loginusername', 'pavanol'); [4, 12]

    // Step 6: Provide the Password using a CSS selector (Tag[Attribute=Value])
    await page.fill("input[id='loginpassword']", 'test@123'); [13-15]

    // Step 7: Click the Login button using an XPath locator
    await page.click("//button[normalize-space()='Log in']"); [5, 16]

    // Step 8: Verify the Logout link is visible after a successful login
    // This uses a locator variable and an 'expect' assertion
    const logoutLink = page.locator("//a[normalize-space()='Log out']"); [17, 18]
    await expect(logoutLink).toBeVisible(); [19]

    // Step 9: Close the page to finalize the test
    await page.close(); [20]
});