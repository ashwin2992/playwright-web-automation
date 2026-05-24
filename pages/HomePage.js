// Step 1: Export the class to make it accessible to test scripts
exports.HomePage = class HomePage {

    // Step 2: Define the Constructor to initialize the page fixture and locators
    constructor(page) {
        this.page = page; // Store the page fixture received from the test [3]
        
        // Define attributes/locators for the home page [4], [5]
        this.productList = "//div[@id='tbodyid']//h4/a"; // XPath matching all product names
        this.addToCartBtn = "//a[normalize-space()='Add to cart']"; // "Add to cart" button
        this.cartLink = "#cartur"; // ID for the Cart menu link
    }

    // Step 3: Define an Action Method to find and add a specific product to the cart
    async addProductToCart(productName) {
        // Capture all product elements matching the locator into an array [6]
        const products = await this.page.$$(this.productList);

        // Iterate through the products to find the one matching the requested name [6], [7]
        for (const product of products) {
            if (productName === await product.textContent()) {
                await product.click(); // Click the matching product [7]
                break; // Exit the loop once found
            }
        }

        // Handle the 'Added' alert dialog that appears after clicking Add to Cart [8], [9]
        this.page.on('dialog', async dialog => {
            if (dialog.message().includes('added')) {
                await dialog.accept(); // Close the alert [9]
            }
        });

        // Click the final "Add to cart" button on the product page [9]
        await this.page.locator(this.addToCartBtn).click();
    }

    // Step 4: Define a Method to navigate to the Cart page [10], [11]
    async goToCart() {
        await this.page.locator(this.cartLink).click();
    }
};