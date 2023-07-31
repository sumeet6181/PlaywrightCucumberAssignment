const { loginPage } = require("./loginPage");
const { homePage } = require("./homePage");

class pageFactory {
  // Constructor is initializing the pages class with passing global Page
  constructor() {
    this.loginPage = new loginPage(this.page);
    this.homePage = new homePage(this.page);
  }

}
//Get Locator function is fetching a locator from page classes
async function getLocator(locator) {
  return await this.context[locator];
}
// SetPage method setting a page on which runner currently performing a action
async function setPage(page) {
  this.context = await getPage(page);
}

//getPage is providing initialized page to setPage method
async function getPage(name) {
  const pageObjects = new pageFactory();
  switch (name) {
    case "Login Page":
      return await pageObjects.loginPage;
    case "Home Page":
      return await pageObjects.homePage;
  }
}
module.exports = { pageFactory, setPage, getLocator };
