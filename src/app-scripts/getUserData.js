function getUserData() {
  const sId = '18Uof7nIUbrr9AhJn3efwvX_nbVICdbGSxzfXYuouHJg';
  const ss = SpreadsheetApp.openById(sId);
  const ws = ss.getSheetByName('Data');

  const list = ws.getRange(2, 1, ws.getRange('A1').getDataRegion().getLastRow() - 1, 1).getValues();
  const A = list.map(function (r) {
    return r[0];
  });
  Logger.log('Executed');
  Logger.log(list);
  Logger.log(A);
  return A;
}

export default getUserData;
