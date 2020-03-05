describe('Code to interact with Non Angular JS application', function() {

	it('Login to Mercury Tours application', function() {

	browser.driver.get('http://newtours.demoaut.com/');
	browser.driver.findElement(by.linkText('SIGN-ON')).click();
	browser.driver.findElement(by.name('userName')).sendKeys("testing");
	browser.driver.findElement(by.name('password')).sendKeys("testing");
	browser.driver.findElement(by.name('login')).click();
	//expect(element(by.linkText('SIGN-OFF')).getText()).toEqual('SIGN-OFF'); //Correct expectation
	});
	});