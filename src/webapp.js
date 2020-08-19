const sId = '18Uof7nIUbrr9AhJn3efwvX_nbVICdbGSxzfXYuouHJg';
const Route = {};

Route.path = function (route, callback) {
  Route[route] = callback;
};

function render(file, argsObject) {
  const tmp = HtmlService.createTemplateFromFile(file);
  if (argsObject) {
    const keys = Object.keys(argsObject);

    keys.forEach(function (key) {
      tmp[key] = argsObject[key];
    });
  }
  const output = tmp.evaluate().addMetaTag('viewport', 'width=device-width,initial-scale=1.0');
  output.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  return output;
}

function loadForm() {
  const ss = SpreadsheetApp.openById(sId);
  const ws = ss.getSheetByName('Data');

  const list = ws.getRange(2, 1, ws.getRange('A1').getDataRegion().getLastRow() - 1, 1).getValues();
  const htmlListArray = list.map(function (r) {
    return r[0];
  });
  Logger.log(htmlListArray);
  return render('form', { list: htmlListArray });
}

function loadSarahsSeeds() {
  return render('sarahsSeeds');
}

function loadjewelsPickaxes() {
  return render('jewelsPickaxes');
}

function loadsarahsFlowers() {
  return render('sarahsFlowers');
}

function loadjewelsDiamonds() {
  return render('jewelsDiamonds');
}

const doGet = (e) => {
  Route.path('form', loadForm);
  Route.path('sarahsseeds', loadSarahsSeeds);
  Route.path('jewelspickaxes', loadjewelsPickaxes);
  Route.path('sarahsflowers', loadsarahsFlowers);
  Route.path('jewelsdiamonds', loadjewelsDiamonds);

  if (Route[e.parameters.v]) {
    return Route[e.parameters.v]();
  }
  return render('index');
};

export default doGet;
