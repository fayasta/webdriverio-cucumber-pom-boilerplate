const { Given, When, Then } = require('cucumber');

const homePage = require('../../pages/googleGmailHome.page.js');
const home = new homePage();


Given(/^I am at google home page$/, () => {
    home.openwebdriverIOHomepage()
});

When(/^I authenticate to my gmail account successfully$/, () => {
    home.authenticationGoogle()
});

Then(/^I should get redirected to the google home page$/, () => {
    home.validateGmailHomeIsDisplayed()
});




