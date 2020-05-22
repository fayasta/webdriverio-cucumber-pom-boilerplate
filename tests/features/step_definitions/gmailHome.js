const { Given, When, Then } = require('cucumber');

const gmailHomePage = require('../../pages/gmailHome.page.js');
const gmailHome = new gmailHomePage();


Then(/^I verify that email was sent$/, () => {
     gmailHome.validateEmailWasSent();
 });
 

 Then(/^I verify email was deleted$/, () => {
    gmailHome.validateEmailWasDeleted();
});


Then(/^I verify the message when an email was scheduled$/, () => {
    gmailHome.validateEmailWasScheduled();
});