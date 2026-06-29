const { Given, When, Then } = require("@cucumber/cucumber");
const { chromium, expect } = require("@playwright/test");

let browser;
let page;

Given('I open the source demo login page', async () => {
  // Launching the browser (set headless to true or false)
  browser = await chromium.launch({ headless: false }); 
  const context = await browser.newContext();
  page = await context.newPage();
  
  // Navigating to the URL
  await page.goto('https://www.saucedemo.com/'); 
});

When('I login using a standard user credentials', async () => {
  // Wait for the username field and fill credentials
  await page.waitForSelector('#user-name');
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  
  // Click the login button
  await page.click('#login-button');
});

Then('I should see the product page', async () => {
  // Verify successful login by checking for the "Products" title
  await page.waitForSelector('.title');
  const title = await page.textContent('.title');
  expect(title).toBe('Products');
});