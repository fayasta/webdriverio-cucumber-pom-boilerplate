const NativePage = require('./native.page.js');
const webdriverIOEmailPageData = require('../files/testData/emailSample.data.js');
const assert = require('assert');

class gmailEmailPage extends NativePage {

  get webdriverIOgmailEmailPageElement() {
    return this.getPage('gmailEmailPage.locators');
  }

    validateEmailWasRead(bodyText){
        const emailBodyElement = $(this.webdriverIOgmailEmailPageElement.bodyText)
        emailBodyElement.waitForDisplayed()
        assert.equal(emailBodyElement.getText(),webdriverIOEmailPageData[bodyText])
    }

    emailPageIsDisplayed(){
        const pageBar = $(this.webdriverIOgmailEmailPageElement.pageBar)
        pageBar.waitForDisplayed()
        
        const emailBodyElement = $(this.webdriverIOgmailEmailPageElement.bodyText)
        emailBodyElement.waitForDisplayed()
    }
  
    deleteEmail(){
        const deleteButton = $(this.webdriverIOgmailEmailPageElement.deleteButton)
        deleteButton.waitForDisplayed()
        deleteButton.click()
    }

    cancelScheduledEmail(){
        const cancelSendButton = $(this.webdriverIOgmailEmailPageElement.cancelSendButton)
        cancelSendButton.waitForDisplayed()
        cancelSendButton.click()
    }
}

module.exports = gmailEmailPage;
