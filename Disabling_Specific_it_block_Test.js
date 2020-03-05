describe('Code to interact with Angular JS elements', function() {

	xit('Launch Angular js Website', function() {

		console.log("This is Specific it block");
		browser.get("https://angularjs.org/")
	});
	
	it('Close Browser', function() {

		console.log("This is Non-Specific it block");
		browser.get('https://material.angular.io/components/paginator/examples');
	});
	
	});