// Step 1: Export the class to make it available for test scripts
exports.CartPage = class CartPage {

    // Step 2: Initialize the page fixture and locators in the constructor
    constructor(page) {
        this.page = page; // Store the Playwright page fixture [4]
        
        // This XPath is designed to match all product names within the cart table [5], [4]
        this.noOfProducts = "//tbody[@id='tbodyid']//td[6]"; 
    }

    // Step 3: Define an action method to verify if a product exists in the cart [3]
    async checkProductInCart(productName) {
        // Use the dollar-dollar ($$) method to retrieve all matching elements as an array [7]
        const products = await this.page.$$(this.noOfProducts);

        // Iterate through each product in the table to find a match [8], [9]
        for (const product of products) {
            // Log and compare the text content of each row with the expected product name [8], [9]
            if (productName === await product.textContent()) {
                return true; // Return true if the product is found [3]
                break; // Exit the loop immediately after finding the match [3]
            }
        }
    }
};