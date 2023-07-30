const {Given, When, Then} = require('@cucumber/cucumber')
// import expect for assertion
const {setPage }= require('../pages/page-factory')

When('I am on page {string}',async function (page) {
    await setPage(page);
 });