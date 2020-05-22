const NativePage = require('./native.page.js');
const assert = require('assert');

class gmailHome extends NativePage {

  get webdriverIOgmailHomePageElement() {
    return this.getPage('gmailHome.locators');
  }

  validateEmailWasSent(){
    const successMessage = $(this.webdriverIOgmailHomePageElement.spanSuccessMessage)
    successMessage.waitForDisplayed()
    assert.equal(successMessage.waitForDisplayed(),true)  
  }

  validateEmailWasDeleted(){
    const deletedSuccessMessage = $(this.webdriverIOgmailHomePageElement.spanDeletedSuccessMessage)
    deletedSuccessMessage.waitForDisplayed()
    assert.equal(deletedSuccessMessage.waitForDisplayed(),true)  
  }

  validateEmailWasScheduled(){
    const spanScheduledSuccessMessage = $(this.webdriverIOgmailHomePageElement.spanScheduledSuccessMessage)
    spanScheduledSuccessMessage.waitForDisplayed()
    assert.equal(spanScheduledSuccessMessage.waitForDisplayed(),true)  
  }
}

module.exports = gmailHome;
