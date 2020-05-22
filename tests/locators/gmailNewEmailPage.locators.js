class gmailNewEmailPage {
    constructor() {
      this.emailToField = '//*[@name="to"]';
      this.subjectField = '//*[@name="subjectbox"]';
      this.bodyField = 'div.Am.Al.editable.LW-avf.tS-tW';
      this.sendButton = 'div.T-I.J-J5-Ji.aoO.v7.T-I-atl.L3';
      this.closeSaveButton = 'img.Ha';
      this.saveMoreOptions = '//div[@class="T-I J-J5-Ji hG T-I-atl L3"]';
      this.scheduleSendButton = '//div[@class="J-N yr"]'; 
      this.dayExample = '//div[@class="ZkmAeb"]/div[2]';
      this.discardButton = 'div.og.T-I-J3';
      this.newEmailContainer = 'div.nH.Hd';
    }
  }
  
  module.exports = gmailNewEmailPage;
   