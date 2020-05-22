var {After, Before} = require('cucumber');

const homePage = require('../../pages/googleGmailHome.page.js');
const home = new homePage();

const topBarPage = require('../../pages/gmailTopBar.page.js');
const topBar = new topBarPage();


/*
const tabPrimaryPage = require('../../pages/gmailTabPrimary.page.js');
const tabPrimary = new tabPrimaryPage();

const newEmailPage = require('../../pages/gmailNewEmailPage.page.js');
const newEmail = new newEmailPage();

const gmailHomePage = require('../../pages/gmailHome.page.js');
const gmailHome = new gmailHomePage();

const emailPage = require('../../pages/gmailEmailPage.page.js');
const email = new emailPage();
*/


Before(function () {
  // This hook will be executed before all scenarios
});

Before({tags: "@Functionalities"}, function () {
    home.openwebdriverIOHomepage()
    home.authenticationGoogle()
});


Before({tags: "@foo or @bar"}, function () {
  // This hook will be executed before scenarios tagged with @foo or @bar
});

// You can use the following shorthand when only specifying tags
Before("@foo", function () {
  // This hook will be executed before scenarios tagged with @foo
});

/*
After({tags: "@ActionBox"}, function () {
    tabPrimary.openEmailFound()
    email.deleteEmail();
    gmailHome.validateEmailWasDeleted();
    topBar.goToHomePage()
    topBar.logOutApp();
});

After({tags: "@DraftBox"}, function () {
    tabPrimary.openEmailFound();
    newEmail.newEmailPageIsDisplayed();
    newEmail.cancelDraftEmailSelected();
    gmailHome.validateEmailWasDeleted();
    topBar.goToHomePage()
    topBar.logOutApp();
});

After({tags: "@ScheduledBox"}, function () {
    tabPrimary.openEmailFound()
    email.emailPageIsDisplayed()
    email.cancelScheduledEmail()
    newEmail.newEmailPageIsDisplayed();
    newEmail.cancelDraftEmailSelected();
    gmailHome.validateEmailWasDeleted();
    topBar.goToHomePage()
    topBar.logOutApp();
});
*/
After({tags: "@Functionalities"}, function () {
    topBar.goToHomePage()
    topBar.logOutApp();
});