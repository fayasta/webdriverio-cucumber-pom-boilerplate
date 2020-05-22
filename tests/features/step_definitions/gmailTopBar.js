const { Given, When, Then } = require('cucumber');

const topBarPage = require('../../pages/gmailTopBar.page.js');
const topBar = new topBarPage();


When(/^I logout the email account$/, () => {
    topBar.goToHomePage()
    topBar.logOutApp();
});


Given(/^the (.*) I search the email$/, (subject) => {
    topBar.searchOneEmail(subject)
});