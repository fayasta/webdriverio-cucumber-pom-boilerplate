const { Given, When, Then } = require('cucumber');

const leftMenuPage = require('../../pages/gmailLeftMenu.page.js');
const leftMenu = new leftMenuPage();

const newEmailPage = require('../../pages/gmailNewEmailPage.page.js');
const newEmail = new newEmailPage();

const tabPrimaryPage = require('../../pages/gmailTabPrimary.page.js');
const tabPrimary = new tabPrimaryPage();

const gmailHomePage = require('../../pages/gmailHome.page.js');
const gmailHome = new gmailHomePage();

When(/^I send an email to (.*) with (.*) and (.*)$/, (emailTo, subject, body) => {
    leftMenu.clickOnComposeButton();
    newEmail.writeEmail(emailTo, subject, body);
});

Given(/^I draft an email to (.*) with (.*) and (.*)$/, (emailTo, subject, body) => {
    leftMenu.clickOnComposeButton();
    newEmail.draftEmail(emailTo, subject, body);
});

Given(/^I schedule an email to (.*) with (.*) and (.*)$/, (emailTo, subject, body) => {
    leftMenu.clickOnComposeButton();
    newEmail.scheduleEmail(emailTo, subject, body);
});


Then(/^I discard draft email$/, () => {
    tabPrimary.openEmailFound();
    newEmail.newEmailPageIsDisplayed();
    newEmail.cancelDraftEmailSelected();
    gmailHome.validateEmailWasDeleted();
});

