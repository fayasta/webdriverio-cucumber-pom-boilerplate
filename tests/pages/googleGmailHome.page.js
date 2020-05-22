const NativePage = require('./native.page.js');
const assert = require('assert');
const webdriverIOHomePageData = require('../files/testData/sampleHome.data.js');

class googleGmailHome extends NativePage {

  get webdriverIOGooglePageElement() {
    return this.getPage('googleGmailHome.locators');
  }

  openwebdriverIOHomepage() {
    browser.url(webdriverIOHomePageData['url']);
  }

  authenticationGoogle() {
    const anotherAccountOption = $(this.webdriverIOGooglePageElement.userAnotherAccountButton)
    const emailField = $(this.webdriverIOGooglePageElement.emailField)

    if (!emailField.isDisplayed()) {
      anotherAccountOption.waitForDisplayed();
      browser.pause(2000)
      anotherAccountOption.waitForClickable(4000)
      anotherAccountOption.click();
    }

    emailField.waitForDisplayed();
    emailField.click();
    emailField.setValue(webdriverIOHomePageData['userEmail']);

    const  nextButton = $(this.webdriverIOGooglePageElement.nextButton)
    nextButton.click();

    const passwordField = $(this.webdriverIOGooglePageElement.passwordField)
    passwordField.waitForDisplayed();
    passwordField.click();
    passwordField.setValue(webdriverIOHomePageData['userPassword']);

    nextButton.waitForClickable(4000)
    nextButton.click()
   
  }

  validateGmailHomeIsDisplayed() {
    const googleHomeLogoElement = $(this.webdriverIOGooglePageElement.googleHomeLogo)
  //  googleHomeLogoElement.waitForDisplayed();
    assert.equal(googleHomeLogoElement.waitForDisplayed(),true)    
  }


}

module.exports = googleGmailHome;
