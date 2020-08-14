const doGet = () => {
  const template = HtmlService.createTemplateFromFile('index');
  const html = template.evaluate().setTitle('Main');
  return html;
};

export default doGet;

// const ID = 'Your-SpreadsheetID-goes-here';
// const lock = 'admin';

// const conf = 'config';
// const ss = SpreadsheetApp.openById(ID);

// function doGet(e) {
//   if (Object.keys(e.parameter).length === 0) {
//     let htmlFile;
//     const sheetName = conf;
//     const activeSheet = ss.getSheetByName(sheetName);
//     if (activeSheet !== null) {
//       const values = activeSheet.getDataRange().getValues();
//       for (let i = 0, iLen = values.length; i < iLen; i++) {
//         if (values[i][0] == 'Passcode') {
//           const passCheck = activeSheet.getRange(i + 1, 2).getValues();
//           if (passCheck == lock) {
//             htmlFile = 'Dashboard';
//             activeSheet.getRange(i + 1, 2).clearContent();
//           } else {
//             htmlFile = 'Login';
//           }
//         }
//       }
//     } else {
//       config();
//       htmlFile = 'Login';
//     }
//     // return HtmlService.createHtmlOutputFromFile(htmlFile);
//   }
//   return HtmlService.createHtmlOutputFromFile(htmlFile);
// }

// export default doGet;
