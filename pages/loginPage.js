
class loginPage {
    constructor() {
        this.userName = globalThis.page.locator("//*[@id='username']");
        this.password = globalThis.page.locator('//*[@id="password"]');
        this.submit = globalThis.page.locator("//*[@id='submit']");
        this.notificationMessage = globalThis.page.locator('//*[@id="error"]');
        this.userNameLabel = globalThis.page.locator('//*[@id="username"]//parent::div/label');
        this.passwordLabel = globalThis.page.locator('//*[@id="password"]//parent::div/label');


    }
}
module.exports = { loginPage };