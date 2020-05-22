const NativePage = require('./native.page.js');
const webdriverIOEmailPageData = require('../files/testData/emailSample.data.js');
const assert = require('assert');

class gmailTabPrimary extends NativePage {

  get webdriverIOTabPrimaryPageElement() {
    return this.getPage('gmailTabPrimary.locators');
  }

  validateGmailDashboardIsDisplayed() {
    const primaryTabLabel = $(this.webdriverIOTabPrimaryPageElement.primaryTab)
    primaryTabLabel.waitForDisplayed();
  }
  
  validateEmailWasFound(emailTitle){
    //Due to the time, this compares with the first email found
    const firstRowSubject = $(this.webdriverIOTabPrimaryPageElement.firstEmail)
    firstRowSubject.waitForDisplayed()
    assert.equal(firstRowSubject.getText(),webdriverIOEmailPageData[emailTitle])
  }

  openEmailFound(){
    //Due to the time, this reads the first email found
    const firstRowSubject = $(this.webdriverIOTabPrimaryPageElement.firstEmail)
    firstRowSubject.waitForDisplayed()
    firstRowSubject.click();
  }

  selectFirstEmail(){
    //Due to the time, this selects the first email
    const firstRowCheckbox = $(this.webdriverIOTabPrimaryPageElement.checkBox)
    firstRowCheckbox.click();
    browser.pause(2000)
  }

  startFirstEmail(){
    const starButton = $(this.webdriverIOTabPrimaryPageElement.starButton)
    starButton.click();
  }

  validateEmailInStarredBox(subject){
    const starredBody = $(this.webdriverIOTabPrimaryPageElement.starredBody)
    starredBody.waitForDisplayed()
    //Due to the time, this compares with the first email found
    const firstRowSubject = $(this.webdriverIOTabPrimaryPageElement.firstEmail)
    firstRowSubject.waitForDisplayed()
    assert.equal(firstRowSubject.getText(),webdriverIOEmailPageData[subject])
  }

  validateEmailInSentBox(subject){
    const starredBody = $(this.webdriverIOTabPrimaryPageElement.starredBody)
    starredBody.waitForDisplayed()
    //Due to the time, this compares with the first email found
    const firstRowSubject = $(this.webdriverIOTabPrimaryPageElement.firstEmail)
    firstRowSubject.waitForDisplayed()
    assert.equal(firstRowSubject.getText(),webdriverIOEmailPageData[subject])
  }

  deleteSelectedEmail(){
  //  const barStatus = $(this.webdriverIOTabPrimaryPageElement.barStatus)
 //   barStatus.waitForDisplayed()
    const starredBody = $(this.webdriverIOTabPrimaryPageElement.starredBody)
    starredBody.waitForDisplayed()
    //Due to the time, this selects the first email
    const deleteButton = $(this.webdriverIOTabPrimaryPageElement.deleteButton)
    deleteButton.waitForDisplayed()
    deleteButton.click();
  }

/*
  cancelEmailSelected(){
    const cancelEmailsButton = $(this.webdriverIOTabPrimaryPageElement.cancelEmailsButton)
    cancelEmailsButton.moveTo()
    cancelEmailsButton.click()
  }
*/
}

module.exports = gmailTabPrimary;
