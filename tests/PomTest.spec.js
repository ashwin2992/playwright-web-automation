import { test, expect } from '@playwright/test'; // [5, 6]
// Step 1: Import the external Page Object classes [7, 8]
import { LoginPage } from '../pages/loginPage';
import { HomePage } from '../pages/HomePage';
import { CartPage } from '../pages/CartPage';

test('POM Test Flow', async ({ page }) => { // [9]

    // Step 2: Login Page interactions [9]
    // Create an object of the LoginPage and pass the page fixture to the constructor [9, 10]
    const login = new LoginPage(page);
    await login.goToLoginPage('https://www.demoblaze.com/index.html'); // [11, 12]
    await login.login('pavanol', 'test@123'); // [3, 10]

    // Step 3: Home Page interactions [13, 14]
    // Create an object of the HomePage to select a specific product [13]
    const home = new HomePage(page);
    await page.waitForTimeout(3000); // Optional wait for page load [15, 16]
    await home.addProductToCart('Nexus 6'); // Add the matching product to cart [14, 17]
    await home.goToCart(); // Navigate to the cart view [15, 16]

    // Step 4: Cart Page interactions and Assertions [18, 19]
    // Create an object of the CartPage to verify the product exists in the table [18]
    const cart = new CartPage(page);
    await page.waitForTimeout(3000);
    
    // Call the validation method which returns true if the product name is found [19, 20]
    const status = await cart.checkProductInCart('Nexus 6');
    
    // Perform a hard assertion on the returned status [21]
    expect(status).toBe(true); 
});