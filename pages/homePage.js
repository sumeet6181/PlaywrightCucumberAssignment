
class homePage{
    constructor()
        {
            this.homePageMessage = globalThis.page.locator("//h1[@class='post-title']");
            this.logout = globalThis.page.locator("//a[text()='Log out']");
            
        }
}
module.exports = {homePage};