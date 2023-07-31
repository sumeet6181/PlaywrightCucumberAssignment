const {
  Before,
  BeforeAll,
  AfterAll,
  After,
  AfterStep,
  setDefaultTimeout,
} = require("@cucumber/cucumber");
const { chromium } = require("@playwright/test");
const { Status } = require("@cucumber/cucumber");
//default timeout to find a element on page
setDefaultTimeout(60 * 1000);
this.pageObjects;
// launching browser
BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: true,
    slowMo: 1000,
  });
});

// opening a page in browser
Before({ tags: "@web" }, async function () {
  global.context = await global.browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  // declaring as global so can be use in any file
  globalThis.page = await global.context.newPage();
  await globalThis.page.goto(this.parameters.Url);
});

// Cleanup after each scenario
After({ tags: "@web" }, async function () {
  await globalThis.page.close();

});
// Closing a browser after suite
AfterAll({tags:"@web"}, async function(){

    await global.browser.close();
})

// Taking a screenshot on step failure
AfterStep(async function ({ result }) {
  if (result.Status === Status.FAILED) {
    await globalThis.page.screenshot({ path: "Reports/screenshots/screenshot.png" });
    
  }
});
