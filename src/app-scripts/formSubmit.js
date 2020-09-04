function formSubmit(rawData) {
  const currentDate = new Date();

  // Logger.log('Clicked');
  const sId = '18Uof7nIUbrr9AhJn3efwvX_nbVICdbGSxzfXYuouHJg';
  const ss = SpreadsheetApp.openById(sId);
  const ws = ss.getSheetByName('Data');
  let i = 0;

  if (rawData.enteringOption === 'yes') {
    for (i = 0; i < 4; i += 1) {
      ws.appendRow([
        rawData.seedName,
        rawData.firstName,
        rawData.lastName,
        rawData.phoneNumber,
        rawData.emailAddress,
        rawData.paymentType,
        rawData.paymentOption,
        rawData.invitedBy,
        rawData.enteringOption,
        rawData.invitedMember1,
        rawData.invitedMember2,
        currentDate,
      ]);
    }
  } else {
    for (i = 0; i < 2; i += 1) {
      ws.appendRow([
        rawData.seedName,
        rawData.firstName,
        rawData.lastName,
        rawData.phoneNumber,
        rawData.emailAddress,
        rawData.paymentType,
        rawData.paymentOption,
        rawData.invitedBy,
        rawData.enteringOption,
        rawData.invitedMember1,
        rawData.invitedMember2,
        currentDate,
      ]);
    }
  }
}

export default formSubmit;
