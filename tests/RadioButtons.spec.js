// [1] Import test and expect functions from the playwright module
const { test, expect } = require('@playwright/test'); 

// [1] Define the test block with a title and an anonymous async function
test('Handle Radio Buttons', async ({ page }) => { 

    // [2, 3] Navigate to the application URL
    await page.goto('https://demoqa.com/radio-button'); 

    // [4, 5] Locate and check a radio button (e.g., Male)
    // The check() method is specifically used to select radio buttons or checkboxes
    await page.locator("//input[@id='yesRadio']").check(); 

    // [6] Alternative approach: Call check() directly from the page fixture
    // await page.check("//input[@id='male']"); 

    // --- Assertions for Radio Buttons ---

    // [7] 1. Using toBeChecked(): The most direct way to verify selection
    await expect(page.locator("//input[@id='yesRadio']")).toBeChecked(); 

    // [8, 9] 2. Using isChecked() with toBeTruthy(): 
    // isChecked() returns a boolean (true/false) which is then validated
    const yesStatus = await page.locator("//input[@id='yesRadio']").isChecked();
    await expect(yesStatus).toBeTruthy();

    // [10, 11] 3. Negative validation using toBeFalsy():
    // Verifying that a different radio button (e.g., Female) is NOT selected
    const impressiveRadioStatus = await page.locator("//input[@id='impressiveRadio']").isChecked();
    await expect(impressiveRadioStatus).toBeFalsy();

    // [12] Optional: Wait for a few seconds to observe the UI before finishing
    await page.waitForTimeout(5000); 
});