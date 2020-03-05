var Excel = require('exceljs');
var wb = new Excel.Workbook();

describe('Protractor Typescript Demo', function() 
{
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Excel File Operations', function() 
	{
		// set implicit time to 30 seconds
		browser.manage().timeouts().implicitlyWait(30000);
		// create object for workbook
		//var wb = new Workbook();
		// read xlsx file type
		wb.xlsx.readFile("./WriteExcel.xlsx").then(function()
		{
			//sheet object
    		var sheet = wb.getWorksheet("Sheet1");
			// write to excel sheet
			sheet.getRow(1).getCell(2).value = "Writing to excel sheet"
			console.log(sheet.getRow(1).getCell(2).value);
		})
	})
})