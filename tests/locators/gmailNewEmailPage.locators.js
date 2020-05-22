class gmailNewEmailPage {
    constructor() {
      this.emailToField = '//*[@name="to"]';
      this.subjectField = '//*[@name="subjectbox"]';
      this.bodyField = './/div[@class="Am Al editable LW-avf tS-tW"]';
      this.sendButton = './/div[@class="T-I J-J5-Ji aoO v7 T-I-atl L3"]';
      this.closeSaveButton = './/img[@class="Ha"]';
      this.saveMoreOptions = '//div[@class="T-I J-J5-Ji hG T-I-atl L3"]';
      this.scheduleSendButton = '//div[@class="J-N yr"]'; 
      this.dayExample = '//div[@class="ZkmAeb"]/div[2]';
      this.discardButton = 'div.og.T-I-J3';
      this.bodyField = './/div[@class="Am Al editable LW-avf tS-tW"]';
      this.newEmailContainer = './/div[@class="nH Hd"]';
    }
  }
  
  module.exports = gmailNewEmailPage;
   