	describe('Code to interact with Angular JS elements', function() {

		it('Verify GetText ', function() {

		browser.get('https://material.angular.io/components/paginator/examples');
		//Click on Checkbox link and check the Checkbox
		element(by.linkText('Checkbox')).click();
		element(by.className('mat-checkbox-inner-container')).click();
		var checkbox =element(by.id('checkbox-label'));
		expect(checkbox.getText()).toEqual('Checkbox label');

		});

		});