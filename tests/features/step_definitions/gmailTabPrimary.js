const { Given, When, Then } = require('cucumber');

const tabPrimaryPage = require('../../pages/gmailTabPrimary.page.js');
const tabPrimary = new tabPrimaryPage();

const leftMenuPage = require('../../pages/gmailLeftMenu.page.js');
const leftMenu = new leftMenuPage();


Then(/^I should get redirected to the Gmail Dashboard$/, () => {
    tabPrimary.validateGmailDashboardIsDisplayed();
});

Then(/^I verify the email (.*) was found$/, (subject) => {
    tabPrimary.validateEmailWasFound(subject);
});

Then(/^I star the email created$/, () => {
    tabPrimary.startFirstEmail();
});

Then(/^I verify that email (.*) should be at Starred box$/, (subject) => {
    leftMenu.goToStarredBox()
    tabPrimary.validateEmailInStarredBox(subject)
});

Then(/^I verify the email (.*) sent should be at Sent Box$/, (subject) => {
    leftMenu.goToSentBox()
    tabPrimary.validateEmailInSentBox(subject)
});

Then(/^I verify the email (.*) was sent to Draft box$/, (subject) => {
    leftMenu.goToDraftBox()
    tabPrimary.validateEmailInSentBox(subject)
});


Then(/^I verify the email (.*) was sent to Scheduled box$/, (subject) => {
    leftMenu.goToScheduledBox()
    tabPrimary.validateEmailInSentBox(subject)
});


