describe('Code to interact with Angular JS elements', function() {

// beforeEach function is like - Pre Test, which will be called for each it block
	 beforeEach(function() {
		 console.log('Before Each Called');
		 browser.get('https://material.angular.io/components/paginator/examples');
		 });
	
	it('Perform Action on Different Angular control', function() {

		console.log('-------Clicked Checkbox--------');
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
	
//	afterEach function is like - Post Test, which will be called for each it block
	 afterEach(function() {
		 console.log('After Each Called');
		 browser.close();
		 });
	});