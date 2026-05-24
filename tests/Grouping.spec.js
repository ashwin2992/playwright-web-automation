// Step 1: Import test and expect functions from the playwright test module
const { test, expect } = require('@playwright/test'); // [3]

// Optional: Global Hooks (execute for every test in the file)
test.beforeAll(async () => {
    console.log('This is beforeAll hook...'); // [4, 5]
});

test.afterAll(async () => {
    console.log('This is afterAll hook...'); // [5]
});

// Step 2: Use a 'describe' block to create a logical group (e.g., Group 1)
test.describe.only('Group 1', () => { // [6]

    test('Test 1', async ({ page }) => { // [7]
        console.log('This is test 1 from Group 1'); // [8]
    });

    test('Test 2', async ({ page }) => {
        console.log('This is test 2 from Group 1'); // [8]
    });

});

// Step 3: Create another group (e.g., Group 2)
test.describe('Group 2', () => { // [9]

    test('Test 3', async ({ page }) => {
        console.log('This is test 3 from Group 2'); // [9]
    });

    test('Test 4', async ({ page }) => {
        console.log('This is test 4 from Group 2'); // [9]
    });

});

// Step 4: Selective Execution (Optional)
// Use .only to execute ONLY this group: test.describe.only('Login Tests', () => { ... }); [10]
// Use .skip to SKIP this entire group: test.describe.skip('Registration Tests', () => { ... }); [11]