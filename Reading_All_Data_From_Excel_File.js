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
			wb.xlsx.readFile("./TestAllData.xlsx").then(function()
			{
				//sheet object
				let sheet = wb.getWorksheet("Sheet1");

				let totalRowsIncludingEmptyRows = sheet.rowCount
				console.log("total nuumber of rows : "+totalRowsIncludingEmptyRows)
				// loop till end of row
				for(let i=1; i<=totalRowsIncludingEmptyRows; i++)
				{
					let cellValue = sheet.getRow(i).getCell(2).toString();
					console.log("Column B value from the row '"+i+"' : "+ cellValue)
				}
			});
		});
	});