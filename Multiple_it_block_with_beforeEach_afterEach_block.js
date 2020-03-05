		describe('Code to interact with Angular JS elements', function() {

		// beforeEach function is like - Pre Test, which will be called for each it block
			beforeEach(function() {
				console.log('Before Each Called');
				browser.get('https://material.angular.io/components/paginator/examples');
				});
			
			it('Verify Checkbox functionality', function()
			{
				console.log('-------Clicked Checkbox--------');
			//Click on Checkbox link and check the Checkbox
			element(by.linkText('Checkbox')).click();
			element(by.className('mat-checkbox-inner-container')).click();
			});
			
			it('Verify Inpout functionality', function()
			{
				console.log('-------Clicked Radio button--------');

			//Click on Radiobutton link and Select radio button
			element(by.linkText('Radio button')).click();	
			element(by.xpath("//label[@for='mat-radio-2-input']")).click();
			});
			
		//	afterEach function is like - Post Test, which will be called for each it block
			afterEach(function() {
				console.log('After Each Called');
				browser.restart();
				});
			});