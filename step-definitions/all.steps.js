const { Given, When, Then } = require("@cucumber/cucumber");
const { expect } = require("@playwright/test");
const { getLocator } = require("../pages/page-factory");
// Step definitions
When("I type {string} into {string}", async function (data, element) {
  var location = await getLocator(element);
  await location.fill(data);
});

When("I click {string}", async function (element) {
  var location = await getLocator(element);
  await location.click(element);
});

Then("I see text {string} on {string}", async function (text, element) {
  var errorMessage = await getLocator(element);
  expect((await errorMessage.innerText()).valueOf()).toEqual(text);;
});

Then("I see field {string} enable", async function (element) {
  var locator = await getLocator(element);
  expect(locator).toBeEditable;
});

Then("I see field {string} clickable", async function (element) {
  var locator = await getLocator(element);
  expect(locator).toBeEnabled;
});
