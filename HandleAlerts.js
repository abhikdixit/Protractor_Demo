//import { browser, element, by, ExpectedConditions} from 'protractor'
//import { Alert } from 'selenium-webdriver';
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Alerts Accept operation', function() {
		browser.manage().timeouts().implicitlyWait(30000)
		browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
		element(by.name("alert")).click();
		let Alert = browser.switchTo().alert();
		// clicks 'OK' button
		Alert.accept();
	});

	it('Alerts Dismiss operation', function() {
		browser.manage().timeouts().implicitlyWait(30000)
		browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
		element(by.name("alert")).click();
		let Alert = browser.switchTo().alert();
		// clicks 'Cancel' button
		Alert.dismiss();
	});

		it('Alerts getText() operation', function() {
		browser.manage().timeouts().implicitlyWait(30000)
		browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
		element(by.name("confirmation")).click();
		let Alert = browser.switchTo().alert();
		// Capture Alert Message
		let alertActVal = Alert.getText();
		console.log(alertActVal);
	});

		it('Alerts sendKeys() operation', function() {
		browser.manage().timeouts().implicitlyWait(30000)
		browser.get("https://chercher.tech/practice/practice-pop-ups-selenium-webdriver");
		element(by.name("prompt")).click();
		let Alert = browser.switchTo().alert();
		// Send Message to Alert box
		Alert.sendKeys("hello");
	});
});