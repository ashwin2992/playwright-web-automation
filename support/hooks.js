const { Before, After } = require("@cucumber/cucumber");
const { chromium } = require("playwright");

Before(async function () {
    console.log("------Loading browser----");
  this.browser = await chromium.launch({
    headless: true
  });

  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function () {
  console.log("------Closing browser----");

  await this.page.close();
  await this.context.close();
  await this.browser.close();

  console.log("----Browser closed.----");
});