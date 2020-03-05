describe('Code to interact with Angular JS elements', function() {

	it('Perform Action on Different Angular control', function() {

	browser.get('https://material.angular.io/components/paginator/examples');
	
	//Click on Checkbox link and check the Checkbox
	element(by.linkText('Checkbox')).click();
	element(by.className('mat-checkbox-inner-container')).click();
	
	//Click on Inputbox link and Enter the avlue to input box
	element(by.linkText('Input')).click();
	//element(by.id('mat-input-28')).sendKeys('Pasta');
	//element(by.id('mat-input-29')).sendKeys('Good Food');
	
	//Click on Radiobutton link and Select radio button
	element(by.linkText('Radio button')).click();	
	element(by.xpath("//label[@for='mat-radio-2-input']")).click();
	});
	});