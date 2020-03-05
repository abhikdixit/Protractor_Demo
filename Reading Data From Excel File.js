var XLSX=require('xlsx');
var workbook=XLSX.readFile('./TestData.xlsx');

/* Get worksheet */
var worksheet = workbook.Sheets['Sheet1'];

//var first_sheet_name = workbook.SheetNames[0];
var address_of_cell1 = 'B1';
var address_of_cell2 = 'B2';
var address_of_cell3 = 'B3';

console.log(address_of_cell1);



/* Find desired cell */
var desired_cell1 = worksheet[address_of_cell1];
var desired_cell2 = worksheet[address_of_cell2];
var desired_cell3 = worksheet[address_of_cell3];

/* Get the value */
var desired_value1 = desired_cell1.v;
var desired_value2 = desired_cell2.v;
var desired_value3 = desired_cell3.v;

console.log(desired_value1);
console.log(desired_value2);
console.log(desired_value3);

describe('Angular Application', function() {
	it('Checkbox Functionality', function() {
		//browser.ignoreSynchronization = true;
		browser.get(desired_value1);
		browser.driver.manage().window().maximize(); 
		
		//Click on Checkbox link and check the Checkbox
		element(by.linkText(desired_value2)).click();
		element(by.className(desired_value3)).click();

	});
});