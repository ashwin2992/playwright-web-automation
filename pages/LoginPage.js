// Step 1: Export the class so it can be imported by test scripts
exports.LoginPage = class LoginPage {

    // Step 2: Define a Constructor to initialize the page fixture and locators
    constructor(page) {
        this.page = page; // Store the Playwright page fixture [5, 7]
        
        // Define all locators as class attributes for easy maintenance [4, 8]
        this.loginLink = "#login2"; 
        this.usernameInput = "#loginusername";
        this.passwordInput = "#loginpassword";
        this.loginButton = "//button[normalize-space()='Log in']";
    }

    // Step 3: Define an Action Method for navigation [9]
    async goToLoginPage(url) {
        // Navigates to the specified URL using the stored page fixture
        await this.page.goto(url); 
    }

    // Step 4: Define a Method for the actual login sequence [10, 11]
    async login(username, password) {
        // Click the initial login link to open the modal
        await this.page.locator(this.loginLink).click(); 

        // Enter credentials using the fill() method
        await this.page.locator(this.usernameInput).fill(username);
        await this.page.locator(this.passwordInput).fill(password);

        // Click the final login button
        await this.page.locator(this.loginButton).click();
    }
};