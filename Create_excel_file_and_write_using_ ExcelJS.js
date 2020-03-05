	var Excel = require('exceljs');
	var wb = new Excel.Workbook();

describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Excel File Operations', function() {
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		//var wb = new Workbook()
		// create a worksheet
		var worksheet = wb.addWorksheet('My Sheet');
		// navigate to google
		browser.get("https://google.com")
		browser.getTitle().then(function(title){
			worksheet.getRow(1).getCell(1).value = title;
			wb.xlsx.writeFile('./createExample.xlsx');
		})
	});
});