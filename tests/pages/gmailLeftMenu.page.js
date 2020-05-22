const NativePage = require('./native.page.js');


class gmailLeftMenu extends NativePage {

  get webdriverIOLeftMenuPageElement() {
    return this.getPage('gmailLeftMenu.locators');
  }

  clickOnComposeButton(){
    const composeButton = $(this.webdriverIOLeftMenuPageElement.composeButton)
    composeButton.waitForDisplayed();
    composeButton.click();
  }

  goToStarredBox(){
    const starredBoxButton = $(this.webdriverIOLeftMenuPageElement.starredBoxButton)
    starredBoxButton.click();
  }

  goToSentBox(){
    const sentBoxButton = $(this.webdriverIOLeftMenuPageElement.sentBoxButton)
    sentBoxButton.click();
  }

  goToScheduledBox(){
    const scheduledBoxButton = $(this.webdriverIOLeftMenuPageElement.scheduledBoxButton)
    scheduledBoxButton.click();
  }

  goToDraftBox(){
    const draftBoxButton = $(this.webdriverIOLeftMenuPageElement.draftBoxButton)
    draftBoxButton.click();
  }
}

module.exports = gmailLeftMenu;
