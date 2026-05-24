# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: PomTest.spec.js >> POM Test Flow
- Location: tests\PomTest.spec.js:7:5

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

Expected: true
Received: undefined
```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - text:             
  - navigation [ref=e2]:
    - generic [ref=e3]:
      - link "PRODUCT STORE" [ref=e4] [cursor=pointer]:
        - /url: index.html
        - img [ref=e5]
        - text: PRODUCT STORE
      - list [ref=e7]:
        - listitem [ref=e8]:
          - link "Home (current)" [ref=e9] [cursor=pointer]:
            - /url: index.html
            - text: Home
            - generic [ref=e10]: (current)
        - listitem [ref=e11]:
          - link "Contact" [ref=e12] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e13]:
          - link "About us" [ref=e14] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e15]:
          - link "Cart" [ref=e16] [cursor=pointer]:
            - /url: "#"
        - listitem
        - listitem [ref=e17]:
          - link "Log out" [ref=e18] [cursor=pointer]:
            - /url: "#"
        - listitem [ref=e19]:
          - link "Welcome pavanol" [ref=e20] [cursor=pointer]:
            - /url: "#"
        - listitem
  - generic [ref=e22]:
    - generic [ref=e23]:
      - heading "Products" [level=2] [ref=e24]
      - table [ref=e26]:
        - rowgroup [ref=e27]:
          - row "Pic Title Price x" [ref=e28]:
            - columnheader "Pic" [ref=e29]
            - columnheader "Title" [ref=e30]
            - columnheader "Price" [ref=e31]
            - columnheader "x" [ref=e32]
        - rowgroup [ref=e33]:
          - row "Samsung galaxy s6 360 Delete" [ref=e34]:
            - cell [ref=e35]:
              - img [ref=e36]
            - cell "Samsung galaxy s6" [ref=e37]
            - cell "360" [ref=e38]
            - cell "Delete" [ref=e39]:
              - link "Delete" [ref=e40] [cursor=pointer]:
                - /url: "#"
          - row "Nexus 6 650 Delete" [ref=e41]:
            - cell [ref=e42]:
              - img [ref=e43]
            - cell "Nexus 6" [ref=e44]
            - cell "650" [ref=e45]
            - cell "Delete" [ref=e46]:
              - link "Delete" [ref=e47] [cursor=pointer]:
                - /url: "#"
    - generic [ref=e48]:
      - heading "Total" [level=2] [ref=e49]
      - heading "1010" [level=3] [ref=e52]
      - button "Place Order" [ref=e53]
  - generic [ref=e55]:
    - generic [ref=e58]:
      - heading "About Us" [level=4] [ref=e59]
      - paragraph [ref=e60]: We believe performance needs to be validated at every stage of the software development cycle and our open source compatible, massively scalable platform makes that a reality.
    - generic [ref=e63]:
      - heading "Get in Touch" [level=4] [ref=e64]
      - paragraph [ref=e65]: "Address: 2390 El Camino Real"
      - paragraph [ref=e66]: "Phone: +440 123456"
      - paragraph [ref=e67]: "Email: demo@blazemeter.com"
    - heading "PRODUCT STORE" [level=4] [ref=e71]:
      - img [ref=e72]
      - text: PRODUCT STORE
  - contentinfo [ref=e73]:
    - paragraph [ref=e74]: Copyright © Product Store
```

# Test source

```ts
  1  | import { test, expect } from '@playwright/test'; // [5, 6]
  2  | // Step 1: Import the external Page Object classes [7, 8]
  3  | import { LoginPage } from '../pages/loginPage';
  4  | import { HomePage } from '../pages/homePage';
  5  | import { CartPage } from '../pages/cartPage';
  6  | 
  7  | test('POM Test Flow', async ({ page }) => { // [9]
  8  | 
  9  |     // Step 2: Login Page interactions [9]
  10 |     // Create an object of the LoginPage and pass the page fixture to the constructor [9, 10]
  11 |     const login = new LoginPage(page);
  12 |     await login.goToLoginPage('https://www.demoblaze.com/index.html'); // [11, 12]
  13 |     await login.login('pavanol', 'test@123'); // [3, 10]
  14 | 
  15 |     // Step 3: Home Page interactions [13, 14]
  16 |     // Create an object of the HomePage to select a specific product [13]
  17 |     const home = new HomePage(page);
  18 |     await page.waitForTimeout(3000); // Optional wait for page load [15, 16]
  19 |     await home.addProductToCart('Nexus 6'); // Add the matching product to cart [14, 17]
  20 |     await home.goToCart(); // Navigate to the cart view [15, 16]
  21 | 
  22 |     // Step 4: Cart Page interactions and Assertions [18, 19]
  23 |     // Create an object of the CartPage to verify the product exists in the table [18]
  24 |     const cart = new CartPage(page);
  25 |     await page.waitForTimeout(3000);
  26 |     
  27 |     // Call the validation method which returns true if the product name is found [19, 20]
  28 |     const status = await cart.checkProductInCart('Nexus 6');
  29 |     
  30 |     // Perform a hard assertion on the returned status [21]
> 31 |     expect(status).toBe(true); 
     |                    ^ Error: expect(received).toBe(expected) // Object.is equality
  32 | });
```