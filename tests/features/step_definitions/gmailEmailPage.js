const { Given, When, Then } = require('cucumber');

const emailPage = require('../../pages/gmailEmailPage.page.js');
const email = new emailPage();

const tabPrimaryPage = require('../../pages/gmailTabPrimary.page.js');
const tabPrimary = new tabPrimaryPage();

const gmailHomePage = require('../../pages/gmailHome.page.js');
const gmailHome = new gmailHomePage();

const newEmailPage = require('../../pages/gmailNewEmailPage.page.js');
const newEmail = new newEmailPage();


Then(/^I read the email (.*)$/, (bodyText) => {
    tabPrimary.openEmailFound();
    email.emailPageIsDisplayed()
    email.validateEmailWasRead(bodyText);
});

When(/^I delete the email found$/, () => {
    email.deleteEmail();
});


Then(/^I delete selected email$/, () => {
    tabPrimary.openEmailFound()
    email.deleteEmail();
    gmailHome.validateEmailWasDeleted();
});


Then(/^I cancel scheduled email$/, () => {
    tabPrimary.openEmailFound()
    email.emailPageIsDisplayed()
    email.cancelScheduledEmail()
    newEmail.newEmailPageIsDisplayed();
    newEmail.cancelDraftEmailSelected();
    gmailHome.validateEmailWasDeleted();
});
  
