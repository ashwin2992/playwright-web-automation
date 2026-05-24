// Step 1: Import the required modules from the Playwright test package
const { test, expect } = require('@playwright/test'); [1, 6]

// Step 2: Define the test block with a title and an async anonymous function
test('Multiple Locators Test', async ({ page }) => { [7, 8]

    // Step 3: Navigate to the application URL
    await page.goto('https://www.demoblaze.com/index.html'); [9]

  // 1. Locating multiple links using a tag name (anchor tag 'a')
const links = await page.$$('a'); [5]

// 2. Iterating through the array to extract text
for (const link of links) { [9]
    const linkText = await link.textContent(); // 'textContent' retrieves the visible text [12]
    console.log(linkText); [13]
}

// 3. Locating specific product names using an XPath
const products = await page.$$("//div[@id='tbodyid']//h4/a"); [10, 14]

for (const product of products) { [11]
    const productName = await product.textContent(); [15]
    console.log(productName); [15]
}

    // Step 9: Close the page to finalize the test
    await page.close(); [20]
});


