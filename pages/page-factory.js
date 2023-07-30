const { loginPage } = require("./loginPage");
const { homePage } = require("./homePage");
class pageFactory {
  constructor() {
    this.loginPage = new loginPage(this.page);
    this.homePage = new homePage(this.page);
  }

}
async function getLocator(locator) {
  
  return await this.context[locator];
}
async function setPage(page) {
  this.context = await getPage(page);
}
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
