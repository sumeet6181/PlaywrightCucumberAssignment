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
const { pageFactory } = require("../../pages/page-factory");
const { request } = require("@playwright/test");

setDefaultTimeout(60 * 1000);
this.pageObjects;
BeforeAll(async function () {
  global.browser = await chromium.launch({
    headless: false,
    slowMo: 1000,
  });
});


Before({ tags: "@web" }, async function () {
  global.context = await global.browser.newContext({
    viewport: { width: 1920, height: 1080 },
  });
  globalThis.page = await global.context.newPage();
  await globalThis.page.goto(this.parameters.Url);
});

// Cleanup after each scenario
After({ tags: "@web" }, async function () {
  await globalThis.page.close();

});
AfterAll({tags:"@web"}, async function(){

    await global.browser.close();
})

AfterStep(async function ({ result }) {
  if (result.Status === Status.FAILED) {
    await globalThis.page.screenshot({ path: "Reports/screenshots/screenshot.png" });
    
  }
});
