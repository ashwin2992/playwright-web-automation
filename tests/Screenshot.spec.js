import { test, expect } from '@playwright/test';
import console from 'node:console';

test('page screenshot', async ({ page }) => {
    await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'HomePage.png'})
    console.log("this is site test is loaded ")
});

test('full page screenshot', async ({ page }) => {
   await page.goto('https://www.demoblaze.com/index.html')
    await page.screenshot({path: 'tests/screenshots/'+Date.now()+'FullPage.png',fullPage:true})
    console.log("this is site test is loaded with full screenshot")
});

test('locator screenshot', async ({ page }) => {
   await page.goto('https://www.demoblaze.com/index.html')
    //await page.screenshot({path: 'tests/screenshots/'+Date.now()+'Locator.png'})
    await page.getByRole('link', { name: 'Monitors' }).screenshot({path: 'tests/screenshots/'+Date.now()+'Locator.png'})
    console.log("this is site test is loaded with locator ss")
});