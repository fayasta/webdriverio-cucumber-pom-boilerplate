const NativePage = require('./native.page.js');


class gmailHome extends NativePage {

  get webdriverIOgmailHomePageElement() {
    return this.getPage('gmailHome.locators');
  }

  validateEmailWasSent(){
    const successMessage = $(this.webdriverIOgmailHomePageElement.spanSuccessMessage)
    successMessage.waitForDisplayed();
  }

  validateEmailWasDeleted(){
    const deletedSuccessMessage = $(this.webdriverIOgmailHomePageElement.spanDeletedSuccessMessage)
    deletedSuccessMessage.waitForDisplayed();
  }
  validateEmailWasScheduled(){
    const spanScheduledSuccessMessage = $(this.webdriverIOgmailHomePageElement.spanScheduledSuccessMessage)
    spanScheduledSuccessMessage.waitForDisplayed(); 
  }
}

module.exports = gmailHome;
