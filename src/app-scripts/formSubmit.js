function formSubmit(rawData) {
  const currentDate = new Date();

  // Logger.log('Clicked');
  const sId = '18Uof7nIUbrr9AhJn3efwvX_nbVICdbGSxzfXYuouHJg';
  const ss = SpreadsheetApp.openById(sId);
  const ws = ss.getSheetByName('Data');

  ws.appendRow([
    rawData.diamondName,
    rawData.phoneNumber,
    rawData.emailAddress,
    rawData.paymentType,
    currentDate,
  ]);
}

export default formSubmit;
