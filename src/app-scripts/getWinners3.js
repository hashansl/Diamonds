function getStage3WinnerData() {
  const sId = '18Uof7nIUbrr9AhJn3efwvX_nbVICdbGSxzfXYuouHJg';
  const ss = SpreadsheetApp.openById(sId);
  const ws = ss.getSheetByName('Stage4Combinations');

  let A;

  if (ws.getLastRow() > 0) {
    const numberOfRows = ws.getLastRow();
    A = ws.getRange(1, 1, numberOfRows, 15).getValues();
  } else {
    A = [['-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', '-', 'No Winner']];
  }

  return A;
}

export default getStage3WinnerData;
