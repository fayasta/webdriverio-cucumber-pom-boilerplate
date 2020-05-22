class gmailTabPrimary {
    constructor() {
      this.primaryTab = './/div[@class="aAy J-KU-KO aIf-aLe"]';
      this.tableEmails = './/*[@id=":2d"]';
      this.firstEmail = './/div[@class="ae4 UI"]//span[@class="bog"]/span';
      this.checkBox = './/div[@class="ae4 UI"]//td[@class="oZ-x3 xY aid"]/div';
      this.starButton = './/div[@class="ae4 UI"]//span[@class="aXw T-KT"]';
      this.starredBody = './/div[@class="aeF"]';
      this.barStatus = './/span[@class="T-Jo J-J5-Ji T-Jo-auq T-Jo-ayH"]';
      this.deleteButton = './/div[@aria-label="Delete"]';
      this.barTab = './/div[@class="aKh aPb"]';
      this.cancelEmailsButton = './/div[@class="T-I J-J5-Ji aFh T-I-ax7 mA T-I-JW"]'
    }
  }
  
module.exports = gmailTabPrimary;
