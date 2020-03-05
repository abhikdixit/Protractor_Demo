//	import { browser} from 'protractor'
//import {Workbook, Row, Cell} from 'exceljs'
	var Excel = require('exceljs');
		var wb = new Excel.Workbook();

		describe('Protractor Typescript Demo', function() 
		{
			browser.ignoreSynchronization = false; // for non-angular websites
			it('Excel File Operations', function() 
			{
				// set implicit time to 30 seconds
				//browser.manage().timeouts().implicitlyWait(5000);
				// create object for workbook
				//var wb = new Workbook();
				// read xlsx file type
				browser.manage().window().maximize();
				//browser.get('https://material.angular.io/components/paginator/examples');
				wb.xlsx.readFile("./Exceljs_App_URL.xlsx").then(function()
				{
					//sheet object
					let sheet = wb.getWorksheet("Sheet1");
					//row objct
					let rowObject = sheet.getRow(3);
					// cell object
					let cellObject = rowObject.getCell(2);
					//print
					console.log(cellObject.value);
					//use the cell value as url for navigation
					//browser.get('https://material.angular.io/components/paginator/examples');
					browser.get(cellObject.toString());
					console.log("URL Launched");
					browser.manage().timeouts().implicitlyWait(30000);
					
					element(by.linkText("Checkbox")).click();
					element(by.className("mat-checkbox-inner-container")).click();
				})

			})
		})

		