const NativePage = require('./native.page.js');
const webdriverIOEmailPageData = require('../files/testData/emailSample.data.js');

class gmailTopBar extends NativePage {

  get webdriverIOTopBarPageElement() {
    return this.getPage('gmailTopBar.locators');
  }

  goToHomePage(){
    const gmailLogo = $(this.webdriverIOTopBarPageElement.gmailLogo)
    gmailLogo.waitForDisplayed()
    gmailLogo.click()
    
    const primaryTabElement = $(this.webdriverIOTopBarPageElement.primaryTabElement)
    primaryTabElement.waitForDisplayed()
  }

  logOutApp(){
    browser.pause(2000)
    const profileButton = $(this.webdriverIOTopBarPageElement.userIcon)
    profileButton.waitForDisplayed()
    profileButton.click()

    const exitButton = $(this.webdriverIOTopBarPageElement.exitButton)
    exitButton.waitForDisplayed()
    exitButton.click()

  }

  searchOneEmail(emailSubject){
    const searchField = $(this.webdriverIOTopBarPageElement.searchField)
    searchField.waitForDisplayed()
    searchField.click()
    searchField.setValue(webdriverIOEmailPageData[emailSubject])

    const searchIcon = $(this.webdriverIOTopBarPageElement.searchIcon)
    searchIcon.waitForDisplayed()
    searchIcon.click()
  }


}

module.exports = gmailTopBar;
