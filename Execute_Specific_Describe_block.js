			fdescribe('First Describe Section', function() {
				
				it('Verify Checkbox functionality', function()
				{
				browser.get('https://material.angular.io/components/paginator/examples');
				console.log('-First Describe block-');
				//Click on Checkbox link and check the Checkbox
				element(by.linkText('Checkbox')).click();
				element(by.className('mat-checkbox-inner-container')).click();
				});
			});
			describe('Second Describe Section', function() {				
				it('Verify Inpout functionality', function()
				{
					browser.get('https://material.angular.io/components/paginator/examples');
					console.log('-Second Describe block-');

				//Click on Radiobutton link and Select radio button
				element(by.linkText('Radio button')).click();	
				element(by.xpath("//label[@for='mat-radio-2-input']")).click();
				});

				});