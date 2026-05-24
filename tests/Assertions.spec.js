// Step 1: Import test and expect from the Playwright test module
const { test, expect } = require('@playwright/test'); [2]

test('Assertions Demo Test', async ({ page }) => { [4]

    // Step 2: Navigate to the target application
    await page.goto('https://demo.nopcommerce.com/register'); [5, 6]

    // 1. Page URL Validation
    // Checks if the current page URL matches the expected string
    await expect(page).toHaveURL('https://demo.nopcommerce.com/register'); [3, 6]

    // 2. Page Title Validation
    // Verifies the tab or header title of the page
    await expect(page).toHaveTitle('nopCommerce demo store. Register'); [7, 8]

    // 3. Element Visibility
    // Confirms an element (like a logo) is physically visible on the page
    const logo = page.locator('.header-logo'); 
    await expect(logo).toBeVisible(); [9, 10]

    // 4. Element Enabled/Disabled State
    // Checks if an input field or button is interactable
    const searchBox = page.locator('#small-searchterms');
    await expect(searchBox).toBeEnabled(); [11]

    // 5. Radio Button / Checkbox Selection
    // Verifies if a specific option has been checked
    const maleRadioButton = page.locator('#gender-male');
    await maleRadioButton.click(); // Select the button first
    await expect(maleRadioButton).toBeChecked(); [12]

    // 6. Attribute Validation
    // Checks for a specific attribute (e.g., 'type') and its value
    const registerButton = page.locator('#register-button');
    await expect(registerButton).toHaveAttribute('type', 'submit'); [13, 14]

    // 7. Exact vs. Partial Text Matches
    const header = page.locator('.page-title h1');
    await expect(header).toHaveText('Register'); // Exact match [15, 16]
    await expect(header).toContainText('Reg'); // Partial match [17]

    // 8. Input Value Validation
    // Specifically checks the text content currently inside an input box
    const emailInput = page.locator('#Email');
    await emailInput.fill('test@example.com');
    await expect(emailInput).toHaveValue('test@example.com'); [18, 19]

    // 9. Collection Count Validation
    // Verifies the total number of elements in a list or dropdown
   // const dobOptions = page.locator('select[name="DateOfBirthDay"] option');
    const dashboardHeader = await page.getByText('Email');
    await expect(dashboardHeader).toHaveValue('test@example.com');

    // 10. Negative Assertions
    // Any assertion can be reversed by adding '.not'
    await expect(page).not.toHaveTitle('Wrong Title'); [21, 22]

});