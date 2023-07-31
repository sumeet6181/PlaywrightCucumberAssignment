const {Given, When, Then} = require('@cucumber/cucumber')

const {setPage }= require('../pages/page-factory')
//Step definitions
When('I am on page {string}',async function (page) {
    await setPage(page);
 });