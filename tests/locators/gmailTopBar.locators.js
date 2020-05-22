class gmailTopBar {
  constructor() {
    this.userIcon = './/a[@class="gb_D gb_Ra gb_i"]';
    this.exitButton = './/*[@id="gb_71"]';
    this.searchField = './/input[@class="gb_nf"]';
    this.searchIcon = './/button[@class="gb_wf gb_xf"]';
    this.actionBar = './/div[@class="D E G-atb aCh"]';
    this.deleteOption = './/div[@class="T-I J-J5-Ji nX T-I-ax7 T-I-Js-Gs mA"]';
    this.gmailLogo = './/img[@class="gb_ua"]';
    this.primaryTabElement = './/div[@class="aAy J-KU-KO aIf-aLe"]';
  }
}

module.exports = gmailTopBar;
