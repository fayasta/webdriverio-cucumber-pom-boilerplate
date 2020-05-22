const NativePage = require('./native.page.js');
const webdriverIONewEmailPageData = require('../files/testData/emailSample.data.js');

class gmailNewEmailPage extends NativePage {

  get webdriverIOEmailPageElement() {
    return this.getPage('gmailNewEmailPage.locators');
  }

  newEmailPageIsDisplayed(){
    browser.pause(2000)
    const newEmailContainer = $(this.webdriverIOEmailPageElement.newEmailContainer)
    newEmailContainer.waitForDisplayed();
  }

  writeEmail(emailTo, subject, body){
    const emailToField = $(this.webdriverIOEmailPageElement.emailToField)
    emailToField.waitForDisplayed();
    emailToField.click();
    emailToField.setValue(webdriverIONewEmailPageData[emailTo]);

    const subjectField = $(this.webdriverIOEmailPageElement.subjectField)
    subjectField.waitForDisplayed();
    subjectField.click();
    subjectField.setValue(webdriverIONewEmailPageData[subject]);

    const emailBody = $(this.webdriverIOEmailPageElement.bodyField)
    emailBody.waitForDisplayed();
    emailBody.click();
    emailBody.setValue(webdriverIONewEmailPageData[body]);

    const sendButton = $(this.webdriverIOEmailPageElement.sendButton)
    sendButton.isClickable();
    sendButton.click();
  }

  draftEmail(emailTo, subject, body){
    const emailToField = $(this.webdriverIOEmailPageElement.emailToField)
    emailToField.waitForDisplayed();
    emailToField.click();
    emailToField.setValue(webdriverIONewEmailPageData[emailTo]);

    const subjectField = $(this.webdriverIOEmailPageElement.subjectField)
    subjectField.waitForDisplayed();
    subjectField.click();
    subjectField.setValue(webdriverIONewEmailPageData[subject]);

    const emailBody = $(this.webdriverIOEmailPageElement.bodyField)
    emailBody.waitForDisplayed();
    emailBody.click();
    emailBody.setValue(webdriverIONewEmailPageData[body]);

    const closeSaveButton = $(this.webdriverIOEmailPageElement.closeSaveButton)
    closeSaveButton.isClickable();
    closeSaveButton.click();
    browser.pause(3000)
  }

  scheduleEmail(emailTo, subject, body){
    const emailToField = $(this.webdriverIOEmailPageElement.emailToField)
    emailToField.waitForDisplayed();
    emailToField.click();
    emailToField.setValue(webdriverIONewEmailPageData[emailTo]);

    const subjectField = $(this.webdriverIOEmailPageElement.subjectField)
    subjectField.waitForDisplayed();
    subjectField.click();
    subjectField.setValue(webdriverIONewEmailPageData[subject]);

    const emailBody = $(this.webdriverIOEmailPageElement.bodyField)
    emailBody.waitForDisplayed();
    emailBody.click();
    emailBody.setValue(webdriverIONewEmailPageData[body]); 

    const saveMoreOptions = $(this.webdriverIOEmailPageElement.saveMoreOptions)
    saveMoreOptions.waitForDisplayed();
    saveMoreOptions.click();

    const scheduleSendButton = $(this.webdriverIOEmailPageElement.scheduleSendButton)
    scheduleSendButton.waitForDisplayed();
    scheduleSendButton.click();

    const dayExample = $(this.webdriverIOEmailPageElement.dayExample)
    dayExample.waitForDisplayed();
    dayExample.click();
  }

  cancelDraftEmailSelected(){
    const discardButton = $(this.webdriverIOEmailPageElement.discardButton)
    discardButton.waitForClickable(4000)
    discardButton.waitForDisplayed();
    discardButton.click();
  }
}

module.exports = gmailNewEmailPage;
