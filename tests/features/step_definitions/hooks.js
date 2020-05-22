var {After, Before} = require('cucumber');

const homePage = require('../../pages/googleGmailHome.page.js');
const home = new homePage();

const topBarPage = require('../../pages/gmailTopBar.page.js');
const topBar = new topBarPage();


Before({tags: "@Functionalities"}, function () {
    home.openwebdriverIOHomepage()
    home.authenticationGoogle()
});


After({tags: "@Functionalities"}, function () {
    topBar.goToHomePage()
    topBar.logOutApp();
});